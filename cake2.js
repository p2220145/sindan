// ページ読み込み時の初期表示設定
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("start-screen").classList.remove("hidden");
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
});

const questions = [
  "期間限定のケーキが良い？",
  "生クリームが好き？",
  "濃厚なケーキが好み？",
  "甘さが得意？",
  "ケーキに満足感を求める？",
  "フルーツが食べたい？"
];

const cakes = [
  { name: "ショートケーキ▾", attributes: ["no", "yes", "no", "yes", "no", "yes"], description: "ケーキの王道ショートケーキ。こだわりの生クリームにイチゴがぴったり！" },
  { name: "生チョコショートケーキ▾", attributes: ["no", "yes", "no", "yes", "no", "yes"], description: "チョコクリームとバナナの相性ぴったりイチゴも乗ってるよ" },
  { name: "紅茶のロールケーキ▾", attributes: ["no", "yes", "no", "yes", "no", "no"], description: "紅茶がかおるロールケーキ！大人の女性に人気" },
  { name: "オペラ▾", attributes: ["no", "no", "no", "yes", "no", "no"], description: "香りのよいコーヒーと上品なビジュアル！大人に人気" },
  { name: "ジャマイカ▾", attributes: ["no", "no", "yes", "no", "yes", "no"], description: "ラム酒のかおりがコーヒーの風味に合う大人な味" },
  { name: "ジャージープリン▾", attributes: ["no", "yes", "yes", "yes", "no", "no"], description: "とろとろプリンの上にはおいしい生クリーム！キャラメルソース付き" },
  { name: "スフレ▾", attributes: ["no", "no", "no", "no", "no", "no"], description: "チーズケーキの定番。シンプルなチーズのおいしさ" },
  { name: "シュークリーム▾", attributes: ["no", "no", "yes", "yes", "no", "no"], description: "カスタードたっぷり毎日出来立てのシュー！" },
  { name: "ベリーベリーロール▾", attributes: ["yes", "yes", "no", "yes", "no", "no"], description: "実は昔のブッシュドノエルを商品化したケーキ" },
  { name: "すだちのタルト▾", attributes: ["yes", "no", "no", "no", "no", "yes"], description: "優しい甘みのメレンゲと酸味のあるすだちが相性抜群！" },
  { name: "タルト・オ・ポンム▾", attributes: ["yes", "no", "yes", "no", "yes", "yes"], description: "ボリューム満点キャラメルとリンゴのオリジナルタルト！" },
  { name: "イチジクの焼きこみタルト▾", attributes: ["yes", "no", "yes", "yes", "no", "yes"], description: "イチジクの香りと甘みを引き出したきれいなタルト" },
  { name: "洋ナシのタルト▾", attributes: ["yes", "no", "no", "yes", "no", "yes"], description: "旬のおいしい洋ナシをしっかり追熟させタルトに！" },
  { name: "かぼちゃプリン▾", attributes: ["yes", "yes", "yes", "yes", "yes", "no"], description: "かぼちゃと生クリームがぴったりの濃厚プリン" },
  { name: "モンブラン▾", attributes: ["yes", "no", "yes", "yes", "yes", "yes"], description: "フランス本場洋栗使用の濃厚なモンブラン" },
  { name: "和栗のモンブラン▾", attributes: ["yes", "yes", "no", "yes", "yes", "yes"], description: "和栗の優しい甘みをメレンゲと生クリームで引き出すモンブラン "},
  { name: "エクレア▾", attributes: ["yes", "no", "yes", "yes", "no", "no"], description: "かぼちゃクリームが濃厚なエクレア！" },
  { name: "厚切りロール▾", attributes: ["no", "yes", "yes", "yes", "yes", "no"], description: "厚切りのバタークリームロールケーキ！" },
  { name: "ガトーショコラ▾", attributes: ["no", "no", "no", "yes", "yes", "no"], description: "王道ガトーショコラ！生クリーム添え" },
  { name: "ナルシス▾", attributes: ["no", "no", "no", "yes", "no", "yes"], description: "ふわふわチーズクリームで何個でも食べれちゃう！" },
  { name: "ルモンテ▾", attributes: ["no", "no", "yes", "yes", "no", "no"], description: "キャラメルクリームとチョコの濃厚だけど重くない絶妙なケーキ！" },
  { name: "ユウジュ▾", attributes: ["no", "no", "no", "no", "no", "yes"], description: "ココナッツと柑橘の組み合わせ！クリームが苦手な方でも食べれます" },
  { name: "ミントエバニーユ▾", attributes: ["no", "yes", "yes", "yes", "yes", "no"], description: "クレープ生地の中にミントのクリーム" },
  { name: "ジュメル▾", attributes: ["no", "yes", "yes", "yes", "yes", "no"], description: "かわいらしいビジュアルとイチゴのムース！" },
  { name: "バナナキャラメル▾", attributes: ["no", "yes", "yes", "yes", "no", "yes"], description: "バナナチョコキャラメルの濃厚なケーキ！" },
  { name: "レトロフランボワーズ▾", attributes: ["no", "no", "yes", "yes", "no", "yes"], description: "チョコとベリーの組み合わせがお好きな方はこれ！" },
  { name: "クレームブリュレ▾", attributes: ["no", "no", "yes", "yes", "no", "no"], description: "注文から裏で二度炙り表面カリカリなかとろとろ！" },
  { name: "ふわふわクレープ▾", attributes: ["no", "yes", "no", "yes", "yes", "yes"], description: "クレープ生地の中にはいろんなフルーツと生クリーム！" },
  { name: "はっちくんのベイクドレモン▾", attributes: ["no", "no", "no", "no", "no", "no"], description: "レモンが香る濃厚で小さいチーズケーキ" },
];
let currentQuestion = 0;
let filteredCakes = [...cakes];

// クイズ開始
function startQuiz() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("show-result-button").classList.add("hidden"); // 初期化
  showQuestion();
}

// 質問を表示
function showQuestion() {
  document.getElementById("question").textContent = questions[currentQuestion];
}

// 回答処理
function answer(response) {
  filteredCakes = filteredCakes.filter(cake => {
      const attr = cake.attributes[currentQuestion];
      return response === "any" || attr === response;
  });

  // 最後の質問の場合またはケーキが1つに絞られた場合は結果ボタンを表示
  if (filteredCakes.length === 1 || currentQuestion >= questions.length - 1) {
      document.getElementById("show-result-button").classList.remove("hidden");
  } else {
      currentQuestion++;
      showQuestion();
  }
}
// 結果ボタンを押したときの処理
function showResult() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");
  displayResult();
}

function displayResult() {
  const cakeList = document.getElementById("cake-list");
  cakeList.innerHTML = "";

  filteredCakes.forEach((cake, index) => {
      const cakeItem = document.createElement("div");
      cakeItem.classList.add("cake-item", "fade-in");
      cakeItem.style.animationDelay = `${index * 0.1}s`;

      const cakeName = document.createElement("div");
      cakeName.textContent = cake.name;
      cakeName.onclick = () => {
          const description = cakeItem.querySelector(".description");
          description.style.display = description.style.display === "none" ? "block" : "none";
      };
      cakeItem.appendChild(cakeName);

      const cakeDescription = document.createElement("div");
      cakeDescription.textContent = cake.description;
      cakeDescription.classList.add("description");
      cakeDescription.style.display = "none";
      cakeItem.appendChild(cakeDescription);

      cakeList.appendChild(cakeItem);
  });
}

// クイズの再スタート
function restartQuiz() {
  currentQuestion = 0;
  filteredCakes = [...cakes];
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("show-result-button").classList.add("hidden");
  showQuestion();
}
