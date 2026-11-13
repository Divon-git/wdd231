
const dataSource = "data/members.json";

const cardDiv = document.getElementById("cards");

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

const getData = async () => {
    try {
        const response = await fetch(dataSource);

        if (!response.ok) {
            throw new Error(`Request failed ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

        displayData(data.companies);

    } catch (err) {
        console.log(err);
    }
};

getData();

const displayData = (companies) => {

    companies.forEach(company => {

        const businessName = company.companyName;
        const tag = company.tagline;
        const image = company.imageurl;
        const mail = company.email;
        const number = company.phone;
        const url = company.website;
        const level = company.level

        const sections = document.createElement("section");
        const hTwo = document.createElement("h2");
        const spanTag = document.createElement("span");
        const businessImage = document.createElement("img");
        const info = document.createElement("div");
        // const containerDiv = document.createElement("div");

        businessImage.setAttribute("src", image);
        businessImage.setAttribute("alt", `${businessName} logo`);
        businessImage.setAttribute("loading", "lazy");
        businessImage.setAttribute("width", "150");
        businessImage.setAttribute("height", "100");
        info.setAttribute("class", "innerdivp")

        hTwo.textContent = businessName;
        spanTag.textContent = tag;
        
        const colorLevel = (color) => {
            return  `
        <p><strong>EMAIL:</strong> ${mail}</p>
        <p><strong>PHONE:</strong> ${number}</p>
        <p><strong>URL:</strong> <a href="${url}" target="_blank">${url}</a></p>
        <p class="${color} level"><strong>Level:</strong> ${level}</p>
        `;
        };
        
        if (level === "gold") {
            info.innerHTML = colorLevel("gold");
        } else if (level === "silva") {
            info.innerHTML = colorLevel("silva");
            
        } else if (level === "Ruby") {
            info.innerHTML = colorLevel("ruby");    
        };
        


        

        
        sections.appendChild(hTwo);
        sections.appendChild(spanTag);
        sections.appendChild(businessImage);
        sections.appendChild(info);
        

        cardDiv.appendChild(sections);

    });
};

 const showList = () => {
        cardDiv.classList.add("list");
        cardDiv.classList.remove("grid");
 };

 const showgrid = () => {
        cardDiv.classList.add("grid");
        cardDiv.classList.remove("list");
 };

 gridButton.addEventListener("click", showgrid);
 listButton.addEventListener("click", showList);
