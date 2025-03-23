import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { capitalizeFirst } from "../../helpers/capitalize";

const styles = StyleSheet.create({
  view: { flexDirection: "row", paddingTop: "2", paddingBottom: "2" },
  odd: { backgroundColor: "#F5F7FA" },
  even: { backgroundColor: "#EDEFF2" },
  text: { fontSize: 14 },
});

function ExpenseRow({ odd, data }) {
  const styleChoice = odd ? styles.odd : styles.even;
  console.log(data);
  console.log(data.expenseName);
  return (
    <View style={{ ...styleChoice, ...styles.view }}>
      <Text style={styles.text}>{capitalizeFirst(data.expenseName)}</Text>
    </View>
  );
}

export default ExpenseRow;
