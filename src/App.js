import "./App.css";
import Navbar from "./components/Navbar";
import TopNews from "./components/TopNews";
import React, { useState } from "react";
import  Spinner  from "./components/spinner";


function App() {

  let [topic, setTopic] = useState('');
  let [useCountry, setUseCountry] = useState('&country=in');
  let [category, setCategory] = useState('&category=');
  const [loading, setLoading] = useState(false);


  return (
    <div className="App">
      <Navbar category={setCategory} head='Top-Headlines' topic={setTopic} useCountry={setUseCountry} />
      {loading && <Spinner/>}
      <TopNews topic={topic} useCountry={useCountry} category={category} setloading={setLoading} loading={loading}/>
    </div>
  );
}

export default App;
