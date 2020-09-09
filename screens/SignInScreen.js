import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text,View,StyleSheet, TextInput, Animated, TouchableOpacity,Dimensions} from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';


class SignInScreen extends Component{


    constructor(props) {
        super(props);
        this.state = { 
            typing_email:false,
            typing_user:false,
            typing_pass:false,
            typing_conPass:false,
            animation_login:new Animated.Value(width-40),
            enable:true,
            isValidUser:true,
            isValidPassword:true
         };
    }
      
    _foucus(value){
      
            if(value=="email"){
                this.setState(
                    {
                        typing_email:true,
                        typing_user:false,
                        typing_pass:false,
                        typing_conPass:false
                    }
                )
            }

            else  if(value=="user"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:true,
                        typing_pass:false,
                        typing_conPass:false
                    
                    }
                )
            }

            else  if(value=="pass"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:false,
                        typing_pass:true,
                        typing_conPass:false
                    
                    }
                )
            }

            else  if(value=="passC"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:false,
                        typing_pass:false,
                        typing_conPass:true
                    }
                )
            }
     
    }

 
    _typing(){
        return (
            <TypingAnimation 
              dotColor="#6f1282"
              style={{marginRight:25}}
            
            />
          );
      
      }
      _animation(){
          Animated.timing(
              this.state.animation_login,{
                  toValue:40,
                  duration:250
              }
          ).start();
    
          setTimeout(()=>{
              this.setState({
                  enable:false,
                  typing_email:false,
                  typing_user:false,
                  typing_pass:false,
                  typing_conPass:true
              })
          },150);
      }
  
    render(){
        const width= this.state.animation_login;
    return(
        
        <View  style={ styles.container } >
            
            <LinearGradient  colors={["#eba9cf","#6f1282"]} 
             start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.6}}
             locations={[0,0.5,0.6]}
            style={ styles. header } >
                <Text style={ styles.textSignup}> Welcome Back</Text>
                <Text style={styles.text} >Sign in to continue </Text>
           </LinearGradient>

           <View style={styles.footer}>
             <Text style={[styles.title,{marginTop:40}]}>E-mail</Text>
             <View style={styles.action}>
              <FontAwesome
                 name="user-o"
                 color="#05345a"
                 size={20}
                 style={{paddingTop:10,paddingEnd:4}}
              
              />

                 <TextInput
                 placeholder="Enter your email.."
                 style={styles.inputText}
                 onFocus={()=>this._foucus("email")}
                 />
                  {this.state.typing_email ?
                 this._typing()
                  :null }
                 </View>       

                 <Animated.View
                   animation="fadeInLeft" duration={500}
                 > 
                 <Text style={styles.ErrMsg}>E-mail must follow E-mail formate </Text>
                 </Animated.View>
                 <Text style={[styles.title,{marginTop:20}]}>Password</Text>
             <View style={styles.action}>
             <FontAwesome
                 name="lock"
                 color="#05345a"
                 size={20}
                 style={{paddingTop:10,paddingEnd:4}}
                 


              />
                 <TextInput
                 secureTextEntry
                 placeholder="********"
                 style={styles.inputText}
                 onFocus={()=>this._foucus("pass")}
                 />
            {this.state.typing_pass ?
                 this._typing()
                  :null }
            </View>
    
        <Animated.View
            animation="fadeInLeft" duration={500}
            > 
            <Text style={styles.ErrMsg}>Password must be 8characters long . </Text>
            </Animated.View>
            <View>
               <Text style={{color:'blue' ,fontSize:12,marginTop:10}}>Forgot Password ?</Text>
           </View>
            <TouchableOpacity
           
           onPress={()=>this._animation()}>
           
           <View style={styles.Butt_cont}>
               <Animated.View style={[styles. anmation,{width}]}>
                {this.state.enable?
               <Text style={styles.logText}>Sign In</Text>
               :
               <FontAwesome
               name="check"
                color="white"
                size={20}
               /> }
                
               </Animated.View>
           </View>
           </TouchableOpacity>
  
         <View style={styles.signUp}>
               <Text style={{color:'black'}}> New User? </Text>
               <Text style={{color:'blue'}}>Sign Up?</Text>

           </View>


           </View>
        </View>
    );}

}


const width = Dimensions.get('window').width;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:"white",
            justifyContent:'center'
        },

        
        header:{
            backgroundColor:"white",
            flex:1.6,
            justifyContent:"center",
            alignItems:"center",
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 200,
            
           
            
        },

        footer:{
            backgroundColor:"white",
           flex:2,
           padding:20,
           paddingTop:10
           
           

        },
        textSignup:{
            color:"#fff",
            fontWeight:"bold",
            fontSize:30,
            paddingEnd:30,
         
        },
        text:{
            color:"#f7c202",
            fontSize:14,
           
        },

        title:{
         color:"black",
         fontWeight:"bold",
            fontSize:16,
        },

        action:{
            flexDirection:"row",
            borderBottomWidth:1,
            borderBottomColor:"#f2f2f2",
            marginTop:10
        },

        inputText:{
          flex:1,
          marginTop:2,
          paddingBottom:2,
          color:"gray"

        },
      
        animation:{
            backgroundColor:'#93278f',
            paddingVertical:10,
            marginTop:30,
            borderRadius:100,
            justifyContent:'center',
            alignItems:'center'
        },
        textLogin:{
          color:'white',
          fontWeight:'bold',
          fontSize:18

        },
        signUp:{
            flexDirection:'row',
            justifyContent:'center',
            marginBottom:35
        },
        Butt_cont:{
            justifyContent:'center',
            alignItems:'center'
        },
         anmation:{
             backgroundColor:"#6f1282",
             paddingVertical:10,
             marginTop:40,
             marginBottom:30,
             borderRadius:100,
             justifyContent:'center',
             alignItems:'center'
         },       
        
         logText:{
             color:'white',
             fontWeight:'bold',
             fontSize:18
         },
         ErrMsg:{
             color:"red",
             fontSize:14

         }


     } );






    export  default SignInScreen