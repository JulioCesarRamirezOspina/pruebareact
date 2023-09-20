import React, { useRef } from 'react';
import './AudioPlayer.css';

function AudioPlayer({ src }) {
    const audioRef = useRef(null);

    // const handlePlay = () => {
    //     audioRef.current.play();
    // };

    // const handlePause = () => {
    //     audioRef.current.pause();
    // };

    // const handleStop = () => {
    //     audioRef.current.pause();
    //     audioRef.current.currentTime = 0;
    // };

    return (
        <div>
            <div className="btn-group">
                {/* <audio ref={audioRef} src={src}></audio> */}
                <audio preload="auto" ref={audioRef}  controls>
                    <source ref={audioRef} src={src} type="audio/mp3"/>
                </audio>
                {/* <button className="control-btn" onClick={handlePlay}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                    </svg>
                </button>
                <button className="control-btn" onClick={handlePause}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                </button>
                <button className="control-btn" onClick={handleStop}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <rect x="5" y="5" width="14" height="14"></rect>
                    </svg>
                </button> */}
            </div>
        </div>
    );
}

export default AudioPlayer;
