import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
  rootContainer: {
    flex: 1
  },

  displayContainer: {
    flex: 4,
    backgroundColor: '#193441',
    justifyContent: 'center'
  },

  displayText: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20
  },

  inputContainer: {
    flex: 8,
    backgroundColor: '#3e606f'
  },

  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },

  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#01aa9d'
  },

  inputButtonHighlighted: {
    backgroundColor: '#193441'
  },

  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Style
