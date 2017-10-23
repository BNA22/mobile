var app=function(){return angular.module("MyApp",["ionic","ui.router","ngResource","ngSanitize","custom.controllers","custom.services","datasourcejs","pascalprecht.translate","tmh.dynamicLocale","ui-notification"]).constant("LOCALES",{locales:{pt_br:"Portugues (Brasil)",en_us:"English"},preferredLocale:"pt_br"}).run(["$ionicPlatform",function(e){e.ready(function(){setTimeout(function(){navigator.splashscreen&&navigator.splashscreen.hide()},100),window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()})}]).config(["$httpProvider",function(e){var r=["$q","$rootScope",function(e,r){return{request:function(e){var r=JSON.parse(sessionStorage.getItem("_u"));return r&&r.token&&(e.headers["X-AUTH-TOKEN"]=r.token),e}}}];e.interceptors.push(r)}]).config(["$stateProvider","$urlRouterProvider","NotificationProvider",function(e,r,o){o.setOptions({delay:5e3,startTop:20,startRight:10,verticalSpacing:20,horizontalSpacing:20,positionX:"right",positionY:"top"}),e.state("index",{url:"",controller:"HomeController",templateUrl:"views/home.view.html"}).state("main",{url:"/",controller:"HomeController",templateUrl:"views/home.view.html"}).state("home",{url:"/home",controller:"HomeController",templateUrl:"views/home.view.html"}).state("home.pages",{url:"/{name:.*}",controller:"PageController",templateUrl:function(e){return"views/"+e.name+".view.html"}}).state("404",{url:"/error/404",controller:"PageController",templateUrl:function(e){return"views/error/404.view.html"}}).state("403",{url:"/error/403",controller:"PageController",templateUrl:function(e){return"views/error/403.view.html"}}),r.otherwise("/error/404")}]).config(["$translateProvider","tmhDynamicLocaleProvider",function(e,r){e.useMissingTranslationHandlerLog(),e.useStaticFilesLoader({prefix:"i18n/locale_",suffix:".json"}),e.registerAvailableLanguageKeys(["pt_br","en_us"],{"en*":"en_us","pt*":"pt_br","*":"pt_br"});var o=(window.navigator.userLanguage||window.navigator.language||"pt_br").replace("-","_");e.use(o.toLowerCase()),e.useSanitizeValueStrategy("escaped"),r.localeLocationPattern("plugins/angular-i18n/angular-locale_{{locale}}.js")}]).directive("crnValue",["$parse",function(e){return{restrict:"A",require:"^ngModel",link:function(r,o,t,n){var a;a=t.value?t.value:e(t.crnValue)(r),o.attr("data-evaluated",JSON.stringify(a)),o.bind("click",function(e){r.$apply(function(){n.$setViewValue(a)}.bind(o))})}}}]).controller("PageController",["$scope","$stateParams","$location","$http","$rootScope",function(e,r,o,t,n){app.registerEventsCronapi(e,$translate);for(var a in app.userEvents)e[a]=app.userEvents[a].bind(e);e.params=r,e.$http=t;var i=o.search();for(var l in i)i.hasOwnProperty(l)&&(e.params[l]=i[l]);registerComponentScripts()}]).run(["$rootScope","$state",function(e,r){e.$on("$stateChangeError",function(){if(arguments.length>=6){var e=arguments[5];404!==e.status&&403!==e.status||r.go(e.status.toString())}else r.go("404")}),e.$on("$stateChangeSuccess",function(){setTimeout(function(){$($(".icon.ion-plus-round").parent()).off("click"),$($(".icon.ion-plus-round").parent()).on("click",function(){$("[required]").removeClass("input-validation-error"),$("input:invalid").removeClass("input-validation-error")}),$($(".icon.ion-checkmark").parent()).off("click"),$($(".icon.ion-checkmark").parent()).on("click",function(){$("[required].ng-invalid-required, [required].ng-invalid, [required].ng-empty").addClass("input-validation-error"),$("input:invalid").addClass("input-validation-error")}),$("input").off("keydown"),$("input").on("keydown",function(){$(this).removeClass("input-validation-error")})},300)})}])}(window);app.userEvents={},app.config={},app.config.datasourceApiVersion=2,app.config.defaultRoute="/app",app.registerEventsCronapi=function(e,r){for(var o in app.userEvents)e[o]=app.userEvents[o].bind(e);e.vars={};try{cronapi&&(e.cronapi=cronapi,e.cronapi.$scope=e,e.safeApply=safeApply,r&&(e.cronapi.$translate=r))}catch(e){console.info("Not loaded cronapi functions"),console.info(e)}try{blockly&&(e.blockly=blockly)}catch(e){console.info("Not loaded blockly functions"),console.info(e)}},window.safeApply=function(e){var r=this.$root.$$phase;"$apply"==r||"$digest"==r?e&&"function"==typeof e&&e():this.$apply(e)};var registerComponentScripts=function(){$(".carousel-indicators li").on("click",function(){var e="#"+$(this).parent().parent().parent().attr("id"),r=$(e+" .carousel-indicators li").index(this);$(e+" #carousel-example-generic").carousel(r)})};