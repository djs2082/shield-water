var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];


           // open sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
//  /open siedenav


// close sidenav
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// /close sidenav



var h;
var n2;
var n3;
var n4;
var chart_total_water;
var chart_water_flow;
var chart_ph;
var chart_turbidity;

// draw node1 line graph on main page
var node1_line_graph=[];
var node1_line_graph_turbidity=[];
function draw_node1_line_graph() {
$.ajax({
url: "./nodes_files/get_node1_data.php", 
datatype: "JSON",
contentType:false,     
cache: false,            
processData:false, 
async:true,                    
success: function(data)  
{
var i=0;
data_points=$.parseJSON(data);
if(data_points.length==0)
{
    document.getElementById('node1_closed').innerHTML="Not recieving data from Main Vishnupuri Dam";
    document.getElementById('node1_closed').style.display='block';
    return;
}
for(i=0;i<data_points.length;i++)
{
    node1_line_graph.pop();
    node1_line_graph_turbidity.pop();
}
for(i=0;i<data_points.length;i++)
{
node1_line_graph.push({x: 12-i,label: data_points[i][0],y: parseInt(data_points[i][1])});
node1_line_graph_turbidity.push({x: 12-i,label: data_points[i][0],y: parseInt(data_points[i][2])})

} 

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + ' ' + months[parseInt(mm-1)] + ' ' + yyyy;


chart_ph = new CanvasJS.Chart("node1_line_graph", {
	title :{
        text: "PH level at Vishnupuri Dam on "+today
    },
    legend:{
        fontSize: 20,
        fontFamily: "tamoha",
        fontColor: "Sienna"      
      },
	axisY: {
        title: 'PH of water',
        maximum: 14,
		includeZero: false
    },  
    axisX: {
        title: 'TimeStamp'

    },    
	data: [{
        type: "line",
        showInLegend: true,
        legendText: "Ph",
		dataPoints: node1_line_graph
    }]
});

chart_turbidity = new CanvasJS.Chart("node1_line_graph_turbidity", {
    title :{
        text: "Turbidity level at Vishnupuri Dam on "+today
    },
    legend:{
        fontSize: 20,
        fontFamily: "tamoha",
        fontColor: "Sienna"      
      },
    axisY: {
        title: " Turbidity(in ntu)",
        includeZero: false
    },
    axisX: {
        title: "Timestamp"

    },      
    data: [{
        type: "line",
        showInLegend: true,
        legendText: "Turbidity",
        dataPoints: node1_line_graph_turbidity
    }]
});

chart_turbidity.render();
chart_ph.render();
}
});
}





var node2_line_graph=[];
var node2_line_graph_total_water=[];
var node2_line_graph_tw=[]
function draw_node2_line_graph() {
$.ajax({
url: "./nodes_files/get_node2_data.php", 
datatype: "JSON",
contentType:false,     
cache: false,            
processData:false, 
async:true,                    
success: function(data)  
{
var i=0;
data_points=$.parseJSON(data);
if(data_points.length==0)
{
    document.getElementById('node2_closed').innerHTML="Not recieving data from Main Vishnupuri Dam";
    document.getElementById('node2_closed').style.display='block';
    return;
}
for(i=0;i<data_points.length;i++)
{
     node2_line_graph.pop();
    //  node2_line_graph_tw.pop();
     node2_line_graph_total_water.pop();
}
for(i=0;i<data_points.length;i++)
{
node2_line_graph.push({x: data_points.length-i,label: data_points[i][0],y: parseInt(data_points[i][1])});
// node2_line_graph_tw.push({x: 12-i,label: data_points[i][0],y: parseInt(data_points[i][3])})
node2_line_graph_total_water.push({x: data_points.length-i,label: data_points[i][0],y: parseInt(data_points[i][2])})

} 

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + ' ' + months[parseInt(mm-1)] + ' ' + yyyy;


chart_water_flow = new CanvasJS.Chart("node1_line_graph", {
	title :{
        text: "WaterFlow Rate at Vazirabad on "+today
    },
    legend:{
        fontSize: 20,
        fontFamily: "tamoha",
        fontColor: "Sienna"      
      },
	axisY: {
        title: 'Waterflow Rate',
		includeZero: false
    },  
    axisX: {
        title: 'TimeStamp'

    },    
	data: [{
        type: "line",
        showInLegend: true,
        legendText: "WaterFlow Rate",
		dataPoints: node2_line_graph
    }]
});

chart_total_water = new CanvasJS.Chart("node1_line_graph_turbidity", {
    title :{
        text: "Total Water at Vazirabad on "+today
    },
    legend:{
        fontSize: 20,
        fontFamily: "tamoha",
        fontColor: "Sienna"      
      },
    axisY: {
        title: "Total Water(in litres)",
        includeZero: false
    },
    axisX: {
        title: "Timestamp"

    },      
    data: [{
        type: "line",
        showInLegend: true,
        legendText: "Total Water",
        dataPoints: node2_line_graph_total_water
    }]
});

chart_water_flow.render();
chart_total_water.render();
}
});
}




var node3_line_graph=[];
var node3_line_graph_total_water=[];
function draw_node3_line_graph() {
$.ajax({
url: "./nodes_files/get_node3_data.php", 
datatype: "JSON",
contentType:false,     
cache: false,            
processData:false, 
async:true,                    
success: function(data)  
{
    //alert(data);
var i=0;
data_points=$.parseJSON(data);
if(data_points.length==0)
{
    document.getElementById('node3_closed').innerHTML="Not recieving data from Main Vishnupuri Dam";
    document.getElementById('node3_closed').style.display='block';
    return;
}
for(i=0;i<data_points.length;i++)
{
     node3_line_graph.pop();
     
}
//node3_line_graph_total_water.pop();
for(i=0;i<data_points.length;i++)
{
node3_line_graph.push({x: data_points.length-i,label: data_points[i][0],y: parseInt(data_points[i][1])});

} 
//node3_line_graph_total_water.push({y: parseInt(data_points[data_points.length-1][2])})

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + ' ' + months[parseInt(mm-1)] + ' ' + yyyy;


chart_water_flow = new CanvasJS.Chart("node1_line_graph", {
	title :{
        text: "WaterFlow Rate at Anand-Nagar on "+today
    },
    legend:{
        fontSize: 20,
        fontFamily: "tamoha",
        fontColor: "Sienna"      
      },
	axisY: {
        title: 'Waterflow Rate',
		includeZero: false
    },  
    axisX: {
        title: 'TimeStamp'

    },    
	data: [{
        type: "line",
        showInLegend: true,
        legendText: "WaterFlow Rate",
		dataPoints: node3_line_graph
    }]
});

chart_water_flow.render();
draw_node3_bar_graph();
    //chart_total_water.render();
    }
    });
    }  





function draw_node3_bar_graph() {
    $.ajax({
    url: "./nodes_files/get_node3_bar_data.php", 
    datatype: "JSON",
    contentType:false,     
    cache: false,            
    processData:false, 
    async:true,                    
    success: function(data)  
    {
    // alert(data);
    var i=0;
    data_points=$.parseJSON(data);
    if(data_points.length==0)
    {
        document.getElementById('node3_closed').innerHTML="Not recieving data from Main Vishnupuri Dam";
        document.getElementById('node3_closed').style.display='block';
        return;
    }
    for(i=0;i<data_points.length;i++)
    {
         node3_line_graph_total_water.pop();
         
    }
    //node3_line_graph_total_water.pop();
    for(i=0;i<data_points.length;i++)
    {
        node3_line_graph_total_water.push({label: ' ',y: parseInt(data_points[i][1])});
    
    } 
    //node3_line_graph_total_water.push({y: parseInt(data_points[data_points.length-1][2])})
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + ' ' + months[parseInt(mm-1)] + ' ' + yyyy;
    chart_total_water = new CanvasJS.Chart("node1_line_graph_turbidity", {
        title :{
            text: "Total Water at Anand-Nagar on "+today
        },
        legend:{
            fontSize: 20,
            fontFamily: "tamoha",
            fontColor: "Sienna"      
          },
        axisY: {
            title: " Total Water(in letre)",
            includeZero: false
        },
        axisX: {
            title: "Timestamp"
    
        },      
        data: [{
            type: "column",
            showInLegend: true,
            legendText: "Total Water",
            dataPoints: node3_line_graph_total_water
        }]
    });
    
    //chart_water_flow.render();
    chart_total_water.render();
    }
    });
    }  







    // function draw_node2_bar_graph() {
    //     $.ajax({
    //     url: "get_node2_bar_data.php", 
    //     datatype: "JSON",
    //     contentType:false,     
    //     cache: false,            
    //     processData:false, 
    //     async:true,                    
    //     success: function(data)  
    //     {
    //     alert(data);
    //     var i=0;
    //     data_points=$.parseJSON(data);
    //     if(data_points.length==0)
    //     {
    //         document.getElementById('node2_closed').innerHTML="Not recieving data from Main Vishnupuri Dam";
    //         document.getElementById('node2_closed').style.display='block';
    //         return;
    //     }
    //     for(i=0;i<data_points.length;i++)
    //     {
    //          node2_line_graph.pop();
             
    //     }
    //     //node3_line_graph_total_water.pop();
    //     for(i=0;i<data_points.length;i++)
    //     {
    //         node2_line_graph_total_water.push({label: data_points[i][0],y: parseInt(data_points[i][1])});
        
    //     } 
    //     //node3_line_graph_total_water.push({y: parseInt(data_points[data_points.length-1][2])})
        
    //     var today = new Date();
    //     var dd = String(today.getDate()).padStart(2, '0');
    //     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //     var yyyy = today.getFullYear();
    //     today = dd + ' ' + months[parseInt(mm-1)] + ' ' + yyyy;
    //     chart_total_water = new CanvasJS.Chart("node1_line_graph_turbidity", {
    //         title :{
    //             text: "Total Water Vazirabad on "+today
    //         },
    //         legend:{
    //             fontSize: 20,
    //             fontFamily: "tamoha",
    //             fontColor: "Sienna"      
    //           },
    //         axisY: {
    //             title: " Turbidity(in ntu)",
    //             includeZero: false
    //         },
    //         axisX: {
    //             title: "Timestamp"
        
    //         },      
    //         data: [{
    //             type: "column",
    //             showInLegend: true,
    //             legendText: "Turbidity",
    //             dataPoints: node2_line_graph_total_water
    //         }]
    //     });
        
    //     //chart_water_flow.render();
    //     chart_total_water.render();
    //     }
    //     });
    //     }  



    


    




var node4_line_graph=[];
var node4_line_graph_total_water=[];
function draw_node4_line_graph() {
$.ajax({
url: "./nodes_files/get_node4_data.php", 
datatype: "JSON",
contentType:false,     
cache: false,            
processData:false, 
async:true,                    
success: function(data)  
{
// alert(data);
var i=0;
data_points=$.parseJSON(data);
// if(data_points.length==0)
// {
//     document.getElementById('node4_closed').innerHTML="Not recieving data from Main Vishnupuri Dam";
//     document.getElementById('node4_closed').style.display='block';
//     return;
// }
for(i=0;i<data_points.length;i++)
{
     node4_line_graph.pop();
     node4_line_graph_total_water.pop();
}
for(i=0;i<data_points.length;i++)
{
node4_line_graph.push({x: 12-i,label: data_points[i][0],y: parseInt(data_points[i][1])});
node4_line_graph_total_water.push({x: 12-i,label: data_points[i][0],y: parseInt(data_points[i][2])})

} 

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + ' ' + months[parseInt(mm-1)] + ' ' + yyyy;


chart_water_flow = new CanvasJS.Chart("node1_line_graph", {
	title :{
        text: "WaterFlow Rate at Kabra Nagar on "+today
    },
    legend:{
        fontSize: 20,
        fontFamily: "tamoha",
        fontColor: "Sienna"      
      },
	axisY: {
        title: 'Waterflow Rate',
		includeZero: false
    },  
    axisX: {
        title: 'TimeStamp'

    },    
	data: [{
        type: "line",
        showInLegend: true,
        legendText: "WaterFlow Rate",
		dataPoints: node4_line_graph
    }]
});

chart_total_water = new CanvasJS.Chart("node1_line_graph_turbidity", {
    title :{
        text: "Total Water at Kabra Nagar on "+today
    },
    legend:{
        fontSize: 20,
        fontFamily: "tamoha",
        fontColor: "Sienna"      
      },
    axisY: {
        title: "Total Water (in liter)",
        includeZero: false
    },
    axisX: {
        title: "Timestamp"

    },      
    data: [{
        type: "line",
        showInLegend: true,
        legendText: "Total Water",
        dataPoints: node4_line_graph_total_water
    }]
});

chart_water_flow.render();
chart_total_water.render();
}
});
}



function home()
{
    clearInterval(h);
    clearInterval(n2);
    clearInterval(n3);
    clearInterval(n4);
    draw_node1_line_graph();
    h=setInterval(draw_node1_line_graph,5000);
    
}
function node2()
{
clearInterval(h);
clearInterval(n3);
clearInterval(n4);
chart_ph.destroy();
chart_turbidity.destroy();
draw_node2_line_graph();
draw_node2_bar_graph();
n2=setInterval(draw_node2_line_graph,5000);
}
function node3()
{
clearInterval(h);
clearInterval(n2);
clearInterval(n4);
draw_node3_line_graph();
draw_node3_bar_graph();

n3=setInterval(draw_node3_line_graph,5000);
}
function node4()
{
clearInterval(h);
clearInterval(n2);
clearInterval(n3);
draw_node4_line_graph();
n4=setInterval(draw_node4_line_graph,5000);
}


window.onload=function()
{
    draw_node1_line_graph();
    // draw_node1_line_graph_turbidity();
    h=setInterval(draw_node1_line_graph,5000)
}