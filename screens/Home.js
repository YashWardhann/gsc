import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';

import Images from "../constants/Images";

const { height, width } = Dimensions.get('screen');

let renderVideo = true; 

class Home extends React.Component {
  renderArticles = () => {
    return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}>
            
          <Block flex>
            <Card item={articles[0]} horizontal clickHandler={() => {
              this.props.navigation.navigate("Pendulum");
            }}/>
            <Card item={articles[1]} horizontal /> 
            <Card item={articles[2]} horizontal />
          </Block>
        </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
