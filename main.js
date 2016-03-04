/** ログインボタン処理 */
function onLogin() {
    var idText = document.in.id_auIdTxt.value;
    if (idText) {
        if (writeCookie(idText)) {
            //ログイン完了風にページを再読み込みする
            location.reload();
        } else {
            alert("ログインに失敗しました。");
        }
    } else {
        alert("IDを入力してください。");
    }
}

/** ログアウトボタン処理 */
function onLogout() {
    if (deleteCookie()) {
        //ログアウト完了風にページを再読み込みする
        location.reload();
    } else {
        alert("ログアウトに失敗しました。");
    }
}

/** クッキー書き込みボタン処理 */
function onWrite() {
    var idText = document.in.id_auIdTxt.value;
    if (idText) {
        if (writeCookie(idText)) {
            alert("書き込みに成功しました。");
        } else {
            alert("書き込みに失敗しました。");
        }
    } else {
        alert("IDを入力してください。");
    }
}

/** クッキー読み込みボタン処理 */
function onRead() {
    var id;
    id = readCookie();

    alert("id : " + id);
}

/** クッキー削除ボタン処理 */
function onDelete() {
    if (deleteCookie()) {
        alert("削除に成功しました。");
    } else {
        alert("削除に失敗しました。");
    }
}

/** ページ読み込み処理 */
window.addEventListener('load', function() {
    if (readCookie()) {
        document.getElementById("id_auIdTxt").style.display="none";
        document.getElementById("id_loginBtn").style.display="none";
        document.getElementById("id_logoutBtn").style.display="";
    } else {
        document.getElementById("id_auIdTxt").style.display="";
        document.getElementById("id_loginBtn").style.display="";
        document.getElementById("id_logoutBtn").style.display="none";
    }
});