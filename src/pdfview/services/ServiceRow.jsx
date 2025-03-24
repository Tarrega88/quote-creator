import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { formatUSD } from "../../helpers/formatUSD";
import { capitalizeFirst } from "../../helpers/capitalize";
import { pluralToSingle } from "../../helpers/pluralToSingle";

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
          ? `${unitAmount} ${measurementUnit.replaceAll("_", " ")}`
          : pluralToSingle[paymentModel][measurementUnit.replaceAll("_", " ")]
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
        ? `${unitAmount} ${measurementUnit.replaceAll("_", " ")}`
        : `${unitAmount} ${pluralToSingle[paymentModel][measurementUnit.replaceAll("_", " ")]}`;
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
    paddingHorizontal: 6,
    // paddingLeft: 6,
    // paddingRight: 4,
    alignItems: "center",
  },
  odd: { backgroundColor: "#F5F7FA" },
  even: { backgroundColor: "#EDEFF2" },
  text: { fontSize: 11 },
  columnA: { width: "25%" },
  columnB: { width: "35%" },
  columnC: { width: "15%", paddingLeft: 1 },
  columnD: { width: "25%", textAlign: "right" },
});

function ServiceRow({ odd, data }) {
  const styleChoice = odd ? styles.odd : styles.even;
  // console.log(data);
  //cost in dollars => pay
  //expenseName => serviceName
  //expenseType => serviceCategory
  const {
    pay,
    category,
    paymentModel,
    serviceName,
    serviceCategory,
    multiple,
    paidByThe,
    measurementType,
    measurementUnit,
    unitAmount,
  } = data;

  const formattedUSD = formatUSD(pay);

  return (
    <View style={{ ...styleChoice, ...styles.view }}>
      <Text style={{ ...styles.text, ...styles.columnA }}>
        {capitalizeFirst(data.serviceName)}
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
        {formatUSD(multiple * pay)}
      </Text>
    </View>
  );
}

export default ServiceRow;

{
  /*



function ExpenseRow({ odd, data }) {

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

    */
}
