function saveUserData() {
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("regno", document.getElementById("regno").value);
    localStorage.setItem("year", document.getElementById("year").value);
    window.location.href = "competitions.html";
}

function calculateScore() {
    let score = 0;
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value == "1") score++;

    localStorage.setItem("score", score);
    window.location.href = "result.html";
    return false;
}

window.onload = function () {
    document.getElementById("rname")?.innerText = localStorage.getItem("name");
    document.getElementById("rregno")?.innerText = localStorage.getItem("regno");
    document.getElementById("ryear")?.innerText = localStorage.getItem("year");
    document.getElementById("rscore")?.innerText = localStorage.getItem("score");
};


