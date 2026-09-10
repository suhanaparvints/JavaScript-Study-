//resolve()
const promise = new Promise((resolve, reject) => {
  resolve("Data received");
});
console.log(promise);
//passing a value
const promise0 = new Promise((resolve, reject) => {
  resolve(100);
});
console.log(promise0);
//passing an object
const promise1 = new Promise((resolve, reject) => {
  resolve({
    name: "Suhana",
    age: 20,
  });
});
console.log(promise1);

//reject()
const promise2 = new Promise((resolve, reject) => {
  reject("something went wrong");
  // reject(new Error("Something went wrong"));
});
promise2.catch((error) => {
  console.log(error);
});

//.then()
const promise3 = new Promise((resolve, reject) => {
  resolve("success");
});
promise3.then((result) => {
  console.log(result);
});
//.catch()
const promise4 = new Promise((resolve, reject) => {
  reject(new Error("failed"));
});
promise4.catch((error) => {
  console.log(error.message);
});
//.finally()
//with resolve
const promise5 = new Promise((resolve, reject) => {
  resolve("win");
});

promise5
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finished");
  });
//with rejection
const promise6 = new Promise((resolve, reject) => {
  reject(new Error("Failed"));
});

promise6
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Finished");
  });
//combined resolve and reject
const promise7 = new Promise((resolve, reject) => {

    const success = true;
    
    if (success) {
        resolve("Data loaded successfully");
    } else {
        reject(new Error("Failed to load data"));
    }

});
promise7
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("Operation finished");
    });

    //promise executor run immeadiately
    console.log("A");
const promise8 = new Promise((resolve) => {
    console.log("B");
    resolve("C");
});

promise8.then((value) => {
    console.log(value);
});
console.log("D");

//A
//B
//D
//C

// Complete Promise Chain
const promise9=new Promise((resolve,reject)=>{

Promise9.resolve(10)
})
    .then((value) => {
        console.log("First:", value);
        return value * 2;
    })

    .then((value) => {
        console.log("Second:", value);
        return Promise9.resolve(value + 10);
    })

    .then((value) => {
        console.log("Third:", value);

        if (value > 25) {
            throw new Error("Value is too large");
        }
        return value;
    })
    .catch((error) => {
        console.log("Error:", error.message);
        return 0;
    })
    .finally(() => {
        console.log("Finished");
    });


  