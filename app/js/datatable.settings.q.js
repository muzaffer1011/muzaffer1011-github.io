var DatatableJson=function() {
    var t=function() {
        var t=$(".m_datatable").mDatatable( {
            data: {
                type:"remote", source:"http://allsleek.com/clients/Lancelot_Contractors/test/V1.1/api/feedback.q.php", pageSize:10, saveState: {
                    cookie: !0, webstorage: !0
                }
            }
			
            , layout: {
                theme: "default", class: "", scroll: !1, height: 550, footer: 0
            }
            , sortable:0, pagination:0, columns:[ {
                field: "Title", title: "Title"
            }
			
			
            , {
                field: "ProjectID", title: "Data Entered"
           
            }
            , {
                field:"Actions", width:110, title:"Actions", sortable:!1, overflow:"visible", template:function(t) {
                    return'\t\t\t\t\t\t<div class="dropdown '+(t.getDatatable().getPageSize()-t.getIndex()<=4?"dropup": "")+'">\t\t\t\t\t\t\t<a href="#" class="btn m-btn m-btn--hover-primary m-btn--icon m-btn--icon-only m-btn--pill">                                <i class="la la-edit"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\t\t\t\t\t\t    \t'
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