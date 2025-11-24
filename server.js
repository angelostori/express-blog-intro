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


const posts = [
    {
        titolo: "Ciambellone",
        contenuto: "Un dolce soffice e tradizionale, perfetto per la colazione o la merenda.",
        immagine: "/images/ciambellone.jpeg",
        tags: ["dolci", "colazione", "tradizione"]
    },
    {
        titolo: "Cracker alla barbabietola",
        contenuto: "Snack croccante e salutare, dal colore vivace grazie alla barbabietola.",
        immagine: "/images/cracker_barbabietola.jpeg",
        tags: ["snack", "barbabietola", "salutare"]
    },
    {
        titolo: "Pane fritto dolce",
        contenuto: "Ricetta golosa e semplice, pane fritto arricchito con zucchero e cannella.",
        immagine: "/images/pane_fritto_dolce.jpeg",
        tags: ["dolci", "fritto", "tradizione"]
    },
    {
        titolo: "Pasta con la barbabietola",
        contenuto: "Un primo piatto colorato e originale, con crema di barbabietola.",
        immagine: "/images/pasta_barbabietola.jpeg",
        tags: ["pasta", "barbabietola", "primi"]
    },
    {
        titolo: "Torta paesana",
        contenuto: "Dolce rustico della tradizione lombarda, preparato con pane raffermo e cacao.",
        immagine: "/images/torta_paesana.jpeg",
        tags: ["dolci", "tradizione", "pane"]
    }
]

//definire la route della bacheca
app.get('/bacheca', (req, res) => {
    res.json(posts)
})