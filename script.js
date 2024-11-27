async function fetchCryptos() {
    // Requête à l'API CoinGecko pour récupérer les cryptos en USD
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const data = await response.json();
  
    // Filtrer les cryptos avec une market cap inférieure à 150 millions
    const filteredData = data.filter(crypto => crypto.market_cap < 150000000);
  
    // Sélectionner l'élément où afficher les cryptos
    const cryptoList = document.getElementById('crypto-list');
    cryptoList.innerHTML = ''; // Clear the list before adding new data
  
    // Ajouter chaque crypto à la page
    filteredData.forEach(crypto => {
      const div = document.createElement('div');
      div.classList.add('crypto-item');
      div.innerHTML = `
        <h2>${crypto.name} (${crypto.symbol.toUpperCase()})</h2>
        <img src="${crypto.image}" alt="${crypto.name}">
        <p>Price: $${crypto.current_price}</p>
        <p>Market Cap: $${crypto.market_cap}</p>
        <p>24h Change: ${crypto.price_change_percentage_24h}%</p>
      `;
      cryptoList.appendChild(div);
    });
  }
  
  // Appel de la fonction pour charger les cryptos
  fetchCryptos();
  