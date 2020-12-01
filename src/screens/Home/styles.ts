import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#279AF1",
    paddingTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#000",
  },
  buttonsContainer: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#96C5F7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
    marginBottom: 20,
    width: width * 0.4,
    height: height * 0.1,
    borderRadius: 20,
    elevation: 10,
  },
  error: {
    color: "red",
    fontSize: 30,
    textTransform: "uppercase",
  },
});

export default styles;
