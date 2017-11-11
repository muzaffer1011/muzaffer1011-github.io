var FormControls=function() {
    var e=function() {
        $("#m_form_1").validate( {
            rules: {
                email: {
                    required: !0, email: !0
                }
                , url: {
                    required: !0
                }
                , option: {
                    required: !0
                }
                , options: {
                    required: !0, minlength: 2, maxlength: 4
                }
                , memo: {
                    required: !0, minlength: 30, maxlength: 300
                }
                , checkbox: {
                    required: !0
                }
                , checkboxes: {
                    required: !0, minlength: 1, maxlength: 2
                }
                , radio: {
                    required: !0
                }
				 , pass: {
                    required: !0
                }
				, fname: {
                    required: !0
                }
				, title: {
                    required: !0
                }
				, company: {
                    required: !0
                }
				, addr1: {
                    required: !0
                }
				, addr2: {
                    required: !0
                }
				, addr3: {
                    required: !0
                }
				
            }
            , invalidHandler:function(e, r) {
                var i=$("#m_form_1_msg");
                i.removeClass("m--hide").show(), mApp.scrollTo(i, -200)
            }
            , submitHandler:function(e) {
				
				  toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "900",
  "timeOut": "2000",
  "extendedTimeOut": "500",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

toastr.success("Redirecting..", "Requests Sent!");
				
setTimeout(function() { window.location.href = "request-feedback.html"; }, 2500);
				
				}
        }
        )
    }
    ,
    r=function() {
        $("#m_form_2").validate( {
            rules: {
                email: {
                    required: !0, email: !0
                }
                , url: {
                    required: !0
                }
                , digits: {
                    required: !0, digits: !0
                }
                , creditcard: {
                    required: !0, creditcard: !0
                }
                , phone: {
                    required: !0, phoneUS: !0
                }
                , option: {
                    required: !0
                }
                , options: {
                    required: !0, minlength: 2, maxlength: 4
                }
                , memo: {
                    required: !0, minlength: 10, maxlength: 100
                }
                , checkbox: {
                    required: !0
                }
                , checkboxes: {
                    required: !0, minlength: 1, maxlength: 2
                }
                , radio: {
                    required: !0
                }
            }
            , invalidHandler:function(e, r) {
                var i=$("#m_form_2_msg");
                i.removeClass("m--hide").show(), mApp.scrollTo(i, -200)
            }
            , submitHandler:function(e) {}
        }
        )
    }
    ;
    return {
        init:function() {
            e(),
            r()
        }
    }
}

();
jQuery(document).ready(function() {
    FormControls.init()
}

);