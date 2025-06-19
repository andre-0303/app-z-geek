import { useState } from 'react';
import { 
  View, Text, Image, StyleSheet, Modal, Pressable, ScrollView, Dimensions, TouchableOpacity 
} from 'react-native';
import { Game } from '../screens/GamesScreen';

type Props = {
  game: Game;
};

const screenWidth = Dimensions.get('window').width;
const CARD_HEIGHT = 320;
const IMAGE_CONTAINER_HEIGHT = 180;

export default function GameCard({ game }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.card, { height: CARD_HEIGHT }]}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: game.image_url }} 
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {game.title}
      </Text>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ver Descrição</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalTitle}>{game.title}</Text>
              <Text style={styles.modalText}>{game.description}</Text>
            </ScrollView>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'space-between',
    height: CARD_HEIGHT,
  },
  imageContainer: {
    backgroundColor: '#0f172a',
    borderRadius: 10,
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    height: IMAGE_CONTAINER_HEIGHT,
  },
  image: {
    width: '95%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  button: {
    backgroundColor: '#7E57C2',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 999,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 20,
    width: '85%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  modalText: {
    color: 'white',
    marginBottom: 15,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  buttonClose: {
    backgroundColor: '#7E57C2',
    paddingVertical: 10,
    borderRadius: 999,
    alignItems: 'center',
    marginTop: 10,
  },
});
