const times = process.argv.slice(2)

function getMs(arr) {
    let ms = 0
    if (arr.length === 3) {
        ms = arr[0] * 60 * 60 * 1000 + arr[1] * 60 * 1000 + arr[2] * 1000
    } else if (arr.length === 2) {
        ms = arr[0] * 60 * 1000 + arr[1] * 1000
    }
    return ms * 1000
}


setTimeout(() => {
    console.log(`Таймер сработаел через ${getMs(times)}ms`);
}, getMs(times))
