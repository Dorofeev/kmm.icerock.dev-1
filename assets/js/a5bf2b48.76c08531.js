(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[578],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=m(r),u=i,k=f["".concat(c,".").concat(u)]||f[u]||s[u]||o;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4911:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a={sidebar_position:4},l={unversionedId:"for-ios-devs/stacktraces",id:"for-ios-devs/stacktraces",isDocsHomePage:!1,title:"Stacktrace",description:"\u041f\u0440\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432 kotlin \u043a\u043e\u0434\u0435 \u0432 \u043b\u043e\u0433 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u043e\u0448\u0435\u043d stacktrace \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f (exception).",source:"@site/docs/for-ios-devs/stacktraces.md",sourceDirName:"for-ios-devs",slug:"/for-ios-devs/stacktraces",permalink:"/docs/for-ios-devs/stacktraces",editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/master/docs/for-ios-devs/stacktraces.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u041a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u0438\u043c\u0435\u043d \u043d\u0430 iOS",permalink:"/docs/for-ios-devs/signature-conflict"},next:{title:"\u041f\u0430\u0434\u0435\u043d\u0438\u0435 Gradle daemon",permalink:"/docs/problem-solving/gradle-daemon-crash"}},c=[],m={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432 kotlin \u043a\u043e\u0434\u0435 \u0432 \u043b\u043e\u0433 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u043e\u0448\u0435\u043d stacktrace \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f (exception).\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Function doesn't have or inherit @Throws annotation and thus exception isn't propagated from Kotlin to Objective-C/Swift as NSError.\nIt is considered unexpected and unhandled instead. Program will be terminated.\nUncaught Kotlin exception: kotlin.NullPointerException\n    at 0   MultiPlatformLibrary                0x00000001063132f3 kfun:kotlin.Throwable#<init>(){} + 67 (/Users/teamcity1/teamcity_work/11ac87a349af04d5/runtime/src/main/kotlin/kotlin/Throwable.kt:27:21)\n    at 1   MultiPlatformLibrary                0x000000010630b7dc kfun:kotlin.Exception#<init>(){} + 60 (/Users/teamcity1/teamcity_work/11ac87a349af04d5/runtime/src/main/kotlin/kotlin/Exceptions.kt:21:28)\n    at 2   MultiPlatformLibrary                0x000000010630ba4c kfun:kotlin.RuntimeException#<init>(){} + 60 (/Users/teamcity1/teamcity_work/11ac87a349af04d5/runtime/src/main/kotlin/kotlin/Exceptions.kt:32:28)\n    at 3   MultiPlatformLibrary                0x000000010630bcbc kfun:kotlin.NullPointerException#<init>(){} + 60 (/Users/teamcity1/teamcity_work/11ac87a349af04d5/runtime/src/main/kotlin/kotlin/Exceptions.kt:43:28)\n    at 4   MultiPlatformLibrary                0x000000010636714c ThrowNullPointerException + 124 (/Users/teamcity1/teamcity_work/11ac87a349af04d5/runtime/src/main/kotlin/kotlin/native/internal/RuntimeUtils.kt:13:11)\n    at 5   MultiPlatformLibrary                0x00000001059a4d1e kfun:dev.icerock.library.feature.information.presentation.InformationFilterViewModel.<init>$lambda-2#internal + 382 (/Developer/app-mobile/mpp-library/feature/information/src/commonMain/kotlin/ru/app/library/feature/information/presentation/InformationFilterViewModel.kt:36:86)\n    at 6   MultiPlatformLibrary                0x00000001059a5bb5 kfun:dev.icerock.library.feature.information.presentation.InformationFilterViewModel.$<init>$lambda-2$FUNCTION_REFERENCE$435.invoke#internal + 181 (/Developer/app-mobile/mpp-library/feature/information/src/commonMain/kotlin/ru/app/library/feature/information/presentation/InformationFilterViewModel.kt:36:62)\n    at 7   MultiPlatformLibrary                0x000000010659c5b8 kfun:dev.icerock.moko.mvvm.livedata#map@dev.icerock.moko.mvvm.livedata.LiveData<0:0>(kotlin.Function1<0:0,0:1>){0\xa7<kotlin.Any?>;1\xa7<kotlin.Any?>}dev.icerock.moko.mvvm.livedata.LiveData<0:1> + 424 (/Users/runner/work/moko-mvvm/moko-mvvm/mvvm-livedata/src/commonMain/kotlin/dev/icerock/moko/mvvm/livedata/LiveDataTransforms.kt:8:43)\n    at 8   MultiPlatformLibrary                0x00000001059a3767 kfun:dev.icerock.library.feature.information.presentation.InformationFilterViewModel#<init>(dev.icerock.moko.mvvm.dispatcher.EventsDispatcher<dev.icerock.library.feature.information.presentation.InformationFilterViewModel.EventsListener>;dev.icerock.components.filter.FilterViewModel.FilterRepository;dev.icerock.library.feature.information.di.Strings){} + 3047 (/Developer/app-mobile/mpp-library/feature/information/src/commonMain/kotlin/ru/app/library/feature/information/presentation/InformationFilterViewModel.kt:36:58)\n    at 9   MultiPlatformLibrary                0x000000010599b8fd kfun:dev.icerock.library.feature.information.di.InformationFactory#createInformationFilterViewModel(dev.icerock.moko.mvvm.dispatcher.EventsDispatcher<dev.icerock.library.feature.information.presentation.InformationFilterViewModel.EventsListener>){}dev.icerock.library.feature.information.presentation.InformationFilterViewModel + 493 (/Developer/app-mobile/mpp-library/feature/information/src/commonMain/kotlin/ru/app/library/feature/information/di/InformationFactory.kt:87:37)\n    at 10  MultiPlatformLibrary                0x0000000105cfc865 objc2kotlin.1086 + 277 (/<compiler-generated>:1:0)\n    at 11  mokoApp                             0x00000001045f2af8 $s7mokoApp22InformationCoordinatorC14routeToFiltersyyFTo + 24\n    at 12  MultiPlatformLibrary                0x0000000105cf8e3f objc2kotlin.1031 + 911\n    at 13  MultiPlatformLibrary                0x00000001059ab9f8 kfun:dev.icerock.library.feature.information.presentation.InformationViewModel.$onFilterTap$lambda-2$FUNCTION_REFERENCE$442.invoke#internal + 72 (/Developer/app-mobile/mpp-library/feature/information/src/commonMain/kotlin/ru/app/library/feature/information/presentation/InformationViewModel.kt:66:40)\n    at 14  MultiPlatformLibrary                0x00000001059aba71 kfun:dev.icerock.library.feature.information.presentation.InformationViewModel.$onFilterTap$lambda-2$FUNCTION_REFERENCE$442.$<bridge-UNNN>invoke(-1:0){}#internal + 97 (/Developer/app-mobile/mpp-library/feature/information/src/commonMain/kotlin/ru/app/library/feature/information/presentation/InformationViewModel.kt:66:40)\n    at 15  MultiPlatformLibrary                0x0000000106588939 kfun:dev.icerock.moko.mvvm.dispatcher.EventsDispatcher.dispatchEvent$lambda-0#internal + 233 (/Users/runner/work/moko-mvvm/moko-mvvm/mvvm-core/src/iosMain/kotlin/dev/icerock/moko/mvvm/dispatcher/EventsDispatcher.kt:48:13)\n    at 16  MultiPlatformLibrary                0x0000000106588ae4 kfun:dev.icerock.moko.mvvm.dispatcher.EventsDispatcher.$dispatchEvent$lambda-0$FUNCTION_REFERENCE$0.invoke#internal + 68 (/Users/runner/work/moko-mvvm/moko-mvvm/mvvm-core/src/iosMain/kotlin/dev/icerock/moko/mvvm/dispatcher/EventsDispatcher.kt:47:31)\n    at 17  MultiPlatformLibrary                0x0000000106588b40 kfun:dev.icerock.moko.mvvm.dispatcher.EventsDispatcher.$dispatchEvent$lambda-0$FUNCTION_REFERENCE$0.$<bridge-UNN>invoke(){}#internal + 64 (/Users/runner/work/moko-mvvm/moko-mvvm/mvvm-core/src/iosMain/kotlin/dev/icerock/moko/mvvm/dispatcher/EventsDispatcher.kt:47:31)\n    at 18  MultiPlatformLibrary                0x0000000106588c29 _6465762e696365726f636b2e6d6f6b6f3a6d76766d2d636f7265_knbridge4 + 185 (/Users/runner/work/moko-mvvm/moko-mvvm/mvvm-core/src/iosMain/kotlin/dev/icerock/moko/mvvm/dispatcher/EventsDispatcher.kt:47:31)\n    at 19  libdispatch.dylib                   0x000000010aa2b7ec _dispatch_call_block_and_release + 12\n    at 20  libdispatch.dylib                   0x000000010aa2c9c8 _dispatch_client_callout + 8\n    at 21  libdispatch.dylib                   0x000000010aa3ae75 _dispatch_main_queue_callback_4CF + 1152\n    at 22  CoreFoundation                      0x00007fff2038fdbb __CFRUNLOOP_IS_SERVICING_THE_MAIN_DISPATCH_QUEUE__ + 9\n    at 23  CoreFoundation                      0x00007fff2038a63e __CFRunLoopRun + 2685\n    at 24  CoreFoundation                      0x00007fff203896d6 CFRunLoopRunSpecific + 567\n    at 25  GraphicsServices                    0x00007fff2c257db3 GSEventRunModal + 139\n    at 26  UIKitCore                           0x00007fff24696cf7 -[UIApplication _run] + 912\n    at 27  UIKitCore                           0x00007fff2469bba8 UIApplicationMain + 101\n    at 28  mokoApp                             0x00000001045bf758 main + 56 (/Developer/app-mobile/ios-app/src/AppDelegate.swift:<unknown>)\n    at 29  libdyld.dylib                       0x00007fff2025a3e9 start + 1\nCoreSimulator 732.18.6 - Device: iPhone 12 mini (D5DBD7AE-E94F-4FAE-9B07-C00C4B32F504) - Runtime: iOS 14.4 (18D46) - DeviceType: iPhone 12 mini\n")),(0,o.kt)("p",null,"\u0412 stacktrace \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0436\u043d\u044b\u0445 \u0432\u0435\u0449\u0435\u0439:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Uncaught Kotlin exception: kotlin.NullPointerException")," - \u043a\u0430\u043a\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430. \u0417\u0434\u0435\u0441\u044c \u043c\u044b \u0432\u0438\u0434\u0438\u043c \u0447\u0442\u043e \u043d\u0435 \u0431\u044b\u043b \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d (\u043d\u0435 \u043e\u0442\u043b\u043e\u0432\u043b\u0435\u043d try catch \u0431\u043b\u043e\u043a\u043e\u043c) \u044d\u043a\u0441\u0435\u043f\u0448\u0435\u043d ",(0,o.kt)("inlineCode",{parentName:"li"},"kotlin.NullPointerException"),". \u041e\u043d \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0447\u0442\u043e \u0442\u0430\u043c, \u0433\u0434\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c null, \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043e\u043a\u0430\u0437\u0430\u043b\u0441\u044f null."),(0,o.kt)("li",{parentName:"ol"},"\u0412 \u0441\u0442\u0435\u043a\u0442\u0440\u0435\u0439\u0441\u0435 \u043d\u0430 4 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f ",(0,o.kt)("inlineCode",{parentName:"li"},"ThrowNullPointerException")," - \u044d\u0442\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440 \u0441\u0442\u0430\u0432\u0438\u0442 \u0432\u043e \u0432\u0441\u0435 \u043c\u0435\u0441\u0442\u0430 \u0447\u0442\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u043c\u0435\u0447\u0435\u043d\u044b \u043a\u0430\u043a \u043d\u0435 \u043d\u0443\u043b\u043b\u0430\u0431\u043b. \u0418\u043c\u0435\u043d\u043d\u043e \u0432 \u044d\u0442\u043e\u043c \u043c\u0435\u0442\u043e\u0434\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c null \u0438\u043b\u0438 \u0436\u0435 \u0442\u0430\u043c \u043e\u0431\u044a\u0435\u043a\u0442. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0441\u043b\u0438 \u0442\u0430\u043c null - \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432\u044b\u0431\u0440\u043e\u0441 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"li"},"kotlin.NullPointerException"),"."),(0,o.kt)("li",{parentName:"ol"},"\u0412\u0441\u0435 \u0447\u0442\u043e \u0432\u044b\u0448\u0435 ",(0,o.kt)("inlineCode",{parentName:"li"},"ThrowNullPointerException")," - \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u044b \u0432\u0441\u0435\u0439 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 exception'\u043e\u0432 (\u0432\u044b\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,o.kt)("inlineCode",{parentName:"li"},"kotlin.NullPointerException"),", \u0430 \u0437\u043d\u0430\u0447\u0438\u0442 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0431\u044a\u0435\u043a\u0442 \u044d\u0442\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432\u0441\u0435 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u044b \u0441\u0443\u043f\u0435\u0440\u043a\u043b\u0430\u0441\u0441\u043e\u0432)."),(0,o.kt)("li",{parentName:"ol"},"\u041f\u0440\u044f\u043c\u043e \u043f\u043e\u0434 ",(0,o.kt)("inlineCode",{parentName:"li"},"ThrowNullPointerException")," \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043c\u0435\u0441\u0442\u043e, \u0433\u0434\u0435 \u0432 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 - \u0438\u043c\u0435\u043d\u043d\u043e \u0442\u0443\u0434\u0430 \u043d\u0443\u0436\u043d\u043e \u0438\u0434\u0442\u0438 \u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c. \u0422\u0430\u043c \u0436\u0435 \u0443\u043a\u0430\u0437\u0430\u043d \u0438 \u0444\u0430\u0439\u043b \u0438 \u0441\u0442\u0440\u043e\u043a\u0430 - ",(0,o.kt)("inlineCode",{parentName:"li"},"InformationFilterViewModel.kt:36"))),(0,o.kt)("p",null,"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u0435\u0439\u0441\u0435 \u043f\u043e \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u043b\u0441\u044f \u043a\u043e\u0434:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"val categoryField: LiveData<FilterField> = fieldsMap.map { it[CATEGORY_FIELD_KEY]!! }\n")),(0,o.kt)("p",null,"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u0434\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f force-cast (",(0,o.kt)("inlineCode",{parentName:"p"},"!!"),") - \u0442\u043e \u0435\u0441\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u043b \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0443 \u0447\u0442\u043e \u0442\u0443\u0442 \u0442\u043e\u0447\u043d\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 null. \u041d\u043e \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u043a\u043b\u044e\u0447\u0443 \u043e\u043a\u0430\u0437\u0430\u043b\u0441\u044f \u0432\u0441\u0435 \u0442\u0430\u043a\u0438 null \u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u043b \u0432\u044b\u043b\u0435\u0442."))}p.isMDXComponent=!0}}]);