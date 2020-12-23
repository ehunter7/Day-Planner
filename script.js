$(document).ready(function () {
  var container = $(".container");
  var time = new Date();
  var currentHour = time.getHours();
  console.log(currentHour);

  function formatTime(i) {
    if (i === 12) {
      return "12PM";
    }
    if (i > 12) {
      return `${i - 12}PM`;
    }
    return `${i}AM`;
  }

  for (var x = 9; x <= 17; x++) {
    console.log(x);
    const timeBlock = $("<div>")
      .attr("id", `hour-${x}`)
      .attr("data-hour", x)
      .addClass("row time-block");
    if (currentHour > x) {
      timeBlock.addClass("past");
    } //past is used to grey out block if in the past
    timeBlock.append($("<div>").addClass("col-md-1 hour").text(formatTime(x)));
var savedInput = $("<textarea>").addClass("col-md-10 description").attr("data-hour", x);
    if(localStorage.getItem(`${x}`) != null){
      console.log(localStorage.getItem(`${x}`));
      // $(".description").attr("data-hour", x).text(localStorage.getItem(x));
      savedInput.text(localStorage.getItem(`${x}`));
    };
    
    timeBlock.append(savedInput);
      // .append($("<textarea>").addClass("col-md-10 description"))
      // .attr("data-hour", x);
    timeBlock.append(
      $("<button>")
        .addClass("btn saveBtn col-md-1")
        .attr("data-hour", x)
        .append($("<i>").addClass("fas fa-save"))
    );
    container.append(timeBlock);

    
    

  }   


  //event listener for save button
  $(".saveBtn").click(function () {
    // var savedDescription = $(this).$(".description").val();

    var hour = $(this).attr("data-hour");
    console.log(hour);
    var textInput = $(this).siblings("textarea").val();

    // localStorage.setItem("item", savedDescription);
    localStorage.setItem(hour, textInput);
    console.log(textInput);
  });
});
