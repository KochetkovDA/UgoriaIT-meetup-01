import React, { Component } from 'react';
import "./presentation.style.css";
import avatarPhoto from "../img/avatar.png";
import BusinessCard from "../components/BusinessCard/businessCard";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS


const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Oswald",
  secondary: "Helvetica"
});

export default class Presentation extends Component  {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} Layout bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Это - React JS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Сказ о том как junior, ReactJS готовил
          </Text>
          <BusinessCard img={avatarPhoto}
                        name="Кочетков Данил"
                        position="junior front-end developer"
                        company='ГСК "Югория"' />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="secondary" caps>Что такое ReactJS?</Heading>
          <List>
            <ListItem>Не фреймворк</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
          <Text size={6} textAlign="left" textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}