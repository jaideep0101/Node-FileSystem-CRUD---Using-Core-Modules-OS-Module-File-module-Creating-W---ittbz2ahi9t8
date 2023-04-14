const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.myFileWriter((error)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName} ${fileContent}`)
		}
	})
}

const myFileReader = async (fileName) => {
	fs.myFileReader((error)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName} `)
		}
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	fs.myFileUpdater((error)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName} ${fileContent}`)
		}
	})
}

const myFileDeleter = async (fileName) => {
	fs.myFileDeleter((error)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName}`)
		}
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
