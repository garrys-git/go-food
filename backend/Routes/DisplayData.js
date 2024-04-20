const express = require("express");
const router = express.Router();

router.post('/foodData',async (req, res) => {
    try {
        //console.log(global.food_items);
        //console.log(global.foodCategory);
        res.send([global.food_items,global.foodCategory]);
    }  
    catch (error) {
         console.error(error.message);
         res.send("Server Error",global.food_items);
    }
});
 
module.exports = router;