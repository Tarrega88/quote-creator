import { StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  view: {
    fontSize: 10,
    backgroundColor: "#EDEFF2",
    // borderBottomRightRadius: "25",
    borderBottom: 1,
    // borderRight: 1,
    borderBottomColor: "#D1D5DB",
    borderRightColor: "#D1D5DB",
    width: "100%",
    paddingBottom: 4,
    // flexDirection: "row",
    // justifyContent: "flex-end",
  },
});

function FromToBox({ children }) {
  return <View style={styles.view}>{children}</View>;
}

export default FromToBox;
// "#F5F7FA" },
//   even: { backgroundColor: "#EDEFF2"
