/**
 * Function to normalize between 1 and 5
 */ 
function normalize(min, max, val) {

    var mapper = d3.scale.quantize().domain([min, max]).range([1, 3]);

    return mapper(val);
}

function loadColorMap() {

    var min = 0;
    var max = 0;
    var colorObj = {};
    var prevMap = null;
    var mapper = d3.scale.quantize();
//    var colors     = d3.scale.category20b().range();
    var colors     = ["blue", "green","yellow", "orange", "red"];
    mapper.range(colors);

    colorObj.setMin = function(minArg) {
        min = minArg;
    }

    colorObj.setMax = function(maxArg) {
        max = maxArg;
    }

    colorObj.setMinMax = function(minArg, maxArg) {
        this.setMin(minArg);
        this.setMax(maxArg);
        mapper.domain([min, max]); 
    }

    colorObj.drawHeatMapScale = function(min, max) {

        var numOfColors = colors.length;
        if(prevMap) {
            prevMap.remove();
        }

        var width = 400 * (numOfColors/10); // 10 appropriate for 400
            var height = 30
            var colorMap = d3.select("#color-map")
            .attr("width", width)
            .attr("height", height * 2)
            .append("g");
        var count = 0;
        var diff = (max - min)/numOfColors;
        var maxDispRating = 5;
        var minDispRating = 0;
        var dispDiff = (maxDispRating - minDispRating)/numOfColors;
        // Adding 0.005 just so as to have the mapper work properly.
        // This ensures that values fall inside the bin.
        for(var i = min + 0.005; i < max ; i += diff) {
            var group = d3.select("#color-map")
                .select("g");

            group.append("rect")
                .attr("width", width/numOfColors)
                .attr("height", height)
                .attr("y", 0)
                .attr("x", count * width/numOfColors)
                .style("fill", mapper(i));

            group.append("text")
                .text(d3.format(".3s")(count))
                .attr("y", height + 12)
                .attr("x", count * width/numOfColors);
            count++;
        }
        prevMap = colorMap;
    }

    colorObj.getColor = function(value) {
        return mapper(value);
    }

    return colorObj;
}


function drawRegionMap(map, mapData, colorMapObj) {

    var points = mapData.data; 

    var heatData = [];
    for(key in points) {
       var restCirc = {
            strokeColor : colorMapObj.getColor(points[key].magnitude),
            fillColor : colorMapObj.getColor(points[key].magnitude),
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillOpacity: 0.35,
            map : map,
            center : points[key].position,
            radius : 100, //* normalize(mapData.min, mapData.max, points[key].magnitude),
        }
        
        /*
        heatData[key] = {
            location : points[key].position,
            weight   : points[key].magnitude
        }
        */
        new google.maps.Circle(restCirc);
    }
    /*
    var heatMap = new google.maps.visualization.HeatmapLayer({
          data: heatData
    });
    heatMap.setMap(map);
    */
}

/** 
 * This is the main Object within the piece of code.
 */
function initSenti() {

    var sentiData = [];
    var sentiObj = {};
    var map = null;
    sentiObj.loadData = function(data) {
        sentiData = data;
    }

    sentiObj.drawGraph = function(divName, colorMapObj) {

        var mapOptions = {
            center: sentiData.data[0].position,
            zoom: 10,
        };
        map = new google.maps.Map(document.getElementById(divName), mapOptions);
        google.maps.event.addDomListener(window, 'load', drawRegionMap(map, sentiData, colorMapObj));
    }

    /**
     * Load the heat map using the existing data.
     */
    sentiObj.heatMap = function() {

        
    }
    return sentiObj;
}

function newpoint(pos, mag) {
    var posObj = {};
    posObj.position  = pos;
    posObj.magnitude = mag;
    return posObj;
}

/**
 * Map loads the heat map realted stuff too as they are all one in our case.
 */
function loadMap(csvToLoad, title, colorMapObj) {
    var toLoad = {
        data : []
    } ;
    var min = 500;
    var max = 0;
    d3.csv(csvToLoad, function(data) {
        data.forEach(function(valueObj) {
            var lat = parseFloat(valueObj.latitude);
            var log = parseFloat(valueObj.longitude);
            var star = parseFloat(valueObj.stars);
            if(star < min) {
                min = star;
            } 
            if (star > max) {
                max = star;
            }
            var restPos = new google.maps.LatLng(lat, log);
            toLoad.data.push(newpoint(restPos, star));
        });

        colorMapObj.setMinMax(min, max);
        colorMapObj.drawHeatMapScale(min, max);
        console.log("Min" + min);
        console.log("Max" + max);
        d3.select("#map-title").html("Top Restaurents for " + title);
        var sentiObj = initSenti();
        toLoad.min = min;
        toLoad.max = max;
        sentiObj.loadData(toLoad);
        sentiObj.drawGraph('pho-map', colorMapObj);
    });
}

function drawAll() {

    drawFilter();
}

function drawFilter() {
// Add a filter here.
    
    svgElem = d3.select('#filter').
        append('svg');

    var currX = 10;
    var currY = 10;
    var colorMapObj = loadColorMap();

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
                loadMap(fileName, group, colorMapObj);
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

    loadMap("data/ratings.csv", "ratings", colorMapObj);
}
