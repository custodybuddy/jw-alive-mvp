import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useAppContext, actions} from '../utils/AppContext';

const mockOpponents = ['Velociraptor', 'Indominus Rex', 'Stygimoloch'];

export default function BattleScreen() {
  const {state, dispatch} = useAppContext();

  const handleBattle = () => {
    const reward = 25;
    dispatch(actions.addCoins(reward));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Battle Simulation</Text>
      <Text style={styles.subtitle}>Incoming opponent:</Text>
      <Text style={styles.opponent}>{mockOpponents[state.coins % mockOpponents.length]}</Text>
      <View style={styles.stats}>
        <Text style={styles.stat}>Collected: {state.collectedDinosaurs.length}</Text>
        <Text style={styles.stat}>Coins: {state.coins}</Text>
      </View>
      <Button title="Complete Battle" onPress={handleBattle} color="#F6C90E" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B2A3D',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F6C90E',
    marginBottom: 16,
  },
  subtitle: {
    color: '#FFFFFF',
    marginBottom: 8,
  },
  opponent: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 24,
  },
  stats: {
    marginBottom: 24,
    alignItems: 'center',
  },
  stat: {
    color: '#FFFFFF',
  },
});
