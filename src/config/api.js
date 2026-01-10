const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
  WALLET_URL: process.env.REACT_APP_API_WALLET_URL || 'http://localhost:8093',
  REWARD_URL: process.env.REACT_APP_API_REWARD_URL || 'http://localhost:8083',
  NOTIFICATION_URL: process.env.REACT_APP_API_NOTIFICATION_URL || 'http://localhost:8088',
  USER_URL: process.env.REACT_APP_API_USER_URL || 'http://localhost:8089',
};

export default API_CONFIG;