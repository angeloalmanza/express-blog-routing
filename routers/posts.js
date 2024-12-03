const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

// Index
router.get('/', (req, res) => {
    res.json(posts);
})

// Show
router.get('/:id', (req, res) => {
    const postID = parseInt(req.params.id);
    const post = posts.find(p => p.id === postID);
    if(post){
        res.json(post);
    }
    
})

// Create
router.post('/', (req, res) => {
    res.json("Aggiungo un nuovo post ai miei dati");
})

// Update
router.put('/:id', (req, res) => {
    const postID = req.params.id;
    res.json("Aggiorno tutti i dati di un post con id " + postID);
})

// Modify
router.patch('/:id', (req, res) => {
    const postID = req.params.id;
    res.json("Aggiorno solo alcuni elementi di un post con id " + postID);
})

// Destroy
router.delete('/:id', (req, res) => {
    const postID = req.params.id;
    res.json("Elimino il post con id " + postID);
})

module.exports = router;