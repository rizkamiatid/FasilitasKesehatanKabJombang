// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/nls/strings":{_widgetLabel:"\u5b97\u5730\u8d77\u8349\u5668",newTraverseButtonLabel:"\u542f\u52a8\u65b0\u5bfc\u7ebf",invalidConfigMsg:"\u65e0\u6548\u7684\u914d\u7f6e",geometryServiceURLNotFoundMSG:"\u65e0\u6cd5\u83b7\u53d6\u51e0\u4f55\u670d\u52a1 URL",editTraverseButtonLabel:"\u7f16\u8f91\u5bfc\u7ebf",mapTooltipForStartNewTraverse:"\u8bf7\u9009\u62e9\u5730\u56fe\u4e0a\u7684\u4e00\u4e2a\u70b9\u6216\u952e\u5165\u4ee5\u4e0b\u5185\u5bb9\u6765\u5f00\u59cb",mapTooltipForEditNewTraverse:"\u8bf7\u9009\u62e9\u8981\u7f16\u8f91\u7684\u5b97\u5730",
mapTooltipForUpdateStartPoint:"\u5355\u51fb\u4ee5\u66f4\u65b0\u8d77\u70b9",mapTooltipForScreenDigitization:"\u5355\u51fb\u4ee5\u6dfb\u52a0\u5b97\u5730\u70b9",mapTooltipForUpdatingRotaionPoint:"\u5355\u51fb\u4ee5\u66f4\u65b0\u65cb\u8f6c\u70b9",mapTooltipForRotate:"\u62d6\u52a8\u4ee5\u65cb\u8f6c",mapTooltipForScale:"\u62d6\u52a8\u4ee5\u7f29\u653e",backButtonTooltip:"\u8fd4\u56de",newTraverseTitle:"\u65b0\u5efa\u5bfc\u7ebf",editTraverseTitle:"\u7f16\u8f91\u5bfc\u7ebf",clearingDataConfirmationMessage:"\u5c06\u653e\u5f03\u66f4\u6539\uff0c\u662f\u5426\u7ee7\u7eed?",
unableToFetchParcelMessage:"\u65e0\u6cd5\u83b7\u53d6\u5b97\u5730\u3002",unableToFetchParcelLinesMessage:"\u65e0\u6cd5\u83b7\u53d6\u5b97\u5730\u7ebf\u3002",planSettings:{planSettingsTitle:"\u8bbe\u7f6e",directionOrAngleTypeLabel:"\u65b9\u5411\u6216\u89d2\u5ea6\u7c7b\u578b",directionOrAngleUnitsLabel:"\u65b9\u5411\u6216\u89d2\u5ea6\u5355\u4f4d",distanceAndLengthUnitsLabel:"\u8ddd\u79bb\u548c\u957f\u5ea6\u5355\u4f4d",areaUnitsLabel:"\u9762\u79ef\u5355\u4f4d",circularCurveParameters:"\u5706\u66f2\u7ebf\u53c2\u6570",
northAzimuth:"\u5317\u65b9\u4f4d\u89d2",southAzimuth:"\u5357\u65b9\u4f4d\u89d2",quadrantBearing:"\u8c61\u9650\u65b9\u4f4d\u89d2",radiusAndChordLength:"\u534a\u5f84\u548c\u5f26\u957f",radiusAndArcLength:"\u534a\u5f84\u548c\u5f27\u957f",expandGridTooltipText:"\u5c55\u5f00\u683c\u7f51",collapseGridTooltipText:"\u6298\u53e0\u683c\u7f51",zoomToLocationTooltipText:"\u7f29\u653e\u81f3\u4f4d\u7f6e",onScreenDigitizationTooltipText:"\u6570\u5b57\u5316",updateRotationPointTooltipText:"\u66f4\u65b0\u65cb\u8f6c\u70b9"},
traverseSettings:{bearingLabel:"\u65b9\u4f4d\u89d2",lengthLabel:"\u957f\u5ea6",radiusLabel:"\u534a\u5f84",noMiscloseCalculated:"\u672a\u8ba1\u7b97\u672a\u95ed\u5408",traverseMiscloseBearing:"\u672a\u95ed\u5408\u65b9\u4f4d\u89d2",traverseAccuracy:"\u7cbe\u5ea6",accuracyHigh:"\u9ad8",traverseDistance:"\u672a\u95ed\u5408\u8ddd\u79bb",traverseMiscloseRatio:"\u672a\u95ed\u5408\u6bd4\u7387",traverseStatedArea:"\u6307\u5b9a\u9762\u79ef",traverseCalculatedArea:"\u8ba1\u7b97\u7684\u9762\u79ef",addButtonTitle:"\u6dfb\u52a0",
deleteButtonTitle:"\u79fb\u9664"},parcelTools:{rotationToolLabel:"\u89d2\u5ea6",scaleToolLabel:"\u6bd4\u4f8b"},newTraverse:{invalidBearingMessage:"\u65b9\u4f4d\u89d2\u65e0\u6548\u3002",invalidLengthMessage:"\u957f\u5ea6\u65e0\u6548\u3002",invalidRadiusMessage:"\u534a\u5f84\u65e0\u6548\u3002",negativeLengthMessage:"\u4ec5\u5bf9\u66f2\u7ebf\u6709\u6548",enterValidValuesMessage:"\u8bf7\u8f93\u5165\u6709\u6548\u503c\u3002",enterValidParcelInfoMessage:"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u5b97\u5730\u4fe1\u606f\u4ee5\u8fdb\u884c\u4fdd\u5b58\u3002",
unableToDrawLineMessage:"\u65e0\u6cd5\u7ed8\u5236\u7ebf\u3002",invalidEndPointMessage:"\u7aef\u70b9\u65e0\u6548\uff0c\u65e0\u6cd5\u7ed8\u5236\u7ebf\u3002"},planInfo:{requiredText:"(\u5fc5\u586b)",optionalText:"(\u53ef\u9009)",parcelNamePlaceholderText:"\u5b97\u5730\u540d\u79f0",parcelDocumentTypeText:"\u6587\u6863\u7c7b\u578b",planNamePlaceholderText:"\u6d4b\u91cf\u56fe\u540d\u79f0",cancelButtonLabel:"\u53d6\u6d88",saveButtonLabel:"\u4fdd\u5b58",saveNonClosedParcelConfirmationMessage:"\u8f93\u5165\u7684\u5b97\u5730\u672a\u95ed\u5408\uff0c\u662f\u5426\u4ecd\u8981\u7ee7\u7eed\uff0c\u4ec5\u4fdd\u5b58\u5b97\u5730\u7ebf?",
unableToCreatePolygonParcel:"\u65e0\u6cd5\u521b\u5efa\u5b97\u5730\u9762\u3002",unableToSavePolygonParcel:"\u65e0\u6cd5\u4fdd\u5b58\u5b97\u5730\u9762\u3002",unableToSaveParcelLines:"\u65e0\u6cd5\u4fdd\u5b58\u5b97\u5730\u7ebf\u3002",unableToUpdateParcelLines:"\u65e0\u6cd5\u66f4\u65b0\u5b97\u5730\u7ebf\u3002",parcelSavedSuccessMessage:"\u5b97\u5730\u4fdd\u5b58\u6210\u529f\u3002",parcelDeletedSuccessMessage:"\u5b97\u5730\u5df2\u6210\u529f\u5220\u9664\u3002",parcelDeleteErrorMessage:"\u5220\u9664\u5b97\u5730\u65f6\u51fa\u73b0\u9519\u8bef\u3002",
enterValidParcelNameMessage:"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u5b97\u5730\u540d\u79f0\u3002",enterValidPlanNameMessage:"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u6d4b\u91cf\u56fe\u540d\u79f0\u3002",enterValidDocumentTypeMessage:"\u6587\u6863\u7c7b\u578b\u65e0\u6548\u3002",enterValidStatedAreaNameMessage:"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u6307\u5b9a\u9762\u79ef\u3002"},xyInput:{explanation:"\u5728\u5b97\u5730\u56fe\u5c42\u7684\u7a7a\u95f4\u53c2\u8003\u4e2d"},_localized:{}}});