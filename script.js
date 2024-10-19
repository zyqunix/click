const rmbReset = document.getElementById('rmbReset')
const lmbReset = document.getElementById('lmbReset')

let leftCount = 0;
let rightCount = 0;


document.addEventListener('click', function(event) {
    if (event.button === 0) {
        leftCount++;
        document.getElementById('leftClickCount').innerText = leftCount;
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Disable right-click context menu
    rightCount++;
    document.getElementById('rightClickCount').innerText = rightCount;
});

rmbReset.addEventListener('click', function() {
    rightCount = -1;
    document.getElementById('clickCount').innerText = count;
})

lmbReset.addEventListener('click', function() {
    leftCount = -1;
    document.getElementById('clickCount').innerText = count;
})
