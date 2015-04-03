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
        zoom: 12,
    };
    var map = new google.maps.Map(document.getElementById(divName), mapOptions);
    
    for(key in points) {
        var marker = new google.maps.Marker({
            position: points[key],
            map: map,
            title: key,
        });
    }
}

/** 
 * This is the main Object within the piece of code.
 */
function initSenti() {

    var sentiData = [];
    var sentiObj = {};
    sentiObj.loadData = function(data) {
        sentiData = data;
    }

    sentiObj.drawGraph = function(divName) {
       google.maps.event.addDomListener(window, 'load', drawRegionMap(divName, sentiData));
    }
    return sentiObj;
}

function loadMap(csvToLoad, title) {
    var toLoad = [] ;
    d3.csv(csvToLoad, function(data) {
        data.forEach(function(valueObj) {
            lat = parseFloat(valueObj.latitude);
            log = parseFloat(valueObj.longitude);
            var rest = new google.maps.LatLng(lat, log);
            toLoad.push(rest)
        });

        d3.select("#map-title").html("Top Restaurents for " + title);
        var sentiObj = initSenti();
        sentiObj.loadData(toLoad);
        sentiObj.drawGraph('pho-map');
    });
}

function drawFilter() {
// Add a filter here.
    
    svgElem = d3.select('#filter').
        append('svg');

    var currX = 10;
    var currY = 10;

    function addRow(rowName) {

        var gElem = svgElem.append('g')
            .attr('class','select')
            .on("mouseover", function() {
                console.log(d3.select(this).text());   
                d3.select(this).select('circle').attr('r', 10);
            })
            .on("mouseout", function() {
                d3.select(this).select('circle').attr('r', 5);
            })
            .on("click", function() {
                var group = d3.select(this).text() 
                var fileName = "data/" + group + ".csv";   
                loadMap(fileName, group);
            });

        gElem.append('circle').
            attr('cx', currX).
            attr('cy', currY).
            attr('class', 'circSelect').
            attr('r', 5);

        currX = currX + 20;
        currY = currY + 5;

        gElem.append('text').
            attr('x', currX).
            attr('y', currY).
            text(rowName);

        currX = 10;
        currY = currY + 15;
    }

    addRow('ratings');
    addRow('food');
    addRow('price');
    addRow('service');
    addRow('ambience');

    loadMap("data/ratings.csv", "ratings");
}
