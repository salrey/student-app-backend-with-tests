//write a function that takes a string and a number called n, and repeats the string 
// n times with a space in the middle of each time.

function repeatNTimesWithSpace(string, n) {
    if (!string) return "";

    const arr = new Array(n).fill(string);

    return arr.join(' ')
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

module.exports = {
    repeatNTimesWithSpace,
    capitalizeFirstLetter
};