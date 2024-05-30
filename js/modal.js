// modal.js

// モーダルを開く関数
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    setTimeout(function() {
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        document.getElementById(modalId).getElementsByClassName("modal-content")[0].style.opacity = "1";
    }, 10); // 適切な遅延時間を設定する
}

// モーダルを閉じる関数
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.backgroundColor = "rgba(0, 0, 0, 0)";
    modal.getElementsByClassName("modal-content")[0].style.opacity = "0";
    setTimeout(function() {
        modal.style.display = "none";
    }, 300); // 適切な遅延時間を設定する
}
