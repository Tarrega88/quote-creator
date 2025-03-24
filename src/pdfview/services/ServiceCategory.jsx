import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { capitalizeFirst } from "../../helpers/capitalize";
import ServiceRow from "./ServiceRow";

function ServiceCategory({ title, data }) {
  const keys = Object.keys(data);
  const styles = StyleSheet.create({
    categoryText: {
      fontSize: 14,
      fontWeight: "bold",
      paddingBottom: 6,
      paddingTop: 4,
      paddingLeft: 4,
    },
    view: {
      paddingTop: 8,
    },
    titleRow: {
      flexDirection: "row",
      fontSize: 12,
      fontWeight: "bold",
      paddingHorizontal: 6,
      // paddingLeft: 6,
      // paddingRight: 6,
      paddingVertical: 2,
    },
    colA: { width: "25%" },
    colB: { width: "35%" },
    colC: { width: "15%" },
    colD: { width: "25%", textAlign: "right" },
  });

  return (
    <View style={styles.view} wrap={false}>
      <Text style={styles.categoryText}>{capitalizeFirst(title)}</Text>
      <View style={styles.titleRow}>
        <Text style={styles.colA}>Item</Text>
        <Text style={styles.colB}>Rate</Text>
        <Text style={styles.colC}>Quantity</Text>
        <Text style={styles.colD}>Line Total</Text>
      </View>
      {keys.map((e, i) => (
        <ServiceRow key={i} odd={i % 2} data={data[e]} />
      ))}
    </View>
  );
}

export default ServiceCategory;
