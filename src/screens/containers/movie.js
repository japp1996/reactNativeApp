import React, { Component } from 'react';
import MovieLayout from '../components/movie-layout';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import Details from '../../videos/components/details';
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';

import {
  StyleSheet,
  View,
} from 'react-native';

class Movie extends Component {
  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    })
    Orientation.lockToPortrait()
  }
  render() {
    return (
      <MovieLayout>
      	<Header>
          <Close
          onPress={this.closeVideo}/>
        </Header>
      	<Player/> 
        <Details {...this.props.movie}/>
      </MovieLayout>
    );
  }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
  return {movie:state.selectedMovie}
}

export default connect(mapStateToProps)(Movie);