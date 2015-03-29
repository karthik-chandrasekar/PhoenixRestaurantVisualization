function drawLineChart(divName) {
    var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
            ]);

    var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById(divName));
    chart.draw(data, options);
}

function drawRegionMap(divName) {

    var data = google.visualization.arrayToDataTable([
            ['Country', 'Popularity'],
            ['Phoenix,Az', 200],
        /*
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700]
        */
            ]);
    var options = {
        region : 'US'
    };

    var chart = new google.visualization.GeoChart(document.getElementById(divName));

    chart.draw(data, options);
}
