var chocolateBars=['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array,element) {
  newArray=array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array=array.unshift(element)
}

function addElementToEndOfArray(array,element) {
  newArray=array.push(element)
}

function destructivelyAddElementToEndOfArray(array,element) {
  array=array.push(element)
}