import { useState } from "react";
import "./App.css";
import kh1 from "./assets/kh1.jpg";
import kh2 from "./assets/kh2.jpg";
import kh3 from "./assets/kh3.jpg";
import kh3d from "./assets/kh3d.jpg";
import kh358_2 from "./assets/kh3582.jpg";
import khbbs from "./assets/khbbs.jpg";
import khcom from "./assets/khcom.jpg";
import khmom from "./assets/khmom.jpg";
import khdr from "./assets/khdr.jpg";
import khx from "./assets/khx.jpg";
import khc from "./assets/khc.jpg";
import khhd15 from "./assets/khhd15.jpg";
import khhd25 from "./assets/khhd25.jpg";
import khhd28 from "./assets/khhd28.jpg";

function Game({ image, title, platform, year, rating }) {
  return (
    <div className="game-card">
      <div className="game-image-container">
        <img className="game-image" src={image} alt={title} />
      </div>
      <div className="game-details">
        <h3 className="game-title">{title}</h3>
        <p className="game-platform">
          <strong>Console:</strong> {platform}
        </p>
        <p className="game-year-detail">
          <strong>Released:</strong> {year}
        </p>
        <p className="game-rating">
          <strong>Rating:</strong> {rating}/10
        </p>
      </div>
    </div>
  );
}

function GameCollection({ games }) {
  return (
    <div className="game-grid">
      {games.map((game) => {
        return (
          <Game
            key={game.id}
            title={game.title}
            platform={game.platform}
            year={game.year}
            image={game.image}
            rating={game.rating}
          />
        );
      })}
    </div>
  );
}

function App() {
  const [games] = useState([
    {
      id: 1,
      title: "Kingdom Hearts",
      platform: "PlayStation 2",
      year: 2002,
      rating: 9,
      image: kh1,
    },
    {
      id: 2,
      title: "Kingdom Hearts: Chain of Memories",
      platform: "Game Boy Advance",
      year: 2004,
      rating: 8,
      image: khcom,
    },
    {
      id: 3,
      title: "Kingdom Hearts II",
      platform: "PlayStation 2",
      year: 2005,
      rating: 10,
      image: kh2,
    },
    {
      id: 4,
      title: "Kingdom Hearts 358/2 Days",
      platform: "Nintendo DS",
      year: 2009,
      rating: 8,
      image: kh358_2,
    },
    {
      id: 5,
      title: "Kingdom Hearts: Birth by Sleep",
      platform: "PlayStation Portable",
      year: 2010,
      rating: 9,
      image: khbbs,
    },
    {
      id: 6,
      title: "Kingdom Hearts 3D: Dream Drop Distance",
      platform: "Nintendo 3DS",
      year: 2012,
      rating: 8,
      image: kh3d,
    },
    {
      id: 7,
      title: "Kingdom Hearts III",
      platform: "PlayStation 4",
      year: 2019,
      rating: 9,
      image: kh3,
    },
    {
      id: 8,
      title: "Kingdom Hearts: Melody of Memory",
      platform: "Nintendo Switch",
      year: 2021,
      rating: 7,
      image: khmom,
    },
    {
      id: 9,
      title: "Kingdom Hearts: Dark Road",
      platform: "Mobile",
      year: 2020,
      rating: 6,
      image: khdr,
    },
    {
      id: 10,
      title: "Kingdom Hearts: Union X",
      platform: "Mobile",
      year: 2015,
      rating: 7,
      image: khx,
    },
    {
      id: 11,
      title: "Kingdom Hearts: Coded",
      platform: "Mobile",
      year: 2008,
      rating: 8,
      image: khc,
    },
    {
      id: 12,
      title: "Kingdom Hearts HD 1.5 Remix",
      platform: "PlayStation 3",
      year: 2013,
      rating: 9,
      image: khhd15,
    },
    {
      id: 13,
      title: "Kingdom Hearts HD 2.5 Remix",
      platform: "PlayStation 3",
      year: 2014,
      rating: 9,
      image: khhd25,
    },
    {
      id: 14,
      title: "Kingdom Hearts HD 2.8 Final Chapter Prologue",
      platform: "PlayStation 4",
      year: 2017,
      rating: 8,
      image: khhd28,
    },
  ]);

  const [selectedPlatform, setSelectedPlatform] = useState("All");

  const platforms = ["All", ...new Set(games.map((game) => game.platform))];

  const filteredGames =
    selectedPlatform === "All"
      ? games
      : games.filter((game) => {
          return game.platform === selectedPlatform;
        });

  return (
    <div className="app-container">
      <header className="site-header">
        <div>
          <h1>Memories of Light</h1>
          <p>Welcome to the Kingdom Hearts Collection</p>
        </div>
        <p className="game-count">Total Games: {filteredGames.length}</p>
      </header>

      <div className="filter-dropdown-container">
        <label htmlFor="platform-select">Filter by Console: </label>
        <select
          id="platform-select"
          className="platform-select"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          {platforms.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>

      <GameCollection games={filteredGames} />
    </div>
  );
}

export default App;
