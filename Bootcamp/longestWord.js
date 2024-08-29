export default function longestWord(sentence){
var sentenceList = sentence.split(" ");
var longWord = 0;
var longest;
for(let i=0; i<sentenceList.length; i++){
    var sentenceListTrimmed = sentenceList[i].trim();
    if(sentenceListTrimmed.length >= longWord){
        longWord = sentenceListTrimmed.length;
        longest = sentenceListTrimmed;
    }
    
}
return longest.length;
}