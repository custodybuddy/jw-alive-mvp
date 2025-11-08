import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useAppContext} from '../utils/AppContext';

export default function CollectionScreen() {
  const {
    state: {collectedDinosaurs, dnaTotals, coins},
  } = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Coins: {coins}</Text>
      </View>
      <FlatList
        data={collectedDinosaurs}
        keyExtractor={item => item}
        ListEmptyComponent={() => (
          <Text style={styles.emptyState}>Collect dinosaurs on the map to populate your paddock.</Text>
        )}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.dinoName}>{item}</Text>
            <Text style={styles.dnaText}>DNA: {dnaTotals[item] || 0}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820',
  },
  header: {
    padding: 16,
    backgroundColor: '#1B2A3D',
  },
  headerText: {
    color: '#F6C90E',
    fontWeight: 'bold',
    fontSize: 18,
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#1F2E3D',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  dinoName: {
    color: '#F6C90E',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  dnaText: {
    color: '#FFFFFF',
  },
  emptyState: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 32,
  },
});
