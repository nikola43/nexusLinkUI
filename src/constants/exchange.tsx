export const currencyLists = [
  { "id": 1027, "title": "Ethereum", "symbol": "ETH", "rank": 1 , "logo": "", "network": "Sepolia"}, 
  { "id": 1839, "title": "CCIP-BnM", "symbol": "CCIP-BnM", "rank": 2 , "logo": "", "network": "Sepolia"}, 
  { "id": 825, "title": "CCIP-BnM", "symbol": "CCIP-LnM", "rank": 3 , "logo": "", "network": "Sepolia"}, 
  { "id": 3408, "title": "USD Coin", "symbol": "USDC", "rank": 4 , "logo": "", "network": "Sepolia"}, 
  { "id": 1027, "title": "Ethereum", "symbol": "ETH", "rank": 1 , "logo": "", "network": "Base"}, 
  { "id": 1839, "title": "CCIP-BnM", "symbol": "CCIP-BnM", "rank": 2 , "logo": "", "network": "Base"}, 
  { "id": 825, "title": "CCIP-BnM", "symbol": "CCIP-LnM", "rank": 3 , "logo": "", "network": "Base"}, 
  { "id": 3408, "title": "USD Coin", "symbol": "USDC", "rank": 4 , "logo": "", "network": "Base"}, 
  { "id": 5805, "title": "Avalanche", "symbol": "AVAX", "rank": 1 , "logo": "", "network": "Fuji"}, 
  { "id": 1839, "title": "CCIP-BnM", "symbol": "CCIP-BnM", "rank": 2 , "logo": "", "network": "Fuji"}, 
  { "id": 825, "title": "CCIP-BnM", "symbol": "CCIP-LnM", "rank": 3 , "logo": "", "network": "Fuji"}, 
  { "id": 3408, "title": "USD Coin", "symbol": "USDC", "rank": 4 , "logo": "", "network": "Fuji"}, 
].map((o) => {
    o= {
      ...o,
      logo: `https://s2.coinmarketcap.com/static/img/coins/128x128/${o.id}.png`
    }
    return o;
  }, {});