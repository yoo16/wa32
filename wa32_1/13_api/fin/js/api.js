//各イベントサービスのURLを配列へ
//コールバックは、各イベントサービス名にします
var urls = [
    "https://api.atnd.org/events/?keyword_or=東京都&format=jsonp&callback=atnd",
    "https://api.doorkeeper.jp/events?q=東京都&callback=doorkeeper",
    "https://connpass.com/api/v1/event/?keyword_or=東京都&callback=connpass"
]
var btn = document.getElementById('btn');
var eventList = document.getElementById('eventlist');

//「検索ボタン」クリック時にJSONデータ読み込み
btn.addEventListener('click', function () {
    //「name=app」のラジオボタン要素を全取得
    var check = document.getElementsByName('app');

    eventList.innerHTML = "データを検索中…";

    //チェックの入ったラジオボタンを検出
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            var script = document.createElement('script');

            //チェックされたイベントサービスでJSONデータ取得
            script.src = urls[check[i].value];
            document.body.appendChild(script);
            document.body.removeChild(script);
        }
    }
})

//ATNDのJSONデータ取得
function atnd(data) {
    eventList.innerHTML = "";

    for (var i = 0; i < data.events.length; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');

        a.textContent = data.events[i].event.title;
        a.href = data.events[i].event.event_url;
        a.target = "_blank";
        li.appendChild(a);
        eventList.appendChild(li);
    }
}

//DoorkeeperのJSONデータ取得
function doorkeeper(data) {
    eventList.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');

        a.textContent = data[i].event.title;
        a.href = data[i].event.public_url;
        a.target = "_blank";
        li.appendChild(a);
        eventList.appendChild(li);
    }
}

//connpassのJSONデータ取得
function connpass(data) {
    eventList.innerHTML = "";

    for (var i = 0; i < data.events.length; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');

        a.textContent = data.events[i].title;
        a.href = data.events[i].event_url;
        a.target = "_blank";
        li.appendChild(a);
        eventList.appendChild(li);
    }
}
