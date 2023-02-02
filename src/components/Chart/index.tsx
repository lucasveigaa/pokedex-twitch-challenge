import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
    Tooltip,
} from 'recharts'

import { type ChartProps } from './types'

export const Chart = ({ data }: ChartProps) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis
                    dataKey="subject"
                    fontSize={8}
                    style={{ display: 'none' }}
                />
                <Radar
                    fontSize={8}
                    dataKey="stats"
                    stroke="#003566"
                    fill="#003566"
                    fillOpacity={0.6}
                />
                <Tooltip />
            </RadarChart>
        </ResponsiveContainer>
    )
}
