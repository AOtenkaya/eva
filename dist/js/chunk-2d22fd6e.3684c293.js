(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fd6e"],{ea73:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"form-element-textarea-demo"}},[a("textarea-default"),a("textarea-label"),a("textarea-counter"),a("textarea-width"),a("textarea-height")],1)},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Default","code-toggler":""}},[a("span",[e._v("To add a Textarea we have the component "),a("code",[e._v("vs-textarea")])]),a("div",{staticClass:"mt-5"},[a("vs-textarea",{model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),a("template",{slot:"codeContainer"},[e._v("\n<template>\n  <div>\n    <vs-textarea v-model=\"textarea\" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    textarea: '',\n  })\n}\n<\/script>\n        ")])],2)},o=[],c={data:function(){return{textarea:""}}},s=c,i=a("2877"),u=Object(i["a"])(s,l,o,!1,null,null,null),d=u.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Label","code-toggler":""}},[a("span",[e._v("If you need to add a label you can use the label property")]),a("div",{staticClass:"mt-5"},[a("vs-textarea",{attrs:{label:"Label in Textarea"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div>\n    <vs-textarea label="Label in Textarea" v-model="textarea" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    textarea: \'\',\n  })\n}\n<\/script>\n\n        ')])],2)},p=[],v={data:function(){return{textarea:""}}},h=v,m=Object(i["a"])(h,x,p,!1,null,null,null),f=m.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Counter","code-toggler":""}},[a("span",[e._v("There are times when we need the user to only enter a certain number of characters for it, we have the property "),a("code",[e._v("counter")]),e._v(", the value is a number and determines the maximum")]),a("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[a("span",[e._v("To get when the number of characters is exceeded use the property "),a("code",[e._v("counter-danger.sync")])])]),a("br"),a("div",[a("vs-textarea",{attrs:{counter:"20",label:"Counter: 20","counter-danger":e.counterDanger},on:{"update:counterDanger":function(t){e.counterDanger=t},"update:counter-danger":function(t){e.counterDanger=t}},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div>\n    <vs-textarea counter="20" label="Counter: 20" :counter-danger.sync="counterDanger" v-model="textarea" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    textarea: \'\',\n    counterDanger: false\n  })\n}\n<\/script>\n        ')])],2)},g=[],_={data:function(){return{textarea:"",counterDanger:!1}}},w=_,C=Object(i["a"])(w,b,g,!1,null,null,null),T=C.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Width","code-toggler":""}},[a("span",[e._v("You can set the width of the textarea with the "),a("code",[e._v("width")]),e._v(" prop.")]),a("div",{staticClass:"mt-5"},[a("vs-textarea",{attrs:{label:"Width set to 300px",width:"300px"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div>\n    <vs-textarea v-model="textarea" label="Height set to 300px" width="300px" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    textarea: \'\',\n  })\n}\n<\/script>\n        ')])],2)},D=[],k={data:function(){return{textarea:""}}},j=k,E=Object(i["a"])(j,y,D,!1,null,null,null),O=E.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Height","code-toggler":""}},[a("span",[e._v("You can set the height of the textarea with the "),a("code",[e._v("height")]),e._v(" prop.")]),a("div",{staticClass:"mt-5"},[a("vs-textarea",{attrs:{label:"Height set to 200px",height:"200px"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div>\n    <vs-textarea v-model="textarea" label="Height set to 200px" height="200px" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    textarea: \'\',\n  })\n}\n<\/script>\n        ')])],2)},H=[],L={data:function(){return{textarea:""}}},W=L,J=Object(i["a"])(W,$,H,!1,null,null,null),Y=J.exports,I={components:{TextareaDefault:d,TextareaLabel:f,TextareaCounter:T,TextareaWidth:O,TextareaHeight:Y}},q=I,z=Object(i["a"])(q,n,r,!1,null,null,null);t["default"]=z.exports}}]);
//# sourceMappingURL=chunk-2d22fd6e.3684c293.js.map