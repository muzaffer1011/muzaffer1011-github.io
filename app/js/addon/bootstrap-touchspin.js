var BootstrapTouchspin=function() {
    var t=function() {
        $("#m_touchspin_1, #m_touchspin_2_1").TouchSpin( {
            buttondown_class: "btn btn-secondary", buttonup_class: "btn btn-secondary", min: 0, max: 100, step: .5, decimals: 1, boostat: 5, maxboostedstep: 10
        }
        )
    }
    ,
    n=function() {
        $("#m_touchspin_1_validate").TouchSpin( {
            buttondown_class: "btn btn-secondary", buttonup_class: "btn btn-secondary", min: -1e9, max: 1e9, stepinterval: 50, maxboostedstep: 1e7, prefix: "$"
        }
        )
    }
    ;
    return {
        init:function() {
            t(),
            n()
        }
    }
}

();
jQuery(document).ready(function() {
    BootstrapTouchspin.init()
}

);