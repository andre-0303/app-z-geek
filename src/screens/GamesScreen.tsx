import { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import GameCard from '../components/GameCard';

export type Game = {
  id: string;
  title: string;
  description: string;
  image_url: string;
};

export default function GamesScreen() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api-jogos-uxuc.onrender.com/api/games')
      .then(res => res.json())
      .then(data => {
        setGames(data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0EA5E9" />
        <Text style={styles.loadingText}>Carregando jogos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <GameCard game={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D1364', // fundo roxo escuro harmonizando com home
    padding: 10,
  },
  list: {
    paddingBottom: 20,
  },
  cardWrapper: {
    flex: 1,
    margin: 5,
    minHeight: 320,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D1364', // mesma cor do container pra consistência
  },
  loadingText: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
