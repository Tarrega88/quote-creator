import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { getTotalExpenseCost, getTotalServiceCost } from "../helpers/getTotals";
import { formatUSD } from "../helpers/formatUSD";

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 2,
    // paddingTop: 16,
    // marginTop: 64,
    // marginBottom: 64,
    alignItems: "flex-end",
    paddingVertical: 16,
    // break: "auto",
    // flexWrap: "wrap",
    // wordBreak: "break-word",
    flexGrow: 1,
    // flexGrow: 1,
    // paddingBottom: 16,
  },
  box: {
    backgroundColor: "#EDEFF2",
    // flexGrow: 1,
    padding: 16,
    marginVertical: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    wordBreak: "break-word",
  },
});

function Total({ quoteData }) {
  const total =
    getTotalExpenseCost(quoteData.expenses) +
    getTotalServiceCost(quoteData.services);
  const formattedTotal = formatUSD(total);

  return (
    <View style={styles.view} wrap={false}>
      <View style={styles.box}>
        <Text>Total: </Text>
        <Text>{formattedTotal}</Text>
      </View>
    </View>
  );
}

export default Total;
