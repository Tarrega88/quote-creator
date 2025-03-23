import { Text, View } from "@react-pdf/renderer";
import { capitalizeFirst } from "../../helpers/capitalize";

function ExpenseCategory({ title, data }) {
  console.log(title);
  if (!data) return null;
  if (!title) return null;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default ExpenseCategory;
