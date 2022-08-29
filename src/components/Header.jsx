import React from 'react'

const Header = (Props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <h3 className="navbar-brand text-white">Buscador de Colaboradores</h3>
          
          <form className="d-flex" role="search">
            <input onChange={(e) => {Props.setSearch(e.target.value)}} className="form-control me-2" type="text" placeholder="Buscar colaborador" aria-label="Busca un colaborador" />
          </form>
        </div>
      </nav>
    </>
  )
}

export default Header