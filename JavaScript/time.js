var HOUR=8;
var MIN=50;
var PERIOD="AM";

var person="Jack";
var me="Jill";

console.log("Hello ", person, "I am ", me, ".");

if ( MIN<30 && PERIOD =="AM" )
console.log("It is ", HOUR, " ", MIN, " just aftre in the morning" );
else if(MIN<30 && PERIOD =="PM")
console.log("It is ", HOUR, " ", MIN, " just aftre in the evening" );
else if ( MIN>30 && PERIOD =="AM" )
console.log("It is ", HOUR, " ", MIN, " 'almost the next hour' in the morning" );
else if(MIN>30 && PERIOD =="PM")
console.log("It is ", HOUR, " ", MIN, " 'almost the next hour' in the evening" );