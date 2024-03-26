const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../database/index');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secretfdfdsqf785897TIHFHKLVMHIFY-key';



const register = async (req, res) => {
    try {
        const {
            name,
            password,
            email,
            role,
            image
        } = req.body;

        const Rounds = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, Rounds);
        const newUser = await User.create({
            name,
            password: passwordHash,
            email,
            role,
            image
        });
        const savedUser = newUser.toJSON();
        res.status(201).json(savedUser);
    } catch (error) {
        throw error;
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ msg: 'User does not exist.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'password invalid' });
        }
        const token = jwt.sign({ id: user.id }, '8X7EnmJieifHY1gXEG9r3DarKb1wTO.LPynOKPsy');
        const userData = user.toJSON();
        delete userData.password;
        res.status(200).json({ token, user: userData });
    } catch (error) {
        throw error;
    }
};

module.exports = { register, login };
 

