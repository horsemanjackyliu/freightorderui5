sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'freightorderattachmgt/test/integration/FirstJourney',
		'freightorderattachmgt/test/integration/pages/ZC_FREIGHTORDERList',
		'freightorderattachmgt/test/integration/pages/ZC_FREIGHTORDERObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_FREIGHTORDERList, ZC_FREIGHTORDERObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('freightorderattachmgt') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_FREIGHTORDERList: ZC_FREIGHTORDERList,
					onTheZC_FREIGHTORDERObjectPage: ZC_FREIGHTORDERObjectPage
                }
            },
            opaJourney.run
        );
    }
);