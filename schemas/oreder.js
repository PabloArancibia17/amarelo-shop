export const order = {
    _id: !String,
    buyer: {
        name: !String,
        email: !String,
        phone: !String,
        address: !String,
        city: !String,
        province: !String,
    },
    items:{
        id: !String,
        name: !String,
        price: !Number,        
    },
    total: !Number
};