var vv=Object.defineProperty;var xv=(r,e,t)=>e in r?vv(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Be=(r,e,t)=>xv(r,typeof e!="symbol"?e+"":e,t);function hr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Qp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ba={duration:.5,overwrite:!1,delay:0},ff,yi,kt,An=1e8,At=1/An,rf=Math.PI*2,yv=rf/4,Sv=0,jp=Math.sqrt,Mv=Math.cos,bv=Math.sin,oi=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},fr=function(e){return typeof e=="number"},hc=function(e){return typeof e>"u"},Kn=function(e){return typeof e=="object"},on=function(e){return e!==!1},df=function(){return typeof window<"u"},jl=function(e){return Jt(e)||oi(e)},em=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pi=Array.isArray,Tv=/random\([^)]+\)/g,wv=/,\s*/g,Wp=/(?:-?\.?\d|\.)+/gi,pf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ju=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mf=/[+-]=-?[.\d]+/,Ev=/[^,'"\[\]\s]+/gi,Av=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,Zn,sf,gf,pn={},nc={},tm,im=function(e){return(nc=to(e,pn))&&Ii},uc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ta=function(e,t){return!t&&console.warn(e)},nm=function(e,t){return e&&(pn[e]=t)&&nc&&(nc[e]=t)||pn},wa=function(){return 0},Cv={suppressEvents:!0,isStart:!0,kill:!1},ec={suppressEvents:!0,kill:!1},Rv={suppressEvents:!0},_f={},Hr=[],of={},rm,rn={},Ku={},Xp=30,tc=[],vf="",xf=function(e){var t=e[0],i,n;if(Kn(t)||Jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=tc.length;n--&&!tc[n].targetTest(t););i=tc[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new bf(e[n],i)))||e.splice(n,1);return e},Gr=function(e){return e._gsap||xf(Cn(e))[0]._gsap},yf=function(e,t,i){return(i=e[t])&&Jt(i)?e[t]():hc(i)&&e.getAttribute&&e.getAttribute(t)||i},Wi=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},Ts=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},Pv=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},rc=function(){var e=Hr.length,t=Hr.slice(0),i,n;for(of={},Hr.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Sf=function(e){return!!(e._initted||e._startAt||e.add)},sm=function(e,t,i,n){Hr.length&&!yi&&rc(),e.render(t,i,n||!!(yi&&t<0&&Sf(e))),Hr.length&&!yi&&rc()},om=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ev).length<2?t:oi(e)?e.trim():e},am=function(e){return e},mn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Iv=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},to=function(e,t){for(var i in t)e[i]=t[i];return e},qp=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Kn(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},sc=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},ya=function(e){var t=e.parent||Xt,i=e.keyframes?Iv(Pi(e.keyframes)):mn;if(on(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Lv=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},lm=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},fc=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},Wr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ys=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Dv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},af=function(e,t,i,n){return e._startAt&&(yi?e._startAt.revert(ec):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Nv=function r(e){return!e||e._ts&&r(e.parent)},Yp=function(e){return e._repeat?io(e._tTime,e=e.duration()+e._rDelay)*e:0},io=function(e,t){var i=Math.floor(e=Wt(e/t));return e&&i===e?i-1:i},oc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},dc=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},pc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Wt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),dc(e),i._dirty||ys(i,e)),e},cm=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=oc(e.rawTime(),t),(!t._dur||Ra(0,t.totalDuration(),i)-t._tTime>At)&&t.render(i,!0)),ys(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-At}},Jn=function(e,t,i,n){return t.parent&&Wr(t),t._start=Wt((fr(i)?i:!i&&ac(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:i||e!==Xt?En(e,i,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),lm(e,t,"_first","_last",e._sort?"_start":0),ac(t)||(e._recent=t),n||cm(e,t),e._ts<0&&pc(e,e._tTime),e},hm=function(e,t){return(pn.ScrollTrigger||uc("scrollTrigger",t))&&pn.ScrollTrigger.create(t,e)},um=function(e,t,i,n,s){if(Ef(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!yi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rm!==sn.frame)return Hr.push(e),e._lazy=[s,n],1},Ov=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ac=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Uv=function(e,t,i,n){var s=e.ratio,o=t<0||!t&&(!e._start&&Ov(e)&&!(!e._initted&&ac(e))||(e._ts<0||e._dp._ts<0)&&!ac(e))?0:1,a=e._rDelay,l=0,c,h,d;if(a&&e._repeat&&(l=Ra(0,e._tDur,t),h=io(l,a),e._yoyo&&h&1&&(o=1-o),h!==io(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||yi||n||e._zTime===At||!t&&e._zTime){if(!e._initted&&um(e,t,n,i,l))return;for(d=e._zTime,e._zTime=t||(i?At:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&af(e,t,i,!0),e._onUpdate&&!i&&dn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Wr(e,1),!i&&!yi&&(dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Fv=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},no=function(e,t,i,n){var s=e._repeat,o=Wt(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Wt(o*(s+1)+e._rDelay*s):o,a>0&&!n&&pc(e,e._tTime=e._tDur*a),e.parent&&dc(e),i||ys(e.parent,e),e},$p=function(e){return e instanceof Ri?ys(e):no(e,e._dur)},Bv={_start:0,endTime:wa,totalDuration:wa},En=function r(e,t,i){var n=e.labels,s=e._recent||Bv,o=e.duration()>=An?s.endTime(!1):e._dur,a,l,c;return oi(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Pi(i)?i[0]:i).totalDuration()),a>1?r(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Sa=function(e,t,i){var n=fr(t[1]),s=(n?2:1)+(e<2?0:1),o=t[s],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=on(l.vars.inherit)&&l.parent;o.immediateRender=on(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ti(t[0],o,t[s+1])},Xr=function(e,t){return e||e===0?t(e):t},Ra=function(e,t,i){return i<e?e:i>t?t:i},Si=function(e,t){return!oi(e)||!(t=Av.exec(e))?"":t[1]},zv=function(e,t,i){return Xr(i,function(n){return Ra(e,t,n)})},lf=[].slice,fm=function(e,t){return e&&Kn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Kn(e[0]))&&!e.nodeType&&e!==Zn},kv=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return oi(n)&&!t||fm(n,1)?(s=i).push.apply(s,Cn(n)):i.push(n)})||i},Cn=function(e,t,i){return kt&&!t&&kt.selector?kt.selector(e):oi(e)&&!i&&(sf||!ro())?lf.call((t||gf).querySelectorAll(e),0):Pi(e)?kv(e,i):fm(e)?lf.call(e,0):e?[e]:[]},cf=function(e){return e=Cn(e)[0]||Ta("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Cn(t,i.querySelectorAll?i:i===e?Ta("Invalid scope")||gf.createElement("div"):e)}},dm=function(e){return e.sort(function(){return .5-Math.random()})},pm=function(e){if(Jt(e))return e;var t=Kn(e)?e:{each:e},i=Ss(t.ease),n=t.from||0,s=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=t.axis,h=n,d=n;return oi(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],d=n[1]),function(u,f,p){var v=(p||t).length,m=o[v],g,x,E,y,b,w,_,S,P;if(!m){if(P=t.grid==="auto"?0:(t.grid||[1,An])[1],!P){for(_=-An;_<(_=p[P++].getBoundingClientRect().left)&&P<v;);P<v&&P--}for(m=o[v]=[],g=l?Math.min(P,v)*h-.5:n%P,x=P===An?0:l?v*d/P-.5:n/P|0,_=0,S=An,w=0;w<v;w++)E=w%P-g,y=x-(w/P|0),m[w]=b=c?Math.abs(c==="y"?y:E):jp(E*E+y*y),b>_&&(_=b),b<S&&(S=b);n==="random"&&dm(m),m.max=_-S,m.min=S,m.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(P>v?v-1:c?c==="y"?v/P:P:Math.max(P,v/P))||0)*(n==="edges"?-1:1),m.b=v<0?s-v:s,m.u=Si(t.amount||t.each)||0,i=i&&v<0?jv(i):i}return v=(m[u]-m.min)/m.max||0,Wt(m.b+(i?i(v):v)*m.v)+m.u}},hf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Wt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(fr(i)?0:Si(i))}},mm=function(e,t){var i=Pi(e),n,s;return!i&&Kn(e)&&(n=i=e.radius||An,e.values?(e=Cn(e.values),(s=!fr(e[0]))&&(n*=n)):e=hf(e.increment)),Xr(t,i?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=An,h=0,d=e.length,u,f;d--;)s?(u=e[d].x-a,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-a),u<c&&(c=u,h=d);return h=!n||c<=n?e[h]:o,s||h===o||fr(o)?h:h+Si(o)}:hf(e))},gm=function(e,t,i,n){return Xr(Pi(e)?!t:i===!0?!!(i=0):!n,function(){return Pi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Vv=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,o){return o(s)},n)}},Hv=function(e,t){return function(i){return e(parseFloat(i))+(t||Si(i))}},Gv=function(e,t,i){return vm(e,t,0,1,i)},_m=function(e,t,i){return Xr(i,function(n){return e[~~t(n)]})},Wv=function r(e,t,i){var n=t-e;return Pi(e)?_m(e,r(0,e.length),t):Xr(i,function(s){return(n+(s-e)%n)%n+e})},Xv=function r(e,t,i){var n=t-e,s=n*2;return Pi(e)?_m(e,r(0,e.length-1),t):Xr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>n?s-o:o)})},so=function(e){return e.replace(Tv,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(wv);return gm(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},vm=function(e,t,i,n,s){var o=t-e,a=n-i;return Xr(s,function(l){return i+((l-e)/o*a||0)})},qv=function r(e,t,i,n){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=oi(e),a={},l,c,h,d,u;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(Pi(e)&&!Pi(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(p){p*=d;var v=Math.min(u,~~p);return h[v](p-v)},i=t}else n||(e=to(Pi(e)?[]:{},e));if(!h){for(l in t)Tf.call(a,e,l,"get",t[l]);s=function(p){return Rf(p,a)||(o?e.p:e)}}}return Xr(i,s)},Zp=function(e,t,i){var n=e.labels,s=An,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},dn=function(e,t,i){var n=e.vars,s=n[t],o=kt,a=e._ctx,l,c,h;if(s)return l=n[t+"Params"],c=n.callbackScope||e,i&&Hr.length&&rc(),a&&(kt=a),h=l?s.apply(c,l):s.call(c),kt=o,h},va=function(e){return Wr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yi),e.progress()<1&&dn(e,"onInterrupt"),e},eo,xm=[],ym=function(e){if(e)if(e=!e.name&&e.default||e,df()||e.headless){var t=e.name,i=Jt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:wa,render:Rf,add:Tf,kill:cx,modifier:lx,rawVars:0},o={targetTest:0,get:0,getSetter:mc,aliases:{},register:0};if(ro(),e!==n){if(rn[t])return;mn(n,mn(sc(e,s),o)),to(n.prototype,to(s,sc(e,o))),rn[n.prop=t]=n,e.targetTest&&(tc.push(n),_f[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}nm(t,n),e.register&&e.register(Ii,n,Xi)}else xm.push(e)},Pt=255,xa={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},Qu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Pt+.5|0},Sm=function(e,t,i){var n=e?fr(e)?[e>>16,e>>8&Pt,e&Pt]:0:xa.black,s,o,a,l,c,h,d,u,f,p;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xa[e])n=xa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&Pt,n&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(n=p=e.match(Wp),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,n.length>3&&(n[3]*=1),n[0]=Qu(l+1/3,s,o),n[1]=Qu(l,s,o),n[2]=Qu(l-1/3,s,o);else if(~e.indexOf("="))return n=e.match(pf),i&&n.length<4&&(n[3]=1),n}else n=e.match(Wp)||xa.transparent;n=n.map(Number)}return t&&!p&&(s=n[0]/Pt,o=n[1]/Pt,a=n[2]/Pt,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Mm=function(e){var t=[],i=[],n=-1;return e.split(ur).forEach(function(s){var o=s.match(bs)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},Jp=function(e,t,i){var n="",s=(e+n).match(ur),o=t?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return e;if(s=s.map(function(u){return(u=Sm(u,t,1))&&o+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(h=Mm(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(ur,"1").split(bs),d=c.length-1;a<d;a++)n+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=e.split(ur),d=c.length-1;a<d;a++)n+=c[a]+s[a];return n+c[d]},ur=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Yv=/hsl[a]?\(/,Mf=function(e){var t=e.join(" "),i;if(ur.lastIndex=0,ur.test(t))return i=Yv.test(t),e[1]=Jp(e[1],i),e[0]=Jp(e[0],i,Mm(e[1])),!0},Ea,sn=(function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,c,h,d,u,f,p=function v(m){var g=r()-n,x=m===!0,E,y,b,w;if((g>e||g<0)&&(i+=g-t),n+=g,b=n-i,E=b-o,(E>0||x)&&(w=++d.frame,u=b-d.time*1e3,d.time=b=b/1e3,o+=E+(E>=s?0:s-E),y=1),x||(l=c(v)),y)for(f=0;f<a.length;f++)a[f](b,u,w,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){tm&&(!sf&&df()&&(Zn=sf=window,gf=Zn.document||{},pn.gsap=Ii,(Zn.gsapVersions||(Zn.gsapVersions=[])).push(Ii.version),im(nc||Zn.GreenSockGlobals||!Zn.gsap&&Zn||{}),xm.forEach(ym)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Ea=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ea=0,c=wa},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,g,x){var E=g?function(y,b,w,_){m(y,b,w,_),d.remove(E)}:m;return d.remove(m),a[x?"unshift":"push"](E),ro(),E},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),ro=function(){return!Ea&&sn.wake()},_t={},$v=/^[\d.\-M][\d.\-,\s]/,Zv=/["']/g,Jv=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[n]=isNaN(c)?c.replace(Zv,"").trim():+c,n=l.substr(a+1).trim();return t},Kv=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Qv=function(e){var t=(e+"").split("("),i=_t[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Jv(t[1])]:Kv(e).split(",").map(om)):_t._CE&&$v.test(e)?_t._CE("",e):i},jv=function(e){return function(t){return 1-e(1-t)}},Ss=function(e,t){return e&&(Jt(e)?e:_t[e]||Qv(e))||t},ws=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},o;return Wi(e,function(a){_t[a]=pn[a]=s,_t[o=a.toLowerCase()]=i;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},bm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ju=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/rf*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*bv((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:bm(a);return s=rf/s,l.config=function(c,h){return r(e,c,h)},l},ef=function r(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:bm(i);return n.config=function(s){return r(e,s)},n};Wi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ws(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;ws("Elastic",ju("in"),ju("out"),ju());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(a){return a<t?r*a*a:a<i?r*Math.pow(a-1.5/e,2)+.75:a<n?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ws("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ws("Circ",function(r){return-(jp(1-r*r)-1)});ws("Sine",function(r){return r===1?1:-Mv(r*yv)+1});ws("Back",ef("in"),ef("out"),ef());_t.SteppedEase=_t.steps=pn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,o=1-At;return function(a){return((n*Ra(0,o,a)|0)+s)*i}}};ba.ease=_t["quad.out"];Wi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return vf+=r+","+r+"Params,"});var bf=function(e,t){this.id=Sv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:yf,this.set=t?t.getSetter:mc},Aa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,no(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),Ea||sn.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,no(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(ro(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pc(this,i),!s._dp||s.parent||cm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Jn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),sm(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Yp(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Yp(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?io(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?oc(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-At?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(Ra(-Math.abs(this._delay),a,s),n!==!1),dc(this),Dv(this)},e.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ro(),this._ts=this._rts;var n=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==At,o;if(s)for(this._tTime-=At,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=n+At){s=!1;break}o=o._next}this.totalTime(n,s)}return this},e.startTime=function(i){if(arguments.length){this._start=Wt(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Jn(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(on(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?oc(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Rv);var n=yi;return yi=i,Sf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yi=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,$p(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,$p(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(En(this,i),on(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,on(n)),this._dur||(this._zTime=-At),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-At)},e.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this,s=n._prom;return new Promise(function(o){var a=Jt(i)?i:am,l=function(){var h=n.then;n.then=null,s&&s(),Jt(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=h),o(a),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){va(this)},r})();mn(Aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Ri=(function(r){Qp(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=on(i.sortChildren),Xt&&Jn(i.parent||Xt,hr(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&hm(hr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,o){return Sa(0,arguments,this),this},t.from=function(n,s,o){return Sa(1,arguments,this),this},t.fromTo=function(n,s,o,a){return Sa(2,arguments,this),this},t.set=function(n,s,o){return s.duration=0,s.parent=this,ya(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ti(n,s,En(this,o),1),this},t.call=function(n,s,o){return Jn(this,ti.delayedCall(0,n,s),o)},t.staggerTo=function(n,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ti(n,o,En(this,l)),this},t.staggerFrom=function(n,s,o,a,l,c,h){return o.runBackwards=1,ya(o).immediateRender=on(o.immediateRender),this.staggerTo(n,s,o,a,l,c,h)},t.staggerFromTo=function(n,s,o,a,l,c,h,d){return a.startAt=o,ya(a).immediateRender=on(a.immediateRender),this.staggerTo(n,s,a,l,c,h,d)},t.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Wt(n),d=this._zTime<0!=n<0&&(this._initted||!c),u,f,p,v,m,g,x,E,y,b,w,_;if(this!==Xt&&h>l&&n>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),u=h,y=this._start,E=this._ts,g=!E,d&&(c||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,o);if(u=Wt(h%m),h===l?(v=this._repeat,u=c):(b=Wt(h/m),v=~~b,v&&v===b&&(u=c,v--),u>c&&(u=c)),b=io(this._tTime,m),!a&&this._tTime&&b!==v&&this._tTime-b*m-this._dur<=0&&(b=v),w&&v&1&&(u=c-u,_=1),v!==b&&!this._lock){var S=w&&b&1,P=S===(w&&v&1);if(v<b&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(_?0:Wt(v*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,b=v),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Fv(this,Wt(a),Wt(u)),x&&(h-=u-(u=x._start))),this._tTime=h,this._time=u,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&c&&!s&&!b&&(dn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&n>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){x=0,p&&(h+=this._zTime=-At);break}}f=p}else{f=this._last;for(var C=n<0?n:u;f;){if(p=f._prev,(f._act||C<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,o||yi&&Sf(f)),u!==this._time||!this._ts&&!g){x=0,p&&(h+=this._zTime=C?-At:At);break}}f=p}}if(x&&!s&&(this.pause(),x.render(u>=a?0:-At)._zTime=u>=a?1:-1,this._ts))return this._start=y,dc(this),this.render(n,s,o);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Wr(this,1),!s&&!(n<0&&!a)&&(h||a||!l)&&(dn(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var o=this;if(fr(s)||(s=En(this,s,n)),!(n instanceof Aa)){if(Pi(n))return n.forEach(function(a){return o.add(a,s)}),this;if(oi(n))return this.addLabel(n,s);if(Jt(n))n=ti.delayedCall(0,n);else return this}return this!==n?Jn(this,n,s):this},t.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-An);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ti?s&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},t.remove=function(n){return oi(n)?this.removeLabel(n):Jt(n)?this.killTweensOf(n):(n.parent===this&&fc(this,n),n===this._recent&&(this._recent=this._last),ys(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(sn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=En(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,o){var a=ti.delayedCall(0,s||wa,o);return a.data="isPause",this._hasPause=1,Jn(this,a,En(this,n))},t.removePause=function(n){var s=this._first;for(n=En(this,n);s;)s._start===n&&s.data==="isPause"&&Wr(s),s=s._next},t.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Vr!==a[l]&&a[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var o=[],a=Cn(n),l=this._first,c=fr(s),h;l;)l instanceof ti?Pv(l._targets,a)&&(c?(!Vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(n,s){s=s||{};var o=this,a=En(o,n),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=ti.to(o,mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&no(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},s));return u?p.render(0):p},t.tweenFromTo=function(n,s,o){return this.tweenTo(s,mn({startAt:{time:En(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Zp(this,En(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Zp(this,En(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(n,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=Wt(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=n);return ys(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ys(this)},t.totalDuration=function(n){var s=0,o=this,a=o._last,l=An,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Jn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Wt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;no(o,o===Xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(Xt._ts&&(sm(Xt,oc(n,Xt)),rm=sn.frame),sn.frame>=Xp){Xp+=an.autoSleep||120;var s=Xt._first;if((!s||!s._ts)&&an.autoSleep&&sn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||sn.sleep()}}},e})(Aa);mn(Ri.prototype,{_lock:0,_hasPause:0,_forcing:0});var ex=function(e,t,i,n,s,o,a){var l=new Xi(this._pt,e,t,0,1,Cf,null,s),c=0,h=0,d,u,f,p,v,m,g,x;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=so(n)),o&&(x=[i,n],o(x,e,t),i=x[0],n=x[1]),u=i.match(Ju)||[];d=Ju.exec(n);)p=d[0],v=n.substring(c,d.index),f?f=(f+1)%5:v.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:v||h===1?v:",",s:m,c:p.charAt(1)==="="?Ts(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Ju.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(mf.test(n)||g)&&(l.e=0),this._pt=l,l},Tf=function(e,t,i,n,s,o,a,l,c,h){Jt(n)&&(n=n(s||0,e,o));var d=e[t],u=i!=="get"?i:Jt(d)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Jt(d)?c?sx:wm:Af,p;if(oi(n)&&(~n.indexOf("random(")&&(n=so(n)),n.charAt(1)==="="&&(p=Ts(u,n)+(Si(u)||0),(p||p===0)&&(n=p))),!h||u!==n||uf)return!isNaN(u*n)&&n!==""?(p=new Xi(this._pt,e,t,+u||0,n-(u||0),typeof d=="boolean"?ax:Em,0,f),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!d&&!(t in e)&&uc(t,n),ex.call(this,e,t,u,n,f,l||an.stringFilter,c))},tx=function(e,t,i,n,s){if(Jt(e)&&(e=Ma(e,s,t,i,n)),!Kn(e)||e.style&&e.nodeType||Pi(e)||em(e))return oi(e)?Ma(e,s,t,i,n):e;var o={},a;for(a in e)o[a]=Ma(e[a],s,t,i,n);return o},wf=function(e,t,i,n,s,o){var a,l,c,h;if(rn[e]&&(a=new rn[e]).init(s,a.rawVars?t[e]:tx(t[e],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new Xi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==eo))for(c=i._ptLookup[i._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Vr,uf,Ef=function r(e,t,i){var n=e.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,u=n.keyframes,f=n.autoRevert,p=e._dur,v=e._startAt,m=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:m,E=e._overwrite==="auto"&&!ff,y=e.timeline,b=n.easeReverse||d,w,_,S,P,C,N,D,H,I,V,X,U,ie;if(y&&(!u||!s)&&(s="none"),e._ease=Ss(s,ba.ease),e._rEase=b&&(Ss(b)||e._ease),e._from=!y&&!!n.runBackwards,e._from&&(e.ratio=1),!y||u&&!n.stagger){if(H=m[0]?Gr(m[0]).harness:0,U=H&&n[H.prop],w=sc(n,_f),v&&(v._zTime<0&&v.progress(1),t<0&&h&&a&&!f?v.render(-1,!0):v.revert(h&&p?ec:Cv),v._lazy=0),o){if(Wr(e._startAt=ti.set(m,mn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!v&&on(l),startAt:null,delay:0,onUpdate:c&&function(){return dn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yi||!a&&!f)&&e._startAt.revert(ec),a&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&p&&!v){if(t&&(a=!1),S=mn({overwrite:!1,data:"isFromStart",lazy:a&&!v&&on(l),immediateRender:a,stagger:0,parent:g},w),U&&(S[H.prop]=U),Wr(e._startAt=ti.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yi?e._startAt.revert(ec):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&on(l)||l&&!p,_=0;_<m.length;_++){if(C=m[_],D=C._gsap||xf(m)[_]._gsap,e._ptLookup[_]=V={},of[D.id]&&Hr.length&&rc(),X=x===m?_:x.indexOf(C),H&&(I=new H).init(C,U||w,e,X,x)!==!1&&(e._pt=P=new Xi(e._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(q){V[q]=P}),I.priority&&(N=1)),!H||U)for(S in w)rn[S]&&(I=wf(S,w,e,X,C,x))?I.priority&&(N=1):V[S]=P=Tf.call(e,C,S,"get",w[S],X,x,0,n.stringFilter);e._op&&e._op[_]&&e.kill(C,e._op[_]),E&&e._pt&&(Vr=e,Xt.killTweensOf(C,V,e.globalTime(t)),ie=!e.parent,Vr=0),e._pt&&l&&(of[D.id]=1)}N&&Pf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ie,u&&t<=0&&y.render(An,!0,!0)},ix=function(e,t,i,n,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return uf=1,e.vars[t]="+=0",Ef(e,a),uf=0,l?Ta(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(n||n===0)&&!s?n:h.s+(n||0)+o*h.c,h.c=i-h.s,d.e&&(d.e=Kt(i)+Si(d.e)),d.b&&(d.b=h.s+Si(d.b))},nx=function(e,t){var i=e[0]?Gr(e[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return t;s=to({},t);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},rx=function(e,t,i,n){var s=t.ease||n||"power1.inOut",o,a;if(Pi(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ma=function(e,t,i,n,s){return Jt(e)?e.call(t,i,n,s):oi(e)&&~e.indexOf("random(")?so(e):e},lc=vf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Tm={};Wi(lc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Tm[r]=1});lc=lc.split(",");var ti=(function(r){Qp(e,r);function e(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:ya(n))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,v=l.defaults,m=l.scrollTrigger,g=n.parent||Xt,x=(Pi(i)||em(i)?fr(i[0]):"length"in n)?[i]:Cn(i),E,y,b,w,_,S,P,C;if(a._targets=x.length?xf(x):Ta("GSAP target "+i+" not found. https://gsap.com",!an.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||jl(c)||jl(h)){n=a.vars;var N=n.easeReverse||n.yoyoEase;if(E=a.timeline=new Ri({data:"nested",defaults:v||{},targets:g&&g.data==="nested"?g.vars.targets:x}),E.kill(),E.parent=E._dp=hr(a),E._start=0,u||jl(c)||jl(h)){if(w=x.length,P=u&&pm(u),Kn(u))for(_ in u)~lc.indexOf(_)&&(C||(C={}),C[_]=u[_]);for(y=0;y<w;y++)b=sc(n,Tm),b.stagger=0,N&&(b.easeReverse=N),C&&to(b,C),S=x[y],b.duration=+Ma(c,hr(a),y,S,x),b.delay=(+Ma(h,hr(a),y,S,x)||0)-a._delay,!u&&w===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),E.to(S,b,P?P(y,S,x):0),E._ease=_t.none;E.duration()?c=h=0:a.timeline=0}else if(p){ya(mn(E.vars.defaults,{ease:"none"})),E._ease=Ss(p.ease||n.ease||"none");var D=0,H,I,V;if(Pi(p))p.forEach(function(X){return E.to(x,X,">")}),E.duration();else{b={};for(_ in p)_==="ease"||_==="easeEach"||rx(_,p[_],b,p.easeEach);for(_ in b)for(H=b[_].sort(function(X,U){return X.t-U.t}),D=0,y=0;y<H.length;y++)I=H[y],V={ease:I.e,duration:(I.t-(y?H[y-1].t:0))/100*c},V[_]=I.v,E.to(x,V,D),D+=V.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return f===!0&&!ff&&(Vr=hr(a),Xt.killTweensOf(x),Vr=0),Jn(g,hr(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!c&&!p&&a._start===Wt(g._time)&&on(d)&&Nv(hr(a))&&g.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-h)||0)),m&&hm(hr(a),m),a}var t=e.prototype;return t.render=function(n,s,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,d=n>l-At&&!h?l:n<At?0:n,u,f,p,v,m,g,x,E;if(!c)Uv(this,n,s,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,E=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(v*100+n,s,o);if(u=Wt(d%v),d===l?(p=this._repeat,u=c):(m=Wt(d/v),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=io(this._tTime,v),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==v&&this._initted&&(this._lock=o=1,this.render(Wt(v*p),!0).invalidate()._lock=0)}if(!this._initted){if(um(this,h?n:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,s,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var b=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(u/c);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(dn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;E&&E.render(n<0?n:E._dur*E._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&af(this,n,s,o),dn(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&af(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Wr(this,1),!s&&!(h&&!a)&&(d||a||g)&&(dn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,o,a,l){Ea||sn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ef(this,c),h=this._ease(c/this._dur),ix(this,n,s,o,a,h,c,l)?this.resetTo(n,s,o,a,1):(pc(this,0),this.parent||lm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?va(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yi),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Vr&&Vr.vars.overwrite!==!0)._first||va(this),this.parent&&o!==this.timeline.totalDuration()&&no(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Cn(n):a,c=this._ptLookup,h=this._pt,d,u,f,p,v,m,g;if((!s||s==="all")&&Lv(a,l))return s==="all"&&(this._pt=0),va(this);for(d=this._op=this._op||[],s!=="all"&&(oi(s)&&(v={},Wi(s,function(x){return v[x]=1}),s=v),s=nx(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,p=u,f={}):(f=d[g]=d[g]||{},p=s);for(v in p)m=u&&u[v],m&&((!("kill"in m.d)||m.d.kill(v)===!0)&&fc(this,m,"_pt"),delete u[v]),f!=="all"&&(f[v]=1)}return this._initted&&!this._pt&&h&&va(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return Sa(1,arguments)},e.delayedCall=function(n,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,s,o){return Sa(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,o){return Xt.killTweensOf(n,s,o)},e})(Aa);mn(ti.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wi("staggerTo,staggerFrom,staggerFromTo",function(r){ti[r]=function(){var e=new Ri,t=lf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Af=function(e,t,i){return e[t]=i},wm=function(e,t,i){return e[t](i)},sx=function(e,t,i,n){return e[t](n.fp,i)},ox=function(e,t,i){return e.setAttribute(t,i)},mc=function(e,t){return Jt(e[t])?wm:hc(e[t])&&e.setAttribute?ox:Af},Em=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ax=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cf=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Rf=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},lx=function(e,t,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(e,t,i),s=o},cx=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?fc(this,t,"_pt"):t.dep||(i=1),t=n;return!i},hx=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Pf=function(e){for(var t=e._pt,i,n,s,o;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=s},Xi=(function(){function r(t,i,n,s,o,a,l,c,h){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||Em,this.d=l||this,this.set=c||Af,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=hx,this.m=i,this.mt=s,this.tween=n},r})();Wi(vf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return _f[r]=1});pn.TweenMax=pn.TweenLite=ti;pn.TimelineLite=pn.TimelineMax=Ri;Xt=new Ri({sortChildren:!1,defaults:ba,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=Mf;var Ms=[],ic={},ux=[],Kp=0,fx=0,tf=function(e){return(ic[e]||ux).map(function(t){return t()})},Ca=function(){var e=Date.now(),t=[];e-Kp>2&&(tf("matchMediaInit"),Ms.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,c;for(a in n)o=Zn.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),tf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Kp=e,tf("matchMedia"))},Am=(function(){function r(t,i){this.selector=i&&cf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=fx++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){Jt(i)&&(s=n,n=i,i=Jt);var o=this,a=function(){var c=kt,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=cf(s)),kt=o,d=n.apply(o,arguments),Jt(d)&&o._r.push(d),kt=c,o.selector=h,o.isReverted=!1,d};return o.last=a,i===Jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=kt;kt=null,i(this),kt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof ti&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ri?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ti)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n){for(var o=Ms.length;o--;)Ms[o].id===this.id&&Ms.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Ca):a.removeEventListener("change",Ca)}),this._mqs=null}},e.revert=function(i){this.kill(i||{})},r})(),dx=(function(){function r(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){Kn(i)||(i={matches:i});var o=new Am(0,s||this.scope),a=o.conditions={},l,c,h;kt&&!o.selector&&(o.selector=kt.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Zn.matchMedia(i[c]),l&&(Ms.indexOf(o)<0&&Ms.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ca):l.addEventListener("change",Ca),(o._mqs||(o._mqs=[])).push(l)));return h&&n(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),cc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return ym(n)})},timeline:function(e){return new Ri(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,i,n){oi(e)&&(e=Cn(e)[0]);var s=Gr(e||{}).get,o=i?am:om;return i==="native"&&(i=""),e&&(t?o((rn[t]&&rn[t].get||s)(e,t,i,n)):function(a,l,c){return o((rn[a]&&rn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Cn(e),e.length>1){var n=e.map(function(h){return Ii.quickSetter(h,t,i)}),s=n.length;return function(h){for(var d=s;d--;)n[d](h)}}e=e[0]||{};var o=rn[t],a=Gr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var d=new o;eo._pt=0,d.init(e,i?h+i:h,eo,0,[e]),d.render(1,d),eo._pt&&Rf(1,eo)}:a.set(e,l);return o?c:function(h){return c(e,l,i?h+i:h,a,1)}},quickTo:function(e,t,i){var n,s=Ii.to(e,mn((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,ba.ease)),qp(ba,e||{})},config:function(e){return qp(an,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!rn[a]&&!pn[a]&&Ta(t+" effect requires "+a+" plugin.")}),Ku[t]=function(a,l,c){return i(Cn(a),mn(l||{},s),c)},o&&(Ri.prototype[t]=function(a,l,c){return this.add(Ku[t](a,Kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):_t},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Ri(e),n,s;for(i.smoothChildTiming=on(e.smoothChildTiming),Xt.remove(i),i._dp=0,i._time=i._tTime=Xt._time,n=Xt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof ti&&n.vars.onComplete===n._targets[0]))&&Jn(i,n,n._start-n._delay),n=s;return Jn(Xt,i,0),i},context:function(e,t){return e?new Am(e,t):kt},matchMedia:function(e){return new dx(e)},matchMediaRefresh:function(){return Ms.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Ca()},addEventListener:function(e,t){var i=ic[e]||(ic[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=ic[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Wv,wrapYoyo:Xv,distribute:pm,random:gm,snap:mm,normalize:Gv,getUnit:Si,clamp:zv,splitColor:Sm,toArray:Cn,selector:cf,mapRange:vm,pipe:Vv,unitize:Hv,interpolate:qv,shuffle:dm},install:im,effects:Ku,ticker:sn,updateRoot:Ri.updateRoot,plugins:rn,globalTimeline:Xt,core:{PropTween:Xi,globals:nm,Tween:ti,Timeline:Ri,Animation:Aa,getCache:Gr,_removeLinkedListItem:fc,reverting:function(){return yi},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return ff=e}}};Wi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return cc[r]=ti[r]});sn.add(Ri.updateRoot);eo=cc.to({},{duration:0});var px=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},mx=function(e,t){var i=e._targets,n,s,o;for(n in t)for(s=i.length;s--;)o=e._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=px(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[s],n))},nf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,c;if(oi(s)&&(l={},Wi(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}mx(a,s)}}}},Ii=cc.registerPlugin({name:"attr",init:function(e,t,i,n,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)yi?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},nf("roundProps",hf),nf("modifiers"),nf("snap",mm))||cc;ti.version=Ri.version=Ii.version="3.15.1";tm=1;df()&&ro();var gx=_t.Power0,_x=_t.Power1,vx=_t.Power2,xx=_t.Power3,yx=_t.Power4,Sx=_t.Linear,Mx=_t.Quad,bx=_t.Cubic,Tx=_t.Quart,wx=_t.Quint,Ex=_t.Strong,Ax=_t.Elastic,Cx=_t.Back,Rx=_t.SteppedEase,Px=_t.Bounce,Ix=_t.Sine,Lx=_t.Expo,Dx=_t.Circ;var Cm,qr,ao,Uf,Rs,Nx,Rm,Ff,Ox=function(){return typeof window<"u"},pr={},Cs=180/Math.PI,lo=Math.PI/180,oo=Math.atan2,Pm=1e8,Bf=/([A-Z])/g,Ux=/(left|right|width|margin|padding|x)/i,Fx=/[\s,\(]\S/,Qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},kx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Vx=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Bm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},zm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Hx=function(e,t,i){return e.style[t]=i},Gx=function(e,t,i){return e.style.setProperty(t,i)},Wx=function(e,t,i){return e._gsap[t]=i},Xx=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},qx=function(e,t,i,n,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Yx=function(e,t,i,n,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},qt="transform",ln=qt+"Origin",$x=function r(e,t){var i=this,n=this.target,s=n.style,o=n._gsap;if(e in pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Qn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=dr(n,a)}):this.tfm[e]=o.x?o[e]:dr(n,e),e===ln&&(this.tfm.zOrigin=o.zOrigin);else return Qn.transform.split(",").forEach(function(a){return r.call(i,a,t)});if(this.props.indexOf(qt)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(ln,t,"")),e=qt}(s||t)&&this.props.push(e,t,s[e])},km=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Zx=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ff(),(!s||!s.isStart)&&!i[qt]&&(km(i),n.zOrigin&&i[ln]&&(i[ln]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Vm=function(e,t){var i={target:e,props:[],revert:Zx,save:$x};return e._gsap||Ii.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Hm,Df=function(e,t){var i=qr.createElementNS?qr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qr.createElement(e);return i&&i.style?i:qr.createElement(e)},gn=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Bf,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,co(t)||t,1)||""},Im="O,Moz,ms,Ms,Webkit".split(","),co=function(e,t,i){var n=t||Rs,s=n.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Im[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Im[o]:"")+e},Nf=function(){Ox()&&window.document&&(Cm=window,qr=Cm.document,ao=qr.documentElement,Rs=Df("div")||{style:{}},Nx=Df("div"),qt=co(qt),ln=qt+"Origin",Rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hm=!!co("perspective"),Ff=Ii.core.reverting,Uf=1)},Lm=function(e){var t=e.ownerSVGElement,i=Df("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),s;n.style.display="block",i.appendChild(n),ao.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),ao.removeChild(i),s},Dm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Gm=function(e){var t,i;try{t=e.getBBox()}catch{t=Lm(e),i=1}return t&&(t.width||t.height)||i||(t=Lm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Dm(e,["x","cx","x1"])||0,y:+Dm(e,["y","cy","y1"])||0,width:0,height:0}:t},Wm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Gm(e))},$r=function(e,t){if(t){var i=e.style,n;t in pr&&t!==ln&&(t=qt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Bf,"-$1").toLowerCase())):i.removeAttribute(t)}},Yr=function(e,t,i,n,s,o){var a=new Xi(e._pt,t,i,0,1,o?zm:Bm);return e._pt=a,a.b=n,a.e=s,e._props.push(i),a},Nm={deg:1,rad:1,turn:1},Jx={grid:1,flex:1},Zr=function r(e,t,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Rs.style,l=Ux.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=n==="px",f=n==="%",p,v,m,g;if(n===o||!s||Nm[n]||Nm[o])return s;if(o!=="px"&&!u&&(s=r(e,t,i,"px")),g=e.getCTM&&Wm(e),(f||o==="%")&&(pr[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[h],Kt(f?s/p*d:s/100*p);if(a[l?"width":"height"]=d+(u?o:n),v=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===qr||!v.appendChild)&&(v=qr.body),m=v._gsap,m&&f&&m.width&&l&&m.time===sn.time&&!m.uncache)return Kt(s/m.width*d);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+n,p=e[h],x?e.style[t]=x:$r(e,t)}else(f||o==="%")&&!Jx[gn(v,"display")]&&(a.position=gn(e,"position")),v===e&&(a.position="static"),v.appendChild(Rs),p=Rs[h],v.removeChild(Rs),a.position="absolute";return l&&f&&(m=Gr(v),m.time=sn.time,m.width=v[h]),Kt(u?p*s/d:p&&s?d/p*s:0)},dr=function(e,t,i,n){var s;return Uf||Nf(),t in Qn&&t!=="transform"&&(t=Qn[t],~t.indexOf(",")&&(t=t.split(",")[0])),pr[t]&&t!=="transform"?(s=La(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_c(gn(e,ln))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=gc[t]&&gc[t](e,t,i)||gn(e,t)||yf(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Zr(e,t,s,i)+i:s},Kx=function(e,t,i,n){if(!i||i==="none"){var s=co(t,e,1),o=s&&gn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=gn(e,"borderTopColor"))}var a=new Xi(this._pt,e.style,t,0,1,Cf),l=0,c=0,h,d,u,f,p,v,m,g,x,E,y,b;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=gn(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(v=e.style[t],e.style[t]=n,n=gn(e,t)||n,v?e.style[t]=v:$r(e,t)),h=[i,n],Mf(h),i=h[0],n=h[1],u=i.match(bs)||[],b=n.match(bs)||[],b.length){for(;d=bs.exec(n);)m=d[0],x=n.substring(l,d.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),m!==(v=u[c++]||"")&&(f=parseFloat(v)||0,y=v.substr((f+"").length),m.charAt(1)==="="&&(m=Ts(f,m)+y),g=parseFloat(m),E=m.substr((g+"").length),l=bs.lastIndex-E.length,E||(E=E||an.units[t]||y,l===n.length&&(n+=E,a.e+=E)),y!==E&&(f=Zr(e,t,v,E)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:g-f,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?zm:Bm;return mf.test(n)&&(a.e=0),this._pt=a,a},Om={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qx=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Om[i]||i,t[1]=Om[n]||n,t.join(" ")},jx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],pr[a]&&(l=1,a=a==="transformOrigin"?ln:qt),$r(i,a);l&&($r(i,qt),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",La(i,1),o.uncache=1,km(n)))}},gc={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var o=e._pt=new Xi(e._pt,t,i,0,0,jx);return o.u=n,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ia=[1,0,0,1,0,0],Xm={},qm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Um=function(e){var t=gn(e,qt);return qm(t)?Ia:t.substr(7).match(pf).map(Kt)},zf=function(e,t){var i=e._gsap||Gr(e),n=e.style,s=Um(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ia:s):(s===Ia&&!e.offsetParent&&e!==ao&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ao.appendChild(e)),s=Um(e),l?n.display=l:$r(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ao.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Of=function(e,t,i,n,s,o){var a=e._gsap,l=s||zf(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],v=l[2],m=l[3],g=l[4],x=l[5],E=t.split(" "),y=parseFloat(E[0])||0,b=parseFloat(E[1])||0,w,_,S,P;i?l!==Ia&&(_=f*m-p*v)&&(S=y*(m/_)+b*(-v/_)+(v*x-m*g)/_,P=y*(-p/_)+b*(f/_)-(f*x-p*g)/_,y=S,b=P):(w=Gm(e),y=w.x+(~E[0].indexOf("%")?y/100*w.width:y),b=w.y+(~(E[1]||E[0]).indexOf("%")?b/100*w.height:b)),n||n!==!1&&a.smooth?(g=y-c,x=b-h,a.xOffset=d+(g*f+x*v)-g,a.yOffset=u+(g*p+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[ln]="0px 0px",o&&(Yr(o,a,"xOrigin",c,y),Yr(o,a,"yOrigin",h,b),Yr(o,a,"xOffset",d,a.xOffset),Yr(o,a,"yOffset",u,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},La=function(e,t){var i=e._gsap||new bf(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=gn(e,ln)||"0",h,d,u,f,p,v,m,g,x,E,y,b,w,_,S,P,C,N,D,H,I,V,X,U,ie,q,R,ee,ye,we,K,ce;return h=d=u=v=m=g=x=E=y=0,f=p=1,i.svg=!!(e.getCTM&&Wm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qt]!=="none"?l[qt]:"")),n.scale=n.rotate=n.translate="none"),_=zf(e,i.svg),i.svg&&(i.uncache?(ie=e.getBBox(),c=i.xOrigin-ie.x+"px "+(i.yOrigin-ie.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),Of(e,U||c,!!U||i.originIsAbsolute,i.smooth!==!1,_)),b=i.xOrigin||0,w=i.yOrigin||0,_!==Ia&&(N=_[0],D=_[1],H=_[2],I=_[3],h=V=_[4],d=X=_[5],_.length===6?(f=Math.sqrt(N*N+D*D),p=Math.sqrt(I*I+H*H),v=N||D?oo(D,N)*Cs:0,x=H||I?oo(H,I)*Cs+v:0,x&&(p*=Math.abs(Math.cos(x*lo))),i.svg&&(h-=b-(b*N+w*H),d-=w-(b*D+w*I))):(ce=_[6],we=_[7],R=_[8],ee=_[9],ye=_[10],K=_[11],h=_[12],d=_[13],u=_[14],S=oo(ce,ye),m=S*Cs,S&&(P=Math.cos(-S),C=Math.sin(-S),U=V*P+R*C,ie=X*P+ee*C,q=ce*P+ye*C,R=V*-C+R*P,ee=X*-C+ee*P,ye=ce*-C+ye*P,K=we*-C+K*P,V=U,X=ie,ce=q),S=oo(-H,ye),g=S*Cs,S&&(P=Math.cos(-S),C=Math.sin(-S),U=N*P-R*C,ie=D*P-ee*C,q=H*P-ye*C,K=I*C+K*P,N=U,D=ie,H=q),S=oo(D,N),v=S*Cs,S&&(P=Math.cos(S),C=Math.sin(S),U=N*P+D*C,ie=V*P+X*C,D=D*P-N*C,X=X*P-V*C,N=U,V=ie),m&&Math.abs(m)+Math.abs(v)>359.9&&(m=v=0,g=180-g),f=Kt(Math.sqrt(N*N+D*D+H*H)),p=Kt(Math.sqrt(X*X+ce*ce)),S=oo(V,X),x=Math.abs(S)>2e-4?S*Cs:0,y=K?1/(K<0?-K:K):0),i.svg&&(U=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!qm(gn(e,qt)),U&&e.setAttribute("transform",U))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=v<=0?180:-180,v+=v<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=u+o,i.scaleX=Kt(f),i.scaleY=Kt(p),i.rotation=Kt(v)+a,i.rotationX=Kt(m)+a,i.rotationY=Kt(g)+a,i.skewX=x+a,i.skewY=E+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[ln]=_c(c)),i.xOffset=i.yOffset=0,i.force3D=an.force3D,i.renderTransform=i.svg?ty:Hm?Ym:ey,i.uncache=0,i},_c=function(e){return(e=e.split(" "))[0]+" "+e[1]},If=function(e,t,i){var n=Si(t);return Kt(parseFloat(t)+parseFloat(Zr(e,"x",i+"px",n)))+n},ey=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ym(e,t)},Es="0deg",Pa="0px",As=") ",Ym=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,d=i.rotationX,u=i.skewX,f=i.skewY,p=i.scaleX,v=i.scaleY,m=i.transformPerspective,g=i.force3D,x=i.target,E=i.zOrigin,y="",b=g==="auto"&&e&&e!==1||g===!0;if(E&&(d!==Es||h!==Es)){var w=parseFloat(h)*lo,_=Math.sin(w),S=Math.cos(w),P;w=parseFloat(d)*lo,P=Math.cos(w),o=If(x,o,_*P*-E),a=If(x,a,-Math.sin(w)*-E),l=If(x,l,S*P*-E+E)}m!==Pa&&(y+="perspective("+m+As),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(b||o!==Pa||a!==Pa||l!==Pa)&&(y+=l!==Pa||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+As),c!==Es&&(y+="rotate("+c+As),h!==Es&&(y+="rotateY("+h+As),d!==Es&&(y+="rotateX("+d+As),(u!==Es||f!==Es)&&(y+="skew("+u+", "+f+As),(p!==1||v!==1)&&(y+="scale("+p+", "+v+As),x.style[qt]=y||"translate(0, 0)"},ty=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,d=i.scaleX,u=i.scaleY,f=i.target,p=i.xOrigin,v=i.yOrigin,m=i.xOffset,g=i.yOffset,x=i.forceCSS,E=parseFloat(o),y=parseFloat(a),b,w,_,S,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=lo,c*=lo,b=Math.cos(l)*d,w=Math.sin(l)*d,_=Math.sin(l-c)*-u,S=Math.cos(l-c)*u,c&&(h*=lo,P=Math.tan(c-h),P=Math.sqrt(1+P*P),_*=P,S*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),b*=P,w*=P)),b=Kt(b),w=Kt(w),_=Kt(_),S=Kt(S)):(b=d,S=u,w=_=0),(E&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(E=Zr(f,"x",o,"px"),y=Zr(f,"y",a,"px")),(p||v||m||g)&&(E=Kt(E+p-(p*b+v*_)+m),y=Kt(y+v-(p*w+v*S)+g)),(n||s)&&(P=f.getBBox(),E=Kt(E+n/100*P.width),y=Kt(y+s/100*P.height)),P="matrix("+b+","+w+","+_+","+S+","+E+","+y+")",f.setAttribute("transform",P),x&&(f.style[qt]=P)},iy=function(e,t,i,n,s){var o=360,a=oi(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Cs:1),c=l-n,h=n+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Pm)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Pm)%o-~~(c/o)*o)),e._pt=u=new Xi(e._pt,t,i,n,c,Bx),u.e=h,u.u="deg",e._props.push(i),u},Fm=function(e,t){for(var i in t)e[i]=t[i];return e},ny=function(e,t,i){var n=Fm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,d,u,f,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[qt]=t,a=La(i,1),$r(i,qt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[qt],o[qt]=t,a=La(i,1),o[qt]=c);for(l in pr)c=n[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Si(c),p=Si(h),d=f!==p?Zr(i,l,c,p):parseFloat(c),u=parseFloat(h),e._pt=new Xi(e._pt,a,l,d,u-d,Lf),e._pt.u=p||0,e._props.push(l));Fm(a,n)};Wi("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",o=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(a){return e<2?r+a:"border"+a+r});gc[e>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return dr(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,v){return f[p]=u[v]=u[v]||u[(v-1)/2|0]}),a.init(l,f,d)}});var kf={name:"css",register:Nf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var o=this._props,a=e.style,l=i.vars.startAt,c,h,d,u,f,p,v,m,g,x,E,y,b,w,_,S,P;Uf||Nf(),this.styles=this.styles||Vm(e),S=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(h=t[v],!(rn[v]&&wf(v,t,i,n,e,s)))){if(f=typeof h,p=gc[v],f==="function"&&(h=h.call(i,n,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=so(h)),p)p(this,e,v,h,i)&&(_=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),h+="",ur.lastIndex=0,ur.test(c)||(m=Si(c),g=Si(h),g?m!==g&&(c=Zr(e,v,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,n,s,0,0,v),o.push(v),S.push(v,0,a[v]);else if(f!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(i,n,e,s):l[v],oi(c)&&~c.indexOf("random(")&&(c=so(c)),Si(c+"")||c==="auto"||(c+=an.units[v]||Si(dr(e,v))||""),(c+"").charAt(1)==="="&&(c=dr(e,v))):c=dr(e,v),u=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),d=parseFloat(h),v in Qn&&(v==="autoAlpha"&&(u===1&&dr(e,"visibility")==="hidden"&&d&&(u=0),S.push("visibility",0,a.visibility),Yr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=Qn[v],~v.indexOf(",")&&(v=v.split(",")[0]))),E=v in pr,E){if(this.styles.save(v),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=gn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=h,h=gn(e,"perspective"),C?e.style.perspective=C:$r(e,"perspective")}d=parseFloat(h)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||La(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Xi(this._pt,a,qt,0,1,b.renderTransform,b,0,-1),y.dep=1),v==="scale")this._pt=new Xi(this._pt,b,"scaleY",b.scaleY,(x?Ts(b.scaleY,x+d):d)-b.scaleY||0,Lf),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){S.push(ln,0,a[ln]),h=Qx(h),b.svg?Of(e,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==b.zOrigin&&Yr(this,b,"zOrigin",b.zOrigin,g),Yr(this,a,v,_c(c),_c(h)));continue}else if(v==="svgOrigin"){Of(e,h,1,w,0,this);continue}else if(v in Xm){iy(this,b,v,u,x?Ts(u,x+h):h);continue}else if(v==="smoothOrigin"){Yr(this,b,"smooth",b.smooth,h);continue}else if(v==="force3D"){b[v]=h;continue}else if(v==="transform"){ny(this,h,e);continue}}else v in a||(v=co(v)||v);if(E||(d||d===0)&&(u||u===0)&&!Fx.test(h)&&v in a)m=(c+"").substr((u+"").length),d||(d=0),g=Si(h)||(v in an.units?an.units[v]:m),m!==g&&(u=Zr(e,v,c,g)),this._pt=new Xi(this._pt,E?b:a,v,u,(x?Ts(u,x+d):d)-u,!E&&(g==="px"||v==="zIndex")&&t.autoRound!==!1?Vx:Lf),this._pt.u=g||0,E&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=kx):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=zx);else if(v in a)Kx.call(this,e,v,c,x?x+h:h);else if(v in e)this.add(e,v,c||e[v],x?x+h:h,n,s);else if(v!=="parseTransform"){uc(v,h);continue}E||(v in a?S.push(v,0,a[v]):typeof e[v]=="function"?S.push(v,2,e[v]()):S.push(v,1,c||e[v])),o.push(v)}}_&&Pf(this)},render:function(e,t){if(t.tween._time||!Ff())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:dr,aliases:Qn,getSetter:function(e,t,i){var n=Qn[t];return n&&n.indexOf(",")<0&&(t=n),t in pr&&t!==ln&&(e._gsap.x||dr(e,"x"))?i&&Rm===i?t==="scale"?Xx:Wx:(Rm=i||{})&&(t==="scale"?qx:Yx):e.style&&!hc(e.style[t])?Hx:~t.indexOf("-")?Gx:mc(e,t)},core:{_removeProperty:$r,_getMatrix:zf}};Ii.utils.checkPrefix=co;Ii.core.getStyleSaver=Vm;(function(r,e,t,i){var n=Wi(r+","+e+","+t,function(s){pr[s]=1});Wi(e,function(s){an.units[s]="deg",Xm[s]=1}),Qn[n[13]]=r+","+e,Wi(i,function(s){var o=s.split(":");Qn[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){an.units[r]="px"});Ii.registerPlugin(kf);var ot=Ii.registerPlugin(kf)||Ii,Vw=ot.core.Tween;function $m(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function ry(r,e,t){return e&&$m(r.prototype,e),t&&$m(r,t),r}var Mi,yc,sy,cn,Jr,Kr,uo,Jm,Ps,fo,Km,mr,Bn,Qm,jm=function(){return Mi||typeof window<"u"&&(Mi=window.gsap)&&Mi.registerPlugin&&Mi},eg=1,ho=[],je=[],zn=[],Na=Date.now,Vf=function(e,t){return t},oy=function(){var e=fo.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,je),n.push.apply(n,zn),je=i,zn=n,Vf=function(o,a){return t[o](a)}},_r=function(e,t){return~zn.indexOf(e)&&zn[zn.indexOf(e)+1][t]},Oa=function(e){return!!~Km.indexOf(e)},Yi=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:n!==!1,capture:!!s})},qi=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},vc="scrollLeft",xc="scrollTop",Hf=function(){return mr&&mr.isPressed||je.cache++},Sc=function(e,t){var i=function n(s){if(s||s===0){eg&&cn.history.scrollRestoration!=="manual"&&(cn.history.scrollRestoration="manual");var o=mr&&mr.isPressed;s=n.v=Math.round(s)||(mr&&mr.iOS?1:0),e(s),n.cacheID=je.cache,o&&Vf("ss",s)}else(t||je.cache!==n.cacheID||Vf("ref"))&&(n.cacheID=je.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},Li={s:vc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sc(function(r){return arguments.length?cn.scrollTo(r,ni.sc()):cn.pageXOffset||Jr[vc]||Kr[vc]||uo[vc]||0})},ni={s:xc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Li,sc:Sc(function(r){return arguments.length?cn.scrollTo(Li.sc(),r):cn.pageYOffset||Jr[xc]||Kr[xc]||uo[xc]||0})},$i=function(e,t){return(t&&t._ctx&&t._ctx.selector||Mi.utils.toArray)(e)[0]||(typeof e=="string"&&Mi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ay=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},gr=function(e,t){var i=t.s,n=t.sc;Oa(e)&&(e=Jr.scrollingElement||Kr);var s=je.indexOf(e),o=n===ni.sc?1:2;!~s&&(s=je.push(e)-1),je[s+o]||Yi(e,"scroll",Hf);var a=je[s+o],l=a||(je[s+o]=Sc(_r(e,i),!0)||(Oa(e)?n:Sc(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Mi.getProperty(e,"scrollBehavior")==="smooth"),l},Mc=function(e,t,i){var n=e,s=e,o=Na(),a=o,l=t||50,c=Math.max(500,l*3),h=function(p,v){var m=Na();v||m-o>l?(s=n,n=p,a=o,o=m):i?n+=p:n=s+(p-s)/(m-a)*(o-a)},d=function(){s=n=i?0:n,a=o=0},u=function(p){var v=a,m=s,g=Na();return(p||p===0)&&p!==n&&h(p),o===a||g-a>c?0:(n+(i?m:-m))/((i?g:o)-v)*1e3};return{update:h,reset:d,getVelocity:u}},Da=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Zm=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},tg=function(){fo=Mi.core.globals().ScrollTrigger,fo&&fo.core&&oy()},ig=function(e){return Mi=e||jm(),!yc&&Mi&&typeof document<"u"&&document.body&&(cn=window,Jr=document,Kr=Jr.documentElement,uo=Jr.body,Km=[cn,Jr,Kr,uo],sy=Mi.utils.clamp,Qm=Mi.core.context||function(){},Ps="onpointerenter"in uo?"pointer":"mouse",Jm=Qt.isTouch=cn.matchMedia&&cn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in cn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bn=Qt.eventTypes=("ontouchstart"in Kr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Kr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return eg=0},500),yc=1),fo||tg(),yc};Li.op=ni;je.cache=0;var Qt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(i){yc||ig(Mi)||console.warn("Please gsap.registerPlugin(Observer)"),fo||tg();var n=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,d=i.onStop,u=i.onStopDelay,f=i.ignore,p=i.wheelSpeed,v=i.event,m=i.onDragStart,g=i.onDragEnd,x=i.onDrag,E=i.onPress,y=i.onRelease,b=i.onRight,w=i.onLeft,_=i.onUp,S=i.onDown,P=i.onChangeX,C=i.onChangeY,N=i.onChange,D=i.onToggleX,H=i.onToggleY,I=i.onHover,V=i.onHoverEnd,X=i.onMove,U=i.ignoreCheck,ie=i.isNormalizer,q=i.onGestureStart,R=i.onGestureEnd,ee=i.onWheel,ye=i.onEnable,we=i.onDisable,K=i.onClick,ce=i.scrollSpeed,Se=i.capture,Te=i.allowClicks,_e=i.lockAxis,Le=i.onLockAxis;this.target=a=$i(a)||Kr,this.vars=i,f&&(f=Mi.utils.toArray(f)),n=n||1e-9,s=s||0,p=p||1,ce=ce||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(cn.getComputedStyle(uo).lineHeight)||22);var pt,Ce,qe,Oe,Ue,ct,ut,j=this,Ye=0,Ht=0,yt=i.passive||!h&&i.passive!==!1,Qe=gr(a,Li),Ct=gr(a,ni),Ft=Qe(),F=Ct(),mt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Bn[0]==="pointerdown",gt=Oa(a),We=a.ownerDocument||Jr,ve=[0,0,0],vt=[0,0,0],Ie=0,fe=function(){return Ie=Na()},A=function(Q,z){return(j.event=Q)&&f&&ay(Q.target,f)||z&&mt&&Q.pointerType!=="touch"||U&&U(Q,z)},M=function(){j._vx.reset(),j._vy.reset(),Ce.pause(),d&&d(j)},G=function(){var Q=j.deltaX=Zm(ve),z=j.deltaY=Zm(vt),W=Math.abs(Q)>=n,se=Math.abs(z)>=n;N&&(W||se)&&N(j,Q,z,ve,vt),W&&(b&&j.deltaX>0&&b(j),w&&j.deltaX<0&&w(j),P&&P(j),D&&j.deltaX<0!=Ye<0&&D(j),Ye=j.deltaX,ve[0]=ve[1]=ve[2]=0),se&&(S&&j.deltaY>0&&S(j),_&&j.deltaY<0&&_(j),C&&C(j),H&&j.deltaY<0!=Ht<0&&H(j),Ht=j.deltaY,vt[0]=vt[1]=vt[2]=0),(Oe||qe)&&(X&&X(j),qe&&(m&&qe===1&&m(j),x&&x(j),qe=0),Oe=!1),ct&&!(ct=!1)&&Le&&Le(j),Ue&&(ee(j),Ue=!1),pt=0},le=function(Q,z,W){ve[W]+=Q,vt[W]+=z,j._vx.update(Q),j._vy.update(z),c?pt||(pt=requestAnimationFrame(G)):G()},oe=function(Q,z){_e&&!ut&&(j.axis=ut=Math.abs(Q)>Math.abs(z)?"x":"y",ct=!0),ut!=="y"&&(ve[2]+=Q,j._vx.update(Q,!0)),ut!=="x"&&(vt[2]+=z,j._vy.update(z,!0)),c?pt||(pt=requestAnimationFrame(G)):G()},me=function(Q){if(!A(Q,1)){Q=Da(Q,h);var z=Q.clientX,W=Q.clientY,se=z-j.x,$=W-j.y,ae=j.isDragging;j.x=z,j.y=W,(ae||(se||$)&&(Math.abs(j.startX-z)>=s||Math.abs(j.startY-W)>=s))&&(qe||(qe=ae?2:1),ae||(j.isDragging=!0),oe(se,$))}},de=j.onPress=function(he){A(he,1)||he&&he.button||(j.axis=ut=null,Ce.pause(),j.isPressed=!0,he=Da(he),Ye=Ht=0,j.startX=j.x=he.clientX,j.startY=j.y=he.clientY,j._vx.reset(),j._vy.reset(),Yi(ie?a:We,Bn[1],me,yt,!0),j.deltaX=j.deltaY=0,E&&E(j))},Y=j.onRelease=function(he){if(!A(he,1)){qi(ie?a:We,Bn[1],me,!0);var Q=!isNaN(j.y-j.startY),z=j.isDragging,W=z&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),se=Da(he);!W&&Q&&(j._vx.reset(),j._vy.reset(),h&&Te&&Mi.delayedCall(.08,function(){if(Na()-Ie>300&&!he.defaultPrevented){if(he.target.click)he.target.click();else if(We.createEvent){var $=We.createEvent("MouseEvents");$.initMouseEvent("click",!0,!0,cn,1,se.screenX,se.screenY,se.clientX,se.clientY,!1,!1,!1,!1,0,null),he.target.dispatchEvent($)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,d&&z&&!ie&&Ce.restart(!0),qe&&G(),g&&z&&g(j),y&&y(j,W)}},ne=function(Q){return Q.touches&&Q.touches.length>1&&(j.isGesturing=!0)&&q(Q,j.isDragging)},pe=function(){return(j.isGesturing=!1)||R(j)},L=function(Q){if(!A(Q)){var z=Qe(),W=Ct();le((z-Ft)*ce,(W-F)*ce,1),Ft=z,F=W,d&&Ce.restart(!0)}},re=function(Q){if(!A(Q)){Q=Da(Q,h),ee&&(Ue=!0);var z=(Q.deltaMode===1?l:Q.deltaMode===2?cn.innerHeight:1)*p;le(Q.deltaX*z,Q.deltaY*z,0),d&&!ie&&Ce.restart(!0)}},te=function(Q){if(!A(Q)){var z=Q.clientX,W=Q.clientY,se=z-j.x,$=W-j.y;j.x=z,j.y=W,Oe=!0,d&&Ce.restart(!0),(se||$)&&oe(se,$)}},xe=function(Q){j.event=Q,I(j)},ue=function(Q){j.event=Q,V(j)},ge=function(Q){return A(Q)||Da(Q,h)&&K(j)};Ce=j._dc=Mi.delayedCall(u||.25,M).pause(),j.deltaX=j.deltaY=0,j._vx=Mc(0,50,!0),j._vy=Mc(0,50,!0),j.scrollX=Qe,j.scrollY=Ct,j.isDragging=j.isGesturing=j.isPressed=!1,Qm(this),j.enable=function(he){return j.isEnabled||(Yi(gt?We:a,"scroll",Hf),o.indexOf("scroll")>=0&&Yi(gt?We:a,"scroll",L,yt,Se),o.indexOf("wheel")>=0&&Yi(a,"wheel",re,yt,Se),(o.indexOf("touch")>=0&&Jm||o.indexOf("pointer")>=0)&&(Yi(a,Bn[0],de,yt,Se),Yi(We,Bn[2],Y),Yi(We,Bn[3],Y),Te&&Yi(a,"click",fe,!0,!0),K&&Yi(a,"click",ge),q&&Yi(We,"gesturestart",ne),R&&Yi(We,"gestureend",pe),I&&Yi(a,Ps+"enter",xe),V&&Yi(a,Ps+"leave",ue),X&&Yi(a,Ps+"move",te)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=Oe=qe=!1,j._vx.reset(),j._vy.reset(),Ft=Qe(),F=Ct(),he&&he.type&&de(he),ye&&ye(j)),j},j.disable=function(){j.isEnabled&&(ho.filter(function(he){return he!==j&&Oa(he.target)}).length||qi(gt?We:a,"scroll",Hf),j.isPressed&&(j._vx.reset(),j._vy.reset(),qi(ie?a:We,Bn[1],me,!0)),qi(gt?We:a,"scroll",L,Se),qi(a,"wheel",re,Se),qi(a,Bn[0],de,Se),qi(We,Bn[2],Y),qi(We,Bn[3],Y),qi(a,"click",fe,!0),qi(a,"click",ge),qi(We,"gesturestart",ne),qi(We,"gestureend",pe),qi(a,Ps+"enter",xe),qi(a,Ps+"leave",ue),qi(a,Ps+"move",te),j.isEnabled=j.isPressed=j.isDragging=!1,we&&we(j))},j.kill=j.revert=function(){j.disable();var he=ho.indexOf(j);he>=0&&ho.splice(he,1),mr===j&&(mr=0)},ho.push(j),ie&&Oa(a)&&(mr=j),j.enable(v)},ry(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Qt.version="3.15.1";Qt.create=function(r){return new Qt(r)};Qt.register=ig;Qt.getAll=function(){return ho.slice()};Qt.getById=function(r){return ho.filter(function(e){return e.vars.id===r})[0]};jm()&&Mi.registerPlugin(Qt);var Pe,_o,nt,Et,xn,wt,id,Bc,$a,Ha,Fa,bc,Di,Vc,Zf,Ji,ng,rg,vo,yg,Gf,Sg,Zi,Jf,Mg,bg,Qr,Kf,nd,xo,rd,jr,Qf,Wf,Tc=1,Ni=Date.now,Xf=Ni(),In=0,Ba=0,sg=function(e,t,i){var n=vn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},og=function(e,t){return t&&(!vn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ly=function r(){return Ba&&requestAnimationFrame(r)},ag=function(){return Vc=1},lg=function(){return Vc=0},jn=function(e){return e},za=function(e){return Math.round(e*1e5)/1e5||0},Tg=function(){return typeof window<"u"},wg=function(){return Pe||Tg()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},Us=function(e){return!!~id.indexOf(e)},Eg=function(e){return(e==="Height"?rd:nt["inner"+e])||xn["client"+e]||wt["client"+e]},Ag=function(e){return _r(e,"getBoundingClientRect")||(Us(e)?function(){return Fc.width=nt.innerWidth,Fc.height=rd,Fc}:function(){return vr(e)})},cy=function(e,t,i){var n=i.d,s=i.d2,o=i.a;return(o=_r(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?Eg(s):e["client"+s])||0}},hy=function(e,t){return!t||~zn.indexOf(e)?Ag(e):function(){return Fc}},er=function(e,t){var i=t.s,n=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+n)&&(o=_r(e,i))?o()-Ag(e)()[s]:Us(e)?(xn[i]||wt[i])-Eg(n):e[i]-e["offset"+n])},wc=function(e,t){for(var i=0;i<vo.length;i+=3)(!t||~t.indexOf(vo[i+1]))&&e(vo[i],vo[i+1],vo[i+2])},vn=function(e){return typeof e=="string"},Oi=function(e){return typeof e=="function"},ka=function(e){return typeof e=="number"},Is=function(e){return typeof e=="object"},Ua=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},po=function(e,t,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);n&&n.totalTime&&(e.callbackAnimation=n)}},mo=Math.abs,Cg="left",Rg="top",sd="right",od="bottom",Ds="width",Ns="height",Ga="Right",Wa="Left",Xa="Top",qa="Bottom",ri="padding",Rn="margin",So="Width",ad="Height",ai="px",Pn=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},uy=function(e){var t=Pn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},cg=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},vr=function(e,t){var i=t&&Pn(e)[Zf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},zc=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Pg=function(e){var t=[],i=e.labels,n=e.duration(),s;for(s in i)t.push(i[s]/n);return t},fy=function(e){return function(t){return Pe.utils.snap(Pg(e),t)}},ld=function(e){var t=Pe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var a;if(!s)return t(n);if(s>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var a=t(n);return!s||Math.abs(a-n)<o||a-n<0==s<0?a:t(s<0?n-e:n+e)}},dy=function(e){return function(t,i){return ld(Pg(e))(t,i.direction)}},Ec=function(e,t,i,n){return i.split(",").forEach(function(s){return e(t,s,n)})},pi=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:!n,capture:!!s})},di=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Ac=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},hg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cc={toggleActions:"play",anticipatePin:0},kc={top:0,left:0,center:.5,bottom:1,right:1},Dc=function(e,t){if(vn(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in kc?kc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Rc=function(e,t,i,n,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,p=Et.createElement("div"),v=Us(i)||_r(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=v?wt:i.tagName==="IFRAME"?i.contentDocument.body:i,x=e.indexOf("start")!==-1,E=x?c:h,y="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&v?"fixed;":"absolute;"),(m||l||!v)&&(y+=(n===ni?sd:od)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=x,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],Nc(p,0,n,x),p},Nc=function(e,t,i,n){var s={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];e._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+So]=1,s["border"+a+So]=0,s[i.p]=t+"px",Pe.set(e,s)},it=[],jf={},Za,ug=function(){return Ni()-In>34&&(Za||(Za=requestAnimationFrame(xr)))},go=function(){(!Zi||!Zi.isPressed||Zi.startX>wt.clientWidth)&&(je.cache++,Zi?Za||(Za=requestAnimationFrame(xr)):xr(),In||Bs("scrollStart"),In=Ni())},qf=function(){bg=nt.innerWidth,Mg=nt.innerHeight},Va=function(e){je.cache++,(e===!0||!Di&&!Sg&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!Jf||bg!==nt.innerWidth||Math.abs(nt.innerHeight-Mg)>nt.innerHeight*.25))&&Bc.restart(!0)},Fs={},py=[],Ig=function r(){return di(Ke,"scrollEnd",r)||Ls(!0)},Bs=function(e){return Fs[e]&&Fs[e].map(function(t){return t()})||py},_n=[],Lg=function(e){for(var t=0;t<_n.length;t+=5)(!e||_n[t+4]&&_n[t+4].query===e)&&(_n[t].style.cssText=_n[t+1],_n[t].getBBox&&_n[t].setAttribute("transform",_n[t+2]||""),_n[t+3].uncache=1)},Dg=function(){je.cache++,je.forEach(function(e){return Oi(e)&&(e.rec=e())})},cd=function(e,t){var i;for(Ji=0;Ji<it.length;Ji++)i=it[Ji],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));jr=!0,t&&Lg(t),t||Bs("revert")},Ng=function(e,t){je.cache++,(t||!Ki)&&je.forEach(function(i){return Oi(i)&&i.cacheID++&&(i.rec=0)}),vn(e)&&(nd=e,nt.history.scrollRestoration!==e&&(nt.history.scrollRestoration=e))},Ki,Os=0,fg,my=function(){if(fg!==Os){var e=fg=Os;requestAnimationFrame(function(){return e===Os&&Ls(!0)})}},Og=function(){wt.appendChild(xo),rd=!Zi&&xo.offsetHeight||nt.innerHeight,wt.removeChild(xo)},dg=function(e){return $a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ls=function(e,t){if(xn=Et.documentElement,wt=Et.body,id=[nt,Et,xn,wt],In&&!e&&!jr){pi(Ke,"scrollEnd",Ig);return}Og(),Ki=Ke.isRefreshing=!0,jr||Dg();var i=Bs("refreshInit");yg&&Ke.sort(),t||cd(),je.forEach(function(n){Oi(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),it.slice(0).forEach(function(n){return n.refresh()}),jr=!1,it.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-o),n.refresh()}}),Qf=1,dg(!0),it.forEach(function(n){var s=er(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>s,a=n._startClamp&&n.start>=s;(o||a)&&n.setPositions(a?s-1:n.start,o?Math.max(a?s:n.start+1,s):n.end,!0)}),dg(!1),Qf=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),je.forEach(function(n){Oi(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Ng(nd,1),Bc.pause(),Os++,Ki=2,xr(2),it.forEach(function(n){return Oi(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Ki=Ke.isRefreshing=!1,Bs("refresh")},ed=0,Oc=1,Ya,xr=function(e){if(e===2||!Ki&&!jr){Ke.isUpdating=!0,Ya&&Ya.update(0);var t=it.length,i=Ni(),n=i-Xf>=50,s=t&&it[0].scroll();if(Oc=ed>s?-1:1,Ki||(ed=s),n&&(In&&!Vc&&i-In>200&&(In=0,Bs("scrollEnd")),Fa=Xf,Xf=i),Oc<0){for(Ji=t;Ji-- >0;)it[Ji]&&it[Ji].update(0,n);Oc=1}else for(Ji=0;Ji<t;Ji++)it[Ji]&&it[Ji].update(0,n);Ke.isUpdating=!1}Za=0},td=[Cg,Rg,od,sd,Rn+qa,Rn+Ga,Rn+Xa,Rn+Wa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Uc=td.concat([Ds,Ns,"boxSizing","max"+So,"max"+ad,"position",Rn,ri,ri+Xa,ri+Ga,ri+qa,ri+Wa]),gy=function(e,t,i){yo(i);var n=e._gsap;if(n.spacerIsNative)yo(n.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Yf=function(e,t,i,n){if(!e._gsap.swappedIn){for(var s=td.length,o=t.style,a=e.style,l;s--;)l=td[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[od]=a[sd]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ds]=zc(e,Li)+ai,o[Ns]=zc(e,ni)+ai,o[ri]=a[Rn]=a[Rg]=a[Cg]="0",yo(n),a[Ds]=a["max"+So]=i[Ds],a[Ns]=a["max"+ad]=i[Ns],a[ri]=i[ri],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},_y=/([A-Z])/g,yo=function(e){if(e){var t=e.t.style,i=e.length,n=0,s,o;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;n<i;n+=2)o=e[n+1],s=e[n],o?t[s]=o:t[s]&&t.removeProperty(s.replace(_y,"-$1").toLowerCase())}},Pc=function(e){for(var t=Uc.length,i=e.style,n=[],s=0;s<t;s++)n.push(Uc[s],i[Uc[s]]);return n.t=e,n},vy=function(e,t,i){for(var n=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],n.push(a,a in t?t[a]:e[o+1]);return n.t=e.t,n},Fc={left:0,top:0},pg=function(e,t,i,n,s,o,a,l,c,h,d,u,f,p){Oi(e)&&(e=e(l)),vn(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?Dc("0"+e.substr(3),i):0));var v=f?f.time():0,m,g,x;if(f&&f.seek(0),isNaN(e)||(e=+e),ka(e))f&&(e=Pe.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,e)),a&&Nc(a,i,n,!0);else{Oi(t)&&(t=t(l));var E=(e||"0").split(" "),y,b,w,_;x=$i(t,l)||wt,y=vr(x)||{},(!y||!y.left&&!y.top)&&Pn(x).display==="none"&&(_=x.style.display,x.style.display="block",y=vr(x),_?x.style.display=_:x.style.removeProperty("display")),b=Dc(E[0],y[n.d]),w=Dc(E[1]||"0",i),e=y[n.p]-c[n.p]-h+b+s-w,a&&Nc(a,w,n,i-w<20||a._isStart&&w>20),i-=i-w}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var S=e+i,P=o._isStart;m="scroll"+n.d2,Nc(o,S,n,P&&S>20||!P&&(d?Math.max(wt[m],xn[m]):o.parentNode[m])<=S+1),d&&(c=vr(a),d&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+ai))}return f&&x&&(m=vr(x),f.seek(u),g=vr(x),f._caScrollDist=m[n.p]-g[n.p],e=e/f._caScrollDist*u),f&&f.seek(v),f?e:Math.round(e)},xy=/(webkit|moz|length|cssText|inset)/i,mg=function(e,t,i,n){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=Pn(e);for(o in a)!+o&&!xy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=n}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},Ug=function(e,t,i){var n=t,s=n;return function(o){var a=Math.round(e());return a!==n&&a!==s&&Math.abs(a-n)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=n,n=Math.round(o),n}},Ic=function(e,t,i){var n={};n[t.p]="+="+i,Pe.set(e,n)},gg=function(e,t){var i=gr(e,t),n="_scroll"+t.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||i();var v=Ug(i,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return v(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){je.cache++,o.tween&&xr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Pe.to(e,l),u};return e[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},pi(e,"wheel",i.wheelHandler),Ke.isTouch&&pi(e,"touchmove",i.wheelHandler),s},Ke=(function(){function r(t,i){_o||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Kf(this),this.init(t,i)}var e=r.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ba){this.update=this.refresh=this.kill=jn;return}i=cg(vn(i)||ka(i)||i.nodeType?{trigger:i}:i,Cc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,p=s.pinSpacing,v=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,x=s.onSnapComplete,E=s.once,y=s.snap,b=s.pinReparent,w=s.pinSpacer,_=s.containerAnimation,S=s.fastScrollEnd,P=s.preventOverlaps,C=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Li:ni,N=!d&&d!==0,D=$i(i.scroller||nt),H=Pe.core.getCache(D),I=Us(D),V=("pinType"in i?i.pinType:_r(D,"pinType")||I&&"fixed")==="fixed",X=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],U=N&&i.toggleActions.split(" "),ie="markers"in i?i.markers:Cc.markers,q=I?0:parseFloat(Pn(D)["border"+C.p2+So])||0,R=this,ee=i.onRefreshInit&&function(){return i.onRefreshInit(R)},ye=cy(D,I,C),we=hy(D,I),K=0,ce=0,Se=0,Te=gr(D,C),_e,Le,pt,Ce,qe,Oe,Ue,ct,ut,j,Ye,Ht,yt,Qe,Ct,Ft,F,mt,gt,We,ve,vt,Ie,fe,A,M,G,le,oe,me,de,Y,ne,pe,L,re,te,xe,ue;if(R._startClamp=R._endClamp=!1,R._dir=C,m*=45,R.scroller=D,R.scroll=_?_.time.bind(_):Te,Ce=Te(),jr&&Te.rec==null&&(Te.rec=Ce),R.vars=i,n=n||i.animation,"refreshPriority"in i&&(yg=1,i.refreshPriority===-9999&&(Ya=R)),H.tweenScroll=H.tweenScroll||{top:gg(D,ni),left:gg(D,Li)},R.tweenTo=_e=H.tweenScroll[C.p],R.scrubDuration=function(W){ne=ka(W)&&W,ne?Y?Y.duration(W):Y=Pe.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ne,paused:!0,onComplete:function(){return g&&g(R)}}):(Y&&Y.progress(1).kill(),Y=0)},n&&(n.vars.lazy=!1,n._initted&&!R.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),R.animation=n.pause(),n.scrollTrigger=R,R.scrubDuration(d),me=0,l||(l=n.vars.id)),y&&((!Is(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in wt.style&&Pe.set(I?[wt,xn]:D,{scrollBehavior:"auto"}),je.forEach(function(W){return Oi(W)&&W.target===(I?Et.scrollingElement||xn:D)&&(W.smooth=!1)}),pt=Oi(y.snapTo)?y.snapTo:y.snapTo==="labels"?fy(n):y.snapTo==="labelsDirectional"?dy(n):y.directional!==!1?function(W,se){return ld(y.snapTo)(W,Ni()-ce<500?0:se.direction)}:Pe.utils.snap(y.snapTo),pe=y.duration||{min:.1,max:2},pe=Is(pe)?Ha(pe.min,pe.max):Ha(pe,pe),L=Pe.delayedCall(y.delay||ne/2||.1,function(){var W=Te(),se=Ni()-ce<500,$=_e.tween;if((se||Math.abs(R.getVelocity())<10)&&!$&&!Vc&&K!==W){var ae=(W-Oe)/Qe,He=n&&!N?n.totalProgress():ae,ze=se?0:(He-de)/(Ni()-Fa)*1e3||0,rt=Pe.utils.clamp(-ae,1-ae,mo(ze/2)*ze/.185),Tt=ae+(y.inertia===!1?0:rt),ke,tt,st=y,It=st.onStart,St=st.onInterrupt,ui=st.onComplete;if(ke=pt(Tt,R),ka(ke)||(ke=Tt),tt=Math.max(0,Math.round(Oe+ke*Qe)),W<=Ue&&W>=Oe&&tt!==W){if($&&!$._initted&&$.data<=mo(tt-W))return;y.inertia===!1&&(rt=ke-ae),_e(tt,{duration:pe(mo(Math.max(mo(Tt-He),mo(ke-He))*.185/ze/.05||0)),ease:y.ease||"power3",data:mo(tt-W),onInterrupt:function(){return L.restart(!0)&&St&&po(R,St)},onComplete:function(){R.update(),K=Te(),n&&!N&&(Y?Y.resetTo("totalProgress",ke,n._tTime/n._tDur):n.progress(ke)),me=de=n&&!N?n.totalProgress():R.progress,x&&x(R),ui&&po(R,ui)}},W,rt*Qe,tt-W-rt*Qe),It&&po(R,It,_e.tween)}}else R.isActive&&K!==W&&L.restart(!0)}).pause()),l&&(jf[l]=R),u=R.trigger=$i(u||f!==!0&&f),ue=u&&u._gsap&&u._gsap.stRevert,ue&&(ue=ue(R)),f=f===!0?u:$i(f),vn(a)&&(a={targets:u,className:a}),f&&(p===!1||p===Rn||(p=!p&&f.parentNode&&f.parentNode.style&&Pn(f.parentNode).display==="flex"?!1:ri),R.pin=f,Le=Pe.core.getCache(f),Le.spacer?Ct=Le.pinState:(w&&(w=$i(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Le.spacerIsNative=!!w,w&&(Le.spacerState=Pc(w))),Le.spacer=mt=w||Et.createElement("div"),mt.classList.add("pin-spacer"),l&&mt.classList.add("pin-spacer-"+l),Le.pinState=Ct=Pc(f)),i.force3D!==!1&&Pe.set(f,{force3D:!0}),R.spacer=mt=Le.spacer,oe=Pn(f),fe=oe[p+C.os2],We=Pe.getProperty(f),ve=Pe.quickSetter(f,C.a,ai),Yf(f,mt,oe),F=Pc(f)),ie){Ht=Is(ie)?cg(ie,hg):hg,j=Rc("scroller-start",l,D,C,Ht,0),Ye=Rc("scroller-end",l,D,C,Ht,0,j),gt=j["offset"+C.op.d2];var ge=$i(_r(D,"content")||D);ct=this.markerStart=Rc("start",l,ge,C,Ht,gt,0,_),ut=this.markerEnd=Rc("end",l,ge,C,Ht,gt,0,_),_&&(xe=Pe.quickSetter([ct,ut],C.a,ai)),!V&&!(zn.length&&_r(D,"fixedMarkers")===!0)&&(uy(I?wt:D),Pe.set([j,Ye],{force3D:!0}),M=Pe.quickSetter(j,C.a,ai),le=Pe.quickSetter(Ye,C.a,ai))}if(_){var he=_.vars.onUpdate,Q=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){R.update(0,0,1),he&&he.apply(_,Q||[])})}if(R.previous=function(){return it[it.indexOf(R)-1]},R.next=function(){return it[it.indexOf(R)+1]},R.revert=function(W,se){if(!se)return R.kill(!0);var $=W!==!1||!R.enabled,ae=Di;$!==R.isReverted&&($&&(re=Math.max(Te(),R.scroll.rec||0),Se=R.progress,te=n&&n.progress()),ct&&[ct,ut,j,Ye].forEach(function(He){return He.style.display=$?"none":"block"}),$&&(Di=R,R.update($)),f&&(!b||!R.isActive)&&($?gy(f,mt,Ct):Yf(f,mt,Pn(f),A)),$||R.update($),Di=ae,R.isReverted=$)},R.refresh=function(W,se,$,ae){if(!((Di||!R.enabled)&&!se)){if(f&&W&&In){pi(r,"scrollEnd",Ig);return}!Ki&&ee&&ee(R),Di=R,_e.tween&&!$&&(_e.tween.kill(),_e.tween=0),Y&&Y.pause(),v&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(k){return k.vars.immediateRender&&k.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var He=ye(),ze=we(),rt=_?_.duration():er(D,C),Tt=Qe<=.01||!Qe,ke=0,tt=ae||0,st=Is($)?$.end:i.end,It=i.endTrigger||u,St=Is($)?$.start:i.start||(i.start===0||!u?0:f?"0 0":"0 100%"),ui=R.pinnedContainer=i.pinnedContainer&&$i(i.pinnedContainer,R),vi=u&&Math.max(0,it.indexOf(R))||0,Bt=vi,zt,ei,Vi,On,Zt,Lt,Hi,zr,_s,Un,T,O,Z;for(ie&&Is($)&&(O=Pe.getProperty(j,C.p),Z=Pe.getProperty(Ye,C.p));Bt-- >0;)Lt=it[Bt],Lt.end||Lt.refresh(0,1)||(Di=R),Hi=Lt.pin,Hi&&(Hi===u||Hi===f||Hi===ui)&&!Lt.isReverted&&(Un||(Un=[]),Un.unshift(Lt),Lt.revert(!0,!0)),Lt!==it[Bt]&&(vi--,Bt--);for(Oi(St)&&(St=St(R)),St=sg(St,"start",R),Oe=pg(St,u,He,C,Te(),ct,j,R,ze,q,V,rt,_,R._startClamp&&"_startClamp")||(f?-.001:0),Oi(st)&&(st=st(R)),vn(st)&&!st.indexOf("+=")&&(~st.indexOf(" ")?st=(vn(St)?St.split(" ")[0]:"")+st:(ke=Dc(st.substr(2),He),st=vn(St)?St:(_?Pe.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Oe):Oe)+ke,It=u)),st=sg(st,"end",R),Ue=Math.max(Oe,pg(st||(It?"100% 0":rt),It,He,C,Te()+ke,ut,Ye,R,ze,q,V,rt,_,R._endClamp&&"_endClamp"))||-.001,ke=0,Bt=vi;Bt--;)Lt=it[Bt]||{},Hi=Lt.pin,Hi&&Lt.start-Lt._pinPush<=Oe&&!_&&Lt.end>0&&(zt=Lt.end-(R._startClamp?Math.max(0,Lt.start):Lt.start),(Hi===u&&Lt.start-Lt._pinPush<Oe||Hi===ui)&&isNaN(St)&&(ke+=zt*(1-Lt.progress)),Hi===f&&(tt+=zt));if(Oe+=ke,Ue+=ke,R._startClamp&&(R._startClamp+=ke),R._endClamp&&!Ki&&(R._endClamp=Ue||-.001,Ue=Math.min(Ue,er(D,C))),Qe=Ue-Oe||(Oe-=.01)&&.001,Tt&&(Se=Pe.utils.clamp(0,1,Pe.utils.normalize(Oe,Ue,re))),R._pinPush=tt,ct&&ke&&(zt={},zt[C.a]="+="+ke,ui&&(zt[C.p]="-="+Te()),Pe.set([ct,ut],zt)),f&&!(Qf&&R.end>=er(D,C)))zt=Pn(f),On=C===ni,Vi=Te(),vt=parseFloat(We(C.a))+tt,!rt&&Ue>1&&(T=(I?Et.scrollingElement||xn:D).style,T={style:T,value:T["overflow"+C.a.toUpperCase()]},I&&Pn(wt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(T.style["overflow"+C.a.toUpperCase()]="scroll")),Yf(f,mt,zt),F=Pc(f),ei=vr(f,!0),zr=V&&gr(D,On?Li:ni)(),p?(A=[p+C.os2,Qe+tt+ai],A.t=mt,Bt=p===ri?zc(f,C)+Qe+tt:0,Bt&&(A.push(C.d,Bt+ai),mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=Bt+ai)),yo(A),ui&&it.forEach(function(k){k.pin===ui&&k.vars.pinSpacing!==!1&&(k._subPinOffset=!0)}),V&&Te(re)):(Bt=zc(f,C),Bt&&mt.style.flexBasis!=="auto"&&(mt.style.flexBasis=Bt+ai)),V&&(Zt={top:ei.top+(On?Vi-Oe:zr)+ai,left:ei.left+(On?zr:Vi-Oe)+ai,boxSizing:"border-box",position:"fixed"},Zt[Ds]=Zt["max"+So]=Math.ceil(ei.width)+ai,Zt[Ns]=Zt["max"+ad]=Math.ceil(ei.height)+ai,Zt[Rn]=Zt[Rn+Xa]=Zt[Rn+Ga]=Zt[Rn+qa]=Zt[Rn+Wa]="0",Zt[ri]=zt[ri],Zt[ri+Xa]=zt[ri+Xa],Zt[ri+Ga]=zt[ri+Ga],Zt[ri+qa]=zt[ri+qa],Zt[ri+Wa]=zt[ri+Wa],Ft=vy(Ct,Zt,b),Ki&&Te(0)),n?(_s=n._initted,Gf(1),n.render(n.duration(),!0,!0),Ie=We(C.a)-vt+Qe+tt,G=Math.abs(Qe-Ie)>1,V&&G&&Ft.splice(Ft.length-2,2),n.render(0,!0,!0),_s||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Gf(0)):Ie=Qe,T&&(T.value?T.style["overflow"+C.a.toUpperCase()]=T.value:T.style.removeProperty("overflow-"+C.a));else if(u&&Te()&&!_)for(ei=u.parentNode;ei&&ei!==wt;)ei._pinOffset&&(Oe-=ei._pinOffset,Ue-=ei._pinOffset),ei=ei.parentNode;Un&&Un.forEach(function(k){return k.revert(!1,!0)}),R.start=Oe,R.end=Ue,Ce=qe=Ki?re:Te(),!_&&!Ki&&!jr&&(Ce<re&&Te(re),R.scroll.rec=0),R.revert(!1,!0),ce=Ni(),L&&(K=-1,L.restart(!0)),Di=0,n&&N&&(n._initted||te)&&n.progress()!==te&&n.progress(te||0,!0).render(n.time(),!0,!0),(Tt||Se!==R.progress||_||v||n&&!n._initted)&&(n&&!N&&(n._initted||Se||n.vars.immediateRender!==!1)&&n.totalProgress(_&&Oe<-.001&&!Se?Pe.utils.normalize(Oe,Ue,0):Se,!0),R.progress=Tt||(Ce-Oe)/Qe===Se?0:Se),f&&p&&(mt._pinOffset=Math.round(R.progress*Ie)),Y&&Y.invalidate(),isNaN(O)||(O-=Pe.getProperty(j,C.p),Z-=Pe.getProperty(Ye,C.p),Ic(j,C,O),Ic(ct,C,O-(ae||0)),Ic(Ye,C,Z),Ic(ut,C,Z-(ae||0))),Tt&&!Ki&&R.update(),h&&!Ki&&!yt&&(yt=!0,h(R),yt=!1)}},R.getVelocity=function(){return(Te()-qe)/(Ni()-Fa)*1e3||0},R.endAnimation=function(){Ua(R.callbackAnimation),n&&(Y?Y.progress(1):n.paused()?N||Ua(n,R.direction<0,1):Ua(n,n.reversed()))},R.labelToScroll=function(W){return n&&n.labels&&(Oe||R.refresh()||Oe)+n.labels[W]/n.duration()*Qe||0},R.getTrailing=function(W){var se=it.indexOf(R),$=R.direction>0?it.slice(0,se).reverse():it.slice(se+1);return(vn(W)?$.filter(function(ae){return ae.vars.preventOverlaps===W}):$).filter(function(ae){return R.direction>0?ae.end<=Oe:ae.start>=Ue})},R.update=function(W,se,$){if(!(_&&!$&&!W)){var ae=Ki===!0?re:R.scroll(),He=W?0:(ae-Oe)/Qe,ze=He<0?0:He>1?1:He||0,rt=R.progress,Tt,ke,tt,st,It,St,ui,vi;if(se&&(qe=Ce,Ce=_?Te():ae,y&&(de=me,me=n&&!N?n.totalProgress():ze)),m&&f&&!Di&&!Tc&&In&&(!ze&&Oe<ae+(ae-qe)/(Ni()-Fa)*m?ze=1e-4:ze===1&&Ue>ae+(ae-qe)/(Ni()-Fa)*m&&(ze=.9999)),ze!==rt&&R.enabled){if(Tt=R.isActive=!!ze&&ze<1,ke=!!rt&&rt<1,St=Tt!==ke,It=St||!!ze!=!!rt,R.direction=ze>rt?1:-1,R.progress=ze,It&&!Di&&(tt=ze&&!rt?0:ze===1?1:rt===1?2:3,N&&(st=!St&&U[tt+1]!=="none"&&U[tt+1]||U[tt],vi=n&&(st==="complete"||st==="reset"||st in n))),P&&(St||vi)&&(vi||d||!n)&&(Oi(P)?P(R):R.getTrailing(P).forEach(function(Vi){return Vi.endAnimation()})),N||(Y&&!Di&&!Tc?(Y._dp._time-Y._start!==Y._time&&Y.render(Y._dp._time-Y._start),Y.resetTo?Y.resetTo("totalProgress",ze,n._tTime/n._tDur):(Y.vars.totalProgress=ze,Y.invalidate().restart())):n&&n.totalProgress(ze,!!(Di&&(ce||W)))),f){if(W&&p&&(mt.style[p+C.os2]=fe),!V)ve(za(vt+Ie*ze));else if(It){if(ui=!W&&ze>rt&&Ue+1>ae&&ae+1>=er(D,C),b)if(!W&&(Tt||ui)){var Bt=vr(f,!0),zt=ae-Oe;mg(f,wt,Bt.top+(C===ni?zt:0)+ai,Bt.left+(C===ni?0:zt)+ai)}else mg(f,mt);yo(Tt||ui?Ft:F),G&&ze<1&&Tt||ve(vt+(ze===1&&!ui?Ie:0))}}y&&!_e.tween&&!Di&&!Tc&&L.restart(!0),a&&(St||E&&ze&&(ze<1||!Wf))&&$a(a.targets).forEach(function(Vi){return Vi.classList[Tt||E?"add":"remove"](a.className)}),o&&!N&&!W&&o(R),It&&!Di?(N&&(vi&&(st==="complete"?n.pause().totalProgress(1):st==="reset"?n.restart(!0).pause():st==="restart"?n.restart(!0):n[st]()),o&&o(R)),(St||!Wf)&&(c&&St&&po(R,c),X[tt]&&po(R,X[tt]),E&&(ze===1?R.kill(!1,1):X[tt]=0),St||(tt=ze===1?1:3,X[tt]&&po(R,X[tt]))),S&&!Tt&&Math.abs(R.getVelocity())>(ka(S)?S:2500)&&(Ua(R.callbackAnimation),Y?Y.progress(1):Ua(n,st==="reverse"?1:!ze,1))):N&&o&&!Di&&o(R)}if(le){var ei=_?ae/_.duration()*(_._caScrollDist||0):ae;M(ei+(j._isFlipped?1:0)),le(ei)}xe&&xe(-ae/_.duration()*(_._caScrollDist||0))}},R.enable=function(W,se){R.enabled||(R.enabled=!0,pi(D,"resize",Va),I||pi(D,"scroll",go),ee&&pi(r,"refreshInit",ee),W!==!1&&(R.progress=Se=0,Ce=qe=K=Te()),se!==!1&&R.refresh())},R.getTween=function(W){return W&&_e?_e.tween:Y},R.setPositions=function(W,se,$,ae){if(_){var He=_.scrollTrigger,ze=_.duration(),rt=He.end-He.start;W=He.start+rt*W/ze,se=He.start+rt*se/ze}R.refresh(!1,!1,{start:og(W,$&&!!R._startClamp),end:og(se,$&&!!R._endClamp)},ae),R.update()},R.adjustPinSpacing=function(W){if(A&&W){var se=A.indexOf(C.d)+1;A[se]=parseFloat(A[se])+W+ai,A[1]=parseFloat(A[1])+W+ai,yo(A)}},R.disable=function(W,se){if(W!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,se||Y&&Y.pause(),re=0,Le&&(Le.uncache=1),ee&&di(r,"refreshInit",ee),L&&(L.pause(),_e.tween&&_e.tween.kill()&&(_e.tween=0)),!I)){for(var $=it.length;$--;)if(it[$].scroller===D&&it[$]!==R)return;di(D,"resize",Va),I||di(D,"scroll",go)}},R.kill=function(W,se){R.disable(W,se),Y&&!se&&Y.kill(),l&&delete jf[l];var $=it.indexOf(R);$>=0&&it.splice($,1),$===Ji&&Oc>0&&Ji--,$=0,it.forEach(function(ae){return ae.scroller===R.scroller&&($=1)}),$||Ki||jr||(R.scroll.rec=0),n&&(n.scrollTrigger=null,W&&n.revert({kill:!1}),se||n.kill()),ct&&[ct,ut,j,Ye].forEach(function(ae){return ae.parentNode&&ae.parentNode.removeChild(ae)}),Ya===R&&(Ya=0),f&&(Le&&(Le.uncache=1),$=0,it.forEach(function(ae){return ae.pin===f&&$++}),$||(Le.spacer=0)),i.onKill&&i.onKill(R)},it.push(R),R.enable(!1,!1),ue&&ue(R),n&&n.add&&!Qe){var z=R.update;R.update=function(){R.update=z,je.cache++,Oe||Ue||R.refresh()},Pe.delayedCall(.01,R.update),Qe=.01,Oe=Ue=0}else R.refresh();f&&my()},r.register=function(i){return _o||(Pe=i||wg(),Tg()&&window.document&&r.enable(),_o=Ba),_o},r.defaults=function(i){if(i)for(var n in i)Cc[n]=i[n];return Cc},r.disable=function(i,n){Ba=0,it.forEach(function(o){return o[n?"kill":"disable"](i)}),di(nt,"wheel",go),di(Et,"scroll",go),clearInterval(bc),di(Et,"touchcancel",jn),di(wt,"touchstart",jn),Ec(di,Et,"pointerdown,touchstart,mousedown",ag),Ec(di,Et,"pointerup,touchend,mouseup",lg),Bc.kill(),wc(di);for(var s=0;s<je.length;s+=3)Ac(di,je[s],je[s+1]),Ac(di,je[s],je[s+2])},r.enable=function(){if(nt=window,Et=document,xn=Et.documentElement,wt=Et.body,Pe){if($a=Pe.utils.toArray,Ha=Pe.utils.clamp,Kf=Pe.core.context||jn,Gf=Pe.core.suppressOverwrites||jn,nd=nt.history.scrollRestoration||"auto",ed=nt.pageYOffset||0,Pe.core.globals("ScrollTrigger",r),wt){Ba=1,xo=document.createElement("div"),xo.style.height="100vh",xo.style.position="absolute",Og(),ly(),Qt.register(Pe),r.isTouch=Qt.isTouch,Qr=Qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Jf=Qt.isTouch===1,pi(nt,"wheel",go),id=[nt,Et,xn,wt],Pe.matchMedia?(r.matchMedia=function(h){var d=Pe.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Pe.addEventListener("matchMediaInit",function(){Dg(),cd()}),Pe.addEventListener("matchMediaRevert",function(){return Lg()}),Pe.addEventListener("matchMedia",function(){Ls(0,1),Bs("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return qf(),qf})):console.warn("Requires GSAP 3.11.0 or later"),qf(),pi(Et,"scroll",go);var i=wt.hasAttribute("style"),n=wt.style,s=n.borderTopStyle,o=Pe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=vr(wt),ni.m=Math.round(a.top+ni.sc())||0,Li.m=Math.round(a.left+Li.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(wt.setAttribute("style",""),wt.removeAttribute("style")),bc=setInterval(ug,250),Pe.delayedCall(.5,function(){return Tc=0}),pi(Et,"touchcancel",jn),pi(wt,"touchstart",jn),Ec(pi,Et,"pointerdown,touchstart,mousedown",ag),Ec(pi,Et,"pointerup,touchend,mouseup",lg),Zf=Pe.utils.checkPrefix("transform"),Uc.push(Zf),_o=Ni(),Bc=Pe.delayedCall(.2,Ls).pause(),vo=[Et,"visibilitychange",function(){var h=nt.innerWidth,d=nt.innerHeight;Et.hidden?(ng=h,rg=d):(ng!==h||rg!==d)&&Va()},Et,"DOMContentLoaded",Ls,nt,"load",Ls,nt,"resize",Va],wc(pi),it.forEach(function(h){return h.enable(0,1)}),l=0;l<je.length;l+=3)Ac(di,je[l],je[l+1]),Ac(di,je[l],je[l+2])}else if(Et){var c=function h(){r.enable(),Et.removeEventListener("DOMContentLoaded",h)};Et.addEventListener("DOMContentLoaded",c)}}},r.config=function(i){"limitCallbacks"in i&&(Wf=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(bc)||(bc=n)&&setInterval(ug,n),"ignoreMobileResize"in i&&(Jf=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(wc(di)||wc(pi,i.autoRefreshEvents||"none"),Sg=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=$i(i),o=je.indexOf(s),a=Us(s);~o&&je.splice(o,a?6:2),n&&(a?zn.unshift(nt,n,wt,n,xn,n):zn.unshift(s,n))},r.clearMatchMedia=function(i){it.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var o=(vn(i)?$i(i):i).getBoundingClientRect(),a=o[s?Ds:Ns]*n||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},r.positionInViewport=function(i,n,s){vn(i)&&(i=$i(i));var o=i.getBoundingClientRect(),a=o[s?Ds:Ns],l=n==null?a/2:n in kc?kc[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},r.killAll=function(i){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=Fs.killAll||[];Fs={},n.forEach(function(s){return s()})}},r})();Ke.version="3.15.1";Ke.saveStyles=function(r){return r?$a(r).forEach(function(e){if(e&&e.style){var t=_n.indexOf(e);t>=0&&_n.splice(t,5),_n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),Kf())}}):_n};Ke.revert=function(r,e){return cd(!r,e)};Ke.create=function(r,e){return new Ke(r,e)};Ke.refresh=function(r){return r?Va(!0):(_o||Ke.register())&&Ls(!0)};Ke.update=function(r){return++je.cache&&xr(r===!0?2:0)};Ke.clearScrollMemory=Ng;Ke.maxScroll=function(r,e){return er(r,e?Li:ni)};Ke.getScrollFunc=function(r,e){return gr($i(r),e?Li:ni)};Ke.getById=function(r){return jf[r]};Ke.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!In};Ke.snapDirectional=ld;Ke.addEventListener=function(r,e){var t=Fs[r]||(Fs[r]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(r,e){var t=Fs[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Ke.batch=function(r,e){var t=[],i={},n=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Pe.delayedCall(n,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),s<=d.length&&f.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Oi(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Oi(s)&&(s=s(),pi(Ke,"refresh",function(){return s=e.batchMax()})),$a(r).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(Ke.create(c))}),t};var _g=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},$f=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Qt.isTouch?" pinch-zoom":""):"none",e===xn&&r(wt,t)},Lc={auto:1,scroll:1},yy=function(e){var t=e.event,i=e.target,n=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Pe.core.getCache(s),a=Ni(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Lc[(l=Pn(s)).overflowY]||Lc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Us(s)&&(Lc[(l=Pn(s)).overflowY]||Lc[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Fg=function(e,t,i,n){return Qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&yy,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&pi(Et,Qt.eventTypes[0],xg,!1,!0)},onDisable:function(){return di(Et,Qt.eventTypes[0],xg,!0)}})},Sy=/(input|label|select|textarea)/i,vg,xg=function(e){var t=Sy.test(e.target.tagName);(t||vg)&&(e._gsapAllow=!0,vg=t)},My=function(e){Is(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=$i(e.target)||xn,h=Pe.core.globals().ScrollSmoother,d=h&&h.get(),u=Qr&&(e.content&&$i(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=gr(c,ni),p=gr(c,Li),v=1,m=(Qt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,g=0,x=Oi(n)?function(){return n(a)}:function(){return n||2.8},E,y,b=Fg(c,e.type,!0,s),w=function(){return y=!1},_=jn,S=jn,P=function(){l=er(c,ni),S=Ha(Qr?1:0,l),i&&(_=Ha(0,er(c,Li))),E=Os},C=function(){u._gsap.y=za(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(y){requestAnimationFrame(w);var ie=za(a.deltaY/2),q=S(f.v-ie);if(u&&q!==f.v+f.offset){f.offset=q-f.v;var R=za((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=je.cache,xr()}return!0}f.offset&&C(),y=!0},D,H,I,V,X=function(){P(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return u&&Pe.set(u,{y:"+=0"}),e.ignoreCheck=function(U){return Qr&&U.type==="touchmove"&&N(U)||v>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){y=!1;var U=v;v=za((nt.visualViewport&&nt.visualViewport.scale||1)/m),D.pause(),U!==v&&$f(c,v>1.01?!0:i?!1:"x"),H=p(),I=f(),P(),E=Os},e.onRelease=e.onGestureStart=function(U,ie){if(f.offset&&C(),!ie)V.restart(!0);else{je.cache++;var q=x(),R,ee;i&&(R=p(),ee=R+q*.05*-U.velocityX/.227,q*=_g(p,R,ee,er(c,Li)),D.vars.scrollX=_(ee)),R=f(),ee=R+q*.05*-U.velocityY/.227,q*=_g(f,R,ee,er(c,ni)),D.vars.scrollY=S(ee),D.invalidate().duration(q).play(.01),(Qr&&D.vars.scrollY>=l||R>=l-1)&&Pe.to({},{onUpdate:X,duration:q})}o&&o(U)},e.onWheel=function(){D._ts&&D.pause(),Ni()-g>1e3&&(E=0,g=Ni())},e.onChange=function(U,ie,q,R,ee){if(Os!==E&&P(),ie&&i&&p(_(R[2]===ie?H+(U.startX-U.x):p()+ie-R[1])),q){f.offset&&C();var ye=ee[2]===q,we=ye?I+U.startY-U.y:f()+q-ee[1],K=S(we);ye&&we!==K&&(I+=K-we),f(K)}(q||ie)&&xr()},e.onEnable=function(){$f(c,i?!1:"x"),Ke.addEventListener("refresh",X),pi(nt,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){$f(c,!0),di(nt,"resize",X),Ke.removeEventListener("refresh",X),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Qt(e),a.iOS=Qr,Qr&&!f()&&f(1),Qr&&Pe.ticker.add(jn),V=a._dc,D=Pe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ug(f,f(),function(){return D.pause()})},onUpdate:xr,onComplete:V.vars.onComplete}),a};Ke.sort=function(r){if(Oi(r))return it.sort(r);var e=nt.pageYOffset||0;return Ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),it.sort(r||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(r){return new Qt(r)};Ke.normalizeScroll=function(r){if(typeof r>"u")return Zi;if(r===!0&&Zi)return Zi.enable();if(r===!1){Zi&&Zi.kill(),Zi=r;return}var e=r instanceof Qt?r:My(r);return Zi&&Zi.target===e.target&&Zi.kill(),Us(e.target)&&(Zi=e),e};Ke.core={_getVelocityProp:Mc,_inputObserver:Fg,_scrollers:je,_proxies:zn,bridge:{ss:function(){In||Bs("scrollStart"),In=Ni()},ref:function(){return Di}}};wg()&&Pe.registerPlugin(Ke);var Ja,Ka,Bg=typeof Symbol=="function"?Symbol():"_split",ud,by=()=>ud||zs.register(window.gsap),zg=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Qa=r=>r?typeof r=="string"?Qa(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...Qa(t)):e.push(t),e),[]):[r]:[],kg=r=>Qa(r).filter(e=>e&&e.nodeType===1),Hc=[],hd=function(){},Ty={add:r=>r()},wy=/\s+/g,Vg=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Gc={left:0,top:0,width:0,height:0},Ey=(r,e)=>{for(;++e<r.length&&r[e]===Gc;);return r[e]||Gc},Hg=({element:r,html:e,ariaL:t,ariaH:i})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),i?r.setAttribute("aria-hidden",i):r.removeAttribute("aria-hidden")},Gg=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||Hc),i=r.length,n,s,o,a;if(t.size)for(;--i>-1;){s=r[i];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(n=0,a=s;o.startsWith(a+=r[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){r[i]=o,r.splice(i+1,n);break}}}}return r},Wg=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Mo=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),fd=(r,e,t)=>{let i=e[r+"sClass"]||"",{tag:n="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=h=>{let d=document.createElement(n),u=t.length+1;return i&&(d.className=i+(l?" "+i+u:"")),o&&d.style.setProperty("--"+r,u+""),s!=="none"&&d.setAttribute("aria-hidden","true"),n!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,t.push(d),d};return l&&(i=i.replace("++","")),c.collection=t,c},Ay=(r,e,t,i)=>{let n=fd("line",t,i),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},Xg=(r,e,t,i,n,s,o,a,l,c)=>{var h;let d=Array.from(r.childNodes),u=0,{wordDelimiter:f,reduceWhiteSpace:p=!0,prepareText:v}=e,m=r.getBoundingClientRect(),g=m,x=!p&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",E=s&&c&&window.getComputedStyle(r).direction==="rtl",y=0,b=t.collection,w,_,S,P,C,N,D,H,I,V,X,U,ie,q,R,ee,ye,we;for(typeof f=="object"?(S=f.delimiter||f,_=f.replaceWith||""):_=f===""?"":f||" ",w=_!==" ";u<d.length;u++)if(P=d[u],P.nodeType===3){for(R=P.textContent||"",p?R=R.replace(wy," "):x&&(R=R.replace(/\n/g,_+`
`)),v&&(R=v(R,r)),P.textContent=R,C=_||S?R.split(S||_):R.match(a)||Hc,ye=C[C.length-1],H=w?ye.slice(-1)===" ":!ye,ye||C.pop(),g=m,D=w?C[0].charAt(0)===" ":!C[0],D&&Mo(" ",r,P),C[0]||C.shift(),Gg(C,l),s&&c||(P.textContent=""),I=1;I<=C.length;I++)if(ee=C[I-1],!p&&x&&ee.charAt(0)===`
`&&((h=P.previousSibling)==null||h.remove(),Mo(document.createElement("br"),r,P),ee=ee.slice(1)),!p&&ee==="")Mo(_,r,P);else if(ee===" ")r.insertBefore(document.createTextNode(" "),P);else{if(w&&ee.charAt(0)===" "&&Mo(" ",r,P),y&&I===1&&!D&&b.indexOf(y.parentNode)>-1?(N=b[b.length-1],N.appendChild(document.createTextNode(i?"":ee))):(N=t(i?"":ee),Mo(N,r,P),y&&I===1&&!D&&N.insertBefore(y,N.firstChild)),i){if(X=zg?Gg([...zg.segment(ee)].map(K=>K.segment),l):ee.match(a)||Hc,l){let K=ee.match(l);K&&K.some(ce=>X.indexOf(ce)<0)&&(X=ee.match(a)||Hc)}for(we=0;we<X.length;we++)N.appendChild(X[we]===" "?document.createTextNode(" "):i(X[we]))}if(s&&c){if(R=P.textContent=R.substring(ee.length+1,R.length),V=N.getBoundingClientRect(),V.top>g.top&&(E?V.left>=g.left:V.left<=g.left)){for(U=r.cloneNode(),ie=r.childNodes[0];ie&&ie!==N;)q=ie,ie=ie.nextSibling,U.appendChild(q);r.parentNode.insertBefore(U,r),n&&Wg(U)}g=V}(I<C.length||H)&&Mo(I>=C.length?" ":w&&ee.slice(-1)===" "?" "+_:_,r,P)}r.removeChild(P),y=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(b.indexOf(P.previousSibling)>-1&&b[b.length-1].appendChild(P),y=P):(Xg(P,e,t,i,n,s,o,a,l,!0),y=0),n&&Wg(P))},qg=class Yg{constructor(e,t){this.isSplit=!1,by(),this.elements=kg(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(s=>{var o;t.overwrite!==!1&&((o=s[Bg])==null||o._data.orig.filter(({element:a})=>a===s).forEach(Hg)),s[Bg]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n=()=>{let s=i.length,o;for(;s--;){o=i[s];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(n,200)})},hd(this),this.split(t)}split(e){return(this._ctx||Ty).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=t.indexOf("lines")>-1,d=t.indexOf("chars")>-1,u=t.indexOf("words")>-1,f=d&&!u&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),v=p?new RegExp(p.source+"|"+Vg.source,"gu"):Vg,m=!!e.ignore&&kg(e.ignore),{orig:g,animTime:x,obs:E}=this._data,y;(d||u||h)&&(this.elements.forEach((b,w)=>{g[w]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},i==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):i==="hidden"&&b.setAttribute("aria-hidden","true");let _=[],S=[],P=[],C=d?fd("char",e,_):null,N=fd("word",e,S),D,H,I,V;if(Xg(b,e,N,C,f,n&&(h||f),m,v,p,!1),h){let X=Qa(b.childNodes),U=Ay(b,X,e,P),ie,q=[],R=0,ee=window.getComputedStyle(b).direction==="rtl",ye=X.map(ce=>ce.nodeType===1?ce.getBoundingClientRect():Gc),we=Gc,K;for(D=0;D<X.length;D++)ie=X[D],ie.nodeType===1&&(ie.nodeName==="BR"?((!D||X[D-1].nodeName!=="BR")&&(q.push(ie),U(R,D+1)),R=D+1,we=Ey(ye,D)):(K=ye[D],D&&K.top>we.top&&(ee?K.left+K.width>we.left+1:K.left<we.left+we.width-1)&&(U(R,D),R=D),we=K));R<D&&U(R,D),q.forEach(ce=>{var Se;return(Se=ce.parentNode)==null?void 0:Se.removeChild(ce)})}if(!u){for(D=0;D<S.length;D++)if(H=S[D],d||!H.nextSibling||H.nextSibling.nodeType!==3)if(s&&!h){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";H.firstChild;)I.appendChild(H.firstChild);H.replaceWith(I)}else H.replaceWith(...H.childNodes);else V=H.nextSibling,V&&V.nodeType===3&&(V.textContent=(H.textContent||"")+(V.textContent||""),H.remove());S.length=0,b.normalize()}this.lines.push(...P),this.words.push(...S),this.chars.push(..._)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let w=b.cloneNode();return b.replaceWith(w),w.appendChild(b),b.className&&(w.className=b.className.trim().split(" ").map(_=>_+"-mask").join(" ")),w.style.overflow="clip",w.style.verticalAlign="top",w}))),this.isSplit=!0,Ka&&h&&a&&Ka.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=x?y.totalTime(x):y),h&&a&&this.elements.forEach((b,w)=>{g[w].width=b.offsetWidth,E&&E.observe(b)})}),this}kill(){let{obs:e,t}=this._data;e&&e.disconnect(),clearTimeout(t),Ka?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(Hg),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new Yg(e,t)}static register(e){Ja=Ja||e||window.gsap,Ja&&(Qa=Ja.utils.toArray,hd=Ja.core.context||hd),!ud&&window.innerWidth>0&&(Ka=document.fonts,ud=!0)}};qg.version="3.15.1";var zs=qg;var $g="1.3.27";function Kg(r,e,t){return Math.max(r,Math.min(e,t))}function Cy(r,e,t){return(1-t)*r+t*e}function Ry(r,e,t,i){return Cy(r,e,1-Math.exp(-t*i))}function Py(r,e){return(r%e+e)%e}var Iy=class{constructor(){Be(this,"isRunning",!1);Be(this,"value",0);Be(this,"from",0);Be(this,"to",0);Be(this,"currentTime",0);Be(this,"lerp");Be(this,"duration");Be(this,"easing");Be(this,"onUpdate")}advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;let t=Kg(0,this.currentTime/this.duration,1);e=t>=1;let i=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Ry(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:i,easing:n,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Ly(r,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,i)},e)}}var Dy=class{constructor(r,e,{autoResize:t=!0,debounce:i=250}={}){Be(this,"width",0);Be(this,"height",0);Be(this,"scrollHeight",0);Be(this,"scrollWidth",0);Be(this,"debouncedResize");Be(this,"wrapperResizeObserver");Be(this,"contentResizeObserver");Be(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Be(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Be(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=Ly(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Qg=class{constructor(){Be(this,"events",{})}emit(r,...e){let t=this.events[r]||[];for(let i=0,n=t.length;i<n;i++)t[i]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Ny=100/6,es={passive:!1};function Zg(r,e){return r===1?Ny:r===2?e:1}var Oy=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Be(this,"touchStart",{x:0,y:0});Be(this,"lastDelta",{x:0,y:0});Be(this,"window",{width:0,height:0});Be(this,"emitter",new Qg);Be(this,"onTouchStart",r=>{let{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Be(this,"onTouchMove",r=>{let{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:r})});Be(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Be(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:i}=r,n=Zg(i,this.window.width),s=Zg(i,this.window.height);e*=n,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Be(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,es),this.element.addEventListener("touchstart",this.onTouchStart,es),this.element.addEventListener("touchmove",this.onTouchMove,es),this.element.addEventListener("touchend",this.onTouchEnd,es)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,es),this.element.removeEventListener("touchstart",this.onTouchStart,es),this.element.removeEventListener("touchmove",this.onTouchMove,es),this.element.removeEventListener("touchend",this.onTouchEnd,es)}},Jg=r=>Math.min(1,1.001-2**(-10*r)),jg=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:v=!0,prevent:m,virtualScroll:g,overscroll:x=!0,autoRaf:E=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:S=_,stopInertiaOnNavigate:P=!1,respectReducedMotion:C=!0}={}){Be(this,"_isScrolling",!1);Be(this,"_isStopped",!1);Be(this,"_isLocked",!1);Be(this,"_preventNextNativeScrollEvent",!1);Be(this,"_resetVelocityTimeout",null);Be(this,"_rafId",null);Be(this,"_isDraggingSelection",!1);Be(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Be(this,"isTouching");Be(this,"isIos");Be(this,"time",0);Be(this,"userData",{});Be(this,"lastVelocity",0);Be(this,"velocity",0);Be(this,"direction",0);Be(this,"options");Be(this,"targetScroll");Be(this,"animatedScroll");Be(this,"animate",new Iy);Be(this,"emitter",new Qg);Be(this,"dimensions");Be(this,"virtualScroll");Be(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Be(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Be(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Be(this,"onClick",r=>{let e=r.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){let i=e.find(n=>t.host===n.host&&t.pathname===n.pathname&&n.hash);if(i){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,n);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Be(this,"onPointerDown",r=>{r.button===1&&this.reset()});Be(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:e,deltaY:t,event:i}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),s=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||n&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let u=n&&this.options.syncTouch,f=n&&i.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Be(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Be(this,"raf",r=>{let e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=$g,window.lenis||(window.lenis={}),window.lenis.version=$g,d==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Jg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:v,prevent:m,virtualScroll:g,overscroll:x,autoRaf:E,anchors:y,autoToggle:b,allowNestedScroll:w,naiveDimensions:S,stopInertiaOnNavigate:P,respectReducedMotion:C},this.dimensions=new Dy(r,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Oy(t,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;let i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;let n=i[0],s=i[i.length-1],o=40,a=Math.hypot(t.clientX-n.left,t.clientY-n.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:n=!0,lerp:s=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(n?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(p=u),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let v=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),x=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);u=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(E)?0:E)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=Kg(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Jg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),n&&(this.targetScroll=p),v||this.emit(),v&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){let i=Date.now();r._lenis||(r._lenis={});let n=r._lenis,s,o,a,l,c,h,d,u,f,p;if(i-(n.time??0)>2e3){n.time=Date.now();let w=window.getComputedStyle(r);if(n.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),n.hasOverflowX=s,n.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,a=d>f,l=u>p,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=d,n.scrollHeight=u,n.clientWidth=f,n.clientHeight=p,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else a=n.isScrollableX,l=n.isScrollableY,s=n.hasOverflowX,o=n.hasOverflowY,d=n.scrollWidth,u=n.scrollHeight,f=n.clientWidth,p=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",m,g,x,E,y,b;if(v==="horizontal")m=Math.round(r.scrollLeft),g=d-f,x=e,E=s,y=a,b=c;else if(v==="vertical")m=Math.round(r.scrollTop),g=u-p,x=t,E=o,y=l,b=h;else return!1;return!b&&(m>=g||m<=0)?!0:(x>0?m<g:m>0)&&E&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Py(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var I0=0,qd=1,L0=2;var Al=1,D0=2,oa=3,fs=0,tn=1,sr=2,Dr=0,aa=1,bn=2,Yd=3,$d=4,N0=5;var qs=100,O0=101,U0=102,F0=103,B0=104,z0=200,k0=201,V0=202,H0=203,Zd=204,Jd=205,G0=206,W0=207,X0=208,q0=209,Y0=210,$0=211,Z0=212,J0=213,K0=214,vh=0,xh=1,yh=2,Ho=3,Sh=4,Mh=5,bh=6,Th=7,Kd=0,Q0=1,j0=2,or=0,Cl=1,Rl=2,Pl=3,Ys=4,Il=5,Ll=6,Dl=7;var Qd=300,$s=301,la=302,Zh=303,Jh=304,wh=1e3,ir=1001,Eh=1002,_i=1003,e_=1004;var Nl=1005;var en=1006,Kh=1007;var Nr=1008;var Tn=1009,jd=1010,ep=1011,ca=1012,Qh=1013,Wn=1014,Xn=1015,Ei=1016,jh=1017,eu=1018,Zs=1020,tp=35902,ip=35899,np=1021,rp=1022,qn=1023,Cr=1026,Or=1027,sp=1028,tu=1029,ds=1030,iu=1031;var nu=1033,Ol=33776,Ul=33777,Fl=33778,Bl=33779,ru=35840,su=35841,ou=35842,au=35843,lu=36196,cu=37492,hu=37496,uu=37488,fu=37489,zl=37490,du=37491,pu=37808,mu=37809,gu=37810,_u=37811,vu=37812,xu=37813,yu=37814,Su=37815,Mu=37816,bu=37817,Tu=37818,wu=37819,Eu=37820,Au=37821,Cu=36492,Ru=36494,Pu=36495,Iu=36283,Lu=36284,kl=36285,Du=36286;var al=2300,Ah=2301,mh=2302,Bd=2303,zd=2400,kd=2401,Vd=2402;var t_=3200;var op=0,i_=1,Ur="",bi="srgb",ll="srgb-linear",cl="linear",Mt="srgb";var gh=7680;var n_=519,r_=512,s_=513,o_=514,ap=515,a_=516,l_=517,lp=518,cp=519,hp=35044;var up="300 es",Dn=2e3,hl=2001;function Uy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Fy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Go(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function c_(){let r=Go("canvas");return r.style.display="block",r}var e0={},Wo=null;function ul(...r){let e="THREE."+r.shift();Wo?Wo("log",e,...r):console.log(e,...r)}function h_(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ge(...r){r=h_(r);let e="THREE."+r.shift();if(Wo)Wo("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Xe(...r){r=h_(r);let e="THREE."+r.shift();if(Wo)Wo("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ol(...r){let e=r.join(" ");e in e0||(e0[e]=!0,Ge(...r))}function u_(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var f_={[vh]:vh,[yh]:bh,[Sh]:Sh,[Ho]:Mh,[xh]:xh,[bh]:yh,[Th]:Th,[Mh]:Ho},nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}},Ui=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dd=Math.PI/180,Ch=180/Math.PI;function Js(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ui[r&255]+Ui[r>>8&255]+Ui[r>>16&255]+Ui[r>>24&255]+"-"+Ui[e&255]+Ui[e>>8&255]+"-"+Ui[e>>16&15|64]+Ui[e>>24&255]+"-"+Ui[t&63|128]+Ui[t>>8&255]+"-"+Ui[t>>16&255]+Ui[t>>24&255]+Ui[i&255]+Ui[i>>8&255]+Ui[i>>16&255]+Ui[i>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function By(r,e){return(r%e+e)%e}function pd(r,e,t){return(1-t)*r+t*e}function d_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Nu(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function p_(r,e){if(e.constructor===Float32Array)return r;let t=Nu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function m_(r,e){if(e.constructor===Float32Array)return r;let t=Nu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var _p=class _p{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_p.prototype.isVector2=!0;var Ve=_p,rr=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[o+0],f=s[o+1],p=s[o+2],v=s[o+3];if(d!==v||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*v;m<0&&(u=-u,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let x=Math.acos(m),E=Math.sin(x);g=Math.sin(g*x)/E,a=Math.sin(a*x)/E,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+v*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+v*a;let x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(s/2),u=l(i/2),f=l(n/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vp=class vp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(t0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(t0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-s*n),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=n+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vp.prototype.isVector3=!0;var B=vp,md=new B,t0=new rr,xp=class xp{constructor(e,t,i,n,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c)}set(e,t,i,n,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],v=n[0],m=n[3],g=n[6],x=n[1],E=n[4],y=n[7],b=n[2],w=n[5],_=n[8];return s[0]=o*v+a*x+l*b,s[3]=o*m+a*E+l*w,s[6]=o*g+a*y+l*_,s[1]=c*v+h*x+d*b,s[4]=c*m+h*E+d*w,s[7]=c*g+h*y+d*_,s[2]=u*v+f*x+p*b,s[5]=u*m+f*E+p*w,s[8]=u*g+f*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=t*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=d*v,e[1]=(n*c-h*i)*v,e[2]=(a*i-n*o)*v,e[3]=u*v,e[4]=(h*t-n*l)*v,e[5]=(n*s-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ol("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gd.makeScale(e,t)),this}rotate(e){return ol("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gd.makeRotation(-e)),this}translate(e,t){return ol("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xp.prototype.isMatrix3=!0;var $e=xp,gd=new $e,i0=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n0=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zy(){let r={enabled:!0,workingColorSpace:ll,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(n.r=Ar(n.r),n.g=Ar(n.g),n.b=Ar(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(n.r=Vo(n.r),n.g=Vo(n.g),n.b=Vo(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ur?cl:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ll]:{primaries:e,whitePoint:i,transfer:cl,toXYZ:i0,fromXYZ:n0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:i0,fromXYZ:n0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),r}var at=zy();function Ar(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var bo,Rh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bo===void 0&&(bo=Go("canvas")),bo.width=e.width,bo.height=e.height;let n=bo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=bo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Go("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Ar(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ar(t[i]/255)*255):t[i]=Ar(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ky=0,Xo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(_d(n[o].image)):s.push(_d(n[o]))}else s=_d(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function _d(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var Vy=0,vd=new B,Bi=class r extends nr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=ir,n=ir,s=en,o=Nr,a=qn,l=Tn,c=r.DEFAULT_ANISOTROPY,h=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Js(),this.name="",this.source=new Xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vd).x}get height(){return this.source.getSize(vd).y}get depth(){return this.source.getSize(vd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wh:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wh:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bi.DEFAULT_IMAGE=null;Bi.DEFAULT_MAPPING=Qd;Bi.DEFAULT_ANISOTROPY=1;var yp=class yp{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(f+1)/2,b=(g+1)/2,w=(h+u)/4,_=(d+v)/4,S=(p+m)/4;return E>y&&E>b?E<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(E),n=w/i,s=_/i):y>b?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=w/n,s=S/n):b<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),i=_/s,n=S/s),this.set(i,n,s,t),this}let x=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yp.prototype.isVector4=!0;var $t=yp,Ph=class extends nr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new Bi({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Xo(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends Ph{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},fl=class extends Bi{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=_i,this.minFilter=_i,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ih=class extends Bi{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=_i,this.minFilter=_i,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $h=class $h{constructor(e,t,i,n,s,o,a,l,c,h,d,u,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c,h,d,u,f,p,v,m)}set(e,t,i,n,s,o,a,l,c,h,d,u,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $h().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/To.setFromMatrixColumn(e,0).length(),s=1/To.setFromMatrixColumn(e,1).length(),o=1/To.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,v=c*d;t[0]=u+v*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,v=c*d;t[0]=u-v*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,v=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=v-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-v*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hy,e,Gy)}lookAt(e,t,i){let n=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ts.crossVectors(i,yn),ts.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ts.crossVectors(i,yn)),ts.normalize(),Wc.crossVectors(yn,ts),n[0]=ts.x,n[4]=Wc.x,n[8]=yn.x,n[1]=ts.y,n[5]=Wc.y,n[9]=yn.y,n[2]=ts.z,n[6]=Wc.z,n[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],v=i[6],m=i[10],g=i[14],x=i[3],E=i[7],y=i[11],b=i[15],w=n[0],_=n[4],S=n[8],P=n[12],C=n[1],N=n[5],D=n[9],H=n[13],I=n[2],V=n[6],X=n[10],U=n[14],ie=n[3],q=n[7],R=n[11],ee=n[15];return s[0]=o*w+a*C+l*I+c*ie,s[4]=o*_+a*N+l*V+c*q,s[8]=o*S+a*D+l*X+c*R,s[12]=o*P+a*H+l*U+c*ee,s[1]=h*w+d*C+u*I+f*ie,s[5]=h*_+d*N+u*V+f*q,s[9]=h*S+d*D+u*X+f*R,s[13]=h*P+d*H+u*U+f*ee,s[2]=p*w+v*C+m*I+g*ie,s[6]=p*_+v*N+m*V+g*q,s[10]=p*S+v*D+m*X+g*R,s[14]=p*P+v*H+m*U+g*ee,s[3]=x*w+E*C+y*I+b*ie,s[7]=x*_+E*N+y*V+b*q,s[11]=x*S+E*D+y*X+b*R,s[15]=x*P+E*H+y*U+b*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15],x=l*f-c*u,E=a*f-c*d,y=a*u-l*d,b=o*f-c*h,w=o*u-l*h,_=o*d-a*h;return t*(v*x-m*E+g*y)-i*(p*x-m*b+g*w)+n*(p*E-v*b+g*_)-s*(p*y-v*w+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(s*h-a*l)+n*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],x=t*a-i*o,E=t*l-n*o,y=t*c-s*o,b=i*l-n*a,w=i*c-s*a,_=n*c-s*l,S=h*v-d*p,P=h*m-u*p,C=h*g-f*p,N=d*m-u*v,D=d*g-f*v,H=u*g-f*m,I=x*H-E*D+y*N+b*C-w*P+_*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return e[0]=(a*H-l*D+c*N)*V,e[1]=(n*D-i*H-s*N)*V,e[2]=(v*_-m*w+g*b)*V,e[3]=(u*w-d*_-f*b)*V,e[4]=(l*C-o*H-c*P)*V,e[5]=(t*H-n*C+s*P)*V,e[6]=(m*y-p*_-g*E)*V,e[7]=(h*_-u*y+f*E)*V,e[8]=(o*D-a*C+c*S)*V,e[9]=(i*C-t*D-s*S)*V,e[10]=(p*w-v*y+g*x)*V,e[11]=(d*y-h*w-f*x)*V,e[12]=(a*P-o*N-l*S)*V,e[13]=(t*N-i*P+n*S)*V,e[14]=(v*E-p*b-m*x)*V,e[15]=(h*b-d*E+u*x)*V,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,v=o*h,m=o*d,g=a*d,x=l*c,E=l*h,y=l*d,b=i.x,w=i.y,_=i.z;return n[0]=(1-(v+g))*b,n[1]=(f+y)*b,n[2]=(p-E)*b,n[3]=0,n[4]=(f-y)*w,n[5]=(1-(u+g))*w,n[6]=(m+x)*w,n[7]=0,n[8]=(p+E)*_,n[9]=(m-x)*_,n[10]=(1-(u+v))*_,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=To.set(n[0],n[1],n[2]).length(),a=To.set(n[4],n[5],n[6]).length(),l=To.set(n[8],n[9],n[10]).length();s<0&&(o=-o),kn.copy(this);let c=1/o,h=1/a,d=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,n,s,o,a=Dn,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),p,v;if(l)p=s/(o-s),v=o*s/(o-s);else if(a===Dn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===hl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=Dn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n),p,v;if(l)p=1/(o-s),v=o/(o-s);else if(a===Dn)p=-2/(o-s),v=-(o+s)/(o-s);else if(a===hl)p=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};$h.prototype.isMatrix4=!0;var Nt=$h,To=new B,kn=new Nt,Hy=new B(0,0,0),Gy=new B(1,1,1),ts=new B,Wc=new B,yn=new B,r0=new Nt,s0=new rr,os=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return r0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return s0.setFromEuler(this),this.setFromQuaternion(s0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wy=0,o0=new B,wo=new rr,yr=new Nt,Xc=new B,ja=new B,Xy=new B,qy=new rr,a0=new B(1,0,0),l0=new B(0,1,0),c0=new B(0,0,1),h0={type:"added"},Yy={type:"removed"},Eo={type:"childadded",child:null},xd={type:"childremoved",child:null},hn=class r extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new B,t=new os,i=new rr,n=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Nt},normalMatrix:{value:new $e}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(a0,e)}rotateY(e){return this.rotateOnAxis(l0,e)}rotateZ(e){return this.rotateOnAxis(c0,e)}translateOnAxis(e,t){return o0.copy(e).applyQuaternion(this.quaternion),this.position.add(o0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(a0,e)}translateY(e){return this.translateOnAxis(l0,e)}translateZ(e){return this.translateOnAxis(c0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xc.copy(e):Xc.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(ja,Xc,this.up):yr.lookAt(Xc,ja,this.up),this.quaternion.setFromRotationMatrix(yr),n&&(yr.extractRotation(n.matrixWorld),wo.setFromRotationMatrix(yr),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h0),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yy),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h0),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,Xy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new B(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Er=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},$y={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($y)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},qc={h:0,s:0,l:0};function yd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=at.workingColorSpace){if(e=By(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=yd(o,s,e+1/3),this.g=yd(o,s,e),this.b=yd(o,s,e-1/3)}return at.colorSpaceToWorking(this,n),this}setStyle(e,t=bi){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bi){let i=g_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return at.workingToColorSpace(Fi.copy(this),e),Math.round(ht(Fi.r*255,0,255))*65536+Math.round(ht(Fi.g*255,0,255))*256+Math.round(ht(Fi.b*255,0,255))}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Fi.copy(this),t);let i=Fi.r,n=Fi.g,s=Fi.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Fi.copy(this),t),e.r=Fi.r,e.g=Fi.g,e.b=Fi.b,e}getStyle(e=bi){at.workingToColorSpace(Fi.copy(this),e);let t=Fi.r,i=Fi.g,n=Fi.b;return e!==bi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(qc);let i=pd(is.h,qc.h,t),n=pd(is.s,qc.s,t),s=pd(is.l,qc.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fi=new Ze;Ze.NAMES=g_;var dl=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new B,Sr=new B,Sd=new B,Mr=new B,Ao=new B,Co=new B,u0=new B,Md=new B,bd=new B,Td=new B,wd=new $t,Ed=new $t,Ad=new $t,wr=class r{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Vn.subVectors(e,t),n.cross(Vn);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Vn.subVectors(n,t),Sr.subVectors(i,t),Sd.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(Sr),l=Vn.dot(Sd),c=Sr.dot(Sr),h=Sr.dot(Sd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Mr)===null?!1:Mr.x>=0&&Mr.y>=0&&Mr.x+Mr.y<=1}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,Mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mr.x),l.addScaledVector(o,Mr.y),l.addScaledVector(a,Mr.z),l)}static getInterpolatedAttribute(e,t,i,n,s,o){return wd.setScalar(0),Ed.setScalar(0),Ad.setScalar(0),wd.fromBufferAttribute(e,t),Ed.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(wd,s.x),o.addScaledVector(Ed,s.y),o.addScaledVector(Ad,s.z),o}static isFrontFacing(e,t,i,n){return Vn.subVectors(i,t),Sr.subVectors(e,t),Vn.cross(Sr).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Sr.subVectors(this.a,this.b),Vn.cross(Sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,o,a;Ao.subVectors(n,i),Co.subVectors(s,i),Md.subVectors(e,i);let l=Ao.dot(Md),c=Co.dot(Md);if(l<=0&&c<=0)return t.copy(i);bd.subVectors(e,n);let h=Ao.dot(bd),d=Co.dot(bd);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Ao,o);Td.subVectors(e,s);let f=Ao.dot(Td),p=Co.dot(Td);if(p>=0&&f<=p)return t.copy(s);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Co,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return u0.subVectors(s,n),a=(d-h)/(d-h+(f-p)),t.copy(n).addScaledVector(u0,a);let g=1/(m+v+u);return o=v*g,a=u*g,t.copy(i).addScaledVector(Ao,o).addScaledVector(Co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},as=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yc.copy(i.boundingBox)),Yc.applyMatrix4(e.matrixWorld),this.union(Yc)}let n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),$c.subVectors(this.max,el),Ro.subVectors(e.a,el),Po.subVectors(e.b,el),Io.subVectors(e.c,el),ns.subVectors(Po,Ro),rs.subVectors(Io,Po),ks.subVectors(Ro,Io);let t=[0,-ns.z,ns.y,0,-rs.z,rs.y,0,-ks.z,ks.y,ns.z,0,-ns.x,rs.z,0,-rs.x,ks.z,0,-ks.x,-ns.y,ns.x,0,-rs.y,rs.x,0,-ks.y,ks.x,0];return!Cd(t,Ro,Po,Io,$c)||(t=[1,0,0,0,1,0,0,0,1],!Cd(t,Ro,Po,Io,$c))?!1:(Zc.crossVectors(ns,rs),t=[Zc.x,Zc.y,Zc.z],Cd(t,Ro,Po,Io,$c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},br=[new B,new B,new B,new B,new B,new B,new B,new B],Hn=new B,Yc=new as,Ro=new B,Po=new B,Io=new B,ns=new B,rs=new B,ks=new B,el=new B,$c=new B,Zc=new B,Vs=new B;function Cd(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Vs.fromArray(r,s);let a=n.x*Math.abs(Vs.x)+n.y*Math.abs(Vs.y)+n.z*Math.abs(Vs.z),l=e.dot(Vs),c=t.dot(Vs),h=i.dot(Vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var si=new B,Jc=new Ve,Zy=0,Yt=class extends nr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hp,this.updateRanges=[],this.gpuType=Xn,this.version=0,this._normalizationScale=e!==void 0?Nu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jc.fromBufferAttribute(this,t),Jc.applyMatrix3(e),this.setXY(t,Jc.x,Jc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyMatrix3(e),this.setXYZ(t,si.x,si.y,si.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyMatrix4(e),this.setXYZ(t,si.x,si.y,si.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyNormalMatrix(e),this.setXYZ(t,si.x,si.y,si.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.transformDirection(e),this.setXYZ(t,si.x,si.y,si.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):p_(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):m_(e,this.array)}};var pl=class extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ml=class extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var gi=class extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Jy=new as,tl=new B,Rd=new B,Rr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Jy.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);let t=tl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(tl,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(Rd)),this.expandByPoint(tl.copy(e.center).sub(Rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ky=0,Ln=new Nt,Pd=new hn,Lo=new B,Sn=new as,il=new as,mi=new B,Ti=class r extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uy(e)?ml:pl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return Pd.lookAt(e),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gi(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(mi.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(mi),mi.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(mi)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];il.setFromBufferAttribute(a),this.morphTargetsRelative?(mi.addVectors(Sn.min,il.min),Sn.expandByPoint(mi),mi.addVectors(Sn.max,il.max),Sn.expandByPoint(mi)):(Sn.expandByPoint(il.min),Sn.expandByPoint(il.max))}Sn.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)mi.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(mi));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)mi.fromBufferAttribute(a,c),l&&(Lo.fromBufferAttribute(e,c),mi.add(Lo)),n=Math.max(n,i.distanceToSquared(mi))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Yt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new B,l[P]=new B;let h=new B,d=new B,u=new B,f=new Ve,p=new Ve,v=new Ve,m=new B,g=new B;function x(P,C,N){c[P]=c[C]=c[N]=1,h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,N),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,C),v.fromBufferAttribute(s,N),d.sub(h),u.sub(h),p.sub(f),v.sub(f);let D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(D),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(D),a[P].add(m),a[C].add(m),a[N].add(m),l[P].add(g),l[C].add(g),l[N].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,C=E.length;P<C;++P){let N=E[P],D=N.start,H=N.count;for(let I=D,V=D+H;I<V;I+=3)x(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new B,b=new B,w=new B,_=new B;function S(P){w.fromBufferAttribute(n,P),_.copy(w);let C=a[P];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),b.crossVectors(_,C);let D=b.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,C=i.count;P<C;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new B,s=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mi.fromBufferAttribute(e,t),mi.normalize(),e.setXYZ(t,mi.x,mi.y,mi.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Yt(u,h,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hp,this.updateRanges=[],this.version=0,this.uuid=Js()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=f0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=f0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function f0(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Js()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var Qi=new B,gl=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Nu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Qi.fromBufferAttribute(this,t),Qi.applyMatrix4(e),this.setXYZ(t,Qi.x,Qi.y,Qi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qi.fromBufferAttribute(this,t),Qi.applyNormalMatrix(e),this.setXYZ(t,Qi.x,Qi.y,Qi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qi.fromBufferAttribute(this,t),Qi.transformDirection(e),this.setXYZ(t,Qi.x,Qi.y,Qi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ul("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ul("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):p_(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):m_(e,this.data.array)}},Id=new B,Qy=new B,jy=new $e,Gn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Id.subVectors(i,t).cross(Qy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Id),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||jy.getNormalMatrix(e),n=this.coplanarPoint(Id).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},eS=0,Pr=class extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=aa,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Jd,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gh,this.stencilZFail=gh,this.stencilZPass=gh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Gn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ir=class extends Pr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Do,nl=new B,No=new B,Oo=new B,Uo=new Ve,rl=new Ve,__=new Nt,Kc=new B,sl=new B,Qc=new B,d0=new Ve,Ld=new Ve,p0=new Ve,ls=class extends hn{constructor(e=new Ir){if(super(),this.isSprite=!0,this.type="Sprite",Do===void 0){Do=new Ti;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lh(t,5);Do.setIndex([0,1,2,0,2,3]),Do.setAttribute("position",new gl(i,3,0,!1)),Do.setAttribute("uv",new gl(i,2,3,!1))}this.geometry=Do,this.material=e,this.center=new Ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),No.setFromMatrixScale(this.matrixWorld),__.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&No.multiplyScalar(-Oo.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let o=this.center;jc(Kc.set(-.5,-.5,0),Oo,o,No,n,s),jc(sl.set(.5,-.5,0),Oo,o,No,n,s),jc(Qc.set(.5,.5,0),Oo,o,No,n,s),d0.set(0,0),Ld.set(1,0),p0.set(1,1);let a=e.ray.intersectTriangle(Kc,sl,Qc,!1,nl);if(a===null&&(jc(sl.set(-.5,.5,0),Oo,o,No,n,s),Ld.set(0,1),a=e.ray.intersectTriangle(Kc,Qc,sl,!1,nl),a===null))return;let l=e.ray.origin.distanceTo(nl);l<e.near||l>e.far||t.push({distance:l,point:nl.clone(),uv:wr.getInterpolation(nl,Kc,sl,Qc,d0,Ld,p0,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function jc(r,e,t,i,n,s){Uo.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(rl.x=s*Uo.x-n*Uo.y,rl.y=n*Uo.x+s*Uo.y):rl.copy(Uo),r.copy(e),r.x+=rl.x,r.y+=rl.y,r.applyMatrix4(__)}var Tr=new B,Dd=new B,eh=new B,th=new B,$o=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Dd.copy(e).add(t).multiplyScalar(.5),eh.copy(t).sub(e).normalize(),th.copy(this.origin).sub(Dd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(eh),a=th.dot(this.direction),l=-th.dot(eh),c=th.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Dd).addScaledVector(eh,u),f}intersectSphere(e,t){if(e.radius<0)return null;Tr.subVectors(e.center,this.origin);let i=Tr.dot(this.direction),n=Tr.dot(Tr)-i*i,s=e.radius*e.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,i,n,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,g=i.x-o.x,x=i.y-o.y,E=i.z-o.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(h),_,S,P,C,N,D,H,I,V,X,U,ie;if(y>=b&&y>=w?(P=l,D=d,V=p,ie=g,l>=0?(_=c,S=h,C=u,N=f,H=v,I=m,X=x,U=E):(_=h,S=c,C=f,N=u,H=m,I=v,X=E,U=x)):b>=w?(P=c,D=u,V=v,ie=x,c>=0?(_=h,S=l,C=f,N=d,H=m,I=p,X=E,U=g):(_=l,S=h,C=d,N=f,H=p,I=m,X=g,U=E)):(P=h,D=f,V=m,ie=E,h>=0?(_=l,S=c,C=d,N=u,H=p,I=v,X=g,U=x):(_=c,S=l,C=u,N=d,H=v,I=p,X=x,U=g)),P===0)return null;let q=_/P,R=S/P,ee=1/P,ye=C-q*D,we=N-R*D,K=H-q*V,ce=I-R*V,Se=X-q*ie,Te=U-R*ie,_e=Se*ce-Te*K,Le=ye*Te-we*Se,pt=K*we-ce*ye;if(n){if(_e<0||Le<0||pt<0)return null}else if((_e<0||Le<0||pt<0)&&(_e>0||Le>0||pt>0))return null;let Ce=_e+Le+pt;if(Ce===0)return null;let qe=ee*(_e*D+Le*V+pt*ie);return(Ce>0?qe<0:qe>0)?null:this.at(qe/Ce,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zo=class extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},m0=new Nt,Hs=new $o,ih=new Rr,g0=new B,nh=new B,rh=new B,sh=new B,Nd=new B,oh=new B,_0=new B,ah=new B,wi=class extends hn{constructor(e=new Ti,t=new Zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(s&&a){oh.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(Nd.fromBufferAttribute(d,e),o?oh.addScaledVector(Nd,h):oh.addScaledVector(Nd.sub(t),h))}t.add(oh)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ih.copy(i.boundingSphere),ih.applyMatrix4(s),Hs.copy(e.ray).recast(e.near),!(ih.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(ih,g0)===null||Hs.origin.distanceToSquared(g0)>(e.far-e.near)**2))&&(m0.copy(s).invert(),Hs.copy(e.ray).applyMatrix4(m0),!(i.boundingBox!==null&&Hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,b=E;y<b;y+=3){let w=a.getX(y),_=a.getX(y+1),S=a.getX(y+2);n=lh(this,g,e,i,c,h,d,w,_,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let x=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);n=lh(this,o,e,i,c,h,d,x,E,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,b=E;y<b;y+=3){let w=y,_=y+1,S=y+2;n=lh(this,g,e,i,c,h,d,w,_,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let x=m,E=m+1,y=m+2;n=lh(this,o,e,i,c,h,d,x,E,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function tS(r,e,t,i,n,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===fs,a),l===null)return null;ah.copy(a),ah.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(ah);return c<t.near||c>t.far?null:{distance:c,point:ah.clone(),object:r}}function lh(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,nh),r.getVertexPosition(l,rh),r.getVertexPosition(c,sh);let h=tS(r,e,t,i,nh,rh,sh,_0);if(h){let d=new B;wr.getBarycoord(_0,nh,rh,sh,d),n&&(h.uv=wr.getInterpolatedAttribute(n,a,l,c,d,new Ve)),s&&(h.uv1=wr.getInterpolatedAttribute(s,a,l,c,d,new Ve)),o&&(h.normal=wr.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};wr.getNormal(nh,rh,sh,u.normal),h.face=u,h.barycoord=d}return h}var Jo=class extends Bi{constructor(e=null,t=1,i=1,n,s,o,a,l,c=_i,h=_i,d,u){super(null,o,a,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gs=new Rr,iS=new Ve(.5,.5),ch=new B,Ws=class{constructor(e=new Gn,t=new Gn,i=new Gn,n=new Gn,s=new Gn,o=new Gn){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn,i=!1){let n=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],v=s[9],m=s[10],g=s[11],x=s[12],E=s[13],y=s[14],b=s[15];if(n[0].setComponents(c-o,f-h,g-p,b-x).normalize(),n[1].setComponents(c+o,f+h,g+p,b+x).normalize(),n[2].setComponents(c+a,f+d,g+v,b+E).normalize(),n[3].setComponents(c-a,f-d,g-v,b-E).normalize(),i)n[4].setComponents(l,u,m,y).normalize(),n[5].setComponents(c-l,f-u,g-m,b-y).normalize();else if(n[4].setComponents(c-l,f-u,g-m,b-y).normalize(),t===Dn)n[5].setComponents(c+l,f+u,g+m,b+y).normalize();else if(t===hl)n[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){Gs.center.set(0,0,0);let t=iS.distanceTo(e.center);return Gs.radius=.7071067811865476+t,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(ch.x=n.normal.x>0?e.max.x:e.min.x,ch.y=n.normal.y>0?e.max.y:e.min.y,ch.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ch)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},v0=new Nt,Dh=class r{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let s=t[n];v0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new Ws),i[n].setFromProjectionMatrix(v0,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Ws),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new r().copy(this)}};var Nh=class extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},x0=new Nt,Hd=new $o,hh=new Rr,uh=new B,Ko=class extends hn{constructor(e=new Ti,t=new Nh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hh.copy(i.boundingSphere),hh.applyMatrix4(n),hh.radius+=s,e.ray.intersectsSphere(hh)===!1)return;x0.copy(n).invert(),Hd.copy(e.ray).applyMatrix4(x0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,v=f;p<v;p++){let m=c.getX(p);uh.fromBufferAttribute(d,m),y0(uh,m,l,n,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,v=f;p<v;p++)uh.fromBufferAttribute(d,p),y0(uh,p,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function y0(r,e,t,i,n,s,o){let a=Hd.distanceSqToPoint(r);if(a<t){let l=new B;Hd.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var _l=class extends Bi{constructor(e=[],t=$s,i,n,s,o,a,l,c,h){super(e,t,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vl=class extends Bi{constructor(e,t,i,n,s,o,a,l,c){super(e,t,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Lr=class extends Bi{constructor(e,t,i=Wn,n,s,o,a=_i,l=_i,c,h=Cr,d=1){if(h!==Cr&&h!==Or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},xl=class extends Lr{constructor(e,t=Wn,i=$s,n,s,o=_i,a=_i,l,c=Cr){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},yl=class extends Bi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qo=class r extends Ti{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,n,o,2),p("x","z","y",1,-1,e,i,-t,n,o,3),p("x","y","z",1,-1,e,t,i,n,s,4),p("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(h,3)),this.setAttribute("uv",new gi(d,2));function p(v,m,g,x,E,y,b,w,_,S,P){let C=y/_,N=b/S,D=y/2,H=b/2,I=w/2,V=_+1,X=S+1,U=0,ie=0,q=new B;for(let R=0;R<X;R++){let ee=R*N-H;for(let ye=0;ye<V;ye++){let we=ye*C-D;q[v]=we*x,q[m]=ee*E,q[g]=I,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(ye/_),d.push(1-R/S),U+=1}}for(let R=0;R<S;R++)for(let ee=0;ee<_;ee++){let ye=u+ee+V*R,we=u+ee+V*(R+1),K=u+(ee+1)+V*(R+1),ce=u+(ee+1)+V*R;l.push(ye,we,ce),l.push(we,K,ce),ie+=6}a.addGroup(f,ie,P),f+=ie,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Oh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);let h=i[n],u=i[n+1]-h,f=(o-h)/u;return(n+f)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let o=this.getPoint(n),a=this.getPoint(s),l=t||(o.isVector2?new Ve:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new B,n=[],s=[],o=[],a=new B,l=new Nt;for(let f=0;f<=e;f++){let p=f/e;n[f]=this.getTangentAt(p,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ht(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(ht(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),o[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function fp(){let r=0,e=0,t=0,i=0;function n(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,n(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+i*a}}}var S0=new B,M0=new B,Od=new fp,Ud=new fp,Fd=new fp,jo=class extends Oh{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new B){let i=t,n=this.points,s=n.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%s]:(M0.subVectors(n[0],n[1]).add(n[0]),c=M0);let d=n[a%s],u=n[(a+1)%s];if(this.closed||a+2<s?h=n[(a+2)%s]:(S0.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=S0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Od.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,v,m),Ud.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,v,m),Fd.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Od.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ud.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Fd.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Od.calc(l),Ud.calc(l),Fd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var Xs=class r extends Ti{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let x=g*u-o;for(let E=0;E<c;E++){let y=E*d-s;p.push(y,-x,0),v.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){let E=x+c*g,y=x+c*(g+1),b=x+1+c*(g+1),w=x+1+c*g;f.push(E,y,w),f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new gi(p,3)),this.setAttribute("normal",new gi(v,3)),this.setAttribute("uv",new gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var ea=class r extends Ti{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new B,u=new B,f=[],p=[],v=[],m=[];for(let g=0;g<=i;g++){let x=[],E=g/i,y=o+E*a,b=e*Math.cos(y),w=Math.sqrt(e*e-b*b),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let P=S/t,C=n+P*s;d.x=-w*Math.cos(C),d.y=b,d.z=w*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(P+_,1-E),x.push(c++)}h.push(x)}for(let g=0;g<i;g++)for(let x=0;x<t;x++){let E=h[g][x+1],y=h[g][x],b=h[g+1][x],w=h[g+1][x+1];(g!==0||o>0)&&f.push(E,y,w),(g!==i-1||l<Math.PI)&&f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new gi(p,3)),this.setAttribute("normal",new gi(v,3)),this.setAttribute("uv",new gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ks(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(b0(n))n.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(b0(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function zi(r){let e={};for(let t=0;t<r.length;t++){let i=Ks(r[t]);for(let n in i)e[n]=i[n]}return e}function b0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function nS(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function dp(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var Fr={clone:Ks,merge:zi},rS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rS,this.fragmentShader=sS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=nS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ve().fromArray(n.value);break;case"v3":this.uniforms[i].value=new B().fromArray(n.value);break;case"v4":this.uniforms[i].value=new $t().fromArray(n.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Nt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ta=class extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Uh=class extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fh=class extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fo(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function fh(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var cs=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bh=class extends cs{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zd,endingEnd:zd}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case kd:s=e,a=2*t-i;break;case Vd:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kd:o=e,l=2*i-t;break;case Vd:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-t)/(n-t),v=p*p,m=v*p,g=-u*m+2*u*v-u*p,x=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*p+1,E=(-1-f)*m+(1.5+f)*v+.5*p,y=f*m-f*v;for(let b=0;b!==a;++b)s[b]=g*o[h+b]+x*o[c+b]+E*o[l+b]+y*o[d+b];return s}},zh=class extends cs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},kh=class extends cs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Vh=class extends cs{interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-t)/(n-t),v=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*v+o[l+m]*p;return s}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let v=o[c+p],m=o[l+p],g=f*u+p*2,x=d[g],E=d[g+1],y=e*u+p*2,b=h[y],w=h[y+1],_=aS(i,t,x,b,n);s[p]=v_(_,v,E,w,m)}return s}};function v_(r,e,t,i,n){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*i+r*r*r*n}function oS(r,e,t,i,n){let s=1-r;return 3*s*s*(t-e)+6*s*r*(i-t)+3*r*r*(n-i)}function aS(r,e,t,i,n){let s=(r-e)/(n-e);for(let o=0;o<8;o++){let a=v_(s,e,t,i,n)-r;if(Math.abs(a)<1e-10)break;let l=oS(s,e,t,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Mn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fo(t,this.TimeBufferType),this.values=Fo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fo(e.times,Array),values:Fo(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),fh(e.settings)&&(i.settings={inTangents:Fo(e.settings.inTangents,Array),outTangents:Fo(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case al:t=this.InterpolantFactoryMethodDiscrete;break;case Ah:t=this.InterpolantFactoryMethodLinear;break;case mh:t=this.InterpolantFactoryMethodSmooth;break;case Bd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return al;case this.InterpolantFactoryMethodLinear:return Ah;case this.InterpolantFactoryMethodSmooth:return mh;case this.InterpolantFactoryMethodBezier:return Bd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;fh(this.settings)&&(T0(this.settings.inTangents,e),T0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;fh(this.settings)&&(w0(this.settings.inTangents,e),w0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&Fy(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===mh,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let v=t[d+p];if(v!==t[u+p]||v!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,fh(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function T0(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]+=e}function w0(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]*=e}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Ah;var hs=class extends Mn{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=al;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hh=class extends Mn{constructor(e,t,i,n){super(e,t,i,n)}};Hh.prototype.ValueTypeName="color";var Gh=class extends Mn{constructor(e,t,i,n){super(e,t,i,n)}};Gh.prototype.ValueTypeName="number";var Wh=class extends cs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)rr.slerpFlat(s,0,o,c-a,o,c,l);return s}},Sl=class extends Mn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Wh(this.times,this.values,this.getValueSize(),e)}};Sl.prototype.ValueTypeName="quaternion";Sl.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Mn{constructor(e,t,i){super(e,t,i)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=al;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Xh=class extends Mn{constructor(e,t,i,n){super(e,t,i,n)}};Xh.prototype.ValueTypeName="vector";var _h={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(E0(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!E0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function E0(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ia=class{constructor(e,t,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},x_=new ia,na=class{constructor(e){this.manager=e!==void 0?e:x_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};na.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bo=new WeakMap,qh=class extends na{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=_h.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=Bo.get(o);d===void 0&&(d=[],Bo.set(o,d)),d.push({onLoad:t,onError:n})}return o}let a=Go("img");function l(){h(),t&&t(this);let d=Bo.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Bo.delete(this),s.manager.itemEnd(e)}function c(d){h(),n&&n(d),_h.remove(`image:${e}`);let u=Bo.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}Bo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),_h.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Ml=class extends na{constructor(e){super(e)}load(e,t,i,n){let s=new Bi,o=new qh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}};var dh=new B,ph=new rr,tr=new B,bl=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dh,ph,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dh,ph,tr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(dh,ph,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dh,ph,tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new B,A0=new Ve,C0=new Ve,ji=class extends bl{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ch*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ch*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,A0,C0),t.subVectors(C0,A0)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(dd*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ra=class extends bl{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var zo=-90,ko=1,sa=class extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ji(zo,ko,e,t);n.layers=this.layers,this.add(n);let s=new ji(zo,ko,e,t);s.layers=this.layers,this.add(s);let o=new ji(zo,ko,e,t);o.layers=this.layers,this.add(o);let a=new ji(zo,ko,e,t);a.layers=this.layers,this.add(a);let l=new ji(zo,ko,e,t);l.layers=this.layers,this.add(l);let c=new ji(zo,ko,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Yh=class extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Tl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=lS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function lS(){this._document.hidden===!1&&this.reset()}var pp="\\[\\]\\.:\\/",cS=new RegExp("["+pp+"]","g"),mp="[^"+pp+"]",hS="[^"+pp.replace("\\.","")+"]",uS=/((?:WC+[\/:])*)/.source.replace("WC",mp),fS=/(WCOD+)?/.source.replace("WCOD",hS),dS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mp),pS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mp),mS=new RegExp("^"+uS+fS+dS+pS+"$"),gS=["material","materials","bones","map"],Gd=class{constructor(e,t,i){let n=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cS,"")}static parseTrackName(e){let t=mS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);gS.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Gd;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eE=new Float32Array(1);var R0=new Nt,wl=class{constructor(e,t,i=0,n=1/0){this.ray=new $o(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return R0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(R0),this}intersectObject(e,t=!0,i=[]){return Wd(e,this,i,t),i.sort(P0),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Wd(e[n],this,i,t);return i.sort(P0),i}};function P0(r,e){return r.distance-e.distance}function Wd(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Wd(s[o],e,t,!0)}}var El=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Sp=class Sp{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};Sp.prototype.isMatrix2=!0;var Xd=Sp;function gp(r,e,t,i){let n=_S(i);switch(t){case np:return r*e;case sp:return r*e/n.components*n.byteLength;case tu:return r*e/n.components*n.byteLength;case ds:return r*e*2/n.components*n.byteLength;case iu:return r*e*2/n.components*n.byteLength;case rp:return r*e*3/n.components*n.byteLength;case qn:return r*e*4/n.components*n.byteLength;case nu:return r*e*4/n.components*n.byteLength;case Ol:case Ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case su:case au:return Math.max(r,16)*Math.max(e,8)/4;case ru:case ou:return Math.max(r,8)*Math.max(e,8)/2;case lu:case cu:case uu:case fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hu:case zl:case du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _u:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case vu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case xu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Su:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Cu:case Ru:case Pu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Iu:case Lu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case kl:case Du:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _S(r){switch(r){case Tn:case jd:return{byteLength:1,components:1};case ca:case ep:case Ei:return{byteLength:2,components:1};case jh:case eu:return{byteLength:2,components:4};case Wn:case Qh:case Xn:return{byteLength:4,components:1};case tp:case ip:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function V_(){let r=null,e=!1,t=null,i=null;function n(s,o){i=r.requestAnimationFrame(n),t(s,o)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function xS(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let v=d[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var yS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ES=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,RS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,HS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,GS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZS="gl_FragColor = linearToOutputTexel( gl_FragColor );",JS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,uM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_M=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SM=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,MM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DM=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,HM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$M=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ZM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ab=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:yS,alphahash_pars_fragment:SS,alphamap_fragment:MS,alphamap_pars_fragment:bS,alphatest_fragment:TS,alphatest_pars_fragment:wS,aomap_fragment:ES,aomap_pars_fragment:AS,batching_pars_vertex:CS,batching_vertex:RS,begin_vertex:PS,beginnormal_vertex:IS,bsdfs:LS,iridescence_fragment:DS,bumpmap_pars_fragment:NS,clipping_planes_fragment:OS,clipping_planes_pars_fragment:US,clipping_planes_pars_vertex:FS,clipping_planes_vertex:BS,color_fragment:zS,color_pars_fragment:kS,color_pars_vertex:VS,color_vertex:HS,common:GS,defaultnormal_vertex:WS,displacementmap_pars_vertex:XS,displacementmap_vertex:qS,emissivemap_fragment:YS,emissivemap_pars_fragment:$S,colorspace_fragment:ZS,colorspace_pars_fragment:JS,envmap_fragment:KS,envmap_common_pars_fragment:QS,envmap_pars_fragment:jS,envmap_pars_vertex:eM,envmap_physical_pars_fragment:uM,envmap_vertex:tM,fog_vertex:iM,fog_pars_vertex:nM,fog_fragment:rM,fog_pars_fragment:sM,gradientmap_pars_fragment:oM,lightmap_pars_fragment:aM,lights_lambert_fragment:lM,lights_lambert_pars_fragment:cM,lights_pars_begin:hM,lights_toon_fragment:fM,lights_toon_pars_fragment:dM,lights_phong_fragment:pM,lights_phong_pars_fragment:mM,lights_physical_fragment:gM,lights_physical_pars_fragment:_M,lights_fragment_begin:vM,lights_fragment_maps:xM,lights_fragment_end:yM,lightprobes_pars_fragment:SM,logdepthbuf_fragment:MM,logdepthbuf_pars_fragment:bM,logdepthbuf_pars_vertex:TM,logdepthbuf_vertex:wM,map_fragment:EM,map_pars_fragment:AM,map_particle_fragment:CM,map_particle_pars_fragment:RM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:IM,morphinstance_vertex:LM,morphcolor_vertex:DM,morphnormal_vertex:NM,morphtarget_pars_vertex:OM,morphtarget_vertex:UM,normal_fragment_begin:FM,normal_fragment_maps:BM,normal_pars_fragment:zM,normal_pars_vertex:kM,normal_vertex:VM,normalmap_pars_fragment:HM,clearcoat_normal_fragment_begin:GM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:XM,iridescence_pars_fragment:qM,opaque_fragment:YM,packing:$M,premultiplied_alpha_fragment:ZM,project_vertex:JM,dithering_fragment:KM,dithering_pars_fragment:QM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:ib,shadowmap_vertex:nb,shadowmask_pars_fragment:rb,skinbase_vertex:sb,skinning_pars_vertex:ob,skinning_vertex:ab,skinnormal_vertex:lb,specularmap_fragment:cb,specularmap_pars_fragment:hb,tonemapping_fragment:ub,tonemapping_pars_fragment:fb,transmission_fragment:db,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:gb,uv_vertex:_b,worldpos_vertex:vb,background_vert:xb,background_frag:yb,backgroundCube_vert:Sb,backgroundCube_frag:Mb,cube_vert:bb,cube_frag:Tb,depth_vert:wb,depth_frag:Eb,distance_vert:Ab,distance_frag:Cb,equirect_vert:Rb,equirect_frag:Pb,linedashed_vert:Ib,linedashed_frag:Lb,meshbasic_vert:Db,meshbasic_frag:Nb,meshlambert_vert:Ob,meshlambert_frag:Ub,meshmatcap_vert:Fb,meshmatcap_frag:Bb,meshnormal_vert:zb,meshnormal_frag:kb,meshphong_vert:Vb,meshphong_frag:Hb,meshphysical_vert:Gb,meshphysical_frag:Wb,meshtoon_vert:Xb,meshtoon_frag:qb,points_vert:Yb,points_frag:$b,shadow_vert:Zb,shadow_frag:Jb,sprite_vert:Kb,sprite_frag:Qb},Ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},lr={basic:{uniforms:zi([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:zi([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:zi([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:zi([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:zi([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:zi([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:zi([Ae.points,Ae.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:zi([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:zi([Ae.common,Ae.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:zi([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:zi([Ae.sprite,Ae.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:zi([Ae.common,Ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:zi([Ae.lights,Ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};lr.physical={uniforms:zi([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Ou={r:0,b:0,g:0},jb=new Nt,H_=new $e;H_.set(-1,0,0,0,1,0,0,0,1);function eT(r,e,t,i,n,s){let o=new Ze(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let y=x.backgroundBlurriness>0;E=e.get(E,y)}return E}function p(x){let E=!1,y=f(x);y===null?m(o,a):y&&y.isColor&&(m(y,1),E=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(x,E){let y=f(E);y&&y.isCubeTexture?(c===void 0&&(c=new wi(new Qo(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Ks(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jb.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(H_),c.material.toneMapped=at.getTransfer(y.colorSpace)!==Mt,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new wi(new Xs(2,2),new Vt({name:"BackgroundMaterial",uniforms:Ks(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=at.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,E){x.getRGB(Ou,dp(r)),t.buffers.color.setClear(Ou.r,Ou.g,Ou.b,E,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:p,addToRenderList:v,dispose:g}}function tT(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null),s=n,o=!1;function a(N,D,H,I,V){let X=!1,U=d(N,I,H,D);s!==U&&(s=U,c(s.object)),X=f(N,I,H,V),X&&p(N,I,H,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(N,D,H,I),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function d(N,D,H,I){let V=I.wireframe===!0,X=i[D.id];X===void 0&&(X={},i[D.id]=X);let U=N.isInstancedMesh===!0?N.id:0,ie=X[U];ie===void 0&&(ie={},X[U]=ie);let q=ie[H.id];q===void 0&&(q={},ie[H.id]=q);let R=q[V];return R===void 0&&(R=u(l()),q[V]=R),R}function u(N){let D=[],H=[],I=[];for(let V=0;V<t;V++)D[V]=0,H[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,D,H,I){let V=s.attributes,X=D.attributes,U=0,ie=H.getAttributes();for(let q in ie)if(ie[q].location>=0){let ee=V[q],ye=X[q];if(ye===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor)),ee===void 0||ee.attribute!==ye||ye&&ee.data!==ye.data)return!0;U++}return s.attributesNum!==U||s.index!==I}function p(N,D,H,I){let V={},X=D.attributes,U=0,ie=H.getAttributes();for(let q in ie)if(ie[q].location>=0){let ee=X[q];ee===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));let ye={};ye.attribute=ee,ee&&ee.data&&(ye.data=ee.data),V[q]=ye,U++}s.attributes=V,s.attributesNum=U,s.index=I}function v(){let N=s.newAttributes;for(let D=0,H=N.length;D<H;D++)N[D]=0}function m(N){g(N,0)}function g(N,D){let H=s.newAttributes,I=s.enabledAttributes,V=s.attributeDivisors;H[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),V[N]!==D&&(r.vertexAttribDivisor(N,D),V[N]=D)}function x(){let N=s.newAttributes,D=s.enabledAttributes;for(let H=0,I=D.length;H<I;H++)D[H]!==N[H]&&(r.disableVertexAttribArray(H),D[H]=0)}function E(N,D,H,I,V,X,U){U===!0?r.vertexAttribIPointer(N,D,H,V,X):r.vertexAttribPointer(N,D,H,I,V,X)}function y(N,D,H,I){v();let V=I.attributes,X=H.getAttributes(),U=D.defaultAttributeValues;for(let ie in X){let q=X[ie];if(q.location>=0){let R=V[ie];if(R===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let ee=R.normalized,ye=R.itemSize,we=e.get(R);if(we===void 0)continue;let K=we.buffer,ce=we.type,Se=we.bytesPerElement,Te=ce===r.INT||ce===r.UNSIGNED_INT||R.gpuType===Qh;if(R.isInterleavedBufferAttribute){let _e=R.data,Le=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,pt=R.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Ce=0;Ce<q.locationSize;Ce++)g(q.location+Ce,_e.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)m(q.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,K);for(let Ce=0;Ce<q.locationSize;Ce++)E(q.location+Ce,ye/q.locationSize,ce,ee,Le*Se,(pt+ye/q.locationSize*Ce)*Se,Te)}else{if(R.isInstancedBufferAttribute){for(let _e=0;_e<q.locationSize;_e++)g(q.location+_e,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);r.bindBuffer(r.ARRAY_BUFFER,K);for(let _e=0;_e<q.locationSize;_e++)E(q.location+_e,ye/q.locationSize,ce,ee,ye*Se,ye/q.locationSize*_e*Se,Te)}}else if(U!==void 0){let ee=U[ie];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(q.location,ee);break;case 3:r.vertexAttrib3fv(q.location,ee);break;case 4:r.vertexAttrib4fv(q.location,ee);break;default:r.vertexAttrib1fv(q.location,ee)}}}}x()}function b(){P();for(let N in i){let D=i[N];for(let H in D){let I=D[H];for(let V in I){let X=I[V];for(let U in X)h(X[U].object),delete X[U];delete I[V]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;let D=i[N.id];for(let H in D){let I=D[H];for(let V in I){let X=I[V];for(let U in X)h(X[U].object),delete X[U];delete I[V]}}delete i[N.id]}function _(N){for(let D in i){let H=i[D];for(let I in H){let V=H[I];if(V[N.id]===void 0)continue;let X=V[N.id];for(let U in X)h(X[U].object),delete X[U];delete V[N.id]}}}function S(N){for(let D in i){let H=i[D],I=N.isInstancedMesh===!0?N.id:0,V=H[I];if(V!==void 0){for(let X in V){let U=V[X];for(let ie in U)h(U[ie].object),delete U[ie];delete V[X]}delete H[I],Object.keys(H).length===0&&delete i[D]}}}function P(){C(),o=!0,s!==n&&(s=n,c(s.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function iT(r,e,t){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function nT(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(_){return!(_!==qn&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Tn&&_!==Xn&&!S&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:y,maxSamples:b,samples:w}}function rT(r){let e=this,t=null,i=0,n=!1,s=!1,o=new Gn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!n||p===null||p.length===0||s&&!m)s?h(null):c();else{let x=s?0:i,E=x*4,y=g.clippingState||null;l.value=y,y=h(p,u,E,f);for(let b=0;b!==E;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,y=f;E!==v;++E,y+=4)o.copy(d[E]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Gl=class extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new _l(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Qo(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Dr});s.uniforms.tEquirect.value=t;let o=new wi(n,s),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=en),new sa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}},y_=256,sT=3,oT=20,G_=256,W_=16,aT=3,lT=new B,cT=new Ze,Fu=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new sa(1,10,null),this._boxMesh=new wi(new Qo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:o=256,position:a=lT}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(cT));let m=new sa(i,n,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(y_,d_(e))}_fromTexture(e,t){e.mapping===$s||e.mapping===la?this._setSize(e.image.length===0?y_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=S_(e,!1,!1),i=Math.log2(e)-sT;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=S_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===$s||e.mapping===la?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=M_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=hT(),this._integrationMaterial=uT());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/W_);for(let o=0;o<=i;o++){let a=r.lodToRoughness(o,i);if(o>i-aT)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(G_*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=fT());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(s,0,i)}};function S_(r,e,t){return new Gl(r,{minFilter:Nr,generateMipmaps:e,type:Ei,colorSpace:ll,depthBuffer:t})}function Wl(r,e,t){return new Vt({name:r,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:tn,blending:Dr,depthTest:!1,depthWrite:!1})}function hT(){return Wl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${G_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function uT(){return Wl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:W_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fT(){return Wl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${oT}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function M_(){return Wl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function b_(){return Wl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dT(r){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Zh||f===Jh)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let v=new Gl(p.height);return v.fromEquirectangularTexture(r,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Zh||f===Jh,v=f===$s||f===la;if(p||v){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Fu(r)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let x=u.image;return p&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new Fu(r)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Zh?u.mapping=$s:f===Jh&&(u.mapping=la),u}function l(u){let f=0,p=6;for(let v=0;v<p;v++)u[v]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function pT(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&ol("WebGLRenderer: "+i+" extension not supported."),n}}}function mT(r,e,t,i){let n={},s=new WeakMap,o=new FinalizationRegistry(p=>delete n[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete n[p.id],o.unregister(p);let v=s.get(p);v&&(e.remove(v),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,v){return n[v.id]!==void 0||(v.addEventListener("dispose",a),n[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){let v=p.attributes;for(let m in v)e.update(v[m],r.ARRAY_BUFFER)}function d(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let x=v!==null?v.array.length:m.array.length/3-1,E=m.count>=65535?ml:pl,y=new E(Math.ceil(x/3)*6,1),b=y.array;if(v!==null){let _=v.array;g=v.version;for(let S=0,P=0;S<x;S+=3){let C=_[S+0],N=_[S+1],D=_[S+2];b[P++]=C,b[P++]=N,b[P++]=N,b[P++]=D,b[P++]=D,b[P++]=C}}else{g=m.version;for(let _=0,S=0;_<x;_+=3){let P=_+0,C=_+1,N=_+2;b[S++]=P,b[S++]=C,b[S++]=C,b[S++]=N,b[S++]=N,b[S++]=P}}y.version=g;let w=s.get(p);w&&e.remove(w),s.set(p,y)}function u(p){let v=s.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return s.get(p)}function f(){for(let p in n){let v=n[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function gT(r,e,t){let i;function n(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];t.update(v,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _T(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function vT(r,e,t){let i=new WeakMap,n=new $t;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),v===!0&&(E=3);let y=a.attributes.position.count*E,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*b*4*d),_=new fl(w,y,b,d);_.type=Xn,_.needsUpdate=!0;let S=E*4;for(let C=0;C<d;C++){let N=m[C],D=g[C],H=x[C],I=y*b*4*C;for(let V=0;V<N.count;V++){let X=V*S;f===!0&&(n.fromBufferAttribute(N,V),w[I+X+0]=n.x,w[I+X+1]=n.y,w[I+X+2]=n.z,w[I+X+3]=0),p===!0&&(n.fromBufferAttribute(D,V),w[I+X+4]=n.x,w[I+X+5]=n.y,w[I+X+6]=n.z,w[I+X+7]=0),v===!0&&(n.fromBufferAttribute(H,V),w[I+X+8]=n.x,w[I+X+9]=n.y,w[I+X+10]=n.z,w[I+X+11]=H.itemSize===4?n.w:1)}}u={count:d,texture:_,size:new Ve(y,b)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function xT(r,e,t,i,n){let s=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var yT={[Cl]:"LINEAR_TONE_MAPPING",[Rl]:"REINHARD_TONE_MAPPING",[Pl]:"CINEON_TONE_MAPPING",[Ys]:"ACES_FILMIC_TONE_MAPPING",[Ll]:"AGX_TONE_MAPPING",[Dl]:"NEUTRAL_TONE_MAPPING",[Il]:"CUSTOM_TONE_MAPPING"};function ST(r,e,t,i,n,s){let o=new li(e,t,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ti;h.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gi([0,2,0,0,2,0],2));let d=new ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new wi(h,d),f=new ra(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,x=null,E=[],y=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let _=0;_<E.length;_++){let S=E[_];S.setSize&&S.setSize(b,w)}},this.setEffects=function(b){E=b,y=E.length>0&&E[0].isRenderPass===!0;let w=o.width,_=o.height;E.length>0&&a===null&&(a=new li(w,_,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new li(w,_,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&E.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Lr(w,_),s===!0&&(c.format=Or,c.type=Zs)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<E.length;P++){let C=E[P];C.setSize&&C.setSize(w,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===or&&E.length===0)return!1;if(x=w,w!==null){let _=w.width,S=w.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return y===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=or,!0},this.hasRenderPass=function(){return y},this.end=function(b,w){b.toneMapping=g,m=!0;let _=o,S=a;for(let P=0;P<E.length;P++){let C=E[P];C.enabled!==!1&&(C.render(b,S,_,w),C.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==b.outputColorSpace||v!==b.toneMapping){p=b.outputColorSpace,v=b.toneMapping,d.defines={},at.getTransfer(p)===Mt&&(d.defines.SRGB_TRANSFER="");let P=yT[v];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(x),b.render(u,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var X_=new Bi,q_=new Lr(1,1),Y_=new xl(1),$_=new fl,Z_=new Ih,J_=new _l,T_=[],w_=[],E_=new Float32Array(16),A_=new Float32Array(9),C_=new Float32Array(4);function ua(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=T_[n];if(s===void 0&&(s=new Float32Array(n),T_[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ci(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function hi(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function zu(r,e){let t=w_[e];t===void 0&&(t=new Int32Array(e),w_[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function MT(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function bT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ci(t,e))return;r.uniform2fv(this.addr,e),hi(t,e)}}function TT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ci(t,e))return;r.uniform3fv(this.addr,e),hi(t,e)}}function wT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ci(t,e))return;r.uniform4fv(this.addr,e),hi(t,e)}}function ET(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ci(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hi(t,e)}else{if(ci(t,i))return;C_.set(i),r.uniformMatrix2fv(this.addr,!1,C_),hi(t,i)}}function AT(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ci(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hi(t,e)}else{if(ci(t,i))return;A_.set(i),r.uniformMatrix3fv(this.addr,!1,A_),hi(t,i)}}function CT(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ci(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hi(t,e)}else{if(ci(t,i))return;E_.set(i),r.uniformMatrix4fv(this.addr,!1,E_),hi(t,i)}}function RT(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function PT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ci(t,e))return;r.uniform2iv(this.addr,e),hi(t,e)}}function IT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ci(t,e))return;r.uniform3iv(this.addr,e),hi(t,e)}}function LT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ci(t,e))return;r.uniform4iv(this.addr,e),hi(t,e)}}function DT(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function NT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ci(t,e))return;r.uniform2uiv(this.addr,e),hi(t,e)}}function OT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ci(t,e))return;r.uniform3uiv(this.addr,e),hi(t,e)}}function UT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ci(t,e))return;r.uniform4uiv(this.addr,e),hi(t,e)}}function ku(r){return r.version===0&&(r.compareFunction=cp,r.needsUpdate=!0),r}function FT(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=ku(q_):s=X_,t.setTexture2D(e||s,n)}function BT(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Z_,n)}function zT(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=ku(Y_):s=J_,t.setTextureCube(e||s,n)}function kT(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||$_,n)}function VT(r){switch(r){case 5126:return MT;case 35664:return bT;case 35665:return TT;case 35666:return wT;case 35674:return ET;case 35675:return AT;case 35676:return CT;case 5124:case 35670:return RT;case 35667:case 35671:return PT;case 35668:case 35672:return IT;case 35669:case 35673:return LT;case 5125:return DT;case 36294:return NT;case 36295:return OT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return kT}}function HT(r,e){r.uniform1fv(this.addr,e)}function GT(r,e){let t=ua(e,this.size,2);r.uniform2fv(this.addr,t)}function WT(r,e){let t=ua(e,this.size,3);r.uniform3fv(this.addr,t)}function XT(r,e){let t=ua(e,this.size,4);r.uniform4fv(this.addr,t)}function qT(r,e){let t=ua(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function YT(r,e){let t=ua(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $T(r,e){let t=ua(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ZT(r,e){r.uniform1iv(this.addr,e)}function JT(r,e){r.uniform2iv(this.addr,e)}function KT(r,e){r.uniform3iv(this.addr,e)}function QT(r,e){r.uniform4iv(this.addr,e)}function jT(r,e){r.uniform1uiv(this.addr,e)}function e1(r,e){r.uniform2uiv(this.addr,e)}function t1(r,e){r.uniform3uiv(this.addr,e)}function i1(r,e){r.uniform4uiv(this.addr,e)}function n1(r,e,t){let i=this.cache,n=e.length,s=zu(t,n);ci(i,s)||(r.uniform1iv(this.addr,s),hi(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=ku(q_):o=X_;for(let a=0;a!==n;++a)t.setTexture2D(e[a]||o,s[a])}function r1(r,e,t){let i=this.cache,n=e.length,s=zu(t,n);ci(i,s)||(r.uniform1iv(this.addr,s),hi(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Z_,s[o])}function s1(r,e,t){let i=this.cache,n=e.length,s=zu(t,n);ci(i,s)||(r.uniform1iv(this.addr,s),hi(i,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=ku(Y_):o=J_;for(let a=0;a!==n;++a)t.setTextureCube(e[a]||o,s[a])}function o1(r,e,t){let i=this.cache,n=e.length,s=zu(t,n);ci(i,s)||(r.uniform1iv(this.addr,s),hi(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||$_,s[o])}function a1(r){switch(r){case 5126:return HT;case 35664:return GT;case 35665:return WT;case 35666:return XT;case 35674:return qT;case 35675:return YT;case 35676:return $T;case 5124:case 35670:return ZT;case 35667:case 35671:return JT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return jT;case 36294:return e1;case 36295:return t1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}var Tp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=VT(t.type)}},wp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a1(t.type)}},Ep=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(e,t[a.id],i)}}},Mp=/(\w+)(\])?(\[|\.)?/g;function R_(r,e){r.seq.push(e),r.map[e.id]=e}function l1(r,e,t){let i=r.name,n=i.length;for(Mp.lastIndex=0;;){let s=Mp.exec(i),o=Mp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){R_(t,c===void 0?new Tp(a,r,e):new wp(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new Ep(a),R_(t,d)),t=d}}}var ha=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);l1(a,l,this)}let n=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let o=e[n];o.id in t&&i.push(o)}return i}};function P_(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var c1=37297,h1=0;function u1(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var I_=new $e;function f1(r){at._getMatrix(I_,at.workingColorSpace,r);let e=`mat3( ${I_.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(r)){case cl:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function L_(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+u1(r.getShaderSource(e),a)}else return s}function d1(r,e){let t=f1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var p1={[Cl]:"Linear",[Rl]:"Reinhard",[Pl]:"Cineon",[Ys]:"ACESFilmic",[Ll]:"AgX",[Dl]:"Neutral",[Il]:"Custom"};function m1(r,e){let t=p1[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uu=new B;function g1(){at.getLuminanceCoefficients(Uu);let r=Uu.x.toFixed(4),e=Uu.y.toFixed(4),t=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hl).join(`
`)}function v1(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function x1(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(e,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Hl(r){return r!==""}function D_(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function N_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ap(r){return r.replace(y1,S1)}function S1(r,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ap(t)}var M1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O_(r){return r.replace(M1,b1)}function b1(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function U_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var T1={[Al]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function w1(r){return T1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var E1={[la]:"ENVMAP_MODE_REFRACTION"};function A1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":E1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var C1={[Kd]:"ENVMAP_BLENDING_MULTIPLY",[Q0]:"ENVMAP_BLENDING_MIX",[j0]:"ENVMAP_BLENDING_ADD"};function R1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":C1[r.combine]||"ENVMAP_BLENDING_NONE"}function P1(r,e,t,i){let n=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=w1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=A1(t),d=R1(t),u=_1(t),f=v1(s),p=n.createProgram(),v,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Hl).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Hl).join(`
`),m.length>0&&(m+=`
`)):(v=[U_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hl).join(`
`),m=[U_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?et.tonemapping_pars_fragment:"",t.toneMapping!==or?m1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,d1("linearToOutputTexel",t.outputColorSpace),g1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hl).join(`
`)),o=Ap(o),o=D_(o,t),o=N_(o,t),a=Ap(a),a=D_(a,t),a=N_(a,t),o=O_(o),a=O_(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===up?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=g+v+o,E=g+m+a,y=P_(n,n.VERTEX_SHADER,x),b=P_(n,n.FRAGMENT_SHADER,E);n.attachShader(p,y),n.attachShader(p,b),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function w(C){if(r.debug.checkShaderErrors){let N=n.getProgramInfoLog(p)||"",D=n.getShaderInfoLog(y)||"",H=n.getShaderInfoLog(b)||"",I=N.trim(),V=D.trim(),X=H.trim(),U=!0,ie=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,y,b);else{let q=L_(n,y,"vertex"),R=L_(n,b,"fragment");Xe("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+q+`
`+R)}else I!==""?Ge("WebGLProgram: Program Info Log:",I):(V===""||X==="")&&(ie=!1);ie&&(C.diagnostics={runnable:U,programLog:I,vertexShader:{log:V,prefix:v},fragmentShader:{log:X,prefix:m}})}n.deleteShader(y),n.deleteShader(b),_=new ha(n,p),S=x1(n,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(p,c1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}var I1=0,Cp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Rp(e),t.set(e,i)),i}},Rp=class{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}};function L1(r){return r===ds||r===zl||r===kl}function D1(r,e,t,i,n,s){let o=new qo,a=new Cp,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,P,C,N,D){let H=C.fog,I=N.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||V,X),ie=u[_.type],q=i.precision;_.precision!==null&&(q=i.getMaxPrecision(_.precision),q!==_.precision&&Ge("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=R!==void 0?R.length:0,ye=0;I.morphAttributes.position!==void 0&&(ye=1),I.morphAttributes.normal!==void 0&&(ye=2),I.morphAttributes.color!==void 0&&(ye=3);let we,K,ce,Se;if(ie){let $=lr[ie];we=$.vertexShader,K=$.fragmentShader}else{we=_.vertexShader,K=_.fragmentShader;let $=a.getVertexShaderStage(_),ae=a.getFragmentShaderStage(_);a.update(_,$,ae),ce=$.id,Se=ae.id}let Te=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Le=N.isInstancedMesh===!0,pt=N.isBatchedMesh===!0,Ce=!!_.map,qe=!!_.matcap,Oe=!!U,Ue=Oe&&U.isPMREMTexture===!0,ct=!!_.aoMap,ut=!!_.lightMap,j=!!_.bumpMap&&_.wireframe===!1,Ye=!!_.normalMap,Ht=!!_.displacementMap,yt=!!_.emissiveMap,Qe=!!_.metalnessMap,Ct=!!_.roughnessMap,Ft=_.anisotropy>0,F=_.clearcoat>0,mt=_.diffuseRoughness>0,gt=_.dispersion>0,We=_.retroreflectivity>0,ve=_.iridescence>0,vt=_.sheen>0,Ie=_.transmission>0,fe=Ft&&!!_.anisotropyMap,A=F&&!!_.clearcoatMap,M=F&&!!_.clearcoatNormalMap,G=F&&!!_.clearcoatRoughnessMap,le=mt&&!!_.diffuseRoughnessMap,oe=ve&&!!_.iridescenceMap,me=ve&&!!_.iridescenceThicknessMap,de=vt&&!!_.sheenColorMap,Y=vt&&!!_.sheenRoughnessMap,ne=!!_.specularMap,pe=!!_.specularColorMap,L=!!_.specularIntensityMap,re=Ie&&!!_.transmissionMap,te=Ie&&!!_.thicknessMap,xe=!!_.gradientMap,ue=!!_.alphaMap,ge=_.alphaTest>0,he=!!_.alphaHash,Q=!!_.extensions,z=or;_.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(z=r.toneMapping);let W=Ue?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,se={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:we,fragmentShader:K,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:Se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:pt,batchingColor:pt&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ce,matcap:qe,envMap:Oe,envMapMode:Oe&&U.mapping,envMapPMREM:Ue,envMapMaxLod:Ue?W.length-1:null,envMapSize:Ue?W[0].width:null,aoMap:ct,lightMap:ut,bumpMap:j,normalMap:Ye,displacementMap:Ht,emissiveMap:yt,normalMapObjectSpace:Ye&&_.normalMapType===i_,normalMapTangentSpace:Ye&&_.normalMapType===op,packedNormalMap:Ye&&_.normalMapType===op&&L1(_.normalMap.format),metalnessMap:Qe,roughnessMap:Ct,anisotropy:Ft,anisotropyMap:fe,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:mt,diffuseRoughnessMap:le,dispersion:gt,retroreflection:We,iridescence:ve,iridescenceMap:oe,iridescenceThicknessMap:me,sheen:vt,sheenColorMap:de,sheenRoughnessMap:Y,specularMap:ne,specularColorMap:pe,specularIntensityMap:L,transmission:Ie,transmissionMap:re,thicknessMap:te,gradientMap:xe,opaque:_.transparent===!1&&_.blending===aa&&_.alphaToCoverage===!1,alphaMap:ue,alphaTest:ge,alphaHash:he,combine:_.combine,mapUv:Ce&&f(_.map.channel),aoMapUv:ct&&f(_.aoMap.channel),lightMapUv:ut&&f(_.lightMap.channel),bumpMapUv:j&&f(_.bumpMap.channel),normalMapUv:Ye&&f(_.normalMap.channel),displacementMapUv:Ht&&f(_.displacementMap.channel),emissiveMapUv:yt&&f(_.emissiveMap.channel),metalnessMapUv:Qe&&f(_.metalnessMap.channel),roughnessMapUv:Ct&&f(_.roughnessMap.channel),anisotropyMapUv:fe&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(_.sheenRoughnessMap.channel),specularMapUv:ne&&f(_.specularMap.channel),specularColorMapUv:pe&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:re&&f(_.transmissionMap.channel),thicknessMapUv:te&&f(_.thicknessMap.channel),alphaMapUv:ue&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ye||Ft),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ce||ue),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&Ye===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter($=>$.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:z,decodeVideoTexture:Ce&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===Mt,decodeVideoTextureEmissive:yt&&_.emissiveMap.isVideoTexture===!0&&at.getTransfer(_.emissiveMap.colorSpace)===Mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===sr,flipSided:_.side===tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Q&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&_.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(r.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function x(_){let S=u[_.type],P;if(S){let C=lr[S];P=Fr.clone(C.uniforms)}else P=_.uniforms;return P}function E(_,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new P1(r,S,_,n),c.push(P),h.set(S,P)),P}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:E,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:w}}function N1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function O1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function F_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function B_(){let r=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,v,m,g){let x=r[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:g},r[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=p,x.materialVariant=o(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=m,x.group=g),e++,x}function l(u,f,p,v,m,g,x){x.reversedDepth===!0&&(m=-m);let E=a(u,f,p,v,m,g);p.transmission>0?i.push(E):p.transparent===!0?n.push(E):t.push(E)}function c(u,f,p,v,m,g){let x=a(u,f,p,v,m,g);p.transmission>0?i.unshift(x):p.transparent===!0?n.unshift(x):t.unshift(x)}function h(u,f){t.length>1&&t.sort(u||O1),i.length>1&&i.sort(f||F_),n.length>1&&n.sort(f||F_)}function d(){for(let u=e,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function U1(){let r=new WeakMap;function e(i,n){let s=r.get(i),o;return s===void 0?(o=new B_,r.set(i,[o])):n>=s.length?(o=new B_,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function F1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ze};break;case"SpotLight":t={position:new B,direction:new B,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function B1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var z1=0;function k1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function V1(r){let e=new F1,t=B1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let n=new B,s=new Nt,o=new Nt;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,x=0,E=0,y=0,b=0,w=0,_=0,S=0,P=0,C=0;c.sort(k1);for(let D=0,H=c.length;D<H;D++){let I=c[D],V=I.color,X=I.intensity,U=I.distance,ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ds?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*X,d+=V.g*X,u+=V.b*X;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],X);C++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,ee=t.get(I);ee.shadowIntensity=R.intensity,ee.shadowBias=R.bias,ee.shadowNormalBias=R.normalBias,ee.shadowRadius=R.radius,ee.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),i.sunShadow[p]=ee,i.sunShadowMap[p]=ie;let ye=R.getViewportCount();for(let we=0;we<ye;we++)i.sunShadowMatrix[v+we]=R.getMatrix(we),i.sunShadowCascade[v+we]=R._cascadeData[we];v+=ye,p++}i.sun[f]=q,f++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,ee=t.get(I);ee.shadowIntensity=R.intensity,ee.shadowBias=R.bias,ee.shadowNormalBias=R.normalBias,ee.shadowRadius=R.radius,ee.shadowMapSize=R.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=I.shadow.matrix,b++}i.directional[m]=q,m++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(V).multiplyScalar(X),q.distance=U,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[x]=q;let R=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,R.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[x]=R.matrix,I.castShadow){let ee=t.get(I);ee.shadowIntensity=R.intensity,ee.shadowBias=R.bias,ee.shadowNormalBias=R.normalBias,ee.shadowRadius=R.radius,ee.shadowMapSize=R.mapSize,i.spotShadow[x]=ee,i.spotShadowMap[x]=ie,_++}x++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(V).multiplyScalar(X),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=q,E++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let R=I.shadow,ee=t.get(I);ee.shadowIntensity=R.intensity,ee.shadowBias=R.bias,ee.shadowNormalBias=R.normalBias,ee.shadowRadius=R.radius,ee.shadowMapSize=R.mapSize,ee.shadowCameraNear=R.camera.near,ee.shadowCameraFar=R.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=q,g++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(X),q.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[y]=q,y++}}E>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==E||N.hemiLength!==y||N.numSunShadows!==p||N.numDirectionalShadows!==b||N.numPointShadows!==w||N.numSpotShadows!==_||N.numSpotMaps!==S||N.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=x,i.rectArea.length=E,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,N.sunLength=f,N.directionalLength=m,N.pointLength=g,N.spotLength=x,N.rectAreaLength=E,N.hemiLength=y,N.numSunShadows=p,N.numDirectionalShadows=b,N.numPointShadows=w,N.numSpotShadows=_,N.numSpotMaps=S,N.numLightProbes=C,i.version=z1++)}function l(c,h){let d=0,u=0,f=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){let y=c[x];if(y.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),u++}else if(y.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let b=i.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function z_(r){let e=new V1(r),t=[],i=[],n=[];function s(d){h.camera=d,t.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function H1(r){let e=new WeakMap;function t(n,s=0){let o=e.get(n),a;return o===void 0?(a=new z_(r),e.set(n,[a])):s>=o.length?(a=new z_(r),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var G1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,X1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],q1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],k_=new Nt,Vl=new B,bp=new B;function Y1(r,e,t){let i=new Ws,n=new Ve,s=new Ve,o=new $t,a=new Uh,l=new Fh,c={},h=t.maxTextureSize,d={[fs]:tn,[tn]:fs,[sr]:sr},u=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:G1,fragmentShader:W1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ti;p.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new wi(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let g=this.type;this.render=function(w,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===D0&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Al);let P=r.getRenderTarget(),C=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Dr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=g!==this.type;H&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=w.length;I<V;I++){let X=w[I],U=X.shadow;if(U===void 0){Ge("WebGLShadowMap:",X,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;n.copy(U.mapSize);let ie=U.getFrameExtents();n.multiply(ie),s.copy(U.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ie.x),n.x=s.x*ie.x,U.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ie.y),n.y=s.y*ie.y,U.mapSize.y=s.y));let q=r.state.buffers.depth.getReversed();if(U.camera._reversedDepth=q,U.map===null||H===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===oa){if(X.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new li(n.x,n.y,{format:ds,type:Ei,minFilter:en,magFilter:en,generateMipmaps:!1}),U.map.texture.name=X.name+".shadowMap",U.map.depthTexture=new Lr(n.x,n.y,Xn),U.map.depthTexture.name=X.name+".shadowMapDepth",U.map.depthTexture.format=Cr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=_i,U.map.depthTexture.magFilter=_i}else X.isPointLight?(U.map=new Gl(n.x),U.map.depthTexture=new xl(n.x,Wn)):(U.map=new li(n.x,n.y),U.map.depthTexture=new Lr(n.x,n.y,Wn)),U.map.depthTexture.name=X.name+".shadowMap",U.map.depthTexture.format=Cr,this.type===Al?(U.map.depthTexture.compareFunction=q?lp:ap,U.map.depthTexture.minFilter=en,U.map.depthTexture.magFilter=en):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=_i,U.map.depthTexture.magFilter=_i);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==n.x||U.map.height!==n.y)&&U.map.setSize(n.x,n.y);let R=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();X.isPointLight!==!0&&U.updateMatrices(X,S);let ee=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:S.layers;for(let ye=0;ye<R;ye++){let we=U.getCamera(ye);if(X.isPointLight){let K=U.camera,ce=U.matrix,Se=X.distance||K.far;Se!==K.far&&(K.far=Se,K.updateProjectionMatrix()),Vl.setFromMatrixPosition(X.matrixWorld),K.position.copy(Vl),bp.copy(K.position),bp.add(X1[ye]),K.up.copy(q1[ye]),K.lookAt(bp),K.updateMatrixWorld(),ce.makeTranslation(-Vl.x,-Vl.y,-Vl.z),k_.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),U._frustum.setFromProjectionMatrix(k_,K.coordinateSystem,K.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)r.setRenderTarget(U.map,ye),r.clear();else{ye===0&&(r.setRenderTarget(U.map),r.clear());let K=U.getViewport(ye);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),D.viewport(o)}i=U.getFrustum(ye),y(_,S,we,X,ee,this.type)}U.isPointLightShadow!==!0&&this.type===oa&&x(U,S),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(P,C,N)};function x(w,_){let S=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new li(n.x,n.y,{format:ds,type:Ei}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(_,null,S,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(_,null,S,f,v,null)}function E(w,_,S,P){let C=null,N=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)C=N;else if(C=S.isPointLight===!0?l:a,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let D=C.uuid,H=_.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let V=I[H];V===void 0&&(V=C.clone(),I[H]=V,_.addEventListener("dispose",b)),C=V}if(C.visible=_.visible,C.wireframe=_.wireframe,P===oa?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=r.properties.get(C);D.light=S}return C}function y(w,_,S,P,C,N){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===oa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let I=e.update(w),V=w.material;if(Array.isArray(V)){let X=I.groups;for(let U=0,ie=X.length;U<ie;U++){let q=X[U],R=V[q.materialIndex];if(R&&R.visible){let ee=E(w,R,P,N);w.onBeforeShadow(r,w,_,S,I,ee,q),r.renderBufferDirect(S,null,I,ee,w,q),w.onAfterShadow(r,w,_,S,I,ee,q)}}}else if(V.visible){let X=E(w,V,P,N);w.onBeforeShadow(r,w,_,S,I,X,null),r.renderBufferDirect(S,null,I,X,w,null),w.onAfterShadow(r,w,_,S,I,X,null)}}let H=w.children;for(let I=0,V=H.length;I<V;I++)y(H[I],_,S,P,C,N)}function b(w){w.target.removeEventListener("dispose",b);for(let S in c){let P=c[S],C=w.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function $1(r,e){function t(){let L=!1,re=new $t,te=null,xe=new $t(0,0,0,0);return{setMask:function(ue){te!==ue&&!L&&(r.colorMask(ue,ue,ue,ue),te=ue)},setLocked:function(ue){L=ue},setClear:function(ue,ge,he,Q,z){z===!0&&(ue*=Q,ge*=Q,he*=Q),re.set(ue,ge,he,Q),xe.equals(re)===!1&&(r.clearColor(ue,ge,he,Q),xe.copy(re))},reset:function(){L=!1,te=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,re=!1,te=null,xe=null,ue=null;return{setReversed:function(ge){if(re!==ge){let he=e.get("EXT_clip_control");ge?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),re=ge;let Q=ue;ue=null,this.setClear(Q)}},getReversed:function(){return re},setTest:function(ge){ge?_e(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(ge){te!==ge&&!L&&(r.depthMask(ge),te=ge)},setFunc:function(ge){if(re&&(ge=f_[ge]),xe!==ge){switch(ge){case vh:r.depthFunc(r.NEVER);break;case xh:r.depthFunc(r.ALWAYS);break;case yh:r.depthFunc(r.LESS);break;case Ho:r.depthFunc(r.LEQUAL);break;case Sh:r.depthFunc(r.EQUAL);break;case Mh:r.depthFunc(r.GEQUAL);break;case bh:r.depthFunc(r.GREATER);break;case Th:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xe=ge}},setLocked:function(ge){L=ge},setClear:function(ge){ue!==ge&&(ue=ge,re&&(ge=1-ge),r.clearDepth(ge))},reset:function(){L=!1,te=null,xe=null,ue=null,re=!1}}}function n(){let L=!1,re=null,te=null,xe=null,ue=null,ge=null,he=null,Q=null,z=null;return{setTest:function(W){L||(W?_e(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(W){re!==W&&!L&&(r.stencilMask(W),re=W)},setFunc:function(W,se,$){(te!==W||xe!==se||ue!==$)&&(r.stencilFunc(W,se,$),te=W,xe=se,ue=$)},setOp:function(W,se,$){(ge!==W||he!==se||Q!==$)&&(r.stencilOp(W,se,$),ge=W,he=se,Q=$)},setLocked:function(W){L=W},setClear:function(W){z!==W&&(r.clearStencil(W),z=W)},reset:function(){L=!1,re=null,te=null,xe=null,ue=null,ge=null,he=null,Q=null,z=null}}}let s=new t,o=new i,a=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],v=null,m=!1,g=null,x=null,E=null,y=null,b=null,w=null,_=null,S=new Ze(0,0,0),P=0,C=!1,N=null,D=null,H=null,I=null,V=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,ie=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),U=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),U=ie>=2);let R=null,ee={},ye=r.getParameter(r.SCISSOR_BOX),we=r.getParameter(r.VIEWPORT),K=new $t().fromArray(ye),ce=new $t().fromArray(we);function Se(L,re,te,xe){let ue=new Uint8Array(4),ge=r.createTexture();r.bindTexture(L,ge),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let he=0;he<te;he++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(re+he,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return ge}let Te={};Te[r.TEXTURE_2D]=Se(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=Se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[r.TEXTURE_2D_ARRAY]=Se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=Se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(r.DEPTH_TEST),o.setFunc(Ho),j(!1),Ye(qd),_e(r.CULL_FACE),ct(Dr);function _e(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Le(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function pt(L,re){return u[L]!==re?(r.bindFramebuffer(L,re),u[L]=re,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=re),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=re),!0):!1}function Ce(L,re){let te=p,xe=!1;if(L){te=f.get(re),te===void 0&&(te=[],f.set(re,te));let ue=L.textures;if(te.length!==ue.length||te[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,he=ue.length;ge<he;ge++)te[ge]=r.COLOR_ATTACHMENT0+ge;te.length=ue.length,xe=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,xe=!0);xe&&r.drawBuffers(te)}function qe(L){return v!==L?(r.useProgram(L),v=L,!0):!1}let Oe={[qs]:r.FUNC_ADD,[O0]:r.FUNC_SUBTRACT,[U0]:r.FUNC_REVERSE_SUBTRACT};Oe[F0]=r.MIN,Oe[B0]=r.MAX;let Ue={[z0]:r.ZERO,[k0]:r.ONE,[V0]:r.SRC_COLOR,[Zd]:r.SRC_ALPHA,[Y0]:r.SRC_ALPHA_SATURATE,[X0]:r.DST_COLOR,[G0]:r.DST_ALPHA,[H0]:r.ONE_MINUS_SRC_COLOR,[Jd]:r.ONE_MINUS_SRC_ALPHA,[q0]:r.ONE_MINUS_DST_COLOR,[W0]:r.ONE_MINUS_DST_ALPHA,[$0]:r.CONSTANT_COLOR,[Z0]:r.ONE_MINUS_CONSTANT_COLOR,[J0]:r.CONSTANT_ALPHA,[K0]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(L,re,te,xe,ue,ge,he,Q,z,W){if(L===Dr){m===!0&&(Le(r.BLEND),m=!1);return}if(m===!1&&(_e(r.BLEND),m=!0),L!==N0){if(L!==g||W!==C){if((x!==qs||b!==qs)&&(r.blendEquation(r.FUNC_ADD),x=qs,b=qs),W)switch(L){case aa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bn:r.blendFunc(r.ONE,r.ONE);break;case Yd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $d:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case aa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Yd:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $d:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}E=null,y=null,w=null,_=null,S.set(0,0,0),P=0,g=L,C=W}return}ue=ue||re,ge=ge||te,he=he||xe,(re!==x||ue!==b)&&(r.blendEquationSeparate(Oe[re],Oe[ue]),x=re,b=ue),(te!==E||xe!==y||ge!==w||he!==_)&&(r.blendFuncSeparate(Ue[te],Ue[xe],Ue[ge],Ue[he]),E=te,y=xe,w=ge,_=he),(Q.equals(S)===!1||z!==P)&&(r.blendColor(Q.r,Q.g,Q.b,z),S.copy(Q),P=z),g=L,C=!1}function ut(L,re){L.side===sr?Le(r.CULL_FACE):_e(r.CULL_FACE);let te=L.side===tn;re&&(te=!te),j(te),L.blending===aa&&L.transparent===!1?ct(Dr):ct(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let xe=L.stencilWrite;a.setTest(xe),xe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),yt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function j(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function Ye(L){L!==I0?(_e(r.CULL_FACE),L!==D&&(L===qd?r.cullFace(r.BACK):L===L0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),D=L}function Ht(L){L!==H&&(U&&r.lineWidth(L),H=L)}function yt(L,re,te){L?(_e(r.POLYGON_OFFSET_FILL),(I!==re||V!==te)&&(I=re,V=te,o.getReversed()&&(re=-re,te=-te),r.polygonOffset(re,te))):Le(r.POLYGON_OFFSET_FILL)}function Qe(L){L?_e(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function Ct(L){L===void 0&&(L=r.TEXTURE0+X-1),R!==L&&(r.activeTexture(L),R=L)}function Ft(L,re,te){te===void 0&&(R===null?te=r.TEXTURE0+X-1:te=R);let xe=ee[te];xe===void 0&&(xe={type:void 0,texture:void 0},ee[te]=xe),(xe.type!==L||xe.texture!==re)&&(R!==te&&(r.activeTexture(te),R=te),r.bindTexture(L,re||Te[L]),xe.type=L,xe.texture=re)}function F(){let L=ee[R];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function mt(){try{r.compressedTexImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function gt(){try{r.compressedTexImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function We(){try{r.texSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ve(){try{r.texSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function vt(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Ie(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function fe(){try{r.texStorage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function A(){try{r.texStorage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function M(){try{r.texImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function G(){try{r.texImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function le(L){return d[L]!==void 0?d[L]:r.getParameter(L)}function oe(L,re){d[L]!==re&&(r.pixelStorei(L,re),d[L]=re)}function me(L){K.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function de(L){ce.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ce.copy(L))}function Y(L,re){let te=c.get(re);te===void 0&&(te=new WeakMap,c.set(re,te));let xe=te.get(L);xe===void 0&&(xe=r.getUniformBlockIndex(re,L.name),r.uniformBlockBinding(re,xe,xe),te.set(L,xe))}function ne(L,re,te){let ue=c.get(re).get(L);l[ue]!==te&&(r.bindBufferBase(r.UNIFORM_BUFFER,ue,te),l[ue]=te)}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,ee={},u={},l={},f=new WeakMap,p=[],v=null,m=!1,g=null,x=null,E=null,y=null,b=null,w=null,_=null,S=new Ze(0,0,0),P=0,C=!1,N=null,D=null,H=null,I=null,V=null,K.set(0,0,r.canvas.width,r.canvas.height),ce.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:_e,disable:Le,bindFramebuffer:pt,drawBuffers:Ce,useProgram:qe,setBlending:ct,setMaterial:ut,setFlipSided:j,setCullFace:Ye,setLineWidth:Ht,setPolygonOffset:yt,setScissorTest:Qe,activeTexture:Ct,bindTexture:Ft,unbindTexture:F,compressedTexImage2D:mt,compressedTexImage3D:gt,texImage2D:M,texImage3D:G,pixelStorei:oe,getParameter:le,updateUBOMapping:Y,uniformBlockBinding:ne,texStorage2D:fe,texStorage3D:A,texSubImage2D:We,texSubImage3D:ve,compressedTexSubImage2D:vt,compressedTexSubImage3D:Ie,scissor:me,viewport:de,reset:pe}}function Z1(r,e,t,i,n,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,v=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):Go("canvas")}function x(A,M,G){let le=1,oe=fe(A);if((oe.width>G||oe.height>G)&&(le=G/Math.max(oe.width,oe.height)),le<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let me=Math.floor(le*oe.width),de=Math.floor(le*oe.height);u===void 0&&(u=g(me,de));let Y=M?g(me,de):u;return Y.width=me,Y.height=de,Y.getContext("2d").drawImage(A,0,0,me,de),Ge("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+me+"x"+de+")."),Y}else return"data"in A&&Ge("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),A;return A}function E(A){return A.generateMipmaps}function y(A){r.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(A,M,G,le,oe,me=!1){if(A!==null){if(r[A]!==void 0)return r[A];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de;le&&(de=e.get("EXT_texture_norm16"),de||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===r.RED&&(G===r.FLOAT&&(Y=r.R32F),G===r.HALF_FLOAT&&(Y=r.R16F),G===r.UNSIGNED_BYTE&&(Y=r.R8),G===r.UNSIGNED_SHORT&&de&&(Y=de.R16_EXT),G===r.SHORT&&de&&(Y=de.R16_SNORM_EXT)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Y=r.R8UI),G===r.UNSIGNED_SHORT&&(Y=r.R16UI),G===r.UNSIGNED_INT&&(Y=r.R32UI),G===r.BYTE&&(Y=r.R8I),G===r.SHORT&&(Y=r.R16I),G===r.INT&&(Y=r.R32I)),M===r.RG&&(G===r.FLOAT&&(Y=r.RG32F),G===r.HALF_FLOAT&&(Y=r.RG16F),G===r.UNSIGNED_BYTE&&(Y=r.RG8),G===r.UNSIGNED_SHORT&&de&&(Y=de.RG16_EXT),G===r.SHORT&&de&&(Y=de.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Y=r.RG8UI),G===r.UNSIGNED_SHORT&&(Y=r.RG16UI),G===r.UNSIGNED_INT&&(Y=r.RG32UI),G===r.BYTE&&(Y=r.RG8I),G===r.SHORT&&(Y=r.RG16I),G===r.INT&&(Y=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),G===r.UNSIGNED_INT&&(Y=r.RGB32UI),G===r.BYTE&&(Y=r.RGB8I),G===r.SHORT&&(Y=r.RGB16I),G===r.INT&&(Y=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),G===r.UNSIGNED_INT&&(Y=r.RGBA32UI),G===r.BYTE&&(Y=r.RGBA8I),G===r.SHORT&&(Y=r.RGBA16I),G===r.INT&&(Y=r.RGBA32I)),M===r.RGB&&(G===r.UNSIGNED_SHORT&&de&&(Y=de.RGB16_EXT),G===r.SHORT&&de&&(Y=de.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),M===r.RGBA){let ne=me?cl:at.getTransfer(oe);G===r.FLOAT&&(Y=r.RGBA32F),G===r.HALF_FLOAT&&(Y=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Y=ne===Mt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&de&&(Y=de.RGBA16_EXT),G===r.SHORT&&de&&(Y=de.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(A,M){let G;return A?M===null||M===Wn||M===Zs?G=r.DEPTH24_STENCIL8:M===Xn?G=r.DEPTH32F_STENCIL8:M===ca&&(G=r.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wn||M===Zs?G=r.DEPTH_COMPONENT24:M===Xn?G=r.DEPTH_COMPONENT32F:M===ca&&(G=r.DEPTH_COMPONENT16),G}function S(A,M){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==_i&&A.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){let M=new WeakRef(A);i.get(A).__ref=M,p.add(M),v.register(A,M,M)}function C(A){let M=i.get(A).__ref;M!==void 0&&(p.delete(M),v.unregister(M))}function N(A){H(A.target)}function D(A){I(A.target)}function H(A){A.removeEventListener("dispose",N),C(A),X(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",D),C(A),ie(A)}function V(){for(let A of p){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):H(M))}p.clear(),d.clear()}function X(A){let M=i.get(A);if(M.__webglInit===void 0)return;let G=A.source,le=f.get(G);if(le){let oe=le[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&U(A),Object.keys(le).length===0&&f.delete(G)}i.remove(A)}function U(A){let M=i.get(A);r.deleteTexture(M.__webglTexture);let G=A.source,le=f.get(G);delete le[M.__cacheKey],o.memory.textures--}function ie(A){let M=i.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&H(G),A.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let me=0;me<M.__webglFramebuffer[oe].length;me++)r.deleteFramebuffer(M.__webglFramebuffer[oe][me]);else r.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)r.deleteFramebuffer(M.__webglFramebuffer[oe]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let le=A.textures;for(let oe=0,me=le.length;oe<me;oe++){let de=i.get(le[oe]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(le[oe])}i.remove(A)}let q=0;function R(){q=0}function ee(){return q}function ye(A){q=A}function we(){let A=q;return A>=n.maxTextures&&Ge("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),q+=1,A}function K(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ce(A,M){let G=i.get(A);if(A.isVideoTexture&&vt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let le=A.image;if(le===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(G,A,M);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function Se(A,M){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ut(G,A,M);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function Te(A,M){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ut(G,A,M);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function _e(A,M){let G=i.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}let Le={[wh]:r.REPEAT,[ir]:r.CLAMP_TO_EDGE,[Eh]:r.MIRRORED_REPEAT},pt={[_i]:r.NEAREST,[e_]:r.NEAREST_MIPMAP_NEAREST,[Nl]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[Kh]:r.LINEAR_MIPMAP_NEAREST,[Nr]:r.LINEAR_MIPMAP_LINEAR},Ce={[r_]:r.NEVER,[cp]:r.ALWAYS,[s_]:r.LESS,[ap]:r.LEQUAL,[o_]:r.EQUAL,[lp]:r.GEQUAL,[a_]:r.GREATER,[l_]:r.NOTEQUAL};function qe(A,M){if(M.type===Xn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===Kh||M.magFilter===Nl||M.magFilter===Nr||M.minFilter===en||M.minFilter===Kh||M.minFilter===Nl||M.minFilter===Nr)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,Le[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Le[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Le[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,pt[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,pt[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_i||M.minFilter!==Nl&&M.minFilter!==Nr||M.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Oe(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N),P(M));let le=M.source,oe=f.get(le);oe===void 0&&(oe={},f.set(le,oe));let me=K(M);if(me!==A.__cacheKey){oe[me]===void 0&&(oe[me]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),oe[me].usedTimes++;let de=oe[A.__cacheKey];de!==void 0&&(oe[A.__cacheKey].usedTimes--,de.usedTimes===0&&U(M)),A.__cacheKey=me,A.__webglTexture=oe[me].texture}return G}function Ue(A,M,G){return Math.floor(Math.floor(A/G)/M)}function ct(A,M,G,le){let me=A.updateRanges;if(me.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,G,le,M.data);else{me.sort((L,re)=>L.start-re.start);let de=0;for(let L=1;L<me.length;L++){let re=me[de],te=me[L],xe=re.start+re.count,ue=Ue(te.start,M.width,4),ge=Ue(re.start,M.width,4);te.start<=xe+1&&ue===ge&&Ue(te.start+te.count-1,M.width,4)===ue?re.count=Math.max(re.count,te.start+te.count-re.start):(++de,me[de]=te)}me.length=de+1;let Y=t.getParameter(r.UNPACK_ROW_LENGTH),ne=t.getParameter(r.UNPACK_SKIP_PIXELS),pe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let L=0,re=me.length;L<re;L++){let te=me[L],xe=Math.floor(te.start/4),ue=Math.ceil(te.count/4),ge=xe%M.width,he=Math.floor(xe/M.width),Q=ue,z=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(r.UNPACK_SKIP_ROWS,he),t.texSubImage2D(r.TEXTURE_2D,0,ge,he,Q,z,G,le,M.data)}A.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Y),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(r.UNPACK_SKIP_ROWS,pe)}}function ut(A,M,G){let le=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=r.TEXTURE_3D);let oe=Oe(A,M),me=M.source;t.bindTexture(le,A.__webglTexture,r.TEXTURE0+G);let de=i.get(me);if(me.version!==de.__version||oe===!0){if(t.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let z=at.getPrimaries(at.workingColorSpace),W=M.colorSpace===Ur?null:at.getPrimaries(M.colorSpace),se=M.colorSpace===Ur||z===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=x(M.image,!1,n.maxTextureSize);ne=Ie(M,ne);let pe=s.convert(M.format,M.colorSpace),L=s.convert(M.type),re=w(M.internalFormat,pe,L,M.normalized,M.colorSpace,M.isVideoTexture);qe(le,M);let te,xe=M.mipmaps,ue=M.isVideoTexture!==!0,ge=de.__version===void 0||oe===!0,he=me.dataReady,Q=S(M,ne);if(M.isDepthTexture)re=_(M.format===Or,M.type),ge&&(ue?t.texStorage2D(r.TEXTURE_2D,1,re,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,re,ne.width,ne.height,0,pe,L,null));else if(M.isDataTexture)if(xe.length>0){ue&&ge&&t.texStorage2D(r.TEXTURE_2D,Q,re,xe[0].width,xe[0].height);for(let z=0,W=xe.length;z<W;z++)te=xe[z],ue?he&&t.texSubImage2D(r.TEXTURE_2D,z,0,0,te.width,te.height,pe,L,te.data):t.texImage2D(r.TEXTURE_2D,z,re,te.width,te.height,0,pe,L,te.data);M.generateMipmaps=!1}else ue?(ge&&t.texStorage2D(r.TEXTURE_2D,Q,re,ne.width,ne.height),he&&ct(M,ne,pe,L)):t.texImage2D(r.TEXTURE_2D,0,re,ne.width,ne.height,0,pe,L,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ue&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,re,xe[0].width,xe[0].height,ne.depth);for(let z=0,W=xe.length;z<W;z++)if(te=xe[z],M.format!==qn)if(pe!==null)if(ue){if(he)if(M.layerUpdates.size>0){let se=gp(te.width,te.height,M.format,M.type);for(let $ of M.layerUpdates){let ae=te.data.subarray($*se/te.data.BYTES_PER_ELEMENT,($+1)*se/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,z,0,0,$,te.width,te.height,1,pe,ae)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,z,0,0,0,te.width,te.height,ne.depth,pe,te.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,z,re,te.width,te.height,ne.depth,0,te.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?he&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,z,0,0,0,te.width,te.height,ne.depth,pe,L,te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,z,re,te.width,te.height,ne.depth,0,pe,L,te.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ue&&ge&&t.texStorage2D(r.TEXTURE_2D,Q,re,xe[0].width,xe[0].height);for(let z=0,W=xe.length;z<W;z++)te=xe[z],M.format!==qn?pe!==null?ue?he&&t.compressedTexSubImage2D(r.TEXTURE_2D,z,0,0,te.width,te.height,pe,te.data):t.compressedTexImage2D(r.TEXTURE_2D,z,re,te.width,te.height,0,te.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?he&&t.texSubImage2D(r.TEXTURE_2D,z,0,0,te.width,te.height,pe,L,te.data):t.texImage2D(r.TEXTURE_2D,z,re,te.width,te.height,0,pe,L,te.data)}else if(M.isDataArrayTexture)if(ue){if(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,re,ne.width,ne.height,ne.depth),he)if(M.layerUpdates.size>0){let z=gp(ne.width,ne.height,M.format,M.type);for(let W of M.layerUpdates){let se=ne.data.subarray(W*z/ne.data.BYTES_PER_ELEMENT,(W+1)*z/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,W,ne.width,ne.height,1,pe,L,se)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,L,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,re,ne.width,ne.height,ne.depth,0,pe,L,ne.data);else if(M.isData3DTexture)ue?(ge&&t.texStorage3D(r.TEXTURE_3D,Q,re,ne.width,ne.height,ne.depth),he&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,L,ne.data)):t.texImage3D(r.TEXTURE_3D,0,re,ne.width,ne.height,ne.depth,0,pe,L,ne.data);else if(M.isFramebufferTexture){if(ge)if(ue)t.texStorage2D(r.TEXTURE_2D,Q,re,ne.width,ne.height);else{let z=ne.width,W=ne.height;for(let se=0;se<Q;se++)t.texImage2D(r.TEXTURE_2D,se,re,z,W,0,pe,L,null),z>>=1,W>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){let z=r.canvas;if(z.hasAttribute("layoutsubtree")||z.setAttribute("layoutsubtree","true"),ne.parentNode!==z){z.appendChild(ne),d.add(M),z.onpaint=W=>{let se=W.changedElements;for(let $ of d)se.includes($.image)&&($.needsUpdate=!0)},z.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ne);else{let se=r.RGBA,$=r.RGBA,ae=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,se,$,ae,ne)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(xe.length>0){if(ue&&ge){let z=fe(xe[0]);t.texStorage2D(r.TEXTURE_2D,Q,re,z.width,z.height)}for(let z=0,W=xe.length;z<W;z++)te=xe[z],ue?he&&t.texSubImage2D(r.TEXTURE_2D,z,0,0,pe,L,te):t.texImage2D(r.TEXTURE_2D,z,re,pe,L,te);M.generateMipmaps=!1}else if(ue){if(ge){let z=fe(ne);t.texStorage2D(r.TEXTURE_2D,Q,re,z.width,z.height)}he&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,L,ne)}else t.texImage2D(r.TEXTURE_2D,0,re,pe,L,ne);E(M)&&M.mipmapsAutoUpdate===!0&&y(le),de.__version=me.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function j(A,M,G){if(M.image.length!==6)return;let le=Oe(A,M),oe=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+G);let me=i.get(oe);if(oe.version!==me.__version||le===!0){t.activeTexture(r.TEXTURE0+G);let de=at.getPrimaries(at.workingColorSpace),Y=M.colorSpace===Ur?null:at.getPrimaries(M.colorSpace),ne=M.colorSpace===Ur||de===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let pe=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,re=[];for(let $=0;$<6;$++)!pe&&!L?re[$]=x(M.image[$],!0,n.maxCubemapSize):re[$]=L?M.image[$].image:M.image[$],re[$]=Ie(M,re[$]);let te=re[0],xe=s.convert(M.format,M.colorSpace),ue=s.convert(M.type),ge=w(M.internalFormat,xe,ue,M.normalized,M.colorSpace),he=M.isVideoTexture!==!0,Q=me.__version===void 0||le===!0,z=oe.dataReady,W=S(M,te);qe(r.TEXTURE_CUBE_MAP,M);let se;if(M.isDepthTexture){if(ge=_(M.format===Or,M.type),Q)if(he)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,ge,te.width,te.height);else for(let $=0;$<6;$++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ge,te.width,te.height,0,xe,ue,null)}else if(pe){he&&Q&&t.texStorage2D(r.TEXTURE_CUBE_MAP,W,ge,te.width,te.height);for(let $=0;$<6;$++){se=re[$].mipmaps;for(let ae=0;ae<se.length;ae++){let He=se[ae];M.format!==qn?xe!==null?he?z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,He.width,He.height,xe,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,ge,He.width,He.height,0,He.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,He.width,He.height,xe,ue,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,ge,He.width,He.height,0,xe,ue,He.data)}}}else{if(se=M.mipmaps,he&&Q){se.length>0&&W++;let $=fe(re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,W,ge,$.width,$.height)}for(let $=0;$<6;$++)if(L){he?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,re[$].width,re[$].height,xe,ue,re[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ge,re[$].width,re[$].height,0,xe,ue,re[$].data);for(let ae=0;ae<se.length;ae++){let ze=se[ae].image[$].image;he?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,ze.width,ze.height,xe,ue,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,ge,ze.width,ze.height,0,xe,ue,ze.data)}}else{he?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xe,ue,re[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ge,xe,ue,re[$]);for(let ae=0;ae<se.length;ae++){let He=se[ae];he?z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,xe,ue,He.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,ge,xe,ue,He.image[$])}}}E(M)&&M.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),me.__version=oe.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ye(A,M,G,le,oe,me){let de=s.convert(G.format,G.colorSpace),Y=s.convert(G.type),ne=w(G.internalFormat,de,Y,G.normalized,G.colorSpace),pe=i.get(M),L=i.get(G);if(L.__renderTarget=M,!pe.__hasExternalTextures){let re=Math.max(1,M.width>>me),te=Math.max(1,M.height>>me);oe===r.TEXTURE_3D||oe===r.TEXTURE_2D_ARRAY?t.texImage3D(oe,me,ne,re,te,M.depth,0,de,Y,null):t.texImage2D(oe,me,ne,re,te,0,de,Y,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),ve(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,oe,L.__webglTexture,0,We(M)):(oe===r.TEXTURE_2D||oe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,oe,L.__webglTexture,me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(A,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){let le=M.depthTexture,oe=le&&le.isDepthTexture?le.type:null,me=_(M.stencilBuffer,oe),de=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ve(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,We(M),me,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,We(M),me,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,me,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,A)}else{let le=M.textures;for(let oe=0;oe<le.length;oe++){let me=le[oe],de=s.convert(me.format,me.colorSpace),Y=s.convert(me.type),ne=w(me.internalFormat,de,Y,me.normalized,me.colorSpace);ve(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,We(M),ne,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,We(M),ne,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ne,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function yt(A,M,G){let le=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=i.get(M.depthTexture);oe.__renderTarget=M;let me=le?M.depthTexture.image[0]:M.depthTexture.image;(!oe.__webglTexture||me.width!==M.width||me.height!==M.height)&&(me.width=M.width,me.height=M.height,M.depthTexture.needsUpdate=!0),le?_e(M.depthTexture,0):ce(M.depthTexture,0);let de=oe.__webglTexture,Y=We(M),ne=le?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,pe=M.depthTexture.format===Or?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Cr)ve(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ne,de,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,pe,ne,de,0);else if(M.depthTexture.format===Or)ve(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ne,de,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,pe,ne,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(A){let M=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let le=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){let oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",oe)};le.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=le}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let le=0;le<6;le++)yt(M.__webglFramebuffer[le],A,le);else A.texture.mipmaps.length>0?yt(M.__webglFramebuffer[0],A,0):yt(M.__webglFramebuffer,A,0);else if(G){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=r.createRenderbuffer(),Ht(M.__webglDepthbuffer[le],A,!1);else{let oe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,me)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ht(M.__webglDepthbuffer,A,!1);else{let oe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,me)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(A,M,G){let le=i.get(A);M!==void 0&&Ye(le.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Qe(A)}function Ft(A){let M=A.texture,G=i.get(A),le=i.get(M);A.addEventListener("dispose",D),P(A);let oe=A.textures,me=A.isWebGLCubeRenderTarget===!0,de=oe.length>1;if(de||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=M.version,o.memory.textures++),me){G.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0){G.__webglFramebuffer[Y]=[];for(let ne=0;ne<M.mipmaps.length;ne++)G.__webglFramebuffer[Y][ne]=r.createFramebuffer()}else G.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)G.__webglFramebuffer[Y]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(de)for(let Y=0,ne=oe.length;Y<ne;Y++){let pe=i.get(oe[Y]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&ve(A)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Y=0;Y<oe.length;Y++){let ne=oe[Y];G.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[Y]);let pe=s.convert(ne.format,ne.colorSpace),L=s.convert(ne.type),re=w(ne.internalFormat,pe,L,ne.normalized,ne.colorSpace,A.isXRRenderTarget===!0),te=We(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,te,re,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,G.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Ht(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),qe(r.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)Ye(G.__webglFramebuffer[Y][ne],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne);else Ye(G.__webglFramebuffer[Y],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(M)?y(r.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(de){for(let Y=0,ne=oe.length;Y<ne;Y++){let pe=oe[Y],L=i.get(pe),re=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,L.__webglTexture),qe(re,pe),Ye(G.__webglFramebuffer,A,pe,r.COLOR_ATTACHMENT0+Y,re,0),E(pe)&&y(re)}t.unbindTexture()}else{let Y=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Y,le.__webglTexture),qe(Y,M),M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)Ye(G.__webglFramebuffer[ne],A,M,r.COLOR_ATTACHMENT0,Y,ne);else Ye(G.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,Y,0);E(M)?y(Y):M.mipmaps.length>0&&r.texParameteri(Y,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Qe(A)}function F(A){let M=A.textures;for(let G=0,le=M.length;G<le;G++){let oe=M[G];if(E(oe)&&oe.mipmapsAutoUpdate===!0){let me=b(A),de=i.get(oe).__webglTexture;t.bindTexture(me,de),y(me),t.unbindTexture()}}}let mt=[];function gt(A){if(A.samples>0){if(ve(A)===!1){let M=A.textures,G=A.width,le=A.height,oe=r.COLOR_BUFFER_BIT,me=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=i.get(A),Y=M.length>1;if(Y)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(oe|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(oe|=r.STENCIL_BUFFER_BIT)),Y){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);let L=i.get(M[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,L,0)}r.blitFramebuffer(0,0,G,le,0,0,G,le,oe,r.NEAREST),l===!0&&(mt.length=0,mt.push(r.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&mt.push(me),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);let L=i.get(M[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,L,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function We(A){return Math.min(n.maxSamples,A.samples)}function ve(A){let M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ie(A,M){let G=A.colorSpace,le=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==ll&&G!==Ur&&(at.getTransfer(G)===Mt?(le!==qn||oe!==Tn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",G)),M}function fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=we,this.resetTextureUnits=R,this.getTextureUnits=ee,this.setTextureUnits=ye,this.setTexture2D=ce,this.setTexture2DArray=Se,this.setTexture3D=Te,this.setTextureCube=_e,this.rebindTextures=Ct,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=ve,this.dispose=V}function J1(r,e){function t(i,n=Ur){let s,o=at.getTransfer(n);if(i===Tn)return r.UNSIGNED_BYTE;if(i===jh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===eu)return r.UNSIGNED_SHORT_5_5_5_1;if(i===tp)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===ip)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===jd)return r.BYTE;if(i===ep)return r.SHORT;if(i===ca)return r.UNSIGNED_SHORT;if(i===Qh)return r.INT;if(i===Wn)return r.UNSIGNED_INT;if(i===Xn)return r.FLOAT;if(i===Ei)return r.HALF_FLOAT;if(i===np)return r.ALPHA;if(i===rp)return r.RGB;if(i===qn)return r.RGBA;if(i===Cr)return r.DEPTH_COMPONENT;if(i===Or)return r.DEPTH_STENCIL;if(i===sp)return r.RED;if(i===tu)return r.RED_INTEGER;if(i===ds)return r.RG;if(i===iu)return r.RG_INTEGER;if(i===nu)return r.RGBA_INTEGER;if(i===Ol||i===Ul||i===Fl||i===Bl)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ru||i===su||i===ou||i===au)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===su)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ou)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===au)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lu||i===cu||i===hu||i===uu||i===fu||i===zl||i===du)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lu||i===cu)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===uu)return s.COMPRESSED_R11_EAC;if(i===fu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zl)return s.COMPRESSED_RG11_EAC;if(i===du)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===yu||i===Su||i===Mu||i===bu||i===Tu||i===wu||i===Eu||i===Au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===pu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_u)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Su)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eu)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Au)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cu||i===Ru||i===Pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Cu)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ru)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Iu||i===Lu||i===kl||i===Du)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Iu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var K1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new yl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Vt({vertexShader:K1,fragmentShader:Q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wi(new Xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ip=class extends nr{constructor(e,t){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,v=typeof XRWebGLBinding<"u",m=new Pp,g={},x=t.getContextAttributes(),E=null,y=null,b=[],w=[],_=new Ve,S=null,P=null,C=new ji;C.viewport=new $t;let N=new ji;N.viewport=new $t;let D=[C,N],H=new Yh,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=b[K];return ce===void 0&&(ce=new Yo,b[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=b[K];return ce===void 0&&(ce=new Yo,b[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=b[K];return ce===void 0&&(ce=new Yo,b[K]=ce),ce.getHandSpace()};function X(K){let ce=w.indexOf(K.inputSource);if(ce===-1)return;let Se=b[ce];Se!==void 0&&(Se.update(K.inputSource,K.frame,c||o),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",U),n.removeEventListener("inputsourceschange",ie);for(let K=0;K<b.length;K++){let ce=w[K];ce!==null&&(w[K]=null,b[K].disconnect(ce))}I=null,V=null,m.reset();for(let K in g)delete g[K];if(e.setRenderTarget(E),f=null,u=null,d=null,n=null,y=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),P!==null){let K=P.camera;K.fov=P.fov,K.zoom=P.zoom,K.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(E=e.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",U),n.addEventListener("inputsourceschange",ie),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Te=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?Or:Cr,Te=x.stencil?Zs:Wn);let Le={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Le),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new li(u.textureWidth,u.textureHeight,{format:qn,type:Tn,depthTexture:new Lr(u.textureWidth,u.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,Se),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new li(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),we.setContext(n),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(K){for(let ce=0;ce<K.removed.length;ce++){let Se=K.removed[ce],Te=w.indexOf(Se);Te>=0&&(w[Te]=null,b[Te].disconnect(Se))}for(let ce=0;ce<K.added.length;ce++){let Se=K.added[ce],Te=w.indexOf(Se);if(Te===-1){for(let Le=0;Le<b.length;Le++)if(Le>=w.length){w.push(Se),Te=Le;break}else if(w[Le]===null){w[Le]=Se,Te=Le;break}if(Te===-1)break}let _e=b[Te];_e&&_e.connect(Se)}}function q(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let ce=K.near,Se=K.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),H.near=N.near=C.near=ce,H.far=N.far=C.far=Se,(I!==H.near||V!==H.far)&&(n.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,V=H.far),H.layers.mask=K.layers.mask|6,C.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let Te=K.parent,_e=H.cameras;q(H,Te);for(let Le=0;Le<_e.length;Le++)q(_e[Le],Te);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&K.isPerspectiveCamera&&(P={camera:K,fov:K.fov,zoom:K.zoom}),R(K,H,Te)};function R(K,ce,Se){Se===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ch*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(K){return g[K]};let ee=null;function ye(K,ce){if(h=ce.getViewerPose(c||o),p=ce,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Te=!1;Se.length!==H.cameras.length&&(H.cameras.length=0,Te=!0);for(let Ce=0;Ce<Se.length;Ce++){let qe=Se[Ce],Oe=null;if(f!==null)Oe=f.getViewport(qe);else{let ct=d.getViewSubImage(u,qe);Oe=ct.viewport,Ce===0&&(e.setRenderTargetTextures(y,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(y))}let Ue=D[Ce];Ue===void 0&&(Ue=new ji,Ue.layers.enable(Ce),Ue.viewport=new $t,D[Ce]=Ue),Ue.matrix.fromArray(qe.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(qe.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Ce===0&&(H.matrix.copy(Ue.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Te===!0&&H.cameras.push(Ue)}let _e=n.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let Ce=d.getDepthInformation(Se[0]);Ce&&Ce.isValid&&Ce.texture&&m.init(Ce,n.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Ce=0;Ce<Se.length;Ce++){let qe=Se[Ce].camera;if(qe){let Oe=g[qe];Oe||(Oe=new yl,g[qe]=Oe);let Ue=d.getCameraImage(qe);Oe.sourceTexture=Ue}}}}for(let Se=0;Se<b.length;Se++){let Te=w[Se],_e=b[Se];Te!==null&&_e!==void 0&&_e.update(Te,ce,c||o)}ee&&ee(K,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),p=null}let we=new V_;we.setAnimationLoop(ye),this.setAnimationLoop=function(K){ee=K},this.dispose=function(){}}},j1=new Nt,K_=new $e;K_.set(-1,0,0,0,1,0,0,0,1);function ew(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,dp(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,x,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),v(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===tn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===tn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),E=x.envMap,y=x.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(K_),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===tn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function tw(r,e,t,i){let n={},s={};function o(x,E){let y=E.program;i.uniformBlockBinding(x,y,n[x.id])}function a(x,E){let y=n[x.id];y===void 0&&(p(x),y=l(x),n[x.id]=y,x.addEventListener("dispose",m));let b=E.program;i.updateUBOMapping(x,b);let w=e.render.frame;s[x.id]!==w&&(c(x),s[x.id]=w)}function l(x){let E=r.createBuffer(),y=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,y,b),r.bindBuffer(r.UNIFORM_BUFFER,null),E}function c(x){let E=n[x.id],y=x.uniforms,b=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let w=0,_=y.length;w<_;w++){let S=y[w];if(Array.isArray(S))for(let P=0,C=S.length;P<C;P++)h(S[P],w,P,b);else h(S,w,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(x,E,y,b){if(u(x,E,y,b)===!0){let w=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let P=0;P<_.length;P++){let C=_[P],N=v(C,!0);d(C,x.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,x.__data)}}function d(x,E,y){typeof x=="number"||typeof x=="boolean"?E[y]=x:x.isMatrix3?(E[y]=x.elements[0],E[y+1]=x.elements[1],E[y+2]=x.elements[2],E[y+3]=0,E[y+4]=x.elements[3],E[y+5]=x.elements[4],E[y+6]=x.elements[5],E[y+7]=0,E[y+8]=x.elements[6],E[y+9]=x.elements[7],E[y+10]=x.elements[8],E[y+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-y),y):x.toArray(E,y)}function u(x,E,y,b){let w=x.value,_=E+"_"+y;if(Array.isArray(w)){b[_]===void 0&&(b[_]=[]);let S=b[_],P=!1;for(let C=0;C<w.length;C++)f(w[C],S,C)===!0&&(P=!0);return P}return f(w,b,_)}function f(x,E,y){if(E[y]===void 0)return typeof x=="number"||typeof x=="boolean"?E[y]=x:ArrayBuffer.isView(x)?E[y]=x.slice():E[y]=x.clone(),!0;{let b=E[y];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return E[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function p(x){let E=x.uniforms,y=0,b=16;for(let _=0,S=E.length;_<S;_++){let P=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,N=P.length;C<N;C++){let D=P[C],H=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(E[_])||Array.isArray(D.value),V=y;for(let U=0,ie=H.length;U<ie;U++){let q=H[U],R=v(q,I),ee=y%b,ye=ee%R.boundary,we=ee+ye;y+=ye,we!==0&&b-we<R.storage&&(y+=b-we),U===0&&(V=y),y+=R.storage}let X=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new X((y-V)/Float32Array.BYTES_PER_ELEMENT),D.__offset=V}}let w=y%b;return w>0&&(y+=b-w),x.__size=y,x.__cache={},this}function v(x,E){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(x){let E=x.target;E.removeEventListener("dispose",m),r.deleteBuffer(n[E.id]),delete n[E.id],delete s[E.id]}function g(){for(let x in n)r.deleteBuffer(n[x]);n={},s={}}return{bind:o,update:a,dispose:g}}var iw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ar=null;function nw(){return ar===null&&(ar=new Jo(iw,16,16,ds,Ei),ar.name="DFG_LUT",ar.minFilter=en,ar.magFilter=en,ar.wrapS=ir,ar.wrapT=ir,ar.generateMipmaps=!1,ar.needsUpdate=!0),ar}var Bu=class{constructor(e={}){let{canvas:t=c_(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Tn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let v=f,m=new Set([nu,iu,tu]),g=new Set([Tn,Wn,ca,Zs,jh,eu]),x=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,w=null,_=[],S=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,D=null,H=null,I=null,V=null;this._outputColorSpace=bi;let X=0,U=0,ie=null,q=-1,R=null,ee=new $t,ye=new $t,we=null,K=new Ze(0),ce=0,Se=t.width,Te=t.height,_e=1,Le=null,pt=null,Ce=new $t(0,0,Se,Te),qe=new $t(0,0,Se,Te),Oe=!1,Ue=new Ws,ct=new Dh,ut=!1,j=!1,Ye=new Nt,Ht=new B,yt=new $t,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Ft(){return ie===null?_e:1}let F=i;function mt(T,O){return t.getContext(T,O)}let gt,We,ve,vt,Ie,fe,A,M,G,le,oe,me,de,Y,ne,pe,L,re,te,xe,ue,ge,he;try{let T={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",$,!1),F===null){let O="webgl2";if(F=mt(O,T),F===null)throw mt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Q()}catch(T){throw t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",$,!1),Xe("WebGLRenderer: "+T.message),T}function Q(){gt=new pT(F),gt.init(),ue=new J1(F,gt),We=new nT(F,gt,e,ue),ve=new $1(F,gt),We.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),H=F.createFramebuffer(),I=F.createFramebuffer(),V=F.createFramebuffer(),vt=new _T(F),Ie=new N1,fe=new Z1(F,gt,ve,Ie,We,ue,vt),A=new dT(C),M=new xS(F),ge=new tT(F,M),G=new mT(F,M,vt,ge),le=new xT(F,G,M,ge,vt),re=new vT(F,We,fe),ne=new rT(Ie),oe=new D1(C,A,gt,We,ge,ne),me=new ew(C,Ie),de=new U1,Y=new H1(gt),L=new eT(C,A,ve,le,p,l),pe=new Y1(C,le,We),he=new tw(F,vt,We,ve),te=new iT(F,gt,vt),xe=new gT(F,gt,vt),vt.programs=oe.programs,C.capabilities=We,C.extensions=gt,C.properties=Ie,C.renderLists=de,C.shadowMap=pe,C.state=ve,C.info=vt}v!==Tn&&(P=new ST(v,t.width,t.height,a,n,s));let z=new Ip(C,F);this.xr=z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(T){T!==void 0&&(_e=T,this.setSize(Se,Te,!1))},this.getSize=function(T){return T.set(Se,Te)},this.setSize=function(T,O,Z=!0){if(z.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=T,Te=O,t.width=Math.floor(T*_e),t.height=Math.floor(O*_e),Z===!0&&(t.style.width=T+"px",t.style.height=O+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(Se*_e,Te*_e).floor()},this.setDrawingBufferSize=function(T,O,Z){Se=T,Te=O,_e=Z,t.width=Math.floor(T*Z),t.height=Math.floor(O*Z),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(v===Tn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ee)},this.getViewport=function(T){return T.copy(Ce)},this.setViewport=function(T,O,Z,k){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,O,Z,k),ve.viewport(ee.copy(Ce).multiplyScalar(Ft()).round())},this.getScissor=function(T){return T.copy(qe)},this.setScissor=function(T,O,Z,k){T.isVector4?qe.set(T.x,T.y,T.z,T.w):qe.set(T,O,Z,k),ve.scissor(ye.copy(qe).multiplyScalar(Ft()).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(T){ve.setScissorTest(Oe=T)},this.setOpaqueSort=function(T){Le=T},this.setTransparentSort=function(T){pt=T},this.getClearColor=function(T){return T.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,Z=!0){let k=0;if(T){let J=!1;if(ie!==null){let Me=ie.texture.format;J=m.has(Me)}if(J){let Me=ie.texture.type,Re=g.has(Me),be=L.getClearColor(),Ee=L.getClearAlpha(),Fe=be.r,Je=be.g,ft=be.b;Re?(x[0]=Fe,x[1]=Je,x[2]=ft,x[3]=Ee,F.clearBufferuiv(F.COLOR,0,x)):(E[0]=Fe,E[1]=Je,E[2]=ft,E[3]=Ee,F.clearBufferiv(F.COLOR,0,E))}else k|=F.COLOR_BUFFER_BIT}O&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",$,!1),L.dispose(),de.dispose(),Y.dispose(),fe.dispose(),Ie.dispose(),A.dispose(),le.dispose(),G.dispose(),ge.dispose(),he.dispose(),oe.dispose(),z.dispose(),z.removeEventListener("sessionstart",tt),z.removeEventListener("sessionend",st),It.stop()};function W(T){T.preventDefault(),ul("WebGLRenderer: Context Lost."),N=!0}function se(){ul("WebGLRenderer: Context Restored."),N=!1;let T=vt.autoReset,O=pe.enabled,Z=pe.autoUpdate,k=pe.needsUpdate,J=pe.type;Q(),vt.autoReset=T,pe.enabled=O,pe.autoUpdate=Z,pe.needsUpdate=k,pe.type=J}function $(T){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ae(T){let O=T.target;O.removeEventListener("dispose",ae),He(O)}function He(T){ze(T),Ie.remove(T)}function ze(T){let O=Ie.get(T).programs;O!==void 0&&(O.forEach(function(Z){oe.releaseProgram(Z)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Z,k,J,Me){O===null&&(O=Qe);let Re=J.isMesh&&J.matrixWorld.determinantAffine()<0,be=Hi(T,O,Z,k,J);ve.setMaterial(k,Re);let Ee=Z.index,Fe=1;if(k.wireframe===!0){if(Ee=G.getWireframeAttribute(Z),Ee===void 0)return;Fe=2}let Je=Z.drawRange,ft=Z.attributes.position,De=Je.start*Fe,dt=(Je.start+Je.count)*Fe;Me!==null&&(De=Math.max(De,Me.start*Fe),dt=Math.min(dt,(Me.start+Me.count)*Fe)),Ee!==null?(De=Math.max(De,0),dt=Math.min(dt,Ee.count)):ft!=null&&(De=Math.max(De,0),dt=Math.min(dt,ft.count));let ii=dt-De;if(ii<0||ii===1/0)return;ge.setup(J,k,be,Z,Ee);let Dt,Rt=te;if(Ee!==null&&(Dt=M.get(Ee),Rt=xe,Rt.setIndex(Dt)),J.isMesh)k.wireframe===!0?(ve.setLineWidth(k.wireframeLinewidth*Ft()),Rt.setMode(F.LINES)):Rt.setMode(F.TRIANGLES);else if(J.isLine){let Ai=k.linewidth;Ai===void 0&&(Ai=1),ve.setLineWidth(Ai*Ft()),J.isLineSegments?Rt.setMode(F.LINES):J.isLineLoop?Rt.setMode(F.LINE_LOOP):Rt.setMode(F.LINE_STRIP)}else J.isPoints?Rt.setMode(F.POINTS):J.isSprite&&Rt.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Ai=J._multiDrawStarts,Ne=J._multiDrawCounts,Gi=J._multiDrawCount,bt=Ee?M.get(Ee).bytesPerElement:1,vs=Ie.get(k).currentProgram.getUniforms();for(let Ci=0;Ci<Gi;Ci++)vs.setValue(F,"_gl_DrawID",Ci),Rt.render(Ai[Ci]/bt,Ne[Ci])}else if(J.isInstancedMesh)Rt.renderInstances(De,ii,J.count);else if(Z.isInstancedBufferGeometry){let Ai=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ne=Math.min(Z.instanceCount,Ai);Rt.renderInstances(De,ii,Ne)}else Rt.render(De,ii)};function rt(T,O,Z,k){D!==null&&T.isNodeMaterial&&D.setObject(k,T),ut===!0&&ne.setState(T,Z,!1),T.transparent===!0&&T.side===sr&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Vi(T,O,k),T.side=fs,T.needsUpdate=!0,Vi(T,O,k),T.side=sr):Vi(T,O,k)}this.compile=function(T,O,Z=null){Z===null&&(Z=T),D!==null&&D.renderStart(T,O,Z),w=Y.get(Z),w.init(O),S.push(w),Z.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),T!==Z&&T.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),j=this.localClippingEnabled,ut=ne.init(this.clippingPlanes,j),ut===!0&&ne.setGlobalState(this.clippingPlanes,O),D!==null&&pe.render(w.state.shadowsArray,Z,O);let k=new Set;return T.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Me=J.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){let be=Me[Re];rt(be,Z,O,J),k.add(be)}else rt(Me,Z,O,J),k.add(Me)}),w=S.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(T,O,Z=null){let k=this.compile(T,O,Z);return new Promise(J=>{function Me(){if(k.forEach(function(Re){let Ee=Ie.get(Re).currentProgram;(Ee===void 0||Ee.isReady())&&k.delete(Re)}),k.size===0){J(T);return}setTimeout(Me,10)}gt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Tt=null;function ke(T){Tt&&Tt(T)}function tt(){It.stop()}function st(){It.start()}let It=new V_;It.setAnimationLoop(ke),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(T){Tt=T,z.setAnimationLoop(T),T===null?It.stop():It.start()},z.addEventListener("sessionstart",tt),z.addEventListener("sessionend",st),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(T,O);let Z=z.enabled===!0&&z.isPresenting===!0,k=P!==null&&(ie===null||Z)&&P.begin(C,ie);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(O),O=z.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,O,ie),w=Y.get(T,S.length),w.init(O),w.state.textureUnits=fe.getTextureUnits(),S.push(w),Ye.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?ct.setFromArrayCamera(O):Ue.setFromProjectionMatrix(Ye,Dn,O.reversedDepth),j=this.localClippingEnabled,ut=ne.init(this.clippingPlanes,j),b=de.get(T,_.length),b.init(),_.push(b),this.info.render.frame++,z.enabled===!0&&z.isPresenting===!0){let Re=C.xr.getDepthSensingMesh();Re!==null&&St(Re,O,-1/0,C.sortObjects)}St(T,O,0,C.sortObjects),b.finish(),D!==null&&D.updateLights(w.state.lightsArray),C.sortObjects===!0&&b.sort(Le,pt),Ct=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ct&&L.addToRenderList(b,T),this.info.autoReset===!0&&this.info.reset(),ut===!0&&ne.beginShadows();let J=w.state.shadowsArray;if(pe.render(J,T,O),ut===!0&&ne.endShadows(),(k&&P.hasRenderPass())===!1){let Re=b.opaque,be=b.transmissive;if(w.setupLights(),O.isArrayCamera){let Ee=O.cameras;if(be.length>0)for(let Fe=0,Je=Ee.length;Fe<Je;Fe++){let ft=Ee[Fe];vi(Re,be,T,ft)}Ct&&L.render(T);for(let Fe=0,Je=Ee.length;Fe<Je;Fe++){let ft=Ee[Fe];ui(b,T,ft,ft.viewport)}}else be.length>0&&vi(Re,be,T,O),Ct&&L.render(T),ui(b,T,O)}ie!==null&&U===0&&(fe.updateMultisampleRenderTarget(ie),fe.updateRenderTargetMipmap(ie)),k&&P.end(C),T.isScene===!0&&T.onAfterRender(C,T,O),ge.resetDefaultState(),q=-1,R=null,S.pop(),S.length>0?(w=S[S.length-1],fe.setTextureUnits(w.state.textureUnits),ut===!0&&ne.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,D!==null&&D.renderEnd()};function St(T,O,Z,k){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let Re=O.isArrayCamera?ct:Ue;if(!T.frustumCulled||T.intersectsFrustum(Re)){k&&yt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ye);let be=le.update(T),Ee=T.material;Ee.visible&&b.push(T,be,Ee,Z,yt.z,null,O)}}else if(T.isMesh||T.isLine||T.isPoints){let Re=O.isArrayCamera?ct:Ue;if(!T.frustumCulled||T.intersectsFrustum(Re)){let be=le.update(T),Ee=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),yt.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),yt.copy(be.boundingSphere.center)),yt.applyMatrix4(T.matrixWorld).applyMatrix4(Ye)),Array.isArray(Ee)){let Fe=be.groups;for(let Je=0,ft=Fe.length;Je<ft;Je++){let De=Fe[Je],dt=Ee[De.materialIndex];dt&&dt.visible&&b.push(T,be,dt,Z,yt.z,De,O)}}else Ee.visible&&b.push(T,be,Ee,Z,yt.z,null,O)}}}let Me=T.children;for(let Re=0,be=Me.length;Re<be;Re++)St(Me[Re],O,Z,k)}function ui(T,O,Z,k){let{opaque:J,transmissive:Me,transparent:Re}=T;w.setupLightsView(Z),ut===!0&&ne.setGlobalState(C.clippingPlanes,Z),k&&ve.viewport(ee.copy(k)),J.length>0&&Bt(J,O,Z),Me.length>0&&Bt(Me,O,Z),Re.length>0&&Bt(Re,O,Z),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function vi(T,O,Z,k){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let De=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new li(1,1,{generateMipmaps:!0,type:De?Ei:Tn,minFilter:Nr,samples:Math.max(4,We.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let Me=w.state.transmissionRenderTarget[k.id],Re=k.viewport||ee;Me.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);let be=C.getRenderTarget(),Ee=C.getActiveCubeFace(),Fe=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(K),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),Ct&&L.render(Z);let Je=C.toneMapping;C.toneMapping=or;let ft=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),ut===!0&&ne.setGlobalState(C.clippingPlanes,k),Bt(T,Z,k),fe.updateMultisampleRenderTarget(Me),fe.updateRenderTargetMipmap(Me),gt.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let dt=0,ii=O.length;dt<ii;dt++){let Dt=O[dt],{object:Rt,geometry:Ai,material:Ne,group:Gi}=Dt;if(Ne.side===sr&&Rt.layers.test(k.layers)){let bt=Ne.side;Ne.side=tn,Ne.needsUpdate=!0,zt(Rt,Z,k,Ai,Ne,Gi),Ne.side=bt,Ne.needsUpdate=!0,De=!0}}De===!0&&(fe.updateMultisampleRenderTarget(Me),fe.updateRenderTargetMipmap(Me))}C.setRenderTarget(be,Ee,Fe),C.setClearColor(K,ce),ft!==void 0&&(k.viewport=ft),C.toneMapping=Je}function Bt(T,O,Z){let k=O.isScene===!0?O.overrideMaterial:null;for(let J=0,Me=T.length;J<Me;J++){let Re=T[J],{object:be,geometry:Ee,group:Fe}=Re,Je=Re.material;Je.allowOverride===!0&&k!==null&&(Je=k),be.layers.test(Z.layers)&&zt(be,O,Z,Ee,Je,Fe)}}function zt(T,O,Z,k,J,Me){D!==null&&J.isNodeMaterial&&D.setObject(T,J),T.onBeforeRender(C,O,Z,k,J,Me),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(C,O,Z,k,T,Me),J.transparent===!0&&J.side===sr&&J.forceSinglePass===!1?(J.side=tn,J.needsUpdate=!0,C.renderBufferDirect(Z,O,k,J,T,Me),J.side=fs,J.needsUpdate=!0,C.renderBufferDirect(Z,O,k,J,T,Me),J.side=sr):C.renderBufferDirect(Z,O,k,J,T,Me),T.onAfterRender(C,O,Z,k,J,Me)}function ei(T){let O=0;for(let Z of T)Z.texture!==null&&O++;return O}function Vi(T,O,Z){O.isScene!==!0&&(O=Qe);let k=Ie.get(T),J=w.state.lights,Me=w.state.shadowsArray,Re=J.state.version,be=oe.getParameters(T,J.state,Me,O,Z,w.state.lightProbeGridArray),Ee=oe.getProgramCacheKey(be),Fe=k.programs;k.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;let Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;k.envMap=A.get(T.envMap||k.environment,Je),k.envMapRotation=k.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",ae),Fe=new Map,k.programs=Fe,k.programVariants=new Map);let ft=Fe.get(Ee);if(ft!==void 0){if(k.currentProgram===ft&&k.lightsStateVersion===Re)return Lt(T,be),ft}else be.uniforms=oe.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Z,be),T.onBeforeCompile(be,C),ft=oe.acquireProgram(be,Ee),Fe.set(Ee,ft),k.uniforms=be.uniforms;let De=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=ne.uniform),Lt(T,be),k.needsLights=_s(T),k.lightsStateVersion=Re,k.needsLights&&(De.ambientLightColor.value=J.state.ambient,De.lightProbe.value=J.state.probe,De.sunLights.value=J.state.sun,De.sunLightShadows.value=J.state.sunShadow,De.directionalLights.value=J.state.directional,De.directionalLightShadows.value=J.state.directionalShadow,De.spotLights.value=J.state.spot,De.spotLightShadows.value=J.state.spotShadow,De.rectAreaLights.value=J.state.rectArea,De.ltc_1.value=J.state.rectAreaLTC1,De.ltc_2.value=J.state.rectAreaLTC2,De.pointLights.value=J.state.point,De.pointLightShadows.value=J.state.pointShadow,De.hemisphereLights.value=J.state.hemi,De.sunShadowMatrix.value=J.state.sunShadowMatrix,De.sunShadowCascade.value=J.state.sunShadowCascade,De.directionalShadowMatrix.value=J.state.directionalShadowMatrix,De.spotLightMatrix.value=J.state.spotLightMatrix,De.spotLightMap.value=J.state.spotLightMap,De.pointShadowMatrix.value=J.state.pointShadowMatrix),k.numLightProbeGrids=ei(w.state.lightProbeGridArray),k.currentProgram=ft,k.uniformsList=null,ft}function On(T,O,Z,k,J){let Me=Ie.get(T),Re=Me.currentProgram.id+","+k+","+J,be=Me.programVariants.get(Re);return be===void 0?(be=Vi(T,O,Z),Me.programVariants.set(Re,be)):(Me.currentProgram=be,Me.uniformsList=null,Me.outputColorSpace=k,Me.toneMapping=J),be}function Zt(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=ha.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Lt(T,O){let Z=Ie.get(T);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function Hi(T,O,Z,k,J){O.isScene!==!0&&(O=Qe),fe.resetTextureUnits();let Me=O.fog,Re=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,be=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:at.workingColorSpace,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Fe=A.get(k.envMap||Re,Ee),Je=k.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ft=!!Z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),De=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,ii=!!Z.morphAttributes.color,Dt=or;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Dt=C.toneMapping);let Rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ai=Rt!==void 0?Rt.length:0,Ne=Ie.get(k),Gi=w.state.lights;if(ut===!0&&(j===!0||T!==R)){let Gt=T===R&&k.id===q;ne.setState(k,T,Gt)}let bt=!1,vs=!1;k.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==Gi.state.version||J.isBatchedMesh&&Ne.batching===!1||!J.isBatchedMesh&&Ne.batching===!0||J.isBatchedMesh&&Ne.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Ne.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Ne.instancing===!1||!J.isInstancedMesh&&Ne.instancing===!0||J.isSkinnedMesh&&Ne.skinning===!1||!J.isSkinnedMesh&&Ne.skinning===!0||J.isInstancedMesh&&Ne.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ne.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ne.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ne.instancingMorph===!1&&J.morphTexture!==null||Ne.envMap!==Fe||k.fog===!0&&Ne.fog!==Me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ne.numPlanes||Ne.numIntersection!==ne.numIntersection)||Ne.vertexAlphas!==Je||Ne.vertexTangents!==ft||Ne.morphTargets!==De||Ne.morphNormals!==dt||Ne.morphColors!==ii||Ne.morphTargetsCount!==Ai||Ne.numLightProbeGrids!==ei(w.state.lightProbeGridArray)?bt=!0:(Ne.outputColorSpace!==be||Ne.toneMapping!==Dt)&&(vs=!0):(bt=!0,Ne.__version=k.version);let Ci=Ne.currentProgram;(bt===!0||vs===!0)&&(Ci=vs===!0?On(k,O,J,be,Dt):Vi(k,O,J),D&&k.isNodeMaterial&&D.onUpdateProgram(k,Ci,Ne));let Ql=!1,kr=!1,xs=!1,xt=Ci.getUniforms(),xi=Ne.uniforms;if(ve.useProgram(Ci.program)&&(Ql=!0,kr=!0,xs=!0),k.id!==q&&(q=k.id,kr=!0),Ql||R!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xt.setValue(F,"projectionMatrix",T.projectionMatrix),xt.setValue(F,"viewMatrix",T.matrixWorldInverse);let fi=xt.map.cameraPosition;fi!==void 0&&fi.setValue(F,Ht.setFromMatrixPosition(T.matrixWorld)),We.logarithmicDepthBuffer&&xt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,kr=!0,xs=!0)}if(Ne.needsLights&&(Gi.state.sunShadowMap.length>0&&xt.setValue(F,"sunShadowMap",Gi.state.sunShadowMap,fe),Gi.state.directionalShadowMap.length>0&&xt.setValue(F,"directionalShadowMap",Gi.state.directionalShadowMap,fe),Gi.state.spotShadowMap.length>0&&xt.setValue(F,"spotShadowMap",Gi.state.spotShadowMap,fe),Gi.state.pointShadowMap.length>0&&xt.setValue(F,"pointShadowMap",Gi.state.pointShadowMap,fe)),J.isSkinnedMesh){xt.setOptional(F,J,"bindMatrix"),xt.setOptional(F,J,"bindMatrixInverse");let Gt=J.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),xt.setValue(F,"boneTexture",Gt.boneTexture,fe))}J.isBatchedMesh&&(xt.setOptional(F,J,"batchingTexture"),xt.setValue(F,"batchingTexture",J._matricesTexture,fe),xt.setOptional(F,J,"batchingIdTexture"),xt.setValue(F,"batchingIdTexture",J._indirectTexture,fe),xt.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&xt.setValue(F,"batchingColorTexture",J._colorsTexture,fe));let Fn=Z.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&re.update(J,Z,Ci),(kr||Ne.receiveShadow!==J.receiveShadow)&&(Ne.receiveShadow=J.receiveShadow,xt.setValue(F,"receiveShadow",J.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(xi.envMapIntensity.value=O.environmentIntensity),xi.dfgLUT!==void 0&&(xi.dfgLUT.value=nw()),kr){if(xt.setValue(F,"toneMappingExposure",C.toneMappingExposure),Ne.needsLights&&zr(xi,xs),Me&&k.fog===!0&&me.refreshFogUniforms(xi,Me),me.refreshMaterialUniforms(xi,k,_e,Te,w.state.transmissionRenderTarget[T.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let Gt=y,fi=0;for(let cr of w.state.lightProbeGridArray)cr.texture!==null&&(Gt.textures[fi]=cr.texture,Gt.min[fi]=cr.boundingBox.min,Gt.max[fi]=cr.boundingBox.max,Gt.resolution[fi]=cr.resolution,fi++);for(let cr in Gt)Gt[cr].length=fi;xi.probesSH.value=Gt.textures,xi.probesMin.value=Gt.min,xi.probesMax.value=Gt.max,xi.probesResolution.value=Gt.resolution}ha.upload(F,Zt(Ne),xi,fe)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ha.upload(F,Zt(Ne),xi,fe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xt.setValue(F,"center",J.center),xt.setValue(F,"modelViewMatrix",J.modelViewMatrix),xt.setValue(F,"normalMatrix",J.normalMatrix),xt.setValue(F,"modelMatrix",J.matrixWorld),k.uniformsGroups!==void 0){let Gt=k.uniformsGroups;for(let fi=0,cr=Gt.length;fi<cr;fi++){let Gp=Gt[fi];he.update(Gp,Ci),he.bind(Gp,Ci)}}return Ci}function zr(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function _s(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(T,O,Z){let k=Ie.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ie.get(T.texture).__webglTexture=O,Ie.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let Z=Ie.get(T);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,Z=0){ie=T,X=O,U=Z;let k=null,J=!1,Me=!1;if(T){let be=Ie.get(T);if(be.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(F.FRAMEBUFFER,be.__webglFramebuffer),ee.copy(T.viewport),ye.copy(T.scissor),we=T.scissorTest,ve.viewport(ee),ve.scissor(ye),ve.setScissorTest(we),q=-1;return}else if(be.__webglFramebuffer===void 0)fe.setupRenderTarget(T);else if(be.__hasExternalTextures)fe.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Je=T.depthTexture;if(be.__boundDepthTexture!==Je){if(Je!==null&&Ie.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(T)}}let Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Me=!0);let Fe=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?k=Fe[O][Z]:k=Fe[O],J=!0):T.samples>0&&fe.useMultisampledRTT(T)===!1?k=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?k=Fe[Z]:k=Fe,ee.copy(T.viewport),ye.copy(T.scissor),we=T.scissorTest}else ee.copy(Ce).multiplyScalar(_e).floor(),ye.copy(qe).multiplyScalar(_e).floor(),we=Oe;if(Z!==0&&(k=H),ve.bindFramebuffer(F.FRAMEBUFFER,k)&&ve.drawBuffers(T,k),ve.viewport(ee),ve.scissor(ye),ve.setScissorTest(we),J){let be=Ie.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,Z)}else if(Me){let be=O;for(let Ee=0;Ee<T.textures.length;Ee++){let Fe=Ie.get(T.textures[Ee]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ee,Fe.__webglTexture,Z,be)}}else if(T!==null&&Z!==0){let be=Ie.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,Z)}q=-1};function Un(T){let O=Ie.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=We.textureFormatReadable(T.format),O.__typeReadable=We.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,Z,k,J,Me,Re,be=0){if(!(T&&T.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ee=Ee[Re],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){ve.bindFramebuffer(F.FRAMEBUFFER,Ee);try{let Fe=T.textures[be],Je=Fe.format,ft=Fe.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be);let De=Un(Fe);if(De.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-k&&Z>=0&&Z<=T.height-J&&F.readPixels(O,Z,k,J,ue.convert(Je),ue.convert(ft),Me)}finally{let Fe=ie!==null?Ie.get(ie).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,O,Z,k,J,Me,Re,be=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ee=Ee[Re],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(O>=0&&O<=T.width-k&&Z>=0&&Z<=T.height-J){ve.bindFramebuffer(F.FRAMEBUFFER,Ee);let Fe=T.textures[be],Je=Fe.format,ft=Fe.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be);let De=Un(Fe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),F.readPixels(O,Z,k,J,ue.convert(Je),ue.convert(ft),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let ii=ie!==null?Ie.get(ie).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,ii);let Dt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await u_(F,Dt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(dt),F.deleteSync(Dt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,Z=0){let k=Math.pow(2,-Z),J=Math.floor(T.image.width*k),Me=Math.floor(T.image.height*k),Re=O!==null?O.x:0,be=O!==null?O.y:0;fe.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Re,be,J,Me),ve.unbindTexture()},this.copyTextureToTexture=function(T,O,Z=null,k=null,J=0,Me=0){let Re,be,Ee,Fe,Je,ft,De,dt,ii,Dt=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(Z!==null)Re=Z.max.x-Z.min.x,be=Z.max.y-Z.min.y,Ee=Z.isBox3?Z.max.z-Z.min.z:1,Fe=Z.min.x,Je=Z.min.y,ft=Z.isBox3?Z.min.z:0;else{let xt=Math.pow(2,-J);Re=Math.floor(Dt.width*xt),be=Math.floor(Dt.height*xt),T.isDataArrayTexture?Ee=Dt.depth:T.isData3DTexture?Ee=Math.floor(Dt.depth*xt):Ee=1,Fe=0,Je=0,ft=0}k!==null?(De=k.x,dt=k.y,ii=k.z):(De=0,dt=0,ii=0);let Rt=ue.convert(O.format),Ai=ue.convert(O.type),Ne;O.isData3DTexture?(fe.setTexture3D(O,0),Ne=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(fe.setTexture2DArray(O,0),Ne=F.TEXTURE_2D_ARRAY):(fe.setTexture2D(O,0),Ne=F.TEXTURE_2D),ve.activeTexture(F.TEXTURE0),ve.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),ve.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ve.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let Gi=ve.getParameter(F.UNPACK_ROW_LENGTH),bt=ve.getParameter(F.UNPACK_IMAGE_HEIGHT),vs=ve.getParameter(F.UNPACK_SKIP_PIXELS),Ci=ve.getParameter(F.UNPACK_SKIP_ROWS),Ql=ve.getParameter(F.UNPACK_SKIP_IMAGES);ve.pixelStorei(F.UNPACK_ROW_LENGTH,Dt.width),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Dt.height),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),ve.pixelStorei(F.UNPACK_SKIP_ROWS,Je),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,ft);let kr=T.isDataArrayTexture||T.isData3DTexture,xs=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let xt=Ie.get(T),xi=Ie.get(O),Fn=Ie.get(xt.__renderTarget),Gt=Ie.get(xi.__renderTarget);ve.bindFramebuffer(F.READ_FRAMEBUFFER,Fn.__webglFramebuffer),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let fi=0;fi<Ee;fi++)kr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.get(T).__webglTexture,J,ft+fi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.get(O).__webglTexture,Me,ii+fi)),F.blitFramebuffer(Fe,Je,Fe+Re,Je+be,De,dt,De+Re,dt+be,F.DEPTH_BUFFER_BIT,F.NEAREST);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(J!==0||T.isRenderTargetTexture||Ie.has(T)){let xt=Ie.get(T),xi=Ie.get(O);ve.bindFramebuffer(F.READ_FRAMEBUFFER,I),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let Fn=0;Fn<Ee;Fn++)kr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xt.__webglTexture,J,ft+Fn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xt.__webglTexture,J),xs?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xi.__webglTexture,Me,ii+Fn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xi.__webglTexture,Me),J!==0?F.blitFramebuffer(Fe,Je,Fe+Re,Je+be,De,dt,De+Re,dt+be,F.COLOR_BUFFER_BIT,F.NEAREST):xs?F.copyTexSubImage3D(Ne,Me,De,dt,ii+Fn,Fe,Je,Re,be):F.copyTexSubImage2D(Ne,Me,De,dt,Fe,Je,Re,be);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else xs?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Ne,Me,De,dt,ii,Re,be,Ee,Rt,Ai,Dt.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Ne,Me,De,dt,ii,Re,be,Ee,Rt,Dt.data):F.texSubImage3D(Ne,Me,De,dt,ii,Re,be,Ee,Rt,Ai,Dt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,De,dt,Re,be,Rt,Ai,Dt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,De,dt,Dt.width,Dt.height,Rt,Dt.data):F.texSubImage2D(F.TEXTURE_2D,Me,De,dt,Re,be,Rt,Ai,Dt);ve.pixelStorei(F.UNPACK_ROW_LENGTH,Gi),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,vs),ve.pixelStorei(F.UNPACK_SKIP_ROWS,Ci),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,Ql),Me===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&F.generateMipmap(Ne),ve.unbindTexture()},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?fe.setTextureCube(T,0):T.isData3DTexture?fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?fe.setTexture2DArray(T,0):fe.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){X=0,U=0,ie=null,ve.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var fa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},sw=new ra(-1,1,1,-1,0,1),Lp=class extends Ti{constructor(){super(),this.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gi([0,2,0,0,2,0],2))}},ow=new Lp,ps=class{constructor(e){this._mesh=new wi(ow,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var da=class extends wn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fr.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ps(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xl=class extends wn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Vu=class extends wn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Hu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ve);this._width=i.width,this._height=i.height,t=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new da(fa),this.copyPass.material.blending=Dr,this.timer=new Tl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xl!==void 0&&(o instanceof Xl?i=!0:o instanceof Vu&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gu=class extends wn{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ze}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}};var Q_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var pa=class r extends wn{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Ve(e.x,e.y):new Ve(256,256),this.clearColor=new Ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new li(s,o,{type:Ei,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new li(s,o,{type:Ei,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new li(s,o,{type:Ei,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}let a=Q_;this.highPassUniforms=Fr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ve(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fr.clone(fa.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader,premultipliedAlpha:!0,blending:bn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ze,this._oldClearAlpha=1,this._basic=new Zo,this._fsQuad=new ps(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Ve(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],s=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),s.push(c)}return new Vt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ve(.5,.5)},direction:{value:new Ve(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};pa.BlurDirectionX=new Ve(1,0);pa.BlurDirectionY=new Ve(0,1);var ql={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Wu=class extends wn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Fr.clone(ql.uniforms),this.material=new ta({name:ql.name,uniforms:this.uniforms,vertexShader:ql.vertexShader,fragmentShader:ql.fragmentShader}),this._fsQuad=new ps(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Rl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ys?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ll?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Dl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Il&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Yn=Math.PI/180,j_=9.62*Yn,ev=-20.08*Yn,tv=24*Yn,iv=5764/1737400*2.2,nv=4e-4,aw=r=>Math.min(1,Math.max(0,r)),ms=(r,e,t)=>{let i=aw((t-r)/(e-r));return i*i*(3-2*i)},Br=(r,e,t)=>r+(e-r)*t;function rv(){try{let r=document.createElement("canvas");return!!(r.getContext("webgl2")||r.getContext("webgl"))}catch{return!1}}function lw(r,e,t=1){return new B(Math.cos(e)*Math.cos(r)*t,Math.sin(r)*t,-Math.sin(e)*Math.cos(r)*t)}var cw=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  varying vec2 vUv; varying vec3 vN; varying vec3 vT; varying vec3 vB; varying vec3 vWP;
  void main(){
    vUv = uv;
    vec3 d = normalize(position);
    vec3 t = normalize(cross(vec3(0.0,1.0,0.0), d) + vec3(1e-6,0.0,0.0));
    vec3 b = cross(d, t);
    mat3 m = mat3(modelMatrix);
    vN = m*d; vT = m*t; vB = m*b;
    vec4 wp = modelMatrix * vec4(position,1.0); vWP = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
    #include <logdepthbuf_vertex>
  }`,hw=`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  uniform sampler2D uMap; uniform sampler2D uNormal; uniform sampler2D uShadow;
  uniform float uNormalStrength; uniform float uShadowAmt; uniform float uExposure; uniform float uEarthshine;
  uniform vec3 uSunDir; uniform vec3 uOrbPos[2]; uniform vec3 uOrbCol[2]; uniform float uOrbI[2]; uniform float uOrbR;
  varying vec2 vUv; varying vec3 vN; varying vec3 vT; varying vec3 vB; varying vec3 vWP;
  void main(){
    #include <logdepthbuf_fragment>
    vec3 albedo = texture2D(uMap, vUv).rgb;
    vec3 tn = texture2D(uNormal, vUv).xyz*2.0-1.0; tn.xy *= uNormalStrength;
    vec3 Ng = normalize(vN);
    vec3 N = normalize(normalize(vT)*tn.x + normalize(vB)*tn.y + Ng*tn.z);
    vec3 V = normalize(cameraPosition - vWP);
    float ci = dot(N, uSunDir);
    float ce = max(dot(Ng, V), 0.0);
    float lam = max(ci, 0.0);
    // r\xE9flectance lunaire : m\xE9lange Lambert / Lommel-Seeliger (disque lunaire \xAB plat \xBB et lumineux)
    float ls = 2.0 * lam / (lam + ce + 0.05);
    float shade = mix(lam, min(ls, 1.2), 0.5);
    shade *= smoothstep(-0.04, 0.05, dot(Ng, uSunDir));
    shade *= mix(1.0, texture2D(uShadow, vUv).r, uShadowAmt);
    vec3 col = albedo * shade * uExposure;
    for (int i = 0; i < 2; i++) {
      vec3 L = uOrbPos[i] - vWP; float d = length(L);
      float k = max(dot(N, L / d), 0.0) * uOrbI[i] / (1.0 + d*d/(uOrbR*uOrbR));
      col += albedo * uOrbCol[i] * k;
    }
    col += albedo * vec3(0.5,0.62,0.9) * uEarthshine;
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,uw=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  varying vec2 vUv; varying vec3 vN; varying vec3 vWP;
  void main(){ vUv = uv; vN = normalize(mat3(modelMatrix)*normal);
    vec4 wp = modelMatrix*vec4(position,1.0); vWP = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp;
    #include <logdepthbuf_vertex>
  }`,fw=`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  uniform sampler2D uMap; uniform vec3 uSunDir; uniform float uOpacity;
  varying vec2 vUv; varying vec3 vN; varying vec3 vWP;
  void main(){
    #include <logdepthbuf_fragment>
    vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vWP);
    vec3 alb = texture2D(uMap, vUv).rgb;
    float l = dot(N, uSunDir);
    float day = smoothstep(-0.08, 0.25, l);
    vec3 R = reflect(-uSunDir, N);
    float ocean = smoothstep(0.12, 0.02, alb.g - alb.b + 0.06);
    float spec = pow(max(dot(R, V), 0.0), 60.0) * ocean * 0.6;
    float fres = pow(1.0 - max(dot(N, V), 0.0), 2.6);
    vec3 atm = vec3(0.32,0.58,1.0) * fres * (0.08 + 1.4*smoothstep(-0.25, 0.6, l));
    vec3 col = alb * max(l,0.0) * 2.4 * day + vec3(spec) + atm;
    gl_FragColor = vec4(col * uOpacity, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,dw=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  attribute float aSize; attribute vec3 aColor; attribute float aPhase;
  uniform float uTime; uniform float uPR; varying vec3 vC;
  void main(){
    vC = aColor * (0.7 + 0.3*sin(uTime*(0.6+aPhase) + aPhase*30.0));
    vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv;
    gl_PointSize = aSize * uPR;
    #include <logdepthbuf_vertex>
  }`,pw=`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  uniform float uBright; varying vec3 vC;
  void main(){
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5); float a = pow(smoothstep(0.5, 0.0, d), 1.8);
    gl_FragColor = vec4(vC * a * uBright, 1.0);
  }`,mw=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  attribute vec3 aStart; attribute vec3 aTarget; attribute vec4 aRand; attribute vec3 aColor;
  uniform float uProg; uniform float uTime; uniform float uDissolve; uniform float uPR; uniform float uSize; uniform float uSpread;
  uniform vec3 uUp; uniform vec3 uRight; uniform vec3 uFwd;
  varying vec3 vC; varying float vA;
  void main(){
    float t = clamp((uProg - aRand.x*0.45) / 0.55, 0.0, 1.0);
    float e = 1.0 - pow(1.0 - t, 4.0);
    vec3 sw = (uRight*sin(aRand.y*6.2832 + t*7.0) + uUp*cos(aRand.z*6.2832 + t*6.0) + uFwd*sin(aRand.w*6.2832 + t*5.0)) * uSpread * sin(t*3.14159);
    vec3 p = mix(aStart, aTarget, e) + sw;
    p += uUp * sin(uTime*1.3 + aRand.y*20.0) * uSpread * 0.01 * e;
    p += (uUp*(0.6 + aRand.x) + uRight*(aRand.y - 0.5)*1.2 + uFwd*(aRand.z - 0.5)) * uSpread * 2.5 * uDissolve * (0.4 + aRand.w);
    vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
    float tw = 0.7 + 0.3*sin(uTime*3.0 + aRand.w*40.0);
    gl_PointSize = uSize * uPR * (0.6 + aRand.z*0.8) * step(0.0001, t);
    vC = aColor * mix(3.0, tw * 0.95, e);
    vA = smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.0, 1.0, uDissolve));
    #include <logdepthbuf_vertex>
  }`,gw=`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  varying vec3 vC; varying float vA;
  void main(){
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d);
    gl_FragColor = vec4(vC * a * vA, 1.0);
  }`,_w=`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  uniform float uA; uniform vec3 uCol; varying vec2 vUv;
  void main(){
    #include <logdepthbuf_fragment>
    float r = length(vUv - 0.5) * 2.0;
    float band = smoothstep(0.80, 0.97, r) * smoothstep(1.0, 0.97, r);
    gl_FragColor = vec4(uCol * band * uA, 1.0);
  }`,vw=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
    #include <logdepthbuf_vertex>
  }`,xw={uniforms:{tDiffuse:{value:null},uZoom:{value:0},uFlash:{value:0},uVig:{value:1},uAspect:{value:1},uFade:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uZoom; uniform float uFlash; uniform float uVig; uniform float uAspect; uniform float uFade;
    varying vec2 vUv;
    void main(){
      vec2 dir = vUv - 0.5;
      vec3 col;
      if (uZoom > 0.001) { col = vec3(0.0); float tot = 0.0;
        for (int i = 0; i < 14; i++) { float t = float(i)/13.0; float w = 1.0 - t*0.6;
          col += texture2D(tDiffuse, vUv - dir*uZoom*t).rgb * w; tot += w; }
        col /= tot;
      } else { col = texture2D(tDiffuse, vUv).rgb; }
      float ca = 0.0012 + uZoom*0.03;
      col.r = mix(col.r, texture2D(tDiffuse, vUv + dir*ca).r, 0.7);
      col.b = mix(col.b, texture2D(tDiffuse, vUv - dir*ca).b, 0.7);
      float v = smoothstep(1.05, 0.25, length(dir*vec2(uAspect, 1.0)) * 1.15);
      col *= mix(1.0, v, uVig);
      col += vec3(1.0, 0.93, 0.8) * uFlash;
      col *= 1.0 - uFade;
      gl_FragColor = vec4(col, 1.0);
    }`};function Yl(r){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i=t.createRadialGradient(128,128,0,128,128,128);r.forEach(([s,o])=>i.addColorStop(s,o)),t.fillStyle=i,t.fillRect(0,0,256,256);let n=new vl(e);return n.colorSpace=bi,n}function yw(r,e){return new Promise((t,i)=>{e.itemStart(r);let n=new Image;n.decoding="async",n.onload=()=>{let s=document.createElement("canvas");s.width=n.width,s.height=n.height;let o=s.getContext("2d");o.drawImage(n,0,0),t(o.getImageData(0,0,s.width,s.height)),e.itemEnd(r)},n.onerror=s=>{e.itemError(r),i(s)},n.src=r})}async function sv(r,{mobile:e,onProgress:t}){let i=new Bu({canvas:r,antialias:!e,powerPreference:"high-performance",logarithmicDepthBuffer:!0}),n=Math.min(window.devicePixelRatio||1,e?1.6:2);i.setPixelRatio(n),i.setSize(innerWidth,innerHeight,!1),i.toneMapping=Ys,i.toneMappingExposure=1,i.outputColorSpace=bi;let s=new dl,o=new ji(30,innerWidth/innerHeight,2e-5,3e3),a=new ia;a.onProgress=(Q,z,W)=>t&&t(z/W);let l=new Ml(a),c=e?"2k":"4k",h=(Q,z=!0)=>new Promise((W,se)=>l.load(Q,$=>{z&&($.colorSpace=bi),$.anisotropy=i.capabilities.getMaxAnisotropy(),W($)},void 0,se)),[d,u,f,p,v,m,g]=await Promise.all([h(`assets/moon_color_${c}.jpg`),h(`assets/moon_normal_${c}.jpg`,!1),h("assets/terrain_color.jpg"),h("assets/terrain_normal.jpg",!1),h("assets/terrain_shadow.png",!1),h("assets/earth_2k.jpg"),yw("assets/terrain_height.png",a)]),x={uSunDir:{value:new B(0,0,1)},uOrbPos:{value:[new B,new B]},uOrbCol:{value:[new Ze(.78,.86,1),new Ze(1,.7,.32)]},uOrbI:{value:[0,0]},uOrbR:{value:.028},uExposure:{value:2.4},uEarthshine:{value:.035}},E=new Jo(new Uint8Array([255,255,255,255]),1,1);E.needsUpdate=!0;let y=(Q,z,W,se)=>new Vt({vertexShader:cw,fragmentShader:hw,uniforms:{...x,uMap:{value:Q},uNormal:{value:z},uShadow:{value:W},uNormalStrength:{value:se},uShadowAmt:{value:0}}}),b=new Er;b.rotation.set(j_,-Math.PI/2-ev,0),s.add(b);let w=y(d,u,E,1),_=new wi(new ea(1,e?160:256,e?120:192),w);b.add(_);let S=e?220:360,P=g.width,C=g.height,N=g.data,D=(Q,z)=>{let W=Math.min(P-1.001,Math.max(0,Q*(P-1))),se=Math.min(C-1.001,Math.max(0,z*(C-1))),$=W|0,ae=se|0,He=W-$,ze=se-ae,rt=(Tt,ke)=>N[(ke*P+Tt)*4]/255;return Br(Br(rt($,ae),rt($+1,ae),He),Br(rt($,ae+1),rt($+1,ae+1),He),ze)},H=new Float32Array((S+1)*(S+1)*3),I=new Float32Array((S+1)*(S+1)*2);for(let Q=0;Q<=S;Q++)for(let z=0;z<=S;z++){let W=z/S,se=Q/S,$=Q*(S+1)+z,ae=ms(0,.09,Math.min(W,1-W,se,1-se)),He=1+nv+D(W,se)*iv*ae,ze=lw(j_+(.5-se)*tv,ev+(W-.5)*tv,He);H.set([ze.x,ze.y,ze.z],$*3),I.set([W,1-se],$*2)}let V=[];for(let Q=0;Q<S;Q++)for(let z=0;z<S;z++){let W=Q*(S+1)+z,se=W+1,$=W+S+1,ae=$+1;V.push(W,$,se,se,$,ae)}let X=new Ti;X.setAttribute("position",new Yt(H,3)),X.setAttribute("uv",new Yt(I,2)),X.setIndex(V);let U=y(f,p,v,1);b.add(new wi(X,U));let ie=1+nv+D(.5,.5)*iv,q=new B(0,0,ie+.0075),R=new ls(new Ir({map:Yl([[0,"rgba(255,244,222,0.55)"],[.22,"rgba(255,236,205,0.22)"],[.5,"rgba(180,190,230,0.06)"],[1,"rgba(0,0,0,0)"]]),blending:bn,depthWrite:!1,transparent:!0}));R.scale.setScalar(5.2),s.add(R);let ee=new Vt({vertexShader:uw,fragmentShader:fw,uniforms:{uMap:{value:m},uSunDir:x.uSunDir,uOpacity:{value:1}}}),ye=new wi(new ea(1,64,48),ee);ye.rotation.set(.25,2.2,.1),s.add(ye);let we=new ls(new Ir({map:Yl([[0,"rgba(110,160,255,0.0)"],[.42,"rgba(110,160,255,0.0)"],[.47,"rgba(120,170,255,0.35)"],[.62,"rgba(90,140,255,0.08)"],[1,"rgba(0,0,0,0)"]]),blending:bn,depthWrite:!1,transparent:!0}));s.add(we);let K=e?3800:8e3,ce=new Float32Array(K*3),Se=new Float32Array(K),Te=new Float32Array(K*3),_e=new Float32Array(K),Le=new B(.3,1,.45).normalize();for(let Q=0;Q<K;Q++){let z=new B().randomDirection();Q<K*.45&&z.addScaledVector(Le,-z.dot(Le)*(.85+Math.random()*.15)).normalize(),ce.set([z.x*900,z.y*900,z.z*900],Q*3);let W=Math.random();Se[Q]=W<.92?.8+Math.random()*1.4:2.2+Math.random()*2.2;let se=Math.random(),$=se<.15?[1,.82,.62]:se<.3?[.75,.84,1]:[1,.97,.94],ae=.35+Math.random()*.65;Te.set([$[0]*ae,$[1]*ae,$[2]*ae],Q*3),_e[Q]=Math.random()}let pt=new Ti;pt.setAttribute("position",new Yt(ce,3)),pt.setAttribute("aSize",new Yt(Se,1)),pt.setAttribute("aColor",new Yt(Te,3)),pt.setAttribute("aPhase",new Yt(_e,1));let Ce=new Vt({vertexShader:dw,fragmentShader:pw,transparent:!0,depthWrite:!1,blending:bn,uniforms:{uTime:{value:0},uPR:{value:n},uBright:{value:1.6}}}),qe=new Ko(pt,Ce);qe.frustumCulled=!1,s.add(qe);let Ue=[Yl([[0,"rgba(255,255,255,1)"],[.08,"rgba(230,240,255,0.95)"],[.25,"rgba(170,195,255,0.35)"],[1,"rgba(0,0,0,0)"]]),Yl([[0,"rgba(255,255,255,1)"],[.08,"rgba(255,230,180,0.95)"],[.25,"rgba(255,170,70,0.35)"],[1,"rgba(0,0,0,0)"]])].map(Q=>{let z=new ls(new Ir({map:Q,blending:bn,depthWrite:!1,transparent:!0,opacity:0}));return s.add(z),z}),ct=new ls(new Ir({map:Yl([[0,"rgba(255,255,255,1)"],[.1,"rgba(255,236,200,0.8)"],[.35,"rgba(255,200,120,0.18)"],[1,"rgba(0,0,0,0)"]]),blending:bn,depthWrite:!1,transparent:!0,opacity:0}));ct.position.copy(q),s.add(ct);let ut=new Vt({vertexShader:vw,fragmentShader:_w,transparent:!0,depthWrite:!1,blending:bn,uniforms:{uA:{value:0},uCol:{value:new Ze(1,.82,.55)}}}),j=new wi(new Xs(1,1),ut);j.position.set(0,0,ie+.0012),j.scale.setScalar(1e-4),s.add(j);let Ye=()=>innerWidth/innerHeight<.9,Ht=()=>{let Q=document.querySelector(".intro-top"),z=document.querySelector(".intro-bottom");return!Q||!z||!z.offsetHeight?null:{top:Q.offsetTop+Q.offsetHeight,bottom:z.offsetTop}},yt=()=>{let Q=Math.tan(15*Yn),z=innerHeight,W=innerWidth,se=Ht(),$=Math.min(W<z?W*.74:z*.5,se?se.bottom-se.top-28:z*.5);return $=Math.max($,Math.min(W,z)*.3),z/($*Q)},Qe=(Q=yt())=>{let z=innerHeight,W=Ht();return((W?(W.top+W.bottom)/2:z*.55)-z/2)*2*Q*Math.tan(15*Yn)/z},Ct=.14,Ft=1.05,F=new B(0,-Math.sin(Ct),Math.cos(Ct)).multiplyScalar(Ft),mt=new B(0,Math.sin(.035),Math.cos(.035)),gt=new B(0,Math.cos(Ct),Math.sin(Ct)),We=F.clone().normalize(),ve=Math.acos(1/Ft),vt=Q=>{let z=-ve+Br(-8,Ye()?19:8,Q)*Yn,W=gt.clone().multiplyScalar(Math.cos(z)).addScaledVector(We,Math.sin(z));return W.applyAxisAngle(We,-(Ye()?9:21)*Yn),F.clone().addScaledVector(W,70)},Ie=70*Math.tan(2.3*Yn);ye.scale.setScalar(Ie),we.scale.setScalar(Ie*2.6);let fe={mode:"intro",cam:{x:0,y:Qe(),z:yt(),tx:0,ty:Qe(),tz:0,fov:30},sun:{theta:112*Yn,tilt:0},fx:{zoom:0,flash:0,bloom:.5,fade:1,vig:1,exposure:2.4},moon:{halo:0},earth:{rise:0,show:0},shadow:{amt:0},orbs:{p:0,i:0,show:0},burst:{a:0,ring:0},names:{prog:0,dissolve:0},scroll:{p:0},pointer:{x:0,y:0,sx:0,sy:0}},A=null;function M(Q="Great Vibes"){A&&(s.remove(A),A.geometry.dispose());let z=Ye(),W=document.createElement("canvas"),se=1400,$=z?1100:420;W.width=se,W.height=$;let ae=W.getContext("2d");ae.fillStyle="#fff",ae.textAlign="center",ae.textBaseline="middle";let He=(Z,k)=>{ae.font=`${k}px "${Q}"`;let J=ae.measureText(Z).width;return J>se*.9?k*se*.9/J:k};if(z){let Z=Math.min(He("Shayma",330),He("Bilal",330));ae.font=`${Z}px "${Q}"`,ae.fillText("Shayma",se/2,$*.24),ae.font=`${Z*.6}px "${Q}"`,ae.fillText("&",se/2,$*.52),ae.font=`${Z}px "${Q}"`,ae.fillText("Bilal",se/2,$*.78)}else{let Z=He("Shayma & Bilal",250);ae.font=`${Z}px "${Q}"`,ae.fillText("Shayma & Bilal",se/2,$*.55)}let ze=ae.getImageData(0,0,se,$).data,rt=[],Tt=z?4:3;for(let Z=0;Z<$;Z+=Tt)for(let k=0;k<se;k+=Tt)ze[(Z*se+k)*4+3]>120&&rt.push([k/se-.5,.5-Z/$]);let ke=e?7e3:14e3;for(;rt.length>ke;)rt.splice(Math.random()*rt.length|0,1);let tt=mt.clone().sub(F).normalize(),st=new B().crossVectors(tt,We).normalize(),It=new B().crossVectors(st,tt).normalize(),St=.12,ui=(z?55:40)*Yn,vi=Math.tan(ui/2),Bt=2*St*vi*(innerWidth/innerHeight),zt=Math.min(Bt*(z?.8:.56),2*St*vi*(z?.5:.62)*se/$),ei=zt*$/se,Vi=F.clone().addScaledVector(tt,St).addScaledVector(It,(z?.36:.3)*St*vi),On=rt.length,Zt=new Float32Array(On*3),Lt=new Float32Array(On*3),Hi=new Float32Array(On*4),zr=new Float32Array(On*3),_s=[.72,.82,1],Un=[1,.7,.32];rt.forEach(([Z,k],J)=>{let Me=Vi.clone().addScaledVector(st,Z*zt).addScaledVector(It,k*ei);Lt.set([Me.x,Me.y,Me.z],J*3);let Re=q.clone().add(new B().randomDirection().multiplyScalar(Math.random()*.0015));Zt.set([Re.x,Re.y,Re.z],J*3),Hi.set([Math.random(),Math.random(),Math.random(),Math.random()],J*4);let be=Z<0?_s:Un,Ee=Z<0?Un:_s,Fe=Math.random()<.8?be:Ee;zr.set(Fe,J*3)});let T=new Ti;T.setAttribute("position",new Yt(Lt.slice(),3)),T.setAttribute("aStart",new Yt(Zt,3)),T.setAttribute("aTarget",new Yt(Lt,3)),T.setAttribute("aRand",new Yt(Hi,4)),T.setAttribute("aColor",new Yt(zr,3));let O=new Vt({vertexShader:mw,fragmentShader:gw,transparent:!0,depthWrite:!1,depthTest:!1,blending:bn,uniforms:{uProg:{value:0},uTime:{value:0},uDissolve:{value:0},uPR:{value:n},uSize:{value:e?2.6:3},uSpread:{value:zt*.12},uUp:{value:It},uRight:{value:st},uFwd:{value:tt}}});A=new Ko(T,O),A.frustumCulled=!1,A.renderOrder=10,s.add(A)}let G=null;function le(){let Q=Ye()?.35:1,z=[F.clone(),new B(0,-.55,1.45),new B(2.1*Q,-.5,2.7),new B(-1.9*Q,.45,3.3),new B(.4*Q,.15,5.6)],W=[mt.clone(),new B(0,.25,.75),new B(.95*Q,Ye()?-.75:0,0),new B(-.95*Q,Ye()?-.75:0,0),new B(0,Ye()?-1.1:0,0)];G={pos:new jo(z,!1,"catmullrom",.3),tgt:new jo(W,!1,"catmullrom",.3)}}let oe=[[0,78],[.3,30],[.62,14],[1,148]],me=(Q,z)=>{for(let W=1;W<Q.length;W++)if(z<=Q[W][0]){let[se,$]=Q[W-1],[ae,He]=Q[W],ze=(z-se)/(ae-se);return Br($,He,ze*ze*(3-2*ze))}return Q[Q.length-1][1]},de=new Hu(i);de.setPixelRatio(n),de.setSize(innerWidth,innerHeight),de.addPass(new Gu(s,o));let Y=new pa(new Ve(innerWidth/2,innerHeight/2),.5,.55,.82);de.addPass(Y);let ne=new da(xw);de.addPass(ne),de.addPass(new Wu);let pe=new wl,L=new Ve;function re(Q,z){return L.set(Q/innerWidth*2-1,-(z/innerHeight)*2+1),pe.setFromCamera(L,o),pe.ray.intersectsSphere(new Rr(new B,1))}function te(){o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight,!1),de.setSize(innerWidth,innerHeight),Y.resolution.set(innerWidth/2,innerHeight/2),ne.uniforms.uAspect.value=innerWidth/innerHeight,fe.mode==="intro"&&(fe.cam.z=yt(),fe.cam.y=fe.cam.ty=Qe()),fe.mode==="scroll"&&le()}ne.uniforms.uAspect.value=innerWidth/innerHeight;let xe=new El,ue=new B,ge=new B;function he(){let Q=xe.getElapsedTime(),z=fe.pointer;z.sx+=(z.x-z.sx)*.05,z.sy+=(z.y-z.sy)*.05;let W=fe.sun.theta;if(fe.mode==="scroll"&&(W=me(oe,fe.scroll.p)*Yn),x.uSunDir.value.set(Math.sin(W),Math.sin(fe.sun.tilt),Math.cos(W)).normalize(),fe.mode==="scroll"&&G){let ke=fe.scroll.p;G.pos.getPoint(ke,ue),G.tgt.getPoint(ke,ge),o.position.copy(ue),o.fov=Br(Ye()?55:40,Ye()?42:32,ms(0,.3,ke)),o.up.copy(ue).normalize().lerp(new B(0,1,0),ms(0,.25,ke)).normalize(),o.lookAt(ge)}else{let ke=fe.cam,tt=fe.mode==="intro"?1:0;o.position.set(ke.x+(Math.sin(Q*.13)*.05+z.sx*.25)*tt*ke.z*.1,ke.y+(Math.cos(Q*.11)*.04-z.sy*.18)*tt*ke.z*.1,ke.z),o.fov=ke.fov;let st=ms(1.15,1.03,o.position.length());o.up.set(0,1,0).lerp(o.position.clone().normalize(),st*.98).normalize(),o.lookAt(ke.tx,ke.ty,ke.tz)}o.updateProjectionMatrix(),x.uExposure.value=fe.mode==="scroll"?Br(fe.fx.exposure,e?1.5:1.7,ms(0,.2,fe.scroll.p)):fe.fx.exposure,U.uniforms.uShadowAmt.value=fe.mode==="scroll"?fe.shadow.amt*(1-ms(0,.08,fe.scroll.p)):fe.shadow.amt,R.material.opacity=fe.moon.halo*(.55+.45*ms(1.6,4,o.position.length()));let se=vt(fe.earth.rise);ye.position.copy(se),we.position.copy(se),ye.rotation.y+=4e-4,ee.uniforms.uOpacity.value=fe.earth.show,we.material.opacity=fe.earth.show,ye.visible=we.visible=fe.earth.show>.001;let $=fe.orbs.p,ae=1-Math.pow(1-$,2.2),He=Br(.075,0,ae),ze=ae*Math.PI*6.2+.4,rt=Br(.05,0,ae);for(let ke=0;ke<2;ke++){let tt=ze+ke*Math.PI,st=x.uOrbPos.value[ke].set(q.x+Math.cos(tt)*He,q.y+Math.sin(tt)*He*.85,q.z+rt+Math.sin(tt*2)*.002*(1-ae));Ue[ke].position.copy(st);let It=.9+.1*Math.sin(Q*9+ke*2);Ue[ke].material.opacity=fe.orbs.show,Ue[ke].scale.setScalar(.011*It*(.7+fe.orbs.show*.3)),x.uOrbI.value[ke]=fe.orbs.i*It}if(ct.material.opacity=fe.burst.a,ct.scale.setScalar(.004+fe.burst.a*.05),j.scale.setScalar(1e-4+fe.burst.ring*.33),ut.uniforms.uA.value=(1-fe.burst.ring)*(fe.burst.ring>0?1.6:0),A){let ke=A.material.uniforms;ke.uProg.value=fe.names.prog,ke.uTime.value=Q,ke.uDissolve.value=fe.mode==="scroll"?ms(0,.07,fe.scroll.p):fe.names.dissolve,A.visible=fe.names.prog>0&&ke.uDissolve.value<1}Ce.uniforms.uTime.value=Q,Y.strength=fe.fx.bloom;let Tt=ne.uniforms;Tt.uZoom.value=fe.fx.zoom,Tt.uFlash.value=fe.fx.flash,Tt.uFade.value=fe.fx.fade,Tt.uVig.value=fe.fx.vig,de.render()}return i.setAnimationLoop(he),{S:fe,M:q,renderer:i,camera:o,resize:te,hitMoon:re,buildNames:M,buildScrollPath:le,introDist:yt,introY:Qe,poses:{landPos:F,landTarget:mt,landFov:()=>Ye()?55:40},pause(Q){i.setAnimationLoop(Q?null:he)}}}var jt="#d9b56c";function ki(r,e,t,i=0){let n=t*.7654,s=[];for(let o=0;o<16;o++){let a=i+o*Math.PI/8-Math.PI/2,l=o%2?n:t;s.push(`${(r+Math.cos(a)*l).toFixed(2)},${(e+Math.sin(a)*l).toFixed(2)}`)}return s.join(" ")}function Sw(r,e,t,i,n){let s=1-n;return[s*s*s*r[0]+3*s*s*n*e[0]+3*s*n*n*t[0]+n*n*n*i[0],s*s*s*r[1]+3*s*s*n*e[1]+3*s*n*n*t[1]+n*n*n*i[1]]}function Dp(r,e,{spring:t=.42,inset:i=0,lobes:n=0,peak:s=.06}={}){let o=Math.max(e*t,r*.55)+i,a=[i,o],l=[i,o*.4],c=[r*.16+i*.5,i+e*s*.3],h=[r/2,i];if(!n){let m=[r-i,o],g=[r-i,o*.4],x=[r-(r*.16+i*.5),i+e*s*.3];return`M${i},${e} L${a} C${l} ${c} ${h} C${x} ${g} ${m} L${r-i},${e}`}let d=n,u=[];for(let m=0;m<=d;m++)u.push(Sw(a,l,c,h,m/d));let f=u.slice(0,-1).reverse().map(([m,g])=>[r-m,g]),p=u.concat(f),v=`M${i},${e} L${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;for(let m=1;m<p.length;m++){let[g,x]=p[m-1],[E,y]=p[m],b=Math.hypot(E-g,y-x)/2*1.08;v+=` A${b.toFixed(1)},${b.toFixed(1)} 0 0 1 ${E.toFixed(1)},${y.toFixed(1)}`}return v+` L${r-i},${e}`}function Mw(r,e,{lobes:t=11,glow:i=!0,fill:n=!1}={}){let s=Dp(r,e,{inset:1.5}),o=Dp(r,e,{inset:9}),a=Dp(r,e,{inset:17,lobes:t}),l=1.5;return`<svg viewBox="0 0 ${r} ${e}" width="${r}" height="${e}" fill="none" aria-hidden="true">
    <defs><linearGradient id="ag${r|0}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f3dc9e"/><stop offset=".5" stop-color="${jt}"/><stop offset="1" stop-color="#8a6a2e" stop-opacity=".0"/></linearGradient>
      <linearGradient id="af${r|0}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e3a3a" stop-opacity=".82"/><stop offset=".35" stop-color="#070b1e" stop-opacity=".9"/><stop offset="1" stop-color="#05061a" stop-opacity=".94"/></linearGradient></defs>
    ${n?`<path d="${s} Z" fill="url(#af${r|0})"/>`:""}
    <path class="draw" d="${s}" stroke="url(#ag${r|0})" stroke-width="1.6"${i?' filter="drop-shadow(0 0 6px rgba(217,181,108,.55))"':""}/>
    <path class="draw" d="${o}" stroke="url(#ag${r|0})" stroke-width=".7" opacity=".55"/>
    <path class="draw" d="${a}" stroke="url(#ag${r|0})" stroke-width="1.1"/>
    <polygon class="pop" points="${ki(r/2,l+2,7)}" fill="#0a0d24" stroke="${jt}" stroke-width="1.1" transform="translate(0,-10)"/>
    <circle class="pop" cx="${r/2}" cy="${l-8}" r="1.6" fill="${jt}"/>
  </svg>`}function bw(){let r=["#1d4f8f","#0f6b57","#a8462a","#0f6b57"],e="<svg xmlns='http://www.w3.org/2000/svg' width='240' height='60' viewBox='0 0 240 60'><rect width='240' height='60' fill='#0a0e26'/>";for(let t=0;t<4;t++){let i=30+t*60;e+=`<polygon points='${ki(i,30,25)}' fill='${r[t]}' stroke='${jt}' stroke-width='1.2'/>`,e+=`<polygon points='${ki(i,30,11,Math.PI/8)}' fill='#efe4cc' stroke='${jt}' stroke-width='.8'/>`,e+=`<circle cx='${i}' cy='30' r='3' fill='${r[(t+2)%4]}'/>`,e+=`<polygon points='${i+30},18 ${i+36},30 ${i+30},42 ${i+24},30' fill='#efe4cc' stroke='${jt}' stroke-width='.8'/>`,e+=`<polygon points='${i},-6 ${i+6},2 ${i},10 ${i-6},2' fill='${jt}' opacity='.55'/><polygon points='${i},50 ${i+6},58 ${i},66 ${i-6},58' fill='${jt}' opacity='.55'/>`}return e+=`<line x1='0' y1='.6' x2='240' y2='.6' stroke='${jt}'/><line x1='0' y1='59.4' x2='240' y2='59.4' stroke='${jt}'/></svg>`,`url("data:image/svg+xml,${encodeURIComponent(e)}")`}function Tw(r=.09){let e=`<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='${jt}' stroke-width='.8' opacity='${r}'>
    <polygon points='${ki(60,60,34)}'/><polygon points='${ki(60,60,16,Math.PI/8)}'/>
    <polygon points='${ki(0,0,34)}'/><polygon points='${ki(120,0,34)}'/><polygon points='${ki(0,120,34)}'/><polygon points='${ki(120,120,34)}'/>
    <path d='M60 26 L60 0 M60 94 L60 120 M26 60 L0 60 M94 60 L120 60'/></g></svg>`;return`url("data:image/svg+xml,${encodeURIComponent(e)}")`}function ww(){return`<svg viewBox="0 0 360 30" fill="none" aria-hidden="true">
    <defs><linearGradient id="dl" x1="0" x2="1"><stop offset="0" stop-color="${jt}" stop-opacity="0"/><stop offset="1" stop-color="${jt}"/></linearGradient>
    <linearGradient id="dr" x1="1" x2="0"><stop offset="0" stop-color="${jt}" stop-opacity="0"/><stop offset="1" stop-color="${jt}"/></linearGradient></defs>
    <path class="draw" d="M8 15 H146" stroke="url(#dl)" stroke-width="1"/><path class="draw" d="M352 15 H214" stroke="url(#dr)" stroke-width="1"/>
    <polygon class="pop" points="152,15 158,10 164,15 158,20" fill="${jt}"/><polygon class="pop" points="208,15 202,10 196,15 202,20" fill="${jt}"/>
    <polygon class="pop spin" points="${ki(180,15,12)}" stroke="${jt}" stroke-width="1.2" fill="#0a0d24"/>
    <polygon class="pop" points="${ki(180,15,5,Math.PI/8)}" fill="${jt}"/>
  </svg>`}function Ew(){return`<svg viewBox="0 0 60 60" fill="none" aria-hidden="true"><path d="M2 58 V18 Q2 2 18 2 H58" stroke="${jt}" stroke-width="1.2"/>
    <path d="M8 58 V22 Q8 8 22 8 H58" stroke="${jt}" stroke-width=".6" opacity=".6"/>
    <polygon points="${ki(15,15,6)}" fill="${jt}"/></svg>`}function ov(r=document){r.querySelectorAll("[data-divider]").forEach(i=>{i.innerHTML=ww()}),r.querySelectorAll("[data-corners]").forEach(i=>{["tl","tr","bl","br"].forEach(n=>{let s=document.createElement("span");s.className=`corner ${n}`,s.innerHTML=Ew(),i.appendChild(s)})}),document.documentElement.style.setProperty("--zellige",bw()),document.documentElement.style.setProperty("--khatam",Tw());let e=()=>r.querySelectorAll("[data-arch]").forEach(i=>{let n=i.getBoundingClientRect();n.width&&(i.innerHTML=Mw(Math.round(n.width),Math.round(n.height),{lobes:+(i.dataset.lobes||11),fill:"fill"in i.dataset}))});e();let t;return addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(e,150)}),{arches:e}}var Xu='<span class="saw">\uFDFA</span>',qu=["fr","nl","ary"],Qs={fr:{soon:"Bient\xF4t, in sh\xE2\u2019 All\xE2h",tbd:"\xC0 venir",bigDay:"C\u2019est le grand jour \u2728",soundOff:"Couper le son",soundOn:"Remettre le son",replay:"R\xE9\xE9couter la r\xE9citation",listen:"\xC9couter la r\xE9citation",icsTitle:"Fian\xE7ailles de Shayma & Bilal",locale:"fr-FR"},nl:{loader:"De maan komt op",introAria:"Welkom",kicker:"Uitnodiging",enter:"Tik op de maan",soundHint:"\u{1F3A7} Zet het geluid aan \xB7 recitatie van Al-Fatiha",v78tr:"\u201CEn Wij hebben jullie in paren geschapen.\u201D",v78ref:"Soera An-Naba (78), vers 8",sub1:"verbinden hun harten",sub2:"en nodigen u uit om hun verloving te vieren",scrollAria:"Scroll naar de rest van de uitnodiging",scroll:"Scroll naar beneden",skip:"Overslaan \u203A",v30tr:"\u201CEn het behoort tot Zijn Tekenen dat Hij voor jullie van jullie eigen soort echtgenotes heeft geschapen, opdat jullie rust bij haar vinden en Hij bracht tussen jullie (echtparen) liefde en genade. Waarlijk, dat zijn zeker Tekenen voor mensen die nadenken.\u201D",v30ref:"Soera Ar-Roem (30), vers 21 \xB7 vert. Malak Faris Abdalsalaam",grace:"Door de genade van Allah",union:"Onze verbintenis",u1:"Twee zielen, als paar geschapen, die elkaar vonden onder dezelfde maan.",u2:"Met de zegen van hun families hebben Shayma en Bilal ervoor gekozen om samen hun dien (geloof) te vervolmaken.",u3:"Met grote vreugde nodigen zij u uit op hun verloving.",v2tr:"\u201CZij zijn (als) kleding voor jullie en jullie zijn (als) kleding voor hen.\u201D",v2ref:"Soera Al-Baqara (2), uit vers 187 \xB7 vert. Malak Faris Abdalsalaam",sunna:"De Soennah",hTitle:`Woorden van de Profeet ${Xu} over het huwelijk`,h1tr:"\u201CVoor twee mensen die van elkaar houden, is er niets gezien dat gelijk is aan het huwelijk.\u201D",h1src:"Overgeleverd door Ibn \u02BFAbbas \xB7 Soenan Ibn Madjah nr. 1847 \xB7 authentiek (sahih) volgens al-Albani \xB7 vrije vertaling",h2tr:"\u201CDeze wereld is genot, en het beste genot van deze wereld is een vrome vrouw.\u201D",h2src:"Overgeleverd door \u02BFAbdullah ibn \u02BFAmr \xB7 Sahih Muslim nr. 1467 \xB7 vrije vertaling",h3tr:"\u201CDe beste onder jullie is degene die het best is voor zijn familie, en ik ben de beste van jullie voor mijn familie.\u201D",h3src:"Overgeleverd door \u02BFAisha \xB7 Djami\u02BF at-Tirmidhi nr. 3895 \xB7 authentiek (sahih) volgens al-Albani \xB7 vrije vertaling",h4tr:"\u201CDe gelovigen met het meest volmaakte geloof zijn degenen met het beste karakter, en de besten onder jullie zijn degenen met het beste karakter tegenover hun vrouwen.\u201D",h4src:"Overgeleverd door Abu Hurayra \xB7 Djami\u02BF at-Tirmidhi nr. 1162 \xB7 hasan sahih \xB7 vrije vertaling",rdv:"Waar en wanneer",underMoon:"Onder de maan",lblDate:"Datum",lblTime:"Tijd",lblPlace:"Locatie",cdDays:"dagen",cdHours:"uur",cdMin:"min",cdSec:"sec",bMaps:"Route",bCal:"Toevoegen aan agenda",bRsvp:"Aanwezigheid bevestigen",doua:"Smeekbede (doea)",v25tr:"\u201COnze Heer! Geef ons van onze vrouwen en ons nageslacht degenen die plezier voor onze ogen zijn en maakt ons leiders van de godvrezenden.\u201D",v25ref:"Soera Al-Furqan (25), vers 74 \xB7 vert. Malak Faris Abdalsalaam",duaTr:"\u201CMoge Allah je zegenen, Zijn zegen over je laten neerdalen en jullie beiden in het goede verenigen.\u201D",duaRef:`Smeekbede van de Profeet ${Xu} voor pasgetrouwden \xB7 Soenan Abi Dawud nr. 2130 \xB7 authentiek (sahih) volgens al-Albani \xB7 vrije vertaling`,fin:"We kijken ernaar uit om dit moment met u te delen.",sources:"Bronnen",sourcesList:`<li>Koranverzen: Arabische tekst via quran.com; Franse vertaling van Muhammad Hamidullah, Nederlandse vertaling van Malak Faris Abdalsalaam (interpunctie van 30:21 licht aangepast).</li>
        <li>Hadiths: Arabische tekst en beoordeling van de authenticiteit via de hadith-api-database (fawazahmed0). De Nederlandse vertalingen (\u201Cvrije vertaling\u201D) zijn voor deze uitnodiging geschreven.</li>
        <li>Recitatie: soera Al-Fatiha door Mishary Rashid Alafasy (bestanden per vers van EveryAyah.com).</li>
        <li>Maan: NASA Scientific Visualization Studio, \u201CCGI Moon Kit\u201D (SVS 4720). Aarde: NASA SVS \u201CBlue Marble\u201D (SVS 2915).</li>`,soon:"Binnenkort, in sha\u2019 Allah",tbd:"Volgt nog",bigDay:"Het is de grote dag \u2728",soundOff:"Geluid uit",soundOn:"Geluid aan",replay:"Recitatie opnieuw beluisteren",listen:"Recitatie beluisteren",rsvpMsg:"Salam! Ik bevestig mijn aanwezigheid op de verloving van Shayma & Bilal \u{1F319}",icsTitle:"Verloving van Shayma & Bilal",locale:"nl-NL"},ary:{loader:"\u0627\u0644\u0642\u0645\u0631 \u0637\u0627\u0644\u0639",introAria:"\u0627\u0644\u0627\u0633\u062A\u0642\u0628\u0627\u0644",kicker:"\u0639\u0652\u0631\u0627\u0636\u0629",enter:"\u0648\u0631\u0651\u0643 \u0639\u0644\u0649 \u0627\u0644\u0642\u0645\u0631",soundHint:"\u{1F3A7} \u0637\u0644\u0651\u0639 \u0627\u0644\u0635\u0648\u062A \xB7 \u0642\u0631\u0627\u0621\u0629 \u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062A\u062D\u0629",v78ref:"\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0628\u0623\u060C \u0627\u0644\u0622\u064A\u0629 8",sub1:"\u062C\u0645\u0639\u0648 \u0642\u0644\u0648\u0628\u0647\u0645",sub2:"\u0648 \u0643\u064A\u0639\u0631\u0636\u0648 \u0639\u0644\u064A\u0643\u0645 \u062A\u0641\u0631\u062D\u0648 \u0645\u0639\u0627\u0647\u0645 \u0641\u0627\u0644\u062E\u0637\u0648\u0628\u0629 \u062F\u064A\u0627\u0644\u0647\u0645",scrollAria:"\u0647\u0628\u0637 \u0644\u0628\u0627\u0642\u064A \u0627\u0644\u0639\u0631\u0627\u0636\u0629",scroll:"\u0647\u0628\u0637 \u0644\u062A\u062D\u062A",skip:"\u2039 \u062F\u0648\u0651\u0632",v30ref:"\u0633\u0648\u0631\u0629 \u0627\u0644\u0631\u0648\u0645\u060C \u0627\u0644\u0622\u064A\u0629 21",grace:"\u0628\u0641\u0636\u0644 \u0627\u0644\u0644\u0647",union:"\u0627\u0631\u062A\u0628\u0627\u0637\u0646\u0627",u1:"\u062C\u0648\u062C \u0623\u0631\u0648\u0627\u062D \u062A\u062E\u0644\u0642\u0648 \u0632\u0648\u062C\u060C \u0648 \u062A\u0644\u0627\u0642\u0627\u0648 \u062A\u062D\u062A \u0646\u0641\u0633 \u0627\u0644\u0642\u0645\u0631.",u2:"\u0628\u0627\u0644\u0631\u0636\u0649 \u062F\u064A\u0627\u0644 \u0639\u0627\u0626\u0644\u0627\u062A\u0647\u0645\u060C \u0634\u064A\u0645\u0627\u0621 \u0648 \u0628\u0644\u0627\u0644 \u062E\u062A\u0627\u0631\u0648 \u064A\u0643\u0645\u0651\u0644\u0648 \u062F\u064A\u0646\u0647\u0645 \u0645\u0639 \u0628\u0639\u0636\u064A\u0627\u062A\u0647\u0645.",u3:"\u0648 \u0641\u0631\u062D\u0627\u0646\u064A\u0646 \u0628\u0632\u0627\u0641 \u064A\u0639\u0631\u0636\u0648 \u0639\u0644\u064A\u0643\u0645 \u0644\u0644\u062E\u0637\u0648\u0628\u0629 \u062F\u064A\u0627\u0644\u0647\u0645.",v2ref:"\u0633\u0648\u0631\u0629 \u0627\u0644\u0628\u0642\u0631\u0629\u060C \u0645\u0646 \u0627\u0644\u0622\u064A\u0629 187",sunna:"\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0646\u0628\u0648\u064A\u0629",hTitle:`\u0634\u0646\u0648 \u0642\u0627\u0644 \u0627\u0644\u0646\u0628\u064A ${Xu} \u0639\u0644\u0649 \u0627\u0644\u0632\u0648\u0627\u062C`,h1src:"\u0631\u0648\u0627\u0647 \u0627\u0628\u0646 \u0645\u0627\u062C\u0647 (1847) \u0639\u0646 \u0627\u0628\u0646 \u0639\u0628\u0627\u0633\u060C \u0648\u0635\u062D\u062D\u0647 \u0627\u0644\u0623\u0644\u0628\u0627\u0646\u064A",h2src:"\u0631\u0648\u0627\u0647 \u0645\u0633\u0644\u0645 (1467) \u0639\u0646 \u0639\u0628\u062F \u0627\u0644\u0644\u0647 \u0628\u0646 \u0639\u0645\u0631\u0648",h3src:"\u0631\u0648\u0627\u0647 \u0627\u0644\u062A\u0631\u0645\u0630\u064A (3895) \u0639\u0646 \u0639\u0627\u0626\u0634\u0629\u060C \u0648\u0635\u062D\u062D\u0647 \u0627\u0644\u0623\u0644\u0628\u0627\u0646\u064A",h4src:"\u0631\u0648\u0627\u0647 \u0627\u0644\u062A\u0631\u0645\u0630\u064A (1162) \u0639\u0646 \u0623\u0628\u064A \u0647\u0631\u064A\u0631\u0629\u060C \u0648\u0642\u0627\u0644: \u062D\u0633\u0646 \u0635\u062D\u064A\u062D",rdv:"\u0627\u0644\u0645\u0648\u0639\u062F",underMoon:"\u062A\u062D\u062A \u0627\u0644\u0642\u0645\u0631",lblDate:"\u0627\u0644\u0646\u0647\u0627\u0631",lblTime:"\u0627\u0644\u0633\u0627\u0639\u0629",lblPlace:"\u0627\u0644\u0628\u0644\u0627\u0635\u0629",cdDays:"\u064A\u0627\u0645",cdHours:"\u0633\u0648\u0627\u064A\u0639",cdMin:"\u062F\u0642\u0627\u064A\u0642",cdSec:"\u062B\u0648\u0627\u0646\u064A",bMaps:"\u0627\u0644\u0637\u0631\u064A\u0642",bCal:"\u0632\u064A\u062F \u0641\u0627\u0644\u0623\u062C\u0646\u062F\u0629",bRsvp:"\u0623\u0643\u0651\u062F \u0627\u0644\u062D\u0636\u0648\u0631 \u062F\u064A\u0627\u0644\u0643",doua:"\u062F\u0639\u0627\u0621",v25ref:"\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0631\u0642\u0627\u0646\u060C \u0627\u0644\u0622\u064A\u0629 74",duaRef:`\u062F\u0639\u0627\u0621 \u0627\u0644\u0646\u0628\u064A ${Xu} \u0644\u0644\u0639\u0631\u0633\u0627\u0646 \xB7 \u0631\u0648\u0627\u0647 \u0623\u0628\u0648 \u062F\u0627\u0648\u062F (2130)\u060C \u0648\u0635\u062D\u062D\u0647 \u0627\u0644\u0623\u0644\u0628\u0627\u0646\u064A`,fin:"\u0645\u062A\u0634\u0648\u0642\u064A\u0646 \u0646\u0641\u0631\u062D\u0648 \u0645\u0639\u0627\u0643\u0645 \u0641\u0647\u0627\u062F \u0627\u0644\u0646\u0647\u0627\u0631.",sources:"\u0627\u0644\u0645\u0635\u0627\u062F\u0631",sourcesList:`<li>\u0627\u0644\u0622\u064A\u0627\u062A: \u0627\u0644\u0646\u0635 \u0645\u0646 quran.com.</li>
        <li>\u0627\u0644\u0623\u062D\u0627\u062F\u064A\u062B: \u0627\u0644\u0646\u0635 \u0648 \u0627\u0644\u062D\u0643\u0645 \u062F\u064A\u0627\u0644\u0647\u0627 \u0645\u0646 \u0642\u0627\u0639\u062F\u0629 hadith-api (fawazahmed0).</li>
        <li>\u0627\u0644\u0642\u0631\u0627\u0621\u0629: \u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062A\u062D\u0629 \u0628\u0635\u0648\u062A \u0645\u0634\u0627\u0631\u064A \u0631\u0627\u0634\u062F \u0627\u0644\u0639\u0641\u0627\u0633\u064A (EveryAyah.com).</li>
        <li>\u0635\u0648\u0631 \u0627\u0644\u0642\u0645\u0631 \u0648 \u0627\u0644\u0623\u0631\u0636: \u0646\u0627\u0633\u0627 (NASA SVS 4720 \u0648 2915).</li>`,soon:"\u0642\u0631\u064A\u0628 \u0625\u0646 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647",tbd:"\u0645\u0627\u0632\u0627\u0644",bigDay:"\u0627\u0644\u064A\u0648\u0645 \u0647\u0648 \u0627\u0644\u0646\u0647\u0627\u0631 \u0627\u0644\u0643\u0628\u064A\u0631 \u2728",soundOff:"\u0637\u0641\u064A \u0627\u0644\u0635\u0648\u062A",soundOn:"\u0634\u0639\u0644 \u0627\u0644\u0635\u0648\u062A",replay:"\u0639\u0627\u0648\u062F \u0633\u0645\u0639 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",listen:"\u0633\u0645\u0639 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",rsvpMsg:"\u0627\u0644\u0633\u0644\u0627\u0645! \u0643\u0646\u0623\u0643\u062F \u0627\u0644\u062D\u0636\u0648\u0631 \u062F\u064A\u0627\u0644\u064A \u0641\u0627\u0644\u062E\u0637\u0648\u0628\u0629 \u062F\u064A\u0627\u0644 \u0634\u064A\u0645\u0627\u0621 \u0648 \u0628\u0644\u0627\u0644 \u{1F319}",icsTitle:"\u062E\u0637\u0648\u0628\u0629 \u0634\u064A\u0645\u0627\u0621 \u0648 \u0628\u0644\u0627\u0644",locale:"ar-MA"}};ot.registerPlugin(Ke,zs);var lt=(r,e=document)=>e.querySelector(r),un=(r,e=document)=>[...e.querySelectorAll(r)],$n=window.CONFIG||{},Np=Math.PI/180,kp=matchMedia("(prefers-reduced-motion: reduce)").matches,gs=qu.includes(window.__LANG)?window.__LANG:"fr",fn=r=>Qs[gs]&&Qs[gs][r]!=null?Qs[gs][r]:Qs.fr[r];function fv(r){gs=r;let e=document.documentElement;e.lang=r==="ary"?"ar-MA":r,e.dir=r==="ary"?"rtl":"ltr",qu.forEach(t=>e.classList.toggle("lang-"+t,t===r)),document.querySelectorAll("[data-i18n]").forEach(t=>{t.dataset.fr===void 0&&(t.dataset.fr=t.innerHTML);let i=r==="fr"?t.dataset.fr:Qs[r][t.dataset.i18n];i!=null&&(t.innerHTML=i)}),document.querySelectorAll("[data-i18n-aria]").forEach(t=>{t.dataset.frAria===void 0&&(t.dataset.frAria=t.getAttribute("aria-label")||""),t.setAttribute("aria-label",r==="fr"?t.dataset.frAria:Qs[r][t.dataset.i18nAria]||t.dataset.frAria)}),document.querySelectorAll(".langs button").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.lang===r)))}fv(gs);var Vp=matchMedia("(pointer: coarse)").matches||innerWidth<760,av=r=>new Promise(e=>setTimeout(e,r));"scrollRestoration"in history&&(history.scrollRestoration="manual");scrollTo(0,0);document.documentElement.style.setProperty("--star",`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><polygon points='${ki(25,25,22)}' fill='none' stroke='#d9b56c' stroke-width='1.5'/><polygon points='${ki(25,25,9,Math.PI/8)}' fill='#d9b56c'/></svg>`)}")`);var _a=new jg({lerp:.085,smoothWheel:!0});_a.stop();_a.on("scroll",Ke.update);ot.ticker.add(r=>_a.raf(r*1e3));ot.ticker.lagSmoothing(0);var Zl=lt("#ldStar");Zl.setAttribute("points",ki(50,50,40));var dv=Zl.getTotalLength?Zl.getTotalLength():400;Zl.style.strokeDasharray=dv;var Yu=0;function Op(r){ot.to({v:Yu},{v:r,duration:.5,onUpdate(){Yu=this.targets()[0].v,Zl.style.strokeDashoffset=dv*(1-Yu),lt(".ld-pct").textContent=Math.round(Yu*100)}})}Op(.02);var nn=lt("#music"),Nn=!1,$u=!1,Jl=(()=>{try{let r=document.createElement("audio");return r.volume=.5,Math.abs(r.volume-.5)<.01}catch{return!1}})(),Up=$n.recitation||$n.musique,Hp=!!$n.recitation,Zu=$n.volume??.55;nn.loop=!Hp;Up&&(lt(".sound-hint").hidden=!1,nn.addEventListener("error",()=>{lt(".sound-hint").hidden=!0,lt("#sound").hidden=!0},{once:!0}),nn.src=Up);nn.addEventListener("ended",()=>{Hp&&($u=!0,Nn=!0,lt("#sound").classList.add("off"),lt("#sound").setAttribute("aria-label",fn("replay")))});var ga={v:0};function Fp(){Jl&&(nn.volume=Math.min(1,Math.max(0,ga.v)))}function pv(){if(!Up||nn.error)return;try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}ga.v=Jl?0:Zu,Fp();let r=nn.play(),e=()=>{lt("#sound").hidden=!1,Jl&&ot.to(ga,{v:Zu,duration:Hp?1.5:5,ease:"sine.inOut",onUpdate:Fp})},t=()=>{Nn=!0,lt("#sound").hidden=!1,lt("#sound").classList.add("off"),lt("#sound").setAttribute("aria-label",fn("listen"))};r&&r.then?r.then(e).catch(t):e()}lt("#sound").addEventListener("click",()=>{$u&&($u=!1,nn.currentTime=0),Nn=!Nn,lt("#sound").classList.toggle("off",Nn),lt("#sound").setAttribute("aria-label",fn(Nn?"soundOn":"soundOff")),ot.killTweensOf(ga),Nn||(Jl||(ga.v=Zu),nn.play().catch(()=>{})),Jl?ot.to(ga,{v:Nn?0:Zu,duration:1,ease:"sine.inOut",onUpdate:Fp,onComplete(){Nn&&nn.pause()}}):Nn&&nn.pause()});document.addEventListener("visibilitychange",()=>{!nn.src||Nn||$u||nn.paused===document.hidden||(document.hidden?nn.pause():js&&nn.play().catch(()=>{}))});var ma=lt("#cursor");if(matchMedia("(pointer: fine)").matches&&!kp){document.body.classList.add("has-cursor");let r=ot.quickTo(ma,"x",{duration:.35,ease:"power3"}),e=ot.quickTo(ma,"y",{duration:.35,ease:"power3"});addEventListener("pointermove",t=>{r(t.clientX),e(t.clientY)}),document.addEventListener("pointerover",t=>{t.target.closest("a,button,summary")&&ma.classList.add("big")}),document.addEventListener("pointerout",t=>{t.target.closest("a,button,summary")&&ma.classList.remove("big")})}var Kl=$n.date?new Date($n.date):null,Bp=Kl&&!isNaN(Kl),$l=[$n.lieu,$n.adresse].filter(Boolean);function mv(){let r=fn("locale");if(lt("#iDate").textContent=Bp?Kl.toLocaleDateString(r,{weekday:"long",day:"numeric",month:"long",year:"numeric"}):fn("soon"),lt("#iHeure").textContent=Bp?Kl.toLocaleTimeString(r,{hour:"2-digit",minute:"2-digit"}).replace(":",gs==="fr"?"h":":"):fn("tbd"),lt("#iLieu").textContent=$l.length?$l.join(" \u2014 "):fn("tbd"),$l.length){let t=lt("#bMaps");t.href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent($l.join(", ")),t.hidden=!1}if($n.whatsapp){let t=gs==="fr"?$n.messageRsvp||"":fn("rsvpMsg"),i=lt("#bRsvp");i.href=`https://wa.me/${String($n.whatsapp).replace(/\D/g,"")}?text=${encodeURIComponent(t)}`,i.hidden=!1}let e=lt("#countdown .big-day");e&&(e.textContent=fn("bigDay"))}function Aw(){if(mv(),!Bp)return;let r=Kl,e=lt("#bCal");e.hidden=!1,e.addEventListener("click",()=>{let s=l=>l.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),o=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//shayma-bilal//fr","BEGIN:VEVENT",`UID:${Date.now()}@shayma-bilal`,`DTSTAMP:${s(new Date)}`,`DTSTART:${s(r)}`,`DTEND:${s(new Date(r.getTime()+144e5))}`,`SUMMARY:${fn("icsTitle")}`,`LOCATION:${$l.join(", ").replace(/,/g,"\\,")}`,"END:VEVENT","END:VCALENDAR"].join(`\r
`),a=document.createElement("a");a.href=URL.createObjectURL(new Blob([o],{type:"text/calendar"})),a.download="fiancailles-shayma-bilal.ics",a.click()});let t=lt("#countdown"),i=(s,o)=>{let a=lt(s),l=String(o);a.textContent!==l&&(a.textContent=l,ot.fromTo(a,{y:-8,opacity:.3},{y:0,opacity:1,duration:.5,ease:"power3.out"}))},n=()=>{let s=r-Date.now();if(t.hidden=!1,s<=0)return t.innerHTML=`<p class="accent big-day">${fn("bigDay")}</p>`,!0;i("#cdJ",Math.floor(s/864e5)),i("#cdH",Math.floor(s/36e5)%24),i("#cdM",Math.floor(s/6e4)%60),i("#cdS",Math.floor(s/1e3)%60)};if(!n()){let s=setInterval(()=>{n()&&clearInterval(s)},1e3)}}un(".langs button").forEach(r=>r.addEventListener("click",()=>{let e=r.dataset.lang;if(!qu.includes(e)||e===gs)return;try{localStorage.setItem("lang",e)}catch{}let t=new URL(location.href);if(t.searchParams.set("lang",e),js){location.href=t.toString();return}history.replaceState(null,"",t.toString()),fv(e),mv(),Ut&&Ut.resize();let i=lt("#sound");i.hidden||i.setAttribute("aria-label",fn(Nn?"soundOn":"soundOff"))}));function gv(r,{duration:e=2.2,delay:t=0}={}){let i=ot.timeline({delay:t}),n=un(".draw",r);return n.forEach(s=>{let o=s.getTotalLength();s.style.strokeDasharray=o,s.style.strokeDashoffset=o}),i.to(n,{strokeDashoffset:0,duration:e,ease:"power2.inOut",stagger:.18}),i.from(un(".pop",r),{scale:0,opacity:0,transformOrigin:"50% 50%",duration:.8,ease:"back.out(2)",stagger:.08},e*.6),i}var js=!1,lv=!1,zp=null,Ut=null;async function Cw(){if(ov(),Aw(),!rv())return uv();try{Ut=await sv(lt("#gl"),{mobile:Vp,onProgress:r=>Op(.05+r*.9)})}catch(r){return console.error(r),uv()}await Promise.race([Promise.all([document.fonts.ready,document.fonts.load('200px "Great Vibes"'),document.fonts.load('40px "Amiri Quran"')]),av(3500)]),Ut.buildNames(),Op(1),await av(550),addEventListener("resize",Rw),Pw()}var cv=innerWidth/innerHeight<.9;function Rw(){if(!Ut)return;Ut.resize();let r=innerWidth/innerHeight<.9;r!==cv&&Ut.S.names.prog===0&&Ut.buildNames(),cv=r}function Pw(){let r=Ut.S;r.cam.y=r.cam.ty=Ut.introY(Ut.introDist());let e=zs.create(".qamar-lat",{type:"chars"}),t=ot.timeline();t.to("#loader",{autoAlpha:0,duration:1.1,ease:"power2.inOut"}).add(()=>document.body.classList.remove("loading")).to(r.fx,{fade:0,duration:2.4,ease:"power2.out"},.2).fromTo(r.sun,{theta:122*Np},{theta:35*Np,duration:4.6,ease:"power2.inOut"},.2).to(r.moon,{halo:1,duration:3},1.8).fromTo(r.cam,{z:Ut.introDist()*1.4},{z:Ut.introDist(),duration:5,ease:"expo.out"},.2).add(gv(lt(".intro-arch"),{duration:2.6}),1.4).from(".kicker",{opacity:0,y:16,duration:1.2,ease:"power3.out"},2.2).from(".qamar",{opacity:0,y:30,scale:.94,filter:"blur(14px)",duration:1.8,ease:"expo.out"},2.4).from(e.chars,{opacity:0,y:12,filter:"blur(6px)",stagger:.07,duration:1,ease:"power3.out"},2.9).from(".enter",{opacity:0,y:24,duration:1.2,ease:"expo.out"},3.4).from(".sound-hint",{opacity:0,duration:1},3.9).add(()=>{ot.to(".enter-ring",{scale:1.08,opacity:.55,duration:1.4,ease:"sine.inOut",yoyo:!0,repeat:-1}),Iw()},3.6),kp&&t.progress(1)}function Iw(){let r=lt("#gl"),e=t=>{if(Ut.S.pointer.x=t.clientX/innerWidth*2-1,Ut.S.pointer.y=t.clientY/innerHeight*2-1,js)return;let i=Ut.hitMoon(t.clientX,t.clientY);r.style.cursor=i?"pointer":"",ma.classList.toggle("big",i)};addEventListener("pointermove",e),r.addEventListener("click",t=>{Ut.hitMoon(t.clientX,t.clientY)&&hv()}),lt("#enter").addEventListener("click",hv)}function hv(){if(js)return;js=!0,document.body.classList.add("cine"),pv(),navigator.vibrate?.(18),ma.classList.remove("big"),ot.killTweensOf(".enter-ring");let r=Ut.S,e=Ut.poses,t=zs.create(".ar-hero",{type:"words"});lt("#skip").hidden=!1,ot.from("#skip",{opacity:0,duration:1,delay:1.5});let i=ot.timeline({onComplete:_v});zp=i,i.to(".intro-top > *",{y:-34,opacity:0,filter:"blur(10px)",stagger:.07,duration:.8,ease:"power2.in"},0).to(".intro-bottom",{y:34,opacity:0,duration:.6,ease:"power2.in"},0).to(".intro-arch",{scale:1.35,opacity:0,duration:1.6,ease:"power2.in"},.05).set("#intro",{display:"none"},1.7).to(r.cam,{z:Ut.introDist()*1.07,duration:.7,ease:"power2.out"},0).to(r.cam,{y:0,ty:0,z:1.3,fov:56,duration:3.1,ease:"expo.inOut"},.6).to(r.fx,{zoom:.17,duration:1.5,ease:"power3.in"},1).to(r.fx,{zoom:0,duration:1.7,ease:"power3.out"},2.5).to(r.moon,{halo:0,duration:1.4},1).to(r.sun,{theta:78*Np,duration:6.5,ease:"sine.inOut"},.8).to(r.cam,{x:e.landPos.x,y:e.landPos.y,z:e.landPos.z,tx:e.landTarget.x,ty:e.landTarget.y,tz:e.landTarget.z,fov:e.landFov(),duration:3.8,ease:"power3.inOut"},3.3).to(r.shadow,{amt:1,duration:2.6,ease:"power1.inOut"},4.2).to(r.fx,{exposure:1.5,bloom:.4,duration:3,ease:"power1.inOut"},4).to(".frame-fixed",{opacity:1,duration:2},5.8).set(r.earth,{show:1},5).fromTo(r.earth,{rise:0},{rise:1,duration:7.5,ease:"power1.out"},5).to(".bism",{opacity:1,duration:1.4,ease:"power2.out"},6.6).set(".ar-hero",{opacity:1},7).from(t.words,{opacity:0,y:24,filter:"blur(12px)",duration:1.6,stagger:.28,ease:"expo.out"},7).fromTo(".fr-hero",{opacity:0,y:14},{opacity:1,y:0,duration:1.4,ease:"power3.out"},7.9).to(".st-verse .ref",{opacity:.9,duration:1.2},8.4).to(r.orbs,{show:1,i:1.5,duration:1.3,ease:"power2.out"},8.6).fromTo(r.orbs,{p:0},{p:1,duration:4.6,ease:"power1.in"},8.6).to(".st-verse",{opacity:0,y:-24,filter:"blur(8px)",duration:1.1,ease:"power2.in"},12).to(r.orbs,{i:10,duration:.25,ease:"power2.in"},12.95).to(r.fx,{flash:.6,bloom:1.9,duration:.2,ease:"power2.in"},13.05).to(r.burst,{a:1,duration:.15},13.1).add(()=>navigator.vibrate?.([25,40,35]),13.15).to(r.orbs,{i:0,show:0,duration:1.2,ease:"power2.out"},13.25).to(r.fx,{flash:0,duration:1.5,ease:"power2.out"},13.25).to(r.fx,{bloom:Vp?.42:.55,duration:3,ease:"power2.out"},13.3).to(r.burst,{a:0,duration:1.8,ease:"power2.out"},13.3).fromTo(r.burst,{ring:0},{ring:1,duration:2.6,ease:"expo.out"},13.15).fromTo(r.names,{prog:0},{prog:1,duration:3.3,ease:"none"},13.15).fromTo(".sub1",{opacity:0,y:16,letterSpacing:".6em"},{opacity:1,y:0,letterSpacing:".32em",duration:1.8,ease:"expo.out"},15.4).fromTo(".sub2",{opacity:0,y:12},{opacity:1,y:0,duration:1.4,ease:"power3.out"},15.9).to(".scroll-cue",{autoAlpha:1,duration:1.2},16.6).set("#skip",{display:"none"},16.6),kp&&i.progress(1)}lt("#skip").addEventListener("click",()=>zp&&zp.progress(1));function _v(){lv||(lv=!0,document.body.classList.remove("locked","cine"),document.body.classList.add("unlocked"),Ut&&(Ut.S.mode="scroll",Ut.buildScrollPath()),_a.start(),Lw(),Ke.refresh())}function Lw(){Ut&&ot.to(Ut.S.scroll,{p:1,ease:"none",scrollTrigger:{trigger:"#content",start:"top top",end:"bottom bottom",scrub:1.4}}),lt(".sc-btn").addEventListener("click",()=>_a.scrollTo("#verset",{duration:1.8})),ot.to(".st-sub, .scroll-cue",{autoAlpha:0,y:-50,ease:"none",stagger:.02,scrollTrigger:{trigger:".landing-space",start:"top top",end:"45% top",scrub:!0}});let r=lt(".progress");ot.to(r,{opacity:Vp?0:1,duration:1}),Ke.create({trigger:"#content",start:"top top",end:"bottom bottom",onUpdate:s=>{ot.set(".pg-line",{scaleY:s.progress}),ot.set(".pg-star",{y:s.progress*r.offsetHeight-4})}}),un(".split-fr").forEach(s=>zs.create(s,{type:"lines",mask:"lines",autoSplit:!0,onSplit:o=>ot.from(o.lines,{yPercent:110,opacity:0,duration:1.3,stagger:.1,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 86%",once:!0}})})),un(".split-ar").forEach(s=>{let o=zs.create(s,{type:"words",wordsClass:"w-ar"});ot.from(o.words,{opacity:0,y:26,filter:"blur(10px)",duration:1.5,stagger:.07,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 85%",once:!0}})}),un(".rv").forEach(s=>ot.from(s,{opacity:0,y:34,filter:"blur(6px)",duration:1.3,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 88%",once:!0}})),un("#content [data-arch], #content [data-divider]").forEach(s=>{let o=gv(s,{duration:s.matches("[data-divider]")?1.6:2.6});o.pause(),Ke.create({trigger:s,start:"top 82%",once:!0,onEnter:()=>o.play()})}),un("#content .divider .spin").forEach(s=>ot.to(s,{rotation:360,transformOrigin:"50% 50%",duration:22,repeat:-1,ease:"none"})),ot.to(".pair-star",{rotation:360,duration:30,repeat:-1,ease:"none"}),un(".card, .verse-frame").forEach(s=>ot.fromTo(s,{y:80,scale:.94,opacity:0},{y:0,scale:1,opacity:1,ease:"expo.out",duration:1.6,scrollTrigger:{trigger:s,start:"top 92%",once:!0}})),un(".rings i").forEach((s,o)=>ot.from(s,{x:o%2?40:-40,opacity:0,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 85%",once:!0}}));let e=un(".hcard");e.forEach((s,o)=>{s.style.setProperty("--i",o),ot.from(s,{y:120,rotateX:-12,opacity:0,duration:1.4,ease:"expo.out",transformPerspective:900,scrollTrigger:{trigger:s,start:"top 95%",once:!0}}),o<e.length-1&&ot.to(s,{scale:.92,opacity:.35,ease:"none",scrollTrigger:{trigger:e[o+1],start:"top 85%",end:"top 20%",scrub:!0}})}),un(".lanterns").forEach(s=>ot.from(un(".lantern",s),{yPercent:-120,duration:2.2,ease:"elastic.out(1,0.45)",stagger:.18,scrollTrigger:{trigger:s.parentElement,start:"top 75%",once:!0}}));let t=un(".lantern").map(s=>ot.quickSetter(s,"rotation","deg")),i=0,n=0;_a.on("scroll",s=>{i=s.velocity}),ot.ticker.add(s=>{n+=(Math.max(-16,Math.min(16,i*.7))-n)*.06,i*=.9,t.forEach((o,a)=>o(Math.sin(s*1.2+a*1.7)*2.5-n))})}function uv(){document.body.classList.add("no-gl"),lt("#fallback").hidden=!1,ot.to("#loader",{autoAlpha:0,duration:.8}),document.body.classList.remove("loading"),lt(".frame-fixed").style.opacity=1,lt("#enter").addEventListener("click",()=>{if(js)return;js=!0,pv(),ot.to("#intro, #fallback",{autoAlpha:0,duration:1});let r=document.createElement("p");r.className="script huge",r.textContent="Shayma & Bilal",r.style.cssText="position:absolute;left:0;right:0;top:44%;text-align:center;font-size:clamp(3rem,13vw,7rem)",lt("#stage").appendChild(r),ot.to(".bism, .ar-hero, .fr-hero, .st-verse .ref, .sub1, .sub2, .scroll-cue",{autoAlpha:1,duration:1.2,stagger:.15}),_v()})}Cw();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
