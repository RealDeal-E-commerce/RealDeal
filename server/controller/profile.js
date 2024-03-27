const db = require("../models/profile");

module.exports = {

    
    updateProfile: async (req, res) => {
        try {
          const profile = await profile.update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            picturePath: req.body.picturePath,
            date: req.body.date
          }, {
            where: { id: req.params.id },
          });
    
          res.status(201).send(profile);
        } catch (error) {
          throw error;
        }
      },
}
