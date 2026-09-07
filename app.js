// ТОЛЬКО РЕАЛЬНЫЕ ВИДЕО С GOOGLE ДИСКА ЗАКАЗЧИКА:
// https://drive.google.com/drive/folders/1rVjo_rJko26yhud35aaT6QBSuZurQxUb?usp=sharing
const portfolioProjects = [
  {
    id: 1,
    title: "FIT — Взрывной ролик для фитнеса и спорта",
    category: "sport",
    categoryName: "Спорт & Фитнес",
    duration: "10-15 сек",
    metric: "Бешеный заряд энергии с 1-й секунды",
    client: "Фитнес-клуб & Тренировки",
    fileName: "FIT.mp4",
    driveId: "190MLpE-LqO9PYwkiGQRpjg6YH4n5jGss",
    previewGradient: "from-amber-500 via-red-600 to-orange-700",
    emoji: "⚡",
    description: "Драйвовый ритм, пульсирующий бит и бескомпромиссная мотивация! Ролик приковывает взгляд и заставляет сразу купить абонемент или тренировку.",
    price: "30$",
    turnaround: "24 часа (или за пару часов!)"
  },
  {
    id: 2,
    title: "ЦВЕТЫ — Нежное продающее видео для букетов",
    category: "flowers",
    categoryName: "Цветы & Подарки",
    duration: "10-20 сек",
    metric: "Любовь, эстетика и желание подарить",
    client: "Цветочный салон & Доставка",
    fileName: "цветы.mp4",
    driveId: "14I1Ln7FOS4c75oLDeEN0X239lnzcHLTw",
    previewGradient: "from-rose-500 via-pink-600 to-purple-700",
    emoji: "🌸",
    description: "Невероятно красивое видео, вызывающее сильные эмоции. Показывает свежесть цветов и идеальный подарок любимому человеку прямо сейчас.",
    price: "30$ - 50$",
    turnaround: "24 часа"
  },
  {
    id: 3,
    title: "SI THAI — Атмосферное промо тайского SPA & Массажа",
    category: "spa",
    categoryName: "SPA & Услуги",
    duration: "15-20 сек",
    metric: "Полный релакс и запись на сеанс",
    client: "Салон традиционного тайского массажа Si Thai",
    fileName: "si thai.mp4",
    driveId: "1MKTKvOmhwzFwBSubSYMQk0wEwodxOhTZ",
    previewGradient: "from-emerald-600 via-teal-700 to-cyan-900",
    emoji: "🌿",
    description: "Аромамасла, мерцание свечей, расслабляющая музыка и атмосфера гармонии. Клиент видит видео и сразу хочет записаться на спа-процедуру.",
    price: "50$",
    turnaround: "24 часа"
  },
  {
    id: 4,
    title: "ГА-ГА — Драйвовое промо настольных игр и клуба",
    category: "games",
    categoryName: "Игры & Развлечения",
    duration: "10-20 сек",
    metric: "Живой смех, азарт и веселье друзей",
    client: "Клуб настольных игр & Магазин GaGa",
    fileName: "га-га.mp4",
    driveId: "1BlD89uXML3AAI1U_6OlevSgV9Be8GKPJ",
    previewGradient: "from-yellow-500 via-amber-600 to-red-600",
    emoji: "🎲",
    description: "Искренние эмоции компании, смех, дух соперничества! Ролик показывает, как круто провести вечер с друзьями за настолкой.",
    price: "30$ - 50$",
    turnaround: "24 часа"
  },
  {
    id: 5,
    title: "ЗОФМЕДИАНТЫ — Зажигательное видео для шоу и стендапа",
    category: "show",
    categoryName: "Шоу & Театр",
    duration: "15-20 сек",
    metric: "Аншлаг в зале и раскупленные билеты",
    client: "Театр комедии & Стендап 'Зофмедианты'",
    fileName: "зофмедианты.mp4",
    driveId: "1Ji5Brxe_z6-kMNf7B-z44orsOROpxYQ1",
    previewGradient: "from-purple-600 via-indigo-700 to-blue-800",
    emoji: "🎭",
    description: "Яркие моменты выступления, искренний хохот публики и драйв. Ролик мгновенно вовлекает зрителя и распродает билеты на шоу.",
    price: "50$",
    turnaround: "24 часа (или срочно)"
  }
];

// Constants
const PHONE_NUMBER = "+380962535610";
const PHONE_CLEAN = "380962535610";
const GOOGLE_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1rVjo_rJko26yhud35aaT6QBSuZurQxUb?usp=sharing";

let currentFilter = "all";

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio();
  initFaq();
  initMobileMenu();
});

// Render Portfolio items
function renderPortfolio() {
  const container = document.getElementById("portfolio-grid");
  if (!container) return;

  const filtered = currentFilter === "all" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === currentFilter);

  container.innerHTML = filtered.map(project => `
    <div class="glass-panel p-5 group flex flex-col justify-between hover:scale-[1.01] transition-all duration-300">
      <div>
        <!-- Video Preview Card -->
        <div class="relative w-full h-56 rounded-xl bg-gradient-to-br ${project.previewGradient} p-4 flex flex-col justify-between overflow-hidden shadow-inner cursor-pointer" onclick="openVideoModal(${project.id})">
          <div class="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-all"></div>
          
          <!-- Top bar inside preview -->
          <div class="relative z-10 flex items-center justify-between">
            <span class="glass-pill px-3 py-1 text-xs font-bold text-white tracking-wide flex items-center gap-1.5 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              ${project.categoryName}
            </span>
            <span class="glass-pill px-2.5 py-1 text-xs font-mono text-white/90 bg-black/40">
              ⏱ ${project.duration}
            </span>
          </div>

          <!-- Play icon -->
          <div class="relative z-10 flex flex-col items-center justify-center my-auto text-center">
            <div class="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 group-hover:bg-white/35 transition-all duration-300">
              <span class="ml-1 text-white">▶</span>
            </div>
            <div class="text-3xl mt-1.5 drop-shadow-md">${project.emoji}</div>
            <div class="text-[11px] font-bold text-white mt-1 bg-black/50 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
              Смотреть видео ↗
            </div>
          </div>

          <!-- Bottom bar inside preview -->
          <div class="relative z-10 flex items-center justify-between text-xs text-white/95">
            <div class="flex items-center gap-1 font-medium bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-sm">
              <span>⚡ 24ч (или срочно)</span>
            </div>
            <div class="flex items-center gap-1 font-bold text-amber-300 bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-sm">
              ${project.price}
            </div>
          </div>
        </div>

        <!-- Project Meta -->
        <div class="mt-4">
          <div class="flex items-center justify-between text-xs font-bold text-violet-400 mb-1">
            <span>${project.client}</span>
            <span class="font-mono text-gray-400 font-normal">${project.fileName}</span>
          </div>
          <h3 class="font-bold text-lg text-white group-hover:text-violet-300 transition-colors line-clamp-2 leading-snug">
            ${project.title}
          </h3>
          <p class="text-sm text-gray-300 mt-2 line-clamp-3 leading-relaxed">
            ${project.description}
          </p>
        </div>

        <!-- Emotion Badge -->
        <div class="mt-3.5 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
          <span class="text-base">🔥</span>
          <span class="text-xs font-semibold text-emerald-300">${project.metric}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-5 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
        <button onclick="openVideoModal(${project.id})" class="btn-glow text-xs py-2 px-3.5 flex items-center gap-1.5 font-bold">
          <span>▶ Включить видео</span>
        </button>
        <a href="https://drive.google.com/file/d/${project.driveId}/view" target="_blank" class="text-xs text-gray-400 hover:text-white flex items-center gap-1 py-1.5 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
          <span>На Диске ↗</span>
        </a>
      </div>
    </div>
  `).join('');
}

// Portfolio filter click
window.filterPortfolio = function(category, btnElement) {
  currentFilter = category;
  
  const buttons = document.querySelectorAll(".portfolio-filter-btn");
  buttons.forEach(btn => {
    btn.classList.remove("bg-violet-600", "text-white", "shadow-lg", "shadow-violet-600/30");
    btn.classList.add("bg-white/5", "text-gray-300", "hover:bg-white/10");
  });
  
  if (btnElement) {
    btnElement.classList.remove("bg-white/5", "text-gray-300", "hover:bg-white/10");
    btnElement.classList.add("bg-violet-600", "text-white", "shadow-lg", "shadow-violet-600/30");
  }

  renderPortfolio();
};

// Open Video Modal with embedded Google Drive Player
window.openVideoModal = function(projectId) {
  const project = portfolioProjects.find(p => p.id === projectId);
  if (!project) return;

  const modalContainer = document.getElementById("video-modal");
  const modalContent = document.getElementById("video-modal-content");

  const messageText = `Привет! Посмотрел ваш ролик "${project.title}". Хочу заказать такое же видео для своего дела. Расскажите подробнее!`;
  const tgLink = `https://t.me/+${PHONE_CLEAN}`;
  const waLink = `https://wa.me/${PHONE_CLEAN}?text=${encodeURIComponent(messageText)}`;
  const viberLink = `viber://chat?number=%2B${PHONE_CLEAN}`;
  const driveEmbedUrl = `https://drive.google.com/file/d/${project.driveId}/preview`;
  const driveDirectUrl = `https://drive.google.com/file/d/${project.driveId}/view`;

  modalContent.innerHTML = `
    <div class="relative bg-[#0E101A] border border-violet-500/40 rounded-2xl max-w-2xl w-full mx-4 overflow-hidden shadow-2xl animate-fade-in">
      
      <!-- Close Button -->
      <button onclick="closeVideoModal()" class="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all">
        ✕
      </button>

      <!-- Video Player Embed -->
      <div class="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden border-b border-white/10">
        <iframe src="${driveEmbedUrl}" class="w-full h-full border-0" allow="autoplay" allowfullscreen></iframe>
      </div>

      <!-- Modal Body -->
      <div class="p-5 md:p-7 space-y-4 max-h-[50vh] overflow-y-auto">
        <div class="flex items-start justify-between gap-4">
          <div>
            <span class="text-xs font-bold text-violet-400 uppercase tracking-wider">${project.client} (${project.fileName})</span>
            <h2 class="text-xl md:text-2xl font-bold text-white mt-0.5 leading-snug">${project.title}</h2>
          </div>
          <div class="text-right shrink-0">
            <span class="text-xs text-gray-400 block">Цена:</span>
            <span class="font-heading text-lg font-bold text-amber-400">${project.price}</span>
          </div>
        </div>

        <p class="text-sm text-gray-300 leading-relaxed">
          ${project.description}
        </p>

        <!-- Drive link helper -->
        <div class="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-between text-xs">
          <span class="text-gray-300">Файл из Google Диска: <strong>${project.fileName}</strong></span>
          <a href="${driveDirectUrl}" target="_blank" class="font-bold text-cyan-300 hover:underline flex items-center gap-1">
            Открыть на Диске ↗
          </a>
        </div>

        <!-- Quick CTAs -->
        <div class="pt-3 border-t border-white/10 space-y-2.5">
          <div class="text-center text-xs font-bold text-gray-200">
            Хотите такой же крутой ролик для своего бизнеса? Напишите мне:
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <a href="${tgLink}" target="_blank" class="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-telegram text-white font-bold text-xs hover-telegram transition-all shadow-lg shadow-sky-500/20">
              <span>✈️</span> Telegram
            </a>
            <a href="${waLink}" target="_blank" class="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-whatsapp text-white font-bold text-xs hover-whatsapp transition-all shadow-lg shadow-emerald-500/20">
              <span>💬</span> WhatsApp
            </a>
            <a href="${viberLink}" class="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-viber text-white font-bold text-xs hover-viber transition-all shadow-lg shadow-purple-500/20">
              <span>📞</span> Viber
            </a>
          </div>
        </div>
      </div>

    </div>
  `;

  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("flex");
  document.body.style.overflow = "hidden";
};

// Close Modal
window.closeVideoModal = function() {
  const modalContainer = document.getElementById("video-modal");
  if (modalContainer) {
    modalContainer.classList.add("hidden");
    modalContainer.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
};

// Direct Order helper for pricing cards
window.orderPlan = function(planName, price, messenger = 'telegram') {
  const message = `Привет! Хочу заказать видеоролик:\n` +
    `• Тариф: ${planName}\n` +
    `• Стоимость: ${price}\n` +
    `• Срок: 24 часа (или срочно)\n\n` +
    `Давайте обсудим детали!`;

  const encoded = encodeURIComponent(message);

  if (messenger === 'telegram') {
    window.open(`https://t.me/+${PHONE_CLEAN}`, '_blank');
  } else if (messenger === 'whatsapp') {
    window.open(`https://wa.me/${PHONE_CLEAN}?text=${encoded}`, '_blank');
  } else if (messenger === 'viber') {
    window.location.href = `viber://chat?number=%2B${PHONE_CLEAN}`;
  }
};

// FAQ Accordion
function initFaq() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;
    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      
      faqItems.forEach(i => {
        i.classList.remove("active");
        const answer = i.querySelector(".faq-answer");
        const icon = i.querySelector(".faq-icon");
        if (answer) answer.style.maxHeight = null;
        if (icon) icon.textContent = "+";
      });

      if (!isOpen) {
        item.classList.add("active");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");
        if (answer) answer.style.maxHeight = answer.scrollHeight + "px";
        if (icon) icon.textContent = "−";
      }
    });
  });
}

// Mobile Menu
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

// Copy phone number
window.copyPhoneNumber = function() {
  navigator.clipboard.writeText(PHONE_NUMBER).then(() => {
    showToast(`Номер ${PHONE_NUMBER} скопирован!`);
  }).catch(() => {
    showToast(`Номер: ${PHONE_NUMBER}`);
  });
};

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3500);
  }
}

// Quick Form Submit
window.handleQuickFormSubmit = function(event) {
  event.preventDefault();
  const form = event.target;
  const niche = form.niche.value.trim();
  const plan = form.plan.value;
  const messenger = form.messenger.value;

  const msg = `Привет! Хочу заказать видеоролик:\n` +
    `• Мой бизнес/товар: ${niche || "Не указано"}\n` +
    `• Выбранный формат: ${plan}\n` +
    `• Срок: 24 часа. Жду ответа!`;

  const encoded = encodeURIComponent(msg);

  if (messenger === "telegram") {
    window.open(`https://t.me/+${PHONE_CLEAN}`, "_blank");
  } else if (messenger === "whatsapp") {
    window.open(`https://wa.me/${PHONE_CLEAN}?text=${encoded}`, "_blank");
  } else if (messenger === "viber") {
    window.location.href = `viber://chat?number=%2B${PHONE_CLEAN}`;
  }

  showToast("Заявка готова! Открываем чат...");
  form.reset();
};
