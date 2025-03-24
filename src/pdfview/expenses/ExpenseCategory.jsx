import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { capitalizeFirst } from "../../helpers/capitalize";
import ExpenseRow from "./ExpenseRow";

const expenseRowTitles = {
  materials: ["Material", "Cost", "per"],
  labor: [],
  rentals: [],
};

function ExpenseCategory({ title, data }) {
  const keys = Object.keys(data);

  const styles = StyleSheet.create({
    categoryText: {
      fontSize: 14,
      fontWeight: "bold",
      paddingBottom: 6,
      paddingLeft: 1,
    },
    view: {
      paddingTop: 8,
    },
    titleRow: {
      flexDirection: "row",
      fontSize: 12,
      fontWeight: "bold",
      paddingLeft: 6,
      paddingRight: 7,
      paddingVertical: 2,
    },
    colA: { width: "25%" },
    colB: { width: "35%" },
    colC: { width: "15%" },
    colD: { width: "25%", textAlign: "right" },
  });

  return (
    <View style={styles.view}>
      <Text style={styles.categoryText}>{capitalizeFirst(title)}</Text>
      <View style={styles.titleRow}>
        <Text style={styles.colA}>Item</Text>
        <Text style={styles.colB}>Rate</Text>
        <Text style={styles.colC}>Quantity</Text>
        <Text style={styles.colD}>Line Total</Text>
      </View>
      {keys.map((e, i) => (
        <ExpenseRow key={i} odd={i % 2} data={data[e]} />
      ))}
    </View>
  );
}

export default ExpenseCategory;
