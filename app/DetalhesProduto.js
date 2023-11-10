import React, { useState } from 'react';
import {View, Text, Image, ScrollView, Button} from 'react-native';
import styles from '../src/estilos/styles';
import MenuInicial from "./MenuInicial.js";
import { MaterialIcons } from '@expo/vector-icons';



const DetalhesProduto = ({route, navigation}) => {
const { descricao, nome, preco, imagem } = route.params;

  navigation.setOptions({
    headerTitle: nome,
  })

  return (
    <ScrollView>
    <View style={styles.containerVinhoDescricao}>
      <Image
        style={styles.imgVinhoDescricao}
        source={{
        uri: imagem,
        }}
      />  
    <Text style={styles.descPreco}>
      {preco}
    </Text>


    </View>

    <View style={styles.descricaoVinho}>
      <Text style={styles.descVinho}>Descrição do produto:</Text>
      
      <Text style={styles.textVinho}>
        {descricao}
      </Text>

      <Button style={styles.descBtn} color='black'
        title="Adicionar ao carrinho"

      />
    </View>

    </ScrollView>


  )
}

export default DetalhesProduto;