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
  $(this).parent().remove();
  console.log($(this));
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
