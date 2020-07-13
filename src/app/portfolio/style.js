function myFunction() {
    var x = document.getElementById("mynavv");
    if (x.className === "connav") {
      x.className += " responsive";
    } else {
      x.className = "connav";
    }
  }