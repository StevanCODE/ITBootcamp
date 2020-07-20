
function range(start, end) {
    return new Array(end - start).fill().map((d, i) => i + start);
}




for (i in range(1, 1005)) {
    if (i > 1 && i % 5 == 0) {
        console.log(i)
    }
}