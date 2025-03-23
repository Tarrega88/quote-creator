import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { capitalizeFirst } from "../../helpers/capitalize";
import ExpenseRow from "./ExpenseRow";

function ExpenseCategory({ title, data }) {
  const keys = Object.keys(data);

  const styles = StyleSheet.create({
    categoryText: {
      fontSize: 14,
      fontWeight: "bold",
    },
  });

  return (
    <View>
      <Text style={styles.categoryText}>{capitalizeFirst(title)}</Text>
      {keys.map((e, i) => (
        <ExpenseRow key={i} odd={i % 2} data={data[e]} />
      ))}
    </View>
  );
}

export default ExpenseCategory;
