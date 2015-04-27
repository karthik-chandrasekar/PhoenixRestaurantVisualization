function calScope() {


    function init(filename, min_val, max_val, chart_header) {

        var width = 960,
            height = 136,
            cellSize = 17; // cell size

        d3.select('#calendar').selectAll('svg').remove()
            var day = d3.time.format("%w"),
                week = d3.time.format("%U"),
                percent = d3.format(".1%"),
                format = d3.time.format("%Y-%m-%d");

        var color = d3.scale.quantize()
            .domain([min_val, max_val])
            .range(d3.range(5).map(function(d) { return "q" + d + "-11"; }));

        var svg = d3.select("#calendar").selectAll("svg")
            .data(d3.range(2010, 2015))
            .enter().append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "RdYlGn")
            .append("g")
            .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

        svg.append("text")
            .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
            .style("text-anchor", "middle")
            .text(function(d) { return d; });

        var rect = svg.selectAll(".day")
            .data(function(d) { return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
            .enter().append("rect")
            .attr("class", "day")
            .attr("width", cellSize)
            .attr("height", cellSize)
            .attr("x", function(d) { return week(d) * cellSize; })
            .attr("y", function(d) { return day(d) * cellSize; })
            .datum(format);

        rect.append("title")
            .text(function(d) { return d; });

        svg.selectAll(".month")
            .data(function(d) { return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
            .enter().append("path")
            .attr("class", "month")
            .attr("d", monthPath);

        d3.csv(filename, function(error, csv) {
            var data = d3.nest()
            .key(function(d) { return d.Date; })
            .rollup(function(d) { return d[0].Count; })
            .map(csv);

        rect.filter(function(d) { return d in data; })
            .attr("class", function(d) { 
                return "day " + color(data[d]); 

            })
        .select("title")
            .text(function(d) { return d + ": " + data[d]; });
        });

        function monthPath(t0) {
            var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
                d0 = +day(t0), w0 = +week(t0),
                d1 = +day(t1), w1 = +week(t1);
            return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
                + "H" + w0 * cellSize + "V" + 7 * cellSize
                + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
                + "H" + (w1 + 1) * cellSize + "V" + 0
                + "H" + (w0 + 1) * cellSize + "Z";
        }

        d3.select(self.frameElement).style("height", "2910px");
        d3.select('#legend-title').text(chart_header)
    }

    function drawFilter() {
        // Add a filter here.

        svgElem = d3.select('#filter-calendar').
            append('svg');

        var currX = 10;
        var currY = 10;

        function addRow(filename, cal_min, cal_max, rowname) {

            var gElem = svgElem.append('g')
                .attr('class','select')
                .attr('filename',filename)
                .attr('minimum', cal_min)
                .attr('maximum', cal_max)
                .attr('rowname',rowname)
                .on("mouseover", function() {
                    console.log(d3.select(this).text());   
                    d3.select(this).select('circle').attr('r', 10);
                })
            .on("mouseout", function() {
                d3.select(this).select('circle').attr('r', 5);
            })
            .on("click", function() {
                var cal_main = d3.select(this)
                var filename = cal_main.attr('filename')
                var cal_min = cal_main.attr('minimum')
                var cal_max = cal_main.attr('maximum')
                var rowname = cal_main.attr('rowname')
                init(filename,cal_min,cal_max, rowname)
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
                text(rowname);

            currX = 10;
            currY = currY + 15;
        }
        addRow('data/PhoenixCalenderFoodData.csv',16,224, "Food quality of restaurants in Phoenix")
            addRow('data/PhoenixCalenderPrice.csv', 0,12,'Affordability of restaurants in Phoenix');
        addRow('data/PhoenixCalenderServiceData.csv',10,100,'Service quality of service in Phoenix');
        addRow('data/PhoenixCalenderAmbienceData.csv',0,32,"Ambience quality of restaurants");
        init('data/PhoenixCalenderFoodData.csv',16,224, "Food quality of restaurants in Phoenix")

    }
    drawFilter()
}
calScope();
