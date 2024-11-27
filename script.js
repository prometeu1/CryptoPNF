// URL de l'API
const apiURL = "https://api.coinpaprika.com/v1/tickers";

// Sélectionne le conteneur où afficher les données
const container = document.getElementById('crypto-container');

// Fonction pour récupérer les données de l'API
async function fetchCryptoData() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        displayCryptoData(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

// Fonction pour afficher les données dans le conteneur
function displayCryptoData(data) {
    container.innerHTML = ''; // Clear previous data
    data.forEach(crypto => {
        const cryptoElement = document.createElement('div');
        cryptoElement.className = 'crypto-element';
        cryptoElement.innerHTML = `
            <h2>${crypto.name} (${crypto.symbol})</h2>
            <p>Price: $${crypto.quotes.USD.price.toFixed(2)}</p>
            <p>Market Cap: $${crypto.quotes.USD.market_cap.toLocaleString()}</p>
            <p>24h Volume: $${crypto.quotes.USD.volume_24h.toLocaleString()}</p>
        `;
        container.appendChild(cryptoElement);
    });
}

// Appel de la fonction pour récupérer et afficher les données
fetchCryptoData();


