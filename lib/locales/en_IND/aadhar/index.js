var aadhar={};
aadhar.randomData = require("./randomdata");
function random_item(item)
{
  
return item[Math.floor(Math.random()*item.length)];
     
}
console.log('Hi,');
console.log('Your Aadhar number is :' + random_item(aadhar.randomData));
module["exports"]=aadhar;
