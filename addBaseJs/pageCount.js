function amountOfPages(summary) {
    let pageAmount = 0;
    let pagesList = '';

    do {
        pageAmount++;
        pagesList += pageAmount;
    } while (summary != pagesList.length);

    return pageAmount;
}

console.log(amountOfPages(1095));
