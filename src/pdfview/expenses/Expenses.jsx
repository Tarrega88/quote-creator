import { StyleSheet, Text, View } from "@react-pdf/renderer";
import ExpenseCategory from "./ExpenseCategory";
import { getTotalExpenseCost } from "../../helpers/getTotals";
import { formatUSD } from "../../helpers/formatUSD";

function Expenses({ expenses }) {
  const keys = Object.keys(expenses);

  const keysThatHaveData = keys.filter(
    (e) => Object.values(expenses[e])?.length > 0,
  );

  const totalExpense = getTotalExpenseCost(expenses);

  const styles = StyleSheet.create({
    titleFont: {
      fontWeight: "bold",
      fontSize: "16",
    },
    total: {
      flexDirection: "row",
      fontSize: 12,
      fontWeight: "bold",
      columnGap: "4",
      paddingTop: "12",
      paddingHorizontal: "4",
      justifyContent: "flex-end",
    },
  });
  return (
    <View>
      <Text style={styles.titleFont}>Expenses</Text>
      {keysThatHaveData.map((e, i) => (
        <ExpenseCategory key={i} title={e} data={expenses[e]} />
      ))}
      <View style={styles.total}>
        <Text>Total Expenses:</Text>
        <Text>{formatUSD(totalExpense)}</Text>
      </View>
    </View>
  );
}

export default Expenses;
