

/* ===== お知らせ ===== */
const news = [
    { date: "2025.01.10", text: "ルナちゃんが成約しました" },
    { date: "2025.01.05", text: "新しい子猫が誕生しました" },
    // ここに追加するだけ（10件まで自動表示）
  ];
  
  const newsList = document.getElementById("newsList");

if (newsList) {
  news.slice(0, 10).forEach(n => {
    const li = document.createElement("li");
    li.textContent = `${n.date}　${n.text}`;
    newsList.appendChild(li);
  });
}

  
  /* ===== 子猫 ===== */
  const cats = [
    {
      id: "luna",
      name: "ルナ",
      birth: "2024.11.01",
      gender: "女の子",
      price: "¥350,000",
      status: "募集中",
      image: "https://placekitten.com/300/200",
      images: [
        "https://placekitten.com/400/300",
        "https://placekitten.com/401/300"
      ],
      parents: "ミア × ソラ",
      character: "とても甘えん坊で穏やか",
      vaccine: "1回接種済み",
      health: "健康診断済み・問題なし",
      visit: "2025年2月〜",
      delivery: "2025年3月〜"
    }
  ];
  
  const topCats = document.getElementById("topCats");

  if (topCats) {
    cats.forEach(cat => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${cat.image}">
        <p>${cat.birth}</p>
        <p>${cat.gender}</p>
        <p>${cat.price}</p>
        <p class="status">${cat.status}</p>
      `;
      topCats.appendChild(div);
    });
  }
  
  
  /* ===== 親猫 ===== */
  const parents = [
    {
      name: "ミア",
      image: "https://placekitten.com/250/200",
      character: "穏やか",
      gene: "検査済み"
    }
  ];
  
  const parentsBox = document.getElementById("parents");

if (parentsBox) {
  parents.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${p.image}">
      <h4>${p.name}</h4>
      <p>${p.character}</p>
      <p>${p.gene}</p>
    `;
    parentsBox.appendChild(div);
  });
}

  
  /* ===== FAQ アコーディオン ===== */
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.nextElementSibling.classList.toggle("open");
    });
  });
  
  /* ===== cats.html 用 ===== */
  const catsList = document.getElementById("catsList");
  
  if (catsList) {
    cats.forEach(cat => {
      const div = document.createElement("div");
      div.className = "cat-item";
      div.innerHTML = `
        <img src="${cat.images[0]}" alt="${cat.name}">
        <h3>${cat.name}</h3>
        <p>生年月日：${cat.birth}</p>
        <p>価格：${cat.price}</p>
        <p class="status">${cat.status}</p>
      `;
      div.addEventListener("click", () => {
        location.href = `cat.html?id=${cat.id}`;
      });
      catsList.appendChild(div);
    });
  }

/* ===== cat.html 用 ===== */
const detailBox = document.getElementById("catDetail");

if (detailBox) {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const cat = cats.find(c => c.id === id);

  if (!cat) {
    detailBox.textContent = "該当する子猫が見つかりません。";
  } else {
    detailBox.innerHTML = `
      <div class="cat-detail">
        <h1>${cat.name}</h1>

        <div class="image-row">
          ${cat.images.map(img => `<img src="${img}">`).join("")}
        </div>

        <div class="detail-box">
          <p>生年月日：${cat.birth}</p>
          <p>価格：${cat.price}</p>
          <p>ステータス：${cat.status}</p>
          <p>両親：${cat.parents}</p>
          <p>性格：${cat.character}</p>
          <p>ワクチン：${cat.vaccine}</p>
          <p>健康状態：${cat.health}</p>
          <p>見学可能時期：${cat.visit}</p>
          <p>引き渡し可能時期：${cat.delivery}</p>
        </div>

        <a class="line-btn" href="https://lin.ee/XXXXXXX" target="_blank">
          公式LINEでお問い合わせ
        </a>
      </div>
    `;
  }
}

if (cats.length === 0) {
    catsList.textContent = "現在ご紹介できる子猫はいません。";
  }
  