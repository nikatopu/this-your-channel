import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // The analytics data states
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();

        setData(jsonData);
        setError(null);
      } catch (e) {
        setError(e.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ theme, setTheme, data, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
