var scripts = document.getElementsByTagName("script")
var currentScriptPath = scripts[scripts.length-1].src;
var templatePath = currentScriptPath.replace('inline-confirm.js', 'inline-confirm.tpl.html')

angular.module('inlineConfirm', [] ).directive('inlineConfirm', function ($parse) {
    return {
        restrict: 'EA',
        scope: {
            "text": "@text",
            "yesText": "@yestext",
            "noText": "@notext",
            "type": "@type",
            "confirmFunction": "&confirmfunction",
            "mainClass": "@mainclass",
            "actionClass": "@actionclass",
            "confirmClass": "@confirmclass",
            "hideOnConfirm": "@hideonconfirm",
        },
        templateUrl: templatePath, // load the template file
        compile: function(element, attrs) {
            // Set default values
            if (!attrs.hideonconfirm) { attrs.hideonconfirm = false; }
            if (!attrs.yestext) { attrs.yestext = 'Yes'; }
            if (!attrs.notext) { attrs.notext = 'No'; }
        },
        controller: function ( $scope ) {
            $scope.show = true;

            $scope.showConfirmOptions = function() {
                $scope.showConfirm = true;
            }

            $scope.noClick = function(e) {
                $scope.showConfirm = false;
                e.preventDefault();
                e.stopPropagation();
            }

            $scope.yesClick = function(e) {
                $scope.showConfirm = false;
                $scope.confirmFunction();
                $scope.show = false;
            }
        }
    };
});
