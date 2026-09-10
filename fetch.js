//fetch

//using .then()
// const response1=await fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response1)=>{
//     console.log(response1);
// })
//using async/ await
const getUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();

  console.log(data);
};
getUser();

//GET request - retrieve data
const getUser2 = async () => {
  const response2 = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      method: "GET",
    },
  );
  const data2 = await response2.json();
  console.log(data2);
};
getUser2();

// POST request - create a new resourse
const getUser3 = async () => {
  const response3 = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "suhana",
      age: 20,
    }),
  });
  const data3 = await response3.json();
  console.log(data3);
};
getUser3();

//PUT request - replace/update on existing
const getUser4 = async () => {
  const response4 = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        title: "Updated Post",
        body: "This is the updated post",
        userId: 1,
      }),
    },
  );
  const data4 = await response4.json();
  console.log(data4);
};
getUser4();

//PATCH request - partial update
const getUser5 = async () => {
  const response5 = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Updated Post in patch request",
      }),
    },
  );
  const data5 = await response5.json();
  console.log(data5);
};
getUser5();

//DELETE request- delete resource
// DELETE request - delete the resource

const getUser6 = async () => {
  const response6 = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      method: "DELETE",
    },
  );
  if (!response6.ok) {
    throw new Error("DELETE request failed");
  }

  console.log("Post deleted successfully");
};
getUser6();

//JSON.stringify() - convert js data to js string
const user = {
    name: "Suhana",
    age: 20
};
const jsonString = JSON.stringify(user);
console.log(jsonString);
//JSON.parse()- convert JSON.Stringify to json object
const jsonData = '{"name":"Suhana","age":20}';
const data = JSON.parse(jsonData);
console.log(data); //{ name: 'Suhana', age: 20 }
console.log(data.name); // Suhana
console.log(data.age); // 20

//handling api errors using try catch with response.ok
const getPerson = async () => {
  try {
    const respond = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // "https://jsonplaceholder.typicode.com/posts/999999" //false
    if(!respond.ok){
        throw new Error("API request failed");
    }
  console.log("Respond Successful");
const datas=await respond.json();
console.log(datas);
}catch(error){
    console.log("ERROR:", error.message);
  }
  };
  getPerson();
  