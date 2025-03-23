import { StyleSheet, Text, View } from "@react-pdf/renderer";
import ExpenseCategory from "./ExpenseCategory";

function Expenses({ expenses }) {
  const keys = Object.keys(expenses);

  const keysThatHaveData = keys.filter(
    (e) => Object.values(expenses[e])?.length > 0,
  );

  const styles = StyleSheet.create({
    box: {},
    titleFont: {
      fontWeight: "bold",
      fontSize: "16",
    },
  });
  return (
    <View>
      <Text style={styles.titleFont}>Expenses</Text>
      {keysThatHaveData.map((e, i) => (
        <ExpenseCategory key={e} title={e} data={expenses[e]} />
      ))}
    </View>
  );
}

export default Expenses;
