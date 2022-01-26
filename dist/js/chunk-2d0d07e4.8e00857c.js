(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d07e4"],{"67e2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"mb-8"},[a("import-excel",{attrs:{onSuccess:e.loadDataInTable}})],1),e.tableData.length&&e.header.length?a("vx-card",[a("vs-table",{attrs:{stripe:"",pagination:"","max-items":10,search:"",data:e.tableData},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return e._l(r,(function(t,n){return a("vs-tr",{key:n,attrs:{data:t}},e._l(r[n],(function(t,r){return a("vs-td",{key:r+t,attrs:{data:t}},[e._v("\n            "+e._s(t)+"\n          ")])})),1)}))}}],null,!1,3112142431)},[a("template",{slot:"header"},[a("h4",[e._v(e._s(e.sheetName))])]),a("template",{slot:"thead"},e._l(e.header,(function(t){return a("vs-th",{key:t,attrs:{"sort-key":t}},[e._v(e._s(t))])})),1)],2)],1):e._e()],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"excel-import"},[a("input",{ref:"fileInput",staticClass:"hidden",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),a("div",{staticClass:"px-8 py-16 cursor-pointer text-center border-2 border-dashed d-theme-border-grey-light d-theme-dark-bg text-xl",on:{click:function(t){return e.$refs.fileInput.click()},drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[a("feather-icon",{staticClass:"block",attrs:{icon:"UploadCloudIcon",svgClasses:"h-16 w-16 stroke-current text-grey"}}),a("span",[e._v("Drop Excel File or ")]),a("span",{staticClass:"font-medium text-primary",on:{click:function(t){return t.stopPropagation(),e.$refs.fileInput.click()}}},[e._v("Browse")])],1)])},l=[],i=(a("7f7f"),a("1146")),o=a.n(i),c={props:{onSuccess:{type:Function,required:!0}},data:function(){return{excelData:{header:null,results:null,meta:null}}},methods:{generateData:function(e){var t=e.header,a=e.results,r=e.meta;this.excelData.header=t,this.excelData.results=a,this.excelData.meta=r,this.onSuccess&&this.onSuccess(this.excelData)},getHeaderRow:function(e){var t=[],a=o.a.utils.decode_range(e["!ref"]),r=void 0,n=a.s.r;for(r=a.s.c;r<=a.e.c;++r){var s=e[o.a.utils.encode_cell({c:r,r:n})],l="UNKNOWN ".concat(r);s&&s.t&&(l=o.a.utils.format_cell(s)),t.push(l)}return t},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleDrop:function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files;if(1===t.length){var a=t[0];if(!this.isExcel(a))return this.$vs.notify({title:"Login Attempt",text:"Only supports upload .xlsx, .xls, .csv suffix files",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1;this.uploadFile(a)}else this.$vs.notify({title:"Login Attempt",text:"Only support uploading one file!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"})},readerData:function(e){var t=this;return new Promise((function(a){var r=new FileReader;r.onload=function(e){var r=e.target.result,n=o.a.read(r,{type:"array"}),s=n.SheetNames[0],l=n.Sheets[s],i=t.getHeaderRow(l),c=o.a.utils.sheet_to_json(l),u={sheetName:s};t.generateData({header:i,results:c,meta:u}),a()},r.readAsArrayBuffer(e)}))},handleClick:function(e){var t=e.target.files,a=t[0];a&&this.uploadFile(a)},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)},uploadFile:function(e){this.$refs["fileInput"].value=null,this.readerData(e)}}},u=c,d=a("2877"),h=Object(d["a"])(u,s,l,!1,null,null,null),f=h.exports,p={components:{ImportExcel:f},data:function(){return{tableData:[],header:[],sheetName:""}},methods:{loadDataInTable:function(e){var t=e.results,a=e.header,r=e.meta;this.header=a,this.tableData=t,this.sheetName=r.sheetName}}},v=p,m=Object(d["a"])(v,r,n,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0d07e4.8e00857c.js.map