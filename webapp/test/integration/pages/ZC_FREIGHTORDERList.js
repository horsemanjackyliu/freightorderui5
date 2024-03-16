sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'freightorderattachmgt',
            componentId: 'ZC_FREIGHTORDERList',
            contextPath: '/ZC_FREIGHTORDER'
        },
        CustomPageDefinitions
    );
});