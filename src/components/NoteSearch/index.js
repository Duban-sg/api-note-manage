import React from "react";
function Notesearch({ searchValue, setSearchValue }) {
  return (
    <div>
      <input      
        placeholder="Buscar"
        className="Search my-3"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { Notesearch };
