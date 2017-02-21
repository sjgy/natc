import {stringify} from 'qs';

export default {
    'POST /api/users/create' : (req, res) => {
        console.log(stringify(req.body));
        res.json({"status": "success"});
    }
};
