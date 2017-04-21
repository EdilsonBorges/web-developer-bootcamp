function kebabToSnake(str) {
    return str.replace('-','_',str);
}

// or

function kebabToSnake(str) {
    return str.replace(/-/g,'_');
}