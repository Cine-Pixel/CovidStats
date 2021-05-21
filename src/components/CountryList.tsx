import React from "react";
import { TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody } from "@material-ui/core";
import CountryListItem from "./CountryListItem";
import { Country } from "../types";

interface Props {
  filteredCountries: Country[] 
}

const CountryList: React.FC<Props> = ({filteredCountries}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Country</TableCell>
            <TableCell align="right">Total Cases</TableCell>
            <TableCell align="right">Total Deaths</TableCell>
            <TableCell align="right">Total Recovered</TableCell>
            <TableCell align="right">Acrive Cases</TableCell>
            <TableCell align="right">New Cases</TableCell>
            <TableCell align="right">New Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCountries.map((country,idx) => (
            <CountryListItem key={idx} country={country} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CountryList;