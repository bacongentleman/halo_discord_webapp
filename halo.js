import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config()

const HALO_API_KEY = process.env.HALO_API_KEY


export const haloRankCurrent = async (gamertag)=> {
    let config = {
        method:"get",
        url:"https://halo.api.stdlib.com/infinite@0.3.7/stats/csrs/",
        headers:{
            Authorization: `Bearer ${HALO_API_KEY}`
        },
        params:{
            gamertag: gamertag
        }
    }
    try {
        let rankResponse = await axios(config);
        return rankResponse.data.data[0].response.current;
    } catch (error) {
        console.error(error);
    }
    

}