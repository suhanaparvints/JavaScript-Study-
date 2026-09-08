// try{
//     let result=10/2;
//     console.log(result);
// }
try {
  console.log(x);
} catch (error) {
  console.log("An error occured");
  // console.log(error); // x not defined with long error message
  //console.log(error.name);// ReferenceError //type of error returns
  console.log(error.message); // x is not defined
}

//finally
try {
  console.log("Try");
} catch (error) {
  console.log("Catch");
} finally {
  console.log("Finally");
}
//if there is an error:
try {
  console.log(x);
} catch (error) {
  console.log("Catch");
} finally {
  console.log("Finally");
}
//throw
// throw new Error("Something went wrong");
try {
  let age = 15;
  if (age < 18) {
    throw new Error("You are not eligible");
  }
} catch (error) {
  console.log(error.message);
}

//combinig all four
try {
  let age = 15;
  if (age < 18) {
    throw new Error("Age must be 18 or above");
  }
  console.log("You can continue");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Process completed");
}

//real world example
function login(username, password){
    try{
        if(!username || !password){
            throw new Error("username and password are required")
        }
        console.log("Login Successfully");
    }
    catch(error){
        console.log(error.message);
    }
    finally{
        console.log("Login process finished");
    }
}
// login(); //error
login("suhana","12345")