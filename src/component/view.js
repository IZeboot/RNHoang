import {View, Text, TouchableOpacity, Image} from 'react-native'
import React, { Component } from 'react';
import {Icon} from 'react-native-elements' 
// import {connect} from 'react-redux' 
// import { editData } from '../actionType/action';

export default class NameView extends Component{
    constructor(props) {
        super(props);
        // this.state = {name: ""}    
    }

    render(){

        return(
            <View style = {{flex:1, height: 40, flexDirection:'row', justifyContent:'flex-start'}}>
                <Text style = {{alignSelf:'center', flex: 1}}>{this.props.data.title}</Text>

                <TouchableOpacity
                    style={{width: 20, height: 20, alignSelf:'center', right: 30}}
                    onPress={() => {
                        this.props.onPressEdit(this.props.index);
                        // this.props.dispatch(editData())
                    }}>
                    <Image
                        style = {{width: "100%", height: "100%"}}
                        source = {{uri:"https://cdn3.iconfinder.com/data/icons/simplius-pack/512/pencil_and_paper-512.png"}}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{width: 20, height: 20, alignSelf:'center', right: 15}}
                    onPress={() => {
                        this.props.onPressDelete(this.props.index);
                        // this.props.dispatch(editData())
                    }}>

                    <Icon
                        name = 'delete'
                        color = 'black'
                        size = {20}
                    />
                </TouchableOpacity>

            </View>
        )
    }
}
