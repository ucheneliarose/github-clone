import React, { useState } from "react";
import { setUser, setRepositories } from "../../redux/actions";
import {useDispatch} from "react-redux";
import "./SearchForm.scss";

export default function SearchForm({ searchValue }) {
  const [inputValue, setInputValue] = useState(searchValue);
  const dispatch = (useDispatch);
 
    const fetchData = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`https://api.github.com/users/${inputValue}`);
        const data = await response.json();
        console.log(data);
        
        const repoResponse = await fetch(`https://api.github.com/users/${searchValue}/repos`);
        const repoData = await repoResponse.json();

        dispatch(setUser(data));
      dispatch(setRepositories(repoData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      
    };



  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-wrapper">
      <form onSubmit={fetchData}>
        {/*<FaSearch id="search-icon" />*/}
        <input
          type="search"
          value={inputValue}
          onChange={(e) => handleChange(e)}
          placeholder="github"
        />
      </form>
    </div>
  );
}
