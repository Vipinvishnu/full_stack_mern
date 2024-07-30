const multer=require("multer")

//storage-location-filename
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}-${file.originalname}`)
    }
})
//file filter-jpg,jpeg,png,pdf


const fileFilter=(req,file,callback)=>{
    if(file.mimetype=="image/jpg"  || file.mimetype=="image/jpeg" || file.mimetype=="image/png"){
        callback(null,true)

    }else{
        callback(null,false)
    }
}


//multer middleware creation

const upload=multer({storage,fileFilter})
module.exports= upload