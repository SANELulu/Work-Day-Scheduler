$(document).ready(function(){
    // $("#input-9").attr("placeholder", localStorage.getItem("Calendar Entry"));
    // $("#input-10").attr("placeholder", localStorage.getItem("Calendar Entry"));
    // $("#input-11").attr("placeholder", localStorage.getItem("Calendar Entry"));
    // $("#input-12").attr("placeholder", localStorage.getItem("Calendar Entry"));
    // $("#input-1").attr("placeholder", localStorage.getItem("Calendar Entry"));
    // $("#input-2").attr("placeholder", localStorage.getItem("Calendar Entry"));
    // $("#input-3").attr("placeholder", localStorage.getItem("Calendar Entry"));
    // $("#input-4").attr("placeholder", localStorage.getItem("Calendar Entry"));
    // $("#input-5").attr("placeholder", localStorage.getItem("Calendar Entry"));

    // console.log(JSON.parse(localStorage.getItem("Calendar Entry")))
    var calendarDates = []
    var calendar = []
    calendar.push($(".calendar-entry").val());
    
    
    if ($(".calendar-entry").val()==null){
        
    }



    $("#btn-9").click(function(){
        $("#input-9").attr("placeholder", $("#input-9").val());
        calendarDates.push($("#input-9").val())
        console.log(calendarDates);
        localStorage.setItem("Calendar Entry", calendarDates)
    })

    $("#btn-10").click(function(){
        
        $("#input-10").attr("placeholder", $("#input-10").val());
        calendarDates.push($("#input-10").val())
        console.log(calendarDates);
        localStorage.setItem("Calendar Entry", calendarDates)
        // calendarDates.push($("#input-10").val())
        // console.log(calendarDates);
        
    })
    // $("#btn-11").click(function(){
    //     $("#input-11").attr("placeholder", $("#input-11").val());
    //     localStorage.setItem("Calendar Entry", $("#input-11").val())
    // })
    // $("#btn-12").click(function(){
    //     $("#input-12").attr("placeholder", $("#input-12").val());
    //     localStorage.setItem("Calendar Entry", $("#input-12").val())
    // })
    // $("#btn-1").click(function(){
    //     $("#input-9").attr("placeholder", $("#input-1").val());
    //     localStorage.setItem("Calendar Entry", $("#input-1").val())
    // })
    // $("#btn-2").click(function(){
    //     $("#input-9").attr("placeholder", $("#input-2").val());
    //     localStorage.setItem("Calendar Entry", $("#input-2").val())
    // })
    // $("#btn-3").click(function(){
    //     $("#input-9").attr("placeholder", $("#input-3").val());
    //     localStorage.setItem("Calendar Entry", $("#input-3").val())
    // })
    // $("#btn-4").click(function(){
    //     $("#input-9").attr("placeholder", $("#input-4").val());
    //     localStorage.setItem("Calendar Entry", $("#input-4").val())
    // })
    // $("#btn-5").click(function(){
    //     $("#input-5").attr("placeholder", $("#input-5").val());
    //     localStorage.setItem("Calendar Entry", $("#input-5").val())
    // })

















});