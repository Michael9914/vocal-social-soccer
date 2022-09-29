const cards =(sequelize, type) =>{
    return sequelize.define('cards', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        playerposition: type.STRING, 
        playername: type.STRING,
        surnameplayer: type.STRING,
        playerheight: type.STRING,
        playerage: type.STRING,

        createCards:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateCards:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = cards