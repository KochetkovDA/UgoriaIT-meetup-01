
import React, { Component } from 'react';
import "./presentation.style.css";

//import component
import ToDoApp from "../components/To-Do/ToDo"
import BusinessCard from "../components/BusinessCard/businessCard";

// import pictures
import avatarPhoto from "../img/avatar.png";
import jsxBabelImg from "../img/jsx_with_babell.png"
import MVCImg from "../img/MVC.png"
import FLUXImg from "../img/FLUX.png"
import JSXSimpleTags from "../img/JSX_SimpleTags.PNG"
import JSXCustomTag from "../img/JSX_CustomTag.PNG"
import propsExample from "../img/propsExample.PNG"
import moreAboutProps from "../img/moreAboutProps.PNG"
import propTypes from "../img/propTypes.PNG"
import defaultProps from "../img/defaultProps.PNG"
import refs from "../img/refs.PNG"
import state1 from "../img/state1.PNG"
import state2 from "../img/state2.PNG"
import state3 from "../img/state3.PNG"

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Image,
  Text
} from "spectacle";

import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
    primary: "Oswald",
    secondary: "Helvetica"
  });

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={500} progress="pacman" theme={theme}>

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
            <Appear>
              <ListItem>Не MVC фреймворк - Библиотека</ListItem>
            </Appear>
            <Appear>
              <ListItem>Отвечает только за представление</ListItem>
            </Appear>
            <Appear>
              <ListItem>Virtual DOM</ListItem>
            </Appear>
            <Appear>
              <ListItem>Компонентный подход</ListItem>
            </Appear>
            <Appear>
              <ListItem>JSX (JavaScript XML)</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="primary">
          <Heading size={4} textColor="tertiary" caps> MVC </Heading>
          <Image src={MVCImg} />
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
          <Heading size={4} textColor="tertiary" caps> Подробнее про JSX </Heading>
          <Image style={{"margin-top": "25px", "min-width": "550px"}} src={JSXSimpleTags} />
          <Text textAlign="center" margin="10px 0 0" textColor="primary">
          <sapn style={{color: "#03A9FC"}}> {"<h1>"} </sapn> и <sapn style={{color: "#03A9FC"}}> {"<span>"} </sapn> - это встроенные компоненты jsx и пишутся с маленькой буквы.
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" caps> Подробнее про JSX </Heading>
          <Image src={JSXCustomTag} />
          <Text textAlign="cener" margin="10px 0 0" textColor="secondary">
            Кастомные компоненты необходимо именовать с большой буквы
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary" caps> Props </Heading>
          <Image style={{"margin-top": "25px", "min-width": "550px"}} src={propsExample} />
          <Text textAlign="center" margin="10px 0 0" textColor="primary">
            Props будут доступны внутри компоненты <sapn style={{color: "#03A9FC"}}> {"<CustomComponent>"} </sapn>, как <sapn style={{color: "#03A9FC"}}> {"this.pops.color, this.props.size"} </sapn> и т.д.
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} textColor="tertiary" caps> Props </Heading>
          <Image style={{"margin-top": "25px", "min-width": "1050px"}} src={moreAboutProps} />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4} textColor="tertiary" caps> PropTypes </Heading>
          <Image style={{"margin-top": "25px"}} src={propTypes} />
          <Text textAlign="center" margin="10px 0 0" textColor="primary">
            При добавлении <sapn style={{color: "#03A9FC"}}> {".isRequired"} </sapn>, в строку  <sapn style={{color: "#03A9FC"}}> {"name: PropTypes.string.isRequired"} </sapn> можно задавать обязательные парматеры.
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4} textColor="tertiary" caps> defaultProps </Heading>
          <Image style={{"margin-top": "25px"}} src={defaultProps} />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={4} textColor="tertiary" caps> Refs </Heading>
          <Image style={{"margin-top": "25px"}} src={refs} />
          <Text textAlign="center" margin="10px 0 0" textColor="primary">
            React поддерживает специальный атрибут, который может быть присвоен любому компоненту. Атрибут <sapn style={{color: "#03A9FC"}}> {"ref"} </sapn> принимает функцию обратного вызова, и вызывает ее после того, как компонент монтируется в DOM или удаляется из него.
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} textColor="tertiary" caps> State </Heading>
          <Image style={{"margin-top": "25px", "min-width": "1050px"}} src={state1} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} textColor="tertiary" caps> State </Heading>
          <Image style={{"margin-top": "25px", "min-width": "1050px"}} src={state2} />
        </Slide>

       <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} textColor="tertiary" caps> State </Heading>
          <Image style={{"margin-top": "25px", "min-width": "1050px"}} src={state3} />
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