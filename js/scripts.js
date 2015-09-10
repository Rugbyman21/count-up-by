var countUpBy = function(countby, countto) {

  var number = 0;
  var result = [];

  while ((number + countby) <= countto) {
    number = number + countby;
    result.push(number);
  }
  return result;
};
