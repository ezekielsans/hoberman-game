// How to change the color of the ball?

$(document).ready(function () {

    //hide the balls from the start
    $("#blueBall").hide()
    $("#yellowBall").hide()
    $("#tryAgain").hide()



    let streak = 0;
    let bestScore = 0;

    // Declare audio properties
    let alwaysBlueAudio = new Audio('assets/always_blue.mp3');
    let errorAudio = new Audio('assets/wrong.mp3');




    //create a random number
    function generateRandomBall() {
        //expand number range 0-100     
        let randomNum = Math.floor(Math.random() * 100)

        console.log(randomNum)
        if (randomNum % 3 === 0) {
            console.log("random number" + randomNum)
            showYellow();
            // $("#yellowBall").show().addClass("bounce")
            errorAudio.play();
            gameOver()


        }
        //if blue
        else {
            console.log("random number" + randomNum)
            showBlue()
            alwaysBlueAudio.play();
            streak++;
        }
    }
    function showBlue() {
        $("#yellowBall").hide()
        $(".gameBall").removeClass("bounce")
        $("#blueBall").show()
        $(".gameBall").addClass("bounce")
        $(".hand").toggleClass("hand-toss")
        $("body").removeClass("gameOver")

    }

    function showYellow() {
        $("#blueBall").hide()
        $(".gameBall").removeClass("bounce")
        $("#yellowBall").show()
        $(".container").toggleClass("shake")
        $("body").addClass("gameOver")
        $(".hand").removeClass("hand-toss")

    }


    function gameOver() {
        if (streak > bestScore) {
            bestScore = streak;
            updateBestScore();
            $(".game").hide()
            $("#gameButton").hide()
            $("#tryAgain").show()
        }
        streak = 0 // reset 
        updateScore();
    }

    function updateScore() {
        $("#streak").text(streak);
        $("#liveScore").text(bestScore)
    }
    function updateBestScore() {

        $("#liveScore").text(bestScore)
        $("#streak").text(bestScore)



    }

    function gameReset() {
        $(".game").show()
        $("#gameButton").show()
        $("#tryAgain").hide()


    }

    //always blue button
    $("#gameButton").on("click", function () {
        generateRandomBall()
    })
    $("#tryAgain").on("click", function () {
        gameReset()
    })


})
