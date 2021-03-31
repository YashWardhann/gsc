import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions
} from "react-native";
//galio
import { Block, Text, Button, theme } from "galio-framework";
//argon
import { articles, Images, argonTheme } from "../constants/";
import { Card } from "../components/";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Pendulum",
    description:
      "Experiment to calculate the time period of a simple pendulum",
    image:
      "https://images.unsplash.com/photo-1611784601826-d17011218c7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "31st March, 2021"
  },
  {
    title: "Salt Analysis",
    description:
      "Experiment to determine the unknown salt given.",
    image:
      "https://images.unsplash.com/photo-1561328399-f94d2ce78679?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "29th March, 2021"
  },
  {
    title: "Titration",
    description:
      "Experiment to calculate the time period of a simple pendulum",
    image:
      "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "22th March, 2021"
  },
];

class Articles extends React.Component {
  renderProduct = (item, index) => {
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
        onPress={() => navigation.navigate("Pro", { product: item })}
      >
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={{ uri: item.image }}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productPrice}
            >
              {item.price}
            </Text>
            <Text center size={34}>
              {item.title}
            </Text>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productDescription}
            >
              {item.description}
            </Text>
            <Button style={styles.button}>View Report</Button>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          View Reports
        </Text>
        <Block flex>
          <Block>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2
              }}
            >
              {categories &&
                categories.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  };

  renderAlbum = () => {
    const { navigation } = this.props;

    return (
      <Block
        flex
        style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
      >
        <Text bold size={16} style={styles.title}>
          Examinations
        </Text>
        <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
          <Block flex style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text
              size={14}
              color={theme.COLORS.HEADER}
              onPress={() => navigation.navigate("Home")}
            >
              Physics - 31st March
            </Text>
            <Text
              size={12}
              color={theme.COLORS.PRIMARY}
              onPress={() => navigation.navigate("Home")}
            >
              View Report
            </Text>
          </Block>
          <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {Images.Viewed.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={{ uri: img }}
                  style={styles.albumThumb}
                />
              </Block>
            ))}
          </Block>
        </Block>

        <Block style={styles.examBlock}>
          <Block flex style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text
              size={14}
              color={theme.COLORS.HEADER}
              onPress={() => navigation.navigate("Home")}
            >
              Physics - 31st March
            </Text>
            <Text
              size={12}
              color={theme.COLORS.PRIMARY}
              onPress={() => navigation.navigate("Home")}
            >
              View Report
            </Text>
          </Block>
          <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {Images.Viewed.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={{ uri: img }}
                  style={styles.albumThumb}
                />
              </Block>
            ))}
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {this.renderCards()}
          {this.renderAlbum()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE - 10,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    backgroundColor: "#f5f6fa",
    paddingBottom: 20
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE/2
    // paddingBottom: theme.SIZES.BASE * 2,
  },
  button: {
    marginTop: 24
  },
  examBlock: {
    marginTop: 21,
    marginHorizontal: theme.SIZES.BASE * 2 
  }
});

export default Articles;
