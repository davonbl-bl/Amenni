module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type:DataTypes.STRING,
            // this property doesn't allow post to be posted
            //without a title
            allowNull:false,
        },
        //this is the post descrtiption/the info
        postText: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull:false,
        }

 
    })

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade",
        })
    }
    return Posts
}
