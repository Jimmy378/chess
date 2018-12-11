import React, { Component } from 'react';
import { styled } from '../util/styledComponents';
import { Colours } from '../util/theme';
import { piece, colour, Coords } from '../util/model';
import { connect } from 'react-redux';
import { AppState } from '../store/ApplicationState';
import { Actions, ConnectedReduxThunkProps } from '../store';
import Chess from 'chess';

import Canvas from '../components/canvas';
import Board from '../components/board';
import Pieces from '../components/pieces';

const Flex = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${Colours.purpleDark.five};
`;

const Container = styled.div`
  width: 100%;
`;

type Props = {} & AppState & ConnectedReduxThunkProps;
type State = {
  activeTiles: number[];
};

class App extends Component<Props, State> {
  state: State = {
    activeTiles: []
  };

  componentWillMount() {
    this.props.dispatch(Actions.Game.setBoard(Chess.Board()));
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return nextProps.Game.Board !== this.props.Game.Board;
  }

  render() {
    return (
      <Flex>
        <Container>
          <Canvas
            render={canvasProps => (
              <g>
                <Board />
                <Pieces svgRef={canvasProps.ref} />
              </g>
            )}
          />
        </Container>
      </Flex>
    );
  }
}

const mapStateToProps = (state: AppState): AppState => state;

export default connect(mapStateToProps)(App);
