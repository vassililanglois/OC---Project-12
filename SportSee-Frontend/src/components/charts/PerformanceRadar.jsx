import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import mockPerformance from "../../mocks/mockPerformance";

function PerformanceRadar() {
  const performance = mockPerformance.data;

  // Transformer les données pour associer les bons noms
  const data = performance.data.map((item) => ({
    subject: performance.kind[item.kind],
    value: item.value,
  }));

  return (
    <div className="performance-radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={data}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#FFF"
            tick={{ fontSize: 12 }}
            tickLine={false}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceRadar;
