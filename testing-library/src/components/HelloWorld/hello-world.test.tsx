import { render, screen } from "@testing-library/react";
import { HelloWorld } from "./hello-world";

test("<HelloWorld/>", () => {
  render(<HelloWorld name="samir" />);
  screen.debug();                       /*
                                        Screen nos permite acceder a metodos querys  de interacion con el DOM. 
                                        */
    const title = screen.getByText(/hello world/i) //Usamos expreciones regulares al ser mas precisas con las querys. 

    screen.debug(title)//Hacemos la busqueda de query

});
