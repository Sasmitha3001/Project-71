import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase'
import db from '../config'

export default class WriterScreen extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:''
        }
    }

    submitStory=async()=>{
        var storyDetails= db.collection('writer')

        storyDetails.add({
            'title':this.state.title,
            'author':this.state.author,
             'story':this.state.story
        })
        
        return alert("Story uplaoded successfully!!!")
        
    }

    render(){
        return(
            <KeyboardAvoidingView>
                <TouchableOpacity style={styles.header}>
                    <Text style={styles.headerText}>Writer's Corner</Text>
                </TouchableOpacity>

                <TextInput
                style={styles.titleInput}
                placeholder="Title"
                onChangeText={(text)=>this.setState({title:text})}
                value={this.state.title}
                />

                <TextInput
                style={styles.authorInput}
                placeholder="Author's name"
                onChangeText={(text)=>this.setState({author:text})}
                value={this.state.author}
                /> 

                <TextInput
                style={styles.storyInput}
                placeholder="Start writing here..."
                multiline={true}
                onChangeText={(text)=>this.setState({story:text})}
                value={this.state.story}
                />

                <TouchableOpacity style={styles.submitButton}
                onPress={()=>this.submitStory()}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity> 

            </KeyboardAvoidingView>
        )
    }
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:"black",
        width:"100%",
        height: 50,
        alignSelf:'center',
        alignItems:'center'
    },
    headerText:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30
    },
    titleInput:{
        width:500,
        height:25,
        borderColor:"#571B7E",
        borderWidth:2,
        alignSelf:'center',
        alignItems:'center',
        marginTop:20,
       
    },
    submitButton:{
        backgroundColor:"red",
        width:75,
        height:25,
        alignSelf:'center',
        alignItems:'center',
        marginTop: 15,
        borderRadius:20
    },
    submitButtonText:{
        color:"white",
        fontSize:15,
        textAlign:'center',
        alignSelf:'center',
        alignItems:'center'
    },
    authorInput:{
        width:500,
        height:25,
        borderColor:"#571B7E",
        borderWidth:2,
        alignSelf:'center',
        alignItems:'center',
        marginTop:20,
    },
    storyInput:{
        width:500,
        height:350,
        borderColor:'#FF0000',
        borderWidth:2,
        alignSelf:'center',
        alignItems:'center',
        marginTop:20,
    }
})