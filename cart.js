const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

    module.exports = class Cart {
        static addProdect(Id,productprice){
           //Fetch the previous cart
           fs.readFile(p,(err,fileContent)=>{
            let cart={products: [],totalPrice:0};
            if(!err){
                cart=JSON.parse(fileContent);
            }
                //Analyze the cart => Find existing product
                const existingProductIndex = cart.products.find(prod => prod.Id===id);
                const existingProduct = cart.products[existingProductIndex];
                let updatedProduct;
                //Add new product/increase quantity
                if(existingProduct){
                    updatedProduct = {...existingProduct};
                    updatedProduct.qty = updatedProduct.qty+1;
                    cart.products=[...cart.products];
                    cart.products[existingProductIndex]=updatedProduct;
                }
                else{
                    updatedProduct = {id:id,qty:1};
                    cart.products = [...cart.products,updatedProduct];
                }
                cart.totalPrice = cart.totalprice + productprice;
                fs.writeFile(p,JSON.stringify(cart),err=>{
                    console.log(err);
                })

           })
       
          
        }
    }
