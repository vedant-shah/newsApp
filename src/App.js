import "./App.css";
import Navbar from "./components/Navbar";
import TopNews from "./components/TopNews";
import React, { useState } from "react";
import Spinner from "./components/spinner";


function App() {

  let [topic, setTopic] = useState('');
  let [useCountry, setUseCountry] = useState('&country=in');
  let [category, setCategory] = useState('&category=');
  const [loading, setLoading] = useState(false);
  const [head, setHead] = useState('General');
  let apikey = process.env.REACT_APP_NEWS_API;

  return (
    <div className="App">
      <Navbar category={setCategory} setHead={setHead} head={head} topic={setTopic} useCountry={setUseCountry} />
      <div className="container my-3">
        <h1 id="heading">Top Headlines - {head}</h1>
        {loading && <Spinner />}
        <TopNews topic={topic} useCountry={useCountry} category={category} setloading={setLoading} loading={loading} apikey={apikey} />
      </div>
    </div>
  );
}

export default App;
