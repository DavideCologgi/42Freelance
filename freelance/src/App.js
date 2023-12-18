import './App.css';
import Video from './components/Video';

function App() {
  const video = {
    url: "link",
    title: "Title",
    description: "Description"
  }
  return (
    <Video video={video} />
  );
}

export default App;
