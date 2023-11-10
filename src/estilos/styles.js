import { StyleSheet } from "react-native";

export default StyleSheet.create({
button: {
  backgroundColor: 'grey',
  color: 'white',
  fontSize: 15,
  width: 150,
  height: 35,
  marginTop: 20,
  marginHorizontal: 20,
  textAlign: 'center',
  alignSelf: 'center',
},
btnCustom: {
  borderRadius:20,
},
  container: {
  flex: 1,
  justifyContent: 'center',
  padding: 5,

},
  input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
},
logo: {
  height:150,
  width: 120,
  resizeMode: 'stretch',
  textAlign: 'center',
  alignSelf: 'center',
  margin: 20
},
tituloLogo: {
  fontSize: 28,
  textTransform: 'uppercase',
  textAlign:'center',
  fontWeight:'bold',
},
logoVinho: {
    width: 80,
    height: 120,
    marginTop: 50,
    alignSelf: 'center',
},
titulo: {
    margin: 12,
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
},
price: {
    margin: 12,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',  
},
paragraph: {
  margin: 12,
  padding: 10,
  fontSize: 14,
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'Justify',

},
vinhoContainer: {
  width: '44%',
  borderWidth: 1,
  margin: 9,
  marginRight: 10,
  
},
imagemFundo: {
  flex: 1,
  resizeMode: "cover",
  width: '100%',
  height: '100%',
  justifyContent: 'center',
},
imgHeader: {
  justifyContent: 'center',
  resizeMode: "cover",
  width: '94%',
  marginRight: 9,
  marginLeft: 9

},
textHeader: {
  margin: 9,
  textTransform: "uppercase",

},
text: {
  fontSize: 20,
  fontWeight: 'bold',
},
line: {
  borderBottomColor: '#000',
  borderBottomWidth: 2
},
imgFooter: {
  height: 50,
  width: 35,
  resizeMode: "stretch",
  alignSelf: 'center',
},
textFooter: {
  margin: 9,
  textTransform: "uppercase",
  justifyContent: 'center',
  alignSelf: 'center',
},
formTextFooter: {
  fontSize: 18,
  fontWeight: 'bold',

},
imgVinhoDescricao: {
    height: 330,
    width: 220,
    margin: 20,
    alignSelf: 'center',
    borderWidth: 1,
},
containerVinhoDescricao: {
  borderTopWidth: 2,
  borderBottomWidth: 2
  
},
descricaoVinho: {
  margin: 9,
  justifyContent: 'center',
  textAlign: "justify",
},
textVinho: {
  fontSize: 18,
  marginBottom: 20,
  marginTop: 15
},
descVinho: {
  textTransform: "uppercase",
  paddingBottom: 7,
  paddingTop: 7,
  fontSize: 20,
  alignSelf: 'center',
  fontWeight: "bold"

},
descPreco: {
  paddingBottom: 13,
  fontSize: 20,
  alignSelf: 'center',
  fontWeight: "bold"
},
descBtn: {
  width: '10%'
}
});