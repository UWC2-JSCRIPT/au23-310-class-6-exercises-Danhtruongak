// Do not change
document.getElementById("cat").addEventListener("click", (e) => {});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
$("#more-info").click(function (e) {
  e.preventDefault();
  alert("Here's some info");
});
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
$(".dog").click(function (e) {
  alert("Bow wow!");
  e.stopPropagation();
});
