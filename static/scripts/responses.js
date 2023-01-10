function getBotResponse(input) {
    //rock paper scissors
    if (input == "need help") {
        return "I am there to help you out";
    } else if (input == "help") {
        return "Do not panic i can assist you tell me your problem";
    } else if (input == "help me") {
        return "Tell me how can i help!";
    }

    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input == "stressed") {
        return "Hey there calm down i am here to help you out";
    }
    else if (input == "focus-problem") {
        return "Focus is a big problem now a days, do not panick i got your back. Just relax and listen our playlist";
    }
    else if (input == "Breakup") {
        return "If you are dealing with Breakup its quite obvious that you need to take some time and have some pasence, time will heal everything just try to sorround yourself with good people around you or try not to be alone talk to any friend and close one or your parents";
    }
    else if (input == "Anger") {
        return "Anger is common you just need to understand the situation you are all set already, just breath-out and breath-in, Or count 10 in reverse";
    }
    else if (input == "Fight") {
        return "Having a fight with a friend or with your coleages is actually can be of multiple reasons just need to relax it down and try your best calming down yourself";
    }
    else if (input == "Overwalmed") {
        return "This Feeling is quite common just need to relax it down and try to solve the issue by yourself";
    }
    else {
        return "Try ask question in one word like:- Anger, Overwalmed, stressed, focus-problem, Fight etc.";
    }
}