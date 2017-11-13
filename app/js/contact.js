var FormWidgets = function() {
    var e, t = function() {
            $("#m_datepicker").datepicker({
                todayHighlight: !0,
                templates: {
                    leftArrow: '<i class="la la-angle-left"></i>',
                    rightArrow: '<i class="la la-angle-right"></i>'
                }
            }), $("#m_datetimepicker").datetimepicker({
                pickerPosition: "bottom-left",
                todayHighlight: !0,
                autoclose: !0,
                format: "yyyy.mm.dd hh:ii"
            }), $("#m_timepicker").timepicker({
                minuteStep: 1,
                showSeconds: !0,
                showMeridian: !0
            }), $("#m_daterangepicker").daterangepicker({
                buttonClasses: "m-btn btn",
                applyClass: "btn-primary",
                cancelClass: "btn-secondary"
            }, function(t, i, r) {
                var a = $("#m_daterangepicker").find(".form-control");
                a.val(t.format("YYYY/MM/DD") + " / " + i.format("YYYY/MM/DD")), e.element(a)
            }), $("[data-switch=true]").bootstrapSwitch(), $("[data-switch=true]").on("switchChange.bootstrapSwitch", function() {
                e.element($(this))
            }), $("#m_bootstrap_select").selectpicker(), $("#m_bootstrap_select").on("changed.bs.select", function() {
                e.element($(this))
            }), $("#m_select2").select2({
                placeholder: "Select a state"
            }), $("#m_select2").on("select2:change", function() {
                e.element($(this))
            });
            var t = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.whitespace,
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                prefetch: "http://keenthemes.com/metronic/preview/inc/api/typeahead/countries.json"
            });
            $("#m_typeahead").typeahead(null, {
                name: "countries",
                source: t
            }), $("#m_typeahead").bind("typeahead:select", function(t, i) {
                e.element($("#m_typeahead"))
            }), $("#m_summernote").summernote({
                height: 150
            })
        },
        i = function() {
            e = $("#m_form_1").validate({
                rules: {
                    date: {
                        required: !0,
                        date: !0
                    },
                    daterange: {
                        required: !0
                    },
                    datetime: {
                        required: !0
                    },
                    time: {
                        required: !0
                    },
                    select: {
                        required: !0,
                        minlength: 2,
                        maxlength: 4
                    },
                    select2: {
                        required: !0
                    },
                    typeahead: {
                        required: !0
                    },
                    switch: {
                        required: !0
                    },
                    subject: {
                        required: !0
                    },
                    details: {
                        required: !0, minlength: 30
                    }
                },
                invalidHandler: function(e, t) {
                    var i = $("#m_form_1_msg");
                    i.removeClass("m--hide").show(), mApp.scrollTo(i, -200)
                },
                submitHandler: function(e) {
					
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

toastr.success("We will get back to you within 24 hours.", "Message sent");
				
setTimeout(function() { window.location.href = "my-reputation.html"; }, 2500);
					
					}
            })
        };
    return {
        init: function() {
            t(), i()
        }
    }
}();
jQuery(document).ready(function() {
    FormWidgets.init()
});