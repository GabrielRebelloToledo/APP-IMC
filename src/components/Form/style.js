import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "space-around",
    bottom: 0,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
    color: "#FF0043",
    fontSize: 24,
    fontWeight: "bold",
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  formInput: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#FFF",
  },

  erroMenssage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },

  exibitionImc: {
    width: "100%",
    height: "50%",
  },

  listImcs: {
    marginTop: 20,
  },
  resultImcItem: {
    fontSize: 24,
    color: "red",
    height: 50,
    width: "100%",
    paddingRight: 20,
  },
  resultImcItemList: { colo: "red", fontSize: 16 },
});

export default styles;
