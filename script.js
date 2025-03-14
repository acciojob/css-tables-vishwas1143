 document.addEventListener("DOMContentLoaded", function () {
    let rows = document.querySelectorAll("table tr"); // Select all rows

    for (let i = 0; i < rows.length; i++) { // Use i < rows.length (not i <= rows.length)
        if (i % 2 === 0) {
            rows[i].style.backgroundColor = "#ffffff"; // Even rows → White
        } else {
            rows[i].style.backgroundColor = "#f2f2f2"; // Odd rows → Light gray
        }
    }
});
