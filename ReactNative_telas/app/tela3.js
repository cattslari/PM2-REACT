import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Tela 3</Text>
        <Text style={styles.subtitle}>Terceira tela</Text>
        
        <Link href='/'style = {styles.link}>Voltar</Link>
        <Link href='/tela1'style = {styles.link}>Ir para Tela 1</Link>
        <Link href='/tela2'style = {styles.link}>Ir para Tela 2</Link>
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
    color: "#7FFFD4"
  },
  subtitle: {
    fontSize: 36,
    color: "#66CDAA",
  },
  link:{
   color: "white",
  },
});
