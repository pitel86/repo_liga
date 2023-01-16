const cloudinary = require('cloudinary').v2;

const deleteFile = (imgUrl) => {
    const imgSplited = imgUrl.split('/'); //mi url la convierto en un array por cada elemento /
    const nameSplited = imgSplited[imgSplited.length - 1].split('.'); //hacemos split del ultimo elemento que es nombre.extension
    const folder = imgSplited[imgSplited.length -2]; //obtenemos el penultimo elemento del split por / que nos da el nombre de la carpeta
    const imgToDelete = `${folder}/${nameSplited[0]}`;
    cloudinary.uploader.destroy(imgToDelete, ()=>console.log('imagen borrada', imgToDelete));
}

module.exports = {deleteFile}