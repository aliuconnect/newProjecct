import React, {Component} from 'react';
import {Text,ScrollView,View,Dimensions,ToastAndroid,Image,Linking} from 'react-native';
import axios from 'axios';
import ListView from './../../Components/FlatList'

import Cards from './../../Components/Card';
import CardSection from './../../Components/CardSeaction'
import Styles from './style'
import Buton from './../../Components/Button'


const {height , width} = Dimensions.get('screen')

export default class Home extends Component{
    constructor(props){
        super();
    this.state={
        albums:[]
    }
}
showErrorMessage (errorMsg) {
    ToastAndroid.show(errorMsg , ToastAndroid.LONG)
}


  
componentDidMount () {

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}))
        //.catch(error => this.showErrorMessage(error))


    }

    renderAlbumList(){
        return this.state.albums.map(album=> <Cards cardcontainer={Styles.cardcontainer} key={album.title}>
            <CardSection cardsectioncontainer = {Styles.cardsectioncontainer} key={album.title}>
            <View style={Styles.thumbnailContainerStyle}>
            <Image 
            style={Styles.thumbnailImageStyling}
            source={{uri: album.thumbnail_image}}/>
            </View>

            <View style={Styles.viewTextStyling}>
             <Text style = {Styles.textStyling} key ={album.title}>{album.title}</Text> 
             <Text  key ={album.title}>{album.artist}</Text> 
             </View>
             </CardSection>
             <CardSection cardsectioncontainer={Styles.cardsectioncontainer}>
             <Image style={Styles.imageStyle} source={{uri:album.image}}/>
             </CardSection>
             <CardSection><Buton buttonstyle={Styles.buttonstyle} onPress={ () => Linking.openURL(album.url) }>Buy Now</Buton></CardSection>
            </Cards>)
    }


    render(){
        
        return(
           
         
         
      <ScrollView>

      {this.renderAlbumList()}
      </ScrollView>
        
        

)}

}