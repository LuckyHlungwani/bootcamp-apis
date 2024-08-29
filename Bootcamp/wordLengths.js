export default function wordLengths(sentence){
    var sentenceList = sentence.split(" ");
    var count = 0;
    for(let i=0; i<sentenceList.length; i++){
        count += sentenceList[i].length;
    }
    return count;
}