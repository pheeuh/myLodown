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
 * @returns {String} value: Function returns input value unchanged
 * 
 */
function identity (value) {
    return value;
};


/**
 * typeOf: Function that takes in an input value and returns the typeof value as a string
 *
 * @param {value}: Function takes in any value
 * @returns {value}: Function returns the typeof input value as a string 
 * 
 */
 _.typeOf = function (value) {
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
   _.indexOf = function (array, value) {
        for (var i = 0; i < array.length; i++) {
        if (value === array[i]) {
        return i;
      }
    } return -1;
      }
      
/**
 * 
 * 
 * 
 * 
 */