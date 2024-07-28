$('form').on('submit', function(e) {
    e.preventDefault();
    const newListItem =$('#newListItem').val();
    const newItem =$('<li style="display: none"></li>');
    $(`<li>${newListItem}</li>`).appendTo(newItem);
    $(newItem).appendTo('ul');
    $(newItem).fadeIn(200);
    $('#newListItem').val('');
})

$('#deleteTasks').on('click', function() {
    $('ul').empty();
})

$('#theList').on('click', 'li', function(e) {
    if (!$(e.taget).is('button')) {
        $(this).toggleClass('lineThrough');
    }
})