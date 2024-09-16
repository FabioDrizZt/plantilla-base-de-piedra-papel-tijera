// Obtén todos los botones de elección
const choiceButtons 

// Función para obtener la elección de la máquina
function getComputerChoice() {
  // Crea un array con las opciones posibles: 'piedra', 'papel', 'tijera'
  // Selecciona una opción al azar del array
  // TODO: Implementa la lógica para seleccionar una opción aleatoria del array
  // Devuelve la opción seleccionada
}

// Función para mostrar la elección
function displayChoice(choice, isPlayer) {
  // Obtén el elemento de imagen correspondiente, dependiendo si es del jugador o de la máquina

  // Define la URL de la imagen basada en la elección
  let imageUrl
  switch (choice) {
    case 'piedra':
      // URL de la imagen para 'piedra'
      imageUrl =
        'https://estudioherrera.mx/wp-content/uploads/2022/01/giphy.gif'
      break
    case 'papel':
      // URL de la imagen para 'papel'
      imageUrl = 'https://cdn.icon-icons.com/icons2/37/PNG/512/paper_3714.png'
      break
    case 'tijera':
      // URL de la imagen para 'tijera'
      imageUrl = 'https://www.gifss.com/hogar/tijeras/images/tijeras-22.gif'
      break
    default:
      // Maneja casos inesperados
      imageUrl = ''
  }

  // Asigna la URL de la imagen al elemento de imagen
}

// Función para determinar el resultado del juego
function determineWinner(playerChoice, computerChoice) {
  // Obtén el elemento del mensaje de resultado

  // Compara las elecciones para determinar el ganador
  // TODO: Implementa la lógica para comparar las elecciones del jugador y de la máquina
}

// Maneja los clics en los botones de elección
choiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Obtén la elección del jugador desde el atributo 'data-choice' del botón

    // Obtén la elección de la máquina llamando a getComputerChoice

    // Muestra las elecciones del jugador y de la máquina

    // Determina el ganador y muestra el resultado
  })
})
