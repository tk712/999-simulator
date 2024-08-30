const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('999 Simulator Backend is Running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get('/simulate-call', (req, res) => {
  const locations = ["Walsall", "Sutton Coldfield", "Four Oaks", "Kingstanding"];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  res.json({ message: `Emergency at ${randomLocation}` });
});
