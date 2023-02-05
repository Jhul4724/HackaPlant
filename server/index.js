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
    const timestamp = `${new Date().getTime()}.jpg`;
    storage.bucket().file(timestamp).save(req.file.buffer).then(res => { database.ref('uploads').push(timestamp) });
    res.send({ file: timestamp });
})

app.post('/interval', (req, res) => {
    database.ref('interval').set(req.body.interval);
    res.send("Interval set successfully");
})

app.listen(8080, () => console.log("Server listening on port 8080"));