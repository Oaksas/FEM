import prisma from "../utils/db";


//Get all products
export const getProducts = async (req, res) => {

    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    }
    )
    res.json({ data: user.products })
}

//Get a single product
export const getProductById = async (req, res) => {

    const product = await prisma.product.findUnique({
        where: {
            id: req.params.id,
            belongsToid: req.user.id
        }
    }
    )
    product ? res.status(204).json({ data: product }) : res.status(200).json({ data: product })

}

//Create a product
export const createProduct = async (req, res) => {

    try {
        const product = await prisma.product.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                belongsToid: req.user.id
            }
        }
        )
        res.status(201).json({ data: product })
    } catch (error) {

        res.status(500).json({ message: error.message })

    }
}

//Update a product
export const updateProduct = async (req, res) => {

    try {

        const updatedProduct = await prisma.product.update({
            where: {
                uniqueProduct: {
                    id: req.params.id,
                    belongsToid: req.user.id
                }
            },
            data: {
                name: req.body.name,
                description: req.body.description,
            }
        }
        )
        res.status(204).json({ data: updatedProduct })
    } catch (error) {

        res.status(404).json({ message: error.message })

    }
}


//Delete a single product
export const deleteProductById = async (req, res) => {

    const deletedProduct = await prisma.product.delete({
        where: {
            uniqueProduct: {
                id: req.params.id,
                belongsToid: req.user.id

            }
        }
    }
    )
    res.status(204).json({ data: deletedProduct })
}