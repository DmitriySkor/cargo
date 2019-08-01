// Переключалка на карте в таблице
$("#option1").click(function (e) {
    e.preventDefault();
    $("#result_map").addClass('active');
    $("#result_table").removeClass('active');
});

$("#option2").click(function (e) {
    e.preventDefault();
    $("#result_map").removeClass('active');
    $("#result_table").addClass('active');
});

// Калькулятор доставки появлениее результата
$("#delivery-calculator-1").click(function (e) {
    e.preventDefault();
    $(".calculator-before-result-text").removeClass('active');
    $(".calculator-result").addClass('active');
});

$("#delivery-calculator-2").click(function (e) {
    e.preventDefault();
    $(".calculator-before-result-text").removeClass('active');
    $(".calculator-result").addClass('active');
});


//MODAL IN MODAL

// $("#enter-modal").modal("hide");//закрыть все окна
// $("#lost_pass_modal").modal('show');//открыть нужное

    $('#enter-modal').hide();
