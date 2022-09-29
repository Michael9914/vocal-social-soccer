const admotions =(sequelize, type) =>{
    return sequelize.define('admotions', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        
        player_name: type.STRING,
        player_number: type.INTEGER,
        match_id: type.INTEGER,

        createAdmotions:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateAdmotions:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = admotions