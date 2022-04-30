// const { callbackify } = require("util");

// setTimeout(() => {
//     console.log('Hello');
//     }, 2000);

// const names = ['Andrew', 'Jen', 'Jess'];
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// });

// const geocode = (address, callback) => {
//     const data = {
//         latitude: 0,
//         longitude: 0
//     };

//     setTimeout(() => {
//         data.latitude = 0;
//         data.longitude = 0;

//         callback(data);
//     }, 2000);
// }  

// geocode('Bangalore', (data) => {
//     console.log(data);
// }
// );


const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

const multiply = (x, y, callback) => {
    setTimeout(() => {
        callback(x * y);
    }, 2000);
}

multiply(3, 4, (product) =>{
    console.log(product * 78) // Should print: 12
});