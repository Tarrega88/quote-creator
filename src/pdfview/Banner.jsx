import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  document: {
    fontFamily: "Inter",
    height: "100vh",
  },

  row: { flexDirection: "row" },

  lightText: {
    color: "#F5F5F5",
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
});
function Banner({ data, imgSrc }) {
  const { myName, myAddress, myPhone, myEmail, myCity, myState, myCompany } =
    data;

  return (
    <View style={styles.banner} key={crypto.randomUUID()}>
      <View>
        <Image src={imgSrc} />
      </View>
      <View style={{ ...styles.lightText, alignItems: "flex-end" }}>
        <Text>{myName}</Text>
        <Text>{myCompany}</Text>
        <Text>{myPhone}</Text>
        <Text>{myEmail}</Text>
        <Text>{myAddress}</Text>
        <View style={{ ...styles.row }}>
          <Text>
            {myCity}
            {myState ? ", " : ""}
          </Text>
          <Text>{myState}</Text>
        </View>
      </View>
    </View>
  );
}

export default Banner;
