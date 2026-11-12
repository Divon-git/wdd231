const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector("#cards");

const getProphetData = async () => {
try{ 
   const response = await fetch(url);
   if (!response.ok){
    throw new Error (`request failed ${response.status}`);
   }
   const data = await response.json()

   displayProphets(data.prophets);
} catch(err) {
    console.log(err)
}
}

//    console.table(data);


getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const name = `${prophet.name} ${prophet.lastname}`;
        const image = prophet.imageurl;
        const dateOfBirth = `Date of Birth: ${prophet.birthdate}`;
        const birthPlace = `place of Birth: ${prophet.birthplace}`;
        // card build code goes here
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        fullName.textContent = name;
        const portrait = document.createElement("img");
        const paragraph1 = document.createElement("p");
        // const paragraph2 = document.createElement("p");

        paragraph1.innerHTML = `${dateOfBirth} <br> ${birthPlace}`;
        


        portrait.setAttribute("src", image);
        portrait.setAttribute("alt", "A portrait image of a prophet");
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(paragraph1);
        

        card.appendChild(portrait);

        cards.appendChild(card);



  });

}
