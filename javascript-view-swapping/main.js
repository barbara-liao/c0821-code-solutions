var $tab = document.querySelectorAll('.tab');
var $tabContainer = document.querySelector('.tab-container');

$tabContainer.addEventListener('click', handleClick);

function handleClick(e) {

  var $dataView = event.target.getAttribute('data-view');

  if (event.target.matches('.tab')) {

    for (var i = 0; i < $tab.length; i++) {

      if ($tab[i] === e.target) {

        $tab[i].className = 'tab active';

      } else {
        $tab[i].className = 'tab';
      }
    }
  }
  var $viewList = document.querySelectorAll('.view');

  for (var a = 0; a < $viewList.length; a++) {

    if ($viewList[a].dataset.view !== $dataView) {

      $viewList[a].className = 'view hidden';
    } else {
      $viewList[a].className = 'view';
    }
  }
}
