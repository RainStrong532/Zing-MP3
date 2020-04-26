let listItems = document.querySelectorAll('.mix_zing_choice .mix_list .list>li');
let dropDns = document.querySelectorAll('.mix_zing_choice .mix_list .list>li .dropdn_menu');
let listBtns = document.querySelectorAll('.mix_zing_choice .mix_list .list .list_btn');
let extendBtns = document.querySelectorAll('.mix_zing_choice .mix_list .list .list_btn .btn:last-child');
listItems.forEach((item, index) => {
    extendBtns[index].addEventListener('click', (e) => {
        dropDns[index].style.left = '95%'
        dropDns[index].style.display = 'block'
    })
    item.addEventListener('contextmenu', (e) => {
        dropDns.forEach((item) => {
            item.style.display = 'none'
        })
        console.log(e.offsetX)
        dropDns[index].style.display = 'block'
        dropDns[index].style.left = e.offsetX + 'px'
    }, true)
    listBtns[index].addEventListener('contextmenu', () => {
        dropDns[index].style.display = 'none'
    })
    window.addEventListener('click', (e) => {
        dropDns[index].style.display = 'none'
    }, true)
})