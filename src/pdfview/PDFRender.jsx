import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../registerFonts";
import MainBody from "./MainBody";
import Expenses from "./expenses/Expenses";
import Banner from "./Banner";
import Services from "./services/Services";
import Total from "./Total";
import FromToBox from "./FromToBox";
import From from "./From";
import To from "./To";

const styles = StyleSheet.create({
  document: {
    fontFamily: "Inter",
    height: "100vh",
  },
  page: {
    flexDirection: "column",
    // backgroundColor: "#F9F9F6",
    // backgroundColor: "#E4E4E4",
  },
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  lightText: {
    color: "#F5F5F5",
  },
  viewer: {
    width: "100%",
    height: "100vh",
  },
  listBox: {
    border: "2",
    width: "50%",
  },
  sectionTitle: {
    fontSize: 24,
  },
  banner: {
    backgroundColor: "#003366",
    width: "100vw",
    height: "16vh",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "16",
    paddingRight: "16",
    paddingTop: 12,
    fontSize: 10,
  },
  subBanner: {
    backgroundColor: "#4A555F",
    width: "100vw",
    height: "4vh",
    color: "#F5F5F5",
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  subBannerText: {
    fontSize: "14",
    // letterSpacing: "1",
  },
});

function PDFRender() {
  const { clientURL, quoteID } = useParams();
  const clientSelector = useSelector((state) => state.client.clients);
  const clientData = useSelector((state) => state.client.clients)[clientURL];
  const quoteData = clientSelector[clientURL].quotes[quoteID];

  const dateText = new Date(Date.now()).toLocaleDateString("en-US");
  const myInfo = useSelector((state) => state.myInfo);

  const hasLaborExpense = Object.keys(quoteData.expenses.labor).length > 0;
  const hasMaterialExpense =
    Object.keys(quoteData.expenses.materials).length > 0;
  const hasRentalExpense = Object.keys(quoteData.expenses.rentals).length > 0;

  const hasExpense = hasLaborExpense || hasMaterialExpense || hasRentalExpense;

  return (
    <PDFViewer style={styles.viewer} key={crypto.randomUUID()}>
      <Document style={styles.document}>
        <Page size="A4" style={styles.page}>
          <Banner
            data={myInfo}
            imgSrc={myInfo.myImage}
            key={crypto.randomUUID()}
          />
          <View style={{ ...styles.subBanner, ...styles.row }}>
            <Text style={styles.subBannerText}>{dateText}</Text>
          </View>
          <View style={{ ...styles.row, justifyContent: "center" }}>
            <FromToBox>
              <From quoteData={quoteData} myInfo={myInfo} />
            </FromToBox>
            <FromToBox>
              <To clientData={clientData} />
            </FromToBox>
          </View>
          <MainBody>
            <Services services={quoteData.services} />
            <Expenses expenses={quoteData.expenses} />
            <Total quoteData={quoteData} />
          </MainBody>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PDFRender;
