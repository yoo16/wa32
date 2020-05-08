//$.support.cors = true;
let eventList = $('#eventList');

$('#eventSearchBtn').on('click', function () {
    let events = {
        doorkeeper : { url: 'https://api.doorkeeper.jp/events?q=', callback: doorkeeper },
        connpass: { url: 'https://connpass.com/api/v1/event/?keyword_or=', callback: connpass }
    }
    let eventKey = $('input[name=event]:checked').val();

    let event = events[eventKey];
    let url = event.url;
    url+= $('#word').val();

    eventList.text('データを検索中...');
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'jsonp',
        xhrFields: {
            withCredentials: true
        },
        success: function(result, textStatus, xhr) {
            eventList.html('');
            event.callback(result);
        },
        error: function(xhr, textStatus, error) {
            console.log(error);
        }
    });

    /**
     * callback doorkeeper
     *  
     * @param array values 
     */
    function doorkeeper(values) {
        //console.log(values);
        $.each(values, function(key, value){
            let li = $('<li></li>').addClass('list-group-item');
            let a = $('<a></a>', 
            {
                href: value.event.public_url,
                text: value.event.title,
                target: '_blank'
            });
            li.append(a);
            eventList.append(li);
        });
    }

    /**
     * callback connpass
     *  
     * @param array values 
     */
    function connpass(values) {
        //console.log(values);
        $.each(values.events, function(index, value){
            let li = $('<li></li>').addClass('list-group-item');
            let a = $('<a></a>', 
            {
                href: value.event_url,
                text: value.title,
                target: '_blank'
            });
            li.append(a);
            eventList.append(li);
        });
    }

})