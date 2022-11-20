module.exports = (DataTypes) => {
    const User = {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    };

    return User;
}