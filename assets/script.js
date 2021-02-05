$(document).ready(function(){
    //moment.js time 
    const m = moment(); 
    // var time = 20;
    var time = m.format("H")
    console.log(time);
    $("#time").text(m.format("[Today is ]dddd[, ] MMM Mo[, ] YYYY"))

    // if time is past then past class will be added with css values 
   for (let i = 8 ; i < 18 ; i++) {
        if($("#btn-"+i).attr("data-hour") < time ){
            $("#btn-"+i).siblings('.calendar-entry').addClass("past")
        }
        if($("#btn-"+i).attr("data-hour") == time ){
                $("#btn-"+i).siblings('.calendar-entry').addClass("present")
        }
        if($("#btn-"+i).attr("data-hour") > time ){
            $("#btn-"+i).siblings('.calendar-entry').addClass("future")
            console.log(time);
        }
        }

    // clears localStorage with button
    $("#clear-btn").click(function(){
        localStorage.clear();
    })
    // get localStorage from for loop
    for (let i = 9; i < 17; i++) {
        $("#input-"+i).val(localStorage.getItem("Calendar"+i));
    }
    // set localStorage from button 
    $(".button-entry").click( function(){
        var calendarEntry = $("#input-"+$(this).attr("data-hour")).val();
        localStorage.setItem("Calendar"+$(this).attr("data-hour"), calendarEntry)
    })
});