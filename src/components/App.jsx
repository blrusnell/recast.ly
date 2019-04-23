
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initializeVideos = this.initializeVideos.bind(this);
    
    this.options = {
      q: 'dogs',
      maxResults: 5,
      key: YOUTUBE_API_KEY,
      videoEmbeddable: true,
      part: 'snippet',
      type: 'video',

    }
    

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    }
  }

  initializeVideos(data) {
    console.log(data.items);
    this.setState({
      videos: data.items,
      currentVideo: data.items[0],
    });
  }

  onVideoListClick (vid) {
    this.setState({
      currentVideo: vid
    });
  }

  

  render() {
    let newVidProps = {
      click: this.onVideoListClick.bind(this),
      videos: this.state.videos
    }

    return (
      <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>

        <div className="col-md-5" >
          <VideoList {...newVidProps} />
        </div>
      </div>
    </div>
    );
  }
  componentDidMount() {
    searchYouTube(this.options, this.initializeVideos);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
//testss