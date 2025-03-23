import { StyleSheet, Text, View } from "@react-pdf/renderer";

function Expenses({ expenses }) {
  const styles = StyleSheet.create({
    box: {
      border: "1",
    },
  });
  return (
    <View style={styles.box}>
      <Text>Expenses</Text>
    </View>
  );
}

export default Expenses;
