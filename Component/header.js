import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
export default function Header() {
  return (
     <View style={styles.header}>
       <MaterialIcons name="keyboard-backspace" size={28} color="black" />
        <View style={styles.text}>
          <Text style={styles.textInput}>PASTA</Text>
        </View>
        <EvilIcons name="search" size={30} color="black" style={styles.icon}  />
     </View>
  );
}

const styles = StyleSheet.create({
  header: {
      height: 40,
      marginTop:20,
      flexDirection: "row",
      borderBottomWidth:1,
      justifyContent: "space-between",
      
  },
  text: {
     paddingTop:5,
     },
     textInput: {
        fontWeight: "bold",
        fontSize:17,
     },
     icon: {
         paddingTop:5
     }
});