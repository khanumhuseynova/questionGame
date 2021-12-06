let questionData = {
    q1: {
        ques: "1.In the UK, the abbreviation NHS stands for National what Service?",
        answers: ["Health", "Honour", "Household"],
        trueAnswer: "a"
    },

    q2: {
        ques: "2.Which Disney character famously leaves a glass slipper behind at a royal ball?",
        answers: ["Pocahontas", "Cinderella", "Elsa"],
        trueAnswer: "b"
    },

    q3: {
        ques: "3.What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
        answers: ["Terminal", "Concourse", "Carousel"],
        trueAnswer: "c"
    },

    q4: {
        ques: "4.Which toys have been marketed with the phrase “robots in disguise”?",
        answers: ["Sylvanian Families", "Hatchimals", "Transformers"],
        trueAnswer: "c"
    },

    q5: {
        ques: "5.At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
        answers: ["US Virgin Islands", "Bermuda", "Turks and Caicos Islands"],
        trueAnswer: "b"
    },

    q6: {
        ques: "6.Construction of which of these famous landmarks was completed first?",
        answers: ["Empire State Building", "Eiffel Tower", "Big Ben Clock Tower"],
        trueAnswer: "c"
    },

    q7: {
        ques: "7.A magnet would most likely attract which of the following?",
        answers: ["Plastic", "Metal", "Wood"],
        trueAnswer: "b"
    },

    q8: {
        ques: "8.If someone asked to see your ID, what might you show them?",
        answers: ["Your passport", "Your tongue", "Your teeth"],
        trueAnswer: "a"
    }


}


class Questions {
    questionGameTotalPoint = document.querySelector("#totalP")
    questionGameStartButton = document.querySelector("#startButton")
    questionGameendButton = document.querySelector("#exitButton")

    questionGameQuestionNumber = document.querySelector("#questionNum")
    questionGameQuestion = document.querySelector("#question")
    questionGameQuestionVariants = document.querySelector("#variants")



    questionArray = [] // suallar
    questionArrayIndex = 0 //sual indexi
    userScore = 0 //qelebe
    questionUserAnswer = null; //uservariant

    constructor(question) {
        console.log('Question Game');
        this.questionArray = Object.values(question);
    }
    userSelect(data) {
        if ('abc'.indexOf(data) === -1) {
            alert("Please choose only A B or C")
            return
        }
        this.questionUserAnswer = data
        this.nextQuestion()
        console.log(data)
    }

    showQuestion() {

        if (!this.questionArray[this.questionArrayIndex]) {
            console.log('Game ended')
                // this.questionGameTotalPoint.innerHTML = `Total point : ${this.userScore}`
            console.log('Game ended')
            alert(`Game ended.Total point:${this.userScore} `)


            return

        }

        console.log(this.questionArray[this.questionArrayIndex])
        this.questionGameQuestion.innerHTML = this.questionArray[this.questionArrayIndex].ques
        this.questionGameQuestionVariants.innerHTML = this.questionArray[this.questionArrayIndex].answers.map((q, i) => {
                return `   
            <div class="col-3">
                        <button class="btn btn-dark btn-block shadow" id="b">
                        <span class="h2">
                        ${i === 0 ? 'A)' : ''} 
                        ${i === 1 ? 'B)' : ''} 
                        ${i === 2 ? 'C)' : ''} 
                        </span>
                    </button>
                        <button class="btn btn-light btn-block shadow" id="b">                        
                        <p class="lead text-center"> ${q}</p> 
                    </button>
                    </div>`
            }).join(" ")
            // this.questionGameQuestionNumber.innerHTML = this.questionArray[this.questionArrayIndex].q1.map((i) => {
            //     return `  <h1 class="display-4 text-center" id="questionNum">Question ${i+1}</h1>`
            // })
        console.log(this.questionGameQuestionVariants)
    }

    nextQuestion() {


        let rightAns = this.questionArray[this.questionArrayIndex].trueAnswer
            // console.log(this.data)
        console.log('right ans ', rightAns);
        console.log(this.questionUserAnswer);

        if (rightAns === this.questionUserAnswer) {
            console.log("right");
            this.userScore += 10

            alert("Right Answer.Next Question..")


        } else {
            console.log("false");
            alert("Wrong Answer.Next Question..")
        }
        this.questionArrayIndex++
            this.showQuestion()

    }

}


let que = new Questions(questionData)

que.showQuestion()


window.onkeydown = function(event) {
    que.userSelect(event.key)
}