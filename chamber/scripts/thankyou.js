import getdate from "./date.js";

const params = new URLSearchParams(window.location.search);


const firstName = params.get("firstName");
const lastName = params.get("lastName");
const email = params.get("email");
const phone = params.get("phone");
const organization = params.get("organization");
const timestamp = params.get("timestamp");



document.querySelector("#display-firstname").textContent = firstName;

document.querySelector("#display-lastname").textContent = lastName;

document.querySelector("#display-email").textContent = email;

document.querySelector("#display-phone").textContent = phone;

document.querySelector("#display-organization").textContent = organization;



const date = new Date(timestamp);

document.querySelector("#display-timestamp").textContent =
    timestamp && !isNaN(date.getTime())
        ? date.toLocaleString()
        : "Not available";



getdate();