$(document).ready(function(){
    //moment.js time 
    const m = moment(); 
    var time = m.format("H")
    
    // if time is past then past class will be added with css values 
   for (let i = 9 ; i < 18 ; i++) {
        if($("#btn-"+i).attr("data-hour") < time ){
            $("#btn-"+i).siblings('.calendar-entry').addClass("past")
        }
        if($("#btn-"+i).attr("data-hour") > time ){
            $("#btn-"+i).siblings('.calendar-entry').addClass("future")
        }
        if($("#btn-"+i).attr("data-hour") = time ){
            $("#btn-"+i).siblings('.calendar-entry').addClass("present")
        }
   }

    $("#clear-btn").click(function(){
        localStorage.clear();
    })

    $("#input-9").val(localStorage.getItem("Calendar9"));
    $("#input-10").val(localStorage.getItem("Calendar10"));
    $("#input-11").val(localStorage.getItem("Calendar11"));
    $("#input-12").val(localStorage.getItem("Calendar12"));
    $("#input-13").val(localStorage.getItem("Calendar13"));
    $("#input-14").val(localStorage.getItem("Calendar14"));
    $("#input-15").val(localStorage.getItem("Calendar15"));
    $("#input-16").val(localStorage.getItem("Calendar16"));
    $("#input-17").val(localStorage.getItem("Calendar17"));


    $(".button-entry").click( function(){
        var calendarEntry = $("#input-"+$(this).attr("data-hour")).val();
        localStorage.setItem("Calendar"+$(this).attr("data-hour"), calendarEntry)
        
    })

    $("#clear-btn").click(function(){
        localStorage.clear();
    })

$("#time").text(m.format("[Today is ]dddd[, ] MMM Mo[, ] YYYY"))
});