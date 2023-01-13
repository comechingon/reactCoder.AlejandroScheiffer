const products = [
{
    id: "1",
    name: "Piscina Solarium",
    price: 200000,
    category: "piscinas",
    img: "https://cdn.igui.com/assets/piscina/playa-del-carmen/foto/playa-del-carmen-desktop.webp",
    stock: 10,
    description: "Detalles Solarium"


},

{
    id: "1",
    name: "Piscina Romana",
    price: 200000,
    category: "piscinas", 
    img: "https://http2.mlstatic.com/D_NQ_NP_876045-MLA51201416901_082022-O.webp",
    stock: 10,
    description: "Detalles Romana"


},

{
    id: "1",
    name: "Piscina Clasica",
    price: 200000,
    category: "piscinas",
    img: "https://cdn.igui.com/assets/piscina/cocoa/foto/cocoa-01-dektop.webp",   
    stock: 10,
    description: "Detalles Clasica"


}

]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)


        
    })
 }
