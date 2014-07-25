Ext.define('EMSPEED.common.data', {
    singleton: true,
    alternateClassName: 'data',

    getData: function (p) {
        var theUrl = data.ajaxUrl(p.service, p.method);
        $.ajax(data.ajaxOptions({
            url: theUrl,
            data: p.params
        }))
        .done(function (data) {
            p.callback(data);
        });
    },

    ajaxUrl: function (theService, theMethod) {
        return data.ajaxUrlOptions({ service: theService, method: theMethod });
    },

    ajaxUrlOptions: function (options) {
        var port = options.port || '8095',
            host = options.host || location.hostname,
            type = options.type || 'json';
        return 'http://' + host + ':' + port + '/' + options.service + '.svc/' + type + '/' + options.method;
    },

    ajaxOptions: function (options) {
        if (options === undefined) {
            return 0;
        }

        var theDataType = options.dataType || 'json';

        theAjaxObject = {
            url: options.url,
            type: options.type || 'POST',
            crossDomain: options.crossDomain || true,
            data: Ext.encode(options.data),
            contentType: options.contentType || "application/json; charset=utf-8",
            xhrFields: options.xhrFields || { withCredentials: true },
            async: options.asyc || true,
            beforeSend: function (xhr) {
                if ("withCredentials" in xhr) {
                    this.withCredentials = true;
                }
            },
            error: options.error || function (xhr, status, errorThrown) {
                data.constructErrorMessage(xhr, this.url);
                throw Error;
            }
        };

        if (theDataType !== 'void') {
            theAjaxObject.dataType = theDataType;
        }

        return theAjaxObject;
    },

    constructErrorMessage: function (data, url) {
        if (data.status == 500) {
            var e = Ext.decode(data.responseText);
            globalError = e.message + ' ' + e.correlationId;
            globalErrorUrl = url;
        }
        else {
            globalError = data.status + ' ' + data.statusText + ': ' + url;
        }
    }

});