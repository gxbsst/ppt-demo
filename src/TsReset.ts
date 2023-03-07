  import "@total-typescript/ts-reset"

const result = JSON.parse("{}") // ?

 const result1 = [1, 2, 'a',  undefined].filter(Boolean)

 fetch('/')
   .then((resp)  => resp.json())
    .then(json => {
     console.log(json)
   })
