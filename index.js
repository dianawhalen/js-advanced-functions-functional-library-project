function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
  } else {
    for (let key in collection) {
      result.push(callback(collection[key]));
    }
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection);

  if (typeof acc === 'undefined') {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  for (let i = 0; i < newCollection.length; i++) {
    acc = callback(acc, newCollection[i], collection);
  }
  return acc;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) return collection[i];
    }
  } else {
    for (let key in collection) {
      if (predicate(collection[key])) return collection[key];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) result.push(collection[i]);
    }
  } else {
    for (let key in collection) {
      if (predicate(collection[key])) result.push(collection[key]);
    }
  }
  return result;
}

function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(collection, n = 1) {
  return n === 1 ? collection[0] : collection.slice(0, n);
}

function myLast(collection, n = 1) {
  return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
}

function myKeys(obj) {
  return Object.keys(obj);
}

function myValues(obj) {
  return Object.values(obj);
}

function mySortBy(arr, callback) {
  let newArr = [...arr];
  return newArr.sort((a, b) => {
    const valA = callback(a);
    const valB = callback(b);

    if (typeof valA === 'number' && typeof valB === 'number') {
      return valA - valB;
    } else {
      return String(valA).localeCompare(String(valB));
    }
  });
}

function myFlatten(arr, shallow = false, newArr = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      if (shallow) {
        newArr = newArr.concat(arr[i]);
      } else {
        myFlatten(arr[i], false, newArr);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
