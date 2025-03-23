import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  view: { height: 8 },
  odd: { backgroundColor: "#333333" },
  even: { backgroundColor: "#481382" },
  text: {},
});

function ExpenseRow({ odd }) {
  const styleChoice = odd ? styles.odd : styles.even;
  return (
    <View style={{ ...styleChoice, ...styles.view }}>
      <Text></Text>
    </View>
  );
}

export default ExpenseRow;
