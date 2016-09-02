google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data_AreaAge_city = google.visualization.arrayToDataTable([
          ['Age', 'Age Group'],
          ['<5 Years', 2175],
          ['5-9 Years', 2145],
          ['10-19 Years', 4890],
		  ['20-29 Years', 6379],
		  ['30-39 Years', 5260],
		  ['40-50 Years', 6215],
		  ['50-60 Years', 6315],
		  ['60> Years', 8910]
        ]);
		var data_AreaAge_area = google.visualization.arrayToDataTable([
          ['Age', 'Age Group'],
          ['<5 Years', 2000],
          ['5-9 Years', 2400],
          ['10-19 Years', 4500],
		  ['20-29 Years', 6500],
		  ['30-39 Years', 4500],
		  ['40-50 Years', 7000],
		  ['50-60 Years', 6500],
		  ['60> Years', 4000]
        ]);
		var data_FamilyType_city = google.visualization.arrayToDataTable([
          ['Family', 'Relationship Group'],
          ['Divorced', 2515],
          ['Married', 16050],
          ['Seperated', 1195],
		  ['Single', 10110],
		  ['Widowed', 2100],
		  ['Common Law', 3700],
        ]);
		var data_FamilyType_area = google.visualization.arrayToDataTable([
          ['Family', 'Relationship Group'],
          ['Divorced', 2515],
          ['Married', 16050],
          ['Seperated', 1195],
		  ['Single', 10110],
		  ['Widowed', 2100],
		  ['Common Law', 3700],
        ]);
		var data_DwellingType_city = google.visualization.arrayToDataTable([
          ['Dwellings', 'Housing Types'],
          ['Apartment', 7735],
          ['Town Home', 1655],
          ['Semi-Detached', 655],
		  ['Detached', 7750],
		  ['Mobile Home', 315],
		  ['Other', 6140]
        ]);
		var data_DwellingType_area = google.visualization.arrayToDataTable([
          ['Dwellings', 'Housing Types'],
          ['Apartment', 7735],
          ['Town Home', 1655],
          ['Semi-Detached', 655],
		  ['Detached', 7750],
		  ['Mobile Home', 315],
		  ['Other', 6140]
        ]);
		var data_Weather = google.visualization.arrayToDataTable([
          ['Month', 'Minimum', 'Maximum', 'Average'],
          ['Jan',  -10.9,      -3.1,		  -7.0],
          ['Feb',  -10.6,      -2.1,		  -6.4],
          ['Mar',  -6.3,       2.3,		  -2.0],
          ['Apr',  0.4,      10.9,		  5.6],
		  ['May',  5.8,      17.9,		  11.8],
		  ['Jun',  11.0,      23.2,		  17.1],
		  ['Jul',  13.4,      25.8,		  19.6],
		  ['Aug',  12.6,      24.5,		  18.5],
		  ['Sep',  9.0,      20.2,		  14.6],
		  ['Oct',  3.9,      13.9,		  8.9],
		  ['Nov',  -1.2,       6.1,		  2.4],
		  ['Dec',  -7.8,      -0.7,		  -4.3]
        ]);
		var data_AveRainSnow = new google.visualization.arrayToDataTable([
          ['Type', 'Rain', 'Snow'],
          ['Jan', 17.6, 38.6],
          ['Feb', 24.1, 37.2],
          ['Mar', 43.8, 26.4],
          ['Apr', 69.9, 3.8],
          ['May', 79.6, .07],
		  ['Jun', 78.8, 0],
		  ['Jul', 95.8, 0],
		  ['Aug', 92.8, 0],
		  ['Sep', 90.4, 0],
		  ['Oct', 70.1, 1.5],
		  ['Nov', 81.2, 9.0],
		  ['Dec', 38.1, 38.6]
        ]);
					
        var options_AreaAge_city = {
          title: "Guelph",
		  titleTextStyle: { fontSize: 25, bold:'yes', fontName: 'Arial'},
		  pieHole: 0.5,
          pieSliceTextStyle: {color: 'black'},
          pieSliceText: '%',
		  height:300,
		  chartArea: {left:50, top:60, right:-50},
        };
		var options_AreaAge_area = {
          title: "Guelph East",
		  titleTextStyle: { fontSize: 25, bold:'yes', fontName: 'Arial'},
		  pieHole: 0.5,
          pieSliceTextStyle: {color: 'black'},
          pieSliceText: '%',
		  height:300,
		  chartArea: {left:50, top:60, right:-50},
        };
		var options_FamilyType_city = {
          title: "Guelph",
		  titleTextStyle: { fontSize: 25, bold:'yes', fontName: 'Arial'},
		  pieHole: 0.5,
          pieSliceTextStyle: {color: 'black'},
          pieSliceText: '%',
		  height:300,
		  chartArea: {left:50, top:60, right:-50}
        };
		var options_FamilyType_area = {
          title: "Guelph East",
		  titleTextStyle: { fontSize: 25, bold:'yes', fontName: 'Arial'},
		  pieHole: 0.5,
          pieSliceTextStyle: {color: 'black'},
          pieSliceText: '%',
		  height:300,
		  chartArea: {left:50, top:60, right:-50},
        };
		var options_DwellingType_city = {
          title: "Guelph",
		  titleTextStyle: { fontSize: 25, bold:'yes', fontName: 'Arial'},
		  pieHole: 0.5,
          pieSliceTextStyle: {color: 'black'},
          pieSliceText: '%',
		  height:300,
		  chartArea: {left:50, top:60, right:-50}
        };
		var options_DwellingType_area = {
          title: "Guelph East",
		  titleTextStyle: { fontSize: 25, bold:'yes', fontName: 'Arial'},
		  pieHole: 0.5,
          pieSliceTextStyle: {color: 'black'},
          pieSliceText: '%',
		  height:300,
		  chartArea: {left:50, top:60, right:-50},
        };
		var options_Weather = {
          title: 'Monthly Temperatures',
		  titleTextStyle: { fontSize: 20, bold:'yes'},
          curveType: 'function',
          legend: { position: 'bottom' },
		  vAxis: {title: 'Temperature (Celcius)'},
        };
		var options_AveRainSnow = {
          title: 'Average Monthly Rain & Snow Fall',
		  titleTextStyle: { fontSize: 20, bold:'yes'},
          curveType: 'function',
          legend: { position: 'bottom' },
		  vAxis: {title: 'Rainfall (mm) & Snowfall (cm)'},
        };


        var chart_AreaAge_city = new google.visualization.PieChart(document.getElementById('chart_donut_AreaAge_city'));
        chart_AreaAge_city.draw(data_AreaAge_city, options_AreaAge_city);
		var chart_AreaAge_area = new google.visualization.PieChart(document.getElementById('chart_donut_AreaAge_area'));
        chart_AreaAge_area.draw(data_AreaAge_area, options_AreaAge_area);
		var chart_FamilyType_city = new google.visualization.PieChart(document.getElementById('chart_donut_FamilyType_city'));
        chart_FamilyType_city.draw(data_FamilyType_city, options_FamilyType_city);
		var chart_FamilyType_area = new google.visualization.PieChart(document.getElementById('chart_donut_FamilyType_area'));
        chart_FamilyType_area.draw(data_FamilyType_area, options_FamilyType_area);
		var chart_DwellingType_city = new google.visualization.PieChart(document.getElementById('chart_donut_DwellingType_city'));
        chart_DwellingType_city.draw(data_DwellingType_city, options_DwellingType_city);
		var chart_DwellingType_area = new google.visualization.PieChart(document.getElementById('chart_donut_DwellingType_area'));
        chart_DwellingType_area.draw(data_DwellingType_area, options_DwellingType_area);
		var chart_Weather = new google.visualization.LineChart(document.getElementById('chart_line_Weather'));
		chart_Weather.draw(data_Weather, options_Weather);
		var chart_AveRainSnow = new google.visualization.ColumnChart(document.getElementById('chart_column_AveRainSnow'));
		chart_AveRainSnow.draw(data_AveRainSnow, options_AveRainSnow);
       
      }