import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { converToPercent } from "../../services/dataFormatting";

/**
 * React component to display the user's score as a radial chart.
 *
 * @returns {JSX.Element}
 *
 * @description
 * This component uses data to display the user's current score as a percentage.
 * It leverages the Recharts library to render the radial chart.
 */

function Score({ score }) {
  const data = [
    {
      name: "score",
      value: score * 100,
      fill: "#FF0000",
    },
    {
      name: "max",
      value: 100,
      fill: "none",
    },
  ];

  return (
    <div className="score">
      <h2 className="score-title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="80%"
          startAngle={80}
          endAngle={440}
          barSize={10}
          data={data}
        >
          <RadialBar dataKey="value" cornerRadius={10} clockWise />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="score-text">
        <p className="score-value">{converToPercent(score)}</p>
        <p className="score-subtext">
          de votre <br />
          objectif
        </p>
      </div>
    </div>
  );
}

export default Score;
