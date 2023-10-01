const apiUrl = 'https://pokeapi.co/api/v2/pokemon/1/';


fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud a la API');
    }
    return response.json();
  })
  .then(data => {
    console.log('Nombre del Pokémon:', data.name);

        // Selecciona el párrafo por su ID
      var parrafo = document.getElementById("nombre");
      
      // Modifica el contenido del párrafo
      parrafo.textContent = data.name;
  
  })
