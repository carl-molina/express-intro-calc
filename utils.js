"use strict";

const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route

  const numsInts = strNums.map(
    x => {

      if (!(isNaN(Number(x)))) {
        return Number(x);
      } else {
        throw new BadRequestError(`${x} is not a number`);
      }

    //   try {
    //     return Number(x);
    //   } catch {
    //     throw new BadRequestError(`${x} is not a number`);
    //   }
    });
  return numsInts;

}


module.exports = { convertStrNums };