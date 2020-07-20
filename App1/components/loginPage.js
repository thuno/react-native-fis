import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginPage = () => {
    const[email, emailState] = useState('')
    const[password, passwordState] = useState('')

    return(
        <View style={styles.container}>
        <Image 
        source={require('./image/castle.jpg')}
        style={styles.img}
        resizeMode='cover'
        />
        <View style={styles.inputcontainer}>
            <Icon name='user-circle-o' size={30} style={{paddingHorizontal: 5}}  />
            <TextInput
            placeholder='Email'
            style={{flex: 1}}
            value={email}
            onChangeText={event => emailState(event)}
            />
        </View>
        <View style={styles.inputcontainer}>
            <Icon name='eye-slash' size={30} style={{paddingHorizontal: 5}} />
            <TextInput
            placeholder='Password'
            style={{flex: 1}}
            value={password}
            onChangeText={event => passwordState(event)}
            type='password'
            />
        </View>
        <Button 
        icon='login' 
        mode="contained"
        style={{width: '40%'}}
        labelStyle={{fontSize: 20}}
        onPress={() => {console.log(email, password)}}>Login</Button>
        <Text style={styles.horizontalLine}>--------------------------------------</Text>
        <Text style={styles.forgetPass}>Quên mật khẩu ?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
    },
    img: {
        height: '35%',
        width: '100%',
    },
    inputcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
    },
    horizontalLine: {
        fontSize: 30,
    },
    forgetPass: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        color: '#0000EF',
        textDecorationLine: 'underline',
    }
})

export default LoginPage;