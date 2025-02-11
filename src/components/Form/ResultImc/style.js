import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 20,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  numberImc: {
    fontSize: 48,
    color: "blue",
    fontWeight: "bold",
  },
  information: {
    fontSize: 18,
    color: "#FF0043",
    fontWeight: "bold",
  },
  boxShareButton: {
    width:"100%",
    alignItems:"center",
    marginBottom:10
  },
  share: {
    backgroundColor:"#1877f2",
    borderRadius:50,
    paddingBottom:5,
    paddingTop:5
  },
  shareText: {
    color:"#FFF",
    fontWeight:"bold",
    paddingHorizontal:30
  },
});

export default styles;
