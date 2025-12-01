console.log('js error api loaded');
var baseUrl = '/error_reporter_api/api.php';

window.onerror = function (msg, url, lineNo, columnNo, error) {
    if (typeof (SW_BS) != "undefined") {
        if (!SW_BS.isInit) {
            SW_BS.init();
        }
        if (SW_BS.browser.name == 'Microsoft Internet Explorer' && SW_BS.browser.version < 12) {
            return;
        }
    }
    console.log('error');
    var location = getLocation(url);
        if (location.hostname !== 't5.moscowcitysale.ru' && location.hostname !== window.location.hostname) {
            return;
    } else if (url.indexOf('//') === 0) {
        return;
    }

    if (error) {
        var stack = error.stack;
        if (stack !== '') {
            console.log(error);
            ajax(
                baseUrl,
                'POST',
                {stack: stack, type: 'js', name: msg}
            );
        }
    }
    return false;
};

function ajax(url, type, data) {
    console.log('ajax send');
    if (typeof($) === "undefined") {
        var xhr = new XMLHttpRequest();
        xhr.open(type, url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(data));
    } else {
        $.ajax({
            url: url,
            method: type,
            data: data
        });
    }
}

window.formErrorApi = function (data, form_name, crm_http_code) {
    if (data === undefined) {
        data = null;
    }
    if (typeof data == "string") {
        try {
            data = JSON.parse(data);
        } catch (e) {}
    }
    ajax(
        baseUrl,
        'POST',
        {
            stack: data,
            type: 'form',
            form_name: form_name,
            crm_http_code: crm_http_code,
        }
    );
};

function isValidUrl(url) {
    var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
    return objRE.test(url);
}

function getLocation(url) {
    var l = document.createElement("a");
    l.href = url;
    return l;
}