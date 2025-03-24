import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { capitalizeFirst } from "../../helpers/capitalize";
import { pluralToSingle } from "../../helpers/pluralToSingle";
import { formatUSD } from "../../helpers/formatUSD";

function getBText(
  paymentModel,
  formattedUSD,
  unitAmount,
  measurementUnit,
  paidByThe,
) {
  switch (paymentModel) {
    case "measurement":
      return `${formattedUSD} per ${
        unitAmount > 1
          ? `${unitAmount} ${measurementUnit}`
          : pluralToSingle[paymentModel][measurementUnit]
      }`;
    case "time":
      return `${formattedUSD} per ${paidByThe}`;
    case "flat":
      return `${formattedUSD}`;
    default:
      return "";
  }
}

function getCText(
  paymentModel,
  unitAmount,
  measurementUnit,
  paidByThe,
  multiple,
) {
  switch (paymentModel) {
    case "measurement":
      return unitAmount > 1
        ? `${unitAmount} ${measurementUnit}`
        : `${unitAmount} ${pluralToSingle[paymentModel][measurementUnit]}`;
    case "time":
      return `${multiple} ${multiple > 1 ? `${paidByThe}s` : paidByThe}`;
    case "flat":
      return "flat rate";
    default:
      return "";
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    paddingVertical: 2,
    paddingHorizontal: "6",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  odd: { backgroundColor: "#F5F7FA" },
  even: { backgroundColor: "#EDEFF2" },
  text: { fontSize: 11 },
  columnA: { width: "25%" },
  columnB: { width: "35%" },
  columnC: { width: "15%" },
  columnD: { width: "25%", textAlign: "right" },
});

function ExpenseRow({ odd, data }) {
  const styleChoice = odd ? styles.odd : styles.even;
  // console.log(data);
  const {
    costInDollars,
    paymentModel,
    expenseName,
    expenseType,
    multiple,
    paidByThe,
    measurementType,
    measurementUnit,
    unitAmount,
  } = data;

  const formattedUSD = formatUSD(costInDollars);

  //paymentModel : {  }
  // const bText = {
  //   measurement: `${formattedUSD} per ${unitAmount > 1 ? `${unitAmount} ${measurementUnit}` : pluralToSingle[paymentModel][measurementUnit]}`,
  //   time: `${formattedUSD} per ${paidByThe}`,
  //   flat: `${formattedUSD}`,
  // };

  // const cText = {
  //   measurement:
  //     unitAmount > 1
  //       ? `${unitAmount} ${measurementUnit}`
  //       : `${unitAmount} ${pluralToSingle[paymentModel][measurementUnit]}`,
  //   time: `${multiple} ${multiple > 1 ? `${paidByThe}s` : paidByThe}`,
  //   flat: "flat",
  // };

  return (
    <View style={{ ...styleChoice, ...styles.view }}>
      <Text style={{ ...styles.text, ...styles.columnA }}>
        {capitalizeFirst(data.expenseName)}
      </Text>
      <Text style={{ ...styles.text, ...styles.columnB }}>
        {getBText(
          paymentModel,
          formattedUSD,
          unitAmount,
          measurementUnit,
          paidByThe,
        )}
      </Text>
      <Text style={{ ...styles.text, ...styles.columnC }}>
        {getCText(
          paymentModel,
          unitAmount,
          measurementUnit,
          paidByThe,
          multiple,
        )}
      </Text>
      <Text style={{ ...styles.text, ...styles.columnD }}>
        {formatUSD(multiple * costInDollars)}
      </Text>
    </View>
  );
}

export default ExpenseRow;
