// Function needs two parameters - divname and restaurant id.
function drawLineChart(divName) {
var str="";

var jsondata={"restaurants": {"2014": {"02": {"25": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "17": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}, "05": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 1}}, "03": {"11": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 0}, "10": {"food": 1, "ambience": 1, "price": 0, "userrating": 0, "service": 1}, "20": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 0}, "14": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "17": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}, "18": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}}, "01": {"28": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}}, "06": {"13": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}}, "04": {"01": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 1}}, "05": {"02": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "12": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "20": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "14": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "17": {"food": 2, "ambience": 0, "price": 0, "userrating": 0, "service": 1}}}, "2013": {"02": {"02": {"food": 0, "ambience": 0, "price": 0, "userrating": 0, "service": 0}}, "03": {"26": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "28": {"food": 1, "ambience": 1, "price": 0, "userrating": 0, "service": 1}, "05": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}}, "01": {"26": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}}, "06": {"21": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 1}, "04": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "16": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}}, "07": {"19": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 1}, "13": {"food": 1, "ambience": 1, "price": 0, "userrating": 1, "service": 0}, "01": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "22": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "17": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 0}}, "04": {"03": {"food": 0, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "30": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "06": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}}, "05": {"28": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}, "27": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "06": {"food": 1, "ambience": 1, "price": 0, "userrating": 0, "service": 0}, "23": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}}, "08": {"01": {"food": 1, "ambience": 1, "price": 0, "userrating": 0, "service": 1}, "16": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}}, "09": {"18": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 1}, "12": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}, "21": {"food": 1, "ambience": 0, "price": 1, "userrating": 0, "service": 1}, "16": {"food": 1, "ambience": 1, "price": 0, "userrating": 1, "service": 0}}, "12": {"10": {"food": 1, "ambience": 1, "price": 0, "userrating": 0, "service": 1}, "08": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}, "05": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 0}}, "11": {"30": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 0}, "22": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 0}}, "10": {"14": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 1}, "22": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}}}, "2012": {"11": {"23": {"food": 1, "ambience": 1, "price": 1, "userrating": 0, "service": 0}, "13": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "16": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 0}, "14": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}, "05": {"food": 2, "ambience": 0, "price": 0, "userrating": 2, "service": 1}}, "10": {"24": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 0}, "14": {"food": 2, "ambience": 0, "price": 0, "userrating": 0, "service": 0}}, "12": {"10": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "29": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "04": {"food": 0, "ambience": 0, "price": 0, "userrating": 0, "service": 0}}, "06": {"11": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "19": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "08": {"food": 1, "ambience": 0, "price": 1, "userrating": 0, "service": 0}, "14": {"food": 0, "ambience": 0, "price": 0, "userrating": 1, "service": 0}}, "07": {"18": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 0}, "08": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}, "09": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "04": {"food": 2, "ambience": 1, "price": 0, "userrating": 0, "service": 1}, "16": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}}, "08": {"19": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "10": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 0}, "08": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 0}, "01": {"food": 1, "ambience": 0, "price": 0, "userrating": 0, "service": 1}, "24": {"food": 1, "ambience": 0, "price": 0, "userrating": 1, "service": 0}}, "09": {"15": {"food": 0, "ambience": 0, "price": 0, "userrating": 0, "service": 0}}}}};

var day_array=new Array();
var arr_d =new Array();
for (var k in jsondata.restaurants)
{
for(var i=0;i<12;i++){
	var day_no=(i===1?28:((i===0||i===2||i===4||i===6||i===7||i===9||i===11)?31:30));
	for(var j=0;j<day_no;j++){
	arr_d.push(k+'-'+((i+1).toString().length <2?'0'+(i+1).toString():(i+1).toString)+'-'+((j+1).toString().length <2?'0'+(j+1).toString():(j+1).toString()))
	arr_d.push(0);
	arr_d.push(0);
	arr_d.push(0);
	arr_d.push(0);
	arr_d.push(0);
	day_array.push(arr_d);
	arr_d=[];
	}
}
}

var date_string="";
var result_day = new Array();
var result_month=new Array();
var result_year=new Array();
for (var i in jsondata.restaurants)
{
    var product = jsondata.restaurants[i];
    var arr_d = new Array();
	var arr_m = new Array();
	var arr_y = new Array();
	var date_string=date_string+i;
	temp1=date_string;
	var m_food=0;
	var m_price=0;
	var m_service=0;
	var m_ambience=0;
	var m_rating=0;
	var y_food=0;
	var y_price=0;
	var y_service=0;
	var y_ambience=0;
	var y_rating=0;
	arr_y.push(temp1);
	for(var x in product){
		
		date_string=temp1+'-'+x;
		temp=date_string;
		arr_m.push(temp);
		for(var y in product[x]){
			date_string=temp+'-'+y;
			arr_d.push(date_string);		
			for(var z in product[x][y]){
				arr_d.push(product[x][y][z]);
					switch (z)
					{
						case 'food':			
						m_food+=parseInt(product[x][y][z]);
						y_food+=parseInt(product[x][y][z]);
						break;
						case 'price':			
						m_price+=parseInt(product[x][y][z]);
						y_price+=parseInt(product[x][y][z]);
						break;
						case 'service':
						m_service+=parseInt(product[x][y][z]);
						y_service+=parseInt(product[x][y][z]);
						break;
						case 'ambience':
						m_ambience+=parseInt(product[x][y][z]);
						y_ambience+=parseInt(product[x][y][z]);
						break;
						case 'userrating':
						m_rating+=parseInt(product[x][y][z]);
						y_rating+=parseInt(product[x][y][z]);
						break;
					}
			}
			result_day.push(arr_d);
			arr_d=[];
		}
		arr_m.push(m_food);
		arr_m.push(m_price);
		arr_m.push(m_service);
		arr_m.push(m_ambience);
		arr_m.push(m_rating);
		result_month.push(arr_m);
		arr_m=[];
		date_string="";
		m_food=0;
		m_price=0;
		m_service=0;
		m_ambience=0;
		m_rating=0;
	}
	arr_y.push(y_food);
	arr_y.push(y_price);
	arr_y.push(y_service);
	arr_y.push(y_ambience);
	arr_y.push(y_rating);
	result_year.push(arr_y);
	arr_y=[];
	y_food=0;
	y_price=0;
	y_service=0;
	y_ambience=0;
	y_rating=0;
		
}


result_year.sort(sortFunction);

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

result_month.sort(sortFunction);

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

	
var temp_month=1;
var temp_month_array=1;
for(var i=0;i<result_month.length;i++){
	var str1=result_month[i][0].split('-')[0];
	var str2=result_month[i][0].split('-')[1];
	var m_string=temp_month.toString();
	if (m_string.length < 2) {
        m_string = '0' + m_string;
    }
	
	if(result_month[i][0].indexOf(str1)>-1 && result_month[i][0].indexOf('-'+m_string)>-1 ){
		if(temp_month+1===13){
		temp_month_array=i+1;
		temp_month=1;		
		}
		else{
		temp_month_array=temp_month
		temp_month=temp_month+1;
		}
		}
	else{
		arr_m.push(str1+'-'+m_string);
		arr_m.push(0);
		arr_m.push(0);
		arr_m.push(0);
		arr_m.push(0);
		arr_m.push(0);
		result_month.splice(temp_month_array-1, 0, arr_m);
		result_month.join();
		temp_month=temp_month+1;
		temp_month_array=temp_month_array+1;
	}
	arr_m=[];
}

if(result_month.length < (result_year.length*12)){
	while(((result_year.length*12)-(result_month.length))!=0){
	str1=result_month[result_month.length-1][0].split('-')[0];
	str2=result_month[result_month.length-1][0].split('-')[1];
	arr_m.push(str1+'-'+((str2.charAt(0)==='0')&&((parseInt(str2.charAt(1))+1).toString().length<2)?'0'+(parseInt(str2.charAt(1))+1).toString():(parseInt(str2)+1).toString()));
	arr_m.push(0);
	arr_m.push(0);
	arr_m.push(0);
	arr_m.push(0);
	arr_m.push(0);
	result_month.push(arr_m);
	arr_m=[];
	}
	}
	
	
result_day.sort(sortFunction);

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

for(var i=0;i<day_array.length;i++){
for(var j=0;j<result_day.length;j++){
if(day_array[i][0]===result_day[j][0]){
day_array[i][1]=result_day[j][1];
day_array[i][2]=result_day[j][2];
day_array[i][3]=result_day[j][3];
day_array[i][4]=result_day[j][4];
day_array[i][5]=result_day[j][5];
}
}
}

day_array.sort(sortFunction);

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

var data = new google.visualization.DataTable();

  data.addColumn('string','Time');
  data.addColumn('number', 'Food');
  data.addColumn('number', 'Ambience');
  data.addColumn('number', 'Price');
  data.addColumn('number', 'User Rating');
  data.addColumn('number', 'Service');
  
 for(var i = 0; i < result_year.length; i++)
	data.addRow([result_year[i][0],result_year[i][1],result_year[i][2],result_year[i][3],result_year[i][4],result_year[i][5]]);
 

data.sort([{column: 0}]);



    var options = {
        title: 'Rating Trends',
        curveType: 'function',
        legend: { position: 'right' }	,	
		vAxis: {title: "Rating" ,slantedText:true, slantedTextAngle:90 },
		hAxis: {title: "Year" , slantedText:true },
		pointSize: 5,
		pointShape: 'circle'
            };

    var chart = new google.visualization.LineChart(document.getElementById(divName));
	var chart2 = new google.visualization.LineChart(document.getElementById(divName));
    chart.draw(data, options);

	google.visualization.events.addListener(chart, 'select', function () {
    var sel = chart.getSelection();
	var a=sel[0].row;
	var b=sel[0].column;
	
	var data2 = new google.visualization.DataTable();
	  data2.addColumn('string','Time');
	  data2.addColumn('number', 'Food');
	  data2.addColumn('number', 'Ambience');
	  data2.addColumn('number', 'Price');
	  data2.addColumn('number', 'User Rating');
	  data2.addColumn('number', 'Service');
  
	for(var i = 0; i < result_month.length; i++){
		if(result_month[i][0].indexOf(result_year[a][0])>-1){
			data2.addRow([result_month[i][0],result_month[i][1],result_month[i][2],result_month[i][3],result_month[i][4],result_month[i][5]]);
		}
	}
	    
		var options = {
        title: 'Rating Trends',
        curveType: 'function',
        legend: { position: 'right' }	,
		textStyle: {bold:true},
		vAxis: {title: "Rating" ,slantedText:true, slantedTextAngle:90},
		hAxis: {title: "Month" , slantedText:true },
		pointSize: 5,
		pointShape: 'circle'
            };
	data2.sort([{column: 0}]);
    chart2.draw(data2, options);
      });
	  
	  
	  google.visualization.events.addListener(chart2, 'select', function () {
    var sel = chart2.getSelection();
	var a=sel[0].row;
	var b=sel[0].column;
	
	var sel_p=chart.getSelection();
	var c=sel_p[0].row;
	
	var data3 = new google.visualization.DataTable();
	  data3.addColumn('string','Time');
	  data3.addColumn('number', 'Food');
	  data3.addColumn('number', 'Ambience');
	  data3.addColumn('number', 'Price');
	  data3.addColumn('number', 'User Rating');
	  data3.addColumn('number', 'Service');
   
      
	for(var i = 0; i < day_array.length; i++){
		if(day_array[i][0].indexOf(result_year[c][0]+((a+1).toString().length<2?('-0'+(a+1)):'-'+(a+1)))>-1){
			data3.addRow([day_array[i][0],day_array[i][1],day_array[i][2],day_array[i][3],day_array[i][4],day_array[i][5]]);
		}
	
	}
	    
		var options = {
        title: 'Rating Trends',
        curveType: 'function',
        legend: { position: 'right' }	,	
		vAxis: {title: "Rating" ,slantedText:true, slantedTextAngle:90 },
		hAxis: {title: "Day" , slantedText:true },
		pointSize: 5,
		pointShape: 'circle'
            };
	data3.sort([{column: 0}]);
    var chart3 = new google.visualization.LineChart(document.getElementById(divName));
    chart3.draw(data3, options);
      });
	  

}


	function goBack() {
    history.back();return true;
}
   