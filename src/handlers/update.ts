import prisma from "../utils/db";


//Get all updates
export const getUpdates = async (req, res) => {

    const products = await prisma.product.findMany({
        where: {
            belongsToid: req.user.id
        },
        include: {
            updates: true
        }

    }
    )
    const updates = products.map((product) => product.updates)
    res.json({ data: updates })
}

//Get a single update
export const getUpdateById = async (req, res) => {

    const update = await prisma.update.findUnique({
        where: {
            id: req.params.id,
        }
    }
    )
    res.status(200).json({ data: update })

}

//Create a Update
export const createUpdate = async (req, res) => {

    try {
        const product = await prisma.product.findUnique({
            where: {
                id: req.body.productId
            }
        })

        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        const update = await prisma.update.create({
            data: req.body
        }
        )
        res.status(201).json({ data: update })
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

//Update an Update
export const updateUpdate = async (req, res) => {

    try {

        const products = await prisma.product.findMany({
            where: {
                belongsToid: req.user.id
            },
            include: {
                updates: true
            }
        })

        const updates = products.reduce((allUpdates, product) => { return [...allUpdates, ...product.updates] }, [])
        const machingUpdates = updates.filter((update) => update.id === req.params.id)

        if (!machingUpdates) {
            return res.status(404).json({ message: "Update not found" })
        }

        const updatedUpdate = await prisma.update.update({
            where: {
                id: req.params.id
            },
            data: req.body
        }
        )


        res.status(204).json({ data: updatedUpdate })

    }
    catch (error) {
        res.status(500).json({ message: error.message })

    }
}


//Delete a single Update
export const deleteUpdateById = async (req, res) => {

    try {

        const products = await prisma.product.findMany({
            where: {
                belongsToid: req.user.id
            },
            include: {
                updates: true
            }
        })

        const updates = products.reduce((allUpdates, product) => { return [...allUpdates, ...product.updates] }, [])
        const machingUpdates = updates.filter((update) => update.id === req.params.id)

        if (!machingUpdates) {
            return res.status(404).json({ message: "Update not found" })
        }

        const deletedUpdate = await prisma.update.delete({
            where: {
                id: req.params.id
            },
        }
        )


        res.status(200).json({ data: deletedUpdate })

    }
    catch (error) {
        res.status(500).json({ message: error.message })

    }
}