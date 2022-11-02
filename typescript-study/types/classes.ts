class Stark {
    name: string;
    static castle: string = "Winterfel";
    saying: string;

    constructor(){
        this.saying = Stark.castle;
    }
}

var ned = new Stark();
ned.saying = "Winter is coming";
console.log(Stark.castle);