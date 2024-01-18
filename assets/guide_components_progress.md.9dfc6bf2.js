import{d as g,h,C as e,o as C,c as B,k as s,a as p,H as l,w as r,Q as c}from"./chunks/framework.5246819e.js";const m={id:"进度条-progress",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#进度条-progress","aria-label":'Permalink to "进度条 Progress<BackTop />"'},"​",-1),f=s("br",null,null,-1),D=s("p",null,[s("em",null,"展示操作的当前进度")],-1),v=s("h2",{id:"何时使用",tabindex:"-1"},[p("何时使用 "),s("a",{class:"header-anchor",href:"#何时使用","aria-label":'Permalink to "何时使用"'},"​")],-1),A=s("ul",null,[s("li",null,"当需要显示当前进度和状态时"),s("li",null,"当需要显示一个操作完成的百分比时")],-1),b=s("h2",{id:"基本使用",tabindex:"-1"},[p("基本使用 "),s("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),k=c(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">percent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">Progress</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;percent&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">percent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">60</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">Progress</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:percent</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;percent&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="完成进度条" tabindex="-1">完成进度条 <a class="header-anchor" href="#完成进度条" aria-label="Permalink to &quot;完成进度条&quot;">​</a></h2>`,2),_=c(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">Progress</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100%&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">Progress</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100%&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:percent</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="渐变进度条" tabindex="-1">渐变进度条 <a class="header-anchor" href="#渐变进度条" aria-label="Permalink to &quot;渐变进度条&quot;">​</a></h2><p><em>strokeColor: { &#39;0%&#39;: &#39;#108ee9&#39;, &#39;100%&#39;: &#39;#87d068&#39;, direction: &#39;right&#39; } 或 { from: &#39;#108ee9&#39;, to: &#39;#87d068&#39;, direction: &#39;right&#39; }</em></p><br>`,4),P=c(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">percent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">Progress</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">:percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;percent&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">:strokeColor</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;0%&#39;: &#39;#108ee9&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;100%&#39;: &#39;#87d068&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">    direction: &#39;right&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">  }&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">percent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">60</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">Progress</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">:percent</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;percent&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">:strokeColor</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{</span></span>
<span class="line"><span style="color:#032F62;">    &#39;0%&#39;: &#39;#108ee9&#39;,</span></span>
<span class="line"><span style="color:#032F62;">    &#39;100%&#39;: &#39;#87d068&#39;,</span></span>
<span class="line"><span style="color:#032F62;">    direction: &#39;right&#39;</span></span>
<span class="line"><span style="color:#032F62;">  }&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="进度圈" tabindex="-1">进度圈 <a class="header-anchor" href="#进度圈" aria-label="Permalink to &quot;进度圈&quot;">​</a></h2>`,2),w=c(`<details class="details custom-block"><summary>Show Code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">percent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onIncrease</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">scale</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> percent.value </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> scale</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    percent.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    percent.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onDecline</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">scale</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> percent.value </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> scale</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    percent.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    percent.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">Space</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">align</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;30&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">Progress</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;120&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:percent</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;percent&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;circle&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onDecline(5)&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;large&quot;</span><span style="color:#E1E4E8;">&gt;Decline-&lt;/</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onIncrease(5)&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;large&quot;</span><span style="color:#E1E4E8;">&gt;Increase+&lt;/</span><span style="color:#85E89D;">Button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">Space</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">percent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">60</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onIncrease</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">scale</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> percent.value </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> scale</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    percent.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    percent.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onDecline</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">scale</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> percent.value </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> scale</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    percent.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    percent.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">Space</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">align</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;30&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">Progress</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;120&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:percent</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;percent&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;circle&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">Button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onDecline(5)&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;large&quot;</span><span style="color:#24292E;">&gt;Decline-&lt;/</span><span style="color:#22863A;">Button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">Button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onIncrease(5)&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;large&quot;</span><span style="color:#24292E;">&gt;Increase+&lt;/</span><span style="color:#22863A;">Button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">Space</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="apis" tabindex="-1">APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必传</th></tr></thead><tbody><tr><td>width</td><td>进度条总宽度</td><td>number | string</td><td>&#39;100%&#39;</td><td>false</td></tr><tr><td>percent</td><td>当前进度百分比</td><td>number</td><td>0</td><td>false</td></tr><tr><td>strokeColor</td><td>进度条的色彩，传入 <code>string</code> 时为纯色，传入 <code>Gradient</code> 时为渐变</td><td>string | Gradient</td><td>&#39;#1677FF&#39;</td><td>false</td></tr><tr><td>strokeWidth</td><td>进度条线的宽度，单位<code>px</code></td><td>number</td><td>8</td><td>false</td></tr><tr><td>showInfo</td><td>是否显示进度数值或状态图标</td><td>boolean</td><td>true</td><td>false</td></tr><tr><td>type</td><td>进度条类型</td><td>&#39;line&#39; | &#39;circle&#39;</td><td>&#39;line&#39;</td><td>false</td></tr></tbody></table><h2 id="gradient-type" tabindex="-1">Gradient Type <a class="header-anchor" href="#gradient-type" aria-label="Permalink to &quot;Gradient Type&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>必传</th></tr></thead><tbody><tr><td>&#39;0%&#39;</td><td>起始值</td><td>string</td><td>false</td></tr><tr><td>&#39;100%&#39;</td><td>终点值</td><td>string</td><td>false</td></tr><tr><td>from</td><td>起始值</td><td>string</td><td>false</td></tr><tr><td>to</td><td>终点值</td><td>string</td><td>false</td></tr><tr><td>direction</td><td>渐变方向</td><td>&#39;right&#39; | &#39;left&#39;</td><td>false</td></tr></tbody></table>`,5),z=JSON.parse('{"title":"进度条 Progress","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/progress.md","filePath":"guide/components/progress.md"}'),x={name:"guide/components/progress.md"},T=g({...x,setup(S){const a=h(60);function y(o){const n=a.value+o;n>100?a.value=100:a.value=n}function i(o){const n=a.value-o;n<0?a.value=0:a.value=n}return(o,n)=>{const d=e("BackTop"),t=e("Progress",!0),E=e("Button"),u=e("Space");return C(),B("div",null,[s("h1",m,[p("进度条 Progress"),l(d),p(),q]),f,D,v,A,b,l(t,{percent:a.value},null,8,["percent"]),k,l(t,{width:"100%",percent:100}),_,l(t,{percent:a.value,strokeColor:{"0%":"#108ee9","100%":"#87d068",direction:"right"}},null,8,["percent"]),P,l(u,{align:"center",size:30},{default:r(()=>[l(t,{width:120,percent:a.value,type:"circle"},null,8,["percent"]),l(E,{onClick:n[0]||(n[0]=F=>i(5)),size:"large"},{default:r(()=>[p("Decline-")]),_:1}),l(E,{onClick:n[1]||(n[1]=F=>y(5)),size:"large"},{default:r(()=>[p("Increase+")]),_:1})]),_:1}),w])}}});export{z as __pageData,T as default};
