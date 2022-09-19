import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data'); //Get filepath to data directry

//Functions returns IDS for all objest in JSON array
//Feeds getStaticPath()
export function getAllIds() {
    const filePath = path.join(dataDir, 'persons.json'); //get filepath to JSON file
    const jsonString = fs.readFileSync(filePath, 'utf8'); //Load JSON file content
    const jsonObj = JSON.parse(jsonString);

    const returnedData = jsonObj.map(item => { // <= Use map() on array to extract just ID
        return {
            params: {
                id: item.id.toString()
            }
        }
    });
    return returnedData;
};

//Functions to return Names and ID, and Sort by name property
//Feeds getStaticProper()
//Examples - Provide list on homepage
export function getSortedList() {

}

//Functions known as async to get complete data for just one ID
export async function  getData(idRequested) {
    const filePath = path.join(dataDir, 'persons.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);

    const objMatch = jsonObj.filter( obj => { //Find object value in Ary that has matching ID
            return obj.id.toString() === idRequested;
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