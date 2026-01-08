/**
 * Deep comparison
The == operator compares objects by identity, but sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (using the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.

// Your code here.

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
 */

let deepEqual = function(a, b) {
  const aIsObj = typeof a == "object" && a !== null;
  const bIsObj = typeof b == "object" && b !== null;
  if(aIsObj && bIsObj) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if(aKeys.length != bKeys.length) return false;
    let equals = true;
    for(let k of aKeys) {
      if(!bKeys.includes(k)) return false;
      equals = equals && deepEqual(a[k], b[k])
      if(!equals) break;
    }
    return equals;
  }
  return a === b;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));