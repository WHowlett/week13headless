//import fs from 'fs';
//import path from 'path';

import got from 'got';

//const dataDir = path.join(process.cwd(), 'data'); //Get filepath to data directry
//New added update adding the new API endpoint from WordPress
const dataURL = "https://dev-srjc-fall-week12.pantheonsite.io/wp-json/tweentytweentyone-child/v1/latest-posts/1";

//Functions returns IDS for all objest in JSON array
//Feeds getStaticPath()
export async function getAllIds() {
    //const filePath = path.join(dataDir, 'persons.json'); //get filepath to JSON file
    //const jsonString = fs.readFileSync(filePath, 'utf8'); //Load JSON file content

    let jsonString;

    try {
        jsonString = await got(dataURL);
        console.log(jsonString.body);
    } catch (error) {
        jsonString.body = [];
        console.log(error);
    }

   // const jsonObj = JSON.parse(jsonString);

   const jsonObj = JSON.parse(jsonString.body);
    
   return jsonObj.map(item => {
    return {
        params: {
            id: item.ID.toString()
        }
    }
   });
};

//Functions to return Names and ID, and Sort by name property
//Feeds getStaticProper()
//Examples - Provide list on homepage
export async function getSortedList() {
    //const filePath = path.join(dataDir, 'persons.json');
    //const jsonString = fs.readFileSync(filePath, 'utf8');
    let jsonString;

    try {
        jsonString = await got(dataURL);
        console.log(jsonString.body);
    } catch (error) {
        jsonString.body = [];
        console.log(error);
    }

    //const jsonObj = JSON.parse(jsonString);
    const jsonObj = JSON.parse(jsonString.body);

    jsonObj.sort(function (a, b) {
        return a.post_title.localeCompare(b.post_title);
    });
    
    return jsonObj.map(item => {
        return {
            id: item.ID.toString(),
            name: item.post_title
        }
    })
}

//Functions known as async to get complete data for just one ID
export async function  getData(idRequested) {
    //const filePath = path.join(dataDir, 'persons.json');
    //const jsonString = fs.readFileSync(filePath, 'utf8');
    let jsonString;

    try {
        jsonString = await got(dataURL);
        console.log(jsonString.body);
    } catch (error) {
        jsonString.body = [];
        console.log(error);
    }
    
    const jsonObj = JSON.parse(jsonString.body);

    const objMatch = jsonObj.filter( obj => { //Find object value in Ary that has matching ID
            return obj.ID.toString() === idRequested;
        }
    );

    //Extract object balue in Filtered array if any
    let objReturned;
    if (objMatch.length > 0){ 
        objReturned = objMatch[0];
    } else {
        objReturned = {};
    }
    return objReturned;
}