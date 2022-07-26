import video from "../data/video.js";
import Video from "./Video.js";

function App() {
  console.log(video)

  return (
    <Video data={video} />
  );
}

export default App;
