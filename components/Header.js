import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = (props) =>{
    const { textStyle, viewStyle} =  styles;
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'#f8f8f8',
        alignItems: 'center',
    },
    textStyle:{
        fontSize: 20
    }
});

export default Header;

