import{_ as s,c as n,o as a,a as l}from"./app.ed921696.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1. 数据类型","slug":"_1-数据类型","link":"#_1-数据类型","children":[]},{"level":3,"title":"2. 接口","slug":"_2-接口","link":"#_2-接口","children":[]},{"level":3,"title":"3. 常量","slug":"_3-常量","link":"#_3-常量","children":[]},{"level":3,"title":"4. 定义数组的方式","slug":"_4-定义数组的方式","link":"#_4-定义数组的方式","children":[]},{"level":3,"title":"5. 函数的类型","slug":"_5-函数的类型","link":"#_5-函数的类型","children":[]},{"level":3,"title":"6. 断言","slug":"_6-断言","link":"#_6-断言","children":[]},{"level":3,"title":"7. 问号与叹号","slug":"_7-问号与叹号","link":"#_7-问号与叹号","children":[]},{"level":3,"title":"8. TypeScript配置文件","slug":"_8-typescript配置文件","link":"#_8-typescript配置文件","children":[]},{"level":3,"title":"8. Type 类型别名","slug":"_8-type-类型别名","link":"#_8-type-类型别名","children":[]},{"level":3,"title":"9. 字符串字面量类型","slug":"_9-字符串字面量类型","link":"#_9-字符串字面量类型","children":[]},{"level":3,"title":"10. 元组","slug":"_10-元组","link":"#_10-元组","children":[]},{"level":3,"title":"11. 枚举","slug":"_11-枚举","link":"#_11-枚举","children":[]}],"relativePath":"TS/secondly.md"}'),p={name:"TS/secondly.md"},e=l(`<p>编译ts文件</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">tsc index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>监听模式自动编译index.ts文件</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">tsc index.ts -w</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用ts-node直接运行ts文件</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install -g ts-node </span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -D tslib @types/node</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_1-数据类型" tabindex="-1">1. 数据类型 <a class="header-anchor" href="#_1-数据类型" aria-hidden="true">#</a></h3><h4 id="_1-1-any" tabindex="-1">1.1 any <a class="header-anchor" href="#_1-1-any" aria-hidden="true">#</a></h4><p>any可以赋值给任何类型</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let a:any</span></span>
<span class="line"><span style="color:#A6ACCD;">a = 5</span></span>
<span class="line"><span style="color:#A6ACCD;">let b:number</span></span>
<span class="line"><span style="color:#A6ACCD;">b = a</span></span>
<span class="line"><span style="color:#A6ACCD;">// 不会报错</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="_1-2-unknown类型" tabindex="-1">1.2 unknown类型 <a class="header-anchor" href="#_1-2-unknown类型" aria-hidden="true">#</a></h4><p>unknown不能赋值给任意类型</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let a: unknow</span></span>
<span class="line"><span style="color:#A6ACCD;">a = 6</span></span>
<span class="line"><span style="color:#A6ACCD;">let b:boolean = false </span></span>
<span class="line"><span style="color:#A6ACCD;">b = a  </span></span>
<span class="line"><span style="color:#A6ACCD;">// 当把unknown类型赋值给boolean报错：不能将类型“unknown”分配给类型“boolean”。ts(2322)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="_1-3-never" tabindex="-1">1.3 never <a class="header-anchor" href="#_1-3-never" aria-hidden="true">#</a></h4><p>永远不会有返回值的函数。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Fn(): never{}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这里会报错因为函数默认返回undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>像下面这些函数就不会有返回值</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Fn(): never{</span></span>
<span class="line"><span style="color:#A6ACCD;">  throw new Error(&#39;test&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Fn1(): never{</span></span>
<span class="line"><span style="color:#A6ACCD;">  while(true){}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-接口" tabindex="-1">2. 接口 <a class="header-anchor" href="#_2-接口" aria-hidden="true">#</a></h3><h4 id="_2-1-接口概念" tabindex="-1">2.1 接口概念 <a class="header-anchor" href="#_2-1-接口概念" aria-hidden="true">#</a></h4><p>对对象的抽象描述。</p><ol><li>接口中的属性不能有初始值，方法不能有方法体。</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPerson</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">greet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>可选属性</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPerson</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">greet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sex</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="3"><li>任意属性</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPerson</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">greet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#A6ACCD;font-style:italic;">prop</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 也可以是联合类型 number | string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="4"><li>只读属性</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPerson</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">greet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="5"><li>方法</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPcar</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">stop</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">voice</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Function</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="6"><li>联合类型的接口</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPerson</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">greet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">|()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="7"><li>接口约束数组</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">interface IArr {</span></span>
<span class="line"><span style="color:#A6ACCD;">  [index:number]: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">cosnt arr: IArr = [&#39;str1&#39;, &#39;str2&#39;, &#39;str3&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="8"><li>接口约束class</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">interface IPerson{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: number</span></span>
<span class="line"><span style="color:#A6ACCD;">  greet: () =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Person implements IPerson{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">  age:number</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(name: string, age: number) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.name = name</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.age = age</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  greet() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(\`姓名：\${this.name}, 年龄\${this.age}\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="9"><li>接口继承</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">interface IPerson {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface IStudent extents IPerson {</span></span>
<span class="line"><span style="color:#A6ACCD;">  classNo: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const student: IStudent  = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;zhangsan&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  classNo: 189</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 继承多个接口</span></span>
<span class="line"><span style="color:#A6ACCD;">interface IAge {</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">interface IStudent2 extends IPerson, IAge {</span></span>
<span class="line"><span style="color:#A6ACCD;">  classNo: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const stdent2 = &lt;IStudent2&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;韩梅梅‘</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: 16</span></span>
<span class="line"><span style="color:#A6ACCD;">  classNo: 189</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_3-常量" tabindex="-1">3. 常量 <a class="header-anchor" href="#_3-常量" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let age:99</span></span>
<span class="line"><span style="color:#A6ACCD;">age = 88  // 不能将类型“88”分配给类型“99”。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let type: &#39;string&#39;|&#39;number&#39;|&#39;array&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">type = &#39;string&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">type = &#39;str&#39;  // 不能将类型“&quot;str&quot;”分配给类型“&quot;string&quot; | &quot;number&quot; | &quot;array&quot;”</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_4-定义数组的方式" tabindex="-1">4. 定义数组的方式 <a class="header-anchor" href="#_4-定义数组的方式" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 方式一</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr: number[] = []  // 表示数组的每一项都为数字</span></span>
<span class="line"><span style="color:#A6ACCD;">// 方式二</span></span>
<span class="line"><span style="color:#A6ACCD;">interface IArr {</span></span>
<span class="line"><span style="color:#A6ACCD;">  [index:number]: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">cosnt arr: IArr = [&#39;str1&#39;, &#39;str2&#39;, &#39;str3&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_5-函数的类型" tabindex="-1">5. 函数的类型 <a class="header-anchor" href="#_5-函数的类型" aria-hidden="true">#</a></h3><ol><li>声明函数</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 1. 定义类型</span></span>
<span class="line"><span style="color:#A6ACCD;">let Fun:(a: number, b:number) =&gt; number</span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义函数体</span></span>
<span class="line"><span style="color:#A6ACCD;">Fun = (x: number, y:number):number =&gt; x + y</span></span>
<span class="line"><span style="color:#A6ACCD;">// 3.调用函数</span></span>
<span class="line"><span style="color:#A6ACCD;">let FunRes = Fun(6, 6)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 也可以简写  不推荐</span></span>
<span class="line"><span style="color:#A6ACCD;">let Fun: (a: number, b:number) =&gt; number = (x: number, y:number):number =&gt; x + y</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2"><li>可选参数<br> 可选参数要放在后面</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Fun(a:number, b?:number): number {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a + b</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3"><li>默认参数</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Fun(a: number, b:number = 0): number {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return a + b</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Fun(6))</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Fun(6, 8)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="4"><li>剩余参数</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function Fun(a: number, ...rest:number[]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (rest.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = 0; i&lt;rest.length;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      a += rest[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="5"><li>函数重载</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function reverseFun(value: number):number</span></span>
<span class="line"><span style="color:#A6ACCD;">function reverseFun(value: string):string</span></span>
<span class="line"><span style="color:#A6ACCD;">function reverseFun(value: number|string): number|string |void {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof value === &#39;number&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Number(value.toString().split(&#39;&#39;).reverse().join(&#39;&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else if (typeof value === &#39;string&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return value.split(&#39;&#39;).reverse().join(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(reverseFun(12345))</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(reverseFun(&#39;abcdef&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_6-断言" tabindex="-1">6. 断言 <a class="header-anchor" href="#_6-断言" aria-hidden="true">#</a></h3><h4 id="_6-1-断言的方式" tabindex="-1">6.1 断言的方式 <a class="header-anchor" href="#_6-1-断言的方式" aria-hidden="true">#</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 1. as  number</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. &quot;&lt;number&gt;&quot;  </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_6-2-联合类型断言" tabindex="-1">6.2 联合类型断言 <a class="header-anchor" href="#_6-2-联合类型断言" aria-hidden="true">#</a></h4><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 断言  </span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ICat</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IFish</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">swim</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isFish</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">animal</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ICat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IFish</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">animal</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">IFish</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">swim</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cat</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ICat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">喵喵</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fish</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IFish</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">swim</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">isFish</span><span style="color:#A6ACCD;">(fish))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h4 id="_6-3-将父类断言为子类" tabindex="-1">6.3 将父类断言为子类 <a class="header-anchor" href="#_6-3-将父类断言为子类" aria-hidden="true">#</a></h4><p>子类继承了父类，但子类的类型更加具体，因此有必要将一个定义为父类的元素断言为具体的子类。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">class ApiError extends Error{</span></span>
<span class="line"><span style="color:#A6ACCD;">  code:number = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class HttpError extends Error {</span></span>
<span class="line"><span style="color:#A6ACCD;">  status:number = 500</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function isApiError(error: Error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (error as ApiError) instanceof ApiError</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const apiError = new ApiError()</span></span>
<span class="line"><span style="color:#A6ACCD;">const httpError = new HttpError()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;父类断言为子类&#39;, isApiError(apiError))  // true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;父类断言为子类&#39;, isApiError(httpError )) // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="_6-4-断言为any" tabindex="-1">6.4 断言为any <a class="header-anchor" href="#_6-4-断言为any" aria-hidden="true">#</a></h4><p>any类型可以赋值给任意类型，任意类型可以赋值给any</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">(window as any).foot = 10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_6-5-any断言为具体类型" tabindex="-1">6.5 any断言为具体类型 <a class="header-anchor" href="#_6-5-any断言为具体类型" aria-hidden="true">#</a></h4><h4 id="_6-6-类型兼容断言限制" tabindex="-1">6.6 类型兼容断言限制 <a class="header-anchor" href="#_6-6-类型兼容断言限制" aria-hidden="true">#</a></h4><p>A兼容B，那么A就能够被断言为 B，B也能被断言为A</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">interface Animal {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface Cat {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">  run(): void</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let tom: Cat = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;tom&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  run: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;run&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let animal: Animal = tom</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(animal.name) // tom</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>TypeScript是结构类型系统，类型之间的对比只会比较他们最终的结构，而会忽略它们定义时的关系。在上面的例子中，Cat包含了Animal中的所有属性，除此之外，他还有一个额外的方法run，typescript并不关心Cat和Animal之间定义时是什么关系，而只会看他们最终的结构有什么关系，所以它与Cat extends Animal是等价的。</p><h4 id="_6-7-双重断言" tabindex="-1">6.7 双重断言 <a class="header-anchor" href="#_6-7-双重断言" aria-hidden="true">#</a></h4><blockquote><p>存在风险慎用</p></blockquote><p>原理：</p><ul><li>任何类型都可以被断言为any</li><li>any 可以被断言为任何类型</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">interface Cat {</span></span>
<span class="line"><span style="color:#A6ACCD;">  run: () =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface Fish {</span></span>
<span class="line"><span style="color:#A6ACCD;">  swim: () =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function testCat(cat: Cat) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (cat as any as Fish)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="_6-8-断言与类型转换" tabindex="-1">6.8 断言与类型转换 <a class="header-anchor" href="#_6-8-断言与类型转换" aria-hidden="true">#</a></h4><p>这样是不能使用断言的</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function toBoolean(value:any): boolean {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return value as boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>正确做法，使用类型转换将值转换为boolean类型</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function toBoolean(value:any): boolean {</span></span>
<span class="line"><span style="color:#A6ACCD;">   return Boolean(value)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_7-问号与叹号" tabindex="-1">7. 问号与叹号 <a class="header-anchor" href="#_7-问号与叹号" aria-hidden="true">#</a></h3><h4 id="_7-1-ts中-的含义" tabindex="-1">7.1 TS中 ? 的含义 <a class="header-anchor" href="#_7-1-ts中-的含义" aria-hidden="true">#</a></h4><ol><li>三元运算符</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">a &gt; b ? a : b</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>可选参数</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function getUser(user: string, field?: string) {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>成员</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">interface Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">  age?: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="4"><li>可选链<br> getUser(1)?.name // 如果getUser(1)返回的不为null 或undefined，读取name属性，否则结束</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">interface User{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function getUser(type: number): User|undefined {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (type === 1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;tom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// console.log(getUser(1).name) // ts error getUser(1)   对象可能为“未定义”。</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(getUser(1)?.name) // tom</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="_7-2-叹号" tabindex="-1">7.2 叹号 <a class="header-anchor" href="#_7-2-叹号" aria-hidden="true">#</a></h4><ol><li>逻辑运算取反</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const a = !true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>比较运算 不等于</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">if ({}!={}) {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>成员</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 因为接口B里面name被定义为可空的值，但是实际情况是不为空的，</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这时在class里面使用叹号，重新强调了name这个属性值不能为空</span></span>
<span class="line"><span style="color:#A6ACCD;">interface B {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name?: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class A implements B {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name!: string </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="4"><li>强制链式调用<br> 当确信一个对象不为undefined或null，就可以使用叹号与编译器强调可以使用链式调用</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function getLength(str: string|null):string|undefined{</span></span>
<span class="line"><span style="color:#A6ACCD;">  return str!.length+&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_8-typescript配置文件" tabindex="-1">8. TypeScript配置文件 <a class="header-anchor" href="#_8-typescript配置文件" aria-hidden="true">#</a></h3><p>tsconfig.json 初始化配置文件命令</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">tsc --init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 指定编译的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;include&quot;: [&quot;./src/**/*&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 排除要编译的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;exclude&quot;: [&quot;node_modules&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 定义被继承的配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 当前配置文件中会自动包含/config/base.json中所有的配置信息</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;extends&quot;: &quot;./config/base&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 指定被编译文件的列表，只有需要编译时的文件少时才会用到</span></span>
<span class="line"><span style="color:#A6ACCD;">  // &quot;files&quot;: [&quot;./filesTest/core.ts&quot;, &quot;./filesTest/sys.ts&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 编译配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 设置编译的目标版本</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ES3 ES5 ES6/ES2015 ES7/ES2016 ES2017 ES2018 ESNext</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;target&quot;: &quot;ES6&quot;, </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 包含的库，一般不需要修改</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Specify a set of bundled library declaration files that describe the target runtime environment.</span></span>
<span class="line"><span style="color:#A6ACCD;">    // [] 表示所有的库都不包含</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &quot;lib&quot;: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 设置编译后代码使用的模块化系统</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 可选值 Commonjs UMD AMD System ES2020 ESNext None</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;module&quot;: &quot;CommonJS&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 编译后的文件所在的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 默认情况下，编译后的js文件位于相同的目录，设置 outDir 后可以改变编译后文件的输出路径</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &quot;outDir&quot;: &quot;dist&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // outFile</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 将所有的文件编译为一个js文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制动了node system 或 AMD 则会将模块合并到文件之中</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 只支持AMD 或system Node</span></span>
<span class="line"><span style="color:#A6ACCD;">    // &quot;outFile&quot;: &quot;dist/app.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // rootDir </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录作为根目录，通过rootDir 可以手动指定根目录  </span></span>
<span class="line"><span style="color:#A6ACCD;">    // &quot;rootDir&quot;: &quot;./src&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;allowJs&quot;: false, // 是否对js文件编译 </span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;checkJs&quot;: false, // 是否对js文件检查</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;removeComments&quot;: false, // 是否移除注释</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;noEmit&quot;: false,  // 不对代码进行编译并输出 只做语法检查</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;noEmitOnError&quot;: false, // 如果有错误则不生成编译后文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;sourceMap&quot;: true, // 否生成sourceMap</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    // &quot;strict&quot;: true, // 启用所有的严格模式检查，默认值为true，设置后相当于开启了所有的严格检查</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;alwaysStrict&quot;: true, // 是否总是使用严格模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;noImplicitAny&quot;: true, // 不允隐式any类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;noImplicitThis&quot;: true, // 禁用类型不明确的this</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;strictNullChecks&quot;: false // 严格的空值检查</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h3 id="_8-type-类型别名" tabindex="-1">8. Type 类型别名 <a class="header-anchor" href="#_8-type-类型别名" aria-hidden="true">#</a></h3><h4 id="_8-1-定义" tabindex="-1">8.1 定义 <a class="header-anchor" href="#_8-1-定义" aria-hidden="true">#</a></h4><p>Type又叫类型别名，作用是给类型起一个新的名字，不仅支持interface定义的对象结构，还支持基本类型、联合类型、交叉类型、元组等任何需要手写的类型。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">type Num = number // 数字类型  </span></span>
<span class="line"><span style="color:#A6ACCD;">type StringNum = string | number // 联合类型  </span></span>
<span class="line"><span style="color:#A6ACCD;">type Person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string // 对象类型</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type User = person &amp; {age: number}  // 交叉类型  </span></span>
<span class="line"><span style="color:#A6ACCD;">type Data = [string, number] // 元组  </span></span>
<span class="line"><span style="color:#A6ACCD;">type Fun = () =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>例子</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">type Str = string  </span></span>
<span class="line"><span style="color:#A6ACCD;">type StrResolver = () =&gt; string</span></span>
<span class="line"><span style="color:#A6ACCD;">type StrOrResolve = Str | StrResolver</span></span>
<span class="line"><span style="color:#A6ACCD;">function getStr(str: StrOrResolve ): Str {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof str === &#39;string&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return str</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return str()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="_8-2-联合使用" tabindex="-1">8.2 联合使用 <a class="header-anchor" href="#_8-2-联合使用" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">type Person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type Fly = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  fly: () =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let superMan: Person &amp; Fly = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;super&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: 18,</span></span>
<span class="line"><span style="color:#A6ACCD;">fly:() =&gt; console.log(&#39;超人不会飞&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="_8-3-类型与接口" tabindex="-1">8.3 类型与接口 <a class="header-anchor" href="#_8-3-类型与接口" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 接口拓展接口  </span></span>
<span class="line"><span style="color:#A6ACCD;">interface IA {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface IB extends IA {</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const b: IB = {name: &#39;张三&#39;, age: 18} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 类型拓展类型  </span></span>
<span class="line"><span style="color:#A6ACCD;">type IA1 = { name: string }</span></span>
<span class="line"><span style="color:#A6ACCD;">type IB1 = IA1 &amp; {age: number}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const b1: IB1 = {name: &#39;李四&#39;, age: 19}  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 接口拓展类型  </span></span>
<span class="line"><span style="color:#A6ACCD;">type IA2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">interface IB2 extends IA2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const b2: IB2 = {name: &#39;tom&#39;, age: 20}  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 类型拓展接口  </span></span>
<span class="line"><span style="color:#A6ACCD;">interface IA3 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type IB3 = IA3 &amp; {age: number}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const b3: IB3 = {name: &#39;jerry&#39;, age:21}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h4 id="_8-4-泛型type" tabindex="-1">8.4 泛型type <a class="header-anchor" href="#_8-4-泛型type" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 泛型Type  </span></span>
<span class="line"><span style="color:#A6ACCD;">type Data&lt;T&gt; = T</span></span>
<span class="line"><span style="color:#A6ACCD;">let age: Data&lt;number&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Callback&lt;T&gt; = (data: T) =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let callback: Callback&lt;string&gt; = (data) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">callback(&#39;4545&#39;)  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 泛型接口  </span></span>
<span class="line"><span style="color:#A6ACCD;">interface User&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: T</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let user: User&lt;string&gt; = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;bill&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface Callback2&lt;T&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  (data: T):void</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let callback2: Callback2&lt;string&gt; = (data) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">callback2(&#39;123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h4 id="_8-5-type-与接口-interface-区别" tabindex="-1">8.5 type 与接口（interface）区别 <a class="header-anchor" href="#_8-5-type-与接口-interface-区别" aria-hidden="true">#</a></h4><ol><li>类型别名可以用于其它类型，interface不行</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">type Num = number // 正确</span></span>
<span class="line"><span style="color:#A6ACCD;">interface Num = number // 错误</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>interface可以重载合并声明，type不行</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">interface User2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">interface User2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: number</span></span>
<span class="line"><span style="color:#A6ACCD;">  run: (data: string) =&gt; void</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let user2: User2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;lili&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: 18,</span></span>
<span class="line"><span style="color:#A6ACCD;">  run (data){ console.log(data)}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>type 不能重复声明</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">type Person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type Person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}  // 标识符“Person”重复</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="_8-6-type能使用in关键字生成映射类型-interface不行" tabindex="-1">8.6 type能使用in关键字生成映射类型，interface不行 <a class="header-anchor" href="#_8-6-type能使用in关键字生成映射类型-interface不行" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">type keys = &quot;name&quot;|&quot;age&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type User = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  [key in keys]: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let tom:user = {name: &#39;tom&#39;, age: 18}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="_8-7-默认导出方式不同" tabindex="-1">8.7 默认导出方式不同 <a class="header-anchor" href="#_8-7-默认导出方式不同" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// interface 支持同时声明导出  </span></span>
<span class="line"><span style="color:#A6ACCD;">export default interface Person{</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// type 类型只能先定义再导出</span></span>
<span class="line"><span style="color:#A6ACCD;">type Person = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default Person</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="_8-8-type可以使用typeof-获取实例类型" tabindex="-1">8.8 type可以使用typeof 获取实例类型 <a class="header-anchor" href="#_8-8-type可以使用typeof-获取实例类型" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let div = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">type Div = typeof div  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let student = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  age: 18,</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;张三&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type Div = typeof student</span></span>
<span class="line"><span style="color:#A6ACCD;">let div2: Div = {name: &#39;99&#39;, age: 666}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_9-字符串字面量类型" tabindex="-1">9. 字符串字面量类型 <a class="header-anchor" href="#_9-字符串字面量类型" aria-hidden="true">#</a></h3><p>字符串字面量类型用来约束取值只能是某几个字符串中的一个。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">type EventTypes = &#39;click&#39; | &#39;mousemove&#39; | &#39;scroll&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function handleEvent(ele: HTMLElement, event: EventTypes) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // do something</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">handleEvent(document.getElementById(&#39;hello&#39;)!, &#39;scroll&#39;);  // 没问题</span></span>
<span class="line"><span style="color:#A6ACCD;">handleEvent(document.getElementById(&#39;world&#39;)!, &#39;dblclick&#39;); // 报错，event 不能为 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_10-元组" tabindex="-1">10. 元组 <a class="header-anchor" href="#_10-元组" aria-hidden="true">#</a></h3><p>指定数组元素类型</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let arr: [string, number]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr = [&#39;12&#39;, 12]  // 正确</span></span>
<span class="line"><span style="color:#A6ACCD;">arr = [666, &#39;666&#39;] // 错误</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>元组越界</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let arr: [string, number]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr = [&#39;12&#39;, 12]  // 正确</span></span>
<span class="line"><span style="color:#A6ACCD;">arr = [&#39;12&#39;, 12, 123]  // 错误 因为元组只定义了两个元素，加第三个就会错误</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let arr: [string, number]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr = [&#39;12&#39;, 12]  // 正确</span></span>
<span class="line"><span style="color:#A6ACCD;">arr.push(123) // 不报错</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr[2]) // 报错，因为元组只定义了两个元素，加第三个就会错误</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_11-枚举" tabindex="-1">11. 枚举 <a class="header-anchor" href="#_11-枚举" aria-hidden="true">#</a></h3><p>枚举（enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天。<br> 参考 <a href="https://www.cnblogs.com/best/p/16472778.html#_lab2_0_0" target="_blank" rel="noreferrer">TypeScript学习笔记（四）—— TypeScript提高 - 张果 - 博客园 (cnblogs.com)</a></p><h4 id="_11-1-枚举使用" tabindex="-1">11.1 枚举使用 <a class="header-anchor" href="#_11-1-枚举使用" aria-hidden="true">#</a></h4><p>会从0开始递增，双向映射</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">enum Color {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Red,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Blue,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Green</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">var Color;</span></span>
<span class="line"><span style="color:#A6ACCD;">(function (Color) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Color[Color[&quot;Red&quot;] = 0] = &quot;Red&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Color[Color[&quot;Blue&quot;] = 1] = &quot;Blue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Color[Color[&quot;Green&quot;] = 2] = &quot;Green&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">})(Color || (Color = {}));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="_11-2-手动赋值" tabindex="-1">11.2 手动赋值 <a class="header-anchor" href="#_11-2-手动赋值" aria-hidden="true">#</a></h4><p>我们也可以给枚举项手动赋值：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[&quot;Sun&quot;] === 7); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[&quot;Mon&quot;] === 1); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[&quot;Tue&quot;] === 2); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[&quot;Sat&quot;] === 6); // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面的例子中，未手动赋值的枚举项会接着上一个枚举项递增。</p><p>如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[&quot;Sun&quot;] === 3); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[&quot;Wed&quot;] === 3); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[3] === &quot;Sun&quot;); // false</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[3] === &quot;Wed&quot;); // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面的例子中，递增到 3 的时候与前面的 Sun 的取值重复了，但是 TypeScript 并没有报错，导致 Days[3] 的值先是 &quot;Sun&quot;，而后又被 &quot;Wed&quot; 覆盖了。编译的结果是：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">var Days;</span></span>
<span class="line"><span style="color:#A6ACCD;">(function (Days) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Sun&quot;] = 3] = &quot;Sun&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Mon&quot;] = 1] = &quot;Mon&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Tue&quot;] = 2] = &quot;Tue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Wed&quot;] = 3] = &quot;Wed&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Thu&quot;] = 4] = &quot;Thu&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Fri&quot;] = 5] = &quot;Fri&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Sat&quot;] = 6] = &quot;Sat&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">})(Days || (Days = {}));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>所以使用的时候需要注意，最好不要出现这种覆盖的情况。</p><p>手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查 (编译出的 js 仍然是可用的)：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = &lt;any&gt;&quot;S&quot;};</span></span>
<span class="line"><span style="color:#A6ACCD;">var Days;</span></span>
<span class="line"><span style="color:#A6ACCD;">(function (Days) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Sun&quot;] = 7] = &quot;Sun&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Mon&quot;] = 8] = &quot;Mon&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Tue&quot;] = 9] = &quot;Tue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Wed&quot;] = 10] = &quot;Wed&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Thu&quot;] = 11] = &quot;Thu&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Fri&quot;] = 12] = &quot;Fri&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Days[Days[&quot;Sat&quot;] = &quot;S&quot;] = &quot;Sat&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">})(Days || (Days = {}));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>当然，手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">enum Days {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[&quot;Sun&quot;] === 7); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[&quot;Mon&quot;] === 1.5); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[&quot;Tue&quot;] === 2.5); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Days[&quot;Sat&quot;] === 6.5); // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,156),r=[e];function o(c,i,t,C,b,u){return a(),n("div",null,r)}const m=s(p,[["render",o]]);export{y as __pageData,m as default};
