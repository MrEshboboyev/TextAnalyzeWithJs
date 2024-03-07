console.log("Connection successfully!");

function Analyze() { 
    console.log("Analyzing text");

    let text = document.getElementById("text").value;
    console.log(text);  

    let words;
    text = text.trim();
    if(text.trim() === "") {
        words = [];
    } else {
        words = text.split(" ");    
    }

    console.log(words.length);
    document.getElementById("words").innerHTML = "Count of words : " + words.length; 
    document.getElementById("textLength").innerHTML = "Length of text : " + text.length; 
    document.getElementById("averageWordLength").innerHTML = "Average word length : " + Math.floor(text.length/words.length); 
}