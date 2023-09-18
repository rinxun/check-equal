import { isNil } from "./utils";

function sortArray(arr: Array<any>) {
  arr.sort((a, b) => {
    //if type of neighboring items in array are different, needn't sort
    if (typeof a !== typeof b) return 0;
    //if type of items in array are number or string, sort ascending
    if (typeof a === "number") return a - b;
    if (typeof a === "string") {
      let _a = a.toUpperCase(),
        _b = b.toUpperCase();
      if (_a < _b) return -1;
      if (_a > _b) return 1;
      return 0;
    }
    //other types of neighboring items in array, needn't sort
    return 0;
  });
}

function checkEqualForObject(
  objA: Record<string, any>,
  objB: Record<string, any>,
  strictMode: boolean = true
) {
  let _keysA = Object.keys(objA),
    _keysB = Object.keys(objB);
  //if the length of Object keys are different, needn't compare more and return false
  if (_keysA.length !== _keysB.length) {
    return false;
  }
  let _equal = true;
  _keysA.some(key => {
    //if key in objA is not in objB, CheckEqual will return false
    if (!checkEqual(objA[key], objB[key], strictMode)) {
      _equal = false;
      return true;
    }
    return false;
  });
  return _equal;
}

function checkEqualForArray(
  arrA: Array<any>,
  arrB: Array<any>,
  strictMode: boolean = true
) {
  //if the length of arrays are different, needn't compare more and return false
  if (arrA.length !== arrB.length) {
    return false;
  } else {
    if (!strictMode) {
      //sort array first
      sortArray(arrA);
      sortArray(arrB);
    }
    let _equal = true;
    for (let i = 0, l = arrA.length; i < l; i += 1) {
      if (!checkEqual(arrA[i], arrB[i], strictMode)) {
        _equal = false;
        break;
      }
    }
    return _equal;
  }
}

export function checkEqual(a: any, b: any, strictMode: boolean = true) {
  if (isNil(a) || isNil(b)) {
    return strictMode ? a === b : a == b;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    return checkEqualForArray(a, b, strictMode);
  } else if (
    (typeof a === "string" && typeof b === "number") ||
    (typeof a === "number" && typeof b === "string")
  ) {
    return strictMode ? false : a == b;
  } else if (typeof a === typeof b) {
    if (typeof a === "object") {
      return checkEqualForObject(a, b, strictMode);
    } else {
      return strictMode ? a === b : a == b;
    }
  } else {
    return false;
  }
}
