$(document).ready(function () {
    $("#test-button1").click(function () {
        let check = $(this).data('check') | 0;
        if (check) {
            if (confirm('Уже умеешь, мы поняли')) {
                $(this).html('У нас тут буйный');
                $(this).data('check', check);
            }
        } else {
            if (confirm('А вы умеете нажимать на кнопочки?')) {
                $(this).html('Пакуем его, ребят');
                $(this).data('check', check);
            }
        }
        check++;
        $(this).data('check', check);
    })
    $("#test-button2").click(function () {
        alert('Поздравляю! Вы умеете нажимать на кнопочки!')
    })
})
