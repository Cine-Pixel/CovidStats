import React, { useState, useEffect } from "react";
import { CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import axios, { AxiosRequestConfig } from "axios";
import type { Country } from "./types";
import CountryList from "./components/CountryList";
import NavBar from "./components/NavBar";
import { theme } from "./styles/Themes";

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[] | undefined>(undefined);
  const [filteredCountries, setFilteredCountries] = useState<Country[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = () => {
      const options: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://covid-19-tracking.p.rapidapi.com/v1',
        headers: {
          'x-rapidapi-key': '776f35a2b1msh7ee7661e018052cp167240jsn8761e9bc5163',
          'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
        }
      };

      axios.request(options).then((response) => {
	      setCountries(response.data);
	      setFilteredCountries(response.data);
      }).catch((error) => {
	      console.error(error);
      });
    }

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <NavBar countries={countries} setFilteredCountries={setFilteredCountries} />
        <Grid container>
          {filteredCountries ? 
            <CountryList filteredCountries={filteredCountries} />
            : 
            <h1>loading...</h1>}
        </Grid> 
    </ThemeProvider>
  );
}

export default App;
