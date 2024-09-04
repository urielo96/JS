/**
 * Juego de Black Jack
 * 2C = 2 de Clubs (treboles)
 * 2D = 2 de Diamonds (diamantes)
 * 2H = 2 de Hearts (corazones)
 * 2S = 2 de Spades (picas)
 * 
 */


let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
let especiales = ['A', 'J', 'Q', 'K'];
let puntos_jugador = 0;
let puntos_computadora = 0;
const nuevo_juego = document.querySelector('#btnNuevoJuego');
const div_jugador = document.querySelector('#jugador_cartas');
const div_computadora = document.querySelector('#computadora_cartas')
const puntos_HTML = document.querySelectorAll('small');
const boton_pedir_carta= document.querySelector('#btnPedirCarta');
const pun = document.querySelector('#puntos_jugador');
const boton_detener = document.querySelector('#btnDetener');


const crearDeck = () => {
    
    for(let i = 2 ; i <= 10 ; i++)
        {
        for(let tipo of tipos ){
            deck.push( i + tipo);
        }
        }
    
    for (let tipo of tipos)
        {
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
        }
    
    
    
    deck =  _.shuffle(deck);
    
    
    }

crearDeck();

const pedirCarta = () => {
    if (deck.length === 0) {
        return 'No hay cartas en el deck'
    }
    carta_seleccionada = deck.pop()
    return carta_seleccionada
}
        
    

    

function obtener_valor_carta(carta) {
   
    const valores = {
        'A': 11, '2': 2, '3': 3, '4': 4, '5': 5,
        '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 10, 'Q': 10, 'K': 10
    };
    const valor = carta.substring(0, carta.length-1);
    
    return valores[valor];
}


/// La computadora gana cuando logra tener mas puntos que el usario si es que el usuario detiene el juego
// o pierde si es que el usario obtiene 21 


const turno_computadora = (puntos_minimos)  => {
    
    const carta = pedirCarta();
    const valor = obtener_valor_carta(carta);
    
    puntos_computadora = puntos_computadora + valor;
    
    puntos_HTML[1].innerText = puntos_computadora;
    
    const imagen = document.createElement('img');   
    

    imagen.src = `assets/cartas/${carta}.png`;
    imagen.classList.add('carta');
    div_computadora.append(imagen);

    if (puntos_jugador > 21) {
        console.warn('Lo siento has perdio')
        boton_pedir_carta.disabled = true
    } else if ( puntos_jugador === 21){
        console.warn('21 Has ganado ¡¡¡¡¡')
        boton_pedir_carta.disabled = true
    }


}

const turno_computadora = (puntos_minimos) => {

    do {
        const carta = pedirCarta();
        puntos_computadora = puntos_computadora + obtener_valor_carta(carta);
        puntos_HTML[1].innerText = puntos_computadora;
        const imagen = document.createElement('img');   
        imagen.src = `assets/cartas/${carta}.png`;
        imagen.classList.add('carta');
        div_computadora.append(imagen);
        
        if (puntos_minimos > 21)
            break

        }
    while ((puntos_minimos > puntos_computadora) && (puntos_computadora <= 21)) 
        
    }

        
            
    
        



boton_pedir_carta.addEventListener('click', () => {
    
    const carta = pedirCarta();
    const valor = obtener_valor_carta(carta);
    puntos_jugador = puntos_jugador + valor;
    console.log(puntos_jugador); 
    
    puntos_HTML[0].innerText = puntos_jugador;
    const imagen = document.createElement('img');   

    imagen.src = `assets/cartas/${carta}.png`;
    imagen.classList.add('carta');
    div_jugador.append(imagen);

    if (puntos_jugador > 21) {
        console.warn('Lo siento has perdio')
        boton_pedir_carta.disabled = true
        turno_computadora( puntos_jugador)
    }
     else if ( puntos_jugador === 21){
        console.warn('21 Has ganado ¡¡¡¡¡')
        boton_pedir_carta.disabled = true
        turno_computadora( puntos_jugador)
    }

}
);

boton_detener.addEventListener('click', ()=>{

    nuevo_juego.disabled = true
    boton_pedir_carta.disabled = true

    turno_computadora(puntos_jugador)

    if (puntos_jugador < puntos_computadora) {
        alert(' Has perdido ')
    }
    





}
);





    
    





