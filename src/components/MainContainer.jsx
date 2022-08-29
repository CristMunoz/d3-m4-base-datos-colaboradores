import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { BaseColaboradores } from '../baseColaboradores';

const MainContainer = (Props) => {
    const [nameColab, setNameColab] = useState("");
    const [emailColab, setEmailColab] = useState("");
    const [colabs, setColabs] = useState(BaseColaboradores);

    const addColab = (e) => {
        e.preventDefault();
        if (!nameColab.trim() || !emailColab.trim()) {
          alert("Debes ingresar los datos requeridos");
        } else {
          setColabs([
            ...colabs,
            {id: nanoid(), nombre: nameColab, correo: emailColab }
          ]);
        }
      };

  return (
    <>
        <form onSubmit={addColab}>
        <div className='container px-5 py-4'>
            <div className="my-2 px-5">
                <label for="exampleFormControlInput1" className="form-label">Nombre del colaborador</label>
                <input onChange={(e) => setNameColab(e.target.value)} className="form-control" type="text" placeholder="Ingresa el nombre del colaborador" aria-label="default input example" value={nameColab} />
            </div>
            <div className="my-2 px-5">
                <label for="exampleFormControlInput2" className="form-label">Correo del colaborador</label>
                <input onChange={(e) => setEmailColab(e.target.value)} type="email" className="form-control" id="exampleFormControlInput2" placeholder="Ingresa correo del colaborador" value={emailColab} />
            </div>
            <input className="btn btn-primary" type="submit" value="Agregar colaborador" />
        </div> 
        </form>

        <div>
            <h1>Listado de colaboradores</h1>
            {colabs.filter((ele) => {
                if (Props.search === "") {
                    return ele;
                } else if (
                ele.nombre
                .toLocaleLowerCase()
                .includes(Props.search.toLocaleLowerCase())
                ) {
                    return ele;
                }
            }).map((ele) => (
                <div className='container mx-auto' key={ele.id}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>{ele.nombre}</td>
                                <td>{ele.correo}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    </>
  )
}

export default MainContainer