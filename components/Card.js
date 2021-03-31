import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, Button as ButtonRN, Alert } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';

import { argonTheme } from '../constants';


class Card extends React.Component {
  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback>
          <Block flex style={imgContainer}>
            <Image source={{uri: item.image}} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Block flex style={styles.cardDescription}>
            <Text size={14} style={styles.cardTitle}>{item.title}</Text>
            <Text size={12} style={styles.cardText}>Calculate the time period of pendulum</Text>
            <Button
              style={styles.button}
              onPress={this.props.clickHandler} 
            >
              {item.cta}
            </Button>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 130,
    marginBottom: 8,
    borderRadius: 16
  },

  cardTitle: {
    fontWeight: "bold",
    color: "#2f3542",
    marginTop: 6
  },
  
  cardText: {
    marginTop: 2
  }, 

  cardDescription: {
    flex: 1.25,
    padding: theme.SIZES.BASE,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 16,
    elevation: 1,
    overflow: 'hidden',
    width: "30%"
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: '100%',
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.01,
    elevation: 2,
  },
  cta: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: 16
  },
  button: {
    marginTop: 20,
    height: 38,
    fontSize: 11
  }
});

export default withNavigation(Card);