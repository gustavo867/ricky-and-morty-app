import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.85,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#084B83",
    width: width * 0.9,
    height: height * 0.85,
    borderRadius: 20,
    elevation: 15,
    paddingTop: 10,
  },
  title: {
    fontWeight: "400",
    fontSize: 25,
    color: "#FFF",
  },
  name: {
    fontWeight: "400",
    fontSize: 27,
    color: "#FFF",
    letterSpacing: 1.2,
    width: width * 0.8,
    textAlign: "center",
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 230 / 2,
    borderColor: "#FFFFFF",
    borderWidth: 2.5,
    marginTop: 10,
    alignSelf: "center",
  },
  status: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 20,
    fontWeight: "400",
  },
  informationTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 10,
  },
  smallText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "400",
  },
  left: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default styles;
