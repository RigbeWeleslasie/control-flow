  //1A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".

  const loginTry=()=>{
    let loginAttempt=1;
    while(loginAttempt <=3){
        console.log("Incorrect password");
        loginAttempt++;
    }
    console.log("Account locked");
}
loginTry();
//2Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed.

const votes=(voteArray)=>{
let vote=0;
do{
    console.log(`${voteArray[vote]}`)
    vote++;
}
while(vote < voteArray.length);
console.log('vote completed');
}
let voteArray=['PM,Meles Zenawi','Dr.Debretsion','Pr.Meresa','Pr.Alemtsehay'];
votes(voteArray);

//3 Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.


const correspondingDay=(arrayOfDays)=>{
arrayOfDays.forEach(day=>{
switch(day){
    case 'day-1':
        console.log("The day today is Monday");
        break;
    case 'day-2':
        console.log("The day today is Tuesday");
        break;
    case 'day-3':
        console.log("The day today is Wednesday");
        break;
    case 'day-4':
        console.log("The day today is Thursday");
        break;
    case 'day-5':
        console.log("The day today is Friday");
        break;
    case 'day-6':
        console.log('The day today is Saturday');
        break;
    case 'day-7':
        console.log("The day today is Sunday");
        break;
    default:
        console.log("we don't have another choice for this corresponding.");
        break;
}
});
}
let arrayOfDays=['day-1','day-2','day-3','day-4','day-5','day-6','day-7','day-8'];
correspondingDay(arrayOfDays);

//4 Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.

const passwordStrength=(arrayofPassword)=>{
arrayofPassword.forEach(item=>{
    if(item.length >= 8){
        console.log('Strong password');
    }
    else {
        console.log('Weak password');
    };
});
}
let arrayofPassword=['rg123we2er','kgqwer123wer','kgrfs','kqrg23we']
passwordStrength(arrayofPassword);

//5 You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".

const greetingStart=(greetingArray)=>{
greetingArray.forEach(greet=>{
    switch(greet){
     case 'en':
        console.log("Hello");
        break;
    case 'fr':
        console.log("Bonjour");
        break;
    case 'sw':
        console.log("Habari");
        break;
    default:
        console.log("No greeeting");
        break;
    }
});
}
let greetingArray=['en','fr','sw'];
greetingStart(greetingArray);

//6 You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"

const weatherDashboard=(weatherArray)=>{
weatherArray.forEach(item=>{
  if(item > 30){
    console.log("High heat alert!");
  }
  else if(item<15){
    console.log("Cold alert!");
  }
  else{
    console.log("Normal condition");
  }
})
}
let weatherArray=[30,-15,15,12,60];
weatherDashboard(weatherArray);

//7 Users are queued to register. Use a while loop to remove and print each name until the queue is empty.
function clearQueue(queue){
    while(queue.length>0){
        let name=queue.shift();
        console.log(`Remove: ${name}`);
    }
    console.log("Queue is now empty");
}
let queue=["Alice","Hagos","Joe","Berhe"];
clearQueue(queue);

//8 Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.
function retakeTest(studentsScoreArray){
    studentsScoreArray.forEach(student=>{
        let score = student.score;
        let attempt=1;
        if(score>=50){
            console.log(`Attempt:${attempt} , ${student.name}  you have already passed because your score: is ${student.score} `);
        }
        else{
        do{
            console.log(` Attempt: ${attempt} name: ${student.name}  retake test because your : score: is ${student.score} `);     
            attempt++;
            score+=10;  
           
        } while(score < 50);
        console.log(` name:${student.name} your final is score=${student.score}.So, you pass after ${attempt} attempts!`); 
}
});
}

let studentsScoreArray=[{"name":"Alice","score":50 },{"name":"Rigbe","score":20},{"name":"Helen","score":30},{"name":"Luwam","score":60}]
retakeTest(studentsScoreArray);