import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

/**
 * React component to display the user's performance as a radar chart.
 *
 * @returns {JSX.Element}
 *
 * @description
 * This component uses data to display the user's performances as numbers in a radar.
 * It leverages the Recharts library to render the radar chart.
 */

function PerformanceRadar({ kind, data }) {
  // Transformer les données pour associer les bons noms

  const radarData = data.map((item) => ({
    subject: kind[item.kind],
    value: item.value,
  }));

  return (
    <div className="performance-radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius="70"
          margin={{ top: 0, right: 20, bottom: 0, left: 20 }}
          data={radarData}
        >
          <PolarGrid gridType="polygon" radialLines={false} />

          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>

      <span className="corner-label" style={{ top: "15%", left: "50%" }}>
        Intensité
      </span>
      <span className="corner-label" style={{ top: "30%", left: "80%" }}>
        Vitesse
      </span>
      <span className="corner-label" style={{ top: "70%", left: "80%" }}>
        Force
      </span>
      <span className="corner-label" style={{ top: "85%", left: "50%" }}>
        Endurance
      </span>
      <span className="corner-label" style={{ top: "70%", left: "20%" }}>
        Energie
      </span>
      <span className="corner-label" style={{ top: "30%", left: "20%" }}>
        Cardio
      </span>
    </div>
  );
}

export default PerformanceRadar;
