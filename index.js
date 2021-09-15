const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

const p = document.getElementById('p');
p.addEventListener('click', makeGreen);

function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular

console.log('hello');

// Interpolated

console.log('hello, I am the %s string!', 'perfect');

// Styled

console.log('%cI am a great text', 'font-size: 20px; background-color: red');

// warning!

console.warn('OOOH NOOO');

// Error :|

console.error('Shit');

// Info

console.info('This is info');

// Testing

console.assert(p.classList.contains('active'), 'p doesn\'t contains class active');

// clearing

console.clear();

// Viewing DOM Elements

console.dir(p);

console.clear();

// Grouping together

dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count('Wes');
console.count('Wes');
console.count('Wes');

// timing

console.time('fetching data');
fetch('https://api.gitHub.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
  });