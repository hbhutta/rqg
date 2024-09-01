import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

const quotes = [
  // By Nietzsche
  "The insatiable will always finds a way to detain its creatures in life and compel them to live on, by means of an illusion spread over things.",
  "He who has a why can bear almost any how",
  "One has to take a somewhat bold and dangerous line with this existence: especially as, whatever happens, we are bound to lose it.",
  "To escape boredom, man works either beyond what his usual needs require, or else he invents play, that is, work that is designed to quiet no need other than that for working in general.",
  "Man is something to be surpassed.",
  "It is only as an aesthetic phenomenon that existence and the world are eternally justified.",
  "One has to take a somewhat bold and dangerous line with this existence: especially as, whatever happens, we are bound to lose it.",
  "Life has not been devised by morality: it wants deception, it lives on deception.",
  "Every tradition grows ever more venerable — the more remote its origin, the more confused that origin is. The reverence due to it increases from generation to generation. The tradition finally becomes holy and inspires awe.",
  "Christianity came into existence to lighten the heart, but now it needs to burden the heart to start with so it can lighten it afterwards. Consequently, it will perish.",
  "Admiration for a quality or an art can be so strong that it deters us from striving to possess it.", // real
  "A man far oftener appears to have a decided character from persistently following his temperament than from persistently following his principles.",
];

const image = {
  uri: "https://philosophybreak.com/static/8ad1ae5b618b6de5714494e876c72833/68fc1/Nietzsche.webp",
};

export default function App() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  console.log("Nietzsche has started talking");
  console.log(quote);
  // Initially a random quote

  return (
    <View style={styles.MainContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.Image}>
        <View style={styles.QuoteAndPerson}>
          <Text style={styles.Quote}>"{quote}"</Text>
          <Text style={styles.Person}> - Friedrich Nietzsche</Text>
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() =>
            setQuote(quotes[Math.floor(Math.random() * quotes.length)])
          }
        >
          <Text style={styles.Text}>New quote</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  // On the main container we just set the flex and background color
  // Set vertical and horizontal alignment (e.g. centering) in the inner containers
  MainContainer: {
    flex: 1,
  },

  Image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.9
  },

  QuoteAndPerson: {
    flex: 1,
    marginHorizontal: 30,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  Button: {
    marginBottom: 50,
    marginHorizontal: 100,
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "white"
  },

  Text: {
    color: "white"
  },

  Quote: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    color: "white"
  },

  Person: {
    paddingVertical: 14,
    fontSize: 20,
    fontWeight: "condensed",
    fontStyle: "italic",
    color: "white"
  },
});
