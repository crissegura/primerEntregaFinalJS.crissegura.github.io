let enviar = document.getElementById('enviar')
enviar.addEventListener('click',recogerDatos)

function recogerDatos(){

    let nombreCliente = document.getElementById('nombre');

    let corte = '';

    let corteAdulto=document.getElementById('corteAdulto');
    let corteNino=document.getElementById('corteNiño');
    let pelarCero=document.getElementById('pelarCero');
    let corteYBarba=document.getElementById('corteYBarba');
    let ninguno=document.getElementById('ninguno');
    if(corteAdulto.checked){
        corte = corteAdulto.value
    }else if (corteNino.checked){
        corte = corteNino.value
    }else if (pelarCero.checked){
        corte = pelarCero.value
    }else if (corteYBarba.checked){
        corte = corteYBarba.value
    }else if(ninguno.checked){
        corte = ninguno.value
    }

    let barba = '';

    let completa=document.getElementById('completa');
    let rebajar=document.getElementById('soloRebaje');
    let afeitar=document.getElementById('afeitar');
    let ninguno2=document.getElementById('ninguno2');
    if(completa.checked){
        barba = completa.value
    }else if (rebajar.checked){
        barba = rebajar.value
    }else if (afeitar.checked){
        barba = afeitar.value
    }else if(ninguno2.checked){
        barba = ninguno2.value
    }

    let color = '';

    let tintura=document.getElementById('tintura');
    let reflejos=document.getElementById('reflejos');
    let platinado=document.getElementById('platinado');
    let ninguno3=document.getElementById('ninguno3');
    if(tintura.checked){
        color = tintura.value
    }else if (reflejos.checked){
        color = reflejos.value
    }else if (platinado.checked){
        color = platinado.value
    }else if(ninguno3.checked){
        color = ninguno3.value
    }

    let turno = nombreCliente.value+', seleccionaste los servicios: corte de cabello: '+corte+', barba: '+barba+', tintura '+color+'. Esperamos tu visita!'

    alert(turno)
}















