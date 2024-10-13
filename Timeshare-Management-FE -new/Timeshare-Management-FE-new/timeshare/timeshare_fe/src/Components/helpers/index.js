function formatDate(inputString) {
  var dateObj = new Date(inputString);
  var outputString = dateObj.toISOString().slice(0, 19).replace("T", " ");
  return outputString;
}

export { formatDate };
