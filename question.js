$(function() {
  $(".question button").click(function() {
    const questionId = $(this)
      .parent()
      .attr("id");
    const answers = ["2019-12-25"];
    console.log("s");
    if ($("#" + questionId + ".question input").val() == answers[questionId]) {
      console.log("正解！");
      $("#" + questionId + " .correct").removeClass("d-none");
      $("#" + questionId + " .miss").addClass("d-none");
    } else {
      $("#" + questionId + " .miss").removeClass("d-none");
      $("#" + questionId + " .correct").addClass("d-none");
    }
  });
});
