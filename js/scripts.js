var countUpBy = function(countby, countto) {

  var number = 0;
  var result = [];

  while ((number + countby) <= countto) {
    number = number + countby;
    result.push(number);
  }
  return result;
};

$(document).ready(function() {

  $("form#countUpBy").submit(function(event){

    var countto = parseInt($("input#countto").val());
    var countby = parseInt($("input#countby").val());
    var result = countUpBy(countby, countto)

    $(".count").text(result)
    $("#result").show();
    event.preventDefault();
  });
});
