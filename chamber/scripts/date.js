 const getdate = () => {
    const currentYear = new Date().getFullYear();

 document.getElementById("currentyear").textContent = currentYear;

 document.getElementById("lastModified").innerHTML = `Last Modified ${document.lastModified}`;
 }

 getdate()


 export default getdate;