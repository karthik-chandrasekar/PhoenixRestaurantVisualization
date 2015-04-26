    var div1=d3.select(document.getElementById('div1'));
    var div2=d3.select(document.getElementById('div2'));
    var div3=d3.select(document.getElementById('div3'));
    var div4=d3.select(document.getElementById('div4'));
	
	var div11=d3.select(document.getElementById('div11'));
    var div12=d3.select(document.getElementById('div12'));
    var div13=d3.select(document.getElementById('div13'));
    var div14=d3.select(document.getElementById('div14'));

    start();

    function onClick1() {
		deselect();

		var curr = d3.select("#main2").style("display");
        if(curr == "block") {
            curr = "none";
        } else {
            curr = "block";
        } 
		d3.select("#main2").style("display", curr);
		    }

    function onClick2() {
        deselect();
        div2.attr("class","selectedRadial");
    }

    function onClick3() {
        deselect();
        div3.attr("class","selectedRadial");
    }

    function onClick4() {
        deselect();
        div4.attr("class","selectedRadial");
    }



    function labelFunction(val,min,max) {

    }

    function deselect() {
        div1.attr("class","radial");
        div2.attr("class","radial");
        div3.attr("class","radial");
        div4.attr("class","radial");
		div11.attr("class","radial");
		div12.attr("class","radial");
        div13.attr("class","radial");
        div14.attr("class","radial");
    }


    function start() {

        var rp1 = radialProgress(document.getElementById('div1'))
                .label("FOOD")
                .diameter(150)
                .value(90)
				.onClick(onClick1)
                .render();

        var rp2 = radialProgress(document.getElementById('div2'))
                .label("AMBIENCE")
                .diameter(150)
                .value(11)
                .render();

        var rp3 = radialProgress(document.getElementById('div3'))
                .label("PRICE")
                .diameter(150)
                .minValue(0)
                .maxValue(100)
                .value(27)
                .render();

        var rp4 = radialProgress(document.getElementById('div4'))
                .label("SERVICE")
                .diameter(150)
                .value(30)
                .render();

		var rp11 = radialProgress(document.getElementById('div11'))
                .label("Mexican")
                .diameter(150)
                .value(37)
                .render();


        var rp12 = radialProgress(document.getElementById('div12'))
                .label("American")
                .diameter(150)
                .value(24)
                .render();


        var rp13 = radialProgress(document.getElementById('div13'))
                .label("Chinese")
                .diameter(150)
                .value(20)
                .render();

        var rp14 = radialProgress(document.getElementById('div14'))
                .label("American New")
                .diameter(150)
                .value(17)
                .render();
    }
