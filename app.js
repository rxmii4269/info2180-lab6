"use strict";

window.onload = () => {
    let search = this.document.getElementById("search-btn");

    this.$("#searchform").submit(function (e) {
        e.preventDefault();
    });

    search.addEventListener("click", () => {
        this.$.ajax({
            type: "GET",
            url: "superheroes.php",
            data: this.$("#searchform").serialize(),
            success: function (data) {
                let result = document.getElementById("result");
                result.innerHTML = data;
            },
            dataType: "html"
        });
    });
};