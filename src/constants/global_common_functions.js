export function findValueWithIndex(array, index, paramToFind) {
  const value = array[index][paramToFind];
  return value;
}

export function gettingDateOnDayFormats(options) {
//Example of options
	//   var options = {
//     weekday: "long",
//     // year: "numeric",
//     month: "long",
//     day: "numeric"
//   };
  var today = new Date();
  return today.toLocaleDateString("en-US", options);
}
