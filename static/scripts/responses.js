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
        return "I'm sorry to hear that you're feeling stressed. Stress is a common experience for many people, and it can be caused by a variety of factors such as work, relationships, or health concerns. It's important to take care of yourself when you're feeling stressed, both physically and mentally. Here are some tips that may help Take a  break Sometimes the best thing you can do when you're feeling stressed is to take a break. Step away from whatever is causing your stress and do something that relaxes you, such as going for a walk, listening to music, or practicing deep breathing exercises.Get some exercise: Exercise can be a great way to reduce stress.Even a short walk or some light stretching can help release tension and improve your mood Talk to someone: Talking to a trusted friend or family member about what's causing your stress can be helpful. They may be able to offer support, advice, or simply a listening ear. Practice mindfulness: Mindfulness techniques such as meditation or yoga can help you stay grounded and focused, even in the midst of stressful situations. <br> Remember that it's okay to feel stressed sometimes, but it's important to take steps to manage your stress in a healthy way. If you're feeling overwhelmed or if your stress is affecting your daily life, consider talking to a mental health professional who can help you develop a personalized plan for managing your stress.";
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
