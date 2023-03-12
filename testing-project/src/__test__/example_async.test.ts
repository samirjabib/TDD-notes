import App from "../App"

//Callbacks


const asyncCallback = (cb : any) =>  {
    setTimeout( () => {
        cb(true)
    }, 1000)
}


//Promesas



const asyncPromise = () =>  new Promise((resolve) => resolve(true)) //Fetch dummie

describe('async code', () => {
    test('example of async with callbacks', ( done:any) => {
        asyncCallback((result: boolean) => {
            expect(result).toBe(true)
            done()
        })
    })

    test('example of async with promises', () => { //podemos hacer uso del metodo then para indicarle a jest que debemos esperar una promesa. 
        return asyncPromise().then( (result) => expect(result).toBe(true))
    })


    //Otra manera de resolver las promesas async/await
    test('example of async with async await', async() => {
        const result = await asyncPromise();

        expect(result).toBe(true)

    })

})