// Import React
import React from "react";
import Script from "react-load-script";
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

const images = {
  medium: require("../assets/medium.png"),
  facebook: require("../assets/facebook.png")
};

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
            <ListItem>Importancia del Open Source 🔓</ListItem>
            <ListItem>Participando en la comunidad 👫</ListItem>
            <ListItem>Reportando issues 😤</ListItem>
            <ListItem>Resolviendo dudas 😣</ListItem>
            <ListItem>Ayudando a documentar 📃</ListItem>
            <ListItem>Compartiendo herramientas 🔨</ListItem>
            <ListItem>Resolviendo issues 💡</ListItem>
            <ListItem>Further reading 📖</ListItem>
          </List>
        </Slide>

        {/* Importancia del Open Source */}
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Importancia del Open Source 🔓
          </Heading>
        </Slide>

        {/* OCC World Class */}
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

        {/* Importancia de contribuir */}
        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Script url="//platform.twitter.com/widgets.js" />
          <Heading size={2} textColor="secondary" margin="30px" fit>
            Ayudar de regreso 👊
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
        </Slide>

        {/* Participando en la comunidad */}
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Participando en la comunidad 👫
          </Heading>
        </Slide>

        {/* Conversaciones */}
        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            Conversaciones 🗨️
          </Heading>
          <Tweet>
            <p lang="en" dir="ltr">
              Show me something cool you made with React. It can be anything: a
              product, a library, or a fun experiment. ✨
            </p>&mdash; Dan Abramov (@dan_abramov){" "}
            <a href="https://twitter.com/dan_abramov/status/917137653593772032?ref_src=twsrc%5Etfw">
              October 8, 2017
            </a>
          </Tweet>
        </Slide>

        {/* Compartiendo experiencias */}
        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            Compartiendo experiencias 👆
          </Heading>
          <Image src={images.medium.replace("/", "")} width="75%" />
        </Slide>

        {/* Grupos en linea */}
        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            Grupos en linea 🌐
          </Heading>
          <Image src={images.facebook.replace("/", "")} width="75%" />
        </Slide>

        {/* Reportando issues */}
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Reportando issues 😤
          </Heading>
        </Slide>

        {/* Github issues */}
        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            Github issues 😾
          </Heading>
          <Text
            size={3}
            textColor="quartenary"
            textAlign="center"
            bold
            margin="10px"
          >
            <a href="https://github.com/git-for-windows/git/issues/1175">
              Git for windows
            </a>
          </Text>
        </Slide>

        {/* Resolviendo dudas*/}
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Resolviendo dudas 😣
          </Heading>
        </Slide>

        {/* Stack Overflow */}
        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            Stack Overflow 📚
          </Heading>
          <Text
            size={3}
            textColor="quartenary"
            textAlign="center"
            bold
            margin="10px"
          >
            <a href="https://stackoverflow.com/questions/43080556/spectacle-code-slide-small-height/43081905#43081905">
              Spectacle
            </a>
          </Text>
        </Slide>

        {/* Ayudando a documentar*/}
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Ayudando a documentar 📃
          </Heading>
        </Slide>

        {/* Traducciones */}
        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            Traducciones 🇲🇽
          </Heading>
          <Text
            size={3}
            textColor="quartenary"
            textAlign="center"
            bold
            margin="10px"
          >
            <a href="https://crowdin.com/translate/jest/242/en-es">Jest</a>
          </Text>
        </Slide>

        {/* Compartiendo herramientas */}
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Compartiendo herramientas 🔨
          </Heading>
        </Slide>

        {/* React-tree */}
        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            <a href="https://medium.com/@josfranco/building-react-tree-13379fb0b54f">
              React-tree
            </a>
            🎄
          </Heading>
        </Slide>

        {/* Resolviendo issues */}
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Resolviendo issues 💡
          </Heading>
        </Slide>

        {/* Pull requests */}
        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            <a href="https://github.com/coralproject/talk/pulls?q=is%3Apr+author%3APepeFranco+is%3Aclosed">
              Pull Requests ⬆️
            </a>
          </Heading>
        </Slide>

        {/* Guia pull requests*/}
        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            <a href="https://github.com/coralproject/talk/issues/1044">
              Guia pull requests 📓
            </a>
          </Heading>
        </Slide>

        {/* Further Reading */}
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Further Reading 📖
          </Heading>
        </Slide>

        {/* How to contribute to open source*/}
        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="secondary" margin="30px" fit>
            <a href="https://opensource.guide/how-to-contribute/">
              How to contribute to open source
            </a>
          </Heading>
        </Slide>

        {/* Preguntas */}
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">
            Preguntas 🤔
          </Heading>
        </Slide>

        {/* Fin */}
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="secondary" fit="true">
            ¡Gracias! 👏
          </Heading>
          <Heading size={6} textColor="quartenary" fit="true">
            https://github.com/occmundial/open-source-presentation
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
