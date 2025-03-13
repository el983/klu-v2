import React, { useEffect, useState } from "react";
import "./Video.css";

const Video = () => {
  const [isYTReady, setIsYTReady] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API only once
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.body.appendChild(tag);

      // Define callback when API loads
      window.onYouTubeIframeAPIReady = () => {
        setIsYTReady(true); // Mark YT as ready
      };
    } else {
      setIsYTReady(true);
    }
  }, []);

  useEffect(() => {
    if (isYTReady) {
      // Ensure YT is available before initializing players
      ["player1", "player2"].forEach((id) => {
        new window.YT.Player(id, {
          events: {
            onReady: (event) => {
              document
                .getElementById(id)
                .parentElement.addEventListener("mouseenter", () =>
                  event.target.playVideo()
                );
              document
                .getElementById(id)
                .parentElement.addEventListener("mouseleave", () =>
                  event.target.pauseVideo()
                );
            },
          },
        });
      });
    }
  }, [isYTReady]); // Run only when YT is ready

  return (
    <div className="mentors-container">
      <h2 className="mentors-heading">Our Mentors in Action</h2>
      <p className="mentors-subheading">
        Watch videos of our dedicated mentors who are helping shape the future
        of education at Kairos Learning Universe.
      </p>
      <div className="videos-container">
        <div className="video-box">
          <iframe
            id="player1"
            src="https://www.youtube.com/embed/0ogH7rYuVtM?enablejsapi=1&mute=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            className="video-thumbnail"
          ></iframe>
        </div>
        <div className="video-box">
          <iframe
            id="player2"
            src="https://www.youtube.com/embed/2VY-GpXaAlQ?enablejsapi=1&mute=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            className="video-thumbnail"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
