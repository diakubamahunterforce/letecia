import React from "react";
import { View ,Text ,TouchableOpacity, StyleSheet ,TextInput } from "react-native";

 export  default  function  remote(){

  return(
   
   <View  style={{width:'100%', height:'89%' ,background:'#fffff'}}>
  
  <View style={{flexDirection:'row' ,justifyContent:'center', marginTop:30 }}>
 
  


 <View style={{backgroundColor:'white', borderRadius:30}}>
  <TextInput placeholder="search"  style={{borderRadius:'30' ,color:'black',borderColor:'blue',
  width:289 ,height:30
    
  }

}>

  </TextInput>
 </View>

  </View>
  <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
    <TouchableOpacity style={sytles.buttonContext1}> <Text style={sytles.textconteiner}> avançar
       </Text></TouchableOpacity>
    <TouchableOpacity style={sytles.buttonContext1}>
      <Text style={sytles.textconteiner}>
        recuar
      </Text>
    </TouchableOpacity>
  </View>

    
    <View   style={{backgroundColor:'black' ,     width:200, height:200  ,borderRadius:200, 
   
     
     marginTop:'50%', margin:'20%', justifyContent:'space-evenly'
   
    
    }}>
 
                   <View style={{alignItems:'center'}} >
                    
                    <TouchableOpacity>
                    <Text  style={ sytles.textconteiner}>
                      VOL +
                    </Text>
                    </TouchableOpacity>
                    </View>
                   
      
            <View style={{flexDirection:'row' ,justifyContent:'space-between' }}>
              <TouchableOpacity>
                <Text  style={sytles.textconteiner}>CH+</Text>
              </TouchableOpacity>  
            <TouchableOpacity >
              <Text  style={sytles.textconteiner}>
                 OK
              </Text>
            </TouchableOpacity>
              <TouchableOpacity>
                  <Text   style={sytles.textconteiner} >
                    CH-
                  </Text>
              </TouchableOpacity>
            </View>

            <View style={{alignItems:'center'}}>
                    <TouchableOpacity>

                    <Text style={ sytles.textconteiner
                    }>
                      VOL -
                    </Text>
                    </TouchableOpacity>
                    </View>
    </View>


  <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
    <TouchableOpacity style={sytles.Buttoncontext}> <Text style={sytles.textconteiner}> Pausa
       </Text></TouchableOpacity>
    <TouchableOpacity style={sytles.Buttoncontext}>
      <Text style={sytles.textconteiner}>
        gravar
      </Text>
    </TouchableOpacity>
  </View>

  


   </View>
  );
 }

 const  sytles=StyleSheet.create({

  textconteiner:{

    color:'white',
    fontWeight:'900',
    fontSize:16
    
  },
  
  Buttoncontext:{

     backgroundColor:'black',
     borderRadius:30,
     width:100, height:40,
     alignItems:'center'
  },
  buttonContext1:{
    backgroundColor:'black',
    borderRadius:30,
    width:100, height:40,
    alignItems:'center',
    marginTop:10

  }




 })