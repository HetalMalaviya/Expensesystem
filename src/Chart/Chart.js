import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const datapointValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...datapointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
}

export default Chart;
