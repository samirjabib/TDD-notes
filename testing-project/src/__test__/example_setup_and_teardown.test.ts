import App from "../App"

/*
    van a a ver ocaciones en la que estemos testeandoq ue vamos necesitar de hacer un setup inicial para decirle
    a jest que tiene que realizar algun tipo de trabajo antes que se inicien las preubas o despues de que se inciien las pruebas,
    ya este nos provee con unas funciones que nos ayudan a la tardea

*/

describe('setup and teardown examples', () => {

    beforeAll( () => { //Antes del test
        console.log('beforeall')
    })

    beforeEach(()=> {//ejecturar algo antes de cada test
        console.log('beforeeach')
    })

    afterAll(() => { //Este se ejecutra al final de cada tes
        console.log('beforeall')
    })

    afterEach( () => {//Antes de cada test
        console.log('before each')
    })

    test('example 1', () => {
        expect(true).toBe(true)
    })
})