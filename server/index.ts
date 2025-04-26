import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
import { recognize } from 'tesseract.js';

app.post('/extract-text', async (req, res) => {
  try {
    const { imageUrl } = req.body; // Frontend sends image URL/base64
    const { data: { text } } = await recognize(imageUrl);
    res.json({ extractedText: text });
  } catch (error) {
    res.status(500).json({ error: "OCR failed" });
  }
});