const { User } = require('../../db');

module.exports = {
    async updateUser(req, res, next) {
        try {
            const { id } = req.params;
            const { name, quittingDay, PacketPrice, cigarettesPerDay } = req.body;
            const user = await User.findByPk(id);
            user.name = name;
            user.quittingDay = quittingDay;
            user.PacketPrice = PacketPrice;
            user.cigarettesPerDay = cigarettesPerDay;
            await user.save();
            const updatedUser = await User.findByPk(id);
            res.status(200).send(updatedUser);
        }
        catch (err) {
            next(err);
        }
    }
}
