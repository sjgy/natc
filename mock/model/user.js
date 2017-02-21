module.exports = {

    'GET /v1/api/user' (req, res) {
        res.json("jdjdj");
    },

    'POST /v1/api/user' (req, res) {
        const userItem = req.body;
        res.json({"sdff":userItem});
    }

}
