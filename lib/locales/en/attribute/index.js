var attribute = {};
module["exports"] = attribute;
attribute.type = require("./attribute_type");
attribute.type.possitive = require("./Positive-Attribute");
attribute.type.negative = require("./Negative-Attribute");
attribute.type.professional = require("./Professional-Attribute");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("please type (possitive/negative/professional) ", function(mood) {

		switch (true) {
	case ( mood == 'possitive') :
		console.log('It is good to be in' + attribute.type.possitive[(Math.floor(Math.random() * attribute.type.possitive.length))] + "mood.");
		break;
	case ( mood == 'negative'):
		console.log('I know you have' + attribute.type.negative[(Math.floor(Math.random() * attribute.type.negative.length))] + "mood, but please change it. ↖ (^ ▽ ^)↗ ");
		break;
	case ( mood == 'professional'):
		console.log('Ohhh, It looks you are in' + attribute.type.professional[(Math.floor(Math.random() * attribute.type.professional.length))] + "mood.");
		break;
	default :
		console.log(`Please select from the above option`);
		}

         process.exit(0);
    });