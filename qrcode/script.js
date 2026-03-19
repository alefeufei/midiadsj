document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const form = document.getElementById("qr-form");
  const qrText = document.getElementById("qr-text");
  const qrColorDark = document.getElementById("qr-color-dark");
  const qrColorLight = document.getElementById("qr-color-light");
  const qrSize = document.getElementById("qr-size");
  const sizeLabel = document.getElementById("size-label");
  const valDark = document.getElementById("val-dark");
  const valLight = document.getElementById("val-light");
  const resultContainer = document.getElementById("result-container");
  const canvas = document.getElementById("qr-canvas");
  const downloadBtn = document.getElementById("download-btn");

  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  const waPhone = document.getElementById("wa-phone");
  const waMessage = document.getElementById("wa-message");

  let activeTab = "url";

  // Tab switching
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      activeTab = tabId;

      // Update buttons
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Update content
      tabContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === `${tabId}-container`) {
          content.classList.add("active");
        }
      });

      // Update required attribute
      if (tabId === "url") {
        qrText.required = true;
      } else {
        qrText.required = false;
      }
    });
  });

  // Update labels on input change
  qrSize.addEventListener("input", (e) => {
    sizeLabel.textContent = e.target.value;
  });

  qrColorDark.addEventListener("input", (e) => {
    valDark.textContent = e.target.value.toUpperCase();
  });

  qrColorLight.addEventListener("input", (e) => {
    valLight.textContent = e.target.value.toUpperCase();
  });

  // Generate QR Code
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let text = "";

    if (activeTab === "url") {
      text = qrText.value.trim();
    } else {
      const phone = waPhone.value.replace(/\D/g, "");
      const message = waMessage.value.trim();
      if (!phone) {
        alert("Por favor, insira um número de telefone válido.");
        return;
      }
      text = `https://wa.me/${phone}`;
      if (message) {
        text += `?text=${encodeURIComponent(message)}`;
      }
    }

    if (!text) return;

    // Visual feedback
    const btn = form.querySelector('button[type="submit"]');

    const originalText = btn.innerHTML;
    btn.innerHTML = "<span>Gerando...</span>";
    btn.disabled = true;

    try {
      // Options for QRCode.js
      const size = parseInt(qrSize.value);
      const darkColor = qrColorDark.value;
      const lightColor = qrColorLight.value;

      // Clear previous canvas context to avoid glitches
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Generate to canvas
      await QRCode.toCanvas(canvas, text, {
        width: size,
        margin: 2,
        color: {
          dark: darkColor,
          light: lightColor,
        },
      });

      // Make sure the canvas width attribute matched the generated size for proper downloading
      // The library adjusts the visual width but fixing CSS as well
      canvas.style.width = "100%";
      canvas.style.maxWidth = `${size}px`;

      // Setup download functionality
      setupDownload();

      // Show result
      resultContainer.classList.add("show");

      // Scroll to result smoothly
      setTimeout(() => {
        resultContainer.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 100);
    } catch (err) {
      console.error(err);
      alert("Ocorreu um erro ao gerar o QR Code. Tente novamente.");
    } finally {
      // Reset button
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  });

  // Function to handle image download
  function setupDownload() {
    downloadBtn.onclick = () => {
      // Converts canvas to a data URL that can be downloaded
      const imageUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imageUrl;
      // Name file based on domain or first few chars if possible
      let filename = "qrcode";
      try {
        const url = new URL(qrText.value);
        filename += "-" + url.hostname.replace("www.", "");
      } catch (e) {
        // If not URL, use truncated text
        filename +=
          "-" +
          qrText.value
            .substring(0, 10)
            .replace(/[^a-z0-9]/gi, "_")
            .toLowerCase();
      }
      link.download = `${filename}.png`;

      // Programmatically click the link to trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  }
});
