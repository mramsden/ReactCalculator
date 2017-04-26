import React, { Component } from 'react'
import {
  AppRegistry,
  StatusBar,
  Text,
  View
} from 'react-native'

import Style from './Style'
import InputButton from './InputButton'

const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

class ReactCalculator extends Component {

  constructor (props) {
    super(props)
    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    }
  }

  render () {
    return (
      <View style={Style.rootContainer}>
        <StatusBar
          barStyle='light-content'
        />
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }

  _renderInputButtons () {
    return inputButtons.map((row, r) => {
      let inputRow = row.map((input, i) => {
        return <InputButton value={input}
                            highlight={this.state.selectedSymbol === input}
                            key={`${r}-${i}`}
                            onPress={this._onInputButtonPressed.bind(this, input)}
                            />
      }, this)

      return (
        <View style={Style.inputRow} key={`row-${r}`}>{inputRow}</View>
      )
    }, this)
  }

  _onInputButtonPressed (input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleStringInput(input)
    }
  }

  _handleNumberInput (number) {
    let inputValue = (this.state.inputValue * 10) + number
    this.setState({ inputValue })
  }

  _handleStringInput (string) {
    switch (string) {
      case '/':
      case '*':
      case '+':
      case '-':
        return this.setState({
          selectedSymbol: string,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        })
      case '=':
        let symbol = this.state.selectedSymbol,
            inputValue = this.state.inputValue,
            previousInputValue = this.state.previousInputValue

        if (!symbol) { return }

        return this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null
        })
    }
  }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator)
