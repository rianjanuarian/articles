const { user } = require("../models");
const bcrypt = require("bcrypt")
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await user.findOne({
      where: { email },
    });

    if(!result){
        return res.json({message:"username atau kata sandi salah"})
    }

    const isPasswordValid = await bcrypt.compare(password,result.password)

    if(!isPasswordValid){
        return res.json({message:"username atau kata sandi salah"})
    }
    req.result = result
    next()
  } catch (error) {
    console.log(error);
  }
};
module.exports = {login}