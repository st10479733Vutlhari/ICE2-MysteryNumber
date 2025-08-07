import { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, View,} from 'react-native';

export default function App() {
  
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random()*10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  const handleGuess = () => {
    const numGuess = parseInt(guess);
    setGuessCount(guessCount+1);
    if (numGuess<secretNumber) {
      setMessage('Too low, try again');
    }else if (numGuess>secretNumber){
      setMessage('Too high, try again');
    }else {
      setMessage('Correct the number was 5'); 
      setGameOver(true);
    }
    setGuess('');
  };

  const handleRestart = () => {
    setSecretNumber(Math.floor(Math.random() * 10) + 1);
    setGuess('');
    setMessage('');
    setGuessCount(0);
    setGameOver(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess Number App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number between 1 and 100"
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
        editable={!gameOver}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={handleGuess}
        disabled={gameOver}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.buttonText}>Submit Guess</Text>
      </TouchableHighlight>
      <Text style={styles.message}>{message}</Text>
      <Text>Guesses: {guessCount}</Text>
      {gameOver && (
        <TouchableHighlight
          style={styles.button}
          onPress={handleRestart}
          underlayColor="#DDDDDD"
        >
          <Text style={styles.buttonText}>Restart Game</Text>
        </TouchableHighlight>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    width: 200,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
  },
