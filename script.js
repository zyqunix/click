const lmbReset = document.getElementById('lmbReset');
const rmbReset = document.getElementById('rmbReset');

let leftCount = 0;
let rightCount = 0;

document.addEventListener('click', function(event) {
    if (event.button === 0 && event.target.tagName !== 'BUTTON') {
        leftCount++;
        document.getElementById('leftClickCount').innerText = leftCount;
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    if (event.target.tagName !== 'BUTTON') {
        rightCount++;
        document.getElementById('rightClickCount').innerText = rightCount;
    }
});

lmbReset.addEventListener('click', function() {
    leftCount = 0;
    document.getElementById('leftClickCount').innerText = leftCount;
});

rmbReset.addEventListener('click', function() {
    rightCount = 0;
    document.getElementById('rightClickCount').innerText = rightCount;
});
