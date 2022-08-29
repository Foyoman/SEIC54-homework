function binarySearch (haystack, needle) {
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

    let start = 0;
    let end = haystack.length - 1;
    let midpoint = Math.floor((start + end) / 2); // There is a serious bug on this line.

    // while the needle is not found AND there are still haystack elements to consider
    while (haystack[midpoint] !== needle && start < end) {
        if (needle< haystack[midpoint]) {
            end = midpoint - 1;
        } else {
            start = midpoint + 1;
        }
        midpoint = Math.floor((start + end) / 2)
    }

    return (needle === haystack[midpoint]) ? midpoint : -1;
}

function recursiveBinarySearch (haystack, 
                                needle,
                                start=0,
                                end=haystack.length-1,
                                midpoint=Math.floor((start + end) / 2)) {
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

    if (haystack[midpoint] === needle) return midpoint; // base case: success
    if (start >= end) return -1; // base case: failure

    if (needle < haystack[midpoint]) {
        end = midpoint - 1;
    } else {
        start = midpoint + 1;
    }

    return recursiveBinarySearch(haystack, needle, start, end);
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}