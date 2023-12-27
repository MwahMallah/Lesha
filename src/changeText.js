let textElement = document.querySelector(".panel.text");
let text = textElement.textContent;
let words = text.split(" ");

for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "abbar") {
        words[i] = `<span class="special-letter">${words[i]}</span>`;
    } else {
        let modifiedWord = "";        
        for (let j = 0; j < words[i].length; j++) {
            if (words[i].charAt(j).toLowerCase() === 'a' || words[i].charAt(j).toLowerCase() === 'b' || words[i].charAt(j).toLowerCase() === 'r') {
                modifiedWord += `<span class="special-letter">${words[i].charAt(j)}</span>`;
            } else {
                modifiedWord += words[i].charAt(j);
            }
        }
        words[i] = modifiedWord;
    }
}

let newText = words.join(' ');
console.log(words);
textElement.innerHTML = newText;