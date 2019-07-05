import React from 'react';
import {Text, View, StyleSheet, Image,TouchableOpacity, Linking} from 'react-native';
import Card from './Card';
class MovieDetail extends React.Component {
    _onPressButton(){
        return Linking.openURL('https://www.youtube.com/watch?v=op1QYwRAQpI&list=RDop1QYwRAQpI&start_radio=1');
    }
    render(){
        return(
            <Card>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Image style={styles.thumbailStyle} source={{uri:'http://image.phimmoi.net/film/47/poster.medium.jpg'}}/>
                    </View>
                    <View style={styles.headerTitleStyle}>
                        <Text>{this.props.movie.title}</Text>
                        <Text>{this.props.movie.releaseYear}</Text>
                    </View>
                </View>
                <View style={{marginTop: 10}}>
                    <Image style={styles.imageStyle} source={{uri:'http://image.phimmoi.net/film/47/poster.medium.jpg'}}/>
                </View>
                <View style={styles.touchableStyle}>
                    <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
                        <Text style={styles.textButtonStyle}>Play</Text>
                    </TouchableOpacity>
                </View>
            </Card>
           
        );
    }
    
}

const styles = StyleSheet.create({
    thumbailStyle:{
        width:50,
        height: 50
    },
    thumbailContainer:{
        alignItems:'center',
        marginLeft: 10,
        marginRight:10
    },
    headerTitleStyle:{
        marginLeft: 10,
        flexDirection:'column',
        justifyContent: 'space-around'
    },
    imageStyle:{
        height: 300,
        flex: 1,
    },
    touchableStyle:{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    button: {
        alignItems: 'center',
        borderColor: '#007aff',
        borderWidth: 2
      },
      textButtonStyle:{
          paddingBottom: 10,
          paddingTop: 10,
          color: '#007aff'
      }

});

export default MovieDetail;