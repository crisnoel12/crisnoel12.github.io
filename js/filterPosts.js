$(document).ready(function() {
    'use strict';

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber'];
    var startYear = 2017;
    var currentYear = new Date().getFullYear();
    var monthInput = $('#month');
    var yearInput = $('#year');
    var href = ""
    var year = "";
    var month = "";

    // Populate months select options
    $.each(months, function(i, month){
        if (i < 10) {
            monthInput.append('<option value="0'+ (i + 1) +'">'+ month +'</option>');   
        } else {
            monthInput.append('<option value="'+ (i + 1) +'">'+ month +'</option>');
        }
    });

    // Populate years select options
    for (var i = startYear; i <= currentYear; i++) {
        yearInput.append('<option value="'+ i +'">'+ i +'</option>'); 
    }

    // Check if url exists based on href, if doesnt exist prevent submission
    $("#filterBtn").on("click", function (e){
        // Set href value to match select values
        year = yearInput.val();
        month = monthInput.val();
        if (month != "" && year != "") {
            href = "archive/" + year + "/" + month;
        } else if (month != "" && year == "") {
            year = currentYear;
            href = "archive/" + year + "/" + month;
        } else if (year != "") {
            href = "archive/" + year;
        } else {
            return false;
        }
        $.ajax({
            type: 'HEAD',
            url: href,
            success: function() {
                window.location.href = href;
            },
            error: function() {
                e.preventDefault();
                month = parseInt(month - 1);
                $('.flash-message').css("display", "initial");
                $('.flash-message p').text("No posts for " + months[month] + " " + year);
            }
        });
    });
});