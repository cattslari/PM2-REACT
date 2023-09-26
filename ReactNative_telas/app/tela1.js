import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Tela 1</Text>
        <Text style={styles.subtitle}>Primeira tela</Text>
        <Link href='/'style = {styles.link}>Voltar</Link>
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
    backgroundColor: "black",

  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#FF00FF",
  },
  subtitle: {
    fontSize: 36,
    color: "#8B008B",
  },
  link:{
    color: "white",
   },
});
