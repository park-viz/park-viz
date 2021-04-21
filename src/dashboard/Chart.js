import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, ReferenceArea } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
createData('0', 0.0730758),
createData('0.0333333', 0.0243586),
createData('0.0666667', 0),
createData('0.1', 0),
createData('0.133333', 0),
createData('0.166667', 0.205617),
createData('0.2', 0.297728),
createData('0.233333', 0.297728),
createData('0.266667', 0.0921104),
createData('0.3', 0),
createData('0.333333', 0),
createData('0.366667', 0.06575),
createData('0.4', 1.01714),
createData('0.433333', 2.53476),
createData('0.466667', 4.13568),
createData('0.5', 4.85095),
createData('0.533333', 5),
createData('0.566667', 5),
createData('0.6', 5),
createData('0.633333', 5),
createData('0.666667', 5),
createData('0.7', 5),
createData('0.733333', 5),
createData('0.766667', 5),
createData('0.8', 5),
createData('0.833333', 5),
createData('0.866667', 5),
createData('0.9', 5),
createData('0.933333', 5),
createData('0.966667', 5),
createData('1', 5),
createData('1.03333', 5),
createData('1.06667', 5),
createData('1.1', 5),
createData('1.13333', 4.78136),
createData('1.16667', 4.09227),
createData('1.2', 2.95356),
createData('1.23333', 1.79376),
createData('1.26667', 0.970981),
createData('1.3', 0.443022),
createData('1.33333', 0.154791),
createData('1.36667', 0),
createData('1.4', 0),
createData('1.43333', 0),
createData('1.46667', 0),
createData('1.5', 0),
createData('1.53333', 0),
createData('1.56667', 0),
createData('1.6', 0),
createData('1.63333', 0),
createData('1.66667', 0),
createData('1.7', 0),
createData('1.73333', 0),
createData('1.76667', 0),
createData('1.8', 0),
createData('1.83333', 0),
createData('1.86667', 0),
createData('1.9', 0),
createData('1.93333', 0),
createData('1.96667', 0),
createData('2', 0),
createData('2.03333', 0),
createData('2.06667', 0.249861),
createData('2.1', 1.08628),
createData('2.13333', 2.38141),
createData('2.16667', 3.57714),
createData('2.2', 4.40739),
createData('2.23333', 4.77893),
createData('2.26667', 5),
createData('2.3', 5),
createData('2.33333', 5),
createData('2.36667', 5),
createData('2.4', 5),
createData('2.43333', 5),
createData('2.46667', 5),
createData('2.5', 5),
createData('2.53333', 5),
createData('2.56667', 5),
createData('2.6', 5),
createData('2.63333', 5),
createData('2.66667', 5),
createData('2.7', 5),
createData('2.73333', 5),
createData('2.76667', 5),
createData('2.8', 5),
createData('2.83333', 5),
createData('2.86667', 5),
createData('2.9', 5),
createData('2.93333', 5),
createData('2.96667', 5),
createData('3', 4.732),
createData('3.03333', 4.05715),
createData('3.06667', 2.82726),
createData('3.1', 1.53072),
createData('3.13333', 0.538906),
createData('3.16667', 0.102127),
createData('3.2', 0),
createData('3.23333', 0),
createData('3.26667', 0),
createData('3.3', 0),
createData('3.33333', 0),
createData('3.36667', 0),
createData('3.4', 0),
createData('3.43333', 0),
createData('3.46667', 0),
createData('3.5', 0),
createData('3.53333', 0),
createData('3.56667', 0),
createData('3.6', 0),
createData('3.63333', 0),
createData('3.66667', 0),
createData('3.7', 0),
createData('3.73333', 0),
createData('3.76667', 0),
createData('3.8', 0),
createData('3.83333', 0),
createData('3.86667', 0),
createData('3.9', 0),
createData('3.93333', 0.0116704),
createData('3.96667', 0.0116704),
createData('4', 0.0116704),
createData('4.03333', 0),
createData('4.06667', 0.00379828),
createData('4.1', 0.180712),
createData('4.13333', 0.511752),
createData('4.16667', 1.12033),
createData('4.2', 1.76432),
createData('4.23333', 2.51503),
createData('4.26667', 3.28452),
createData('4.3', 4.01564),
createData('4.33333', 4.57264),
createData('4.36667', 4.85743),
createData('4.4', 4.97209),
createData('4.43333', 5),
createData('4.46667', 5),
createData('4.5', 5),
createData('4.53333', 5),
createData('4.56667', 5),
createData('4.6', 5),
createData('4.63333', 5),
createData('4.66667', 5),
createData('4.7', 5),
createData('4.73333', 5),
createData('4.76667', 5),
createData('4.8', 5),
createData('4.83333', 5),
createData('4.86667', 5),
createData('4.9', 5),
createData('4.93333', 5),
createData('4.96667', 5),
createData('5', 5),
createData('5.03333', 4.93084),
createData('5.06667', 4.83197),
createData('5.1', 4.60243),
createData('5.13333', 4.08709),
createData('5.16667', 3.28931),
createData('5.2', 2.07789),
createData('5.23333', 0.995722),
createData('5.26667', 0.22571),
createData('5.3', 0),
createData('5.33333', 0),
createData('5.36667', 0),
createData('5.4', 0),
createData('5.43333', 0),
createData('5.46667', 0),
createData('5.5', 0),
createData('5.53333', 0),
createData('5.56667', 0),
createData('5.6', 0),
createData('5.63333', 0),
createData('5.66667', 0),
createData('5.7', 0),
createData('5.73333', 0),
createData('5.76667', 0),
createData('5.8', 0),
createData('5.83333', 0),
createData('5.86667', 0),
createData('5.9', 0),
createData('5.93333', 0),
createData('5.96667', 0),
createData('6', 0),
createData('6.03333', 0),
createData('6.06667', 0),
createData('6.1', 0),
createData('6.13333', 0),
createData('6.16667', 0),
createData('6.2', 0),
createData('6.23333', 0),
createData('6.26667', 0),
createData('6.3', 0),
createData('6.33333', 0),
createData('6.36667', 0),
createData('6.4', 0),
createData('6.43333', 0),
createData('6.46667', 0),
createData('6.5', 0),
createData('6.53333', 0),
createData('6.56667', 0),
createData('6.6', 0)
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment width="100px" height="100px">
      <Title>Variance over time</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary}/>
      
          <YAxis type="number" domain={[0, 'dataMax']} stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Variance
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" dot={false} stroke={theme.palette.primary.main} />
          <ReferenceArea x1={'09:00'} x2={'12:00'} label="an important period" />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}