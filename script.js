
let turn = "X";
let isGameOver = false;

const changeTurn = () => (turn === "X" ? "O" : "X");

const checkWin = () => {
    let boxtext = Array.from(document.getElementsByClassName("box"));
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    
    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText !== "" &&
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[1]].innerText === boxtext[e[2]].innerText
        ) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isGameOver = true;
        }
    });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    element.addEventListener("click", () => {
        if (!isGameOver && element.innerText === "") {
            element.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isGameOver) {
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});

document.getElementById("reset").addEventListener("click", () => {
    document.querySelectorAll(".box").forEach(e => (e.innerText = ""));
    turn = "X";
    isGameOver = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
});
