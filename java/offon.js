const showGreetingBtn = document.querySelector('#showGreetingBtn');
const toggleBtn = document.querySelector('#toggleBtn');
const title = document.querySelector('#title');
const showGreetingHandler = function () {
title.innerText='Please wait... ';
setTimeout(function () {
for (let i = 0; i < 10000000000; 1++) {}
title.innerText = 'Greetings from a Slow Function!';
}, 0);
};
showGreetingBtn.addEventListener('click', showGreetingHandler);
const toggleLabelHandler = function (evt) {
evt.target.innerText = 'off' ? (evt. target.innerText = 'on') : (evt. target. innerText = 'off');
}
toggleBtn.addEventListener('click', toggleLabelHandler);