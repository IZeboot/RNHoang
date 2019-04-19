import React, { Component } from 'react';
// import { Button } from 'react-native-elements';
import { View, FlatList, TouchableOpacity, Image, Text} from 'react-native';
import {connect} from 'react-redux'
import NameView from '../component/view'
import { deleteData, sagaGetData, getNewsData } from '../actionType/action'
import { Icon } from 'react-native-elements'

class Screen1 extends Component {
    constructor(props) {
        super(props);
    }
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps.data)
    // }

    onPressEditElement(i){
        const { navigate } = this.props.navigation;
        navigate('Screen2', {index:i})
    }

    onPressDeleteElement(i){
        this.props.dispatch(deleteData(i))
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style = {{flex: 1, top: 20, left: 10}}>
                <FlatList
                    style = {{flex: 1}}
                    data = {this.props.data}
                    renderItem = {({item, index}) => <NameView data = {item} index = {index} onPressEdit = {(i)=>this.onPressEditElement(i)} onPressDelete = {(i)=> this.onPressDeleteElement(i)}/>}
                    // renderItem = {({item}) => <Text style = {{height: 40}}>{item}</Text>}
                />

                <TouchableOpacity
                    style={{position: "absolute", width: 50, height: 50, bottom: 50, right: 30}}
                    onPress={() => {
                        // navigate('Screen2')
                        this.props.dispatch(sagaGetData())
                    }}>
                    <Image
                        style = {{width: "100%", height: "100%"}}
                        source = {{uri:"https://cdn3.iconfinder.com/data/icons/rest/30/add_order-512.png"}}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={{position: "absolute", width: 50, height: 50, bottom: 50, right: 100}}
                    onPress={() => {
                        // navigate('Screen2')
                        this.props.dispatch(getNewsData())
                    }}>
                    <Image
                        style = {{width: "100%", height: "100%"}}
                        source = {{uri:"https://cdn3.iconfinder.com/data/icons/rest/30/add_order-512.png"}}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.addData.data
});

export default connect(mapStateToProps)(Screen1)