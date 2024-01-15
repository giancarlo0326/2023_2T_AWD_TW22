const toggle = document.getElementById('toggleDark');
const container1 = document.querySelector('.container1');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');

    if (this.classList.toggle('bi-brightness-high-fill')) {
        container1.style.backgroundColor = 'white';
        container1.style.color = 'black';
        container1.style.transition = '1s';
    } else {
        container1.style.backgroundColor = 'black';
        container1.style.color = 'white';
        container1.style.transition = '1s';
    }
});
