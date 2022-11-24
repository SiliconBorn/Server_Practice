const fs = require("fs");

const writeDataToFile=(filename,content)=>{



    fs.writeFileSync(filename,JSON.stringify(content),'utf-8',(err)=>{
        if(err) throw err;
    })
}

const getPostData =(req)=>{

    return new Promise((res,rej)=>{
        try {
            let body ='';
            req.on('data',(chunk)=>{
                      body+=chunk.toString();
            });

            req.on('end',()=>{
                 res(body);
            })
        } catch (error) {
            rej(err)
        }
    })
}


module.exports={
    writeDataToFile,
    getPostData
}