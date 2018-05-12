
var check = function() {
    $(this).css('color', 'green');
};

var del = function() {
    $(this).closest('div').remove();
};

$('.addTaskBtn').click(function() {
    let taskText = $('input').val();
    $('main').append('<div class=tasksContainer><div class=tasksDescriptionContainer><p class=tasksDescription>' + taskText + '</div><button><i class="material-icons checkIcon"style=color:#fff;font-size:4rem>check_circle</i></button> <button><i class="material-icons delIcon"style=color:#fff;font-size:4rem>delete</i></button></div>');
    $('input').val('');
    $('.checkIcon').click(check);
    $('.delIcon').click(del);    
});

$('header input').keypress(function (e) {
    let key = e.which;
    if(key == 13 && $("header input").is(":focus")) {
        let taskText = $('input').val();
        $('main').append('<div class=tasksContainer><div class=tasksDescriptionContainer><p class=tasksDescription>' + taskText + '</div><button><i class="material-icons checkIcon"style=color:#fff;font-size:4rem>check_circle</i></button> <button><i class="material-icons delIcon"style=color:#fff;font-size:4rem>delete</i></button></div>');
        $('input').val('');
        $('.checkIcon').click(check);
        $('.delIcon').click(del);
    }
});