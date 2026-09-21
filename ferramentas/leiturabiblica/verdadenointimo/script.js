// Versão do código - aumente este número quando fizer alterações
const CODE_VERSION = "3.0.0";

document.addEventListener("DOMContentLoaded", () => {
  const scheduleData = [
    // 1.ª SEMANA
    { dia: "DOM 02/08", leitura: "SALMOS 51:6-7" },
    { dia: "SEG 03/08", leitura: "MATEUS 5:8-9" },
    { dia: "TER 04/08", leitura: "PROVÉRBIOS 3:3-4" },
    { dia: "QUA 05/08", leitura: "ROMANOS 12:1-2" },
    { dia: "QUI 06/08", leitura: "JÓ 27:5-6" },
    { dia: "SEX 07/08", leitura: "EFÉSIOS 4:24-25" },
    { dia: "SÁB 08/08", leitura: "1 SAMUEL 2:29-30" },

    // 2.ª SEMANA
    { dia: "DOM 09/08", leitura: "FILIPENSES 3:7-8" },
    { dia: "SEG 10/08", leitura: "ECLESIASTES 9:7-8" },
    { dia: "TER 11/08", leitura: "1 JOÃO 3:16-17" },
    { dia: "QUA 12/08", leitura: "JOSUÉ 24:14-15" },
    { dia: "QUI 13/08", leitura: "ATOS 24:15-16" },
    { dia: "SEX 14/08", leitura: "1 CRÔNICAS 29:16-17" },
    { dia: "SÁB 15/08", leitura: "APOCALIPSE 3:4-5" },

    // 3.ª SEMANA
    { dia: "DOM 16/08", leitura: "SALMOS 24:3-5" },
    { dia: "SEG 17/08", leitura: "TIAGO 4:15-17" },
    { dia: "TER 18/08", leitura: "ZACARIAS 8:16-17" },
    { dia: "QUA 19/08", leitura: "APOCALIPSE 4:10-11" },
    { dia: "QUI 20/08", leitura: "GÊNESIS 22:15-17" },
    { dia: "SEX 21/08", leitura: "2 CORÍNTIOS 12:14-15" },
    { dia: "SÁB 22/08", leitura: "SALMOS 145:18-19" },

    // 4.ª SEMANA
    { dia: "DOM 23/08", leitura: "HEBREUS 10:22-23" },
    { dia: "SEG 24/08", leitura: "SALMOS 26:1-3" },
    { dia: "TER 25/08", leitura: "1 TIMÓTEO 1:5-6" },
    { dia: "QUA 26/08", leitura: "ISAÍAS 1:16-18" },
    { dia: "QUI 27/08", leitura: "MARCOS 12:43-44" },
    { dia: "SEX 28/08", leitura: "EZEQUIEL 22:30-31" },
    { dia: "SÁB 29/08", leitura: "1 PEDRO 2:15-16" },

    // 5.ª SEMANA
    { dia: "DOM 30/08", leitura: "RUTE 1:16-17" },
    { dia: "SEG 31/08", leitura: "LUCAS 14:32-33" },
    { dia: "TER 01/09", leitura: "SALMOS 15:1-3" },
    { dia: "QUA 02/09", leitura: "1 CORÍNTIOS 10:31-33" },
    { dia: "QUI 03/09", leitura: "PROVÉRBIOS 4:23-24" },
    { dia: "SEX 04/09", leitura: "APOCALIPSE 7:13-14" },
    { dia: "SÁB 05/09", leitura: "2 REIS 20:2-3" },
  ];

  const container = document.querySelector(".schedule-container");
  const resetButton = document.getElementById("resetButton");

  // Verificar versão e limpar dados antigos se necessário
  const storedVersion = localStorage.getItem("codeVersion");
  if (storedVersion !== CODE_VERSION) {
    console.log(
      "Nova versão detectada. Atualizando de",
      storedVersion,
      "para",
      CODE_VERSION
    );
    localStorage.setItem("codeVersion", CODE_VERSION);
    // Mantém as leituras marcadas mesmo com nova versão
  }

  // Carrega as leituras marcadas do localStorage
  let checkedReadings =
    JSON.parse(localStorage.getItem("checkedReadings")) || {};

  /**
   * Função para renderizar as semanas e dias
   */
  function renderSchedule() {
    container.innerHTML = "";
    const weeks = [
      { title: "1.ª SEMANA", start: 0 },
      { title: "2.ª SEMANA", start: 7 },
      { title: "3.ª SEMANA", start: 14 },
      { title: "4.ª SEMANA", start: 21 },
      { title: "5.ª SEMANA", start: 28 },
    ];

    weeks.forEach((week) => {
      const weekElement = document.createElement("div");
      weekElement.className = "week";

      const title = document.createElement("div");
      title.className = "week-title";
      title.textContent = week.title;
      weekElement.appendChild(title);

      const weekDays = scheduleData.slice(week.start, week.start + 7);

      weekDays.forEach((item, dayIndex) => {
        const globalIndex = week.start + dayIndex;
        const itemId = `day-${globalIndex}`;

        const dayItem = document.createElement("div");
        dayItem.className = "day-item";
        dayItem.dataset.id = itemId;

        const checkbox = document.createElement("div");
        checkbox.className = "checkbox";
        checkbox.dataset.id = itemId;

        const dayInfo = document.createElement("div");
        dayInfo.className = "day-info";

        const dayStrong = document.createElement("strong");
        dayStrong.textContent = item.dia;

        const readingSpan = document.createElement("span");
        readingSpan.textContent = item.leitura;

        const verButton = document.createElement("button");
        verButton.textContent = "VER";
        verButton.className = "ver-button";
        verButton.addEventListener("click", (e) => {
          e.stopPropagation();
          const url = generateBibleUrl(item.leitura);
          window.open(url, "_blank");
        });

        dayInfo.appendChild(dayStrong);
        dayInfo.appendChild(readingSpan);

        dayItem.appendChild(verButton);
        dayItem.appendChild(checkbox);
        dayItem.appendChild(dayInfo);
        weekElement.appendChild(dayItem);

        if (checkedReadings[itemId]) {
          checkbox.classList.add("checked");
        }

        dayItem.addEventListener("click", toggleCheck);
      });

      container.appendChild(weekElement);
    });
  }

  /**
   * Função para gerar a URL da Bíblia Online focando apenas nos versículos selecionados
   */
  function generateBibleUrl(versiculo) {
    const livrosMap = {
      CORÍNTIOS: "co",
      JEREMIAS: "jr",
      MARCOS: "mc",
      SALMOS: "sl",
      ROMANOS: "rm",
      ISAÍAS: "is",
      ATOS: "at",
      PROVÉRBIOS: "pv",
      TIMÓTEO: "tm",
      JOÃO: "jo",
      LUCAS: "lc",
      MATEUS: "mt",
      JONAS: "jn",
      CRÔNICAS: "cr",
      FILIPENSES: "fp",
      PEDRO: "pe",
      AGEU: "ag",
      APOCALIPSE: "ap",
      TIAGO: "tg",
      EZEQUIEL: "ez",
      GÁLATAS: "gl",
      COLOSSENSES: "cl",
      EFÉSIOS: "ef",
      SAMUEL: "sm",
      ECLESIASTES: "ec",
      ZACARIAS: "zc",
      GÊNESIS: "gn",
      HEBREUS: "hb",
      RUTE: "rt",
      REIS: "rs",
      JÓ: "jo",
      JOSUÉ: "js",
    };

    const partes = versiculo.split(" ");
    let numeroLivro = "";
    let livro = partes[0];
    let offset = 1;

    if (!isNaN(parseInt(livro))) {
      numeroLivro = livro;
      livro = partes[1];
      offset = 2;
    }

    let codigoLivro = "";
    for (const [nome, codigo] of Object.entries(livrosMap)) {
      if (livro.includes(nome)) {
        codigoLivro = numeroLivro + codigo;
        break;
      }
    }

    if (!codigoLivro) {
      codigoLivro = numeroLivro
        ? numeroLivro + livro.toLowerCase()
        : livro.toLowerCase();
    }

    const refString = partes.slice(offset).join("");
    const refPartes = refString.split(":");
    const capitulo = refPartes[0];
    const versiculos = refPartes[1] || "";

    if (versiculos) {
      return `https://www.bibliaonline.com.br/nvt/${codigoLivro}/${capitulo}/${versiculos}+${versiculos}`;
    }

    return `https://www.bibliaonline.com.br/nvt/${codigoLivro}/${capitulo}`;
  }

  /**
   * Função para marcar/desmarcar o item
   */
  function toggleCheck(event) {
    const item = event.currentTarget;
    const itemId = item.dataset.id;
    const checkbox = item.querySelector(".checkbox");

    checkbox.classList.toggle("checked");

    // Atualiza o estado
    if (checkbox.classList.contains("checked")) {
      checkedReadings[itemId] = true;
    } else {
      delete checkedReadings[itemId];
    }

    // Salva no localStorage
    localStorage.setItem("checkedReadings", JSON.stringify(checkedReadings));
    console.log("Salvando:", itemId, checkedReadings); // Debug
  }

  /**
   * Função para resetar todas as marcações
   */
  function resetReadings() {
    if (
      confirm(
        "Tem certeza que deseja limpar TODAS as marcações de leitura? Esta ação não pode ser desfeita."
      )
    ) {
      // Limpa o objeto e o localStorage
      for (const key in checkedReadings) {
        delete checkedReadings[key];
      }
      localStorage.removeItem("checkedReadings");

      document.querySelectorAll(".checkbox").forEach((box) => {
        box.classList.remove("checked");
      });

      alert("Marcações resetadas com sucesso!");
    }
  }

  renderSchedule();
  resetButton.addEventListener("click", resetReadings);
});
