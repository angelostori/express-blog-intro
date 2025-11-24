/*
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, 
contenuto, immagine e tags (tags è un array di stringhe)

Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.

Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare 
le immagini associate ad ogni post.

Testare su postman
*/

const express = require('express')

const app = express()

const PORT = 3000

//settare la cartella come asset statico
app.use(express.static('public'));

//mettere il server in ascolto
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

//definire la route della home
//npm run dev => testare su postman
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})
