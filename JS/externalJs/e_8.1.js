const promise=new Promise(function (resolve,reject){
    let status=false;
    if(status)
        resolve({productId:101,productName:"Laptop"})
    else
        reject({error:"Too many requests from the same network"})
})

//Promise resolve   then     
//Promise reject    catch
//In every case     finally

promise.then(data=>{
    console.log(data)
}).catch(error=>console.log(error))

