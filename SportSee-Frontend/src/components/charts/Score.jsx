import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import mockUserInfos from "../../mocks/mockUserInfos";

function Score() {
  const score = mockUserInfos.data.todayScore || mockUserInfos.data.score;

  const data = [
    {
      name: "score",
      value: score * 100, // par ex. 80
      fill: "#FF0000",
    },
    {
      name: "max",
      value: 100,
      fill: "none", // ou "transparent", pour qu’elle ne soit pas visible
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
        <p className="score-value">{score * 100}%</p>
        <p className="score-subtext">
          de votre <br />
          objectif
        </p>
      </div>
    </div>
  );
}

export default Score;
