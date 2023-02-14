const User = require("../models/User");

const editUser = async (req, res) => {
    const { firstName, lastName, email, number, message } = req.body;
    
    User.findOne({
        where: {
            userId: req.params.userId,
        }
    }).then((user) => {
        user.update({ firstName, lastName, email, number, message });
        return res.redirect("/");
    }).catch(() => {
        return res.redirect("/?error=invalidUUID");
    });
}

module.exports = {
    editUser
};
