$(document).ready(function() {
    $('#buttonNew').click(function(event) {
        event.preventDefault();

        const tarefa = $('#nova-tarefa').val().trim();

        if (tarefa !== '') {
            $('#cadastro-tarefa').append('<br><a href="#" class="tarefa-item">' + tarefa + '</a>');
            $('#nova-tarefa').val('');
        }
    });

    $('#cadastro-tarefa').on('click', '.tarefa-item', function(event) {
        event.preventDefault();
        $(this).toggleClass('riscado');
    });
});
