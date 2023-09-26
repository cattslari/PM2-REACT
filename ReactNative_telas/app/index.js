import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Pagina inicial</Text>
        <Link href='/tela1'style = {styles.link}>Ir para Tela 1</Link>
        <Link href='/tela2'style = {styles.link}>Ir para Tela 2</Link>
        <Link href='/tela3'style = {styles.link}>Ir para Tela 3</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    color: "#FF1493",
    backgroundColor: "black",

  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    color: "#FF69B4",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#FF1493",
  },
  subtitle: {
    fontSize: 36,
    color: "#FF69B4",
  },
  link:{
    color: "white",
   },
});
