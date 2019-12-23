import React from 'react';
import {TouchableOpacity, FlatList, ScrollView, View,Text,Button,Alert} from 'react-native';
import Styles from './style'


const ListView = (props) => {
    
 

return( 
<ScrollView>    
<View>
<FlatList
data={props.todoList}
extraData={props.extraData}
keyExtractor={props.keyExtractor}

renderItem={({item: {title, id},index}) =>{

return(
        
     <View style={Styles.container} key={index}>
        <View style={Styles.listView}>

            <TouchableOpacity 
            
            >
                
                <Text style={Styles.itemtextstyling}>
                    {title}
                </Text>
     
            </TouchableOpacity>
                
        </View>

        <View style={{flex:1, borderBottomWidth:1, borderBottomColor:'#c1c7c3',justifyContent:'center'}}>
        
        <TouchableOpacity 
        onPress={()=> props.editTodo(id)}
        >
                
                <Text style={{fontWeight:'bold' , fontSize:15,}}>
                    Edit
                </Text>
     
            </TouchableOpacity>
        
        </View>

        <View style={{flex:1, borderBottomWidth:1, borderBottomColor:'#c1c7c3',justifyContent:'center'}}>

            <TouchableOpacity 
            onPress={() => props.onPress(id)}
            >
                
                <Text style={{fontWeight:'bold' , fontSize:15,color:'red', }}>
                    Remove
                </Text>
     
            </TouchableOpacity>
     
        </View>
     
     </View>

)

}
}

/>

</View>
</ScrollView>
)
}
export default ListView;