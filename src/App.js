import React, {useCallback, useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [get, setGet] = useState([]);

  const fetchMovieHandler = useCallback(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        const transformPost = data.results.map((PostData) => {
          return {
            episode_id: PostData.episode_id,
            title: PostData.title,
            opening_crawl: PostData.opening_crawl,
          };
        });
        setGet(transformPost);
      });
  },[]);

  useEffect(()=>{
    fetchMovieHandler();               // useEffect will automatically call and load data present in fetchhandler                                            
  },[fetchMovieHandler])                     // whenever the screen loads

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <div>
          <Card post={get} />
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
