import { LineChart, Tooltip, Line, ResponsiveContainer, XAxis } from "recharts";
import { convertDayNumberToLetter } from "../../services/dataFormatting";

/**
 * React component to display the user's average sessions length in a week as a line chart.
 *
 * @returns {JSX.Element}
 *
 * @description
 * This component uses data to display the user's weekly average sessions length as numbers in a line chart.
 * It leverages the Recharts library to render the line chart.
 */

// Personnalisation du Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    const time = payload.find(
      (item) => item.dataKey === "SessionLength"
    )?.value;

    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          padding: "10px",
          fontSize: "8px",
        }}
      >
        <p style={{ margin: 0 }}>{`${time}min`}</p>
      </div>
    );
  }

  return null;
};

function AverageSessions({ averageSessions }) {
  // On adapte la structure pour le graphique
  const baseData = (averageSessions.sessions || []).map((session) => ({
    Day: convertDayNumberToLetter(session.day),
    SessionLength: session.sessionLength,
  }));

  // Ajout des points fantômes aux extrémités pour l'effet visuel
  const data = baseData.length
    ? [
        { Day: "", SessionLength: baseData[0].SessionLength },
        ...baseData,
        { Day: "", SessionLength: baseData[baseData.length - 1].SessionLength },
      ]
    : [];

  return (
    <div className="average-sessions">
      <div className="title">
        Durée moyenne des <br /> sessions
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity={0.4} />
              <stop offset="100%" stopColor="white" stopOpacity={1} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="Day"
            axisLine={false}
            tickLine={false}
            stroke="white"
            tick={{ fontSize: 12, opacity: 0.4 }}
            padding={{ left: 0, right: 0 }}
          />

          <Tooltip content={<CustomTooltip />} cursor={false} />

          {/* Ligne en dégradé */}
          <Line
            type="monotone"
            dataKey="SessionLength"
            stroke="url(#lineGradient)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255,0.5)",
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSessions;
