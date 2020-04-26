
const options = {
  responsive: true,
  legend: {
    display: true,
    position: 'bottom',
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          fontColor: '#000',
        },
      },
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        ticks: {
          max: 350,
          min: 0,
          stepSize: 50,
          fontColor: '#000',
        },
        position: 'left',
        id: 'y-axis',
        gridLines: {
          display: true,
        },
        labels: {
          show: true,
        },
      },
    ],
  },
};

const getAxisState = selectedPincodedata => {
  const { pincode, other, house, food, apparel, teansport, health, finance, education, entertainment  } = selectedPincodedata;

  return {
    labels: ['other', 'house', 'food', 'apparel', 'teansport', 'health', 'finance', 'education', 'entertainment'],
    datasets: [
        {
          label: pincode ? `Expenditure for ${pincode}` : '',
          type: 'bar',
          barThickness: 20,
          backgroundColor: '#6598cc',
          yAxisID: 'y-axis',
          data: [other, house, food, apparel, teansport, health, finance, education, entertainment],
        },
    ],
  }
};

const expenditure = [
  {
    "other": 14.54,
    "house": 302.04,
    "food": 10.02,
    "apparel": 44.87,
    "teansport": 126.11,
    "health": 120.82,
    "finance": 104.83,
    "education": 5.56,
    "entertainment": 13.98,
    "pincode": 560040
  },
  {
    "other": 15.63,
    "house": 306.98,
    "food": 10.35,
    "apparel": 43.02,
    "teansport": 126.74,
    "health": 122.7,
    "finance": 112.33,
    "education": 5.28,
    "entertainment": 14.98,
    "pincode": 560022
  },
  {
    "other": 15.58,
    "house": 296.89,
    "food": 10.07,
    "apparel": 45.53,
    "teansport": 125.18,
    "health": 118.76,
    "finance": 105.89,
    "education": 5.55,
    "entertainment": 14.12,
    "pincode": 560091
  },
  {
    "other": 15.71,
    "house": 290.46,
    "food": 10.35,
    "apparel": 43.88,
    "teansport": 119.98,
    "health": 116.18,
    "finance": 108.58,
    "education": 5.21,
    "entertainment": 14.48,
    "pincode": 560096
  },
  {
    "other": 15.05,
    "house": 294.64,
    "food": 10.08,
    "apparel": 46.77,
    "teansport": 127.41,
    "health": 117.86,
    "finance": 104.06,
    "education": 5.49,
    "entertainment": 13.88,
    "pincode": 560023
  },
  {
    "other": 17.44,
    "house": 325.0,
    "food": 10.31,
    "apparel": 41.88,
    "teansport": 121.88,
    "health": 130.0,
    "finance": 106.88,
    "education": 6.69,
    "entertainment": 14.25,
    "pincode": 560104
  },
  {
    "other": 15.27,
    "house": 290.45,
    "food": 10.21,
    "apparel": 43.54,
    "teansport": 121.91,
    "health": 116.18,
    "finance": 105.27,
    "education": 5.55,
    "entertainment": 14.04,
    "pincode": 560021
  },
  {
    "other": 15.22,
    "house": 308.32,
    "food": 9.97,
    "apparel": 45.33,
    "teansport": 126.46,
    "health": 123.33,
    "finance": 103.8,
    "education": 5.23,
    "entertainment": 13.84,
    "pincode": 560110
  },
  {
    "other": 13.28,
    "house": 301.75,
    "food": 9.51,
    "apparel": 49.17,
    "teansport": 130.92,
    "health": 120.7,
    "finance": 99.08,
    "education": 5.52,
    "entertainment": 13.21,
    "pincode": 560079
  },
  {
    "other": 15.83,
    "house": 301.59,
    "food": 10.56,
    "apparel": 47.45,
    "teansport": 128.29,
    "health": 120.64,
    "finance": 106.43,
    "education": 5.76,
    "entertainment": 14.19,
    "pincode": 560072
  },
  {
    "other": 14.19,
    "house": 314.68,
    "food": 9.72,
    "apparel": 43.67,
    "teansport": 124.38,
    "health": 125.87,
    "finance": 106.41,
    "education": 5.58,
    "entertainment": 14.19,
    "pincode": 560058
  },
  {
    "other": 14.73,
    "house": 284.85,
    "food": 9.67,
    "apparel": 43.92,
    "teansport": 122.58,
    "health": 113.94,
    "finance": 103.68,
    "education": 5.58,
    "entertainment": 13.82,
    "pincode": 560086
  },
  {
    "other": 14.82,
    "house": 310.29,
    "food": 10.2,
    "apparel": 46.32,
    "teansport": 123.27,
    "health": 124.12,
    "finance": 109.95,
    "education": 6.14,
    "entertainment": 14.66,
    "pincode": 560010
  }
]

export { getAxisState, options, expenditure };