// 날짜
function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth()+1).padStart(2, "0");
  const date = String(today.getDay()).padStart(2, "0");
  return `${year}.${month}.${date}`
}

const today = getDate()

document.getElementById("date").textContent = today

// 뒤로가기
function goBack() {
  history.back();
}

// 저장
function contentSave() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  console.log("제목:", title);
  console.log("날짜:", formatDate);
  console.log("내용:", content);
}