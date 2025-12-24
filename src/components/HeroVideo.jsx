import React, { useEffect, useRef, useState } from "react";
import ramojiPoster from "../assets/ramoji.jpg";

const slides = [
  {
    type: "mp4",
    title: "Ramojifilm City",
    description:
      "Ramojifilm City is the world’s largest integrated film studio complex.",
    video: "/videos/ramojifilm.mp4",
    poster: ramojiPoster,
  },
  {
    type: "mp4",
    title: "Charminar",
    description:
      "Charminar is a historic monument and global icon of Hyderabad.",
    video: "/videos/Charminar.mp4",
    poster: ramojiPoster, // optional different poster
  },
  {
    type: "mp4",
    title: "Hussain Sagar",
    description:
      "Famous for stunning sunsets and the Buddha statue.",
    video:
      "/videos/HussainSagar.mp4",
    poster: ramojiPoster,
  },
  {
    type: "mp4",
  title: "Golconda Fort",
  description:
    "Golconda Fort is a magnificent historic fortress known for its grand architecture, acoustic system, and panoramic city views.",
    video:
      "/videos/Galconda Fort.mp4", 
     poster: ramojiPoster,
},
{
   type: "mp4",
  title: "Chowmahalla Palace",
  description:
    "Chowmahalla Palace is a royal heritage site showcasing the grandeur, culture, and lifestyle of the Nizams of Hyderabad.",
     video:
      "/videos/chowmahalla Palace.mp4",
     poster: ramojiPoster
},

];

const HeroVideo = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const videoRef = useRef(null);

  /* PLAY / PAUSE CONTROL */
  useEffect(() => {
    if (videoRef.current) {
      playing ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [index, playing]);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* VIDEO */}
      <video
        key={index}                 // ✅ IMPORTANT FIX
        ref={videoRef}
        muted={!soundOn}
        autoPlay={playing}
        playsInline
        poster={slides[index].poster}
        onEnded={() => setIndex((prev) => (prev + 1) % slides.length)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={slides[index].video} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.3)",
        }}
      />

      {/* RIGHT CONTENT */}
      <div
        style={{
          position: "absolute",
          right: "80px",
          bottom: "140px",
          maxWidth: "360px",
          color: "#fff",
        }}
      >
        <h2 style={{ fontSize: "26px", marginBottom: "8px" }}>
          {slides[index].title}
        </h2>

        <p style={{ fontSize: "13px", lineHeight: "1.6" }}>
          {slides[index].description}
        </p>

        <button
          style={{
            marginTop: "12px",
            background: "transparent",
            border: "1px solid #fff",
            color: "#fff",
            padding: "6px 18px",
            borderRadius: "18px",
            cursor: "pointer",
          }}
        >
          More →
        </button>

        {/* SLIDE TABS */}
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            gap: "14px",
            fontSize: "12px",
          }}
        >
          {slides.map((item, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              style={{
                cursor: "pointer",
                opacity: index === i ? 1 : 0.6,
                borderBottom: index === i ? "1px solid #fff" : "none",
              }}
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div
        style={{
          position: "absolute",
          right: "40px",
          bottom: "40px",
          display: "flex",
          gap: "12px",
        }}
      >
        {/* PLAY / PAUSE */}
        <button
          onClick={() => setPlaying(!playing)}
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid #fff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {playing ? "❚❚" : "▶"}
        </button>

        {/* SOUND */}
        <button
          onClick={() => setSoundOn(!soundOn)}
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid #fff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {soundOn ? "🔊" : "🔇"}
        </button>
      </div>
    </section>
  );
};

export default HeroVideo;
