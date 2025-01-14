const db = require('../utils/db')

const getAllArticles = (req, res) => {
    let sql = 'SELECT * FROM article'
    db.query(sql, (error, result) => {
        res.render('index', {
            articles: result
        })
    })
}

const getArticleBySlug = (req, res) => {
    let sql = `select * from article where slug="${req.params.slug}"`
    db.query(sql, (error, result) => {
<<<<<<< HEAD
        const article = result[0]
        const author_id = result[0].author_id
        const sql = `select * from author where id="${author_id}"`
        db.query(sql, (error, result) => {
            const author = result[0]
            article['author_name'] = author.name
            res.render('article', {
                article: article
            })
=======
        res.render('article', {
            article: result
>>>>>>> 3-as-a-user-i-can-see-single-yoga-article
        })
    })
}

module.exports = {
    getAllArticles,
    getArticleBySlug
}