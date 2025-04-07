function indexOfIgnoreCase(str, subStr) {
  // Check for null or undefined input (optional safety)
  if (str == null || subStr == null) return -1;

  // Convert both strings to lowercase
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use indexOf for case-insensitive search
  return lowerStr.indexOf(lowerSubStr);
}
