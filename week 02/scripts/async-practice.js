const getTodos = (resource) => {
    return new Promise ((resolve, reject) =>{
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () =>{
            // console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                // callback(undefined, data);
                resolve(data);

            } else if (request.readyState === 4){
                // callback("could not fetch data", undefined);
                reject("failed to fetch data");
            }
        });        

        request.open("GET", resource);  
        request.send(); 

    })

};
console.log(1);
console.log(2);

getTodos("asyncPractice/ward-member.json").then(data =>{
    console.log("promise1:",data);
    return getTodos("asyncPractice/members2.json");
}).then(data =>{
    console.log("promise2:",data);
    return getTodos("asyncPractice/members3.json");
}).then(data => {
    console.log("promise3:",data);
}).catch(err => {
    console.log(err);
})


// promice example

// const getSomething = () => {

//     return new Promise ((resolve, reject) =>{
//         // fetch some data
//         resolve("a data");
//         // reject("an eror");

//     })

// }

// getSomething().then(data =>{
//     console.log(data);
// }, (err) => {
//     console.log(err)
// })

// getSomething().then(data =>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// });

// getTodos("asyncPractice/ward-member.json",(err, data) => {
//     console.log(data);
//     getTodos("asyncPractice/members2.json",(err, data) => {
//         console.log(data);
//         getTodos("asyncPractice/members3.json",(err,data) => {
//             console.log(data);
//         });
//     });
// });
    // if(err){
    //     console.log(err);
    // } else {
    //     console.log(data);
    // }
// });

console.log(3);
console.log(4);


fetch("asyncPractice/members2.json").then(response => {
    if (response.status === 200) {
        console.log("resolved:", response);
        return response.json();
    }else if (response.status === 404){
        return "error"
    }

}).then(data => {
    console.log(data);
}).catch(err => {
    console.log("unable to find data:", err);
})

const gettodo1 = async () => {
    const response = await fetch("asyncPractice/members3.json");

    if (response.status !== 200) {
        throw new Error ("cannot fetch data, somthing went wrong");
    }


    const data = await response.json()
    return data
}

gettodo1()
    .then(data => console.log("resolved",data))
    .catch(err => console.log("rejected", err.message));


