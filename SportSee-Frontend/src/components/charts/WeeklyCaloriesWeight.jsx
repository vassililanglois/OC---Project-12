import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

/**
 * React component to display the user's weight and calories loss in a week as a bar chart.
 *
 * @returns {JSX.Element}
 *
 * @description
 * This component uses data to display the user's weekley weight and calories loss as numbers.
 * It leverages the Recharts library to render the bar chart.
 */

// Personnalisation du Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length === 2) {
    const poids = payload.find((item) => item.dataKey === "Poids")?.value;
    const calories = payload.find((item) => item.dataKey === "Calories")?.value;

    return (
      <div
        style={{
          backgroundColor: "#ff0000",
          color: "#fff",
          padding: "10px",
          fontSize: "7px",
          lineHeight: "24px",
        }}
      >
        <p style={{ margin: 0 }}>{`${poids} kg`}</p>
        <p style={{ margin: 0 }}>{`${calories} kCal`}</p>
      </div>
    );
  }

  return null;
};

function WeeklyCaloriesWeigth({ sessions }) {
  const data = (sessions || []).map((session, index) => ({
    name: `${index + 1}`,
    Poids: session.kilogram,
    Calories: session.calories,
  }));

  return (
    <div className="weekly-calories-weigth">
      <div className="chart-infos">
        <h2>Activité quotidienne</h2>
        <div className="chart-legend">
          <div className="legend-weight">
            <div
              className="legend-color"
              style={{ backgroundColor: "#282D30" }}
            ></div>
            <p className="legend-text">Poids (kg)</p>
          </div>
          <div className="legend-calories">
            <div
              className="legend-color"
              style={{ backgroundColor: "#ff0000" }}
            ></div>
            <p className="legend-text">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap={20} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />{" "}
          <XAxis dataKey="name" tickLine={false} />{" "}
          <YAxis tickLine={false} axisLine={false} orientation="right" />{" "}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
          />
          <Bar
            dataKey="Poids"
            fill="#282D30"
            radius={[3.5, 3.5, 0, 0]}
            barSize={7}
          />
          <Bar
            dataKey="Calories"
            fill="#ff0000"
            radius={[3.5, 3.5, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyCaloriesWeigth;
