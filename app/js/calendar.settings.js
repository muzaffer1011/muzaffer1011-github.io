//var $ = jQuery.noConflict();

$(document).ready(function(e) {
	//alert('hi');
	$(".fc-day-number").removeAttr('data-goto');
	
	
	var closeButton = "<i class='fa fa-close text-white' onclick='deleteEvent()'></i>";
	$(".fc-content").append(closeButton);
	
	var cellHtml = "<div class='fc-day-hover' data-target='#createEventModal' data-toggle='modal'><i class='fa fa-plus'></i> <span>Add Availability</span></div>";
	var editCell = "<div class='fc-day-hover' data-target='#createEventModal' data-toggle='modal'><i class='fa fa-edit'></i> <span>Edit Availability</span></div>";
	var addButton = "";
	var cellHTMLEnds = "";

	$("td.fc-day.fc-widget-content").hover(function(){
		if ($(this).hasClass('dayWithEventBusy')) {
			$(this).append(editCell);
		}
		else {
			$(this).append(cellHtml);
		}
		
	}).mouseleave(function() {
		
		$(".fc-day .fc-day-hover").remove();
	});
	
	
	/*if ($("td.fc-widget-content").hasClass('dayWithEventBusy')) {
		addEvent1();
	}
	else {
		alert('hi');
		addEvent();
	}*/
	
	//$("#calendar").addClass('EventAvailable');
	var busyDayClass = document.getElementsByClassName('dayWithEventBusy');
	$('.m-fc-event--primary').closest('div').parent().find(busyDayClass).addClass('EventAvailable');
	$('.m-fc-event--danger').closest('div').parent().find(busyDayClass).addClass('EventBusy');
	
	
});

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "addon/bootstrap-datepicker.js";
$("head").append(s);

function addPopup() {
	
	var overlayClass = "overlay";
	$("body").append(
		'<div class="overlay">'
		+ '<div class="Addpopup">'
		+ '<i class="fa fa-close btn-popup-close" onclick="popupclose()" />'
		+ '<div class="form-group">'
		+ '<label>Select Date</label>'
		+ '<div class="input-group date" id="datetimepicker1">'
		+ '<input type="date" class="form-control" />'
		+ '<span class="input-group-addon">'
		+ '<span class="fa fa-calendar"></span>'
		+ '</span>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="form-group">'
		
		+ '<div class="pull-left m-r-10">'
		+ '<input type="radio" name="eventtype" />'
		+ '<span>Busy</span>'
		+ '</div>'
		
		+ '<div class="pull-left m-r-10">'
		+ '<input type="radio" name="eventtype" />'
		+ '<span>Available</span>'
		+ '</div>'
		
		+ '</div>'
		
		+ '<div class="modal-footer">'
		+ '<input type="submit" value="Submit" class="btn btn-large btn-primary" />'
		+ '</div>'
		
		
		+ '</div>'
		+ '</div>'
	);
}



function editPopup() {
	var overlayClass = "overlay";
	$("body").append(
		'<div class="overlay">'
		+ '<div class="Addpopup">'
		+ '<i class="fa fa-close btn-popup-close" onclick="popupclose()" />'
		+ '<div class="form-group">'
		+ '<label>Change Date</label>'
		+ '<div class="input-group date" id="datetimepicker1">'
		+ '<input type="date" class="form-control" />'
		+ '<span class="input-group-addon">'
		+ '<span class="fa fa-calendar"></span>'
		+ '</span>'
		+ '</div>'
		+ '</div>'
		
		+ '<div class="form-group">'
		+ '<label>Edit Status</label>'
		+ '<div class="clearfix"></div>'
		+ '<div class="pull-left m-r-10">'
		+ '<input type="radio" name="eventtype" />'
		+ '<span>Busy</span>'
		+ '</div>'
		
		+ '<div class="pull-left m-r-10">'
		+ '<input type="radio" name="eventtype" />'
		+ '<span>Available</span>'
		+ '</div>'
		
		+ '</div>'
		
		+ '<div class="modal-footer">'
		+ '<input type="submit" value="Submit" class="btn btn-large btn-primary" />'
		+ '</div>'
		
		
		+ '</div>'
		+ '</div>'
	);
}



function popupclose() {
	$(".overlay").hide();
}

/*function deleteEvent() {
	.fullCalendar( 'removeEvent', '' )
}*/