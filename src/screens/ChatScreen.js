import {StyleSheet, Text, ImageBackground, FlatList, KeyboardAvoidingView } from "react-native";
import Message from "../components/Message";
import bg from "../../assets/images/BG.png"
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox/index.js'

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.bg}
  >
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
      data={messages}
      renderItem={({ item }) => <Message message={item} />} 
      style={{ padding: 10 }}
      inverted
      />
      <InputBox/>
    </ImageBackground>
  </KeyboardAvoidingView>
  );    
};
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "whitesmoke",
      padding: 5,
      alignItems: "center",
    },
    input: {
      fontSize: 18,
  
      flex: 1,
      backgroundColor: "white",
      padding: 5,
      paddingHorizontal: 10,
      marginHorizontal: 10,
  
      borderRadius: 50,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "lightgray",
    },
    send: {
      backgroundColor: "royalblue",
      padding: 7,
      borderRadius: 15,
      overflow: "hidden",
    },
  });

export default ChatScreen;