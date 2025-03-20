import React from "react";
import { View, Text, Image, StyleSheet , } from "react-native";

export default function home() {

  return (<main style={{background:'black',width:'100%',height:'87%'}}>


    
    <View>
      <Text style={{fontWeight:'1000', color:'red',  margin:10 , fontSize:25,
      

      }}> Bem Vindo</Text>
    </View>
    <View style={styles.conteiner}>

      <Image source={require('./assets/youtube1.png')} />
      <Image source={require('./assets/netflix1.png')} style={styles.netflixImagen} />
      <View>

   <Text  style={{fontWeight:'1000',color:'red' ,width:'100%' ,height:'100%'  }}>
       Controle Sua   Televisão  
   </Text>
    </View>
    </View>
    






  </main>)
}

const styles = StyleSheet.create(

  {

    conteiner: {
      alignItems:'center',
      justifyContent:'space-evenly',
      margin:40

      

    },
    netflixImagen: {
      marginTop:-100

     
    }
  }
)