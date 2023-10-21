const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', () => {

        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })

        li.classList.add('active');
    })
});

const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sideBar = document.getElementById('sidebar');

menuBar.addEventListener('click', function() {
    sideBar.classList.toggle('hide');
})

if (window.innerWidth < 768){
    sideBar.classList.add('hide');
}
