import { Image, StyleSheet } from 'react-native';

const imagens = {
  1: require('../../assets/dados/dado1.png'),
  2: require('../../assets/dados/dado2.png'),
  3: require('../../assets/dados/dado3.png'),
  4: require('../../assets/dados/dado4.png'),
  5: require('../../assets/dados/dado5.png'),
  6: require('../../assets/dados/dado6.png'),
};

export default function Dado({ valor }) {
  return (
    <Image
      source={imagens[valor]}
      style={styles.dado}
      accessible
      accessibilityLabel={`Dado com valor ${valor}`}
    />
  );
}

const styles = StyleSheet.create({
  dado: { width: 72, height: 72, marginHorizontal: 8 },
});
