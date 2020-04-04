import { AsyncStorage } from 'react-native';
// import DropdownAlert from 'react-native-dropdownalert';
import {newsAPI, api_url, country_target, api_key} from '../config/restAPIConfig';

/**
 * @Desc => get single category news
 * @param {*} cat 
 * @returns [{}] news
 */
 async function getNews(cat) {


    const news_cat = cat ==='top-headlines'?'':cat;  /// catergories
    const fetch_API = newsAPI +'&category='+ news_cat; //webservice constuct
  
    try {

        let data = await fetch(fetch_API);
        let news = await data.json();
        
        return news.articles;
    }catch(error) {
        throw error;
    }
}

/**
 * @Desc => get multiple category news
 * @param {*} => categories 
 * @returns { [], [], [] ... }  news
 */
function getAllNews(categories) {

 
   
    try {

           const newsFeeds =  categories.map((cat)=> { 
                cat = cat =='top-headlines'? '': cat;
                               
                let fetch_API = newsAPI +'&category='+ cat;
                return fetch(fetch_API).then(value => value.json())
            });
     
        return Promise.all(newsFeeds).then(data => data).catch(err=> err);    
        
    }
    catch(error) {
        console.log(error);
        throw (error);

    }
}

/**
 * @desc Get saved news from storage
 */
async function getSavedNews() {

    
      try {
          
          let o_savedNews = await AsyncStorage.getItem('SavedNews') ;
          return await JSON.parse(o_savedNews);
          
      }
      catch(error) {
        console.log(error);
      }
    
}

/**
 * @desc Save news to storage
 * @param {*} addNews 
 */
async function setSavedNews(addNews) {

    let storeArray = [];
    try {
        
        let inStorage = await AsyncStorage.getItem('SavedNews') ;   // get stringified news and parse it to object

        if (inStorage == null) {         //no news in storage  
            storeArray.push(addNews);     
            await AsyncStorage.setItem('SavedNews', JSON.stringify(storeArray));

        }
        else {   //if storage already has some news
            inStorageObj = JSON.parse(inStorage);
            let storeArray = [...addNews, ...inStorageObj];
             await AsyncStorage.setItem('SavedNews', JSON.stringify(storeArray));
                       
          }

         
             
    }
    catch(error) {
      console.log(error);
    //   Toast.show(error, Toast.LONG);
    }
  
}


export {
    getNews,        // single category news
    getAllNews,     // mulitple category news
    getSavedNews,   // save in async storage
    setSavedNews,   // save favorite news   
}