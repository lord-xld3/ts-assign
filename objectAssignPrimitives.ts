const obj1 = {a: "a"}
const obj2 = {b: "b"}
const obj3 = {c: "c"}

const funcA = (x: string)=>{}
const funcB = (y: number)=>{}
const funcC = (z: object)=>{}
const funcD = Object.assign(funcA, obj1)

{/* Assigning enumerable values to an object */ 
    const A = Object.assign({}, obj1)
    const B = Object.assign(obj1, {})
    const C = Object.assign(obj1, obj2)
    const D = Object.assign(obj1, obj2, obj3)
    
    // Expect error without a 'catch-all' overload
    const E = Object.assign({})

    const F = Object.assign({}, funcA)
    F("s") // Expect 'not callable'

    // Assigning enumerable values of a function to an object
    const G = Object.assign({}, funcD)
    G("s") // Expect 'not callable'
    G.a // 'a'

    const H = Object.assign(obj1, [1, 2, 3])
    H[0] // '1'
}

{/* Assigning enumerable values to a function */
    const A = Object.assign(funcA, obj1)
    const B = Object.assign(A, obj2)
    const C = Object.assign(()=>{}, B)
    const D = Object.assign(funcA, A, B)
    const E = Object.assign(funcA, [1, 2, 3])
    E[0] // '1'

    const F = Object.assign(obj1, ()=>{}) // no props to copy
}

{/* Assigning enumerable values to a primitive */
    const A = Object.assign(true, obj1)
    const B = Object.assign(3.14, obj1)
    const C = Object.assign("s", obj1)

    /* Assigning "PrimObjects" to an object */
    const D = Object.assign(obj1, A)
    const E = Object.assign(obj1, B)
    const F = Object.assign(obj1, C)
    
    /* Assigning a "PrimObject" to a function */
    const G = Object.assign(funcA, A)
}

{/* Assigning primitives to an object */
    const A = Object.assign(obj1, true)
    const B = Object.assign(obj1, 3.14)
    const C = Object.assign(obj1, "s")
}

{/* Assigning primitives to a function */
    const A = Object.assign(funcA, true)
    const B = Object.assign(funcA, 3.14)
    const C = Object.assign(funcA, "s")
}

{/* Assigning mixed functions and objects */
    const A = Object.assign(obj1, obj2, funcA)
    const B = Object.assign(funcA, obj1, obj2, obj3)
    const C = Object.assign(funcB, funcA, obj1)
    const D = Object.assign(funcA, obj1, funcB)
}