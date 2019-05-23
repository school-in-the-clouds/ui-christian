const headerClicked = document.querySelector('.top-header');

headerClicked.addEventListener('click', function(eventObject){
    headerClicked.style.color = '#990033';
});

const closure = 'closure cuz we have to';
function returnClosure () {
  return closure;
}
returnClosure();

console.log(returnClosure);