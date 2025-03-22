import React, { useEffect } from "react";
import axios from "axios";
import MainCard from "./MainCard";
import { useState } from "react";

const MainPage = () => {
  const [res, setRes] = useState();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  const myfunc = async () => {
    const res = await axios.get(API);
    console.log(res);
    setRes(res.data);
  };

  return (
    <>
      <div className="searchSection">
        <input
          type="text"
          placeholder="Enter Dish Name"
          onChange={handleSearch}
          value={search}
        />
        <button className="Searchbtn" onClick={myfunc}>
          Search
        </button>
      </div>
      <div>
        {search==""?(
          <div className="homepage">
            <p>Welcome to Online Food Recipe App.</p>
            <p>Know about our favourite recipe in just one click!!</p>
            <p>Cook and Enjoy</p>
          </div>
        ):<div>
        <MainCard details={res}></MainCard>
      </div>
      }
      </div>
      
    </>
  );
};

export default MainPage;
