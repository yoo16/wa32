var APIKEY = "AIzaSyAt2EBAy3GXCJk6-yaXjcfG78pDLs1LMf8";
let channelID = "UCOB29LYF5F7Jhxe-D7E8Aag";

function onJSClientLoad() {
    gapi.client.setApiKey(APIKEY);
    gapi.client.load('youtube', 'v3', ready);
}

function ready() {
    $('#keyword').val(channelID);
    $('#searchChannelBtn').on('click', function () {
        channelID = $('#keyword').val();
        if (!channelID) return;
        var requestOptions = {
            id: channelID,
            part: "id, snippet, brandingSettings, contentDetails, invideoPromotion, statistics, topicDetails"
        };
    
        var request = gapi.client.request({
            path: "/youtube/v3/channels",
            params: requestOptions
        });
        request.execute(function (resp) {
            output(resp);
        });

        let columns = {
            snippet: {
                title: { htmlId: 'title', label: 'チャンネルタイトル' },
                publishedAt: { htmlId: 'publishedAt', label: '登録日' },
                description: { htmlId: 'description', label: 'チャンネル説明' },
            }
        }
    
        function output(data) {
            let pageInfo = data.pageInfo;
    
            let table = $('<table>').addClass('table');
            let s = '';
            $.each(data.items, function (i, item) {
                let tr = $('<tr>');
                let th = $('<th>').html('Channel ID');
                let td = $('<td>').html(item.id);
                tr.append(th);
                tr.append(td);
                table.append(tr);
    
                if (item.snippet) {
                    let snippet = item.snippet;
                    $.each(columns.snippet, function (key, value) {
                        tr = $('<tr>');
                        th = $('<th>').html(value.label);
                        td = $('<td>').html(item.snippet[key]);
                        tr.append(th);
                        tr.append(td);
                        table.append(tr);
                    })
                    //thumbnail
                    if (snippet.thumbnails && snippet.thumbnails.default.url) {
                        img = $('img').attr('src', snippet.thumbnails.default);
                        tr = $('<tr>');
                        th = $('th').html('Thumbnail');
                        td = $('td').append(img);
                        tr.append(th);
                        tr.append(td);
                        table.append(tr);
                    }
                }
    
                /* brandingSettings */
                if (item.brandingSettings) {
                    var brandingSettings = item.brandingSettings;
                    for (let key in brandingSettings) {
                        console.log(key);
                        tr = $('<tr>');
                        th = $('th').html('');
                        td = $('td').append(key);
                        tr.append(th);
                        tr.append(td);
                        table.append(tr);
                    }
                }
                /* contentDetails */
                if (item.contentDetails) {
                    s += "<li><b>contentDetails</b>:<ul>";
                    var contentDetails = item.contentDetails;
                    var googlePlusUserId = contentDetails.googlePlusUserId;
                    var relatedPlaylists = contentDetails.relatedPlaylists;
                    s += (googlePlusUserId) ? "<li>Google+のID（googlePlusUserId）:<a href='https://plus.google.com/'>" + googlePlusUserId + "</a></li>" : "";
                    if (relatedPlaylists) {
                        s += "<li>relatedPlaylists:<ul>";
                        s += (relatedPlaylists.favorites) ? "<li>お気に入りの動画（favorites）:<a href='http://www.youtube.com/playlist?list=" + relatedPlaylists.favorites + "'>" + relatedPlaylists.favorites + "</a></li>" : "";
                        s += (relatedPlaylists.likes) ? "<li>評価の高い動画（likes）:<a href='http://www.youtube.com/playlist?list=" + relatedPlaylists.likes + "'>" + relatedPlaylists.likes + "</a></li>" : "";
                        s += (relatedPlaylists.uploads) ? "<li>アップロード動画 （uploads）:<a href='http://www.youtube.com/playlist?list=" + relatedPlaylists.uploads + "'>" + relatedPlaylists.uploads + "</a></li>" : "";
                        /* 以下は認証しないと取れない */
                        s += (relatedPlaylists.watchHistory) ? "<li>閲覧履歴（watchHistory）:<a href='http://www.youtube.com/playlist?list=" + relatedPlaylists.watchHistory + "'>" + relatedPlaylists.watchHistory + "</a></li>" : "";
                        s += (relatedPlaylists.watchLater) ? "<li>後で見る（watchLater）:<a href='http://www.youtube.com/playlist?list=" + relatedPlaylists.watchLater + "'>" + relatedPlaylists.watchLater + "</a></li>" : "";
                        s += "</ul></li>";
                    }
                    s += "</ul></li>";
                }
                /* statistics */
                if (item.statistics) {
                    var statistics = item.statistics;
                    s += "<li><b>statistics</b>:";
                    s += "<ul>";
                    s += (statistics.commentCount) ? "<li>コメント数（commentCount）:" + statistics.commentCount + "</li>" : "";
                    s += (statistics.subscriberCount) ? "<li>登録者数（subscriberCount）:" + statistics.subscriberCount + "</li>" : "";
                    s += (statistics.videoCount) ? "<li>動画数（videoCount）:" + statistics.videoCount + "</li>" : "";
                    s += (statistics.viewCount) ? "<li>再生回数（viewCount）:" + statistics.viewCount + "</li>" : "";
                    s += "</ul>";
                    s += "</li>";
                }
            });
    
            $('#results').append(table);
            $("#results").append("<h2>channels</h2><ul>" + s + "</ul>");
        }
        function fSize(ary) {
            var cnt = 0;
            for (var i in ary) {
                cnt++;
            }
            return cnt;
        }
    })

}

