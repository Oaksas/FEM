import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export const createJWT = (user) => {
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,

        },
        process.env.JWT_STRING
    )
    return token
}

export const protect = (req, res, next) => {

    const bearer = req.headers.authorization

    if (!bearer) {
        res.status(401).json({ message: 'No token' })
        return
    }

    const [, token] = bearer.split(' ')
    if (!token) {
        res.status(401).json({ message: 'No valid token' })
        return
    }

    try {
        const user = jwt.verify(token, process.env.JWT_STRING)
        req.user = user
        next()

    } catch (err) {
        console.log(err)
        res.status(401).json({ message: 'No valid token' })
        return
    }

}