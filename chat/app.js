function talk() {
    var know = {
        "hi" : "hello, how can i help you?", 
        "i want amazon link" : "https://www.amazon.in/s?i=merchant-items&me=A35TJP47O3O84Y",
        "who are you" :"Hello, Glimmer Lightings here ",
        "how are you" :"Good :). How can I help you?",
        "whats new" :"Checkout our collection",
        "how to buy" :"through amazon or go to the cart icon on top right corner :)",
       
        ok : "Thank You So Much ",
        Bye : "Okay! Have a great day!",
        bye : "Okay! Have a great day!",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}

