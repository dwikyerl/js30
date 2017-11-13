const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

    // Regular
    console.log('hello');

    // Interpolated
    console.log('hello I am a %s string!', 'random');

    // Styled
    console.log('%c I am some great text', 'font-size: 50px;')

    // warning!
    console.warn('Oh nooo');

    // Error :|
    console.error('No!');

    // Info
    console.info('Crocodiles eat 3-4 people per year!');

    // Testing
    console.assert(1 === 2, 'That is Wrong!')

    // clearing
    console.clear();

    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.log(p);
    console.dir(p);
    console.clear();

    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.groupEnd(`${dog.name}`)
    });

    // counting
    console.count('Shiro');
    console.count('Shiro');
    console.count('Kuro');
    console.count('Kuro');
    console.count('Kuro');
    console.count('Kuro');
    console.count('Kuro');
    console.count('Shiro');
    console.count('Kuro');
    console.count('Kuro');
    console.count('Shiro');
    console.count('Shiro');
    console.count('Shiro');
    console.count('Shiro');


    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

    //table
    console.table(dogs);