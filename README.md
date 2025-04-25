# ai-blockchain-cert-verfication
A decentralized certificate verification platform combining AI and blockchain. Allows institutions to upload certificates, uses AI for data extraction, and stores verification hashes on the Polygon blockchain for instant recruiter validation.
# AI + Blockchain Certificate Verification Platform

A decentralized platform that enables institutions to upload certificates and allows recruiters to instantly verify them using blockchain. The platform uses AI to extract and structure data from uploaded certificate images or PDFs, then stores their unique hash on the Polygon blockchain for future verification.

---

## Features

- **AI-Powered OCR**: Extracts text from uploaded certificate images or PDFs using Tesseract/Google Vision.
- **Data Structuring**: Uses NLP to convert raw text into structured certificate data.
- **Blockchain Verification**: Generates a hash for the certificate and stores it on the Polygon blockchain via smart contracts.
- **Recruiter Validation**: Recruiters can verify the authenticity of certificates via hash lookup.
- **Token/NFT Access**: Certificate ownership can be linked to NFTs or access tokens for additional security.

---

## Tech Stack

### Frontend:
- React / Next.js

### Backend:
- Node.js + Express

### Blockchain:
- Solidity Smart Contracts
- Hardhat for development & testing
- Deployed on Polygon network

### AI & Data Processing:
- Tesseract.js / Google Vision API for OCR
- NLP for text extraction and formatting

---

## How It Works

1. **User uploads a certificate** (Image or PDF)
2. **AI extracts certificate data** using OCR and NLP
3. **Smart contract generates a unique hash** of certificate data and stores it on the blockchain
4. **Recruiter enters certificate hash** to verify if it matches the blockchain entry
5. **Verified output is shown** confirming authenticity

---

## Getting Started

### Prerequisites:
- Node.js
- Hardhat (for blockchain development)
- React (for frontend)
- MetaMask (for blockchain interaction)

### Run Locally:

1. Clone the repo:
```bash
git clone https://github.com/your-username/ai-blockchain-cert-verification.git
cd ai-blockchain-cert-verification
npm install
cd backend
npm start
cd frontend
npm run dev
