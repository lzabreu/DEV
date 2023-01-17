const input = document.querySelector('input');
input.addEventListener('keypress',handleEnter);

const ul = document.querySelector('ul');

function handleEnter(e){

  if(e.key === "Enter"){
    const newLi = document.createElement('li');
    newLi.innerText = input.value
    ul.appendChild(newLi)

    /*  Pode ser substituído mas não é recomendado por
    ul.innerHTML += '<li>' + input.value + '</li>' 
    pois ele renderizaria a lista toda de novo*/

    input.value ='';
  }

}

class Person {
  _age = 0;
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    get fullName() { 
      return `${this.firstName} ${this.lastName}`;
    }
    get age() {
      return this._age;
    }
    set age(x){
      if(typeof x == 'number'){
        this._age = x;
      }
    }
  }
  class Student extends Person{
    constructor(firstName, lastName, id){
      super(firstName, lastName);
      this.id = id;
    }
  }

  let p1 = new Student('Luciano', 'Abreu', 1)
  p1.age = 20;
  console.log(`${p1.fullName} tem ${p1.age} e o id é ${p1.id}`)