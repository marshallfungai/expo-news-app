import React, {useState, useEffect, createContext} from 'react';
import {setSavedNews as asyncSaved} from '../services/newsData';
import {getSavedNews} from '../services/newsData';
// import Toast from 'react-native-simple-toast';


export const SavedNewsContext = createContext();
 
export const SavedNewsProvider = (props) => {

    const [savedNews, setSavedNews] = useState([]);

    
    //Run on init
    useEffect(()=>{
     
        //Get stored news from async storage on init
         getSavedNews().then((json)=>{
                    setSavedNews(json); //set it to context api
          });        
      

    }, []);

    //save to async storage when context changes
    useEffect(()=>{
        asyncSaved(savedNews);
    }, [savedNews]);

    
   
    return (
        <SavedNewsContext.Provider value={[savedNews, setSavedNews]}>
            {props.children}
        </SavedNewsContext.Provider>
    );
}