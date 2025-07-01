import React, { useState } from "react";

const Search = () => {
  let items = ["apple", "banana", "mango", "guva", "orange"];
  const [query, setQuery] = useState("");
  const [searchedItem, setSearchedItem] = useState(null); // ✅ This was missing

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      const result = items.find(
        (item) => query.toLowerCase() === item.toLowerCase()
      );
      setSearchedItem(result || "not-found");
    }
  }

  return (
    <>
      <div className="p-4">
        <input
          type="text"
          placeholder="Enter the module name"
          className="border-2 p-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Result Display */}
        {searchedItem && searchedItem !== "not-found" && (
          <div className="h-[200px] w-[200px] bg-amber-200 mt-4 flex items-center justify-center text-center p-4 rounded">
            <h2>Element Found: {searchedItem}</h2>
          </div>
        )}

        {searchedItem === "not-found" && (
          <div className="h-[200px] w-[200px] bg-red-200 mt-4 flex items-center justify-center text-center p-4 rounded">
            <h1>Element Not Found</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
