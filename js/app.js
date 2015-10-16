chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){
    var click_event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    switch(request.action){
        case 'NEXT-MK':
            document.getElementsByClassName('skipControl__next')[0].dispatchEvent(click_event);
            break;
        case 'PREV-MK':
            document.getElementsByClassName('skipControl__previous')[0].dispatchEvent(click_event);
            break;
        case 'STOP-MK':
            if ( document.getElementsByClassName('playing').length > 0 )
                document.getElementsByClassName('playControl')[0].dispatchEvent(click_event);
            break;
        case 'PLAY-PAUSE-MK':
            document.getElementsByClassName('playControl')[0].dispatchEvent(click_event);
            break;
    }
});