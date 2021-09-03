function handleClick(e) {
  console.log('target ', event.target);
  console.log('target tagName ', event.target.tagName);
  if (e.target && e.target.nodeName === 'BUTTON') {
    var closest = e.target.closest('.task-list-item');
    console.log('closest .task-list-item', closest);
    closest.remove();
  }
}

document.addEventListener('click', handleClick);
