import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req, res) => {
    try {
        if(!req.body) return res.json({message: "No data"});
        const { username } = req.body;
        const { password } = req.body;

        const isExist = await User.findOne({username});
        if( isExist ) return res.status(400).json({message: "Пользователь с таким именем уже существует"});

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await new User({ username, password: hash });
        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );
        await newUser.save();
        return res.json({message: "Регистрация прошла успешно", user: newUser, token})
    } catch (error) {
        res.json({message: "Ошибка в процессе регистрации"})
    }
}

export const login = async(req, res) => {
    try {
        if(!req.body) return res.json({message: "No data"});
        const { username } = req.body;
        const { password } = req.body;

        const user = await User.findOne({username});
        if(!user) return res.json({message: "Такой пользователь не существует"});

        const pwdCorrect = bcrypt.compareSync(password, user.password);
        if(!pwdCorrect) return res.json({message: "Неправильный пароль"});

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return res.json({message: "Вы успешно залогинились", user, token})
    } catch (error) {
        res.json({message: "Error while login"})
    }
}

export const me = async(req, res) => {
    try {
        const user = await User.findById(req.userId);
        const token = req.headers.authorization;
        if(!user) return res.json({message: "Не авторизованы"})
        return res.json({user, token})
    } catch (error) {
        res.json({message: "Error while checking authorization"})
    }
}