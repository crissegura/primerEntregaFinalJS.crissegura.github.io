let precios = [
    { trabajo: 'Corte adulto', precio: 800 },
    { trabajo: 'Corte niño', precio: 600 },
    { trabajo: 'Pelar a #0', precio: 400 },
    { trabajo: 'Corte y barba', precio: 1100 },
    { trabajo: 'Completa', precio: 400 },
    { trabajo: 'Solo rebaje', precio: 250 },
    { trabajo: 'Afeitar a #0', precio: 300 },
    { trabajo: 'Tintura', precio: 500 },
    { trabajo: 'Reflejos', precio: 750 },
    { trabajo: 'Platinado/rubio/gris', precio: 900 },
    { trabajo: 'Ninguno', precio: 0 },
]
let cliente = document.getElementById('nombreCliente')
let servicio1 = document.getElementById('input1')
let servicio2 = document.getElementById('input2')
let servicio3 = document.getElementById('input3')
let submit = document.getElementById('button')

let precio1 = 0
let precio2 = 0
let precio3 = 0

submit.onclick = ()=>{
    for (element of precios){
        if(servicio1.value===element.trabajo){
            precio1 =element.precio
        }
    }for (element of precios){
        if(servicio2.value===element.trabajo){
            precio2 =element.precio
        }
    }for (element of precios){
        if(servicio3.value===element.trabajo){
            precio3 =element.precio
        }
    }
    function suma(){
        sumar = precio1+precio2+precio3
        return sumar
    }
    alert(cliente.value+', seleccionaste: '+servicio1.value+' - '+servicio2.value+' - '+servicio3.value+'. Total $'+suma())
}



