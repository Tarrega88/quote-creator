import { StyleSheet, Text, View } from "@react-pdf/renderer";

function MainBody({ children }) {
  const styles = StyleSheet.create({
    mainBody: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 12,
      flexGrow: 1,
    },
  });

  return <View style={styles.mainBody}>{children}</View>;
}

export default MainBody;
