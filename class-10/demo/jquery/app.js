let state = {};

let source = document.getElementById('content-template').innerHTML;
let template = Handlebars.compile(source);

$('#btn').on('click', handleClick);
$('#words').on('change', handleWords);

function handleWords() {
  state.words = $(this).val();
  console.log(state.words);
}

function handleClick(event) {
  event.preventDefault();
  state.words = state.words
    .split('')
    .reverse()
    .join('');

  render();
}

function init() {
  state.words = 'nothing to see here';
  render();
}

function render() {
  $('#content').html(template(state));
}

$(function() {
  init();
});
