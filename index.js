const express=require('express')
require('dotenv').config()
const app=express()
const cors=require('cors')
const fs = require('fs');
const ytdl = require('ytdl-core');
app.use(cors())
app.use(express.json())
const port=process.env.PORT || 8080
app.post('/fbandinsta',async (req,res)=>{
    const {url}=req.body
    let URL = ""
    res.json({
        status:"success",
        downloadUrl:URL
    })
})
// app.get('/yt', async (req , res) => {
//     const { url } = req.query;
//     let info = await ytdl.getInfo(url);
//     let format = ytdl.chooseFormat(info.formats, { quality: '134' });
//     res.json({
//         status:"success",
//         url:format.url
//     })
    
// });
app.get('/yt',async (req,res)=>{
    const { url } = req.query;
    const videoId=ytdl.getVideoID(decodeURIComponent(url))
    const info = await ytdl.getInfo(videoId);
      
    res.json({
        detail:info.videoDetails,
        formats:info.formats
    })
})
app.get('/ytdown', async (req , res) => {
    const { url,itag } = req.query;
    const videoId=ytdl.getVideoID(decodeURIComponent(url))

    const info = await ytdl.getInfo(videoId);
    const detailedinfo=info.formats.filter((i)=>i.itag==itag)[0]
    const videoStream = ytdl(decodeURIComponent(url),{ filter: (format) => format.itag == itag });
    
   
       
        res.setHeader('Content-Type', detailedinfo.mimeType.split(';')[0]); // Corrected MIME type for MP4 videos
        // console.log(]); 
        res.setHeader('Content-Disposition', `attachment; filename="video.${detailedinfo.container}"`); // Dynamic filename
        
        videoStream.pipe(res);
     
    // const fileStream = fs.createWriteStream(videoId+".mp4");
    
    // videoStream.pipe(fileStream);

    // fileStream.on('finish', () => {
    //     // The ytdl and file write operations are complete
    //     res.download(videoId+".mp4", info.videoDetails.title+".mp4", (err) => {
    //         if (err) {
    //             console.error(err);
    //             res.status(500).json({
    //                 status: 'error',
    //                 error: 'Failed to download the file',
    //             });
    //         } else {
    //             // Optionally, you can remove the file after downloading
    //             fs.unlinkSync(info.videoDetails.videoId+".mp4");
    //             console.log('File downloaded successfully');
                
    //         }
    //     });
        
    // });

    // fileStream.on('error', (err) => {
    //     console.error(err);
    //     res.status(500).json({
    //         status: 'error',
    //         error: 'Failed to write the file',
    //     });
    // });
    
});
app.post('/tk',async (req,res)=>{
    const {url}=req.body
    let URL = ""
    res.json({
        status:"success",
        downloadUrl:URL
    })
})
app.post('/tw',async (req,res)=>{
    const {url}=req.body
    let URL = ""
    res.json({
        status:"success",
        downloadUrl:URL
    })
})


app.listen(port,()=>console.log('listening on ',port))
