import { View, Text, Image, StyleSheet } from "react-native";

const ChatListItem = ({ chat }) => {
    console.log(chat);
  return (
    <View style={styles.container}>
        <View>
     <Image source={{ uri: chat.user.image }}
     style={styles.image}
     />
     </View>
     <View style={styles.content}>
         <View style={styles.row}>
         <Text numberOfLines={1} style={styles.name}> {chat.user.name} </Text>
         <Text style={styles.subTitle}> {chat.lastMessage.createdAt} </Text>
        </View>
     <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
container:{
 flexDirection:'row',
 marginHorizontal: 10,
 marginVertical: 5,
 height: 70,   
},
image: {
    width: 60,
    height: 60,
    borderRadius: 30,
},
content:{
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgrey',
},
row:{
    flexDirection: 'row',
    marginBottom: 5,
},
name:{
    flex: 1,
    fontWeight: 'bold',
},
subTitle:{
    color:'grey',
},    
})
export default ChatListItem;