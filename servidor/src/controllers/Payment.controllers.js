import { MercadoPagoConfig, Preference } from "mercadopago"

const client = new MercadoPagoConfig({
    accessToken:
    "TEST-3216132055254219-031621-17a3ceab979aabfafa4665f941df50b2-1729083873"
})




export const createOrder = async (req,res) => {
    try {
        const {cart} = localStorage.getItem("cart")


        if (!cart.product.name || !cart.product.quantity ) {
            return res
            .status(400)
            .send({ error: "Faltan campos obligatorios: monto o titulo" })
        }

        const productos = cart.map((product) => {
            return {
                title: cart.product.name,
                unit_price: Number(cart.product.price),
                currency_id: "COL",
                quantity: Number(cart.product.quantity)
            };
        });

        const body = {
            items: productos,
            back_urls: {
                success: "http://localhost:3001/success",
                failure: "http://localhost:3001/failure",
                pending: "http://localhost:3001/pending",
            },
        };

        const preference = new Preference(client);
        const result =await preference.create({ body });
        res.status(200).json({ id: result.id, init_point: result.init_point });
    } catch (error) {
        console.error("Error al crear el pago:", error);
        return res.status(500).send({ error: "Ocurrió un error inesperado" })
    }
}