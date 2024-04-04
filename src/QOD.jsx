// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "What is the most common kitchen injury?",
                choices: [
                    "Cuts", "Burns", "Slips", "Fire related"
                ],
                correctAnswer: "Cuts"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "What's the best way to prevent injuries by lacerations?",
                choices: [
                    "Dont use sharp knives", "Be extra careful", "Keep knives sharp", "Cut towards yourself for control"
                ],
                correctAnswer: "Keep knives sharp"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "What shoes are the safest in a kitchen environment?",
                choices: [
                    "Comfortable athletic shoes", "Steel toe boots", "Water and slip resistant", "Whatever you want"
                ],
                correctAnswer: "Water and slip resistant"
            },
            {
                type: "radiogroup",
                name: "question4",
                title: "Which repeated action causes 20% of kitchen injuries?",
                choices: [
                    "Cutting and chopping", "Washing dishes", "Stirring", "Washing vegetables"
                ],
                correctAnswer: "Cutting and chopping"
            },
            {
                type: "radiogroup",
                name: "question5",
                title: "What is most important to remember after dealing with hot peppers",
                choices: [
                    "The risk is a myth", "Dont just use water, it can spread the capsacian oil", "Dont touch anything", "Wash your hands"
                ],
                correctAnswer: "Dont just use water, it can spread the capsacian oil"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "True or False, you should be cleaning the grease trap regularly.",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "True"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "How to put out a small grease fire? ",
                choices: [
                    "Water", "Fire extinguisher", "Cover with lid or metal sheet pan", "Take outside and let burn out"
                ],
                correctAnswer: "Cover with lid or metal sheet pan"
            },
            {
                type: "radiogroup",
                name: "question8",
                title: "Why is it important to wash hands regularly? ",
                choices: [
                    "So your hands aren't dirty", "Keep environment sterile", "Avoid cross contamination", "Get rid of germs"
                ],
                correctAnswer: "Avoid cross contamination"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "What do you do if you make a spill during a rush? ",
                choices: [
                    "Immediately clean it up", "Wait for the rush to be done, dont waste time", "Blame someone else", "Kitchen gets cleaned at the end of the day anyways"
                ],
                correctAnswer: "Immediately clean it up"
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "Why is it important to clean up spills as soon as possible? ",
                choices: [
                    "Avoid contaminating things", "Never know when the health inspector is coming", "To ensure a clean kitchen", "Avoid slips/it catching on fire"
                ],
                correctAnswer: "Avoid slips/it catching on fire"
            }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Kitchen Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Kitchen Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}