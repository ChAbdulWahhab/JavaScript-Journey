let myPromise = new Promise((resolve, reject) => {

    ok = true;

    if(ok) {
        resolve("Order Delivered ✅");
    } else {
        reject("Order Cancelled ❌");
    }

});

myPromise.then(
    function(value) {
        console.log(value);
    }
).catch(
    function(error) {
        console.log(error);
    }
).finally(
    function(){
        console.log("=== Nagori Milk Shop 🐮 ===");
    }
);