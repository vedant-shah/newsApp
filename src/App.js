import "./App.css";
import Navbar from "./components/Navbar";
import TopNews from "./components/TopNews";
import React, {useState} from "react";

function App() {

  let [topic, setTopic] = useState('');
  let [useCountry, setUseCountry] = useState('&country=in');
  let [category, setCategory] = useState('&category=');

  return (
    <div className="App">
      <Navbar category={setCategory} head='Top-Headlines' topic={setTopic} useCountry={setUseCountry}/>
      <TopNews topic={topic} useCountry={useCountry} category={category}/>
    </div>
  );
}

export default App;
