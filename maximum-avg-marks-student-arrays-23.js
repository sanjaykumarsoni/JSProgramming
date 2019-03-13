var scores = [
    { "Alia": "-678" },
    { "Bobby": "100" },
    { "Alex": "223" },
    { "Alex": "-23" },
    { "Bobby": "723" }
];
var candidates = {};
var maxAvg=0;
var candidateName='';
scores.forEach((score) => {
    let candidate = Object.keys(score)[0];
    //let scoreList = candidates[candidate];
    if (!candidates[candidate]) {
        candidates[candidate] = [];
    }
    candidates[candidate].push(parseInt(Object.values(score)));
});

for (candidate in candidates) {
    let scoreList = candidates[candidate];
    let totalScore = scoreList.reduce((total, score) => total + score, 0);
    let avgScore = totalScore / scoreList.length;
    console.log(candidate, totalScore, avgScore);
    if(maxAvg<avgScore){
        maxAvg=avgScore;
        candidateName=candidate;
    }
} 
console.log("Max avarage score has been awarded to candidate", `${candidateName}`, "and his score is:" ,`${maxAvg}`);