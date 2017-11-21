const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
                'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
                'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
                'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// const sortedBands = bands.map((name) => name.replace(/\b(the |a |an )\b/gi, ''));

function strip(bandName) {
    return bandName.replace(/^(the |a |an )\b/gi, '');
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

const bandList = document.querySelector("#bands");
bandList.innerHTML = sortedBands.map(band =>`<li>${band}</li>`).join("");


 // const li = document.createElement("li");
    // li.innerText = name;
    // bandList.appendChild(li);