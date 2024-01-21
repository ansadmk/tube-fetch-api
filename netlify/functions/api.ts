// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";
require('dotenv').config()

const cors=require('cors')
const fs = require('fs');
const ytdl = require('ytdl-core');
app.use(cors())
app.use(express.json())
const api = express();

const router = Router();
router.get('/yt',async (req:any,res:any)=>{
    const { url } = req.query;
    const videoId=ytdl.getVideoID(decodeURIComponent(url))
    const info = await ytdl.getInfo(videoId);
      
    res.json({
        detail:info.videoDetails,
        formats:info.formats
    })
})
router.get('/ytdown', async (req :any, res:any) => {
    const { url,quality } = req.query;
    const videoId=ytdl.getVideoID(decodeURIComponent(url))

    const info = await ytdl.getInfo(videoId);
    
    
    const videoStream = ytdl(decodeURIComponent(url),{ filter: (format:any) => format.qualityLabel === quality });
   console.log(videoStream);
   
       
        res.setHeader('Content-Type', 'video/mp4'); // Corrected MIME type for MP4 videos
        res.setHeader('Content-Disposition', `attachment; filename="${info.videoDetails.title}.mp4"`); // Dynamic filename
        
        
        videoStream.pipe(res);
     
    
})


api.use("/api/", router);

export const handler = serverless(api);
