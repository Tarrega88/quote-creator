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

function PDFRender() {
  const { clientURL, quoteID } = useParams();
  const clientSelector = useSelector((state) => state.client.clients);

  const quoteData = clientSelector[clientURL].quotes[quoteID];

  Font.register({
    family: "Montserrat",
    src: "/fonts/Montserrat-Regular.ttf",
  });

  const styles = StyleSheet.create({
    document: {
      fontFamily: "Helvetica",
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

  const hasLaborExpense = Object.keys(quoteData.expenses.labor).length > 0;
  const hasMaterialExpense =
    Object.keys(quoteData.expenses.materials).length > 0;
  const hasRentalExpense = Object.keys(quoteData.expenses.rentals).length > 0;

  const hasExpense = hasLaborExpense || hasMaterialExpense || hasRentalExpense;

  return (
    <PDFViewer style={styles.viewer}>
      <Document style={styles.document}>
        <Page size="A4" style={styles.page}>
          <View style={styles.banner}></View>
          <View style={{ ...styles.subBanner, ...styles.row }}>
            <Text style={styles.subBannerText}>{dateText}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PDFRender;
{
  /* {hasExpense ? (
            <View style={styles.listBox}>
              <Text>Test</Text>
            </View>
          ) : null} */
}
