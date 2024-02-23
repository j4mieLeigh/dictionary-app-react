import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleImagesResponse(response) {
    setImages(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imagesApiKey = "5do93bc0b836c98t67cd86dfeaa4ff3f";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Feed me words</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a word..."
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            ></input>
            <input
              type="submit"
              value="Yum"
            ></input>
          </form>
        </section>
        <Results results={results} />
        <Images images={images} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
