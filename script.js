function displayPokemonCard(pokemon) {
    const cardContainer = document.getElementById('pokemon-card');
    
    // Contenu HTML avec classes Tailwind
    cardContainer.innerHTML = `
      <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div class="bg-red-500 px-4 py-2 text-white flex justify-between items-center">
          <h2 class="text-xl font-bold capitalize">${pokemon.name}</h2>
          <span class="rounded-full bg-white text-red-500 px-2 py-1 text-xs font-bold">
            #${pokemon.id}
          </span>
        </div>
        
        <div class="flex p-4">
          <div class="w-1/2 flex justify-center items-center">
            <img 
              src="${pokemon.sprites.other['official-artwork'].front_default}" 
              alt="${pokemon.name}"
              class="w-32 h-32 object-contain"
            />
          </div>
          
          <div class="w-1/2 flex flex-col">
            <div class="mb-2">
              <span class="text-gray-500 text-sm">Type</span>
              <div class="flex flex-wrap gap-1">
                ${pokemon.types.map(t => 
                  `<span class="text-xs px-2 py-1 rounded-full bg-gray-200">
                    ${t.type.name}
                  </span>`
                ).join('')}
              </div>
            </div>
            
            <div class="mb-2">
              <span class="text-gray-500 text-sm">Taille / Poids</span>
              <p class="text-sm">${pokemon.height/10}m / ${pokemon.weight/10}kg</p>
            </div>
            
            <div>
              <span class="text-gray-500 text-sm">Capacités</span>
              <div class="flex flex-col">
                ${pokemon.abilities.map(a => 
                  `<span class="text-xs ${a.is_hidden ? 'text-gray-400 italic' : ''}">
                    ${a.ability.name}${a.is_hidden ? ' (cachée)' : ''}
                  </span>`
                ).join('')}
              </div>
            </div>
          </div>
        </div>
        
        <div class="px-4 pb-4">
          <h3 class="text-sm font-bold mb-2">Statistiques</h3>
          ${pokemon.stats.map(s => `
            <div class="mb-1">
              <div class="flex justify-between text-xs">
                <span>${s.stat.name}</span>
                <span>${s.base_stat}/255</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-blue-500 rounded-full" 
                  style="width: ${(s.base_stat / 255) * 100}%">
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }