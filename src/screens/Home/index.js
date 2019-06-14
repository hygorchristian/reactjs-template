import React, { Component } from 'react';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { PodcastsActions } from '../../store/ducks/podcasts';

import { Container } from './styles';

export default class Home extends Component {
  componentWillMount() {
    //
  }

  render() {
    return (
      <Container>
        <p>
          Bem vindo 
          {' '}
          <br />
          Edite o arquivo App.js para começar a desenvolver =D
        </p>
      </Container>
    );
  }
}

// const mapStateToProps = ({ podcasts }) => ({
//   podcasts,
// });
//
// const mapDipatchToProps = dispatch => bindActionCreators({
//   ...PodcastsActions,
// }, dispatch);
//
// export default connect(mapStateToProps, mapDipatchToProps)(Home);
