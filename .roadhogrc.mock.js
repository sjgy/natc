export default {
    'POST /api/users/create' : (req, res) => {
      console.log(req.body);
      res.json({"status":"success"});
    }
};
