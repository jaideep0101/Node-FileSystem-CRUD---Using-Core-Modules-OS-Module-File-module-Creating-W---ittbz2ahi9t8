const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile((error)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName} ${fileContent}`)
		}
	})
}

const myFileReader = async (fileName) => {
	fs.readFile((error)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName} `)
		}
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFile((error)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName} ${fileContent}`)
		}
	})
}

const myFileDeleter = async (fileName) => {
	fs.unlink((error)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName}`)
		}
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
