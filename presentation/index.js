// Import React
import React from "react";

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
  Text,
  Appear,
  Image,
  Layout,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Tweet from "./tweet";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#CC1F62", //Purple
    tertiary: "black", //Black
    quartenary: "#424242" //Gray
  },
  {
    primary: "Montserrat",
    secondary: "Roboto"
  }
);

export default class Presentation extends React.Component {
  render() {
    console.log(images);
    return (
      <Deck
        transition={[]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Colaborar en Open Source
          </Heading>
          <Heading size={6} textColor="primary">
            José Franco
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Agenda
          </Heading>
          <List textColor="quartenary">
            <ListItem>Importancia del Open Source</ListItem>
            <ListItem>Participando en la comunidad</ListItem>
            <ListItem>Reportando issues</ListItem>
            <ListItem>Respondiendo dudas</ListItem>
            <ListItem>Ayudando a documentar</ListItem>
            <ListItem>Compartiendo herramientas</ListItem>
            <ListItem>Resolviendo issues</ListItem>
            <ListItem>Preguntas</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Importancia del Open Source
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            OCC = World Class 💪
          </Heading>
          <Appear fid="1">
            <Text
              size={5}
              textColor="quartenary"
              textAlign="left"
              bold
              margin="10px"
            >
              Reconocidos por:
            </Text>
          </Appear>
          <Appear fid="2">
            <Text
              size={5}
              textColor="quartenary"
              textAlign="left"
              bold
              margin="10px"
            >
              Cultura
            </Text>
          </Appear>
          <Appear fid="3">
            <Text
              size={5}
              textColor="quartenary"
              textAlign="left"
              bold
              margin="10px"
            >
              Practicas
            </Text>
          </Appear>
          <Appear fid="3">
            <Text
              size={5}
              textColor="quartenary"
              textAlign="left"
              bold
              margin="10px"
            >
              Conocimiento
            </Text>
          </Appear>
          <Appear fid="3">
            <Text
              size={5}
              textColor="quartenary"
              textAlign="left"
              bold
              margin="10px"
            >
              Talento
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            Aydar de regreso 👊
          </Heading>
          <Layout>
            <Table>
              <TableBody>
                <TableRow>
                  <TableItem style={{ paddingRight: "10px" }}>
                    <Tweet>
                      <p lang="en" dir="ltr">
                        If you worked on an open source library, you know how
                        much effort that is. Docs, examples, issue management,
                        deprecation cycles, releases.
                      </p>&mdash; Dan Abramov (@dan_abramov){" "}
                      <a href="https://twitter.com/dan_abramov/status/909062051615698945?ref_src=twsrc%5Etfw">
                        September 16, 2017
                      </a>
                    </Tweet>
                  </TableItem>
                  <TableItem>
                    <Tweet>
                      <p lang="en" dir="ltr">
                        Think about it. We ALL depend HEAVILY on open source
                        technologies. In many ways, it&#39;s MORE important work
                        than whatever you&#39;re building w it
                      </p>&mdash; MICHAEL JACKSON (@mjackson){" "}
                      <a href="https://twitter.com/mjackson/status/901125624613314561?ref_src=twsrc%5Etfw">
                        August 25, 2017
                      </a>
                    </Tweet>
                  </TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
          <Appear fid="1">
            <Text
              size={5}
              textColor="quartenary"
              textAlign="left"
              bold
              margin="10px"
            >
              Open source no es un producto, es una comunidad
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Preguntas
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="secondary" fit="true">
            👏¡Gracias!
          </Heading>
          <Heading size={6} textColor="quartenary" fit="true">
            github.com/occmundial/unit-testing-presentation
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
