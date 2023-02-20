!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).vue3={},e.Vue)}(this,(function(e,t){"use strict";const a=(e,t)=>{const a=e.__vccOpts||e;for(const[r,o]of t)a[r]=o;return a},r={name:"Pagination",props:{current:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0},pageListNum:{type:Number,default:5},hideOnSinglePage:{type:Boolean,default:!1},showQuickJumper:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},placement:{type:String,default:"right"}},data(){return{currentPage:this.current,jumpNumber:"",forwardMore:!1,backwardMore:!1,forwardArrow:!1,backwardArrow:!1}},computed:{totalPage(){return Math.ceil(this.total/this.pageSize)},pageList(){return this.dealPageList(this.currentPage).filter((e=>1!==e&&e!==this.totalPage))}},watch:{current(e){this.currentPage=e},currentPage(e){this.loading=!0,this.$emit("change",{page:e,pageSize:this.pageSize})}},created(){document.onkeydown=e=>{const t=e||window.event;t&&13===t.keyCode&&this.jumpNumber&&this.jumpPage(this.jumpNumber)}},methods:{dealPageList(e){var t=[],a=Math.floor(this.pageListNum/2),r={start:e-a,end:e+a};r.start<1&&(r.end=r.end+(1-r.start),r.start=1),r.end>this.totalPage&&(r.start=r.start-(r.end-this.totalPage),r.end=this.totalPage),r.start<1&&(r.start=1),r.start>1?this.forwardMore=!0:this.forwardMore=!1,r.end<this.totalPage?this.backwardMore=!0:this.backwardMore=!1;for(let o=r.start;o<=r.end;o++)t.push(o);return t},onForward(){this.currentPage=this.currentPage-this.pageListNum>0?this.currentPage-this.pageListNum:1},onBackward(){this.currentPage=this.currentPage+this.pageListNum<this.totalPage?this.currentPage+this.pageListNum:this.totalPage},jumpPage(e){Number(e)&&(Number(e)<1&&(e=1),Number(e)>this.totalPage&&(e=this.totalPage),this.changePage(Number(e))),this.jumpNumber=""},changePage(e){if(0===e||e===this.totalPage+1)return!1;this.currentPage!==e&&(this.currentPage=e)}}},o=e=>(t.pushScopeId("data-v-e4e55ac8"),e=e(),t.popScopeId(),e),n={class:"m-pagination-wrap"},l={key:0,class:"mr8"},c=[o((()=>t.createElementVNode("svg",{class:"u-arrow",viewBox:"64 64 896 896","data-icon":"left","aria-hidden":"true",focusable:"false"},[t.createElementVNode("path",{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"})],-1)))],s={class:"u-ellipsis"},i={class:"u-icon",viewBox:"64 64 896 896","data-icon":"double-left","aria-hidden":"true",focusable:"false"},u=[o((()=>t.createElementVNode("path",{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"},null,-1)))],d=["onClick"],p={class:"u-ellipsis"},m={class:"u-icon",viewBox:"64 64 896 896","data-icon":"double-right","aria-hidden":"true",focusable:"false"},g=[o((()=>t.createElementVNode("path",{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"},null,-1)))],h=[o((()=>t.createElementVNode("svg",{class:"u-arrow",viewBox:"64 64 896 896","data-icon":"right","aria-hidden":"true",focusable:"false"},[t.createElementVNode("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"})],-1)))],w={key:1,class:"u-jump-page"};const k=a(r,[["render",function(e,a,r,o,k,f){return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass([`m-pagination ${r.placement}`,{hidden:r.hideOnSinglePage&&r.total<=r.pageSize}])},[t.createElementVNode("div",n,[r.showTotal?(t.openBlock(),t.createElementBlock("span",l,"共 "+t.toDisplayString(f.totalPage)+" 页 / "+t.toDisplayString(r.total)+" 条",1)):t.createCommentVNode("",!0),t.createElementVNode("span",{class:t.normalizeClass(["u-item",{disabled:1===k.currentPage}]),onClick:a[0]||(a[0]=e=>f.changePage(k.currentPage-1))},c,2),t.createElementVNode("span",{class:t.normalizeClass(["u-item",{active:1===k.currentPage}]),onClick:a[1]||(a[1]=e=>f.changePage(1))},"1",2),t.withDirectives(t.createElementVNode("span",{class:"m-arrow",ref:"forward",onClick:a[2]||(a[2]=(...e)=>f.onForward&&f.onForward(...e)),onMouseenter:a[3]||(a[3]=e=>k.forwardArrow=!0),onMouseleave:a[4]||(a[4]=e=>k.forwardArrow=!1)},[t.withDirectives(t.createElementVNode("span",s,"•••",512),[[t.vShow,!k.forwardArrow]]),t.withDirectives((t.openBlock(),t.createElementBlock("svg",i,u,512)),[[t.vShow,k.forwardArrow]])],544),[[t.vShow,k.forwardMore&&f.pageList[0]-1>1]]),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(f.pageList,((e,a)=>(t.openBlock(),t.createElementBlock("span",{class:t.normalizeClass(["u-item",{active:k.currentPage===e}]),key:a,onClick:t=>f.changePage(e)},t.toDisplayString(e),11,d)))),128)),t.withDirectives(t.createElementVNode("span",{class:"m-arrow",ref:"backward",onClick:a[5]||(a[5]=(...e)=>f.onBackward&&f.onBackward(...e)),onMouseenter:a[6]||(a[6]=e=>k.backwardArrow=!0),onMouseleave:a[7]||(a[7]=e=>k.backwardArrow=!1)},[t.withDirectives(t.createElementVNode("span",p,"•••",512),[[t.vShow,!k.backwardArrow]]),t.withDirectives((t.openBlock(),t.createElementBlock("svg",m,g,512)),[[t.vShow,k.backwardArrow]])],544),[[t.vShow,k.backwardMore&&f.pageList[f.pageList.length-1]+1<f.totalPage]]),t.withDirectives(t.createElementVNode("span",{class:t.normalizeClass(["u-item",{active:k.currentPage===f.totalPage}]),onClick:a[8]||(a[8]=e=>f.changePage(f.totalPage))},t.toDisplayString(f.totalPage),3),[[t.vShow,1!==f.totalPage]]),t.createElementVNode("span",{class:t.normalizeClass(["u-item",{disabled:k.currentPage===f.totalPage}]),onClick:a[9]||(a[9]=e=>f.changePage(k.currentPage+1))},h,2),r.showQuickJumper?(t.openBlock(),t.createElementBlock("span",w,[t.createTextVNode("跳至"),t.withDirectives(t.createElementVNode("input",{type:"text","onUpdate:modelValue":a[10]||(a[10]=e=>k.jumpNumber=e)},null,512),[[t.vModelText,k.jumpNumber]]),t.createTextVNode("页")])):t.createCommentVNode("",!0)])],2)}],["__scopeId","data-v-e4e55ac8"]]);k.install=e=>{e.component(k.name,k)};const f={name:"Breadcrumb",props:{routes:{type:Array,required:!0,default:()=>[]},height:{type:Number,default:60},separator:{type:String,default:""}},computed:{len(){return this.routes.length}},methods:{goRouter(e){this.$router.push({path:e.path,query:e.query||{}})}}},v=e=>(t.pushScopeId("data-v-a0ba6180"),e=e(),t.popScopeId(),e),P=["onClick","title"],b={key:0,class:"u-separator"},N={key:1,class:"u-arrow",viewBox:"64 64 896 896","data-icon":"right","aria-hidden":"true",focusable:"false"},B=[v((()=>t.createElementVNode("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"},null,-1)))],y=v((()=>t.createElementVNode("div",{class:"assist"},null,-1)));const E=a(f,[["render",function(e,a,r,o,n,l){return t.openBlock(),t.createElementBlock("div",{class:"m-breadcrumb",style:t.normalizeStyle(`height: ${r.height}px;`)},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(r.routes,((e,a)=>(t.openBlock(),t.createElementBlock("div",{class:"m-bread",key:a},[t.createElementVNode("a",{class:t.normalizeClass(["u-route",{active:a===l.len-1}]),onClick:t=>a===l.len-1?e=>e.preventDefault():l.goRouter(e),title:e.name},t.toDisplayString(e.name||"--"),11,P),a!==l.len-1?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[r.separator?(t.openBlock(),t.createElementBlock("span",b,t.toDisplayString(r.separator),1)):(t.openBlock(),t.createElementBlock("svg",N,B))],64)):t.createCommentVNode("",!0)])))),128)),y],4)}],["__scopeId","data-v-a0ba6180"]]);E.install=e=>{e.component(E.name,E)};const S={install:e=>{e.use(k),e.use(E)}};e.Breadcrumb=E,e.Pagination=k,e.default=S,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
