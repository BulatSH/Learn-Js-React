function isPangram(string) {
    string.toLowerCase();

    const stringSet = new Set(string);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    stringSet.delete(' ');

    if ((stringSet.size - 1) === alphabet.length) {
        return true;
    } else {
        return false;
    }
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
