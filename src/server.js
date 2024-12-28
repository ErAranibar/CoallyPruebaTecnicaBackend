const dotenv = require('dotenv');

dotenv.config();

const app = require('./routes/main');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});