var mood = {};
mood.positive = require("./Positive-Attribute");
mood.negative = require("./Negative-Attribute");
mood.professional = require("./Professional-Attribute");
var input = process.stdin; 
input.setEncoding('utf-8'); //A Unicode-based encoding such as UTF-8 can support many languages and can accommodate pages and forms in any mixture of those languages. Its use also eliminates the need for server-side logic to individually determine the character encoding for each page served or each incoming form submission. This significantly reduces the complexity of dealing with a multilingual site or application.]
console.log("Please type (positive/negative/professional) or exit for terminate the code : "); // One can use "process.stdout.write" instead of console.log()
input.on('data', function (data) { //event listner(take data as input and start callback function the [data] argument.)
    if(data === 'exit\n'){
		console.log("Bye Bye, have a Good Day.");
        process.exit(); 
    }
    else if ( data === 'positive\n') {
    console.log('It is good to be in' + mood.positive[(Math.floor(Math.random() * mood.positive.length))] + "mood.");
    process.exit();	
    }
    else if ( data === 'negative\n') {
    console.log('I know you have' + mood.negative[(Math.floor(Math.random() * mood.negative.length))] + "mood, but please change it. ↖ (^ ▽ ^)↗ ");
    process.exit();	
    }
    else if ( data === 'professional\n') {
    console.log('Ohhh, It looks you are in' + mood.professional[(Math.floor(Math.random() * mood.professional.length))] + "mood. :-D");
    process.exit();	//killes the process
    }
    else {
    	console.log('You have entered : ' + data + 'But it does not do the magic.  Please choose again from the available option or exit for terminate the code : ');
    } // no process.exit(), as one want to iterate the same instruction till user enters selected optiones or exit.
});
module["exports"] = mood; //return the index.js file as 'mood' module.