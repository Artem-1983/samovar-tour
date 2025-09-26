import React, { useState } from 'react';


const LazyVideo = ({ videoSrc, posterImg }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => setIsPlaying(true);

    return (
        <div className="lazy-video-wrapper" onClick={handleClick}>
            {isPlaying ? (
                <video
                    src={videoSrc}
                    controls
                    autoPlay
                    playsInline
                    style={{ width: '100%', borderRadius: '8px' }}
                />
            ) : (
                <div className="video-thumbnail" style={{ position: 'relative', cursor: 'pointer' }}>
                    <img
                        src={posterImg}
                        alt="Video thumbnail"
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                    <div className="play-button" />
                </div>
            )}
        </div>
    );
};


export default LazyVideo
