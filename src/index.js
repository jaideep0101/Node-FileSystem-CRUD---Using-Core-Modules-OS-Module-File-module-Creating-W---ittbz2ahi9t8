const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName, fileContent,(error)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName} ${fileContent}`)
		}
	})
}

const myFileReader = async (fileName) => {
	fs.readFile(fileName,(error,data)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName}${data} `)
		}
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFile(fileName, fileContent,(error)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName} ${fileContent}`)
		}
	})
}

const myFileDeleter = async (fileName) => {
	fs.unlink(fileName,(error)=>{
		if(error){
		console.log(error);
		}else{
		console.log(`${fileName}`)
		}
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
