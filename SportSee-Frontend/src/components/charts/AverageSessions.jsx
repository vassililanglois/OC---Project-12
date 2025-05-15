import { LineChart, Tooltip, Line, ResponsiveContainer, XAxis } from "recharts";
import mockAverageSessions from "../../mocks/mockAverageSessions";

function AverageSessions() {
  // Données de base
  const baseData = mockAverageSessions.data.sessions.map((session) => ({
    Day: session.day,
    SessionLength: session.sessionLength,
  }));

  // Ajout des points fantômes aux extrémités
  const data = [
    { Day: "", SessionLength: baseData[0].SessionLength },
    ...baseData,
    { Day: "", SessionLength: baseData[baseData.length - 1].SessionLength },
  ];

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
          {/* Dégradé */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity={0.4} />
              <stop offset="100%" stopColor="white" stopOpacity={1} />
            </linearGradient>
          </defs>

          {/* Axe X sans ligne, sans tick line */}
          <XAxis
            dataKey="Day"
            axisLine={false}
            tickLine={false}
            stroke="white"
            tick={{ fontSize: 12, opacity: 0.4 }}
            padding={{ left: 0, right: 0 }}
          />

          {/* Tooltip stylé */}
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              color: "black",
              border: "none",
              fontSize: "12px",
            }}
            labelStyle={{ display: "none" }}
            cursor={false}
          />

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
