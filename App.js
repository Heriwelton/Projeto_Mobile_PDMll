import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./src/estilos/styles";
import MenuInicial from "./app/MenuInicial";
import DetalhesProduto from "./app/DetalhesProduto";



const MENSAGEM_CAMPO_VAZIO = "Ops!! Existem campos deixados em branco!";
const EMAIL_PADRAO = "eve1.holt@reqres.in";
const SENHA_PADRAO = "cityslicka";  



const Stack = createNativeStackNavigator();



function TelaLogin({ navigation }) {
  const [email, setemail] = useState(EMAIL_PADRAO);
  const [senha, setsenha] = useState(SENHA_PADRAO);

const ValidarDetalhesProduto = async (navigation) => {
    navigation.navigate('DetalhesProduto')
}

const ValidarLogin = async (email, senha, navigation ) => {
  
  if (email.trim().length === 0 || senha.trim().length === 0) {
    alert(MENSAGEM_CAMPO_VAZIO);
  return
  }
  if (SENHA_PADRAO == senha && EMAIL_PADRAO == email) {
    navigation.navigate('MenuInicial')
  }else{
    alert('dados incorretos')
  } 
}


return (
    <View style={styles.container}>
    <ImageBackground style={styles.imagemFundo} source={require("./fundo.png")}>
        <Text style={styles.tituloLogo}>Vinhedo Virtual</Text>
        <Image style={styles.logo} source={require("./logo.PNG")} />
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder={'Digite seu e-mail'}
          placeholderTextColor="grey"
          clearButtonMode="always"
          value={email}
          onChangeText={setemail}
          maxLength={200}
        />

        <Text>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder={'Digite sua senha'}
          placeholderTextColor="grey"
          clearButtonMode="always"
          secureTextEntry={true}
          value={senha}
          onChangeText={setsenha}
          maxLength={200}
        />
        <View style={styles.button}>
          <Button style={styles.btnCustom} color='black'
            onPress={() => ValidarLogin(email, senha, navigation)}
            title="Entrar"
          />
        </View>
        
        <View style={{ marginTop: 10 }}>
        </View>
      </ImageBackground>
    </View>


);
}

const App = () => {
return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName="TelaLogin">
    <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ title: 'Login' }}/>
    <Stack.Screen name="MenuInicial" component={MenuInicial} options={{ title: 'VINHEDO VIRTUAL', headerStyle: {backgroundColor: '#D3D3D3'} }}/>
    <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} options={({route}) => ({ title: 'Detalhes do produto'})}/>
  </Stack.Navigator>
</NavigationContainer>
);
}

export default App;


