
/*JS for Last Modified date */

document.getElementById("year").innerHTML = (new Date().toLocaleString());

/* JS for Local Storage */

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You have submitted " + localStorage.clickcount + " specialty drinks.";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }