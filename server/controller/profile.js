const db = require("../models/profile");

module.exports = {

    
    updateProfile: async (req, res) => {
        try {
          const profile = await profile.update(req.body, {
            where: { id: req.params.id },
          });
    
          res.status(201).send(profile);
        } catch (error) {
          throw error;
        }
      },










}
