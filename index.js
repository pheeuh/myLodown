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
 * @param {value} value : Function takes in any value
 * @returns {value} value: Function returns input value unchanged
 */
function identity (value) {
    return value;
};


/**
 * typeOf: Function that takes in an input value and returns the typeof value as a string
 *
 * @param {value} value: Function takes in any value
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
        }   if (func(array[i], i, array) === false) {
            subArrayTwo.push(array[i]);
        }
     }
        newArray.push(subArray, subArrayTwo);
        return newArray;
    }



/**
 * map: Designed to loop over a collection, Array or Object and returns the function call value of either
 * an array or object. 
 * 
 * @param {Array or Object} collection: The array or object that we are iterating over. 
 * @param {Function} func: The function to be applied to each value in the collection. 
 * @returns {Array} newArray: The array that contains the returned function call value of either an array or object.
*/
  function map (collection, func) {
      var newArray = []; 
          if (Array.isArray(collection)) {
              for (var i = 0; i < collection.length; i++) {
              newArray.push(func(collection[i], i, collection)); 
              }
        } else {
          for (let key in collection ) { 
          newArray.push(func(collection[key], key, collection)); 
          }
        }
         return newArray;
  }
  
  /**
   * contains: Designed to look through an array and see if a specific value is stored inside. This function
   * returns true if the array contains this specific value and false, if otherwise. 
   * 
   * @param {Array} array: The array we are searching through. 
   * @param {Any data type} value: The value we are looking for in the array. 
   * @returns {Boolean} true/false: Returns true or false, if value is found or not. 
   */
      function contains (array, value) {
      if (array.includes(value)) {
        return true;
      }
      return false;
    }
  

    /**
     * pluck: Designed to retrieve the key from an object and returns the result to an array. 
     * 
     * @param {Array} array: The array that contains objects. 
     * @param {Object property} prop: The property of each object at each array's index. 
     * @returns {Array} arrayValue[prop]: Returns an array of each value of the property for each element 
     * in array.
     */
        function pluck (array, prop) {
         return _.map(array, function(arrayValue) {
             return arrayValue[prop];
      }); 
 

    /**
     * every: Executes a function for every element in the collection (either array or object) and returns
     * true if every element is true and false if at least one element is false. 
     *        
     * @param {Array or Object} collection: The collection is what the function uses to call on and iterates over.
     * @param {Function} func: Function that either calls on every array's value, index, and the array, itself, or
     * calls on every object's current value, key, or the object, itself. 
     * @returns {Boolean} true/false: Returns true if every element is true, else return false. 
     */
     function every (collection, func) {
      if (func === undefined) {
        if (Array.isArray(collection)) {
          for (var i = 0; i < collection.length; i++) {
            if (!collection[i]) {
              return false; 
            }
          }
        } else { 
          for (let key in collection) {
          if (!collection[key]) {
            return false; 
          }
        }
        }
      } else { 
        if (Array.isArray(collection)) {
          for (var i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection) === false) {
              return false;
            }
          }
        } else { 
          //
          for (let key in collection) {
            if (func(collection[key], key, collection) === false) {
              return false;
            }
          }
        }
      }
      return true;
    }

    /**
     * some: Executes the callback function once for each element present in the array, until it finds at least
     * one truthy value. If not, it is false. 
     *
     * @param {Array or Object} collection: The collection is what the function uses to call on and iterates over.
     * @param {Function} func: Function that either calls on every array's value, index, and the array, itself, or
     * calls on every object's current value, key, or the object, itself. 
     * @returns {Boolean} true/false: Returns true if at least one element is true, but will return false, if all
     * elements are false. 
     * 
     */
     function some (collection, func) {
      if (func === undefined) {
        //determine if an array 
        if (Array.isArray(collection)) {
          for (var i = 0; i < collection.length; i++) {
            if (collection[i]) {
              return true; 
            }
          }
        } else { 
          for (var key in collection) {
            if (collection[key]) {
              return true; 
    
            }
          }
        }
      } else {
        if (Array.isArray(collection)) {
          for (var i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection) === true) {
              return true; 
            }
          }
        } else {
          for (var key in collection) {
            if (func(collection[key], key, collection) === true) {
              return true;
            }
          }
        }
      }
      return false; 
    }
    

    /**
     * reduce: "Reduces" the array to a single value and executes a function for each value of the array and the
     * return value of the final function call is returned. 
     * 
     * @param {Array} array: The array that is to be "reduced" to a single value. 
     * @param {Function} func: Function that is called for every element in the array.
     * @param {value} seed: The value to be passed to the function as the intital value. 
     * @returns {value} result: Returns the return value of the final function call. 
     */

     function reduce (array, func, seed) {
         let result;
        if (seed === undefined) {       
            result = array[0];
            for (let i = 1; i < array.length; i++) {
              result = func(result, array[i], i, array);
            }
          } else  {
              result = seed; 
              for (let i = 0; i < array.length; i++) {
                result = func(result, array[i], i, array);
              }
          }
          return result;
    }

    /**
     * extend: Function that adds elements of an iterable to the end of the list. 
     * 
     * @param {Object} object: The intial object that will have properties being added to it. 
     * @param {Object} object2 (with more objects being added, if needed): The object that will be passing its
     * properties to the initial object. 
     * @returns {object} object: Returns an updated object of the initial object. 
     * 
     * 
     * 
     */
     function extend (object, ...object2) {
      for (let key in object2) {
        var finalObj = Object.assign(object, object2[key]); 
      }
      return finalObj;
    }