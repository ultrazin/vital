import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: { //cabeçalho
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#005400",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  logo: {//apple1
    width: 50,
    height: 50,
    marginRight: 10
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  feedContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  feedText: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 18
  },
  bottomBar: {//rodape
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#005400",
    paddingVertical: 10
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: "#005400",
    fontSize: 16,
  },
});