import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    async componentDidMount() {

    }



    render() {

        return (
            <View style={styles.container}>

                <Text>Logged in!</Text>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});
