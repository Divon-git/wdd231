const dataSource = "data/members.json";

const cardDiv = document.getElementById("cards");

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

    const sectionList = [];
    console.log(sectionList);

    // // const sections = document.createElement("section");
    // const hTwo = document.createElement("h2");
    // const spanTag = document.createElement("span");
    // const businessImage = document.createElement("img");
    // const info = document.createElement("div");

    companies.forEach(company => {

        const businessName = company.companyName;
        const tag = company.tagline;
        const image = company.imageurl;
        const mail = company.email;
        const number = company.phone;
        const url = company.website;
        const level = company.level

        // const sections = document.createElement("section");
        const hTwo = document.createElement("h2");
        const spanTag = document.createElement("span");
        const businessImage = document.createElement("img");
        const info = document.createElement("div");

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
            sectionList.push({
            h2: hTwo,
            span: spanTag,
            image: businessImage,
            info: info
        });
        } else if (level === "silva") {
            info.innerHTML = colorLevel("silva");
            sectionList.push({
            h2: hTwo,
            span: spanTag,
            image: businessImage,
            info: info
        });
            
        } else if (level === "Ruby") {
            info.innerHTML = colorLevel("ruby");    
        };
        
        
        
        
        
        // sectionList.push({
            //     h2: hTwo, 
            //     span: spanTag,
            //     image: businessImage,
            //     info: info
            // });
            
            
            // sections.appendChild(hTwo);
            // sections.appendChild(spanTag);
            // sections.appendChild(businessImage);
            // sections.appendChild(info);
            
            
            // cardDiv.appendChild(sections);
            
        });
        const shuffleSectionlist = sectionList.sort(() => Math.random() - 0.5);
        // console.log(shuffleSectionlist);
    
        const randomsections = shuffleSectionlist.slice(0,2);
        console.log(randomsections);
        randomsections.forEach(item => {
        console.log(item.h2.textContent);
    });
        randomsections.forEach(item => {
            const sections = document.createElement("section");
            // console.log(item)
            sections.appendChild(item.h2);
            // console.log(item.h2);
            sections.appendChild(item.span);
            sections.appendChild(item.image);
            sections.appendChild(item.info);
            // console.log(item.info)
    
            cardDiv.appendChild(sections);
          
    
        });
};