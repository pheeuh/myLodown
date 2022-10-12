'use strict';

// YOU KNOW WHAT TO DO //
//FUNCTION LIBRARY
//FUNCTION DECLARATIONS ONLY


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Function that takes in an input value and returns it unchanged
 * 
 * @param {value}: Function takes in any value
 * @returns {value}: Function returns input value unchanged
 * 
 */
function identity (value) {
    return value;
};


/**
 * typeOf: Function that takes in an input value and returns the typeof value as a string
 *
 * @param {value}: Function takes in any value
 * @returns {String} value: Function returns the typeof input value as a string 
 * 
 */
  function typeOf(value) {
    if (Array.isArray(value)) {
      return "array";
    } if (typeof value === "object" && !Array.isArray(value) && value === null) {
      return "null";
    }
      return typeof value;
  }

  
  /**
   * indexOf: Function that takes in an input array and input value and returns the index #
   * of the value, if found in the array 
   * 
   * @param {Array} array: The array to be iterated over. 
   * @param {value} value: The value that is being located in the array.
   * @returns {i or -1}: Function returns the index of the array, if the value is found. If the value 
   * is not found, the function return -1. 
   * 
   */
  function indexOf (array, value) {
        for (var i = 0; i < array.length; i++) {
        if (value === array[i]) {
        return i;
      }
    } return -1;
      }
      

/**
 * first: Function that takes in an input array and an input number, which
 * returns the first "number" of items in the array.
 * 
 * @param {Array} array: The array that we return the first input number of items from. 
 * @param {Number} number: The number that evaluates the first input number of items from the array.
 * @returns {[], array[0], ["first input number of items"]}: Function returns an empty array, if array
 * is not an array. Function returns the first index of array, if number is not given or is not a
 * number. Lastly, if it does not execute the first two if-statements,  function returns the
 * first input number of items as an array. 
 */
  function first (array, number) {
    //creating a variable with an empty array to return if it's not an array
  var emptyArray = [];
  //returning an empty array, if array is not an array
  if (!Array.isArray(array)) {
    return emptyArray;
  //returning the first element in array, if number is not given or not a number
  } if (!number) {
    return array[0];
    //returning the first "number" items of array 
  } if (typeof number === "number") {
    return array.splice(0, number);
  }
  }


/**
 * last: Function that takes in a input array and a input number, which returns the last input 
 * number of items in an array.
 * 
 * @param {Array} array: The array that we return the last input number of items from. 
 * @param {Number} number: The number that evaluates the last input number of items from the array.
 * @returns {[], array[array.length - 1], ["last input number of items"]}: Function returns an empty array
 * if array is not an array. Function returns the last element of the array, if number is not given or isn't 
 * a number. Lastly, if the last statements weren't execute, the function will just return the last input
 * number of items from the array. 
 */
  function last (array, number) {
  var emptyArray = [];
  if (!Array.isArray(array)) {
    return emptyArray;
  } if (!number) {
    return array[array.length - 1]; 
  } if (typeof number === "number" && !(number < 0)) {
    return array.splice(-number);
  } if (-number) {
    return emptyArray;
  }
};

/**
 * unique: Function that takes in an input array and returns a new array with all the duplicates removed.
 * 
 * @param {Array} array: The input array that we are extracting duplicates from and iterating over.  
 * @returns {Array} nonDuplicates: The new array that replicates the input array, without the duplicates.
 */
function unique (array) {
  let nonDuplicates = [];
  for( var i = 0; i < array.length; i++){
    if(nonDuplicates.indexOf(array[i]) === -1) {
        nonDuplicates.push(array[i]);
    }
}
return nonDuplicates;
}


/**
 * filter: Function that loops through input array & calls each element in the input array, with its arguments being the 
 * input array's elements, input array's indexes, and input array, itself. Function returns a new array of elements if
 * their function calling results is true. 
 * 
 * @param {Array} array: The input array that we are iterating over. 
 * @param {Function} func: The function that takes in arguments of the input array and its indexes & elements. 
 * @returns {Array} trueArray: The new array of elements that resulted in true for the function calling. 
 * 
 * 
 * 
 */
 function filter(array, func) {
  let trueArray = [];
  for (var i = 0; i < array.length; i++) {
  if (func(array[i], [i], array) === true && func(array[i], [i], array) !== false ) {
    trueArray.push(array[i]); 
  }
   }
  return trueArray;
    }


/**
 * reject: A function that iterates over the input array and applies the input function to each value in the
 * input array. Function returns a new array of elements if their function calling results is false.
 * 
 * @param {Array} array: The input array that we are iterating over. 
 * @param {Function} func: The function that takes in arguments of the input array and its indexes & elements. 
 * @returns {Array} trueArray: The new array of elements that resulted in false for the function calling. 
 * 
 */
function reject (array, func) {
  let falseArray = [];
  for (var i = 0; i < array.length; i++) {
  if (func(array[i], [i], array) === false) {
   falseArray.push(array[i]);
  }
}
return falseArray;
}


/**
 * partition: A function that iterates over the input array and calls the input function to each value in the
 * input array. If input function resolves input array values as true, it will push into first subarray. 
 * If input function resolves input array values as false, it will push into second subarray. The function, then,
 * returns one array with both subarrays. 
 * 
 * @param {Array} array: The input array that we are iterating over.
 * @param {Function} func: The function that takes in arguments of the input array and its indexes & elements.
 * @returns {Array} newArray: The array that contains both subarrays. 
 */
 function partition (array, func) {
  var newArray = [];
  var subArray = [];
  var subArrayTwo = [];
      for (var i =  0; i < array.length; i++) {
            if (func(array[i], i, array) === true) {
              subArray.push(array[i]);
        } if (func(array[i], i, array) === false) {
          subArrayTwo.push(array[i]);
        }
     }
             newArray.push(subArray, subArrayTwo);
                return newArray;
    }
