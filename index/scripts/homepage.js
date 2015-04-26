    var div1=d3.select(document.getElementById('div1'));
    var div2=d3.select(document.getElementById('div2'));
    var div3=d3.select(document.getElementById('div3'));
    var div4=d3.select(document.getElementById('div4'));

    start();

    function onClick1() {
        deselect();
        div1.attr("class","selectedRadial");
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
    }


    function start() {

        var rp1 = radialProgress(document.getElementById('div1'))
                .label("FOOD")
                .diameter(150)
                .value(90)
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


    }
