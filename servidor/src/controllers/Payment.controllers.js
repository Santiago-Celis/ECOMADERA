import mercadopago, { MercadoPagoConfig, Preference } from 'mercadopago'

export const createOrder = async (req,res) => {
    try {

        const client = new MercadoPagoConfig({
            access_token:
            "TEST-3216132055254219-031621-17a3ceab979aabfafa4665f941df50b2-1729083873",
        })

        const preference = new Preference(client)

        const result = await preference.create({
            body: {
                items: [{
                    title: "Mesa",
                    unit_price: 5000,
                    currency_id: 'COL',
                    quantity: 1,
                }],
            }
        })

        console.log(result);
        res.send("creando orden")

        /* const body = {
            items: [{
                title: "Mesa",
                unit_price: 5000,
                currency_id: 'COL',
                quantity: 1,
            }],
            back_urls: {
                success: "https://github.com/Santiago-Celis/Ecomadera",
                failure: "https://github.com/Santiago-Celis/Ecomadera",
                pending: "https://github.com/Santiago-Celis/Ecomadera",
            },

            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({body});
        res.json({ 
            id: result.id
         }) */
        
    } catch (error) {
        console.error("Error al crear el pago:", error);
        return res.status(500).send({ error: "Ocurrió un error inesperado" })
    }
}