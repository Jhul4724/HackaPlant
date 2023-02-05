import express from 'express';
import multer from 'multer';
import { database, storage } from './firebase.js';
const app = express();

const upload = multer({
    storage: multer.memoryStorage()
})
app.use(express.static('uploads'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/upload', upload.single('image'), (req, res) => {
    storage.bucket().file(req.file.originalname).save(req.file.buffer);
    database.ref('uploads').push(req.file.originalname);
    res.send({ file: req.file.originalname });
})

app.listen(8080, () => console.log("Server listening on port 8080"));