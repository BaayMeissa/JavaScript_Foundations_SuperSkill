function capitalizeWords(str) {
    capitalised_words = "";
    words = str.split(" ");
    for (let i = 0;  i < words.length ;i++ ){
        capitalised_words += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
    }
    return capitalised_words;
}

str = "salut tout le monde, comment allez vous";
console.log(capitalizeWords(str));
