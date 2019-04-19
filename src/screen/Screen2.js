import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, TextInput } from 'react-native';
import {connect} from 'react-redux';
import {addData, editData} from './../actionType/action'

class Screen2 extends Component {
  constructor(props) {
    super(props);
    const { params} = this.props.navigation.state;
    this.state = {name: params ? this.props.data[params.index] : ""}
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(text) {
    this.setState({ name: text })
  }
  
  render() {

    return (
      <View style = {{flex: 1, borderWidth: 1}}>
        
        <TextInput
          style = {{top: 100, height:40, width: '40%', alignSelf: "center", borderWidth: 1}}
          maxLength = {15}
          value = {this.state.name}
          onChangeText = {(text) => this.handleNameChange(text)}
        />

        <Button
          title = 'Save'
          type = 'outline'
          buttonStyle = {{ top: 150, width: 100, height: 50, alignSelf:'center'}}
          onPress = {() => {
            if(this.state.name.length){
              this.props.navigation.navigate('Screen1');

              if(this.props.navigation.state.params){
                this.props.dispatch(editData(this.state.name, this.props.navigation.state.params.index))
                return;
              }
              this.props.dispatch(addData(this.state.name))
              
            }
            else{
              alert("Please enter something")
            }
          }}
        />
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  data: state.addData.data
});

export default connect(mapStateToProps)(Screen2)
