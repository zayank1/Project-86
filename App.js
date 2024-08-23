import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.TitleText}>Family Tree App!</Text>
      <StatusBar style="auto" />

      <TouchableOpacity style = {styles.button}>
     <Text style = {styles.buttonText}>Father</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button}>
     <Text style = {styles.button2Text}>Mother</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button}>
     <Text style = {styles.button3Text}>Brother</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleText:{
    fontSize:40,
        fontWeight:"bold",
        color:"blue"
  },
  button:{
    flex:0.12,
justifyContent:"center",
alignItems:"center",
margin:10,
marginLeft:30,
marginRight:30,
borderRadius:100,
padding:90,
backgroundColor:"green"
},
buttonText:{
  fontSize:40,
fontWeight:"bold",
color:"red",
justifyContent:"center",
alignItems:"center"
},
button2Text:{
  fontSize:40,
fontWeight:"bold",
color:"yellow",
justifyContent:"center",
alignItems:"center"
},
button3Text:{
  fontSize:40,
fontWeight:"bold",
color:"lightblue",
justifyContent:"center",
alignItems:"center"
}
     
});


