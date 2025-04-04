import "../styles/youtubevideo.css";
import { useState } from "react";

function YoutubeVideo() {
  const [isMuted, setIsMuted] = useState(true);

  const videoId = "q0U3xrO1UNk";
  const getSrc = (muted) =>
    `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${
      muted ? 1 : 0
    }&loop=1&playlist=${videoId}&controls=0`;

  return (
    <div className="youtube-container">
      <iframe
        id="youtube-iframe"
        src={getSrc(isMuted)}
        title="Presentación CEGOD"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <button className="mute-button" onClick={() => setIsMuted(!isMuted)}>
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
}

export default YoutubeVideo;
