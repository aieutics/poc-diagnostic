"use client";

import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import type { DimensionResult } from "@/lib/diagnostic-data";

interface RadarChartProps {
  results: DimensionResult[];
}

export default function RadarChart({ results }: RadarChartProps) {
  const data = results.map((r) => ({
    dimension: r.dimension.name.replace(" ", "\n"),
    score: r.percentage,
    fullMark: 100,
  }));

  return (
    <div className="w-full h-[350px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="#e5e5e5" />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{
              fontSize: 11,
              fill: "#6b6b6b",
              fontFamily: "'Lato', Arial, sans-serif",
            }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fontSize: 10, fill: "#6b6b6b" }}
            tickCount={4}
          />
          <Radar
            name="Score"
            dataKey="score"
            stroke="#FF5F1F"
            fill="#FF5F1F"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
