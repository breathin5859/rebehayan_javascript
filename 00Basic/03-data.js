const levelup = document.querySelector(".levelup");

// 변수정의
const nameValue = "CodingPing";
const levelValue = "타입 확인";
const staminaValue = 12555;
const attackValue = 88766;
const shieldValue = 28745;

const staminaIcon = "🦾";
const attackIcon = "🔪";
const shieldIcon = "📫";

const image = "./images/character.webp";

// 타입확인
levelup.addEventListener("click", () => {
  isshow();
});

// UI 정의
function isshow(isType) {
  const type = document.querySelector(".type");
  const nickname = document.querySelector(".name");
  const stamina = document.querySelector(".stamina");
  const attack = document.querySelector(".attack");
  const shield = document.querySelector(".shield");
  const character = document.querySelector(".character img");

  nickname.innerText = nameValue;
  stamina.innerText = staminaValue;
  attack.innerText = attackValue;
  shield.innerText = shieldValue;
  levelup.innerText = levelValue;

  stamina.dataset.icon = staminaIcon;
  attack.dataset.icon = attackIcon;
  shield.dataset.icon = shieldIcon;

  character.setAttribute("src", image);

  if (!isType) {
    return;
  }

  document.body.insertAdjacentHTML("afterbegin", `<span class="show">${typeof isType}</span>`);
  console.log(typeof isType);
  const lvup = document.querySelector(".show");
  lvup.addEventListener("animationend", (e) => {
    e.target.remove();
  });
}
isshow();
