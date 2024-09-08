import{_ as s,c as n,o as a,a as l}from"./app.3ebafb34.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"ubuntu 安装 nginx","slug":"ubuntu-安装-nginx","link":"#ubuntu-安装-nginx","children":[]}],"relativePath":"web-backend/nginx/install.md"}'),e={name:"web-backend/nginx/install.md"},t=l(`<h2 id="ubuntu-安装-nginx" tabindex="-1">ubuntu 安装 nginx <a class="header-anchor" href="#ubuntu-安装-nginx" aria-hidden="true">#</a></h2><ol><li>更新软件包列表</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>安装nginx</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装完成后，Nginx 服务会自动启动。</p><ol start="3"><li>查看服务状态</li></ol><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>访问默认页面 <ol><li>在浏览器中输入服务器的 IP 地址，如果看到 Nginx 的默认欢迎页面，则说明安装成功。</li></ol></li></ol>`,9),p=[t];function o(i,r,c,d,u,C){return a(),n("div",null,p)}const h=s(e,[["render",o]]);export{g as __pageData,h as default};