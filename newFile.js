 var a = {
  "name": "Evgeniy",
  "surname" : "Baidarkovi4",
};
var b = {
  "name" : "Pavel",
   "surname" : "Sergeev",
};
var c = {
  "name": "Ivan",
  "surname" : "Ivanov",
};

console.log(a)

//----------------------------------//
a.age = 19;

b.fathername = "Urakovich";

c.sex = "male"

//-----------------------------------//

"age" in a ;

"fathername" in b; 

"sex" in c ; 


alert(a["age"]);
alert(b["fathername"]);
alert(c["sex"]);
//TRUE-----------------//


var persons = []
persons = [ a , b , c]

var person ={"name":"lexa",
"surname": "ALEXOvich"
}
persons = [{a , b ,c ,person}]



//------array of persons-----------------------------//

for(let key in persons){console.log(persons[key])}

//-------loop of persons ------------ //

var persons = [a, b, c, person];

for (var personz of persons) {
  var name = '';
  var surname = '';

  for (var key in person) {
    if (key === 'name') name = personz[key];
    else if (key === 'surname') surname = personz[key];
    else continue;
  }

  console.log(`personz: ${name} ${surname}`);

  //----------loop of name and surname ----- // 



  for (var valuee of persons) {
    console.log(valuee);
  }

  // ------ ВОПРОС  ------ выводит все, хотя должно выводить значение -- //


  //fullName ------------------------

 console.log (JSON.stringify(persons) ) 

 //  JSON stringify //

 var json = '{"name":"Pavel","surname":"Sergeev","fathername":"Urakovich"}';


 var parse = JSON.parse(json);
 var array = [];
 var count = 0;
 var once_element = {}

 for (var obj in parse) {
   console.log(count % 3);
   once_element[obj] = parse[obj];

   if (count % 3 == 2) {
     array.push(once_element);
     once_element = {};
   }

   count++;
 }

 console.log(array);


 persons = {
   a,
   b,
   c,
   person,
   json
 }

}

//deserialize//  


/* HTML , вопрос : ничего не понял */
