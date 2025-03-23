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

function PDFRender() {
  const { clientURL, quoteID } = useParams();
  const clientSelector = useSelector((state) => state.client.clients);

  const quoteData = clientSelector[clientURL].quotes[quoteID];

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
      paddingLeft: "12",
      paddingRight: "12",
      paddingTop: "8",
      fontSize: "16",
    },
    subBanner: {
      backgroundColor: "#4A555F",
      width: "100vw",
      height: "4vh",
      color: "#F5F5F5",
      paddingLeft: "8",
      paddingRight: "12",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    subBannerText: {
      fontSize: "16",
      letterSpacing: "1",
    },
  });

  console.log("quoteData");
  console.log(quoteData);

  const dateText = new Date(Date.now()).toLocaleDateString("en-US");
  console.log(dateText);

  const { myName, myAddress, myPhone, myEmail, myCity, myState } = useSelector(
    (state) => state.myInfo,
  );

  const hasLaborExpense = Object.keys(quoteData.expenses.labor).length > 0;
  const hasMaterialExpense =
    Object.keys(quoteData.expenses.materials).length > 0;
  const hasRentalExpense = Object.keys(quoteData.expenses.rentals).length > 0;

  const hasExpense = hasLaborExpense || hasMaterialExpense || hasRentalExpense;

  return (
    <PDFViewer style={styles.viewer}>
      <Document style={styles.document}>
        <Page size="A4" style={styles.page}>
          <View style={styles.banner}>
            <View>
              <Text>A</Text>
            </View>
            <View style={{ ...styles.lightText, alignItems: "flex-end" }}>
              <Text>{myName}</Text>
              <Text>{myPhone}</Text>
              <Text>{myEmail}</Text>
              <Text>{myAddress}</Text>
              <Text>{myCity}</Text>
              <Text>{myState}</Text>
            </View>
          </View>
          <View style={{ ...styles.subBanner, ...styles.row }}>
            <Text style={styles.subBannerText}>{dateText}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PDFRender;
