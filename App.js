import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Dimensions,Text, TouchableOpacity, View } from 'react-native';
import Header from './Component/header';
import { AntDesign } from '@expo/vector-icons';
export default function App() {
    const [people , setPeople] = useState([
      {name: 'Spaghetti alle Vongole in Bianco' , date: '25 Dec 2020',count: '600' ,shares:'750',images: require('./assets/bia.jpeg') ,key:'1'},
      {name:'Spaghetti Puttanesca(Spaghetti..' ,date:'26 June 2020' ,count: '800' ,shares:'280' ,images:require('./assets/puttanesca.jpg') ,key:'2'},
      {name: 'Cacio e pepe(Spaghetti With Black..',date: '21 Feb 2020' ,count: '890',shares:'698',images: require('./assets/aglio.jpg') ,key:'3'},
      {name: 'Spaghetti Aglio e Olio',date:'21 Mar 2020' ,count: '670' ,shares:'900' ,images: require('./assets/pepe.jpg') ,key:'4'}
    ]);
  return (
    <View style={styles.container}>
    <View >
    <Header />
    </View>
    <View style= {styles.contains}>
      <FlatList 
        data={people}
        renderItem ={({item}) => (
        
          <TouchableOpacity>
              <View style={styles.food}>
                  <ImageBackground source= {item.images} style={styles.inside} >
                   <View style = {styles.names}>
                     <Text style={styles.nameDesign}>{item.name} </Text>
                    <View style= {styles.design}>
                     <Text style={styles.dateDesign}>{item.date} </Text>
                     <View style= {styles.review}>
                     <AntDesign name="hearto" size={24} color="white" style={styles.heart} />
                      <Text style={styles.countDesign}>{item.count} </Text>
                      <View style={styles.icon}>
                      <AntDesign name="sharealt" size={24} color="white" style={styles.share}/>
                      <Text style={styles.shareDesign}>{item.shares} </Text>
                    </View>
                    </View>
                    </View>
                               </View>
                  </ImageBackground>
                  
              </View>
               </TouchableOpacity>
               
           )}
      />
      </View>
    </View>
  );
}
const{ width , height }= Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'#fff',
   justifyContent:"center",
   flexDirection:"column",
   width:width,
   height:height
  },
   inside:{
     height:160
       },
       names:{
         paddingTop:100
       },
       nameDesign:{
         color:'#fff',
         fontSize:22,
         fontWeight: "bold",
         fontFamily: "serif",
         paddingLeft:5
       },
       design: {
         flexDirection:"row"
       },
       dateDesign:{
         color: '#fff',
         paddingLeft:5,
         fontWeight:"800",
         paddingTop:5
       },
       countDesign: {
         color: '#fff',
         fontWeight: 'bold',
         paddingTop:3,
         fontSize:16
       },
       review: {
         flexDirection:'row',
         justifyContent: "center",
        },
       heart: {
         paddingLeft:170,
         paddingRight:10
       },
       icon: {
         flexDirection:'row'
       },
       share:{
        paddingLeft: 10,
       },
       shareDesign: {
         color:'#fff',
         fontWeight:"bold",
         paddingLeft:10,
         paddingTop:3,
         fontSize: 16
       }
});
