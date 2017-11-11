function newpage() {

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
toastr.success("Logged in succesfully!", "Login");
setTimeout(function() { window.location.href = "my-reputation.html"; }, 2500);

};

function newpage2() {

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
toastr.info("Account created! Please validate", "Sign Up");
setTimeout(function() { $('#otp').modal('show'); }, 2500);

};

function newpage3() {

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
toastr.warning("New password sent. Please check your inbox.", "Forgot Password");
setTimeout(function() { window.location.href = "login.html"; }, 2500);

};


var SnippetLogin = function() {
    var e = $("#m_login"),
        i = function(e, i, a) {
            var t = $('<div class="m-alert m-alert--outline alert alert-' + i + ' alert-dismissible" role="alert">\t\t\t<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\t\t\t<span></span>\t\t</div>');
            e.find(".alert").remove(), t.prependTo(e), t.animateClass("fadeIn animated"), t.find("span").html(a)
        },
        a = function() {
            e.removeClass("m-login--forget-password"), e.removeClass("m-login--signin"), e.addClass("m-login--signup"), e.find(".m-login__signup").animateClass("flipInX animated")
        },
        t = function() {
            e.removeClass("m-login--forget-password"), e.removeClass("m-login--signup"), e.addClass("m-login--signin"), e.find(".m-login__signin").animateClass("flipInX animated")
        },
        r = function() {
            e.removeClass("m-login--signin"), e.removeClass("m-login--signup"), e.addClass("m-login--forget-password"), e.find(".m-login__forget-password").animateClass("flipInX animated")
        },
        n = function() {
            $("#m_login_forget_password").click(function(e) {
                e.preventDefault(), r()
            }), $("#m_login_forget_password_cancel").click(function(e) {
                e.preventDefault(), t()
            }), $("#m_login_signup").click(function(e) {
                e.preventDefault(), a()
		    }), $("#m-login_otp").click(function(e) {
                e.preventDefault(), oo()
            }), $("#m_login_signup_cancel").click(function(e) {
                e.preventDefault(), t()
            })
        },
        l = function() {
            $("#m_login_signin_submit").click(function(e) {
                e.preventDefault();
                var a = $(this),
                    t = $(this).closest("form");

                t.validate({
                    rules: {
                        email: {
                            required: !0,
                            email: !0
                        },
                        password: {
                            required: !0
                        }
                    }
                }), t.valid() && (a.addClass("m-loader m-loader--right m-loader--light").attr("disabled", !0),
                $.ajax( {
                  url: api_login,
                  type: 'post',
                  dataType: 'json',
                  contentType: 'application/json; charset=utf-8',
                  traditional: true,
                  success: function( data ) {
                    document.cookie = "token=" + data.data.token + ";" + "userid" + data.data.userid + ";"
                    if( $('#remembermecheckbox').is( ':checked') ) {
                      localStorage.setItem( "token", data.data.token );
                      localStorage.setItem( "userid", data.data.userid );
                    }
                    newpage();
                  },
                  error: function( error ) {
                    i(t, "danger", "Incorrect username or password. Please try again.");
                    a.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1);
                  },
                  data: JSON.stringify({ 'email': $('#loginemailfield').val(), 'password':  $('#loginpasswordfield').val()})
                })
				//  t.ajaxSubmit({
         //
        //           data: function() {
        //             var email = $('#loginemailfield').val();
        //             var password = $('#loginpasswordfield').val();
        //             alert( JSON.stringify({ 'email':email, 'password': password}));
         //
        //             return JSON.stringify({ 'email':email, 'password': password});
        //           },
         //
        //            headers: {
        //             'content-type' : 'application/json'
        //            },
        //            method: "POST",
        //             url: api_login,
        //             success: function(e, r, n, l) {
        //                 //
        //                 // setTimeout(function() {
        //                 //     a.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), i(t, "danger", "Incorrect username or password. Please try again.");
        //                 // }, 2000);
        //                 //
        //                 //
         //
        //             }
        //         })
              )
            })
        },
        s = function() {
            $("#m_login_signup_submit").click(function(a) {
                a.preventDefault();
                var r = $(this),
                    n = $(this).closest("form");
                n.validate({
                    rules: {
                        fullname: {
                            required: !0
                        },
						fullname2: {
                            required: !0
                        },
                        email: {
                            required: !0,
                            email: !0
                        },
                        password: {
                            required: !0
                        },
                        rpassword: {
                            required: !0
                        },
                        agree: {
                            required: !0
                        }
                    }
                }), n.valid() && (r.addClass("m-loader m-loader--right m-loader--light").attr("disabled", !0),newpage2(), n.ajaxSubmit({
                    url: "",
                    success: function(a, l, s, o) {
                        setTimeout(function() {
                            r.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), n.clearForm(), n.validate().resetForm(), t();
                            var a = e.find(".m-login__signin form");
                            a.clearForm(), a.validate().resetForm(), i(a, "success", "Thank you. To complete your registration please check your email.")
                        }, 2e3)


                    }
                }))
            })
        },
        o = function() {
            $("#m_login_forget_password_submit").click(function(a) {
                a.preventDefault();
                var r = $(this),
                    n = $(this).closest("form");
                n.validate({
                    rules: {
                        email: {
                            required: !0,
                            email: !0
                        }
                    }
                }), n.valid() && (r.addClass("m-loader m-loader--right m-loader--light").attr("disabled", !0),newpage3(), n.ajaxSubmit({
                    url: "",
                    success: function(a, l, s, o) {
                        setTimeout(function() {
                            r.removeClass("m-loader m-loader--right m-loader--light").attr("disabled", !1), n.clearForm(), n.validate().resetForm(), t();
                            var a = e.find(".m-login__signin form");
                            a.clearForm(), a.validate().resetForm(), i(a, "success", "Cool! Password recovery instruction has been sent to your email.")
                        }, 2e3)
                    }
                }))
            })
        };
    return {
        init: function() {
            n(), l(), s(), o()
        }
    }
}();
jQuery(document).ready(function() {
    SnippetLogin.init()
});
