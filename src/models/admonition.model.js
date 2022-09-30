const admonitions =(sequelize, type) =>{
    return sequelize.define('admonitions', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        
        player_name: type.STRING,
        player_number: type.INTEGER,
        

        createAdmonitions:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateAdmonitions:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = admonitions