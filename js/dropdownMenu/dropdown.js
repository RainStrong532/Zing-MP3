let listItems = document.querySelectorAll('.list>li');
let dropDns = document.querySelectorAll('.list>li .dropdn_menu');
let listBtns = document.querySelectorAll('.list .list_btn');
let extendBtns = document.querySelectorAll('.list .list_btn .btn:last-child');
listItems.forEach((item, index) => {
    extendBtns[index].addEventListener('click', (e) => {
        dropDns[index].style.left = '95%'
        dropDns[index].style.display = 'block'
    })
    item.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        dropDns.forEach((item) => {
            item.style.display = 'none'
        })
        console.log(e.offsetX)
        dropDns[index].style.display = 'block'
        dropDns[index].style.left = e.offsetX + 20 + 'px'
        return false;
    }, true)
    listBtns[index].addEventListener('contextmenu', (e) => {
        e.preventDefault();
        dropDns[index].style.display = 'none';
        return false;
    })
    window.addEventListener('click', (e) => {
        dropDns[index].style.display = 'none'
    }, true)
})