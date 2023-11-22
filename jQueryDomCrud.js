// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
const $alink = $("<a>");
$alink.text("Buy Now!");
const $p = $("p");
$alink.attr("id", "cta");
$alink.insertAfter($p);

// Access (read) the data-color attribute of the <img>,
// log to the console
console.log($("img").attr("data-color"));
// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
const $list = $("li");

const $thirdLi = $("li:eq(2)");
$thirdLi.addClass("highlight");

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
$p.remove();
// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$(document).ready(function () {
  //All of your code in here//
  //this uses JQuery,
  // JavaScript way to do this as well
  $alink.click(() => {
    $alink.replaceWith("Added to the cart");
  });
});
