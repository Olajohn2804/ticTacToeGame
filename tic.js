let initialValue = "X"


// game start scripts
const gameStart = ()=>{
    if(player1.value != "" && player2.value != "" && btnStart.innerHTML == "Start"){
        disp1.innerHTML = `Welcome`;
        // player1.value = "";
        // player2.value = "";
        btnStart.innerHTML = `End`
        disp2.innerHTML =  "";
    }else if(btnStart.innerHTML == "End"){
        disp2.innerHTML = "End Of Game"
        location.reload();
    }
    test()
    }
    // game scripts ends

    // replay scripts starts
replay = ()=>{
    initialValue = "X"
    one1.innerHTML = "";
    one2.innerHTML = "";
    one3.innerHTML = "";
    two1.innerHTML = "";
    two2.innerHTML =  "";
    two3.innerHTML = "";
    three1.innerHTML =  "";
    three2.innerHTML =  "";
    three3.innerHTML = "";
    disp2.innerHTML = "Yah Doing Well";
    result.innerHTML = "Keep it up guys..., You might be the next winner too";
}
// replay scripts ends
function test(e) {
    // Conditions for winning starts
    if (initialValue == "X" && e.target.innerText == "" && player1.value != "" && player2.value != "") {
        disp1.innerHTML = ""
        e.target.innerText = "X";
        initialValue = "O";
        if ((one1.innerHTML === "X" && one2.innerHTML === "X" && one3.innerHTML === "X") ||
            (two1.innerHTML === "X" && two2.innerHTML === "X" && two3.innerHTML === "X") ||
            (three1.innerHTML === "X" && three2.innerHTML === "X" && three3.innerHTML === "X") ||
            (two1.innerHTML == "X" && three1.innerHTML == "X" && one1.innerHTML == "X") ||
            (two2.innerHTML == "X" && three2.innerHTML == "X" && one2.innerHTML == "X") ||
            (two3.innerHTML == "X" && three3.innerHTML == "X" && one3.innerHTML == "X") ||
            (two2.innerHTML == "X" && three3.innerHTML == "X" && one1.innerHTML == "X") ||
            (two2.innerHTML == "X" && three1.innerHTML == "X" && one3.innerHTML == "X")) {
            initialValue == "";
            disp1.innerHTML = ""
            disp2.innerHTML = `${player1.value}  Won. Click on replay or End.`;
            result.innerHTML = player2.value + " You lose try again";
            ++score1.innerHTML;
            // initialValue ==""  
        }
        
    } else if (initialValue == "O" && e.target.innerText == "") {
        
        e.target.innerText = "O";
        initialValue = "X";
        if ((one1.innerHTML === "O" && one2.innerHTML === "O" && one3.innerHTML === "O") ||
            (two1.innerHTML === "O" && two2.innerHTML === "O" && two3.innerHTML === "O") ||
            (three1.innerHTML === "O" && three2.innerHTML === "O" && three3.innerHTML === "O") ||
            (two2.innerHTML == "O" && three2.innerHTML == "O" && one2.innerHTML == "O") ||
            (two1.innerHTML == "O" && three1.innerHTML == "O" && one1.innerHTML == "O") ||
            (two2.innerHTML == "O" && three1.innerHTML == "O" && one3.innerHTML == "O") ||
            (two2.innerHTML == "O" && three3.innerHTML == "O" && one1.innerHTML == "O")) {
            initialValue == "";
            disp1.innerHTML = ""
            disp2.innerHTML = player2.value + " Won. Click on replay or End.";
            result.innerHTML = player1.value + " You lose try Again";
            ++score2.innerHTML;
                
        }
    }
    //    Conditions for winning ends
    //    Conditions For a draw starts
    else if ((one1.innerHTML != "") && (one2.innerHTML != "") && (one3.innerHTML != "") && (two1.innerHTML != "") && (two2.innerHTML != "") && (two3.innerHTML != "") && (three1.innerHTML != "") && (three2.innerHTML != "") && (three3.innerHTML != "")) {
        disp2.innerHTML = "Oopss!!! Draw. Click on Re-play to play again or End to end the game";
        result.innerHTML = "NO WINNER";
        disp1.innerHTML = "";
        initialValue = "";
    }
    //  conditions for a draw ends
    else if (initialValue == "X" && e.target.innerText == "" && player1.value == "" && player2.value == ""){
        disp1.innerHTML = `Please Input your Names`
    }
}
