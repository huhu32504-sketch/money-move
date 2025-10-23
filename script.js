// === CONFIGURE YOUR MAXELPAY LINK HERE ===
const MAXELPAY_LINK = "https://checkout.maxelpay.com/invoice?id=MX_INV_686703548";

// === Optional: Replace with your real wallet if not using MaxelPay link ===
const WALLET_ADDRESS = "KbTNVOClfa4ctIIVO3syWiLmmKurls5x";
const AMOUNT_BTC = "0.0015";

// Open MaxelPay or show QR
document.getElementById("payButton").addEventListener("click", () => {
  // Option 1: Redirect to MaxelPay (recommended)
  window.open(MAXELPAY_LINK, "_blank");

  // Option 2: Show QR modal (uncomment if you want both)
  // showQRModal();
});

function showQRModal() {
  const modal = document.getElementById("paymentModal");
  const amountEl = document.getElementById("amount");
  const addressEl = document.getElementById("walletAddress");

  amountEl.textContent = AMOUNT_BTC + " BTC";
  addressEl.textContent = WALLET_ADDRESS;

  // Generate QR Code
  document.getElementById("qrCode").innerHTML = "";
  new QRCode(document.getElementById("qrCode"), {
    text: `bitcoin:${WALLET_ADDRESS}?amount=${AMOUNT_BTC}`,
    width: 160,
    height: 160,
    colorDark: "#000",
    colorLight: "#fff"
  });

  modal.style.display = "block";
}

// Close modal
document.querySelector(".close").onclick = () => {
  document.getElementById("paymentModal").style.display = "none";
};

window.onclick = (e) => {
  const modal = document.getElementById("paymentModal");
  if (e.target == modal) modal.style.display = "none";
};
