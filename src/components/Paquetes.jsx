import React from "react"

const Paquetes = ({ data }) => {
   console.log(data)
   return (
      <div>
         {data.map((p,i)=>{
         return <div key={i.toString()} className="card" style={{width: "18rem"}}>
            <img src={p.src} className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">{p.nombre}</h5>
                  <p className="card-text">{p.estadia}</p>
                  <p>Desde: {p.ingreso} Hasta: {p.egreso}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
         </div>
         })
         }
      </div>
   )
}
export default Paquetes