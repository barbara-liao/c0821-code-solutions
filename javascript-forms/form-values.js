
function handleSubmit(event) {
  event.preventDefault();
  var output = {};
  output.email = $form.elements.email.value;
  output.name = $form.elements.name.value;
  output.message = $form.elements.message.value;

  console.log(output);

  $form.reset();
}

var $form = document.querySelector('form');

$form.addEventListener('submit', handleSubmit);
