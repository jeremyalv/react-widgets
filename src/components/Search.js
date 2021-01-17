import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  // Run the 2nd useEffect when debouncedTerm setter is invoked through the 1st useEffect
  useEffect(() => {
    // Enables us to not use a default search term
    if (!debouncedTerm) return;

    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          // Axios will append these properties to the query string
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm, // Our Search term
        },
      });
      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header" style={{ margin: 10, fontSize: 30 }}>
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term} // So our State is the "single source of truth"
            onChange={(e) => setTerm(e.target.value)} // setTerm is analogous to setState
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
