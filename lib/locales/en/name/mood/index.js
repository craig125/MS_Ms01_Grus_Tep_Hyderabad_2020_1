var mood = {};
mood.positive = require("./Positive-Attribute");
mood.negative = require("./Negative-Attribute");
mood.professional = require("./Professional-Attribute");
var input = process.stdin;
input.setEncoding('utf-8');
console.log("please type (positive/negative/professional) or exit for terminate the code : ");
input.on('data', function (data) {
    if(data === 'exit\n'){
		console.log("Bye Bye, Have a Good Day.");
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
    process.exit();	
    }
    else {
    	console.log('You have entered : ' + data + 'But it does not do the magic.  Please choose again from the available option or exit for terminate the code : ');
    }
});
module["exports"] = mood;