import React, { useState, createContext } from "react";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState();

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};
