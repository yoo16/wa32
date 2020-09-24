let channelID = "UCMMEwnArQWFNU1VrRlbIDtg";
let playListHref = 'http://www.youtube.com/playlist?list=';
let table;

const columns = {
    snippet: {
        title: { htmlId: 'title', label: 'チャンネルタイトル' },
        publishedAt: { htmlId: 'publishedAt', label: '登録日' },
        description: { htmlId: 'description', label: 'チャンネル説明' },
    },
    playList: {
        favorites: { label: 'お気に入りの動画' },
        likes: { label: '評価の高い動画' },
        uploads: { label: 'アップロード動画' },
    },
    statistics: {
        commentCount: { label: 'コメント数' },
        subscriberCount: { label: '登録者数' },
        videoCount: { label: '動画数' },
        viewCount: { label: '再生回数数' },
    }
}

function onJSClientLoad() {
    gapi.client.setApiKey(APIKEY);
    gapi.client.load('youtube', 'v3', ready);
}

function ready() {
    console.log(channelID);
    $('#keyword').val(channelID);
    $('#searchChannelBtn').on('click', function () {
        $('#results').html('');
        table = $('<table>').addClass('table');

        channelID = $('#keyword').val();
        if (!channelID) return;
        let requestOptions = {
            id: channelID,
            part: "id, snippet, brandingSettings, contentDetails, invideoPromotion, statistics, topicDetails"
        };

        let request = gapi.client.request({
            path: "/youtube/v3/channels",
            params: requestOptions
        });

        request.execute(function (resp) {
            output(resp);
        });

        function output(data) {
            $.each(data.items, function (index, item) {
                renderChannel(item);
                renderSnippet(item);
                renderBrandingSettings(item);
                renderContentDetails(item);
                renderStatistics(item);
            });
            $('#results').append(table);
        }

        function renderSnippet(item) {
            if (item.snippet) {
                let snippet = item.snippet;
                $.each(columns.snippet, function (key, value) {
                    let tr = $('<tr>');
                    let th = $('<th>').html(value.label);
                    let td = $('<td>').html(item.snippet[key]);
                    tr.append(th);
                    tr.append(td);
                    table.append(tr);
                })
                //thumbnail
                if (snippet.thumbnails && snippet.thumbnails.default.url) {
                    $.each(snippet.thumbnails, function (key, value) {
                        let img = new Image()
                        $(img).attr('src', value.url).on('load');
                        let tr = $('<tr>');
                        let th = $('<th>').html('Thumbnail');
                        let td = $('<td>').append(img);
                        tr.append(th);
                        tr.append(td);
                        table.append(tr);
                    });
                }
            }
        }

        function renderBrandingSettings(item) {
            if (item.brandingSettings) {
                $.each(item.brandingSettings, function (key, value) {
                    let tr = $('<tr>');
                    let th = $('<th>').html('');
                    let td = $('<td>').append(key);
                    tr.append(th);
                    tr.append(td);
                    table.append(tr);
                });
            }
        }

        function renderContentDetails(item) {
            if (item.contentDetails) {
                let contentDetails = item.contentDetails;
                let relatedPlaylists = contentDetails.relatedPlaylists;
                if (relatedPlaylists) {
                    $.each(columns.playList, function (key, playList) {
                        let tr = $('<tr>');
                        let th = $('<th>');
                        let td = $('<td>');

                        let playListValue = relatedPlaylists[key];
                        let href = playListHref + playListValue;

                        th.append(playList.label);
                        td.append($('<a>').attr('href', href).text(playListValue));

                        tr.append(th);
                        tr.append(td);
                        table.append(tr);
                    });
                }
            }
        }

        function renderStatistics(item) {
            if (item.statistics) {
                let statistics = item.statistics;
                $.each(columns.statistics, function (key, value) {
                    let tr = $('<tr>');
                    let th = $('<th>');
                    let td = $('<td>');

                    th.append(value.label);
                    td.append(statistics[key]);

                    tr.append(th);
                    tr.append(td);
                    table.append(tr)
                });
            }
        }

        function renderChannel(item) {
            let tr = $('<tr>');
            let th = $('<th>').html('Channel ID');
            let td = $('<td>').html(item.id);
            tr.append(th);
            tr.append(td);
            table.append(tr);
        }

    })

}

