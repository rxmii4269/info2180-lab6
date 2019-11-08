"use strict";
window.onload = function () {

    let search = this.document.getElementById("search-btn")

    var xhr = new this.XMLHttpRequest();
    xhr.open("GET", "superheroes.php", true);
    xhr.send();


    search.addEventListener("click", () => {

        this.alert(xhr.responseText);
    });
};