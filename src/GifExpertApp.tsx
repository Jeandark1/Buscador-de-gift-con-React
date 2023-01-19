import React from 'react'
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory) => {
    if ( categories.includes (newCategory) ) return;
    // categories.push('dragon ball');
    setCategories([newCategory, ...categories]);
    // setCategories( cat => [ ...cat, 'valorant' ]);
  };

  return (
    <>
      {/* titulo */}
      <h1> GifEpertApp</h1>

      {/* input */}
      <AddCategory
      // setCategories={ setCategories }
       onNewCategory= { (event) => onAddCategory(event) }
      />
      
      {/* Listado de Gif */}
        {categories.map((category) =>  (
            <GifGrid 
            key={ category }  
            category={ category } 
            />
          )
        )}
      
      {/* Gif Item */}
    </>
  );
};


