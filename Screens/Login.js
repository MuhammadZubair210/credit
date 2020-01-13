import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';
var FloatingLabel = require('../Compoent/FloatingInput');
const { height } = Dimensions.get("screen")
import * as firebase from 'firebase';
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Visible: false,
            email: '',
            password: ''
        };
    }

    async componentDidMount() {

    }

    onBlur() {
        console.log('#####: onBlur');
    }

    SignIn = async () => {
        if (this.state.email != '' && this.state.password != '') {

            //SingIn with email and pass.
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((response) => {
                // setLoading(false)

                //Navigate.
                this.props.navigation.navigate("Home")
            }).catch(function (error) {
                Alert.alert(error.message);
            });
        } else {
            Alert.alert("Fill Form Properly!");
        }
    }


    render() {

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/logo.jpg')}
                    />

                    <Text style={styles.Heading}>Log in</Text>
                    {/* <Item style={{ height: 55, marginBottom: 20 }} regular last>
                    <TextInput placeholder="Username" style={{ flex: 1, marginHorizontal: 15, fontSize: 16 }} />
                </Item> */}
                    <View style={{ marginBottom: 20, borderWidth: 0.5, borderColor: '#c8c8c8', height: 60 }} />
                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        // value='john@email.com'
                        onBlur={this.onBlur}
                        onChangeText={(email) => this.setState({ email })}
                    >Email</FloatingLabel>

                    <View style={{ marginBottom: 20, borderWidth: 0.5, borderColor: '#c8c8c8', height: 60, marginTop: 30 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <FloatingLabel
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            style={styles.formInput}
                            // value='john@email.com'
                            onBlur={this.onBlur}
                            password={this.state.Visible ? false : true}
                            onChangeText={(password) => this.setState({ password })}
                        >Password
                </FloatingLabel>
                        <TouchableOpacity style={{ marginTop: -60, marginLeft: -35 }} onPress={() => this.setState({ Visible: !this.state.Visible })}>
                            <Feather style={{}} name={this.state.Visible ? ("eye") : ("eye-off")} size={24} color="#c8c8c8" />
                        </TouchableOpacity>
                    </View>
                    <View>

                        <TouchableOpacity onPress={this.SignIn.bind(this)} style={styles.Button}>
                            <Text style={{ color: '#fff', fontWeight: '700' }}>Log in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")} style={{backgroundColor:"#fff"}}>
                            <Text style={{ alignSelf: 'center', fontSize: 16 }}>Create an account</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView >
 
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        height:height
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        alignSelf: 'center',
        height: 190,
        width: 210,
        marginTop: '20%'
    },
    Heading: {
        fontSize: 26,
        fontWeight: '700',
        marginVertical: 20
    },
    labelInput: {
        color: '#c8c8c8',
    },
    formInput: {
        marginTop: -85,
        width: '100%'
        // flex:1
        // borderBottomWidth: 1.5,
        // marginLeft: 20,
        // borderColor: '#c8c8c8',
    },
    input: {
        borderWidth: 0,
        borderColor: '#c8c8c8',
        fontSize: 16,
    },
    Button: {
        borderRadius: 3,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14d39f',
        marginVertical: 30,
    }
});
