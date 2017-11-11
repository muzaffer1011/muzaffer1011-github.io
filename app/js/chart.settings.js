jQuery(document).ready(function() {

var barOptions_stacked = {
    tooltips: {
        enabled: true,
		yAlign: "top",
		position: "average",
		backgroundColor: 'rgba(0,0,0,1)',
		footerMarginTop:10,
		bodySpacing:5,
		yPadding:15
    },
    hover :{
        animationDuration:1
    },
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero:true,
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:14,
                min: 0,
                max: 100,
                callback: function(value){return value+ "%"},
				display:false
            },
            scaleLabel:{
                display:false
            },
           gridLines : {
                    display : false
                }, 
            stacked: true
        }],
        yAxes: [{
            gridLines: {
                display:false,
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0,
                max: 100
            },
            ticks: {fontFamily: "'Open Sans Bold', sans-serif",
			fontSize:14
            },
			scaleLabel:{
                display:false
            },
            
            stacked: true
        }]
    },
    legend:{
        display:true,
		position: 'bottom'
    },
  
    
	
    animation: {
        onComplete: function () {
            var chartInstance = this.chart;
            var ctx = chartInstance.ctx;
           
            ctx.font = "14px Open Sans";
            ctx.fillStyle = "#fff";

            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                Chart.helpers.each(meta.data.forEach(function (bar, index) {
                    data = dataset.data[index];
                        ctx.fillText(data, bar._model.x-25, bar._model.y+4);

                }),this)
            }),this);
        }
    },
    pointLabelFontFamily : "Quadon Extra Bold",
    scaleFontFamily : "Quadon Extra Bold",
};

var ctx = document.getElementById("Chart1");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["High Quality Output", "Excellent Hard Skills", "Highly Collaborative"],
        
        datasets: [{
            data: [40, 20, 30],
            backgroundColor: "#d9dadb",
            hoverBackgroundColor: "#d9dadb",
            label: "Average",
            render: 'percentage'
        },{
            data: [40, 30, 60],
            backgroundColor: "#75d8fc",
            hoverBackgroundColor: "#75d8fc",
            label: "Above Avg"
        },{
            data: [20, 50, 10],
            backgroundColor: "#01b0f0",
            hoverBackgroundColor: "#01b0f0",
            label: "Top Tier"
        }]
    },
  

    options: barOptions_stacked,
	
	

});



var ctx = document.getElementById("Chart2");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Client Facing", "Priority/Time Mgmt.", "Highly Collaborative"],
        
        datasets: [{
            data: [20, 30, 10],
            backgroundColor: "#f4516c",
            hoverBackgroundColor: "#f4516c",
            label: "Worst"
        },{
            data: [60, 40, 20],
            backgroundColor: "#e79ba8",
            hoverBackgroundColor: "#e79ba8",
            label: "Below Avg"
        },{
            data: [20, 30, 70],
            backgroundColor: "#d9dadb",
            hoverBackgroundColor: "#d9dadb",
            label: "Average"
        }]
    },
  

    options: barOptions_stacked,

});
var ctx = document.getElementById("Chart3");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Asset Valuation", "Growth Stategy", "Analytical Research"],
        
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: "#d9dadb",
            hoverBackgroundColor: "#d9dadb",
            label: "Average",
            render: 'percentage'
        },{
            data: [40, 40, 60],
            backgroundColor: "#75d8fc",
            hoverBackgroundColor: "#75d8fc",
            label: "Above Avg"
        },{
            data: [20, 30, 10],
            backgroundColor: "#01b0f0",
            hoverBackgroundColor: "#01b0f0",
            label: "Top Tier"
        }]
    },
  

    options: barOptions_stacked,

});
</script>

<script>
$(document).ready(function() {
var text = $('.text-overflow'),
     btn = $('.btn-overflow'),
       h = text[0].scrollHeight; 

if(h > 100) {
	btn.addClass('less');
	btn.css('display', 'block');
}

btn.click(function(e) 
{
  e.stopPropagation();

  if (btn.hasClass('less')) {
      btn.removeClass('less');
      btn.addClass('more');
      btn.text('View less');

      text.animate({'height': h});
	  
  } else {
      btn.addClass('less');
      btn.removeClass('more');
      btn.text('View more');
      text.animate({'height': '45px'});
  }  
});
});

Chart.elements.Rectangle.prototype.draw = function() {
    
    var ctx = this._chart.ctx;
    var vm = this._view;
    var left, right, top, bottom, signX, signY, borderSkipped, radius;
    var borderWidth = vm.borderWidth;
    // Set Radius Here
    // If radius is large enough to cause drawing errors a max radius is imposed
    var cornerRadius = 20;

    if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top? 1: -1;
        borderSkipped = vm.borderSkipped || 'bottom';
    } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left? 1: -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
    }

    // Canvas doesn't allow us to stroke inside the width so we can
    // adjust the sizes to fit if we're setting a stroke on the line
    if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize? barSize: borderWidth;
        var halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
        var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
        var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
        }
    }

    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth;

    // Corner points, from bottom-left to bottom-right clockwise
    // | 1 2 |
    // | 0 3 |
    var corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
    ];

    // Find first (starting) corner with fallback to 'bottom'
    var borders = ['bottom', 'left', 'top', 'right'];
    var startCorner = borders.indexOf(borderSkipped, 0);
    if (startCorner === -1) {
        startCorner = 0;
    }

    function cornerAt(index) {
        return corners[(startCorner + index) % 4];
    }

    // Draw rectangle from 'startCorner'
    var corner = cornerAt(0);
    ctx.moveTo(corner[0], corner[1]);

    for (var i = 1; i < 4; i++) {
        corner = cornerAt(i);
        nextCornerId = i+1;
        if(nextCornerId == 4){
            nextCornerId = 0
        }

        nextCorner = cornerAt(nextCornerId);

        width = corners[2][0] - corners[1][0];
        height = corners[0][1] - corners[1][1];
        x = corners[1][0];
        y = corners[1][1];
        
        var radius = cornerRadius;
        
        // Fix radius being too large
        if(radius > height/2){
            radius = height/2;
        }if(radius > width/2){
            radius = width/2;
        }

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);

    }

    ctx.fill();
    if (borderWidth) {
        ctx.stroke();
    }
}; 

});