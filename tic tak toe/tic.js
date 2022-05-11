console.log('WELCOME TO TIC TOK TOE')

let turn = "X"

//function to chnage the turn

const changeTurn = () => {
    return turn === "X" ? "0" : "X";

}
//function to check win

const checkWin = () => {
    let boxtext = document.querySelectorAll('.boxtext');

    function clear() {
        boxtext.forEach((b) => {
            b.innerText = "";
        })

        if (turn == "0") {
            changeTurn();
        }
    }
    document.querySelector(".reset").addEventListener("click", clear);
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
    wins.forEach((e) => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "") && (boxtext[e[1]].innerText !== "") && (boxtext[e[2]].innerText !== "")
        ) {
            console.log(boxtext[e[0]].innerText);

            document.querySelector('.info').innerHTML = boxtext[e[0]].innerText + " " + "won";
        }

    });

}



//game logic

let boxes = document.getElementsByClassName("box");
console.log(boxes);
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();


        }
    })
})