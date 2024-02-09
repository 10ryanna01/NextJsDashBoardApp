import { months } from "@/app/helper/Util";
import Chart from "chart.js";

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "Transactions",
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export const doughnutChartData = {
  labels: ["Reside In A City", "Reside Outside Of A city ", "Reside Overseas"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [300, 50, 100],
      backgroundColor: ["#f2bba8", "#5169b3", "#c73d51"],
      hoverOffset: 4,
    },
  ],
};
export const doughnutChartDataB = {
  labels: ["Pastel", "Blue", "Red"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [200, 150, 50],
      backgroundColor: ["#f2bba8", "#5169b3", "#c73d51"],
      hoverOffset: 4,
    },
  ],
};
export const doughnutChartDataC = {
  labels: ["Pastel", "Blue", "Red"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [120, 10, 250],
      backgroundColor: ["#f2bba8", "#5169b3", "#c73d51"],
      hoverOffset: 4,
    },
  ],
};

export const polarChartData = {
  labels: ["PPC", "Social Media", "Affiliates"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [11, 16, 7],
      backgroundColor: ["#f2bba8", "#5169b3", "#c73d51"],
    },
  ],
};

const barlabels = months({ count: 3 });
export const BarChartData = {
  labels: barlabels,
  datasets: [
    {
      label: "My First Dataset",
      data: [50, 35, 66],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
      ],
      borderWidth: 1,
    },
  ],
};

const labels = months({ count: 6 });

export const hBartData = {
  labels: labels,
  datasets: [
    {
      label: "New Subscribers ",
      data: [50, 35, 66, 23, 88, 90],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: ["#c73d51"],
      fill: true,
      barPercentage: 0.8,
      categoryPercentage: 0.8,
    },
    {
      label: "unsubscribed",
      data: [10, 20, 40, 55, 51, 31],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: ["#5169b3"],
      fill: true,
      barPercentage: 0.8,
      categoryPercentage: 0.8,
    },
  ],
};
