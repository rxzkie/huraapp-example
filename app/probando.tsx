import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

type HeaderProps = {
  onAulaVirtualPress: () => void;
};

const Header: React.FC<HeaderProps> = ({ onAulaVirtualPress }) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/88cdbf0c84131a4448aac516613cceb8cd5bf65f2b3c48af40e33dbda61d3568?placeholderIfAbsent=true&apiKey=3c20d6c1e709467191192b2d22fbf37e" }}
          style={styles.image}
        />
        <View style={styles.navContainer}>
          <View style={styles.navItem}>
            <Text>Inicio</Text>
            <View style={styles.activeIndicator} />
          </View>
          <View>
            <Text>Servicios</Text>
          </View>
        </View>
        <View style={styles.navLinks}>
          <Text>Nosotros</Text>
          <Text>Portafolio</Text>
          <Text>Contacto</Text>
        </View>
        <TouchableOpacity
          onPress={onAulaVirtualPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Aula Virtual</Text>
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0cc14d0970f7344a07d496e36da045b6d636b805c738c432483f3236b989719d?placeholderIfAbsent=true&apiKey=3c20d6c1e709467191192b2d22fbf37e" }}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 5,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: 1640,
    paddingHorizontal: 16,
  },
  image: {
    width: 297,
    height: undefined,
    aspectRatio: 5.29,
  },
  navContainer: {
    flexDirection: 'column',
    marginTop: 5,
  },
  navItem: {
    alignItems: 'center',
    marginTop: 1,
    fontWeight: 'bold',
  },
  activeIndicator: {
    backgroundColor: 'blue',
    height: 7,
    width: '100%',
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 'auto',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingVertical: 5,
    backgroundColor: 'skyblue',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: '600',
    color: 'white',
  },
  buttonIcon: {
    width: 24,
    height: 20,
    marginLeft: 8,
  },
});

export default Header;
