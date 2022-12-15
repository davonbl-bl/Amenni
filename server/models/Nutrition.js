module.exports = (sequelize, DataTypes) => {

    const Nutrition = sequelize.define("Nutrition", {
        nutritionSection: {
            type:DataTypes.STRING,
            allowNull:false,
        },
    })
    return Nutrition
}
