const learning  = localStorage.getItem('hello');
console.log(learning);

const setAge = ()=>{
    localStorage.setItem('age', 31);
}

setAge();