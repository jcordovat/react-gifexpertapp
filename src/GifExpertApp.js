import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  //   const handleAdd = () => {
  //     const nuevaCategoria = "Naruto";
  //     //setCategorias([...categorias, nuevaCategoria]);
  //     setCategorias((cats) => [...cats, nuevaCategoria]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
          // <li key={category}>{category} </li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
