import { StyleSheet, Text, View } from "@react-pdf/renderer";
import ServiceCategory from "./ServiceCategory";
import { getTotalServiceCost } from "../../helpers/getTotals";
import { formatUSD } from "../../helpers/formatUSD";

function Services({ services }) {
  const keys = Object.keys(services);
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
      paddingTop: 16,
      paddingHorizontal: "4",
      justifyContent: "flex-end",
    },
  });

  //   console.log(services);
  const totalService = getTotalServiceCost(services);

  return (
    <View>
      <Text style={styles.titleFont}>Services</Text>
      {keys.map((e, i) => (
        <ServiceCategory key={i} title={e} data={services[e]} />
      ))}
      <View style={styles.total}>
        <Text>Total Services:</Text>
        <Text>{formatUSD(totalService)}</Text>
      </View>
    </View>
  );
}

export default Services;
