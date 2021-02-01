$(document).ready(function(){
    //moment.js time 
    const m = moment(); 
    console.log(m.format("H"));

    // if($("button[data-set]").val() > m.format("H")){
    //     $(this).siblings('.calendar-entry').addClass("past")
    // }
    console.log($("#btn-1").attr("data-hour").val());
    
    

    $("#clear-btn").click(function(){
        localStorage.clear();
    })

    $("#input-9").val(localStorage.getItem("Calendar9"));
    $("#input-10").val(localStorage.getItem("Calendar10"));
    $("#input-11").val(localStorage.getItem("Calendar11"));
    $("#input-12").val(localStorage.getItem("Calendar12"));
    $("#input-1").val(localStorage.getItem("Calendar1"));
    $("#input-2").val(localStorage.getItem("Calendar2"));
    $("#input-3").val(localStorage.getItem("Calendar3"));
    $("#input-4").val(localStorage.getItem("Calendar4"));
    $("#input-5").val(localStorage.getItem("Calendar5"));


    $(".button-entry").click( function(){
        var calendarEntry = $("#input-"+$(this).attr("data-hour")).val();
        localStorage.setItem("Calendar"+$(this).attr("data-hour"), calendarEntry)
    })

    $("#clear-btn").click(function(){
        localStorage.clear();
    })

$("#time").text(m.format("[Today is ]dddd[, ] MMM Mo[, ] YYYY"))
});