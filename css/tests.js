var gOrderN = -1;   // order number task in User window: 1, 2, 3...
var gN = -1;        // real number in test
var A = [];         // mix questions
var B = [];         // mix answers
var pause = false;  // pause beetween select answer

/* ---------------------------------------*/
/* ---------------------------------------*/
function GetMixArray(size, mix) {
  let rndNum = 0;
  let nums = [];
  for (let i = 0; i < size; i += 1) {
    nums.push(i);
  }
  if (mix) {
    for (let i = size - 1; i >= 0; i -= 1) {
      rndNum = Math.floor(Math.random() * (i + 1));
      [nums[i], nums[rndNum]] = [nums[rndNum], nums[i]];
    }
  }
  return nums;
}

/* ---------------------------------------*/
function CorrectCount(questNum) {
  let count = 0;
  for (let i = 0; i < test.Questions[questNum].Answers.length; i += 1) {
    if (test.Questions[questNum].Answers[i].cr) {
      count  += 1;
    }
  }
  return count;
}

/* ---------------------------------------*/
function SelectCount(questNum) {
  let count = 0;
  for (let i = 0; i < test.Questions[questNum].Answers.length; i += 1) {
    if (test.Questions[questNum].Answers[i].Select) {
      count  += 1;
    }
  }
  return count;
}

/* ---------------------------------------*/
function CorrectSelectCount(questNum) {
  let count = 0;
  for (let i = 0; i < test.Questions[questNum].Answers.length; i += 1) {
    if (test.Questions[questNum].Answers[i].Select && test.Questions[questNum].Answers[i].cr) {
      count  += 1;
    }
  }
  return count;
}

/* ---------------------------------------*/
function WrongSelectCount(questNum) {
  let count = 0;
  for (let i = 0; i < test.Questions[questNum].Answers.length; i += 1) {
    if (test.Questions[questNum].Answers[i].Select && !test.Questions[questNum].Answers[i].cr) {
      count  += 1;
    }
  }
  return count;
}
/* ---------------------------------------*/
function ChoiceCount() {
  let count = 0;
  for (let i = 0; i < test.Questions.length; i += 1) {
    if (SelectCount(i) > 0) {
      count  += 1;
    }
  }
  return count;
}
/* ---------------------------------------*/
function MFromN(M, N) {
  if (M < 0 || N <= 0 || M > N) {
    return 0;
  }
  let x = 1;
  for (let i = 1; i <= N; i += 1) {
    x *= i;
  }
  let y = 1;
  for (let i = 1; i <= M; i += 1) {
    y *= i;
  }
  let z = 1;
  for (let i = 1; i <= N - M; i += 1) {
    z *= i;
  }
  return x / (y * z);
}
/* ---------------------------------------*/
function GetPenaltyPoint() {
  let numerator = 0;
  let denominator = 0;
  let statMinus = 0;
  for (let i = 0; i < test.Questions.length; i += 1) {
    statMinus = MFromN(SelectCount(i) - 1, test.Questions[i].Answers.length - 1);
    numerator += statMinus;
    denominator += (test.Questions[i].Answers.length - CorrectCount(i)) * statMinus;
  }
  if (denominator === 0) {
    return 0;
  } else {
    return numerator / denominator;
  }
}
/* ---------------------------------------*/
function GetPointsPercent() {
  let pointSum = 0;
  let wrongAnswersCount = 0;
  for (let i = 0; i < test.Questions.length; i += 1) {
    pointSum += CorrectSelectCount(i) / CorrectCount(i);
    wrongAnswersCount += WrongSelectCount(i);
  }
  if (test.IsPenalty) {
    pointSum -= wrongAnswersCount * GetPenaltyPoint();
  } 
  if (pointSum < 0) {
    pointSum = 0;
  }
  return 100 * pointSum / test.Questions.length;
}
/* ---------------------------------------*/
function GetMark(markPercent) {
  if (markPercent < 0) {
    markPercent = 0;
  }
  if (markPercent > 100) {
    markPercent = 100;
  }
  if (test.MinMark < 0 || test.MaxMark < 0 || test.MinMark >= test.MaxMark) {
    return -1;
  }

  let oneMarkStep = 100 / (test.MaxMark - test.MinMark);
  let isMarkWithPlus = test.MaxMark <= 9;

  if (isMarkWithPlus) {
    oneMarkStep /= 2;
  }
  let mark = 0;
  if (markPercent > 0) {
    mark = Math.floor(Math.abs(markPercent / oneMarkStep - 0.00001)) + 1;
  }
  let res = test.MinMark + mark;
  if (isMarkWithPlus) {
    res = test.MinMark + Math.floor(mark / 2);
    if (mark % 2 === 1) {
      return String(res + "+");
    }
  }
  return String(res);
}

/* ---------------------------------------*/
/* ---------------------------------------*/
function Start() {
  document.getElementById("questCount").innerText = "(" + String(test.Questions.length) + " пит.)";
  A = GetMixArray(test.Questions.length, true);
  Next();
}

/* ---------------------------------------*/
function Next() {
  if (gOrderN >= test.Questions.length - 1) {
    Exit();
    return;
  }

  pause = false;
  gOrderN  += 1;
  gN = A[gOrderN];
  B = GetMixArray(test.Questions[gN].Answers.length, test.Questions[gN].RndAnswers);

    /* Header */
  document.getElementById("questNum").innerText = String(gOrderN + 1);

    /* Question */
  document.getElementById("quest").innerText = test.Questions[gN].Text;

    /* Answers */
  let c = CorrectCount(gN);
  if (c > 1) {
    document.getElementById("correctCount").innerText = "(" + String(c) + " відповіді)";
    document.getElementById("radio0").type = "checkbox";
    document.getElementById("radio1").type = "checkbox";
    document.getElementById("radio2").type = "checkbox";
    document.getElementById("radio3").type = "checkbox";
    document.getElementById("radio4").type = "checkbox";
    document.getElementById("radio5").type = "checkbox";
  } else {
    document.getElementById("correctCount").innerText = ".";
    document.getElementById("radio0").type = "radio";
    document.getElementById("radio1").type = "radio";
    document.getElementById("radio2").type = "radio";
    document.getElementById("radio3").type = "radio";
    document.getElementById("radio4").type = "radio";
    document.getElementById("radio5").type = "radio";
  }
  document.getElementById("radio0").checked = false;
  document.getElementById("radio1").checked = false;
  document.getElementById("radio2").checked = false;
  document.getElementById("radio3").checked = false;
  document.getElementById("radio4").checked = false;
  document.getElementById("radio5").checked = false;
  document.getElementById("answer0").style.backgroundColor = "var(--table-color)";
  document.getElementById("answer1").style.backgroundColor = "var(--table-color)";
  document.getElementById("answer2").style.backgroundColor = "var(--table-color)";
  document.getElementById("answer3").style.backgroundColor = "var(--table-color)";
  document.getElementById("answer4").style.backgroundColor = "var(--table-color)";
  document.getElementById("answer5").style.backgroundColor = "var(--table-color)";

  document.getElementById("label0").innerText = test.Questions[gN].Answers[B[0]].Text;
  document.getElementById("label1").innerText = test.Questions[gN].Answers[B[1]].Text;
  if (test.Questions[gN].Answers.length <= 2) {
    document.getElementById("label2").innerText = "";
    document.getElementById("answer2").hidden = true;
  } else {
    document.getElementById("label2").innerText = test.Questions[gN].Answers[B[2]].Text;
    document.getElementById("answer2").hidden = false;
  }
  if (test.Questions[gN].Answers.length <= 3) {
    document.getElementById("label3").innerText = "";
    document.getElementById("answer3").hidden = true;
  } else {
    document.getElementById("label3").innerText = test.Questions[gN].Answers[B[3]].Text;
    document.getElementById("answer3").hidden = false;
  }
  if (test.Questions[gN].Answers.length <= 4) {
    document.getElementById("label4").innerText = "";
    document.getElementById("answer4").hidden = true;
  } else {
    document.getElementById("label4").innerText = test.Questions[gN].Answers[B[4]].Text;
    document.getElementById("answer4").hidden = false;
  }
  if (test.Questions[gN].Answers.length <= 5) {
    document.getElementById("label5").innerText = "";
    document.getElementById("answer5").hidden = true;
  } else {
    document.getElementById("label5").innerText = test.Questions[gN].Answers[B[5]].Text;
    document.getElementById("answer5").hidden = false;
  }

    /* Obj */
  document.getElementById("questImg").src = test.Questions[gN].Obj;
  document.getElementById("questImg").hidden = test.Questions[gN].Obj === "";
  if (test.Questions[gN].Obj === "") {
    document.getElementById("questImg").alt = "";
  } else {
    document.getElementById("questImg").alt = "Помилка зображення";
  }
}
  /* ---------------------------------------*/
function Check(num) {
  if (pause) {
    return;
  }
  document.getElementById("radio" + String(num)).checked = !document.getElementById("radio" + String(num)).checked;
  if (document.getElementById("radio" + String(num)).checked) {
    document.getElementById("answer" + String(num)).style.backgroundColor = "var(--rose-color)";
  } else {
    document.getElementById("answer" + String(num)).style.backgroundColor = "var(--table-color)";
  }
  test.Questions[gN].Answers[B[num]].Select = document.getElementById("radio" + String(num)).checked;
  if (SelectCount(gN) >= CorrectCount(gN)) {
    pause = true;
    setTimeout(Next, 400);
  }
}

  /* ---------------------------------------*/
function Exit() {
  document.getElementById("header").style.display = "none";
  document.getElementById("form").style.display = "none";
  document.getElementById("questImg").hidden = true;

  document.getElementById("resForm").hidden = false;

  if (ChoiceCount() < 0.75 * test.Questions.length) {
    document.getElementById("percent").innerText = "немає :(";
    document.getElementById("mark").hidden = true;
  } else {
    let p = GetPointsPercent();
    const colors = [
      "#F08080", "#FFA07F", "#FFB6C1", "#FFA07A", "#F0E68C", "#F5DEB3",
      "#9ACD32", "#90EE90", "#00FF7F", "#66CDAA", "#E0FFFF", "#ADD8E6"
    ];
    document.getElementById("percent").innerHTML = String(Math.round(p)) + " %";
    document.getElementById("mark").innerText = GetMark(p);
    if (test.MaxMark === 12) {
      document.getElementById("mark").style.backgroundColor = colors[Number(GetMark(p)) - 1];
    }
  }
}