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

function drawRegionMap(divName, points) {

    var mapOptions = {
        center: points[0],
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById(divName), mapOptions);
}

/** 
 * This is the main Object within the piece of code.
 */
function initSenti() {

    var sentiData = ['Latitude', 'Longitude'];
    var sentiObj = {};
    sentiObj.loadData = function(data) {
        sentiData = data;
    }

    sentiObj.drawGraph = function(divName) {
       google.maps.event.addDomListener(window, 'load', drawRegionMap(divName, sentiData));
    }
    return sentiObj;
}

function initScript() {

    var csvToLoad = "data/ratings.csv"; 
    var toLoad = [] ;
    d3.csv(csvToLoad, function(data) {
        data.forEach(function(valueObj) {
            lat = parseFloat(valueObj.latitude);
            log = parseFloat(valueObj.longitude);
            var rest = new google.maps.LatLng(lat, log);
            toLoad.push(arrObj)
        });

        var sentiObj = initSenti();
        sentiObj.loadData(toLoad);
        sentiObj.drawGraph('pho_map');
    });
}

