module.exports = {
    getAllHouses: async (req, res) => {
        const db = req.app.get('db')
        const allHouses = await db.get_all_houses()
        res.status(200).send(allHouses)
    },

    addHouse: (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zip} = req.body
        db.add_house([name, address, city, state, zip]).then(house => {
            res.status(200).send(house)
        })
        .catch(err => {
            console.log(err)
        })
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_house([id]).then(house => {
            res.status(200).send(house)
        })
        .catch(err => console.log(err))
    }
}