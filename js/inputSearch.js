search_input.addEventListener('keyup', (e) => {
    let itemsFound = trendingItems.filter(item => {
        return item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    })
    renderTrending(itemsFound);
})