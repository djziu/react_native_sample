import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LoginScreen extends Component {

    static navigationOptions = {
        header: null,
    }

    _doLogin(){
        this.props.navigation.replace('TabNavigator');
    }

    render(){
        return(
          <View style={styles.container}>
             <View style={styles.titleArea}>
                 <Text style={styles.title}>React Sample</Text>
            </View> 
            <View style={styles.formArea}>
                <TextInput placeholder={'ID'} style={styles.textForm} />
                <TextInput placeholder={'Password'} style={styles.textForm}/>
            </View>
            <View style={styles.btnArea}>
                <TouchableOpacity
                onPress = {this._doLogin.bind(this)}
                style ={styles.btn}
                >
                <Text style={styles.btnText}>Log In</Text>

                </TouchableOpacity>
            </View>
          </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"center",
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),

    },
    titleArea : {
        width:'100%',
        alignItems:'center',
        padding: wp('10%')
    },
    title : {
        fontSize: wp('8%')
    },
    formArea : {
        width: '100%',
        alignItems:'center'
    },
    textForm : {
        borderWidth:0.5,
        width:'100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
    },
    btnArea : {
        width: '100%',
        height: hp('7%'),
    },
    btn:{
        width:'100%',
        height:'100%',
        backgroundColor:'skyblue',
        alignItems:'center',
        justifyContent:'center'
    },
    btnText:{
        
        color:'white'
    }

})