import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { TableCell, TableRow, IconButton, Collapse, Box } from "@material-ui/core";

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Country } from "../types";
import BarChart from "./BarChart";

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const CountryListItem = (props: { country: Country }) => {
  const { country } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {country.Country_text}
        </TableCell>
        <TableCell align="right">{country["Total Cases_text"]}</TableCell>
        <TableCell align="right">{country["Total Deaths_text"]}</TableCell>
        <TableCell align="right">{country["Total Recovered_text"]}</TableCell>
        <TableCell align="right">{country["Active Cases_text"]}</TableCell>
        <TableCell align="right">{country["New Cases_text"]}</TableCell>
        <TableCell align="right">{country["New Deaths_text"]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
                <BarChart country={country}/>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default CountryListItem;
