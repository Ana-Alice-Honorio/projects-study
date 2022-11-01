interface Stark {
    name: string;
    age?: number;
}

function printName(stark : Stark) {
   console.log(stark.name);
}

printName({name:"Eddard"});
printName({name:"Joe"});