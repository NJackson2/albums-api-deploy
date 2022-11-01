import dbConnect from './dbConnect.js'

export function getAllAlbums(req, res){
    const db = dbConnect()
    db.collection('albums').get()
        .then(collection => {
            const albumsArr = collection.docs.map(doc => {
                return {...doc.data(), albumId: doc.id}
            })
        .catch(err => res.status(500).send({success: false, message:err}))
}
}

export function createnewAlbum(req, res) {
    const db = dbConnect()
    db.collection('albums').add(req.body)
        .then(doc => res.status(201).send({success: true, message: 'Album created:'}))
        .catch(err => res.status(500).send({success: false, message:err}))
}