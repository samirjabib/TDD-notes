import App from "../App";

type dataTest2 = {
  //Interfaz para el segundo ejemplo
  one: number;
  two?: number;
};

type StringArray = Array<string>

//Matchers (Acerciones)

/*
        Jest usa los llamados "Matcher" para permitirnos testear valores diferentes maneras.
*/

describe("Matcher", () => {
  test("toBe", () => {
    expect(true).toBe(true); //Tobe es un metodo que significa equivalencia  es decir en javascript es una igualdad estricta
  });

  test("toBe", () => {
    const data: dataTest2 = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 }); //Toequal nos permite hacer comparaciones entre objetos.
  });

  test("toBe", () => {
    expect(false).not.toBe(true); //not es una matcher que nos señala la operacion intversa
  });

  //Strings
  test("string", () => {
    //Este toMatch nos permite hacer comparaciones entre cadenas, en este caso buscamos la palabra dentro de el matcher
    expect("string").not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });

  //Arrays y iterables
  test("the shopping list has milk on it", () => {
    const shoppingList: StringArray = [
      "diapers",
      "kleenex",
      "trash bags",
      "paper towels",
      "milk",
    ];
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
});
