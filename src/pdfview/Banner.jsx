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
      <View>{imgSrc ? <Image src={imgSrc} /> : null}</View>
      <View
        style={{
          ...styles.lightText,
          alignItems: "flex-end",
          paddingTop: 8,
          rowGap: 2,
        }}
      >
        <Text>{myCompany}</Text>
        <Text>{myEmail}</Text>
        <Text>{myPhone}</Text>
      </View>
    </View>
  );
}

export default Banner;
