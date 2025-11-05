console.log("functions");

// function declaration
function sayhello(){
    console.log("welcome to angry birds!");
}


//execute

sayhello();


// eexample 2 with 1 paramater

function greetbird(birdname){
    console.log(`hello ${birdname}! ready to destroy some pigs`) 

}

greetbird("red")

//example 3 with 2 parameater

function greetplayer(firstname, lastname){
    console.log(`welcome back ${firstname} ${lastname}`)
}


function doublescore(score){
    let total= score * 2;
    console.log(`your new score is ${score * 2}`);
}

function askpigname(){
    let pigname= prompt("enter pigs name");
    console.log (`target: ${pigname}`);
}

askpigname();

function addpoints(points1,points2){
    let total= points1 + points2;
    console.log(`total points earned: ${total} `);
}

addpoints(100,200);
addpoints(0,20);
addpoints(50,100);

//function converttosecconds(mins){
    //let secs= mins * 60
    //console.log(`${mins} minutes are ${secs}s`)
//}

//converttosecconds(50);

function converttoseconds(){
    let mins = prompt(`enter the mins: `);
    let secs= mins * 60;
    console.log (`${mins} minutes are ${secs}s`)
}
converttoseconds()