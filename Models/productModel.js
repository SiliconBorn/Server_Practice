let products = require("../data/products.json")
const {v4:uuid} = require("uuid");
const {writeDataToFile} = require("../utils");


const findAll =()=>{

    return new Promise((res,rej)=>{
        res(products);
    })
};

const findById=(id)=>{
    return new Promise((res,rej)=>{
       const product = products.find((product)=>product.id==id)
        res(product)
    })
}
const create =(product)=>{
    return new Promise((res,rej)=>{
      const newProduct={
        ...product,
        id:uuid()
      }
      products.push(newProduct);
      writeDataToFile('./data/products.json',products);

      res(newProduct);

    })
}

const update =(id,product)=>{
    return new Promise((res,rej)=>{
        const i = products.findIndex(p=>p.id==id);
        products[i]={
            ...product,
            id
        };
        writeDataToFile('./data/products.json',products)
        res(products[i])
    })

}

const remove = (id)=>{
    return new Promise((res,rej)=>{
        products = products.filter((p)=>p.id!=id);
        writeDataToFile('./data/products.json',products);
        res()
    })
}
module.exports={
    findAll,
    findById,
    create,
    update,
    remove
}