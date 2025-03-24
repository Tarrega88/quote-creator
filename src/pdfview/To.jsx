import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  view: {
    // borderBottom: 1,
    // borderRight: 1,
    padding: 16,
    flexDirection: "column",
    rowGap: 1.5,
  },
  preparedFor: {
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 4,
  },
});

function To({ clientData }) {
  const { clientName, clientCity, clientAddress, clientState, clientZip } =
    clientData;

  return (
    <View style={styles.view}>
      <Text style={styles.preparedFor}>Prepared For:</Text>
      <Text>{clientName}</Text>
      <Text>{clientAddress}</Text>
      <Text>{`${clientCity}${clientCity && clientState && ", "}${clientState} ${clientZip}`}</Text>
    </View>
  );
}

export default To;
