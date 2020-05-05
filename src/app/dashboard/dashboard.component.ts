import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboarddataService } from './dashboarddata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public _data: DashboarddataService) {}

  public bill_data: any[];
  public bill_data_display: any[] = [];
  public bill_data_name_display: any[] = [];

  ngOnInit() {
    this._data.getTopOrder().subscribe((data1: any[]) => {
      this.bill_data = data1;
      for (let i = 0; i < data1.length; i++) {
        this.bill_data_display.push(this.bill_data[i].pro_price);
        this.bill_data_name_display.push(this.bill_data[i].pro_name);
      }
      console.log(this.bill_data_display);
    });
  }

//   LineChart=[];
//   BarChart=[];
//   PieChart=[];

//   ngOnInit()
//   {
//   // Line chart:
//   this.LineChart = new Chart('lineChart', {
//   type: 'line',
//   data: {
//   labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
//   datasets: [{
//     label: 'Number of Items Sold in Months',
//     data: [9,7,3,5,2,10,15,16,19,3,1,9],
//     fill:true,
//     lineTension:0.2,
//     borderColor:"red",
//     borderWidth: 1
//   }]
//   },
//   options: {
//   title:{
//     text:"Line Chart",
//     display:true
//   },
//   scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero:true
//         }
//       }]
//     }
//   }
// });

//   // Bar chart:
//   this.BarChart = new Chart('barChart', {
//   type: 'bar',
//   data: {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [{
//     label: '# of Votes',
//     data: [9,7,3,5,2,10],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(255, 206, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(255, 159, 64, 0.2)'
//     ],
//     borderColor: [
//       'rgba(255,99,132,1)',
//       'rgba(54, 162, 235, 1)',
//       'rgba(255, 206, 86, 1)',
//       'rgba(75, 192, 192, 1)',
//       'rgba(153, 102, 255, 1)',
//       'rgba(255, 159, 64, 1)'
//     ],
//     borderWidth: 1
//   }]
// },
// options: {
//   title:{
//     text:"Bar Chart",
//     display:true
//   },
//   scales: {
//     yAxes: [{
//     ticks: {
//       beginAtZero:true
//     }
//   }]
//  }
// }
// });

// // pie chart:
// this.PieChart = new Chart('pieChart', {
// type: 'pie',
// data: {
// labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
// datasets: [{
//     label: '# of Votes',
//     data: [9,7,3,5,2,10],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(255, 206, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(255, 159, 64, 0.2)'
//     ],
//     borderColor: [
//       'rgba(255,99,132,1)',
//       'rgba(54, 162, 235, 1)',
//       'rgba(255, 206, 86, 1)',
//       'rgba(75, 192, 192, 1)',
//       'rgba(153, 102, 255, 1)',
//       'rgba(255, 159, 64, 1)'
//     ],
//     borderWidth: 1
//  }]
// },
// options: {
//  title:{
//   text:"Bar Chart",
//   display:true
//  },
//  scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero:true
//             }
//           }]
//         }
//       }
//     });
//   }


  public pieData: any[] = [
    { category: "Cash on Delivery", value: 40 },
    { category: "Paypal", value: 50 },
    { category: "Credit/Debit Card", value: 10 },
  ];

  public series: any[] = [
    {
      name: "Medicines",
      data: [
        200,500,750,300,200,100,50,80,86,80,124,321
      ],
    },
    {
      name: "HealthCare Products",
      data: [
        100,200,450,100,40,10,90,100,806,890,324,121
      ],
    },
  ];
  public categories: string[] = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ];
}
