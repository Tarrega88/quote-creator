import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  view: {
    // borderBottom: 1,
    // borderRight: 1,
    padding: 16,
    flexDirection: "column",
    rowGap: 1.5,
  },
  preparedBy: {
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 4,
  },
});

function From({ myInfo }) {
  const {
    myName,
    myCompany,
    myAddress,
    myCity,
    myState,
    myZip,
    myPhone,
    myEmail,
  } = myInfo;
  return (
    <View style={styles.view}>
      <Text style={styles.preparedBy}>Prepared By:</Text>
      <Text>{myName}</Text>
      <Text>{myCompany}</Text>
      <Text>{myAddress}</Text>
      <Text>{`${myCity}${myCity && myState && ", "}${myState} ${myZip}`}</Text>
    </View>
  );
}

export default From;
