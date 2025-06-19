import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Z-Geek</Text>
            <Text style={styles.subtitle}>App de Indicação de jogos</Text>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Games')}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Ver Jogos</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#67159C',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 36,
        marginBottom: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold', 
    },
    subtitle: {
        color: '#bbb',
        marginBottom: 30,
        fontSize: 17,
    },
    button: {
        backgroundColor: '#1D4ED8',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 980, 
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        marginBottom: 20,
        marginVertical: -10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
    }
});
