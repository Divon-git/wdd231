
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
        const info = document.createElement("p");
        const containerDiv = document.createElement("div");

        businessImage.setAttribute("src", image);
        businessImage.setAttribute("alt", `${businessName} logo`);
        businessImage.setAttribute("loading", "lazy");
        businessImage.setAttribute("width", "150");
        businessImage.setAttribute("height", "100");

        containerDiv.classList.add("cardContainer");
        sections.classList.add("sections");

        hTwo.textContent = businessName;
        spanTag.textContent = tag;

        info.innerHTML = `
            <strong>EMAIL:</strong> ${mail}
            <br>
            <strong>PHONE:</strong> ${number}
            <br>
            <strong>URL:</strong> <a href="${url}" target="_blank">${url}</a>
            <br>
            <strong>Level:</strong> ${level}
        `;

        containerDiv.appendChild(hTwo);
        containerDiv.appendChild(spanTag);
        containerDiv.appendChild(businessImage);
        containerDiv.appendChild(info);

        sections.appendChild(containerDiv);
        cardDiv.appendChild(sections);

    });
};


// LIST VIEW
listButton.addEventListener("click", () => {

    const sections = document.querySelectorAll(".sections");
    const containers = document.querySelectorAll(".cardContainer");

    sections.forEach(section => {
        section.classList.add("list");
    });

    containers.forEach(container => {
        container.classList.add("list-inner");
    });

});


// GRID VIEW
gridButton.addEventListener("click", () => {

    const sections = document.querySelectorAll(".sections");
    const containers = document.querySelectorAll(".cardContainer");

    sections.forEach(section => {
        section.classList.remove("list");
    });

    containers.forEach(container => {
        container.classList.remove("list-inner");
    });

});
