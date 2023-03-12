import App from "../App";

/*Test es una palabra reservada en Jest que nos permite hacer un test como su nombre lo indica 
    Recibe un primer parametro que es una descripcion del text, y un segundo parametro que es el 
    callback de la funcion. 

*/

test("test one", () => {
  expect(true).toBe(true);
});

test("test two", () => {
  expect(true).toBe(true);
});

test("test three", () => {
  expect(true).toBe(true);
});

it("test three", () => {//Palabra alternativa a test
    expect(true).toBe(true);
  });
  


/*La palabra reservada describe nos permite agrupar multipliques casos de test como primer parametro recibe una descripcion
De este mismo y como segundo el callback con todos los test con que cuenta la funcion. 

*/

describe("test describe", () => {
  test("test one", () => {
    expect(true).toBe(true);
  });

  test("test two", () => {
    expect(true).toBe(true);
  });

  test("test three", () => {
    expect(true).toBe(true);
  });
});


