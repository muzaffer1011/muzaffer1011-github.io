$(window).load(function(){
    if($(window).width()<768){
        $('.navbar-nav').append('<li></li>');
        $('.navbar-form').detach().appendTo('.navbar-nav li:last-child');
    }
    
})

$(document).ready(function(){
    $('.navbar-toggle').click(function(){
        $('.navbar-nav').slideToggle();
    })
    $('.controls-wrapper span').click(function(){
        //alert($(this).attr('class'))
        let x =  $('.form-input-wrapper .form-items > li.active').index();
        console.log(x);
        console.log($('.form-input-wrapper .form-items > li').length);
        let bool = false;
        let exH = 30;
        if(x == 0 && $(this).attr('class') == 'next-btn'){
            bool = true;
        }
        else if(x > 0 && x < $('.form-input-wrapper .form-items > li').length -1){
            bool = true;
        }
        else if(x == $('.form-input-wrapper .form-items > li').length -1 && $(this).attr('class') == 'prev-btn'){
            bool = true;
        }
        
        if(bool){
            //let x =  $('.form-input-wrapper .form-items li.active').index();
            if($(this).attr('class') == 'next-btn'){
                $('.form-input-wrapper .form-items li.active').removeClass('active').next().addClass('active');
            }
            else if($(this).attr('class') == 'prev-btn'){
                $('.form-input-wrapper .form-items li.active').removeClass('active').prev().addClass('active');
                x = x -2;
            }
            console.log('pressed')
            console.log('pressed if')
                
                console.log(x)
                //$('.form-input-wrapper .form-items li.active').removeClass('active').next().addClass('active');
                let h = 0;//= $('.form-input-wrapper .form-items li.active').height();
                for(let i = 0; i < x+1; i++){
                    console.log('item height : '+$('.form-input-wrapper .form-items li').eq(i).height());
                    h += $('.form-input-wrapper .form-items > li').eq(i).height()+50;
                    console.log(h)
                }
                $('.form-items').css('top', '-'+(h)+'px');
                console.log(h);
                var per = 100 / ($('.form-items > li').length - 1);
                per = Math.ceil(per);
                per = per * (x+1);
                $('#progress-status').text(per);
                per = per + '%';
                $('.form-progress').find('.progress-bar').css('width',per);
                console.log('x = '+x);
                if(x == $('.form-input-wrapper .form-items > li').length - 2){
                    $('.next-btn').hide();
                    $('.form-submit').show();
                }
                else{
                    $('.next-btn').show();
                    $('.form-submit').hide();
                }
        }
        
    })
    if($('.form-input-wrapper').length){
        $('.form-items > li').each(function(){
            console.log('hello');
            $(this).mCustomScrollbar({
                theme:"dark",
                axis:'y'
            });
        })
    }
})
