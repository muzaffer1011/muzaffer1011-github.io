
$(document).ready(function(){
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
        console.log(options);
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
})

$(window).scroll(function(){
    if($(window).scrollTop()>120){
        $('.scroll-to-top').css({"bottom":"40px"});
    }
    else{
        $('.scroll-to-top').css({"bottom":"-60px"});
    }
})