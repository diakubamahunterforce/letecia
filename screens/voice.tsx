import React from "react";

import { Text,TouchableOpacity, View ,Image } from "react-native"; 


export  default   function  Voice(){

    return(
        

        <View   style={{alignItems:'center',marginTop:80}}> 

       

          
        <TouchableOpacity style={{backgroundColor:'blue',width:200,height:200,borderRadius:200,alignItems:'center',marginTop:80}}>
        <Image source={require('./assets/microphone5.png')}/>
             
        </TouchableOpacity>
       
         





        </View>
   




    );
}