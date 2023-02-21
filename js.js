const btnAdd = document.querySelectorAll('.btn-primary')
const carrito = document.getElementById("carrito")
let chango = []
const footer = document.getElementById("footer" )
let templateFooter = document.getElementById("templateFooter")


document.addEventListener(`click`, function(e){

    if(e.target.matches('.btn-primary')){
        agregar(e)
        renderCarrito()
        }

    if(e.target.matches('.list-group-item .btn-success')){

        btnAumentar(e)
    }

    if(e.target.matches('.btn-danger')){

       btnDisminuir(e)
    }
       
})


// FUNCTION AGREGAR

function agregar(e){

    const producto = {
        name: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio) 
        
       }
       const index = chango.findIndex((item)=>item.id ===  e.target.dataset.fruta)

       if(index === -1){
        chango.push(producto)
       }else{
        chango[index].cantidad++;
       }

}

// RENDER CARRITO

function renderCarrito(){

    let template = ''

     chango.map((item)=>{
            template +=`<li class="list-group-item text-uppercase bg-secondary text-white">
                <span class="badge bg-primary rounded-pill align-middle">${item.cantidad}</span>
                <span class="lead align-middle">${item.id}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                <p class="lead mb-0">Total: $<span>${item.cantidad * item.precio}</span></p>
                </div>
                <div>
                <button class="btn btn-sm btn-success" data-id="${item.id}" >Agregar</button>
                <button class="btn btn-sm btn-danger" data-id="${item.id}" >Quitar</button>
                </div>
                </li>`

                return carrito.innerHTML = template
})

renderFooter()
} 

// BTN AUMENTAR

const btnAumentar = (e) =>{
    
    
    chango = chango.map (item =>{
        if(item.id === e.target.dataset.id){
            item.cantidad++
        }return item
    })


    renderCarrito()
}



// BTN DISMINUIR


const btnDisminuir = (e) =>{

    chango = chango.filter((item)=>{

        if(item.id === e.target.dataset.id){
            if(item.cantidad > 0){
                item.cantidad--
                if(item.id === 0){
                    return item
                }return item
            } return item
        
            
        }
   })
   
   renderCarrito()
}

// RENDER FOOTER 

function renderFooter(){
    let templateFooter = ''

    const total = chango.reduce(
        (acc,current)=> acc + current.precio * current.cantidad, 0
        )


    console.log(total)
    chango.map((item)=>{
     return   templateFooter =`<div class="card">
                 <div class="card-body d-flex justify-content-between align-items-center">
                <p class="lead mb-0">TOTAL: $<span>${total}</span></p>
                <button class="btn btn-outline-primary">Finalizar Compra</button>
                </div>
                </div>`
    })
    footer.innerHTML = templateFooter
}



