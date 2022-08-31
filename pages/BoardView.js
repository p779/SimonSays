import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  AlertIOS
} from 'react-native';
import stylesBoardView from '../style/BoardViewStyle';

const Sound = require('react-native-sound');

const {width, height} = require('Dimensions').get('window');
const SIZE = 2; // two-by-two grid
const CELL_SIZE = Math.floor(width * .4); // 20% of the screen width
const CELL_PADDING = Math.floor(CELL_SIZE * .02); // 5% of the cell size
const BORDER_RADIUS = CELL_PADDING * 2;
const TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
const LETTER_SIZE = 50;


var mainSequence = [];
var currSequence = [];

class BoardView extends Component {
  constructor(props) {
    super(props);
    this.state = {lit: 0};
    // load four sounds note1, note2, note3, note4
    for (let i = 1; i <= 4; i++) {
      let note = 'note' + i;
      this[note] = new Sound(i + '.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the note', error);
        } else { // loaded successfully
          console.log('duration in seconds: ' + this[note].getDuration() +
            'number of channels: ' + this[note].getNumberOfChannels());
        }
      });
    }

  }


  render() {
    return <View style={stylesBoardView.container}>
      <TouchableOpacity onPress={this._resetTheGame.bind(this)}>
        <Text style={stylesBoardView.letter}>PLAY!</Text>
      </TouchableOpacity>
      {this._renderTiles()}
    </View>
  }


  // create four tiles
  _renderTiles() {
    let result = [];
    let i = 1;
    let bgColors = ["", "", "#3275DD", "#D93333", "#64D23B", "#FED731", "black"];
    for (var row = 0; row < SIZE; row++) {
      for (var col = 0; col < SIZE; col++) {
        var position = {
          left: col * CELL_SIZE + CELL_PADDING,
          top: row * CELL_SIZE + CELL_PADDING
        };
        result.push(this._renderTile(i++, position, {backgroundColor: bgColors[i]}, {backgroundColor: '#FF0B96'}));
      }
    }
    return result;
  }

  // create one tile
  _renderTile(id, position, bgColor, litBgColor) {

    return (<TouchableOpacity onPress={() => this._playTheGame(id)}>
      <View style={[stylesBoardView.tile, position, this.state.lit == id ? litBgColor : bgColor]}><Text style={stylesBoardView.letter}>{id}</Text>
      </View>
    </TouchableOpacity>)
  }

  // play one note
  _playNote(note) {
    note.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }

  // reset the game
  _resetTheGame() {
    mainSequence = [];
    this.setState({lit: 0});
    let startSound = random(1, 4);
    mainSequence.push(startSound);
    currSequence = mainSequence.slice(0);
    this._playNotes(mainSequence);
  }


  _playTheGame(id) {
    let gameOver = false;
    this._playNote(this['note' + id]);

    if (currSequence.shift() !== id) {
      gameOver = true;
      AlertIOS.alert("Try Again!")
    }

    if (!gameOver && currSequence.length === 0) {
      mainSequence.push(random(1, 4));
      currSequence = mainSequence.slice(0);
      console.log("the main Array ", mainSequence);
      this._playNotes(mainSequence);
    }
  }

  // play array of notes
  _playNotes(sequence) {
    var i = 0;
    this.intervalId = setInterval(() => {
      this._playNote(this['note' + sequence[i]]);
      this.setState({lit: sequence[i]});
      i++;
      if (i >= sequence.length) {
        clearInterval(this.intervalId);
        setTimeout(() => this.setState({lit: 0}), 1000);
      }
    }, 1000);
  }


}

//get a random number within the range  min <= rand <= max
function random(min, max){
  return  (min + Math.floor(Math.random() * (max + 1 - min)));
}

module.exports = BoardView;

