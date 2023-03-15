//option 1
function changeText() {
    let getSloganId = document.getElementById('slogan');
    getSloganId.innerText = 'work for your dream';
}

// option 2:we will use this
document.getElementById('eventHandle').addEventListener('click', function () {
    document.getElementById('slogan').innerText = 'plan and work for your dream';
})