import React from "react";

const Video = () => {
    return (
        <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="webVideo.mp4"
        />
    );
};

export default Video;
