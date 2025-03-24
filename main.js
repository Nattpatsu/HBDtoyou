//general data
const myName = "ไซน์";
const myDateofbirthday = new Date("1999/03/24");

//date happy birthday
const myDayofbirthday = myDateofbirthday.getDate();
const myMonthofbirthday = myDateofbirthday.getMonth();
const myYearofbitthday = myDateofbirthday.getFullYear();

//current date
const currenttime = new Date();
const currentDay = currenttime.getDate();
const currentMonth = currenttime.getMonth();
const currentYear = currenttime.getFullYear();

//tagHTML
const tagDays = document.getElementById("days");
const tagHours = document.getElementById("hours");
const tagMins = document.getElementById("mins");
const tagSecs = document.getElementById("secs");
const tagtimecountdown = document.getElementById("timecountdown");
const tagblessword = document.getElementById("blessword");
const tagblass = document.getElementById("bless");
const tagyearold = document.getElementById("yearold");
//arr

const wishes = [
  "🌞 ขอให้วันนี้เป็นวันที่ดีสำหรับคุณ เต็มไปด้วยรอยยิ้มและพลังบวก ไม่ว่าจะเจอเรื่องอะไรขอให้ผ่านไปได้อย่างราบรื่น ขอให้หัวใจของคุณอบอุ่นเหมือนแสงแดดอ่อน ๆ ยามเช้า และมีความสุขในทุกช่วงเวลาของวันนะ 😊💖",
  "🌸 ขอให้คุณมีความสุขมาก ๆ ในทุกวัน ขอให้ทุกความฝันที่คุณตั้งใจกลายเป็นความจริง ขอให้มีพลังในการเดินหน้าต่อไป และขอให้เจอแต่เรื่องราวดี ๆ ที่ทำให้คุณยิ้มได้ตลอดวันนะ ❤️✨",
  "💫 ขอให้คุณได้รับแต่สิ่งดี ๆ ในชีวิต ขอให้ทุกอย่างที่คุณทำประสบความสำเร็จ ขอให้คุณมีสุขภาพแข็งแรง และมีพลังใจที่เข้มแข็ง ขอให้วันนี้และทุกวันเป็นวันที่สดใสและเต็มไปด้วยกำลังใจเสมอนะ 🌞💖",
  "🎈 ขอให้คุณมีวันดี ๆ ที่เต็มไปด้วยความสุขและรอยยิ้ม ขอให้สิ่งที่คุณหวังเอาไว้สำเร็จลุล่วงไปได้ด้วยดี ขอให้มีคนดี ๆ อยู่รอบตัว และขอให้เจอแต่สิ่งที่ทำให้คุณมีความสุขทุกวันนะ 😊💕",
  "🌈 ขอให้ทุกวันของคุณเต็มไปด้วยพลังงานดี ๆ ขอให้คุณเจอแต่เรื่องราวดี ๆ ที่ทำให้หัวใจอบอุ่น ขอให้สุขภาพแข็งแรง มีความสุข และก้าวไปข้างหน้าได้อย่างมั่นใจในทุกเส้นทางที่เลือกเดินนะ 💪💖",
  "💖 ขอให้ชีวิตของคุณเต็มไปด้วยความรัก ความหวัง และแรงบันดาลใจ ขอให้ทุกอุปสรรคกลายเป็นบทเรียนที่ช่วยให้คุณเติบโต ขอให้คุณมีแต่ความสุข และพบเจอแต่สิ่งที่ทำให้หัวใจพองโตเสมอนะ ✨🌟",
  "😊 ขอให้คุณเจอแต่เรื่องราวดี ๆ และมีความสุขในทุก ๆ วัน ขอให้รอบตัวมีแต่คนที่รักและหวังดีกับคุณ ขอให้มีพลังใจที่เข้มแข็ง และขอให้วันนี้เป็นวันที่สวยงามที่สุดวันหนึ่งของคุณนะ 💕🌸",
  "💫 ขอให้คุณมีรอยยิ้มที่สดใสในทุกวัน ขอให้ความเหนื่อยล้าหายไป และถูกแทนที่ด้วยความสุข ขอให้มีแรงบันดาลใจใหม่ ๆ ในทุกเช้า และพบกับโอกาสดี ๆ ที่ทำให้หัวใจของคุณเต้นแรงเสมอ ✨🎈",
  "🎉 ขอให้วันนี้เป็นวันที่เต็มไปด้วยพลังบวก ขอให้คุณรู้สึกสดชื่นแจ่มใส มีรอยยิ้มที่อบอุ่น ขอให้ความสุขอยู่กับคุณไปตลอดทั้งวัน และขอให้ทุกสิ่งที่คุณปรารถนาเป็นจริงในเร็ววันนะ 💖😊",
  "🍀 ขอให้คุณได้รับแต่สิ่งดี ๆ และมีพลังใจที่เข้มแข็ง ขอให้ทุกวันของคุณมีแต่ความสุข ขอให้ทุกอุปสรรคที่พบเจอผ่านไปได้ด้วยดี ขอให้คุณมีแรงบันดาลใจในการใช้ชีวิตเสมอนะ 💪🌞",
  "🌟 ขอให้ชีวิตของคุณเต็มไปด้วยแสงสว่างและความหวัง ขอให้คุณมีความสุขกับทุกสิ่งที่ทำ ขอให้ทุกย่างก้าวของคุณเต็มไปด้วยความมั่นใจ และมีความรักรายล้อมอยู่เสมอในทุก ๆ วันนะ 💕✨",
  "💙 ขอให้คุณเจอแต่สิ่งดี ๆ ในชีวิต ขอให้ทุกวันเป็นวันที่สดใส ขอให้คุณมีพลังงานดี ๆ ในการทำสิ่งที่รัก และขอให้เจอคนที่เข้าใจและพร้อมอยู่ข้างคุณเสมอ ไม่ว่าอะไรจะเกิดขึ้นนะ 😊🌸",
  "😂 ขอให้คุณมีวันดี ๆ ที่เต็มไปด้วยเสียงหัวเราะและความสุข ขอให้เจอเรื่องราวที่ทำให้หัวใจอบอุ่น ขอให้ความเหนื่อยล้าหายไป และถูกแทนที่ด้วยพลังบวกที่ทำให้คุณก้าวต่อไปได้อย่างมั่นใจ 💖🎈",
  "🏆 ขอให้คุณมีสุขภาพแข็งแรง และมีจิตใจที่สดใสเสมอ ขอให้ทุกความฝันของคุณกลายเป็นความจริง ขอให้มีพลังใจในการเดินหน้าต่อไป และขอให้เจอแต่เรื่องราวที่ทำให้คุณยิ้มได้ในทุก ๆ วัน ✨😊",
  "💖 ขอให้วันนี้เป็นวันที่ดีที่สุดของคุณ ขอให้มีพลังบวกมากมาย ขอให้ความสุขอยู่กับคุณไปตลอดทั้งวัน ขอให้คุณพบเจอแต่สิ่งที่ทำให้หัวใจพองโต และมีแรงบันดาลใจใหม่ ๆ เสมอนะ 🎉🌞",
  "🌈 ขอให้ชีวิตของคุณเต็มไปด้วยความสุขและพลังบวก ขอให้ทุกสิ่งที่คุณทำประสบความสำเร็จ ขอให้มีคนดี ๆ อยู่รอบตัว และขอให้ทุกวันของคุณมีแต่รอยยิ้มและเสียงหัวเราะเสมอนะ 😊💕",
  "🎀 ขอให้คุณมีวันที่เต็มไปด้วยความรักและความอบอุ่น ขอให้เจอแต่เรื่องราวดี ๆ ที่ทำให้คุณรู้สึกโชคดีที่ได้ใช้ชีวิต ขอให้มีแรงบันดาลใจและความหวังใหม่ ๆ เสมอในทุก ๆ วันนะ ❤️✨",
  "🎊 ขอให้คุณมีแต่ความสุขในทุกวัน ขอให้พลังบวกอยู่รอบตัวคุณ ขอให้มีความมั่นใจและกล้าที่จะทำตามความฝัน ขอให้ทุกสิ่งที่คุณหวังไว้เป็นจริง และมีแต่คนที่รักคุณอยู่เคียงข้างเสมอ 💖😊",
  "🌺 ขอให้วันนี้เป็นวันที่สดใส ขอให้คุณพบเจอแต่สิ่งที่ทำให้ยิ้มได้ ขอให้มีพลังใจที่แข็งแกร่ง และขอให้ทุกความฝันของคุณกลายเป็นจริง ขอให้คุณมีความสุขในทุกช่วงเวลาของชีวิตนะ 🌸💕",
  "🌻 ขอให้คุณพบเจอแต่เรื่องราวดี ๆ ในทุกวัน ขอให้คุณมีพลังใจที่เข้มแข็ง ขอให้รอยยิ้มของคุณไม่เคยหายไป ขอให้ชีวิตของคุณเต็มไปด้วยความหวังและโอกาสใหม่ ๆ ที่เข้ามาเสมอนะ 💛✨",
];

//all fn

const HBDcelebrate = () => {
  const birthdayYear = currentYear - myYearofbitthday;

  tagblass.classList.toggle("hidden");
  tagtimecountdown.classList.add("hidden");

  let numRandom = Math.floor(Math.random() * wishes.length);

  console.log(numRandom);

  tagyearold.innerHTML = `ยินดีด้วยคุณ ${myName} อายุครบ ${birthdayYear} ปี`;
  tagblessword.innerHTML = wishes[numRandom];
};

//fn check what is date of your birhtday?
const nextBirthday = () => {
  let nextMybirthday = new Date(
    currentYear,
    myMonthofbirthday,
    myDayofbirthday
  );
  if (nextMybirthday < currenttime) {
    nextMybirthday.setFullYear(currentYear + 1);
  }
  console.log(`next birthday: ${nextMybirthday}`);
  return nextMybirthday;
};

const countDowntime = () => {
  const timeDiff = nextBirthday() - new Date();

  console.log(timeDiff);

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  //inserttotagHTML
  tagDays.innerHTML = days;
  tagHours.innerHTML = hours;
  tagMins.innerHTML = minutes;
  tagSecs.innerHTML = seconds;

  //check date of birthday

  if (
    myDayofbirthday === currentDay &&
    myMonthofbirthday + 1 === currentMonth + 1
  ) {
    HBDcelebrate();
  } else {
    //update every 1 sec
    setTimeout(countDowntime, 1000);
    console.log(
      myDayofbirthday,
      currentDay,
      myMonthofbirthday + 1,
      currentMonth + 1
    );
  }
};

//run after loadcontent
document.addEventListener("DOMContentLoaded", countDowntime());
