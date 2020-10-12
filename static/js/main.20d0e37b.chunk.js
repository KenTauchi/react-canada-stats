(this["webpackJsonpcanada-stats"]=this["webpackJsonpcanada-stats"]||[]).push([[0],{130:function(e,t,a){e.exports=a(142)},135:function(e,t,a){},136:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return R}));var n=a(14),r=a.n(n),o=a(93),c=a.n(o),i=(a(135),a(73)),l=(a(136),a(57)),u=a(111),s=Object(u.a)([function(e){return e.dataTable}],(function(e){return e})),d=function(){var e=Object(l.e)((function(e){return e})),t=s(e);return r.a.createElement("div",{className:"data-table"},r.a.createElement("h3",null,"Data table "),r.a.createElement("span",null,"*Click province to see the data"),r.a.createElement("h3",null,"Province: ",t.province),r.a.createElement("h3",null,"Population: ",t.population))},p=Object(u.a)([function(e){return e.dataSet}],(function(e){return e})),h=a(91),v=a.n(h),m=a(115),f=function(e){return{type:"DATA_IMPORT",payload:e}},b=a(86),g=a(92),w=a(127),E=a(124);b.d(w.a),b.b.autoDispose=!0;var y=function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e})),a=p(t);console.log(t);var n=b.a("chartdiv",g.b);n.dataSource.updateCurrentData=!0,n.responsive.enabled=!0;try{n.geodata=E.a}catch(h){n.raiseCriticalError(new Error('Map geodata could not be loaded. Please download the latest <a href="https://www.amcharts.com/download/download-v4/">amcharts geodata</a> and extract its contents into the same directory as your amCharts files.'))}n.projection=new g.d.Mercator;var o=n.series.push(new g.c);o.data=a.data,o.heatRules.push({property:"fill",target:o.mapPolygons.template,min:n.colors.getIndex(1).brighten(1),max:n.colors.getIndex(1).brighten(-.3)}),o.useGeodata=!0;var c=n.createChild(g.a);c.series=o,c.align="right",c.width=b.c(25),c.marginRight=b.c(4),c.minValue=0,c.maxValue=4e7,c.valign="bottom";var i=c.valueAxis.axisRanges.create();i.value=c.minValue,i.label.text="Little";var u=c.valueAxis.axisRanges.create();u.value=c.maxValue,u.label.text="A lot!",c.valueAxis.renderer.labels.template.adapter.add("text",(function(e){return""}));var s=o.mapPolygons.template;return s.tooltipText="{name}",s.nonScalingStroke=!0,s.strokeWidth=.5,s.events.on("hit",(function(t){var n=t.target.dataItem.dataContext.id,r=t.target.dataItem.dataContext.name,o=a.data.find((function(e){return e.id===n})).value;e(function(e,t){return{type:"CLICK_GET",payload:{province:e,population:t}}}(r,o))})),s.states.create("hover").properties.fill=n.colors.getIndex(1).brighten(-.5),r.a.createElement("div",null,r.a.createElement("div",{id:"chartdiv",style:{width:"80%",height:"400px"}}),r.a.createElement("button",{onClick:function(){e(function(){var e=Object(m.a)(v.a.mark((function e(t,a){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/https://api.covid19tracker.ca/provinces").then((function(e){return e.json()})).catch((function(){return null}));case 2:n=e.sent,r=[],n.forEach((function(e){var t={id:"CA-"+e.code,value:e.population};r.push(t)})),t(f({desc:"Population Map (*hover over map)",data:r}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},"Show Poplulation Map"),r.a.createElement("button",{onClick:function(){return e(function(){var e=Object(m.a)(v.a.mark((function e(t,a){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://services9.arcgis.com/pJENMVYPQqZZe20v/arcgis/rest/services/Join_Features_to_Enriched_Population_Case_Data_By_Province_Polygon/FeatureServer/0/query?where=1%3D1&outFields=NAME,Abbreviation,Deaths&returnGeometry=false&outSR=4326&f=json").then((function(e){return e.json()})).catch((function(){return null}));case 2:n=e.sent,r=[],n.features.forEach((function(e){var t={id:"CA-"+e.attributes.Abbreviation,value:e.attributes.Deaths};r.push(t)})),t(f({desc:"COVID Death Toll Map (*hover over map)",data:r}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},"Show Covid Death Toll"),r.a.createElement("p",null,"amChart Source: https://github.com/bapex/react-amcharts-map/blob/master/src/App.js"),r.a.createElement("h1",null,a.desc),r.a.createElement(d,null))},x=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/react-canada-stats(/)?",component:y}))},j=function(){return r.a.createElement("main",null,r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(84),O=a(113),k=a(121),A=a(85),P={dataSet:{desc:"Please click the button to show data",data:[]}},_={province:"",population:""},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P.dataSet,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_IMPORT":return Object(A.a)(Object(A.a)({},e),{},{desc:t.payload.desc,data:t.payload.data});default:return e}},S=a(125),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLICK_GET":return Object(A.a)(Object(A.a)({},e),{},{province:t.payload.province,population:t.payload.population});default:return e}};var T,M=a(126).a(),R=(T=M,Object(C.d)(Object(C.c)({router:Object(O.b)(T),dataSet:D,dataTable:I}),Object(C.a)(Object(k.a)(T),S.a)));c.a.render(r.a.createElement(l.a,{store:R},r.a.createElement(O.a,{history:M},r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,4]]]);
//# sourceMappingURL=main.20d0e37b.chunk.js.map