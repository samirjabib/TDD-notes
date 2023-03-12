import App from "../App";

/*Las funciones props nos permiten testear probar el funcionamiento entre el codigo borrando la implementacion real de la funcion
    y los parametros pasados en estas llamadas, capturando las instancias echas con el constructor new y permitendo el la configuracion
    de prueba de los valores de retorno

*/

test('fist example', () => {
    const myMock = jest.fn()
                        .mockReturnValueOnce(true)
                        .mockReturnValueOnce('samir')
                        .mockReturnValueOnce(4)
    //Esto nos retorna un mock
    
    const result1 = myMock()
    const result2 = myMock()
    const result3 = myMock()

    expect(myMock).toHaveBeenCalledTimes(3) //Esto es un matcher del mock

    expect(result1).toBe(true)
    expect(result2).toBe('samir')
    expect(result3).toBe(5)
});