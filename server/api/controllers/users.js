const { User } = require('../db');

module.exports = {
    async updateUser(req, res, next) {
        try {
            const { username, password, name, quittingDay, cigarettesPerDay, PacketPrice } = req.body;
            const user = await User.update({
                username,
                password,
                name,
                quittingDay,
                cigarettesPerDay,
                PacketPrice
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.send(user);
        }
        catch (err) {
            next(err);
        }
    }
}
