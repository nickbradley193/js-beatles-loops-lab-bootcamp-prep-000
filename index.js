function theBeatlesPlay(musicians, instruments) {
  var resultArray;
  for (let n = 0; n < musicians.length; n++) {
    resultArray[n] = `${musicians[n]} plays ${instruments[n]}`;
  }
  return resultArray;
}