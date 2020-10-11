import historyData from './data/serachHistory.json';

var obj = {
    history:[]
};

var fs = require('fs');

export function storeData(userName, city, searchDate, seracTime) {
    fs.readFile(historyData,json,'utf8', function readfileCallback(err, data){
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); //now it an object
            obj.history.push({date: searchDate, time: seracTime, city: city, user: userName}); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile(historyData, json, 'utf8', callback); //ca
        }
    })    
}