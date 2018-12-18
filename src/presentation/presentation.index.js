import React, { Component } from 'react';
import "./presentation.style.css";

//import component for example
import ToDoApp from "../components/To-Do/ToDo"
import BusinessCard from "../components/BusinessCard/businessCard";

// import pictures
import avatarPhoto from "../img/avatar.png";
import jsxBabelImg from "../img/jsx_with_babell.png"
import MVCImg from "../img/MVC.png"
import FLUXImg from "../img/FLUX.png"

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Image,
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
      <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="bar" theme={theme}>

        <Slide transition={["slide"]} Layout bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Поговорим о React JS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Сказ о том как junior, ReactJS осваивал
          </Text>
          <BusinessCard img={avatarPhoto}
                        name="Кочетков Данил"
                        position="junior front-end developer"
                        company='ГСК "Югория"'
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Что такое ReactJS?</Heading>
          <List textColor="primary">
            <ListItem>Не MVC фреймворк - Библиотека</ListItem>
            <ListItem>Отвечает только за представление</ListItem>
            <ListItem>Virtual DOM</ListItem>
            <ListItem>Компонентный подход</ListItem>
            <ListItem>JSX (JavaScript XML)</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="primary">
        <Heading size={4} textColor="tertiary" caps> MVC vs Flux </Heading>
        <Text textAlign="left" margin="10px 0 0" textColor="secondary">
            MVC  Flux
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="primary">
        <Heading size={4} textColor="tertiary" caps> MVC </Heading>
          <Image margin="35px 0 0" src={MVCImg} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="primary">
        <Heading size={4} textColor="tertiary" caps> Flux </Heading>
          <Image margin="35px 0 0" src={FLUXImg} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" caps> Подробнее про JSX </Heading>
          <Text textAlign="left" margin="10px 0 0" textColor="secondary">
            JSX - это просто синтаксический сахар для функции React.createElement(component, props, ...children).
          </Text>
          <Image src={jsxBabelImg} />
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
        <Heading size={4} textColor="tertiary" caps>  Model-View-Controller </Heading>

        </Slide>

        <Slide transition={["slide"]} align="center center">
            <div align="center">
                <ToDoApp />
            </div>
        </Slide>

      </Deck>
    );
  }
}