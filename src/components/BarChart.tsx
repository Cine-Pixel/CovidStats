import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core";
import { Country } from "../types";

const useChartStyles = makeStyles({
  barWrapper: {
    maxWidth: "60%",
    margin: "auto",
  },
});

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

interface Props {
  country: Country;
}

const BarChart: React.FC<Props> = ({ country }) => {
  const classes = useChartStyles();

  const generateChartData = () => {
    return {
      labels: [
        "Total Cases",
        "Total Deaths",
        "Total Recovered",
        "Active Cases",
        "New Cases",
        "New Deaths",
      ],
      datasets: [
        {
          label: "Covid Stats",
          data: [
            Number(country["Total Cases_text"].replaceAll(',', "")),
            Number(country["Total Deaths_text"].replaceAll(',', "")),
            Number(country["Total Recovered_text"].replaceAll(',', "")),
            Number(country["Active Cases_text"].replaceAll(',', "")),
            Number(country["New Cases_text"].replaceAll(',', "",)),
            Number(country["New Deaths_text"].replaceAll(',', "")),
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }

  return (
    <div className={classes.barWrapper}>
      <Bar type="bar" data={generateChartData()} options={options} />
    </div>
  );
};

export default BarChart;
