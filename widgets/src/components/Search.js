import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  console.log("I run with every render");

  // useEffect(() => {
  //   console.log("I only run once");
  // }, []);

  // useEffect(() => {
  //   console.log("I run after every render and at initial render");
  // });

  useEffect(() => {
    console.log("I only run once");
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
