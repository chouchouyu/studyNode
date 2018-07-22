// document.getElementById('#btn').addEventListener("click", function(){
//     document.getElementById('#btn').textContent = "Hello World";
// });

window.setTimeout(function() {
    document.getElementById('#btn').addEventListener('click', function() {
        document.getElementById('#btn').textContent = "Hello World";
    }, false);
  }, 500);

  window.setTimeout(function() {
}, 500);