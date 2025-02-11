import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Text, Card, Box } from "@radix-ui/themes";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 12000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 12000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 12000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 12000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 12000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 8000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 12000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 11000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 4000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 1000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 10) + 1,
  },
];

function Diagram() {
  return (
    <Card>
      <Box pb="2">
        <Text size="3" weight="bold" mb="5">
          Visitors
        </Text>
      </Box>
      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Bar
            dataKey="total"
            fill="currentColor"
            radius={[4, 4, 0, 0]}
            className="fill-primary"
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
export default Diagram;
