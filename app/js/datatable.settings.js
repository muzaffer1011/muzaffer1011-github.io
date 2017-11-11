var DatatableJson=function() {
    var t=function() {
        var t=$(".m_datatable").mDatatable( {
            data: {
                type:"remote", source:"http://allsleek.com/clients/Lancelot_Contractors/test/V1.1/api/feedback.php", pageSize:10, saveState: {
                    cookie: !0, webstorage: !0
                }
            }
			
            , layout: {
                theme: "default", class: "", scroll: !1, height: 550, footer: !1
            }
            , sortable:!0, pagination:!0, columns:[ {
                field: "RecordID", title: "#", width: 50, sortable: !1, selector: !1, textAlign: "center"
            }
			
			
            , {
                field: "ProjectID", title: "Project Name/Description"
            }
			, {
                field: "SentID", title: "Sent To"
            }
			, {
                field: "DateID", title: "Date Sent"
            }
            , {
                field:"Status", title:"Status", template:function(t) {
                    var e= {
                        1: {
                            title: "Completed", class: "m-badge--success"
                        }
                        , 2: {
                            title: "In Progress", class: "m-badge--warning text-white"
                        }
                        , 3: {
                            title: "Not opened", class: "m-badge--danger"
                        }
                    }
                    ;
                    return'<span class="m-badge '+e[t.Status].class+' m-badge--wide">'+e[t.Status].title+"</span>"
                }
            }
            , {
                field:"Actions", width:110, title:"Actions", sortable:!1, overflow:"visible", template:function(t) {
                    return'\t\t\t\t\t\t<div class="dropdown '+(t.getDatatable().getPageSize()-t.getIndex()<=4?"dropup": "")+'">\t\t\t\t\t\t\t<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Resend Request</a>\t\t\t\t\t\t    \t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t'
                }
            }
            ]
        }
        ),
        e=t.getDataSourceQuery();
		

		
        $("#m_form_search").on("keyup", function(e) {
            t.search($(this).val().toLowerCase())
        }
        ).val(e.generalSearch),
        $("#m_form_status").on("change", function() {
            t.search($(this).val(), "Status")
        }

        ).val(void 0!==e.Type?e.Type:""),
        $("#m_form_status, #m_form_type").selectpicker()
    }
    ;
    return {
        init:function() {
            t()
        }
    }
}

();
jQuery(document).ready(function() {
    DatatableJson.init()
	
}

);