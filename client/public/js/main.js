// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  getLlamas();
});

// Submit button, creat a llama
$('form').on('submit', function(e){
  e.preventDefault();
  var payload = {
    name: $('#name').val(),
    age: $('#age').val(),
    spitter: spitter
  };
  if ($('#spitter').is(':checked')) {
    payload.spitter = true;
  } else {
    payload.spitter = false;
  }
$.post('/api/llamas', payload, function(data) {
  $('#message').html("Llama has been added!");
  getLlamas();
  $('.message-section').show();
});


});

function getLlamas() {
  $('#all-llamas').html("");
  $.get('/api/llamas', function(data) {
    for (var i = 0; i < data.length; i++) {
      $('#all-llamas').append(
        '<tr><td>' + data[i].name + '</td><td>' + data[i].age + '</td><td>' + data[i].spitter + '</td></tr>'
        );
        $('form input').val('');
        $('input:checkbox').removeAttr('checked');
    }
    });
  }
