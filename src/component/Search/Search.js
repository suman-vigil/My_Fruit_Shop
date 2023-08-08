import React, { useEffect } from "react";
import "./Search.css";
import { RxCross2 } from "react-icons/rx";

const Search = ({ closeSearch }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="searchModalWrapper"></div>
      <div className="searchModal">
        <div className="d-flex">
          <input className="search" placeholder="Search Product" />
          <RxCross2 className="search_cancel" onClick={closeSearch} />
        </div>
      </div>
    </>
  );
};

export default Search;
