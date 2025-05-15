import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";
import mockActivity from "../../mocks/mockActivity.json";

function WeeklyCaloriesWeigth() {
  const data = mockActivity.data.sessions.map((session, index) => ({
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
              style={{ backgroundColor: "#020203" }}
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

      <BarChart
        width={835}
        height={245}
        data={data}
        barCategoryGap={20}
        barGap={8}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />{" "}
        <XAxis dataKey="name" tickLine={false} />{" "}
        <YAxis tickLine={false} axisLine={false} orientation="right" />{" "}
        <Tooltip />
        <Bar
          dataKey="Poids"
          fill="#020203"
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
    </div>
  );
}

export default WeeklyCaloriesWeigth;
