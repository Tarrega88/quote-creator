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
          <Banner data={myInfo} />
          <View style={{ ...styles.subBanner, ...styles.row }}>
            <Text style={styles.subBannerText}>{dateText}</Text>
          </View>
          <MainBody>
            <Expenses expenses={quoteData.expenses} />
          </MainBody>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PDFRender;
