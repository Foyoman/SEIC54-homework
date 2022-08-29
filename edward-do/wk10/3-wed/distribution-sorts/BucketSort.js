function bucketSort(items, bucketSize=5) { // buckets hold 5 values
  if (items.length === 0) { return items; }

  let min = Infinity, max = -Infinity;

  for (let i = 0; i < items.length; i++) {
    if (items[i] < min) {
      min = items[i];
    }
    // looping thru the array, setting the highest and lowest values
    if (items[i] > max) {
      max = items[i];
    }
  }

  const bucketCount = Math.floor((max - min) / bucketSize) + 1; // y?
  const buckets = new Array(bucketCount); // array with bucketCount empty values 

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = []; // turning the empty values to empty arrays
  }
  
  // distribute items
  for (let i = 0; i < items.length; i++) {
    buckets[ Math.floor( (items[i] - min) / bucketSize) ].push( items[i] ); // pushing each item into their respective bucket depending on their size. buckets will be in order 
  }

  items = []; // all items are now in buckets, we can make items an empty array
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = classicSort( buckets[i] );
    items = items.concat( buckets[i] ); // nested array of the buckets
  }

  console.log( buckets );

  return items;
}

const classicSort = (array) => {
  return array.sort((a, b) => {
    return a - b;
  });
}

module.exports = bucketSort;
