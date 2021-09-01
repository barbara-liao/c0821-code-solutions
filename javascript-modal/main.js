function handleModalOpen(event) {
  $onOff.className = 'modal onOff';
}

function handleModalClose(event) {
  $onOff.className = 'modal onOff no-display';
}

var $openModal = document.querySelector('.open-modal');
var $closeModal = document.querySelector('.close-modal');
var $onOff = document.querySelector('.onOff');

$openModal.addEventListener('click', handleModalOpen);
$closeModal.addEventListener('click', handleModalClose);
