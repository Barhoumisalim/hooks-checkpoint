import { useState } from "react"
import './App.css';
import MovieAdd from "./components/MovieAdd";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Lara Croft: Tomb Raider",
      rate: 5,
      year: 2001,
      description:
        "Video game adventurer Lara Croft comes to life in a movie where she races against time and villains to recover powerful ancient artifacts.",
      img: "https://i.pinimg.com/originals/1f/fb/7b/1ffb7bf9849eb6a0f216290e302bf647.jpg",
    },
    {
      title: "Avengers",
      rate: 4,
      year: 2012,
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki from enslaving humanity.",
      img: "https://i.pinimg.com/originals/7a/94/80/7a94808dbb3a9a6d922d0780bc9be03d.jpg",
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rate: 2,
      year: 2018,
      description:
        "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      img: "https://wallpapercave.com/wp/wp6173954.jpg",
    },
    {
      title: "Call of the Wild",
      rate: 3,
      year: 2020,
      description:
        "Buck is a big-hearted dog whose blissful domestic life gets turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Alaskan Yukon in the 1890s. ",
      img: "https://fffmovieposters.com/wp-content/uploads/11958.jpg",
    },
  ])
  const [keyWord, setKeyWord] = useState("")
  const [keyRate, setKeyRate] = useState(0)
  const addMovie = (m) => {
    setMovies(movies.concat(m));
  }
  console.log("#keyword", keyWord)
  console.log("#keyrate", keyRate)
  return (
    <div className="App-header">
      <MovieSearch setKeyWord={setKeyWord} keyRate={keyRate} keyWord={keyWord} setKeyRate={setKeyRate} />
      <MovieAdd addMovie={addMovie} />
      <MovieList movies={movies.filter((m) =>
        m.title.toLowerCase().includes(keyWord.toLowerCase().trim()) && m.rate >= keyRate
      )} />
    </div>
  );
}

export default App;
