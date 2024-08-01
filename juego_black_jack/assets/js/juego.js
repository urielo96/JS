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

const puntos_HTML = document.querySelectorAll('small');

puntos_HTML.forEach(punto => {
    console.log(punto);
});

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

const pedirCarta = () => {
    if (deck.length === 0) {
        return 'No hay cartas en el deck'
    }
    carta_seleccionada = deck.pop()
    
    return carta_seleccionada

}
    

function obtener_valor_carta(carta) {
    console.log('Este es el valor de la ' ,carta);
    const valores = {
        'A': 11, '2': 2, '3': 3, '4': 4, '5': 5,
        '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 10, 'Q': 10, 'K': 10
    };
    const valor = carta.substring(0, carta.length-1);
    console.log("Estes es el" , valor);
    return valores[valor];
}

const nuevo_juego = document.querySelector('#btnNuevoJuego');


nuevo_juego.addEventListener('click', () => {
    crearDeck();
    console.log(deck);
})
const boton_pedir_carta= document.querySelector('#btnPedirCarta');
const pun = document.querySelector('#puntos_jugador');

boton_pedir_carta.addEventListener('click', () => {
    const carta = pedirCarta();
    const valor = obtener_valor_carta(carta);
    puntos_jugador = puntos_jugador + valor;
    console.log(puntos_jugador); 
    
    puntos_HTML[0].innerText = puntos_jugador;
    const imagen = document.createElement('img');   

    imagen.src = `assets/cartas/${carta}.png`;

    jugador-carta.appendChild(imagen);

}
);








    
    





