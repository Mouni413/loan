import React, { createContext, useState, useContext } from "react";

const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
  const [resultsArray, setResultsArray] = useState([]);

  const updateResultsArray = (data) => {
    setResultsArray(data);
  };

  return (
    <ResultsContext.Provider value={{ resultsArray, updateResultsArray }}>
      {children}
    </ResultsContext.Provider>
  );
};

export const useResults = () => useContext(ResultsContext);
