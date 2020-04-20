var mood = {};
mood.positive = require("./Positive-Attribute");
mood.negative = require("./Negative-Attribute");
mood.professional = require("./Professional-Attribute");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("please type (positive/negative/professional) ", function(attribute) {

		switch (true) {
	case ( attribute == 'positive') :
		console.log('It is good to be in' + mood.positive[(Math.floor(Math.random() * mood.positive.length))] + "mood.");
		break;
	case ( attribute == 'negative'):
		console.log('I know you have' + mood.negative[(Math.floor(Math.random() * mood.negative.length))] + "mood, but please change it. ↖ (^ ▽ ^)↗ ");
		break;
	case ( attribute == 'professional'):
		console.log('Ohhh, It looks you are in' + mood.professional[(Math.floor(Math.random() * mood.professional.length))] + "mood. :-D");
		break;
	default :
		console.log('Please select from the above option');
		}

         process.exit(0);
    });
module["exports"] = mood;