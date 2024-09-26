//19th
var a=5;
var b=10;
var c=20;
var d= a * b + c;
console.log(d);
var comp={
    equal:d==100,
    gt:d>100,
    lt:d<100,
    gte:d>=100,
    lte:d<=100,
    ne:d!=100
}
console.log(comp);
//20th
var x=8;
var y=12;
var logic={
    and:x>5&&y<20,
    or:x>5||y<20,
    not:!(x>5 == y<20)
}
console.log(logic);
//21st
var num1=25;
var num2=35;
var result= num1 > num2 ? "num1 is larger" :"num2 is larger";
console.log(result);
//22nd
var m=15;
var n=10;
var subdiv={
    sub:m-n,
    div:m/n

}
console.log(subdiv);
var result=subdiv%2==0 ? "even": "sub num is 5, div num is 1.5 both are odd";
console.log(result);
//23rd
var age=18;
var gte=age<=18 ;
var e=age== 18;
var ee=age===18;
console.log(gte,e,ee);
//objects
//1st
var car= {
    make :"Lambhorgini",
    model :"Lambhorgini Aventador",
    year: 2022
    }
    var freeze=Object.freeze(car);
    console.log(Object.isFrozen(car));
    car.model="lam";
    console.log(car);
    //2nd
    var user={
        name:"sumedh",
        age:27,
        email:"sumedh@gmail.com"
    }
    console.log(Object.isFrozen(user));
    //3rd
    var product={
        name:"fastrack",
        category:"Smartwatch",
        price:2699
    }
    console.log(Object.isSealed(product));
    //4th
    var laptop={
        brand:"Dell",
        model:"inteli5",
        price:50390
    }
    console.log(Object.keys(laptop));
    //5th
    var Eiffeltower={
        location:"Paris",
        size:"1083ft",
        price:7799401,
    
    }
    console.log(Object.values(Eiffeltower));
    //6th
    var smartphone={
        brand:"Vivo",
        model:"y21",
        price:18000,
    }
    Object.seal(smartphone)
    smartphone.price=20000
    console.log(smartphone);
    
    console.log(Object.isSealed(smartphone));
    //7th
    var book={
        title:"Bhagavad Gita",
        author:"Maharishi Ved Vyasa",
        publishedyear: "3rd century"
    }
    Object.freeze(book)
    book.publishedyear="4th century";
    console.log(book);
    console.log(Object.isFrozen(book));
    //8th
    var person={
        firstname:"Sruthi",
        lastname:"Beemari",
        age:21
    }
    console.log(person);
    console.log(Object.keys(person));
    console.log(Object.values(person));
    //9th
    var course={
        title:"java fullstack",
        instructor:"10kcoders",
        duration:"6months"
    }
    
    console.log(Object.entries(course));
    (delete course.duration);
    console.log(course);
    //10th
    var employee={
        name:"sruthi",
        position:"software developer",
        salary:600000
    }
    Object.seal(employee)
    employee.position="Analyst"
    console.log(employee);
    console.log(Object.keys(employee))
    employee.company="tcs";
    console.log(employee);
//string
//1st
var quote="music heals everything";
var c=quote.slice(6,11)
console.log(c.toUpperCase());
//2nd
var color="red";
console.log(color.length);
console.log(color.toUpperCase());
//3rd
var string="saisrinivasa agents";
console.log(string.charAt(3));
console.log(string.charCodeAt(3));
//4th
var string="  radhakrishna  ";
trim=string.trim();
console.log(trim.slice(2,4));
//5th
var name1="KRISHNA";
var name2="KRISHNA";
var concat=name2.toLowerCase()
console.log(name1.concat(concat));
//6th
var maa="   Radha";
trim=(maa.trimStart());
console.log(trim.slice(1,-1));
//7th
var bird="peacock";
char=bird.charAt(3);
console.log(char.toUpperCase());
//8th
var str1="krishn ";
var trim=(str1.trimEnd());
console.log(trim);

str2="the supreme";
console.log(str1.concat(str2));
//9th
var place="  dwaraka  ";
var trim=place.trim();
var up=trim.toUpperCase();
console.log(up);
console.log(up.slice(2,5));
//10th
let string1 = "HELLO";
let string2 = "WORLD";
let lw1=string1.toLowerCase();
let lw2=string2.toLowerCase();
var concat=lw1.concat("  ",lw2);
console.log(concat);
console.log(concat.charAt(0));
