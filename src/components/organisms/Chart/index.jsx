import { useAppContext } from "../../../lib/AppContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const { data, loading } = useAppContext();

  if (loading) return <div>Loading analytics...</div>;

  const chartData = data.watchTimeMonthly;
  const formatYAxis = (tickItem) => {
    return `${tickItem / 1000}k`;
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="original"
            name="Original Channel"
            stroke="#A0A0AB"
          />
          <Line
            type="monotone"
            dataKey="expanded"
            name="Expanded"
            stroke="#EB3D3D"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
