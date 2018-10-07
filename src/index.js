module.exports = function longestConsecutiveLength(array) {
  if (!array.length) {
    return 0
  }

  let sortArr = array.sort((a, b) => a - b)
  let size = sortArr.length
  let currentLenght = 1
  let longestLenght = 1

  for (let i = 1; i < size; i++) {
      if (sortArr[i] - sortArr[i - 1] === 1) {
          currentLenght++
      } 
      else if (sortArr[i] - sortArr[i - 1] > 1) {
          longestLenght = Math.max(currentLenght, longestLenght);
          currentLenght = 1
      }
  }
  return longestLenght;
}