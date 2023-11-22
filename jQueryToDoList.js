/**
 * Toggles "done" class on <li> element
 */
$(".today-list").on("click", "li", function () {
  $(this).toggleClass("done");
});
/**
 * Delete element when delete link clicked
 */
$(".today-list").on("click", ".delete", function () {
  $(this).parent().fadeOut(3000);
  console.log($(this));
  //Extra Credit://
  //1 point: When you click delete on an item, make it fade out.//
});
/**
 * Adds new list item to <ul>
 */
const addListItem = function (e) {
  e.preventDefault();
  const $inputResult = $("#new-todo").val();
  if ($inputResult != "") {
    $(".today-list").append(
      "<li><span>" + $inputResult + "</span><a class='delete'>Delete</a></li>"
    );
  }

  $("input").val("");
  // rest here...
};

// add listener for add
const $addItem = $(".add-item");
$addItem.click(addListItem);
