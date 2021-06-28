function makeShort(text, words) {
    let arr = text.split(' ')
    if (arr.length > words) {
        text = arr.slice(0, words).join(' ')
        return text + ' ...'
    } else {
        return text
    }
}
