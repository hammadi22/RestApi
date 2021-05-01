const router = require("express").Router();
const userModel = require("./models/User");

//Add new user to th data base
router.post("/addUser", async (req,res) => {
    const { name, age, email } = req.body;

    try {
        const newUser = new userModel({ name, age, email });
        await newUser.save();
        console.log(newuser);
        res.status(200).json({msg: `User is added`, newUser});
    } catch (error) {
        console.log(error);
    }
});

//Get all users
router.get("/seeusers", async(req,res) =>{
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
});

//Edit a user by id
router.put("/:Id", async (req,res) =>{
    try {
        const { Id } = req.parpams;
        const userFound = await userModel.findOneAndupdate(
            { _id: ID },
            {$set: {...req.body}}
        );
        res.status(200).send({msg: "user is found", userFound});
    } catch (error) {
        res.status(500).send("cant found user");
    }
})
//Remove a user by id 
router.delete("/:Id", async (req,res) => {
    try {
        const { Id } = req.params;
        const userToDelete = await userModel.findByIdAndDelete(Id);
        res.status(200).send({ msg:"user deleted", userToDelete });
    } catch (error) {
        res.status(500).senjd("impossible to delete user");
    }
});

module.exports = router;