const express=require('express')
require('dotenv').config()
const app=express()
const cors=require('cors')
const fs = require('fs');
const ytdl = require('ytdl-core');
app.use(cors())
app.use(express.json())
const port=process.env.PORT || 8080
app.post('/fbandinsta',async (req:any,res:any)=>{
    const {url}=req.body
    let URL = ""
    res.json({
        status:"success",
        downloadUrl:URL
    })
})
// app.get('/yt', async (req :any, res:any) => {
//     const { url } = req.query;
//     let info = await ytdl.getInfo(url);
//     let format = ytdl.chooseFormat(info.formats, { quality: '134' });
//     res.json({
//         status:"success",
//         url:format.url
//     })
    
    
    
    
// });
app.get('/yt360', async (req :any, res:any) => {
    const { url } = req.query;
    const info = await ytdl.getInfo(url);
    const videoStream = ytdl(url,{ filter: (format:any) => format.qualityLabel === '360p' });
    const fileStream = fs.createWriteStream(info.videoDetails.videoId+".mp4");
    
    videoStream.pipe(fileStream);

    fileStream.on('finish', () => {
        // The ytdl and file write operations are complete
        res.download(info.videoDetails.videoId+".mp4", info.videoDetails.title+".mp4", (err:any) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    status: 'error',
                    error: 'Failed to download the file',
                });
            } else {
                // Optionally, you can remove the file after downloading
                fs.unlinkSync(info.videoDetails.videoId+".mp4");
                console.log('File downloaded successfully');
                res.json({
                    formats:info.videoDetails.formats
                })
            }
        });
        
    });

    fileStream.on('error', (err:any) => {
        console.error(err);
        res.status(500).json({
            status: 'error',
            error: 'Failed to write the file',
        });
    });
    
});
app.get('/yt480', async (req :any, res:any) => {
    const { url } = req.query;
    const info = await ytdl.getInfo(url);
    const videoStream = ytdl(url,{ filter: (format:any) => format.qualityLabel === '480p' });
    const fileStream = fs.createWriteStream(info.videoDetails.videoId+".mp4");
    
    videoStream.pipe(fileStream);

    fileStream.on('finish', () => {
        // The ytdl and file write operations are complete
        res.download(info.videoDetails.videoId+".mp4", info.videoDetails.title+".mp4", (err:any) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    status: 'error',
                    error: 'Failed to download the file',
                });
            } else {
                // Optionally, you can remove the file after downloading
                fs.unlinkSync(info.videoDetails.videoId+".mp4");
                console.log('File downloaded successfully');
                res.json({
                    formats:info.videoDetails.formats
                })
            }
        });
        
    });

    fileStream.on('error', (err:any) => {
        console.error(err);
        res.status(500).json({
            status: 'error',
            error: 'Failed to write the file',
        });
    });
    
});
app.get('/yt720', async (req :any, res:any) => {
    const { url } = req.query;
    const info = await ytdl.getInfo(url);
    const videoStream = ytdl(url,{ filter: (format:any) => format.qualityLabel === '720p' });
    const fileStream = fs.createWriteStream(info.videoDetails.videoId+".mp4");
    
    videoStream.pipe(fileStream);

    fileStream.on('finish', () => {
        // The ytdl and file write operations are complete
        res.download(info.videoDetails.videoId+".mp4", info.videoDetails.title+".mp4", (err:any) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    status: 'error',
                    error: 'Failed to download the file',
                });
            } else {
                // Optionally, you can remove the file after downloading
                fs.unlinkSync(info.videoDetails.videoId+".mp4");
                console.log('File downloaded successfully');
                res.json({
                    formats:info.videoDetails.formats
                })
            }
        });
        
    });

    fileStream.on('error', (err:any) => {
        console.error(err);
        res.status(500).json({
            status: 'error',
            error: 'Failed to write the file',
        });
    });
    
});
app.get('/yt1080', async (req :any, res:any) => {
    const { url } = req.query;
    const info = await ytdl.getInfo(url);
    const videoStream = ytdl(url,{ filter: (format:any) => format.qualityLabel === '1080p' });
    const fileStream = fs.createWriteStream(info.videoDetails.videoId+".mp4");
    
    videoStream.pipe(fileStream);

    fileStream.on('finish', () => {
        // The ytdl and file write operations are complete
        res.download(info.videoDetails.videoId+".mp4", info.videoDetails.title+".mp4", (err:any) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    status: 'error',
                    error: 'Failed to download the file',
                });
            } else {
                // Optionally, you can remove the file after downloading
                fs.unlinkSync(info.videoDetails.videoId+".mp4");
                console.log('File downloaded successfully');
                res.json({
                    formats:info.videoDetails.formats
                })
            }
        });
        
    });

    fileStream.on('error', (err:any) => {
        console.error(err);
        res.status(500).json({
            status: 'error',
            error: 'Failed to write the file',
        });
    });
    
});
app.post('/tk',async (req:any,res:any)=>{
    const {url}=req.body
    let URL = ""
    res.json({
        status:"success",
        downloadUrl:URL
    })
})
app.post('/tw',async (req:any,res:any)=>{
    const {url}=req.body
    let URL = ""
    res.json({
        status:"success",
        downloadUrl:URL
    })
})


app.listen(port,()=>console.log('listening on ',port))
