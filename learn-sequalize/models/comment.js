module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        commenter:{
            
        },
        comment: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        },
    },{
            timestamps: false,
            underscored: true
    });
};