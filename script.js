let score = {};

function OpeningCeremony(score, Race100M){
    score = {red:0, blue:0, green:0, yellow:0};
    setTimeout(() => {
        console.log("Let's the game begin!");
        Race100M(score, LongJump);
    }, 1000);
}

function Race100M(score, LongJump){
    setTimeout(() => {
        console.log("Initial Score");
        console.log(score);
        const obj = {
             red: Math.floor(Math.random() * 6) + 10,
             blue:  Math.floor(Math.random() * 6) + 10,
             green:  Math.floor(Math.random() * 6) + 10,
             yellow:  Math.floor(Math.random() * 6) + 10
        };
        const sortedArr = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
        let newObj = {};
        newObj[sortedArr[0]] = 50;
        newObj[sortedArr[1]] = 25;
        console.log("Winner of 100M race is " + sortedArr[0]);

        score[sortedArr[0]] += 50;
        score[sortedArr[1]] += 25;

        console.log("Updated Score after 100m race");
       
        console.log(score);
        console.log("-------------------------------")
        LongJump(score, HighJump);

    }, 3000);

    
}

function LongJump(score, HighJump){
    setTimeout(() => {
        console.log("Previous Score");
        console.log(score);

        const i = Math.floor(Math.random() * 4) + 1;
        if(i == 1){
            let val = score.red;
            val += 150;
            score.red = val;
            console.log("Winner of Long Jump is " + "red");
            console.log("Updated Score after Long Jump");
            console.log(score);
            console.log("-------------------------------")
        }
        if(i == 2){
            let val = score.blue;
            val += 150;
            score.blue = val;
            console.log("Winner of LongJump is " + "blue");
            console.log("Updated Score after Long Jump");
            console.log(score);
            console.log("-------------------------------")
        }
        if(i == 3){
            let val = score.green;
            val += 150;
            score.green = val;
            console.log("Winner of LongJump is " + "green");
            console.log("Updated Score after Long Jump");
            console.log(score);
            console.log("-------------------------------")
        }
        if(i == 4){
            let val = score.yellow;
            val += 150;
            score.yellow = val;
            console.log("Winner of LongJump is " + "yellow");
            console.log("Updated Score after Long Jump");
            console.log(score);
            console.log("-------------------------------")
        }
        HighJump(score, AwardCeremony);
        
    }, 2000);
}

function HighJump(score, AwardCeremony){

    console.log("Previous Score");
    console.log(score);

    let person = prompt("Please enter the Colour");

    if (person == null || person == "") {
        console.log("Event Was cancelled");
        AwardCeremony(score);
    } else {
        if(person == "red"){
            let val = score.red;
            val += 100;
            score.red = val;
            console.log("Winner of HighJump is red");
            console.log("Updated Score after High Jump");
            console.log(score);
            console.log("-------------------------------")
        
        }
        if(person == "blue"){
            let val = score.blue;
            val += 100;
            score.blue = val;
            console.log("Winner of HighJump is blue");
            console.log("Updated Score after High Jump");
            console.log(score);
            console.log("-------------------------------")
        }
        if(person == "green"){
            let val = score.green;
            val += 100;
            score.green = val;
            console.log("Winner of HighJump is green");
            console.log("Updated Score after High Jump");
            console.log(score);
            console.log("-------------------------------")
        }
        if(person == "yellow"){
            let val = score.yellow;
            val += 100;
            score.yellow = val;
            console.log("Winner of HighJump is yellow");
            console.log("Updated Score after High Jump");
            console.log(score);
            console.log("-------------------------------")
        }
        AwardCeremony(score);
    }
}

function AwardCeremony(score){
    
    let sortedArr = Object.keys(score).sort((a, b) => score[a] - score[b]);
    let n = sortedArr.length;
    
    console.log(`${sortedArr[n-1]} came First with ${score[sortedArr[n-1]]} points`);
    console.log(`${sortedArr[n-2]} came Second with ${score[sortedArr[n-2]]} points`);
    console.log(`${sortedArr[n-3]} came Third with ${score[sortedArr[n-3]]} points`);
    console.log(`${sortedArr[n-4]} came Fourth with ${score[sortedArr[n-4]]} points`);
}

OpeningCeremony(score, Race100M);

