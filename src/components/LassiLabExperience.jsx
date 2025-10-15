import React, { useState, useRef } from 'react';

const videoData = [
  {
    id: 1,
    videoUrl: 'https://drive.google.com/file/d/1Fjl33kMR8RSYonVT6ebpLuaV53UCkoC1/preview',
    type: 'iframe',
  },
  {
    id: 2,
    videoUrl: 'https://drive.google.com/file/d/14Hl4hIVkcqnl70C1-z3kTZ5W25k35B-J/preview',
    type: 'iframe',
  },
  {
    id: 3,
    videoUrl: 'https://drive.google.com/file/d/14Hl4hIVkcqnl70C1-z3kTZ5W25k35B-J/preview',
    type: 'iframe',
  },
];

const LassiLabExperience = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const togglePlay = (id) => {
    setPlayingVideoId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-12 px-4 text-center bg-white">
      {/* Title */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-3xl font-bold text-red-600">
          Experience the Lassi Lab vibe
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-400 tracking-wider hidden md:block">
          LASSILAB
        </h2>
      </div>

      {/* Video Layout */}
      <div className="flex justify-center items-center space-x-4 overflow-x-auto pb-6">
        {videoData.map((video, index) => {
          const isCenter = index === 1;
          const isPlaying = playingVideoId === video.id;

          return (
            <div
              key={video.id}
              className={`relative rounded-xl overflow-hidden cursor-pointer shadow-md transition-transform duration-300 ${
                isCenter
                  ? 'w-72 md:w-96 '
                  : 'w-72 md:w-96 '
              }`}
              onClick={() => togglePlay(video.id)}
            >
              {isPlaying ? (
                <iframe
                  src={video.videoUrl}
                  className="w-full h-48 md:h-64"
                  allow="autoplay"
                  allowFullScreen
                  title={`video-${video.id}`}
                />
              ) : (
                <div className="relative">
                  <iframe
                    src={video.videoUrl}
                    className="w-full h-48 md:h-64 pointer-events-none"
                    allow="autoplay"
                    title={`video-${video.id}`}
                  />
                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    {/* <div className="text-white text-3xl bg-black bg-opacity-50 rounded-full px-4 py-2">
                      &#9658;
                    </div> */}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LassiLabExperience;
