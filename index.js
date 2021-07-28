console.log('Hello');

function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name, email})
    })
    .then(res => res.json())
    .then(obj => document.body.append(obj['id']))
    .catch(err => document.body.append(err))
    
}


console.log(submitData())








// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     }); 