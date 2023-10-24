import { createJWT } from '../modules/auth'
import { comparePassword, hashPassword } from '../utils'
import prisma from '../utils/db'

export const createUser = async (req, res) => {

    const hashedPass = await hashPassword(req.body.password)

    try {
        const user = await prisma.user.create(
            {
                data: {
                    username: req.body.username,
                    password: hashedPass
                }
            })

        const token = createJWT(user)
        res.json({ token })
    }
    catch (err) {
        res.json({ "message": err })
    }



}

export const signInUser = async (req, res) => {

    try {

        const user = await prisma.user.findUnique({
            where: {
                username: req.body.username
            }
        })


        const isValid = await comparePassword(req.body.password, user.password)

        if (!isValid) {
            res.status(401).json({ message: 'Invalid Credential' })
            return
        }

        const token = createJWT(user)
        res.json(token)
    } catch (error) {
        res.status(401).json({ message: 'Invalid Credential' })

    }




}