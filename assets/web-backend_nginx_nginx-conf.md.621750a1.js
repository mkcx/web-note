import{_ as s,c as n,o as a,a as l}from"./app.3ebafb34.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"nginx主配置文件","slug":"nginx主配置文件","link":"#nginx主配置文件","children":[]}],"relativePath":"web-backend/nginx/nginx-conf.md"}'),p={name:"web-backend/nginx/nginx-conf.md"},e=l(`<h2 id="nginx主配置文件" tabindex="-1">nginx主配置文件 <a class="header-anchor" href="#nginx主配置文件" aria-hidden="true">#</a></h2><p>位置：/etc/nginx/nginx.conf</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">nginx</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 指定用户组，意思是服务端执行 nginx 的用户是谁</span></span>
<span class="line"><span style="color:#FFCB6B;">worker_processes</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">error_log</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/var/log/nginx/error.log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">notice</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">pid</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">/var/run/nginx.pid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">events</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">worker_connections</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">/etc/nginx/mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">default_type</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">log_format</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">main</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$remote_addr - $remote_user [$time_local] &quot;$request&quot; </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      </span><span style="color:#FFCB6B;">&#39;</span><span style="color:#A6ACCD;">$status $body_bytes_sent </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$http_referer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">                      </span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#A6ACCD;">$http_user_agent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$http_x_forwarded_for</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    sendfile        on;</span></span>
<span class="line"><span style="color:#C3E88D;">    #tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    keepalive_timeout  65;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    #gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    include /etc/nginx/conf.d/*.conf; # 引入子配置文件</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,3),o=[e];function r(c,t,i,C,y,D){return a(),n("div",null,o)}const F=s(p,[["render",r]]);export{u as __pageData,F as default};
