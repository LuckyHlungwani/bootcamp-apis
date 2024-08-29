export default function shortestWord(sentence){
    var sentenceList = sentence.split(" ");
    var shortWord = sentenceList[0];
    for(let i=1; i<sentenceList.length; i++){
        if(sentenceList[i].length <= shortWord.length){
            shortWord = sentenceList[i]; 
        }
    }
    return (shortWord.toLowerCase());
}