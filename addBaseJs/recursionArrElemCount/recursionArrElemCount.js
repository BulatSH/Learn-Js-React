function deepCount(a) {
    let count = a.length;

    a.forEach(elem => {
        if (Array.isArray(elem)) count += deepCount(elem);
    });

    return count;
}

console.log(deepCount([[[[[[[[[]]]]]]]]]));
