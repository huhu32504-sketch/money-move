# Decentralized Crypto Payment Site

A **fully static, IPFS-ready** website that accepts crypto payments via **MaxelPay**.

## Features
- No backend, no KYC
- Works on IPFS, GitHub Pages, Fleek
- Auto QR code generation
- Responsive design
- Powered by MaxelPay

## Setup

1. **Get your MaxelPay link**:
   - Go to [maxelpay.com](https://www.maxelpay.com/)
   - Create a payment link with amount & currency
   - Replace `MAXELPAY_LINK` in `script.js`

2. **Upload to GitHub**:
   ```bash
   git clone https://github.com/yourusername/maxelpay-decentralized-site.git
   cd maxelpay-decentralized-site
   # Edit script.js with your link
   git add .
   git commit -m "Add MaxelPay"
   git push
