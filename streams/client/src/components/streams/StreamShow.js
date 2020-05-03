import React from 'react';
import flv from 'flv.js'; // download video streams and serve that data to our app interface
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  // this function will run only once so we need to handle the case when component finished mounting before stream data has been loaded to Redux store
  componentDidMount() {
    const { streamId } = this.props;
    this.props.fetchStream(streamId);
    this.buildPlayer();
  }

  // call buildPlayer() again in case it takes a while for stream data to be loaded into Redux store
  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    // clean up resources that finished running in our component
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    const { streamId } = this.props;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${streamId}.flv` // url of node media server we set up earlier
    });

    this.player.attachMediaElement(this.videoRef.current); // be careful of edge case when stream hasn't been loaded to our Redux store and therefore no video element has been rendered
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video
          ref={this.videoRef}
          styleprops={{ width: '100%' }}
          controls={true}
        />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id;
  return { stream: state.streams[streamId], streamId };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
