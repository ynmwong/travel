const express = require("express");

class cityAttractionRouter {

    constructor(cityService) {
        this.cityService = cityService;
    }

    router() {
        let router = express.Router();
        router.get("/:id", this.get.bind(this));
        router.post("/", this.post.bind(this));
        return router;
    }

    get(req, res) {
 
        return this.cityService.getAttraction(req.params.id)
            .then(function (result) {
                
                res.json(result);
            })
            .catch((err) => res.status(500).json(err));
    }

    post(req, res) {
        

        return this.cityService.filter(req.body)
            .then((result) => {
                console.log("result", result)
                res.json(result)
            })
            .catch((err) => res.status(500).json(err));
    }


}

module.exports = cityAttractionRouter;