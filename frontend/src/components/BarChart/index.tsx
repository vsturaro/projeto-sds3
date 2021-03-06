import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then((response) => {
                const data = response.data as SaleSuccess[];
                const mylabels = data.map(x => x.sellerName);
                const myseries = data.map(x => round(100.0 * x.deals / x.visited, 1));

                setChartData({
                    labels: {
                        categories: mylabels
                    },
                    series: [
                        {
                            name: "% Sucesso",
                            data: myseries
                        }
                    ]
                });
                //console.log(chartData);

            });

    }, []);


    type SiriesData = {
        name: string;
        data: number[];
    }
    type ChartData = {
        labels: {
            categories: string[];
        }
        series: SiriesData[];
    }

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

/* const mockData = {
        labels: {
            categories: ['João', 'Mário César', 'Kalline', 'Edson', 'Paulo']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };
*/
    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;
