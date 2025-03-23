import { Text, View } from "@react-pdf/renderer";
import { capitalizeFirst } from "../../helpers/capitalize";

function ExpenseCategory({ title }) {
  return (
    <View>
      <Text>{capitalizeFirst(title)}</Text>
    </View>
  );
}

export default ExpenseCategory;
