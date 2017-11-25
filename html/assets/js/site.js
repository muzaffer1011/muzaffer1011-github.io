// $(window).load(function(){
//     if($window.width()<768){
        
//     }
// })
$(document).ready(function(){
    if($(window).width()<768){
        $('header.header, .content').toggleClass('close-menu'); 
    }
    $('.accord-header').click(function(){
        var $accordBody = $(this).next();
        $(this).toggleClass('open');
        $(this).find('.fa').toggleClass('fa-angle-down');
        $accordBody.slideToggle();
    })
    $('.menu-btn').click(function(){
        $('header.header, .content').toggleClass('close-menu');
    })
    $('[data-toggle="m-popover"]').popover({
        trigger: 'hover'
    })
    if($('#good-attribute-chart').length){
        var html = attributeCharts({
            "labels" : ['Hight Quality Output', 'Excellent Hard Skills', 'Highly Collaborative'],
            "values" : [
                        [40, 40, 20],
                        [20,30,50],
                        [30,40,30]
            ],
            "colors" : ["#c2e3ef","#85d3f0","#00b0f0"],
            "legends" : ["Average", "Above Avg", "Top Tier"]
        });
        $('#good-attribute-chart').append(html);
    }
    if($('#bad-attribute-chart').length){
        var html = attributeCharts({
            "labels" : ['Client Facing', 'Priority / Time Mngt', 'Highly Collaborative'],
            "values" : [
                        [40, 40, 20],
                        [20,30,50],
                        [30,40,30]
            ],
            "colors" : ["#6e6e6e","#9b9a9a","#bdbcbc"],
            "legends" : ["Worst", "Below Avg", "Average"]
        });
        $('#bad-attribute-chart').append(html);
    }
   if($('#rate-chart').length){
        var html = attributeCharts({
            "labels" : ['Asser Valuation', 'Growth Strategy', 'Analytical Research'],
            "values" : [
                        [40, 40, 20],
                        [20,30,50],
                        [30,40,30]
            ],
            "colors" : ["#c2e3ef","#85d3f0","#00b0f0"],
            "legends" : ["Average", "Above Avg", "Top Tier"]
        });
        $('#rate-chart').append(html);
   }
    function attributeCharts(options){
        var labels = options.labels;
        var values = options.values;
        var colors = options.colors;
        var legends = options. legends;
        var html = `<ul class="attribute-list">`;
        for(var i = 0; i< labels.length; i++){
            html += `
                    <li>
                    <span class="chart-label">${labels[i]}</span>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-label="${legends[0]}" style="width: ${values[i][0]}%; background-color:${colors[0]}" aria-valuenow="${values[i][0]}" aria-valuemin="0" aria-valuemax="100">${values[i][0]}</div>
                        <div class="progress-bar" role="progressbar" data-label="${legends[1]}" style="width: ${values[i][1]}%; background-color:${colors[1]}" aria-valuenow="${values[i][1]}" aria-valuemin="0" aria-valuemax="100">${values[i][1]}</div>
                        <div class="progress-bar" role="progressbar" data-label="${legends[2]}" style="width: ${values[i][2]}%; background-color:${colors[2]}" aria-valuenow="${values[i][2]}" aria-valuemin="0" aria-valuemax="100">${values[i][2]}</div>
                    </div>
                    </li>
            `; 
        }
        html +=`
            <li class="legend">
                <span data-label = "${legends[0]}"><i style="background:${colors[0]}"></i>${legends[0]}</span>
                <span data-label = "${legends[1]}"><i style="background:${colors[1]}"></i>${legends[1]}</span>
                <span data-label = "${legends[2]}"><i style="background:${colors[2]}"></i>${legends[2]}</span>
            </li>
        </ul>`;
        return html;
    }
    $('.legend span').on('click',function(){
        var ind = $(this).index();
        console.log(ind);
        $(this).parents('.attribute-list').find('.progress').each(function(){
            $(this).find('.progress-bar').eq(ind).toggleClass('zeroWidth');
        });
    })
    $('.scroll-to-top').click(function(){
        $('html,body').animate({scrollTop:0},500);
    })

    /*Circle Progress*/
    var myCanvas = document.getElementById('my_canvas');
    var myCanvas2 = document.getElementById('my_canvas2');
        var p1=0.70,p2=0.75,p3=0.8,headingSize=30,sublineSize=14,min_Radius=45,gap_Width = 10
        arc_Width = 15, center_x = 115, center_y=140, infoLine_Len = 150, infoLine_Hor=50;
        
        if($(window).width()<1250){
            headingSize = 20;
            sublineSize = 12;
            myCanvas.setAttribute("width","300");
            myCanvas2.setAttribute("width","300");
            min_Radius = 30;
            gap_Width = 5;
            arc_Width = 10;
            center_x = 95;
            center_y=110;
            infoLine_Len = 100;
            infoLine_Hor=50;
        }
        if($(window).width()<768){
            headingSize = 14;
            sublineSize = 12;
            myCanvas.setAttribute("width",$(window).width()-85);
            myCanvas.setAttribute("height",175);
            myCanvas2.setAttribute("width",$(window).width()-85);
            myCanvas2.setAttribute("height",175);
            min_Radius = 15;
            gap_Width = 3;
            arc_Width = 5;
            center_x = 50;
            center_y=110;
            infoLine_Len = 90;
            infoLine_Hor=30;
        }
        
        var circle = new ProgressCircle({
            canvas: myCanvas,
            minRadius: min_Radius, // Inner radius of the innermost circle
            arcWidth: arc_Width, // Width of each circle
            gapWidth: gap_Width, // Space between adjacent circles
            centerX: center_x, // X coordinate of the circle center
            centerY: center_y, // Y coordinate of the circle center
            infoLineLength: infoLine_Len, // Length of the info line
            horizLineLength: infoLine_Hor, // Length of the horizontal info line
            infoLineBaseAngle: Math.PI / 6, // Start angle of the info line
            infoLineAngleInterval: Math.PI / 8, // Angle between info lines
        });

        
        
        circle.addEntry({
            fillColor: 'rgba(194, 227, 239, 1)',
            outlineColor: 'rgba(194, 227, 239, 1)', // (Optional)
            progressListener: function() {return p1;},
            infoListener: function() {return `<h3 style="font-size:${headingSize}px; color:#00b0f0;">
                ${p1*100}% <small style="font-size:${sublineSize}px;">Highest Quality Output</small>
                </h3>`;},// (Optional)
        }).addEntry({
            fillColor: 'rgba(133, 211, 240, 1)',
            outlineColor: 'rgba(133, 211, 240, 1)', // (Optional)
            progressListener: function() {return p2;},
            infoListener: function() {return `<h3 style="font-size:${headingSize}px; color:#00b0f0;">
                ${p2*100}% <small style="font-size:${sublineSize}px;">Highest Quality Output</small>
                </h3>`;},// (Optional)
        }).addEntry({
            fillColor: 'rgba(0, 176, 240, 1)',
            outlineColor: 'rgba(0, 176, 240, 1)', // (Optional)
            progressListener: function() {return p3;},
            infoListener: function() {return `<h3 style="font-size:${headingSize}px; color:#00b0f0;">
                ${p3*100}% <small style="font-size:${sublineSize}px;">Highest Quality Output</small>
                </h3>`;},// (Optional)
        });
        circle.start();
        setTimeout(function(){
            circle.stop();
            circle2.stop();
        },1000);

        var c2p1=0.48,c2p2=0.30,c2p3=0.18;
        var circle2 = new ProgressCircle({
            canvas: myCanvas2,
            minRadius: min_Radius, // Inner radius of the innermost circle
            arcWidth: arc_Width, // Width of each circle
            gapWidth: gap_Width, // Space between adjacent circles
            centerX: center_x, // X coordinate of the circle center
            centerY: center_y, // Y coordinate of the circle center
            infoLineLength: infoLine_Len, // Length of the info line
            horizLineLength: infoLine_Hor, // Length of the horizontal info line
            infoLineBaseAngle: Math.PI / 6, // Start angle of the info line
            infoLineAngleInterval: Math.PI / 8, // Angle between info lines
        });

        circle2.addEntry({
            fillColor: 'rgba(189, 188, 188, 1)',
            outlineColor: 'rgba(189, 188, 188, 1)', // (Optional)
            progressListener: function() {return c2p1;},
            infoListener: function() {return `<h3 style="font-size:${headingSize}px; color:#787878;">
                ${c2p1*100}%  <small style="font-size:${sublineSize}px; margin-top:-15px;">Highly Collaborative</small>
                </h3>`;},// (Optional)
        }).addEntry({
            fillColor: 'rgba(155, 154, 154, 1)',
            outlineColor: 'rgba(155, 154, 154, 1)', // (Optional)
            progressListener: function() {return c2p2;},
            infoListener: function() {return `<h3 style="font-size:${headingSize}px; color:#787878;">
                ${c2p2*100}%  <small style="font-size:${sublineSize}px; margin-top:-15px;">Priority/Time Mngt</small>
                </h3>`;},// (Optional)
        }).addEntry({
            fillColor: 'rgba(110, 110, 110, 1)',
            outlineColor: 'rgba(110, 110, 110, 1)', // (Optional)
            progressListener: function() {return c2p3;},
            infoListener: function() {return `<h3 style="font-size:${headingSize}px; color:#787878;">
                ${c2p3*100}%  <small style="font-size:${sublineSize}px; margin-top:-50px;">Client Facing</small>
                </h3>`;},// (Optional)
        });
        circle2.start();
        
})

$(window).scroll(function(){
    if($(window).scrollTop()>120){
        $('.scroll-to-top').css({"bottom":"40px"});
    }
    else{
        $('.scroll-to-top').css({"bottom":"-60px"});
    }
})