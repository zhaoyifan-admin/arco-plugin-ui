import{_ as c,C as o,o as r,c as i,k as s,a,H as t,w as n,Q as e}from"./chunks/framework.5246819e.js";const V=JSON.parse('{"title":"分割线 Divider","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/divider.md","filePath":"guide/components/divider.md"}'),E={name:"guide/components/divider.md"},d={id:"分割线-divider",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#分割线-divider","aria-label":'Permalink to "分割线 Divider<BackTop />"'},"​",-1),h=s("br",null,null,-1),u=s("p",null,[s("em",null,"区隔内容的分割线")],-1),g=s("h2",{id:"何时使用",tabindex:"-1"},[a("何时使用 "),s("a",{class:"header-anchor",href:"#何时使用","aria-label":'Permalink to "何时使用"'},"​")],-1),_=s("ul",null,[s("li",null,"对不同章节的文本段落进行分割"),s("li",null,"对行内文字/链接进行分割")],-1),m=s("h2",{id:"基本使用",tabindex:"-1"},[a("基本使用 "),s("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),v=e(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;">&gt;Center Text&lt;/</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;">&gt;Center Text&lt;/</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="中间无文字" tabindex="-1">中间无文字 <a class="header-anchor" href="#中间无文字" aria-label="Permalink to &quot;中间无文字&quot;">​</a></h2>`,2),D=e(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="指定文字位置" tabindex="-1">指定文字位置 <a class="header-anchor" href="#指定文字位置" aria-label="Permalink to &quot;指定文字位置&quot;">​</a></h2>`,2),f=e(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">orientation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;left&quot;</span><span style="color:#E1E4E8;">&gt;Left Text&lt;/</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">orientation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;right&quot;</span><span style="color:#E1E4E8;">&gt;Right Text&lt;/</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">orientation</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;left&quot;</span><span style="color:#24292E;">&gt;Left Text&lt;/</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">orientation</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;right&quot;</span><span style="color:#24292E;">&gt;Right Text&lt;/</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="自定义文字位置" tabindex="-1">自定义文字位置 <a class="header-anchor" href="#自定义文字位置" aria-label="Permalink to &quot;自定义文字位置&quot;">​</a></h2><p><em>文字居左(右)并距左(右)边 120px</em></p>`,3),T=e(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">orientation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;left&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:orientation-margin</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;120&quot;</span><span style="color:#E1E4E8;">&gt;Left Text&lt;/</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">orientation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;right&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:orientation-margin</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;120&quot;</span><span style="color:#E1E4E8;">&gt;Right Text&lt;/</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">orientation</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;left&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:orientation-margin</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;120&quot;</span><span style="color:#24292E;">&gt;Left Text&lt;/</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">orientation</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;right&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:orientation-margin</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;120&quot;</span><span style="color:#24292E;">&gt;Right Text&lt;/</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="使用虚线" tabindex="-1">使用虚线 <a class="header-anchor" href="#使用虚线" aria-label="Permalink to &quot;使用虚线&quot;">​</a></h2>`,2),b=e(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dashed</span><span style="color:#E1E4E8;">&gt;Center Text&lt;/</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dashed</span><span style="color:#24292E;">&gt;Center Text&lt;/</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="自定义线宽" tabindex="-1">自定义线宽 <a class="header-anchor" href="#自定义线宽" aria-label="Permalink to &quot;自定义线宽&quot;">​</a></h2><p><em>线宽 3px</em></p>`,3),C=e(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:borderWidth</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;3&quot;</span><span style="color:#E1E4E8;">&gt;Center Text&lt;/</span><span style="color:#FDAEB7;font-style:italic;">Divider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:borderWidth</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;3&quot;</span><span style="color:#24292E;">&gt;Center Text&lt;/</span><span style="color:#B31D28;font-style:italic;">Divider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="apis" tabindex="-1">APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必传</th></tr></thead><tbody><tr><td>dashed</td><td>是否为虚线</td><td>boolean</td><td>false</td><td>false</td></tr><tr><td>orientation</td><td>分割线标题的位置</td><td>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</td><td>&#39;center&#39;</td><td>false</td></tr><tr><td>orientationMargin</td><td>标题和最近 <code>left</code> / <code>right</code> 边框之间的距离，去除了分割线，同时 <code>orientation</code> 必须为 <code>left</code> 或 <code>right</code></td><td>string | number</td><td>&#39;&#39;</td><td>false</td></tr><tr><td>borderWidth</td><td>分割线宽度，单位<code>px</code></td><td>number</td><td>1</td><td>false</td></tr></tbody></table>`,3);function F(B,A,k,q,x,S){const p=o("BackTop"),l=o("Divider",!0);return r(),i("div",null,[s("h1",d,[a("分割线 Divider"),t(p),a(),y]),h,u,g,_,m,t(l,null,{default:n(()=>[a("Center Text")]),_:1}),v,t(l),D,t(l,{orientation:"left"},{default:n(()=>[a("Left Text")]),_:1}),t(l,{orientation:"right"},{default:n(()=>[a("Right Text")]),_:1}),f,t(l,{orientation:"left","orientation-margin":120},{default:n(()=>[a("Left Text")]),_:1}),t(l,{orientation:"right","orientation-margin":120},{default:n(()=>[a("Right Text")]),_:1}),T,t(l,{dashed:""},{default:n(()=>[a("Center Text")]),_:1}),b,t(l,{borderWidth:3},{default:n(()=>[a("Center Text")]),_:1}),C])}const I=c(E,[["render",F]]);export{V as __pageData,I as default};
