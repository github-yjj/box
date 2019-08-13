require.config({
    baseUrl:"module",
    paths:{
        m:"move.js",
        jq:"jquery.1.12.4.js",
        a:"ajax.js",
        c:"cookie.js",
        i:"index.js"
    }
})

require(["m","jq","a","c","i"],function(a,b,c,d,e){
   
})


// require.config({
   
//     baseUrl:"module",
   
//     paths:{
//         m:"move.js",
//         jq:"jquery.1.12.4",
//         a:"ajax.js",
//         c:"cookie.js",
//         i:"index.js"

//     }
// })

// require(["m","jq","a","c","i"],function(a,_,b,c,d,e){
//     console.log(a)
//     console.log(b)
//     console.log($)
    
// })
