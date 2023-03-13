import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  clockText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#99c9ff",
    marginTop: 10,
    padding: 15,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#99c9ff",
  },
  clock: {
    marginBottom: 20
  },
  itens: {
    flex: 0.3,
    backgroundColor: '#99c9ff',
    color: '#FFFFFF',
    padding: 20,
   
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 18
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    padding: 15,
    fontSize: 17,
    color: "#99c9ff"
  }
});

export {styles};
