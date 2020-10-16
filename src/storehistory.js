import historyData from './data/serachHistory.json';

var obj = {
    // history:[]
};

var fs = require('fs');

export function storeHistory(userName, city, country, localDate,image,temp,description) {

   // using fetch api to post to local json file
    fetch('../data/serachHistory.json',{
        method : 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username: userName,
            name: city,
            country: country,
            localtime: localDate,
            icon: image,
            temp_c: temp,
            text: description
        })
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
        fs.writeFile(historyData, json, 'utf8', callback); 
    })
    .catch((err) => console.log(err))

    // fs.readFile(historyData,json,'utf8', function readfileCallback(err, data){
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         obj = JSON.parse(data); //now it an object
    //         obj.history.push({date: searchDate, time: seracTime, city: city, user: userName}); //add some data
    //         json = JSON.stringify(obj); //convert it back to json
    //         fs.writeFile(historyData, json, 'utf8', callback); //ca
    //     }
    // })    
}

export {StoreHistory};

//using fetch api to post to local json file
// fetch(api_url,{
//     method = 'POST',
//     headers: {
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         date: "2020-10-12 22:20"
//     })
// })
// .then(res => {
//     return res.json()
// })
// .then(data => console.log(data))

// .catch((err) => console.log(err))

// fs.writeFile(historyData,data,'utfe',callback);

