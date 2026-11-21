var lx=Object.defineProperty;var cx=(r,t,e)=>t in r?lx(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Bt=(r,t,e)=>cx(r,typeof t!="symbol"?t+"":t,e);function cr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Wp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ya={duration:.5,overwrite:!1,delay:0},sf,yi,ze,An=1e8,Ce=1/An,Ju=Math.PI*2,hx=Ju/4,ux=0,Xp=Math.sqrt,fx=Math.cos,dx=Math.sin,ai=function(t){return typeof t=="string"},Ze=function(t){return typeof t=="function"},ur=function(t){return typeof t=="number"},sc=function(t){return typeof t>"u"},Zn=function(t){return typeof t=="object"},an=function(t){return t!==!1},of=function(){return typeof window<"u"},$l=function(t){return Ze(t)||ai(t)},qp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pi=Array.isArray,px=/random\([^)]+\)/g,mx=/,\s*/g,Op=/(?:-?\.?\d|\.)+/gi,af=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lf=/[+-]=-?[.\d]+/,gx=/[^,'"\[\]\s]+/gi,_x=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,We,Yn,Ku,cf,dn={},Ql={},Yp,$p=function(t){return(Ql=Ks(t,dn))&&Ii},oc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Sa=function(t,e){return!e&&console.warn(t)},Zp=function(t,e){return t&&(dn[t]=e)&&Ql&&(Ql[t]=e)||dn},Ma=function(){return 0},xx={suppressEvents:!0,isStart:!0,kill:!1},Zl={suppressEvents:!0,kill:!1},vx={suppressEvents:!0},hf={},Vr=[],Qu={},Jp,sn={},Wu={},Fp=30,Jl=[],uf="",ff=function(t){var e=t[0],i,n;if(Zn(e)||Ze(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Jl.length;n--&&!Jl[n].targetTest(e););i=Jl[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new gf(t[n],i)))||t.splice(n,1);return t},Hr=function(t){return t._gsap||ff(Cn(t))[0]._gsap},df=function(t,e,i){return(i=t[e])&&Ze(i)?t[e]():sc(i)&&t.getAttribute&&t.getAttribute(e)||i},Xi=function(t,e){return(t=t.split(",")).forEach(e)||t},Je=function(t){return Math.round(t*1e5)/1e5||0},Ge=function(t){return Math.round(t*1e7)/1e7||0},Ms=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},yx=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},jl=function(){var t=Vr.length,e=Vr.slice(0),i,n;for(Qu={},Vr.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},pf=function(t){return!!(t._initted||t._startAt||t.add)},Kp=function(t,e,i,n){Vr.length&&!yi&&jl(),t.render(e,i,n||!!(yi&&e<0&&pf(t))),Vr.length&&!yi&&jl()},Qp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(gx).length<2?e:ai(t)?t.trim():t},jp=function(t){return t},pn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Sx=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},Ks=function(t,e){for(var i in e)t[i]=e[i];return t},Bp=function r(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Zn(e[i])?r(t[i]||(t[i]={}),e[i]):e[i]);return t},tc=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},_a=function(t){var e=t.parent||We,i=t.keyframes?Sx(Pi(t.keyframes)):pn;if(an(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Mx=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},tm=function(t,e,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},ac=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[n]===e&&(t[n]=s),e._next=e._prev=e.parent=null},Gr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},xs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},bx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ju=function(t,e,i,n){return t._startAt&&(yi?t._startAt.revert(Zl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},Tx=function r(t){return!t||t._ts&&r(t.parent)},zp=function(t){return t._repeat?Qs(t._tTime,t=t.duration()+t._rDelay)*t:0},Qs=function(t,e){var i=Math.floor(t=Ge(t/e));return t&&i===t?i-1:i},ec=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},lc=function(t){return t._end=Ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ce)||0))},cc=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Ge(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),lc(t),i._dirty||xs(i,t)),t},em=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=ec(t.rawTime(),e),(!e._dur||Ea(0,e.totalDuration(),i)-e._tTime>Ce)&&e.render(i,!0)),xs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Ce}},$n=function(t,e,i,n){return e.parent&&Gr(e),e._start=Ge((ur(i)?i:!i&&ic(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:i||t!==We?En(t,i,e):t._time)+e._delay),e._end=Ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),tm(t,e,"_first","_last",t._sort?"_start":0),ic(e)||(t._recent=e),n||em(t,e),t._ts<0&&cc(t,t._tTime),t},im=function(t,e){return(dn.ScrollTrigger||oc("scrollTrigger",e))&&dn.ScrollTrigger.create(e,t)},nm=function(t,e,i,n,s){if(vf(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!yi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Jp!==on.frame)return Vr.push(t),t._lazy=[s,n],1},wx=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ic=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ex=function(t,e,i,n){var s=t.ratio,o=e<0||!e&&(!t._start&&wx(t)&&!(!t._initted&&ic(t))||(t._ts<0||t._dp._ts<0)&&!ic(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Ea(0,t._tDur,e),h=Qs(l,a),t._yoyo&&h&1&&(o=1-o),h!==Qs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||yi||n||t._zTime===Ce||!e&&t._zTime){if(!t._initted&&nm(t,e,n,i,l))return;for(d=t._zTime,t._zTime=e||(i?Ce:0),i||(i=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ju(t,e,i,!0),t._onUpdate&&!i&&fn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&fn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Gr(t,1),!i&&!yi&&(fn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ax=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},js=function(t,e,i,n){var s=t._repeat,o=Ge(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ge(o*(s+1)+t._rDelay*s):o,a>0&&!n&&cc(t,t._tTime=t._tDur*a),t.parent&&lc(t),i||xs(t.parent,t),t},kp=function(t){return t instanceof Ri?xs(t):js(t,t._dur)},Cx={_start:0,endTime:Ma,totalDuration:Ma},En=function r(t,e,i){var n=t.labels,s=t._recent||Cx,o=t.duration()>=An?s.endTime(!1):t._dur,a,l,c;return ai(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(Pi(i)?i[0]:i).totalDuration()),a>1?r(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},xa=function(t,e,i){var n=ur(e[1]),s=(n?2:1)+(t<2?0:1),o=e[s],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=an(l.vars.inherit)&&l.parent;o.immediateRender=an(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ti(e[0],o,e[s+1])},Wr=function(t,e){return t||t===0?e(t):e},Ea=function(t,e,i){return i<t?t:i>e?e:i},Si=function(t,e){return!ai(t)||!(e=_x.exec(t))?"":e[1]},Rx=function(t,e,i){return Wr(i,function(n){return Ea(t,e,n)})},tf=[].slice,rm=function(t,e){return t&&Zn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Zn(t[0]))&&!t.nodeType&&t!==Yn},Px=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return ai(n)&&!e||rm(n,1)?(s=i).push.apply(s,Cn(n)):i.push(n)})||i},Cn=function(t,e,i){return ze&&!e&&ze.selector?ze.selector(t):ai(t)&&!i&&(Ku||!to())?tf.call((e||cf).querySelectorAll(t),0):Pi(t)?Px(t,i):rm(t)?tf.call(t,0):t?[t]:[]},ef=function(t){return t=Cn(t)[0]||Sa("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Cn(e,i.querySelectorAll?i:i===t?Sa("Invalid scope")||cf.createElement("div"):t)}},sm=function(t){return t.sort(function(){return .5-Math.random()})},om=function(t){if(Ze(t))return t;var e=Zn(t)?t:{each:t},i=vs(e.ease),n=e.from||0,s=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,h=n,d=n;return ai(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],d=n[1]),function(u,f,p){var x=(p||e).length,m=o[x],g,v,E,y,b,w,_,S,P;if(!m){if(P=e.grid==="auto"?0:(e.grid||[1,An])[1],!P){for(_=-An;_<(_=p[P++].getBoundingClientRect().left)&&P<x;);P<x&&P--}for(m=o[x]=[],g=l?Math.min(P,x)*h-.5:n%P,v=P===An?0:l?x*d/P-.5:n/P|0,_=0,S=An,w=0;w<x;w++)E=w%P-g,y=v-(w/P|0),m[w]=b=c?Math.abs(c==="y"?y:E):Xp(E*E+y*y),b>_&&(_=b),b<S&&(S=b);n==="random"&&sm(m),m.max=_-S,m.min=S,m.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(P>x?x-1:c?c==="y"?x/P:P:Math.max(P,x/P))||0)*(n==="edges"?-1:1),m.b=x<0?s-x:s,m.u=Si(e.amount||e.each)||0,i=i&&x<0?Gx(i):i}return x=(m[u]-m.min)/m.max||0,Ge(m.b+(i?i(x):x)*m.v)+m.u}},nf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=Ge(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(ur(i)?0:Si(i))}},am=function(t,e){var i=Pi(t),n,s;return!i&&Zn(t)&&(n=i=t.radius||An,t.values?(t=Cn(t.values),(s=!ur(t[0]))&&(n*=n)):t=nf(t.increment)),Wr(e,i?Ze(t)?function(o){return s=t(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=An,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!n||c<=n?t[h]:o,s||h===o||ur(o)?h:h+Si(o)}:nf(t))},lm=function(t,e,i,n){return Wr(Pi(t)?!e:i===!0?!!(i=0):!n,function(){return Pi(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},Ix=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(s,o){return o(s)},n)}},Lx=function(t,e){return function(i){return t(parseFloat(i))+(e||Si(i))}},Dx=function(t,e,i){return hm(t,e,0,1,i)},cm=function(t,e,i){return Wr(i,function(n){return t[~~e(n)]})},Nx=function r(t,e,i){var n=e-t;return Pi(t)?cm(t,r(0,t.length),e):Wr(i,function(s){return(n+(s-t)%n)%n+t})},Ux=function r(t,e,i){var n=e-t,s=n*2;return Pi(t)?cm(t,r(0,t.length-1),e):Wr(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>n?s-o:o)})},eo=function(t){return t.replace(px,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(mx);return lm(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},hm=function(t,e,i,n,s){var o=e-t,a=n-i;return Wr(s,function(l){return i+((l-t)/o*a||0)})},Ox=function r(t,e,i,n){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=ai(t),a={},l,c,h,d,u;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(Pi(t)&&!Pi(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(p){p*=d;var x=Math.min(u,~~p);return h[x](p-x)},i=e}else n||(t=Ks(Pi(t)?[]:{},t));if(!h){for(l in e)_f.call(a,t,l,"get",e[l]);s=function(p){return Mf(p,a)||(o?t.p:t)}}}return Wr(i,s)},Vp=function(t,e,i){var n=t.labels,s=An,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},fn=function(t,e,i){var n=t.vars,s=n[e],o=ze,a=t._ctx,l,c,h;if(s)return l=n[e+"Params"],c=n.callbackScope||t,i&&Vr.length&&jl(),a&&(ze=a),h=l?s.apply(c,l):s.call(c),ze=o,h},ma=function(t){return Gr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!yi),t.progress()<1&&fn(t,"onInterrupt"),t},Js,um=[],fm=function(t){if(t)if(t=!t.name&&t.default||t,of()||t.headless){var e=t.name,i=Ze(t),n=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Ma,render:Mf,add:_f,kill:jx,modifier:Qx,rawVars:0},o={targetTest:0,get:0,getSetter:hc,aliases:{},register:0};if(to(),t!==n){if(sn[e])return;pn(n,pn(tc(t,s),o)),Ks(n.prototype,Ks(s,tc(t,o))),sn[n.prop=e]=n,t.targetTest&&(Jl.push(n),hf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Zp(e,n),t.register&&t.register(Ii,n,qi)}else um.push(t)},Pe=255,ga={aqua:[0,Pe,Pe],lime:[0,Pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pe],navy:[0,0,128],white:[Pe,Pe,Pe],olive:[128,128,0],yellow:[Pe,Pe,0],orange:[Pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pe,0,0],pink:[Pe,192,203],cyan:[0,Pe,Pe],transparent:[Pe,Pe,Pe,0]},Xu=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Pe+.5|0},dm=function(t,e,i){var n=t?ur(t)?[t>>16,t>>8&Pe,t&Pe]:0:ga.black,s,o,a,l,c,h,d,u,f,p;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ga[t])n=ga[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&Pe,n&Pe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&Pe,t&Pe]}else if(t.substr(0,3)==="hsl"){if(n=p=t.match(Op),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,n.length>3&&(n[3]*=1),n[0]=Xu(l+1/3,s,o),n[1]=Xu(l,s,o),n[2]=Xu(l-1/3,s,o);else if(~t.indexOf("="))return n=t.match(af),i&&n.length<4&&(n[3]=1),n}else n=t.match(Op)||ga.transparent;n=n.map(Number)}return e&&!p&&(s=n[0]/Pe,o=n[1]/Pe,a=n[2]/Pe,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},pm=function(t){var e=[],i=[],n=-1;return t.split(hr).forEach(function(s){var o=s.match(Ss)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},Hp=function(t,e,i){var n="",s=(t+n).match(hr),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=dm(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(h=pm(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(hr,"1").split(Ss),d=c.length-1;a<d;a++)n+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=t.split(hr),d=c.length-1;a<d;a++)n+=c[a]+s[a];return n+c[d]},hr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ga)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Fx=/hsl[a]?\(/,mf=function(t){var e=t.join(" "),i;if(hr.lastIndex=0,hr.test(e))return i=Fx.test(e),t[1]=Hp(t[1],i),t[0]=Hp(t[0],i,pm(t[1])),!0},ba,on=(function(){var r=Date.now,t=500,e=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,c,h,d,u,f,p=function x(m){var g=r()-n,v=m===!0,E,y,b,w;if((g>t||g<0)&&(i+=g-e),n+=g,b=n-i,E=b-o,(E>0||v)&&(w=++d.frame,u=b-d.time*1e3,d.time=b=b/1e3,o+=E+(E>=s?0:s-E),y=1),v||(l=c(x)),y)for(f=0;f<a.length;f++)a[f](b,u,w,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Yp&&(!Ku&&of()&&(Yn=Ku=window,cf=Yn.document||{},dn.gsap=Ii,(Yn.gsapVersions||(Yn.gsapVersions=[])).push(Ii.version),$p(Ql||Yn.GreenSockGlobals||!Yn.gsap&&Yn||{}),um.forEach(fm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},ba=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ba=0,c=Ma},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,g,v){var E=g?function(y,b,w,_){m(y,b,w,_),d.remove(E)}:m;return d.remove(m),a[v?"unshift":"push"](E),to(),E},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),to=function(){return!ba&&on.wake()},_e={},Bx=/^[\d.\-M][\d.\-,\s]/,zx=/["']/g,kx=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(zx,"").trim():+c,n=l.substr(a+1).trim();return e},Vx=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},Hx=function(t){var e=(t+"").split("("),i=_e[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[kx(e[1])]:Vx(t).split(",").map(Qp)):_e._CE&&Bx.test(t)?_e._CE("",t):i},Gx=function(t){return function(e){return 1-t(1-e)}},vs=function(t,e){return t&&(Ze(t)?t:_e[t]||Hx(t))||e},bs=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:n},o;return Xi(t,function(a){_e[a]=dn[a]=s,_e[o=a.toLowerCase()]=i;for(var l in s)_e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_e[a+"."+l]=s[l]}),s},mm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},qu=function r(t,e,i){var n=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/Ju*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*dx((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:mm(a);return s=Ju/s,l.config=function(c,h){return r(t,c,h)},l},Yu=function r(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:mm(i);return n.config=function(s){return r(t,s)},n};Xi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;bs(r+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});_e.Linear.easeNone=_e.none=_e.Linear.easeIn;bs("Elastic",qu("in"),qu("out"),qu());(function(r,t){var e=1/t,i=2*e,n=2.5*e,s=function(a){return a<e?r*a*a:a<i?r*Math.pow(a-1.5/t,2)+.75:a<n?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};bs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);bs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});bs("Circ",function(r){return-(Xp(1-r*r)-1)});bs("Sine",function(r){return r===1?1:-fx(r*hx)+1});bs("Back",Yu("in"),Yu("out"),Yu());_e.SteppedEase=_e.steps=dn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),s=e?1:0,o=1-Ce;return function(a){return((n*Ea(0,o,a)|0)+s)*i}}};ya.ease=_e["quad.out"];Xi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return uf+=r+","+r+"Params,"});var gf=function(t,e){this.id=ux++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:df,this.set=e?e.getSetter:hc},Ta=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,js(this,+e.duration,1,1),this.data=e.data,ze&&(this._ctx=ze,ze.data.push(this)),ba||on.wake()}var t=r.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,js(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(to(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(cc(this,i),!s._dp||s.parent||em(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Ce||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Kp(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+zp(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+zp(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?Qs(this._tTime,s)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-Ce?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ec(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-Ce?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(Ea(-Math.abs(this._delay),a,s),n!==!1),lc(this),bx(this)},t.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{to(),this._ts=this._rts;var n=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Ce,o;if(s)for(this._tTime-=Ce,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=n+Ce){s=!1;break}o=o._next}this.totalTime(n,s)}return this},t.startTime=function(i){if(arguments.length){this._start=Ge(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&$n(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(an(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ec(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=vx);var n=yi;return yi=i,pf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yi=n,this},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,kp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,kp(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(En(this,i),an(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,an(n)),this._dur||(this._zTime=-Ce),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ce,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Ce)},t.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this,s=n._prom;return new Promise(function(o){var a=Ze(i)?i:jp,l=function(){var h=n.then;n.then=null,s&&s(),Ze(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=h),o(a),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){ma(this)},r})();pn(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ce,_prom:0,_ps:!1,_rts:1});var Ri=(function(r){Wp(t,r);function t(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=an(i.sortChildren),We&&$n(i.parent||We,cr(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&im(cr(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(n,s,o){return xa(0,arguments,this),this},e.from=function(n,s,o){return xa(1,arguments,this),this},e.fromTo=function(n,s,o,a){return xa(2,arguments,this),this},e.set=function(n,s,o){return s.duration=0,s.parent=this,_a(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ti(n,s,En(this,o),1),this},e.call=function(n,s,o){return $n(this,ti.delayedCall(0,n,s),o)},e.staggerTo=function(n,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ti(n,o,En(this,l)),this},e.staggerFrom=function(n,s,o,a,l,c,h){return o.runBackwards=1,_a(o).immediateRender=an(o.immediateRender),this.staggerTo(n,s,o,a,l,c,h)},e.staggerFromTo=function(n,s,o,a,l,c,h,d){return a.startAt=o,_a(a).immediateRender=an(a.immediateRender),this.staggerTo(n,s,a,l,c,h,d)},e.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Ge(n),d=this._zTime<0!=n<0&&(this._initted||!c),u,f,p,x,m,g,v,E,y,b,w,_;if(this!==We&&h>l&&n>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),u=h,y=this._start,E=this._ts,g=!E,d&&(c||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,o);if(u=Ge(h%m),h===l?(x=this._repeat,u=c):(b=Ge(h/m),x=~~b,x&&x===b&&(u=c,x--),u>c&&(u=c)),b=Qs(this._tTime,m),!a&&this._tTime&&b!==x&&this._tTime-b*m-this._dur<=0&&(b=x),w&&x&1&&(u=c-u,_=1),x!==b&&!this._lock){var S=w&&b&1,P=S===(w&&x&1);if(x<b&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(_?0:Ge(x*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&fn(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,b=x),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Ax(this,Ge(a),Ge(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&c&&!s&&!b&&(fn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&n>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=-Ce);break}}f=p}else{f=this._last;for(var A=n<0?n:u;f;){if(p=f._prev,(f._act||A<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,s,o||yi&&pf(f)),u!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=A?-Ce:Ce);break}}f=p}}if(v&&!s&&(this.pause(),v.render(u>=a?0:-Ce)._zTime=u>=a?1:-1,this._ts))return this._start=y,lc(this),this.render(n,s,o);this._onUpdate&&!s&&fn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Gr(this,1),!s&&!(n<0&&!a)&&(h||a||!l)&&(fn(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,s){var o=this;if(ur(s)||(s=En(this,s,n)),!(n instanceof Ta)){if(Pi(n))return n.forEach(function(a){return o.add(a,s)}),this;if(ai(n))return this.addLabel(n,s);if(Ze(n))n=ti.delayedCall(0,n);else return this}return this!==n?$n(this,n,s):this},e.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-An);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ti?s&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},e.remove=function(n){return ai(n)?this.removeLabel(n):Ze(n)?this.killTweensOf(n):(n.parent===this&&ac(this,n),n===this._recent&&(this._recent=this._last),xs(this))},e.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ge(on.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},e.addLabel=function(n,s){return this.labels[n]=En(this,s),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,s,o){var a=ti.delayedCall(0,s||Ma,o);return a.data="isPause",this._hasPause=1,$n(this,a,En(this,n))},e.removePause=function(n){var s=this._first;for(n=En(this,n);s;)s._start===n&&s.data==="isPause"&&Gr(s),s=s._next},e.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)kr!==a[l]&&a[l].kill(n,s);return this},e.getTweensOf=function(n,s){for(var o=[],a=Cn(n),l=this._first,c=ur(s),h;l;)l instanceof ti?yx(l._targets,a)&&(c?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(n,s){s=s||{};var o=this,a=En(o,n),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=ti.to(o,pn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ce,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&js(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},s));return u?p.render(0):p},e.tweenFromTo=function(n,s,o){return this.tweenTo(s,pn({startAt:{time:En(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),Vp(this,En(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),Vp(this,En(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Ce)},e.shiftChildren=function(n,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=Ge(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=n);return xs(this)},e.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),xs(this)},e.totalDuration=function(n){var s=0,o=this,a=o._last,l=An,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$n(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ge(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;js(o,o===We&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(We._ts&&(Kp(We,ec(n,We)),Jp=on.frame),on.frame>=Fp){Fp+=ln.autoSleep||120;var s=We._first;if((!s||!s._ts)&&ln.autoSleep&&on._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||on.sleep()}}},t})(Ta);pn(Ri.prototype,{_lock:0,_hasPause:0,_forcing:0});var Wx=function(t,e,i,n,s,o,a){var l=new qi(this._pt,t,e,0,1,Sf,null,s),c=0,h=0,d,u,f,p,x,m,g,v;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=eo(n)),o&&(v=[i,n],o(v,t,e),i=v[0],n=v[1]),u=i.match(Gu)||[];d=Gu.exec(n);)p=d[0],x=n.substring(c,d.index),f?f=(f+1)%5:x.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:m,c:p.charAt(1)==="="?Ms(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Gu.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(lf.test(n)||g)&&(l.e=0),this._pt=l,l},_f=function(t,e,i,n,s,o,a,l,c,h){Ze(n)&&(n=n(s||0,t,o));var d=t[e],u=i!=="get"?i:Ze(d)?c?t[e.indexOf("set")||!Ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ze(d)?c?Zx:_m:yf,p;if(ai(n)&&(~n.indexOf("random(")&&(n=eo(n)),n.charAt(1)==="="&&(p=Ms(u,n)+(Si(u)||0),(p||p===0)&&(n=p))),!h||u!==n||rf)return!isNaN(u*n)&&n!==""?(p=new qi(this._pt,t,e,+u||0,n-(u||0),typeof d=="boolean"?Kx:xm,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&oc(e,n),Wx.call(this,t,e,u,n,f,l||ln.stringFilter,c))},Xx=function(t,e,i,n,s){if(Ze(t)&&(t=va(t,s,e,i,n)),!Zn(t)||t.style&&t.nodeType||Pi(t)||qp(t))return ai(t)?va(t,s,e,i,n):t;var o={},a;for(a in t)o[a]=va(t[a],s,e,i,n);return o},xf=function(t,e,i,n,s,o){var a,l,c,h;if(sn[t]&&(a=new sn[t]).init(s,a.rawVars?e[t]:Xx(e[t],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new qi(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==Js))for(c=i._ptLookup[i._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},kr,rf,vf=function r(t,e,i){var n=t.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,u=n.keyframes,f=n.autoRevert,p=t._dur,x=t._startAt,m=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:m,E=t._overwrite==="auto"&&!sf,y=t.timeline,b=n.easeReverse||d,w,_,S,P,A,U,L,V,I,z,H,O,nt;if(y&&(!u||!s)&&(s="none"),t._ease=vs(s,ya.ease),t._rEase=b&&(vs(b)||t._ease),t._from=!y&&!!n.runBackwards,t._from&&(t.ratio=1),!y||u&&!n.stagger){if(V=m[0]?Hr(m[0]).harness:0,O=V&&n[V.prop],w=tc(n,hf),x&&(x._zTime<0&&x.progress(1),e<0&&h&&a&&!f?x.render(-1,!0):x.revert(h&&p?Zl:xx),x._lazy=0),o){if(Gr(t._startAt=ti.set(m,pn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&an(l),startAt:null,delay:0,onUpdate:c&&function(){return fn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yi||!a&&!f)&&t._startAt.revert(Zl),a&&p&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&p&&!x){if(e&&(a=!1),S=pn({overwrite:!1,data:"isFromStart",lazy:a&&!x&&an(l),immediateRender:a,stagger:0,parent:g},w),O&&(S[V.prop]=O),Gr(t._startAt=ti.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yi?t._startAt.revert(Zl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Ce,Ce);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&an(l)||l&&!p,_=0;_<m.length;_++){if(A=m[_],L=A._gsap||ff(m)[_]._gsap,t._ptLookup[_]=z={},Qu[L.id]&&Vr.length&&jl(),H=v===m?_:v.indexOf(A),V&&(I=new V).init(A,O||w,t,H,v)!==!1&&(t._pt=P=new qi(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){z[W]=P}),I.priority&&(U=1)),!V||O)for(S in w)sn[S]&&(I=xf(S,w,t,H,A,v))?I.priority&&(U=1):z[S]=P=_f.call(t,A,S,"get",w[S],H,v,0,n.stringFilter);t._op&&t._op[_]&&t.kill(A,t._op[_]),E&&t._pt&&(kr=t,We.killTweensOf(A,z,t.globalTime(e)),nt=!t.parent,kr=0),t._pt&&l&&(Qu[L.id]=1)}U&&bf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!nt,u&&e<=0&&y.render(An,!0,!0)},qx=function(t,e,i,n,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return rf=1,t.vars[e]="+=0",vf(t,a),rf=0,l?Sa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(n||n===0)&&!s?n:h.s+(n||0)+o*h.c,h.c=i-h.s,d.e&&(d.e=Je(i)+Si(d.e)),d.b&&(d.b=h.s+Si(d.b))},Yx=function(t,e){var i=t[0]?Hr(t[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return e;s=Ks({},e);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},$x=function(t,e,i,n){var s=e.ease||n||"power1.inOut",o,a;if(Pi(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},va=function(t,e,i,n,s){return Ze(t)?t.call(e,i,n,s):ai(t)&&~t.indexOf("random(")?eo(t):t},nc=uf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",gm={};Xi(nc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return gm[r]=1});nc=nc.split(",");var ti=(function(r){Wp(t,r);function t(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:_a(n))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,x=l.defaults,m=l.scrollTrigger,g=n.parent||We,v=(Pi(i)||qp(i)?ur(i[0]):"length"in n)?[i]:Cn(i),E,y,b,w,_,S,P,A;if(a._targets=v.length?ff(v):Sa("GSAP target "+i+" not found. https://gsap.com",!ln.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||$l(c)||$l(h)){n=a.vars;var U=n.easeReverse||n.yoyoEase;if(E=a.timeline=new Ri({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:v}),E.kill(),E.parent=E._dp=cr(a),E._start=0,u||$l(c)||$l(h)){if(w=v.length,P=u&&om(u),Zn(u))for(_ in u)~nc.indexOf(_)&&(A||(A={}),A[_]=u[_]);for(y=0;y<w;y++)b=tc(n,gm),b.stagger=0,U&&(b.easeReverse=U),A&&Ks(b,A),S=v[y],b.duration=+va(c,cr(a),y,S,v),b.delay=(+va(h,cr(a),y,S,v)||0)-a._delay,!u&&w===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),E.to(S,b,P?P(y,S,v):0),E._ease=_e.none;E.duration()?c=h=0:a.timeline=0}else if(p){_a(pn(E.vars.defaults,{ease:"none"})),E._ease=vs(p.ease||n.ease||"none");var L=0,V,I,z;if(Pi(p))p.forEach(function(H){return E.to(v,H,">")}),E.duration();else{b={};for(_ in p)_==="ease"||_==="easeEach"||$x(_,p[_],b,p.easeEach);for(_ in b)for(V=b[_].sort(function(H,O){return H.t-O.t}),L=0,y=0;y<V.length;y++)I=V[y],z={ease:I.e,duration:(I.t-(y?V[y-1].t:0))/100*c},z[_]=I.v,E.to(v,z,L),L+=z.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return f===!0&&!sf&&(kr=cr(a),We.killTweensOf(v),kr=0),$n(g,cr(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ge(g._time)&&an(d)&&Tx(cr(a))&&g.data!=="nested")&&(a._tTime=-Ce,a.render(Math.max(0,-h)||0)),m&&im(cr(a),m),a}var e=t.prototype;return e.render=function(n,s,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,d=n>l-Ce&&!h?l:n<Ce?0:n,u,f,p,x,m,g,v,E;if(!c)Ex(this,n,s,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,E=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+n,s,o);if(u=Ge(d%x),d===l?(p=this._repeat,u=c):(m=Ge(d/x),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=Qs(this._tTime,x),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==x&&this._initted&&(this._lock=o=1,this.render(Ge(x*p),!0).invalidate()._lock=0)}if(!this._initted){if(nm(this,h?n:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,s,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var b=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(fn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;E&&E.render(n<0?n:E._dur*E._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&ju(this,n,s,o),fn(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&fn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&ju(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Gr(this,1),!s&&!(h&&!a)&&(d||a||g)&&(fn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},e.resetTo=function(n,s,o,a,l){ba||on.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||vf(this,c),h=this._ease(c/this._dur),qx(this,n,s,o,a,h,c,l)?this.resetTo(n,s,o,a,1):(cc(this,0),this.parent||tm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yi),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,kr&&kr.vars.overwrite!==!0)._first||ma(this),this.parent&&o!==this.timeline.totalDuration()&&js(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Cn(n):a,c=this._ptLookup,h=this._pt,d,u,f,p,x,m,g;if((!s||s==="all")&&Mx(a,l))return s==="all"&&(this._pt=0),ma(this);for(d=this._op=this._op||[],s!=="all"&&(ai(s)&&(x={},Xi(s,function(v){return x[v]=1}),s=x),s=Yx(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,p=u,f={}):(f=d[g]=d[g]||{},p=s);for(x in p)m=u&&u[x],m&&((!("kill"in m.d)||m.d.kill(x)===!0)&&ac(this,m,"_pt"),delete u[x]),f!=="all"&&(f[x]=1)}return this._initted&&!this._pt&&h&&ma(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return xa(1,arguments)},t.delayedCall=function(n,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,s,o){return xa(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,o){return We.killTweensOf(n,s,o)},t})(Ta);pn(ti.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xi("staggerTo,staggerFrom,staggerFromTo",function(r){ti[r]=function(){var t=new Ri,e=tf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var yf=function(t,e,i){return t[e]=i},_m=function(t,e,i){return t[e](i)},Zx=function(t,e,i,n){return t[e](n.fp,i)},Jx=function(t,e,i){return t.setAttribute(e,i)},hc=function(t,e){return Ze(t[e])?_m:sc(t[e])&&t.setAttribute?Jx:yf},xm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Kx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Sf=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Mf=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Qx=function(t,e,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(t,e,i),s=o},jx=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?ac(this,e,"_pt"):e.dep||(i=1),e=n;return!i},tv=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},bf=function(t){for(var e=t._pt,i,n,s,o;e;){for(i=e._next,n=s;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:s=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=s},qi=(function(){function r(e,i,n,s,o,a,l,c,h){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||xm,this.d=l||this,this.set=c||yf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=tv,this.m=i,this.mt=s,this.tween=n},r})();Xi(uf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return hf[r]=1});dn.TweenMax=dn.TweenLite=ti;dn.TimelineLite=dn.TimelineMax=Ri;We=new Ri({sortChildren:!1,defaults:ya,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ln.stringFilter=mf;var ys=[],Kl={},ev=[],Gp=0,iv=0,$u=function(t){return(Kl[t]||ev).map(function(e){return e()})},wa=function(){var t=Date.now(),e=[];t-Gp>2&&($u("matchMediaInit"),ys.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,c;for(a in n)o=Yn.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),$u("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Gp=t,$u("matchMedia"))},vm=(function(){function r(e,i){this.selector=i&&ef(i),this.data=[],this._r=[],this.isReverted=!1,this.id=iv++,e&&this.add(e)}var t=r.prototype;return t.add=function(i,n,s){Ze(i)&&(s=n,n=i,i=Ze);var o=this,a=function(){var c=ze,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=ef(s)),ze=o,d=n.apply(o,arguments),Ze(d)&&o._r.push(d),ze=c,o.selector=h,o.isReverted=!1,d};return o.last=a,i===Ze?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var n=ze;ze=null,i(this),ze=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof ti&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ri?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ti)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n){for(var o=ys.length;o--;)ys[o].id===this.id&&ys.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(wa):a.removeEventListener("change",wa)}),this._mqs=null}},t.revert=function(i){this.kill(i||{})},r})(),nv=(function(){function r(e){this.contexts=[],this.scope=e,ze&&ze.data.push(this)}var t=r.prototype;return t.add=function(i,n,s){Zn(i)||(i={matches:i});var o=new vm(0,s||this.scope),a=o.conditions={},l,c,h;ze&&!o.selector&&(o.selector=ze.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Yn.matchMedia(i[c]),l&&(ys.indexOf(o)<0&&ys.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(wa):l.addEventListener("change",wa),(o._mqs||(o._mqs=[])).push(l)));return h&&n(o,function(d){return o.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),rc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return fm(n)})},timeline:function(t){return new Ri(t)},getTweensOf:function(t,e){return We.getTweensOf(t,e)},getProperty:function(t,e,i,n){ai(t)&&(t=Cn(t)[0]);var s=Hr(t||{}).get,o=i?jp:Qp;return i==="native"&&(i=""),t&&(e?o((sn[e]&&sn[e].get||s)(t,e,i,n)):function(a,l,c){return o((sn[a]&&sn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Cn(t),t.length>1){var n=t.map(function(h){return Ii.quickSetter(h,e,i)}),s=n.length;return function(h){for(var d=s;d--;)n[d](h)}}t=t[0]||{};var o=sn[e],a=Hr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Js._pt=0,d.init(t,i?h+i:h,Js,0,[t]),d.render(1,d),Js._pt&&Mf(1,Js)}:a.set(t,l);return o?c:function(h){return c(t,l,i?h+i:h,a,1)}},quickTo:function(t,e,i){var n,s=Ii.to(t,pn((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return We.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=vs(t.ease,ya.ease)),Bp(ya,t||{})},config:function(t){return Bp(ln,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,s=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!sn[a]&&!dn[a]&&Sa(e+" effect requires "+a+" plugin.")}),Wu[e]=function(a,l,c){return i(Cn(a),pn(l||{},s),c)},o&&(Ri.prototype[e]=function(a,l,c){return this.add(Wu[e](a,Zn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){_e[t]=vs(e)},parseEase:function(t,e){return arguments.length?vs(t,e):_e},getById:function(t){return We.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Ri(t),n,s;for(i.smoothChildTiming=an(t.smoothChildTiming),We.remove(i),i._dp=0,i._time=i._tTime=We._time,n=We._first;n;)s=n._next,(e||!(!n._dur&&n instanceof ti&&n.vars.onComplete===n._targets[0]))&&$n(i,n,n._start-n._delay),n=s;return $n(We,i,0),i},context:function(t,e){return t?new vm(t,e):ze},matchMedia:function(t){return new nv(t)},matchMediaRefresh:function(){return ys.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||wa()},addEventListener:function(t,e){var i=Kl[t]||(Kl[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Kl[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:Nx,wrapYoyo:Ux,distribute:om,random:lm,snap:am,normalize:Dx,getUnit:Si,clamp:Rx,splitColor:dm,toArray:Cn,selector:ef,mapRange:hm,pipe:Ix,unitize:Lx,interpolate:Ox,shuffle:sm},install:$p,effects:Wu,ticker:on,updateRoot:Ri.updateRoot,plugins:sn,globalTimeline:We,core:{PropTween:qi,globals:Zp,Tween:ti,Timeline:Ri,Animation:Ta,getCache:Hr,_removeLinkedListItem:ac,reverting:function(){return yi},context:function(t){return t&&ze&&(ze.data.push(t),t._ctx=ze),ze},suppressOverwrites:function(t){return sf=t}}};Xi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return rc[r]=ti[r]});on.add(Ri.updateRoot);Js=rc.to({},{duration:0});var rv=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},sv=function(t,e){var i=t._targets,n,s,o;for(n in e)for(s=i.length;s--;)o=t._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=rv(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[s],n))},Zu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,c;if(ai(s)&&(l={},Xi(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}sv(a,s)}}}},Ii=rc.registerPlugin({name:"attr",init:function(t,e,i,n,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)yi?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Zu("roundProps",nf),Zu("modifiers"),Zu("snap",am))||rc;ti.version=Ri.version=Ii.version="3.15.1";Yp=1;of()&&to();var ov=_e.Power0,av=_e.Power1,lv=_e.Power2,cv=_e.Power3,hv=_e.Power4,uv=_e.Linear,fv=_e.Quad,dv=_e.Cubic,pv=_e.Quart,mv=_e.Quint,gv=_e.Strong,_v=_e.Elastic,xv=_e.Back,vv=_e.SteppedEase,yv=_e.Bounce,Sv=_e.Sine,Mv=_e.Expo,bv=_e.Circ;var ym,Xr,no,Rf,As,Tv,Sm,Pf,wv=function(){return typeof window<"u"},dr={},Es=180/Math.PI,ro=Math.PI/180,io=Math.atan2,Mm=1e8,If=/([A-Z])/g,Ev=/(left|right|width|margin|padding|x)/i,Av=/[\s,\(]\S/,Jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Iv=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Pm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Im=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Lv=function(t,e,i){return t.style[e]=i},Dv=function(t,e,i){return t.style.setProperty(e,i)},Nv=function(t,e,i){return t._gsap[e]=i},Uv=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Ov=function(t,e,i,n,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Fv=function(t,e,i,n,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Xe="transform",cn=Xe+"Origin",Bv=function r(t,e){var i=this,n=this.target,s=n.style,o=n._gsap;if(t in dr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Jn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=fr(n,a)}):this.tfm[t]=o.x?o[t]:fr(n,t),t===cn&&(this.tfm.zOrigin=o.zOrigin);else return Jn.transform.split(",").forEach(function(a){return r.call(i,a,e)});if(this.props.indexOf(Xe)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(cn,e,"")),t=Xe}(s||e)&&this.props.push(t,e,s[t])},Lm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zv=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(If,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Pf(),(!s||!s.isStart)&&!i[Xe]&&(Lm(i),n.zOrigin&&i[cn]&&(i[cn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Dm=function(t,e){var i={target:t,props:[],revert:zv,save:Bv};return t._gsap||Ii.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},Nm,Ef=function(t,e){var i=Xr.createElementNS?Xr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xr.createElement(t);return i&&i.style?i:Xr.createElement(t)},mn=function r(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(If,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&r(t,so(e)||e,1)||""},bm="O,Moz,ms,Ms,Webkit".split(","),so=function(t,e,i){var n=e||As,s=n.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(bm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?bm[o]:"")+t},Af=function(){wv()&&window.document&&(ym=window,Xr=ym.document,no=Xr.documentElement,As=Ef("div")||{style:{}},Tv=Ef("div"),Xe=so(Xe),cn=Xe+"Origin",As.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Nm=!!so("perspective"),Pf=Ii.core.reverting,Rf=1)},Tm=function(t){var e=t.ownerSVGElement,i=Ef("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),s;n.style.display="block",i.appendChild(n),no.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),no.removeChild(i),s},wm=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Um=function(t){var e,i;try{e=t.getBBox()}catch{e=Tm(t),i=1}return e&&(e.width||e.height)||i||(e=Tm(t)),e&&!e.width&&!e.x&&!e.y?{x:+wm(t,["x","cx","x1"])||0,y:+wm(t,["y","cy","y1"])||0,width:0,height:0}:e},Om=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Um(t))},Yr=function(t,e){if(e){var i=t.style,n;e in dr&&e!==cn&&(e=Xe),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(If,"-$1").toLowerCase())):i.removeAttribute(e)}},qr=function(t,e,i,n,s,o){var a=new qi(t._pt,e,i,0,1,o?Im:Pm);return t._pt=a,a.b=n,a.e=s,t._props.push(i),a},Em={deg:1,rad:1,turn:1},kv={grid:1,flex:1},$r=function r(t,e,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=As.style,l=Ev.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=n==="px",f=n==="%",p,x,m,g;if(n===o||!s||Em[n]||Em[o])return s;if(o!=="px"&&!u&&(s=r(t,e,i,"px")),g=t.getCTM&&Om(t),(f||o==="%")&&(dr[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],Je(f?s/p*d:s/100*p);if(a[l?"width":"height"]=d+(u?o:n),x=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===Xr||!x.appendChild)&&(x=Xr.body),m=x._gsap,m&&f&&m.width&&l&&m.time===on.time&&!m.uncache)return Je(s/m.width*d);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+n,p=t[h],v?t.style[e]=v:Yr(t,e)}else(f||o==="%")&&!kv[mn(x,"display")]&&(a.position=mn(t,"position")),x===t&&(a.position="static"),x.appendChild(As),p=As[h],x.removeChild(As),a.position="absolute";return l&&f&&(m=Hr(x),m.time=on.time,m.width=x[h]),Je(u?p*s/d:p&&s?d/p*s:0)},fr=function(t,e,i,n){var s;return Rf||Af(),e in Jn&&e!=="transform"&&(e=Jn[e],~e.indexOf(",")&&(e=e.split(",")[0])),dr[e]&&e!=="transform"?(s=Ra(t,n),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:fc(mn(t,cn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=uc[e]&&uc[e](t,e,i)||mn(t,e)||df(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?$r(t,e,s,i)+i:s},Vv=function(t,e,i,n){if(!i||i==="none"){var s=so(e,t,1),o=s&&mn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=mn(t,"borderTopColor"))}var a=new qi(this._pt,t.style,e,0,1,Sf),l=0,c=0,h,d,u,f,p,x,m,g,v,E,y,b;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=mn(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(x=t.style[e],t.style[e]=n,n=mn(t,e)||n,x?t.style[e]=x:Yr(t,e)),h=[i,n],mf(h),i=h[0],n=h[1],u=i.match(Ss)||[],b=n.match(Ss)||[],b.length){for(;d=Ss.exec(n);)m=d[0],v=n.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(x=u[c++]||"")&&(f=parseFloat(x)||0,y=x.substr((f+"").length),m.charAt(1)==="="&&(m=Ms(f,m)+y),g=parseFloat(m),E=m.substr((g+"").length),l=Ss.lastIndex-E.length,E||(E=E||ln.units[e]||y,l===n.length&&(n+=E,a.e+=E)),y!==E&&(f=$r(t,e,x,E)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:g-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?Im:Pm;return lf.test(n)&&(a.e=0),this._pt=a,a},Am={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hv=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=Am[i]||i,e[1]=Am[n]||n,e.join(" ")},Gv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,s=e.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],dr[a]&&(l=1,a=a==="transformOrigin"?cn:Xe),Yr(i,a);l&&(Yr(i,Xe),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Ra(i,1),o.uncache=1,Lm(n)))}},uc={clearProps:function(t,e,i,n,s){if(s.data!=="isFromStart"){var o=t._pt=new qi(t._pt,e,i,0,0,Gv);return o.u=n,o.pr=-10,o.tween=s,t._props.push(i),1}}},Ca=[1,0,0,1,0,0],Fm={},Bm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Cm=function(t){var e=mn(t,Xe);return Bm(e)?Ca:e.substr(7).match(af).map(Je)},Lf=function(t,e){var i=t._gsap||Hr(t),n=t.style,s=Cm(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ca:s):(s===Ca&&!t.offsetParent&&t!==no&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,no.appendChild(t)),s=Cm(t),l?n.display=l:Yr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):no.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Cf=function(t,e,i,n,s,o){var a=t._gsap,l=s||Lf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],x=l[2],m=l[3],g=l[4],v=l[5],E=e.split(" "),y=parseFloat(E[0])||0,b=parseFloat(E[1])||0,w,_,S,P;i?l!==Ca&&(_=f*m-p*x)&&(S=y*(m/_)+b*(-x/_)+(x*v-m*g)/_,P=y*(-p/_)+b*(f/_)-(f*v-p*g)/_,y=S,b=P):(w=Um(t),y=w.x+(~E[0].indexOf("%")?y/100*w.width:y),b=w.y+(~(E[1]||E[0]).indexOf("%")?b/100*w.height:b)),n||n!==!1&&a.smooth?(g=y-c,v=b-h,a.xOffset=d+(g*f+v*x)-g,a.yOffset=u+(g*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[cn]="0px 0px",o&&(qr(o,a,"xOrigin",c,y),qr(o,a,"yOrigin",h,b),qr(o,a,"xOffset",d,a.xOffset),qr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+b)},Ra=function(t,e){var i=t._gsap||new gf(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=mn(t,cn)||"0",h,d,u,f,p,x,m,g,v,E,y,b,w,_,S,P,A,U,L,V,I,z,H,O,nt,W,R,tt,vt,wt,$,ht;return h=d=u=x=m=g=v=E=y=0,f=p=1,i.svg=!!(t.getCTM&&Om(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xe]!=="none"?l[Xe]:"")),n.scale=n.rotate=n.translate="none"),_=Lf(t,i.svg),i.svg&&(i.uncache?(nt=t.getBBox(),c=i.xOrigin-nt.x+"px "+(i.yOrigin-nt.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),Cf(t,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,_)),b=i.xOrigin||0,w=i.yOrigin||0,_!==Ca&&(U=_[0],L=_[1],V=_[2],I=_[3],h=z=_[4],d=H=_[5],_.length===6?(f=Math.sqrt(U*U+L*L),p=Math.sqrt(I*I+V*V),x=U||L?io(L,U)*Es:0,v=V||I?io(V,I)*Es+x:0,v&&(p*=Math.abs(Math.cos(v*ro))),i.svg&&(h-=b-(b*U+w*V),d-=w-(b*L+w*I))):(ht=_[6],wt=_[7],R=_[8],tt=_[9],vt=_[10],$=_[11],h=_[12],d=_[13],u=_[14],S=io(ht,vt),m=S*Es,S&&(P=Math.cos(-S),A=Math.sin(-S),O=z*P+R*A,nt=H*P+tt*A,W=ht*P+vt*A,R=z*-A+R*P,tt=H*-A+tt*P,vt=ht*-A+vt*P,$=wt*-A+$*P,z=O,H=nt,ht=W),S=io(-V,vt),g=S*Es,S&&(P=Math.cos(-S),A=Math.sin(-S),O=U*P-R*A,nt=L*P-tt*A,W=V*P-vt*A,$=I*A+$*P,U=O,L=nt,V=W),S=io(L,U),x=S*Es,S&&(P=Math.cos(S),A=Math.sin(S),O=U*P+L*A,nt=z*P+H*A,L=L*P-U*A,H=H*P-z*A,U=O,z=nt),m&&Math.abs(m)+Math.abs(x)>359.9&&(m=x=0,g=180-g),f=Je(Math.sqrt(U*U+L*L+V*V)),p=Je(Math.sqrt(H*H+ht*ht)),S=io(z,H),v=Math.abs(S)>2e-4?S*Es:0,y=$?1/($<0?-$:$):0),i.svg&&(O=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Bm(mn(t,Xe)),O&&t.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=u+o,i.scaleX=Je(f),i.scaleY=Je(p),i.rotation=Je(x)+a,i.rotationX=Je(m)+a,i.rotationY=Je(g)+a,i.skewX=v+a,i.skewY=E+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[cn]=fc(c)),i.xOffset=i.yOffset=0,i.force3D=ln.force3D,i.renderTransform=i.svg?Xv:Nm?zm:Wv,i.uncache=0,i},fc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Tf=function(t,e,i){var n=Si(e);return Je(parseFloat(e)+parseFloat($r(t,"x",i+"px",n)))+n},Wv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,zm(t,e)},Ts="0deg",Aa="0px",ws=") ",zm=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,d=i.rotationX,u=i.skewX,f=i.skewY,p=i.scaleX,x=i.scaleY,m=i.transformPerspective,g=i.force3D,v=i.target,E=i.zOrigin,y="",b=g==="auto"&&t&&t!==1||g===!0;if(E&&(d!==Ts||h!==Ts)){var w=parseFloat(h)*ro,_=Math.sin(w),S=Math.cos(w),P;w=parseFloat(d)*ro,P=Math.cos(w),o=Tf(v,o,_*P*-E),a=Tf(v,a,-Math.sin(w)*-E),l=Tf(v,l,S*P*-E+E)}m!==Aa&&(y+="perspective("+m+ws),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(b||o!==Aa||a!==Aa||l!==Aa)&&(y+=l!==Aa||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ws),c!==Ts&&(y+="rotate("+c+ws),h!==Ts&&(y+="rotateY("+h+ws),d!==Ts&&(y+="rotateX("+d+ws),(u!==Ts||f!==Ts)&&(y+="skew("+u+", "+f+ws),(p!==1||x!==1)&&(y+="scale("+p+", "+x+ws),v.style[Xe]=y||"translate(0, 0)"},Xv=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,d=i.scaleX,u=i.scaleY,f=i.target,p=i.xOrigin,x=i.yOrigin,m=i.xOffset,g=i.yOffset,v=i.forceCSS,E=parseFloat(o),y=parseFloat(a),b,w,_,S,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ro,c*=ro,b=Math.cos(l)*d,w=Math.sin(l)*d,_=Math.sin(l-c)*-u,S=Math.cos(l-c)*u,c&&(h*=ro,P=Math.tan(c-h),P=Math.sqrt(1+P*P),_*=P,S*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),b*=P,w*=P)),b=Je(b),w=Je(w),_=Je(_),S=Je(S)):(b=d,S=u,w=_=0),(E&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(E=$r(f,"x",o,"px"),y=$r(f,"y",a,"px")),(p||x||m||g)&&(E=Je(E+p-(p*b+x*_)+m),y=Je(y+x-(p*w+x*S)+g)),(n||s)&&(P=f.getBBox(),E=Je(E+n/100*P.width),y=Je(y+s/100*P.height)),P="matrix("+b+","+w+","+_+","+S+","+E+","+y+")",f.setAttribute("transform",P),v&&(f.style[Xe]=P)},qv=function(t,e,i,n,s){var o=360,a=ai(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Es:1),c=l-n,h=n+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Mm)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Mm)%o-~~(c/o)*o)),t._pt=u=new qi(t._pt,e,i,n,c,Cv),u.e=h,u.u="deg",t._props.push(i),u},Rm=function(t,e){for(var i in e)t[i]=e[i];return t},Yv=function(t,e,i){var n=Rm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,d,u,f,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Xe]=e,a=Ra(i,1),Yr(i,Xe),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Xe],o[Xe]=e,a=Ra(i,1),o[Xe]=c);for(l in dr)c=n[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Si(c),p=Si(h),d=f!==p?$r(i,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new qi(t._pt,a,l,d,u-d,wf),t._pt.u=p||0,t._props.push(l));Rm(a,n)};Xi("padding,margin,Width,Radius",function(r,t){var e="Top",i="Right",n="Bottom",s="Left",o=(t<3?[e,i,n,s]:[e+s,e+i,n+i,n+s]).map(function(a){return t<2?r+a:"border"+a+r});uc[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return fr(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,x){return f[p]=u[x]=u[x]||u[(x-1)/2|0]}),a.init(l,f,d)}});var Df={name:"css",register:Af,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,s){var o=this._props,a=t.style,l=i.vars.startAt,c,h,d,u,f,p,x,m,g,v,E,y,b,w,_,S,P;Rf||Af(),this.styles=this.styles||Dm(t),S=this.styles.props,this.tween=i;for(x in e)if(x!=="autoRound"&&(h=e[x],!(sn[x]&&xf(x,e,i,n,t,s)))){if(f=typeof h,p=uc[x],f==="function"&&(h=h.call(i,n,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=eo(h)),p)p(this,t,x,h,i)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(x)+"").trim(),h+="",hr.lastIndex=0,hr.test(c)||(m=Si(c),g=Si(h),g?m!==g&&(c=$r(t,x,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,n,s,0,0,x),o.push(x),S.push(x,0,a[x]);else if(f!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(i,n,t,s):l[x],ai(c)&&~c.indexOf("random(")&&(c=eo(c)),Si(c+"")||c==="auto"||(c+=ln.units[x]||Si(fr(t,x))||""),(c+"").charAt(1)==="="&&(c=fr(t,x))):c=fr(t,x),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),x in Jn&&(x==="autoAlpha"&&(u===1&&fr(t,"visibility")==="hidden"&&d&&(u=0),S.push("visibility",0,a.visibility),qr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=Jn[x],~x.indexOf(",")&&(x=x.split(",")[0]))),E=x in dr,E){if(this.styles.save(x),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=mn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=mn(t,"perspective"),A?t.style.perspective=A:Yr(t,"perspective")}d=parseFloat(h)}if(y||(b=t._gsap,b.renderTransform&&!e.parseTransform||Ra(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,y=this._pt=new qi(this._pt,a,Xe,0,1,b.renderTransform,b,0,-1),y.dep=1),x==="scale")this._pt=new qi(this._pt,b,"scaleY",b.scaleY,(v?Ms(b.scaleY,v+d):d)-b.scaleY||0,wf),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){S.push(cn,0,a[cn]),h=Hv(h),b.svg?Cf(t,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==b.zOrigin&&qr(this,b,"zOrigin",b.zOrigin,g),qr(this,a,x,fc(c),fc(h)));continue}else if(x==="svgOrigin"){Cf(t,h,1,w,0,this);continue}else if(x in Fm){qv(this,b,x,u,v?Ms(u,v+h):h);continue}else if(x==="smoothOrigin"){qr(this,b,"smooth",b.smooth,h);continue}else if(x==="force3D"){b[x]=h;continue}else if(x==="transform"){Yv(this,h,t);continue}}else x in a||(x=so(x)||x);if(E||(d||d===0)&&(u||u===0)&&!Av.test(h)&&x in a)m=(c+"").substr((u+"").length),d||(d=0),g=Si(h)||(x in ln.units?ln.units[x]:m),m!==g&&(u=$r(t,x,c,g)),this._pt=new qi(this._pt,E?b:a,x,u,(v?Ms(u,v+d):d)-u,!E&&(g==="px"||x==="zIndex")&&e.autoRound!==!1?Iv:wf),this._pt.u=g||0,E&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Pv):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Rv);else if(x in a)Vv.call(this,t,x,c,v?v+h:h);else if(x in t)this.add(t,x,c||t[x],v?v+h:h,n,s);else if(x!=="parseTransform"){oc(x,h);continue}E||(x in a?S.push(x,0,a[x]):typeof t[x]=="function"?S.push(x,2,t[x]()):S.push(x,1,c||t[x])),o.push(x)}}_&&bf(this)},render:function(t,e){if(e.tween._time||!Pf())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:fr,aliases:Jn,getSetter:function(t,e,i){var n=Jn[e];return n&&n.indexOf(",")<0&&(e=n),e in dr&&e!==cn&&(t._gsap.x||fr(t,"x"))?i&&Sm===i?e==="scale"?Uv:Nv:(Sm=i||{})&&(e==="scale"?Ov:Fv):t.style&&!sc(t.style[e])?Lv:~e.indexOf("-")?Dv:hc(t,e)},core:{_removeProperty:Yr,_getMatrix:Lf}};Ii.utils.checkPrefix=so;Ii.core.getStyleSaver=Dm;(function(r,t,e,i){var n=Xi(r+","+t+","+e,function(s){dr[s]=1});Xi(t,function(s){ln.units[s]="deg",Fm[s]=1}),Jn[n[13]]=r+","+t,Xi(i,function(s){var o=s.split(":");Jn[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ln.units[r]="px"});Ii.registerPlugin(Df);var ne=Ii.registerPlugin(Df)||Ii,Iw=ne.core.Tween;function km(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function $v(r,t,e){return t&&km(r.prototype,t),e&&km(r,e),r}var Mi,mc,Zv,hn,Zr,Jr,ao,Hm,Cs,lo,Gm,pr,Un,Wm,Xm=function(){return Mi||typeof window<"u"&&(Mi=window.gsap)&&Mi.registerPlugin&&Mi},qm=1,oo=[],jt=[],On=[],Ia=Date.now,Nf=function(t,e){return e},Jv=function(){var t=lo.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,jt),n.push.apply(n,On),jt=i,On=n,Nf=function(o,a){return e[o](a)}},gr=function(t,e){return~On.indexOf(t)&&On[On.indexOf(t)+1][e]},La=function(t){return!!~Gm.indexOf(t)},$i=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:n!==!1,capture:!!s})},Yi=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},dc="scrollLeft",pc="scrollTop",Uf=function(){return pr&&pr.isPressed||jt.cache++},gc=function(t,e){var i=function n(s){if(s||s===0){qm&&hn.history.scrollRestoration!=="manual"&&(hn.history.scrollRestoration="manual");var o=pr&&pr.isPressed;s=n.v=Math.round(s)||(pr&&pr.iOS?1:0),t(s),n.cacheID=jt.cache,o&&Nf("ss",s)}else(e||jt.cache!==n.cacheID||Nf("ref"))&&(n.cacheID=jt.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},Li={s:dc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gc(function(r){return arguments.length?hn.scrollTo(r,ri.sc()):hn.pageXOffset||Zr[dc]||Jr[dc]||ao[dc]||0})},ri={s:pc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Li,sc:gc(function(r){return arguments.length?hn.scrollTo(Li.sc(),r):hn.pageYOffset||Zr[pc]||Jr[pc]||ao[pc]||0})},Zi=function(t,e){return(e&&e._ctx&&e._ctx.selector||Mi.utils.toArray)(t)[0]||(typeof t=="string"&&Mi.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Kv=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},mr=function(t,e){var i=e.s,n=e.sc;La(t)&&(t=Zr.scrollingElement||Jr);var s=jt.indexOf(t),o=n===ri.sc?1:2;!~s&&(s=jt.push(t)-1),jt[s+o]||$i(t,"scroll",Uf);var a=jt[s+o],l=a||(jt[s+o]=gc(gr(t,i),!0)||(La(t)?n:gc(function(c){return arguments.length?t[i]=c:t[i]})));return l.target=t,a||(l.smooth=Mi.getProperty(t,"scrollBehavior")==="smooth"),l},_c=function(t,e,i){var n=t,s=t,o=Ia(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,x){var m=Ia();x||m-o>l?(s=n,n=p,a=o,o=m):i?n+=p:n=s+(p-s)/(m-a)*(o-a)},d=function(){s=n=i?0:n,a=o=0},u=function(p){var x=a,m=s,g=Ia();return(p||p===0)&&p!==n&&h(p),o===a||g-a>c?0:(n+(i?m:-m))/((i?g:o)-x)*1e3};return{update:h,reset:d,getVelocity:u}},Pa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Vm=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},Ym=function(){lo=Mi.core.globals().ScrollTrigger,lo&&lo.core&&Jv()},$m=function(t){return Mi=t||Xm(),!mc&&Mi&&typeof document<"u"&&document.body&&(hn=window,Zr=document,Jr=Zr.documentElement,ao=Zr.body,Gm=[hn,Zr,Jr,ao],Zv=Mi.utils.clamp,Wm=Mi.core.context||function(){},Cs="onpointerenter"in ao?"pointer":"mouse",Hm=Ke.isTouch=hn.matchMedia&&hn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in hn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Un=Ke.eventTypes=("ontouchstart"in Jr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Jr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return qm=0},500),mc=1),lo||Ym(),mc};Li.op=ri;jt.cache=0;var Ke=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(i){mc||$m(Mi)||console.warn("Please gsap.registerPlugin(Observer)"),lo||Ym();var n=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,d=i.onStop,u=i.onStopDelay,f=i.ignore,p=i.wheelSpeed,x=i.event,m=i.onDragStart,g=i.onDragEnd,v=i.onDrag,E=i.onPress,y=i.onRelease,b=i.onRight,w=i.onLeft,_=i.onUp,S=i.onDown,P=i.onChangeX,A=i.onChangeY,U=i.onChange,L=i.onToggleX,V=i.onToggleY,I=i.onHover,z=i.onHoverEnd,H=i.onMove,O=i.ignoreCheck,nt=i.isNormalizer,W=i.onGestureStart,R=i.onGestureEnd,tt=i.onWheel,vt=i.onEnable,wt=i.onDisable,$=i.onClick,ht=i.scrollSpeed,St=i.capture,Tt=i.allowClicks,_t=i.lockAxis,It=i.onLockAxis;this.target=a=Zi(a)||Jr,this.vars=i,f&&(f=Mi.utils.toArray(f)),n=n||1e-9,s=s||0,p=p||1,ht=ht||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(hn.getComputedStyle(ao).lineHeight)||22);var pe,Ct,Xt,Nt,Ut,se,ce,j=this,qt=0,Ne=0,Se=i.passive||!h&&i.passive!==!1,Qt=mr(a,Li),Ue=mr(a,ri),Ae=Qt(),F=Ue(),ve=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Un[0]==="pointerdown",oe=La(a),Yt=a.ownerDocument||Zr,xt=[0,0,0],me=[0,0,0],lt=0,Ot=function(){return lt=Ia()},C=function(et,q){return(j.event=et)&&f&&Kv(et.target,f)||q&&ve&&et.pointerType!=="touch"||O&&O(et,q)},M=function(){j._vx.reset(),j._vy.reset(),Ct.pause(),d&&d(j)},G=function(){var et=j.deltaX=Vm(xt),q=j.deltaY=Vm(me),Y=Math.abs(et)>=n,at=Math.abs(q)>=n;U&&(Y||at)&&U(j,et,q,xt,me),Y&&(b&&j.deltaX>0&&b(j),w&&j.deltaX<0&&w(j),P&&P(j),L&&j.deltaX<0!=qt<0&&L(j),qt=j.deltaX,xt[0]=xt[1]=xt[2]=0),at&&(S&&j.deltaY>0&&S(j),_&&j.deltaY<0&&_(j),A&&A(j),V&&j.deltaY<0!=Ne<0&&V(j),Ne=j.deltaY,me[0]=me[1]=me[2]=0),(Nt||Xt)&&(H&&H(j),Xt&&(m&&Xt===1&&m(j),v&&v(j),Xt=0),Nt=!1),se&&!(se=!1)&&It&&It(j),Ut&&(tt(j),Ut=!1),pe=0},ct=function(et,q,Y){xt[Y]+=et,me[Y]+=q,j._vx.update(et),j._vy.update(q),c?pe||(pe=requestAnimationFrame(G)):G()},ot=function(et,q){_t&&!ce&&(j.axis=ce=Math.abs(et)>Math.abs(q)?"x":"y",se=!0),ce!=="y"&&(xt[2]+=et,j._vx.update(et,!0)),ce!=="x"&&(me[2]+=q,j._vy.update(q,!0)),c?pe||(pe=requestAnimationFrame(G)):G()},ut=function(et){if(!C(et,1)){et=Pa(et,h);var q=et.clientX,Y=et.clientY,at=q-j.x,Z=Y-j.y,yt=j.isDragging;j.x=q,j.y=Y,(yt||(at||Z)&&(Math.abs(j.startX-q)>=s||Math.abs(j.startY-Y)>=s))&&(Xt||(Xt=yt?2:1),yt||(j.isDragging=!0),ot(at,Z))}},mt=j.onPress=function(K){C(K,1)||K&&K.button||(j.axis=ce=null,Ct.pause(),j.isPressed=!0,K=Pa(K),qt=Ne=0,j.startX=j.x=K.clientX,j.startY=j.y=K.clientY,j._vx.reset(),j._vy.reset(),$i(nt?a:Yt,Un[1],ut,Se,!0),j.deltaX=j.deltaY=0,E&&E(j))},X=j.onRelease=function(K){if(!C(K,1)){Yi(nt?a:Yt,Un[1],ut,!0);var et=!isNaN(j.y-j.startY),q=j.isDragging,Y=q&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),at=Pa(K);!Y&&et&&(j._vx.reset(),j._vy.reset(),h&&Tt&&Mi.delayedCall(.08,function(){if(Ia()-lt>300&&!K.defaultPrevented){if(K.target.click)K.target.click();else if(Yt.createEvent){var Z=Yt.createEvent("MouseEvents");Z.initMouseEvent("click",!0,!0,hn,1,at.screenX,at.screenY,at.clientX,at.clientY,!1,!1,!1,!1,0,null),K.target.dispatchEvent(Z)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,d&&q&&!nt&&Ct.restart(!0),Xt&&G(),g&&q&&g(j),y&&y(j,Y)}},st=function(et){return et.touches&&et.touches.length>1&&(j.isGesturing=!0)&&W(et,j.isDragging)},dt=function(){return(j.isGesturing=!1)||R(j)},D=function(et){if(!C(et)){var q=Qt(),Y=Ue();ct((q-Ae)*ht,(Y-F)*ht,1),Ae=q,F=Y,d&&Ct.restart(!0)}},rt=function(et){if(!C(et)){et=Pa(et,h),tt&&(Ut=!0);var q=(et.deltaMode===1?l:et.deltaMode===2?hn.innerHeight:1)*p;ct(et.deltaX*q,et.deltaY*q,0),d&&!nt&&Ct.restart(!0)}},it=function(et){if(!C(et)){var q=et.clientX,Y=et.clientY,at=q-j.x,Z=Y-j.y;j.x=q,j.y=Y,Nt=!0,d&&Ct.restart(!0),(at||Z)&&ot(at,Z)}},pt=function(et){j.event=et,I(j)},ft=function(et){j.event=et,z(j)},gt=function(et){return C(et)||Pa(et,h)&&$(j)};Ct=j._dc=Mi.delayedCall(u||.25,M).pause(),j.deltaX=j.deltaY=0,j._vx=_c(0,50,!0),j._vy=_c(0,50,!0),j.scrollX=Qt,j.scrollY=Ue,j.isDragging=j.isGesturing=j.isPressed=!1,Wm(this),j.enable=function(K){return j.isEnabled||($i(oe?Yt:a,"scroll",Uf),o.indexOf("scroll")>=0&&$i(oe?Yt:a,"scroll",D,Se,St),o.indexOf("wheel")>=0&&$i(a,"wheel",rt,Se,St),(o.indexOf("touch")>=0&&Hm||o.indexOf("pointer")>=0)&&($i(a,Un[0],mt,Se,St),$i(Yt,Un[2],X),$i(Yt,Un[3],X),Tt&&$i(a,"click",Ot,!0,!0),$&&$i(a,"click",gt),W&&$i(Yt,"gesturestart",st),R&&$i(Yt,"gestureend",dt),I&&$i(a,Cs+"enter",pt),z&&$i(a,Cs+"leave",ft),H&&$i(a,Cs+"move",it)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=Nt=Xt=!1,j._vx.reset(),j._vy.reset(),Ae=Qt(),F=Ue(),K&&K.type&&mt(K),vt&&vt(j)),j},j.disable=function(){j.isEnabled&&(oo.filter(function(K){return K!==j&&La(K.target)}).length||Yi(oe?Yt:a,"scroll",Uf),j.isPressed&&(j._vx.reset(),j._vy.reset(),Yi(nt?a:Yt,Un[1],ut,!0)),Yi(oe?Yt:a,"scroll",D,St),Yi(a,"wheel",rt,St),Yi(a,Un[0],mt,St),Yi(Yt,Un[2],X),Yi(Yt,Un[3],X),Yi(a,"click",Ot,!0),Yi(a,"click",gt),Yi(Yt,"gesturestart",st),Yi(Yt,"gestureend",dt),Yi(a,Cs+"enter",pt),Yi(a,Cs+"leave",ft),Yi(a,Cs+"move",it),j.isEnabled=j.isPressed=j.isDragging=!1,wt&&wt(j))},j.kill=j.revert=function(){j.disable();var K=oo.indexOf(j);K>=0&&oo.splice(K,1),pr===j&&(pr=0)},oo.push(j),nt&&La(a)&&(pr=j),j.enable(x)},$v(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ke.version="3.15.1";Ke.create=function(r){return new Ke(r)};Ke.register=$m;Ke.getAll=function(){return oo.slice()};Ke.getById=function(r){return oo.filter(function(t){return t.vars.id===r})[0]};Xm()&&Mi.registerPlugin(Ke);var Pt,fo,ie,Ee,xn,Te,Zf,Dc,Xa,za,Na,xc,Di,Oc,Hf,Ki,Zm,Jm,po,fg,Of,dg,Ji,Gf,pg,mg,Kr,Wf,Jf,mo,Kf,Qr,Xf,Ff,vc=1,Ni=Date.now,Bf=Ni(),In=0,Ua=0,Km=function(t,e,i){var n=_n(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=n,n?t.substr(6,t.length-7):t},Qm=function(t,e){return e&&(!_n(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Qv=function r(){return Ua&&requestAnimationFrame(r)},jm=function(){return Oc=1},tg=function(){return Oc=0},Kn=function(t){return t},Oa=function(t){return Math.round(t*1e5)/1e5||0},gg=function(){return typeof window<"u"},_g=function(){return Pt||gg()&&(Pt=window.gsap)&&Pt.registerPlugin&&Pt},Ns=function(t){return!!~Zf.indexOf(t)},xg=function(t){return(t==="Height"?Kf:ie["inner"+t])||xn["client"+t]||Te["client"+t]},vg=function(t){return gr(t,"getBoundingClientRect")||(Ns(t)?function(){return Lc.width=ie.innerWidth,Lc.height=Kf,Lc}:function(){return _r(t)})},jv=function(t,e,i){var n=i.d,s=i.d2,o=i.a;return(o=gr(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(e?xg(s):t["client"+s])||0}},ty=function(t,e){return!e||~On.indexOf(t)?vg(t):function(){return Lc}},Qn=function(t,e){var i=e.s,n=e.d2,s=e.d,o=e.a;return Math.max(0,(i="scroll"+n)&&(o=gr(t,i))?o()-vg(t)()[s]:Ns(t)?(xn[i]||Te[i])-xg(n):t[i]-t["offset"+n])},yc=function(t,e){for(var i=0;i<po.length;i+=3)(!e||~e.indexOf(po[i+1]))&&t(po[i],po[i+1],po[i+2])},_n=function(t){return typeof t=="string"},Ui=function(t){return typeof t=="function"},Fa=function(t){return typeof t=="number"},Rs=function(t){return typeof t=="object"},Da=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},co=function(t,e,i){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t,i)}):e(t,i);n&&n.totalTime&&(t.callbackAnimation=n)}},ho=Math.abs,yg="left",Sg="top",Qf="right",jf="bottom",Is="width",Ls="height",ka="Right",Va="Left",Ha="Top",Ga="Bottom",si="padding",Rn="margin",_o="Width",td="Height",li="px",Pn=function(t){return ie.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},ey=function(t){var e=Pn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},eg=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},_r=function(t,e){var i=e&&Pn(t)[Hf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Nc=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},Mg=function(t){var e=[],i=t.labels,n=t.duration(),s;for(s in i)e.push(i[s]/n);return e},iy=function(t){return function(e){return Pt.utils.snap(Mg(t),e)}},ed=function(t){var e=Pt.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var a;if(!s)return e(n);if(s>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var a=e(n);return!s||Math.abs(a-n)<o||a-n<0==s<0?a:e(s<0?n-t:n+t)}},ny=function(t){return function(e,i){return ed(Mg(t))(e,i.direction)}},Sc=function(t,e,i,n){return i.split(",").forEach(function(s){return t(e,s,n)})},mi=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:!n,capture:!!s})},pi=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Mc=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},ig={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},bc={toggleActions:"play",anticipatePin:0},Uc={top:0,left:0,center:.5,bottom:1,right:1},Cc=function(t,e){if(_n(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in Uc?Uc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Tc=function(t,e,i,n,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,p=Ee.createElement("div"),x=Ns(i)||gr(i,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=x?Te:i.tagName==="IFRAME"?i.contentDocument.body:i,v=t.indexOf("start")!==-1,E=v?c:h,y="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&x?"fixed;":"absolute;"),(m||l||!x)&&(y+=(n===ri?Qf:jf)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],Rc(p,0,n,v),p},Rc=function(t,e,i,n){var s={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+_o]=1,s["border"+a+_o]=0,s[i.p]=e+"px",Pt.set(t,s)},ee=[],qf={},qa,ng=function(){return Ni()-In>34&&(qa||(qa=requestAnimationFrame(xr)))},uo=function(){(!Ji||!Ji.isPressed||Ji.startX>Te.clientWidth)&&(jt.cache++,Ji?qa||(qa=requestAnimationFrame(xr)):xr(),In||Os("scrollStart"),In=Ni())},zf=function(){mg=ie.innerWidth,pg=ie.innerHeight},Ba=function(t){jt.cache++,(t===!0||!Di&&!dg&&!Ee.fullscreenElement&&!Ee.webkitFullscreenElement&&(!Gf||mg!==ie.innerWidth||Math.abs(ie.innerHeight-pg)>ie.innerHeight*.25))&&Dc.restart(!0)},Us={},ry=[],bg=function r(){return pi(Kt,"scrollEnd",r)||Ps(!0)},Os=function(t){return Us[t]&&Us[t].map(function(e){return e()})||ry},gn=[],Tg=function(t){for(var e=0;e<gn.length;e+=5)(!t||gn[e+4]&&gn[e+4].query===t)&&(gn[e].style.cssText=gn[e+1],gn[e].getBBox&&gn[e].setAttribute("transform",gn[e+2]||""),gn[e+3].uncache=1)},wg=function(){jt.cache++,jt.forEach(function(t){return Ui(t)&&(t.rec=t())})},id=function(t,e){var i;for(Ki=0;Ki<ee.length;Ki++)i=ee[Ki],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));Qr=!0,e&&Tg(e),e||Os("revert")},Eg=function(t,e){jt.cache++,(e||!Qi)&&jt.forEach(function(i){return Ui(i)&&i.cacheID++&&(i.rec=0)}),_n(t)&&(Jf=t,ie.history.scrollRestoration!==t&&(ie.history.scrollRestoration=t))},Qi,Ds=0,rg,sy=function(){if(rg!==Ds){var t=rg=Ds;requestAnimationFrame(function(){return t===Ds&&Ps(!0)})}},Ag=function(){Te.appendChild(mo),Kf=!Ji&&mo.offsetHeight||ie.innerHeight,Te.removeChild(mo)},sg=function(t){return Xa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ps=function(t,e){if(xn=Ee.documentElement,Te=Ee.body,Zf=[ie,Ee,xn,Te],In&&!t&&!Qr){mi(Kt,"scrollEnd",bg);return}Ag(),Qi=Kt.isRefreshing=!0,Qr||wg();var i=Os("refreshInit");fg&&Kt.sort(),e||id(),jt.forEach(function(n){Ui(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),ee.slice(0).forEach(function(n){return n.refresh()}),Qr=!1,ee.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-o),n.refresh()}}),Xf=1,sg(!0),ee.forEach(function(n){var s=Qn(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>s,a=n._startClamp&&n.start>=s;(o||a)&&n.setPositions(a?s-1:n.start,o?Math.max(a?s:n.start+1,s):n.end,!0)}),sg(!1),Xf=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),jt.forEach(function(n){Ui(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Eg(Jf,1),Dc.pause(),Ds++,Qi=2,xr(2),ee.forEach(function(n){return Ui(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Qi=Kt.isRefreshing=!1,Os("refresh")},Yf=0,Pc=1,Wa,xr=function(t){if(t===2||!Qi&&!Qr){Kt.isUpdating=!0,Wa&&Wa.update(0);var e=ee.length,i=Ni(),n=i-Bf>=50,s=e&&ee[0].scroll();if(Pc=Yf>s?-1:1,Qi||(Yf=s),n&&(In&&!Oc&&i-In>200&&(In=0,Os("scrollEnd")),Na=Bf,Bf=i),Pc<0){for(Ki=e;Ki-- >0;)ee[Ki]&&ee[Ki].update(0,n);Pc=1}else for(Ki=0;Ki<e;Ki++)ee[Ki]&&ee[Ki].update(0,n);Kt.isUpdating=!1}qa=0},$f=[yg,Sg,jf,Qf,Rn+Ga,Rn+ka,Rn+Ha,Rn+Va,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ic=$f.concat([Is,Ls,"boxSizing","max"+_o,"max"+td,"position",Rn,si,si+Ha,si+ka,si+Ga,si+Va]),oy=function(t,e,i){go(i);var n=t._gsap;if(n.spacerIsNative)go(n.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},kf=function(t,e,i,n){if(!t._gsap.swappedIn){for(var s=$f.length,o=e.style,a=t.style,l;s--;)l=$f[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[jf]=a[Qf]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Is]=Nc(t,Li)+li,o[Ls]=Nc(t,ri)+li,o[si]=a[Rn]=a[Sg]=a[yg]="0",go(n),a[Is]=a["max"+_o]=i[Is],a[Ls]=a["max"+td]=i[Ls],a[si]=i[si],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},ay=/([A-Z])/g,go=function(t){if(t){var e=t.t.style,i=t.length,n=0,s,o;for((t.t._gsap||Pt.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],s=t[n],o?e[s]=o:e[s]&&e.removeProperty(s.replace(ay,"-$1").toLowerCase())}},wc=function(t){for(var e=Ic.length,i=t.style,n=[],s=0;s<e;s++)n.push(Ic[s],i[Ic[s]]);return n.t=t,n},ly=function(t,e,i){for(var n=[],s=t.length,o=i?8:0,a;o<s;o+=2)a=t[o],n.push(a,a in e?e[a]:t[o+1]);return n.t=t.t,n},Lc={left:0,top:0},og=function(t,e,i,n,s,o,a,l,c,h,d,u,f,p){Ui(t)&&(t=t(l)),_n(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Cc("0"+t.substr(3),i):0));var x=f?f.time():0,m,g,v;if(f&&f.seek(0),isNaN(t)||(t=+t),Fa(t))f&&(t=Pt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Rc(a,i,n,!0);else{Ui(e)&&(e=e(l));var E=(t||"0").split(" "),y,b,w,_;v=Zi(e,l)||Te,y=_r(v)||{},(!y||!y.left&&!y.top)&&Pn(v).display==="none"&&(_=v.style.display,v.style.display="block",y=_r(v),_?v.style.display=_:v.style.removeProperty("display")),b=Cc(E[0],y[n.d]),w=Cc(E[1]||"0",i),t=y[n.p]-c[n.p]-h+b+s-w,a&&Rc(a,w,n,i-w<20||a._isStart&&w>20),i-=i-w}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var S=t+i,P=o._isStart;m="scroll"+n.d2,Rc(o,S,n,P&&S>20||!P&&(d?Math.max(Te[m],xn[m]):o.parentNode[m])<=S+1),d&&(c=_r(a),d&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+li))}return f&&v&&(m=_r(v),f.seek(u),g=_r(v),f._caScrollDist=m[n.p]-g[n.p],t=t/f._caScrollDist*u),f&&f.seek(x),f?t:Math.round(t)},cy=/(webkit|moz|length|cssText|inset)/i,ag=function(t,e,i,n){if(t.parentNode!==e){var s=t.style,o,a;if(e===Te){t._stOrig=s.cssText,a=Pn(t);for(o in a)!+o&&!cy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=n}else s.cssText=t._stOrig;Pt.core.getCache(t).uncache=1,e.appendChild(t)}},Cg=function(t,e,i){var n=e,s=n;return function(o){var a=Math.round(t());return a!==n&&a!==s&&Math.abs(a-n)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=n,n=Math.round(o),n}},Ec=function(t,e,i){var n={};n[e.p]="+="+i,Pt.set(t,n)},lg=function(t,e){var i=mr(t,e),n="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||i();var x=Cg(i,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return x(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){jt.cache++,o.tween&&xr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Pt.to(t,l),u};return t[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mi(t,"wheel",i.wheelHandler),Kt.isTouch&&mi(t,"touchmove",i.wheelHandler),s},Kt=(function(){function r(e,i){fo||r.register(Pt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wf(this),this.init(e,i)}var t=r.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ua){this.update=this.refresh=this.kill=Kn;return}i=eg(_n(i)||Fa(i)||i.nodeType?{trigger:i}:i,bc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,p=s.pinSpacing,x=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,E=s.once,y=s.snap,b=s.pinReparent,w=s.pinSpacer,_=s.containerAnimation,S=s.fastScrollEnd,P=s.preventOverlaps,A=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Li:ri,U=!d&&d!==0,L=Zi(i.scroller||ie),V=Pt.core.getCache(L),I=Ns(L),z=("pinType"in i?i.pinType:gr(L,"pinType")||I&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=U&&i.toggleActions.split(" "),nt="markers"in i?i.markers:bc.markers,W=I?0:parseFloat(Pn(L)["border"+A.p2+_o])||0,R=this,tt=i.onRefreshInit&&function(){return i.onRefreshInit(R)},vt=jv(L,I,A),wt=ty(L,I),$=0,ht=0,St=0,Tt=mr(L,A),_t,It,pe,Ct,Xt,Nt,Ut,se,ce,j,qt,Ne,Se,Qt,Ue,Ae,F,ve,oe,Yt,xt,me,lt,Ot,C,M,G,ct,ot,ut,mt,X,st,dt,D,rt,it,pt,ft;if(R._startClamp=R._endClamp=!1,R._dir=A,m*=45,R.scroller=L,R.scroll=_?_.time.bind(_):Tt,Ct=Tt(),Qr&&Tt.rec==null&&(Tt.rec=Ct),R.vars=i,n=n||i.animation,"refreshPriority"in i&&(fg=1,i.refreshPriority===-9999&&(Wa=R)),V.tweenScroll=V.tweenScroll||{top:lg(L,ri),left:lg(L,Li)},R.tweenTo=_t=V.tweenScroll[A.p],R.scrubDuration=function(Y){st=Fa(Y)&&Y,st?X?X.duration(Y):X=Pt.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:st,paused:!0,onComplete:function(){return g&&g(R)}}):(X&&X.progress(1).kill(),X=0)},n&&(n.vars.lazy=!1,n._initted&&!R.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),R.animation=n.pause(),n.scrollTrigger=R,R.scrubDuration(d),ut=0,l||(l=n.vars.id)),y&&((!Rs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Te.style&&Pt.set(I?[Te,xn]:L,{scrollBehavior:"auto"}),jt.forEach(function(Y){return Ui(Y)&&Y.target===(I?Ee.scrollingElement||xn:L)&&(Y.smooth=!1)}),pe=Ui(y.snapTo)?y.snapTo:y.snapTo==="labels"?iy(n):y.snapTo==="labelsDirectional"?ny(n):y.directional!==!1?function(Y,at){return ed(y.snapTo)(Y,Ni()-ht<500?0:at.direction)}:Pt.utils.snap(y.snapTo),dt=y.duration||{min:.1,max:2},dt=Rs(dt)?za(dt.min,dt.max):za(dt,dt),D=Pt.delayedCall(y.delay||st/2||.1,function(){var Y=Tt(),at=Ni()-ht<500,Z=_t.tween;if((at||Math.abs(R.getVelocity())<10)&&!Z&&!Oc&&$!==Y){var yt=(Y-Nt)/Qt,Ht=n&&!U?n.totalProgress():yt,zt=at?0:(Ht-mt)/(Ni()-Na)*1e3||0,xe=Pt.utils.clamp(-yt,1-yt,ho(zt/2)*zt/.185),Vt=yt+(y.inertia===!1?0:xe),he,ge,ae=y,Be=ae.onStart,we=ae.onInterrupt,ii=ae.onComplete;if(he=pe(Vt,R),Fa(he)||(he=Vt),ge=Math.max(0,Math.round(Nt+he*Qt)),Y<=Ut&&Y>=Nt&&ge!==Y){if(Z&&!Z._initted&&Z.data<=ho(ge-Y))return;y.inertia===!1&&(xe=he-yt),_t(ge,{duration:dt(ho(Math.max(ho(Vt-Ht),ho(he-Ht))*.185/zt/.05||0)),ease:y.ease||"power3",data:ho(ge-Y),onInterrupt:function(){return D.restart(!0)&&we&&co(R,we)},onComplete:function(){R.update(),$=Tt(),n&&!U&&(X?X.resetTo("totalProgress",he,n._tTime/n._tDur):n.progress(he)),ut=mt=n&&!U?n.totalProgress():R.progress,v&&v(R),ii&&co(R,ii)}},Y,xe*Qt,ge-Y-xe*Qt),Be&&co(R,Be,_t.tween)}}else R.isActive&&$!==Y&&D.restart(!0)}).pause()),l&&(qf[l]=R),u=R.trigger=Zi(u||f!==!0&&f),ft=u&&u._gsap&&u._gsap.stRevert,ft&&(ft=ft(R)),f=f===!0?u:Zi(f),_n(a)&&(a={targets:u,className:a}),f&&(p===!1||p===Rn||(p=!p&&f.parentNode&&f.parentNode.style&&Pn(f.parentNode).display==="flex"?!1:si),R.pin=f,It=Pt.core.getCache(f),It.spacer?Ue=It.pinState:(w&&(w=Zi(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),It.spacerIsNative=!!w,w&&(It.spacerState=wc(w))),It.spacer=ve=w||Ee.createElement("div"),ve.classList.add("pin-spacer"),l&&ve.classList.add("pin-spacer-"+l),It.pinState=Ue=wc(f)),i.force3D!==!1&&Pt.set(f,{force3D:!0}),R.spacer=ve=It.spacer,ot=Pn(f),Ot=ot[p+A.os2],Yt=Pt.getProperty(f),xt=Pt.quickSetter(f,A.a,li),kf(f,ve,ot),F=wc(f)),nt){Ne=Rs(nt)?eg(nt,ig):ig,j=Tc("scroller-start",l,L,A,Ne,0),qt=Tc("scroller-end",l,L,A,Ne,0,j),oe=j["offset"+A.op.d2];var gt=Zi(gr(L,"content")||L);se=this.markerStart=Tc("start",l,gt,A,Ne,oe,0,_),ce=this.markerEnd=Tc("end",l,gt,A,Ne,oe,0,_),_&&(pt=Pt.quickSetter([se,ce],A.a,li)),!z&&!(On.length&&gr(L,"fixedMarkers")===!0)&&(ey(I?Te:L),Pt.set([j,qt],{force3D:!0}),M=Pt.quickSetter(j,A.a,li),ct=Pt.quickSetter(qt,A.a,li))}if(_){var K=_.vars.onUpdate,et=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){R.update(0,0,1),K&&K.apply(_,et||[])})}if(R.previous=function(){return ee[ee.indexOf(R)-1]},R.next=function(){return ee[ee.indexOf(R)+1]},R.revert=function(Y,at){if(!at)return R.kill(!0);var Z=Y!==!1||!R.enabled,yt=Di;Z!==R.isReverted&&(Z&&(rt=Math.max(Tt(),R.scroll.rec||0),St=R.progress,it=n&&n.progress()),se&&[se,ce,j,qt].forEach(function(Ht){return Ht.style.display=Z?"none":"block"}),Z&&(Di=R,R.update(Z)),f&&(!b||!R.isActive)&&(Z?oy(f,ve,Ue):kf(f,ve,Pn(f),C)),Z||R.update(Z),Di=yt,R.isReverted=Z)},R.refresh=function(Y,at,Z,yt){if(!((Di||!R.enabled)&&!at)){if(f&&Y&&In){mi(r,"scrollEnd",bg);return}!Qi&&tt&&tt(R),Di=R,_t.tween&&!Z&&(_t.tween.kill(),_t.tween=0),X&&X.pause(),x&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(k){return k.vars.immediateRender&&k.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ht=vt(),zt=wt(),xe=_?_.duration():Qn(L,A),Vt=Qt<=.01||!Qt,he=0,ge=yt||0,ae=Rs(Z)?Z.end:i.end,Be=i.endTrigger||u,we=Rs(Z)?Z.start:i.start||(i.start===0||!u?0:f?"0 0":"0 100%"),ii=R.pinnedContainer=i.pinnedContainer&&Zi(i.pinnedContainer,R),Vi=u&&Math.max(0,ee.indexOf(R))||0,Ie=Vi,$e,je,fi,ar,Ve,Oe,Hi,Br,ms,Gi,T,N,Q;for(nt&&Rs(Z)&&(N=Pt.getProperty(j,A.p),Q=Pt.getProperty(qt,A.p));Ie-- >0;)Oe=ee[Ie],Oe.end||Oe.refresh(0,1)||(Di=R),Hi=Oe.pin,Hi&&(Hi===u||Hi===f||Hi===ii)&&!Oe.isReverted&&(Gi||(Gi=[]),Gi.unshift(Oe),Oe.revert(!0,!0)),Oe!==ee[Ie]&&(Vi--,Ie--);for(Ui(we)&&(we=we(R)),we=Km(we,"start",R),Nt=og(we,u,Ht,A,Tt(),se,j,R,zt,W,z,xe,_,R._startClamp&&"_startClamp")||(f?-.001:0),Ui(ae)&&(ae=ae(R)),_n(ae)&&!ae.indexOf("+=")&&(~ae.indexOf(" ")?ae=(_n(we)?we.split(" ")[0]:"")+ae:(he=Cc(ae.substr(2),Ht),ae=_n(we)?we:(_?Pt.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Nt):Nt)+he,Be=u)),ae=Km(ae,"end",R),Ut=Math.max(Nt,og(ae||(Be?"100% 0":xe),Be,Ht,A,Tt()+he,ce,qt,R,zt,W,z,xe,_,R._endClamp&&"_endClamp"))||-.001,he=0,Ie=Vi;Ie--;)Oe=ee[Ie]||{},Hi=Oe.pin,Hi&&Oe.start-Oe._pinPush<=Nt&&!_&&Oe.end>0&&($e=Oe.end-(R._startClamp?Math.max(0,Oe.start):Oe.start),(Hi===u&&Oe.start-Oe._pinPush<Nt||Hi===ii)&&isNaN(we)&&(he+=$e*(1-Oe.progress)),Hi===f&&(ge+=$e));if(Nt+=he,Ut+=he,R._startClamp&&(R._startClamp+=he),R._endClamp&&!Qi&&(R._endClamp=Ut||-.001,Ut=Math.min(Ut,Qn(L,A))),Qt=Ut-Nt||(Nt-=.01)&&.001,Vt&&(St=Pt.utils.clamp(0,1,Pt.utils.normalize(Nt,Ut,rt))),R._pinPush=ge,se&&he&&($e={},$e[A.a]="+="+he,ii&&($e[A.p]="-="+Tt()),Pt.set([se,ce],$e)),f&&!(Xf&&R.end>=Qn(L,A)))$e=Pn(f),ar=A===ri,fi=Tt(),me=parseFloat(Yt(A.a))+ge,!xe&&Ut>1&&(T=(I?Ee.scrollingElement||xn:L).style,T={style:T,value:T["overflow"+A.a.toUpperCase()]},I&&Pn(Te)["overflow"+A.a.toUpperCase()]!=="scroll"&&(T.style["overflow"+A.a.toUpperCase()]="scroll")),kf(f,ve,$e),F=wc(f),je=_r(f,!0),Br=z&&mr(L,ar?Li:ri)(),p?(C=[p+A.os2,Qt+ge+li],C.t=ve,Ie=p===si?Nc(f,A)+Qt+ge:0,Ie&&(C.push(A.d,Ie+li),ve.style.flexBasis!=="auto"&&(ve.style.flexBasis=Ie+li)),go(C),ii&&ee.forEach(function(k){k.pin===ii&&k.vars.pinSpacing!==!1&&(k._subPinOffset=!0)}),z&&Tt(rt)):(Ie=Nc(f,A),Ie&&ve.style.flexBasis!=="auto"&&(ve.style.flexBasis=Ie+li)),z&&(Ve={top:je.top+(ar?fi-Nt:Br)+li,left:je.left+(ar?Br:fi-Nt)+li,boxSizing:"border-box",position:"fixed"},Ve[Is]=Ve["max"+_o]=Math.ceil(je.width)+li,Ve[Ls]=Ve["max"+td]=Math.ceil(je.height)+li,Ve[Rn]=Ve[Rn+Ha]=Ve[Rn+ka]=Ve[Rn+Ga]=Ve[Rn+Va]="0",Ve[si]=$e[si],Ve[si+Ha]=$e[si+Ha],Ve[si+ka]=$e[si+ka],Ve[si+Ga]=$e[si+Ga],Ve[si+Va]=$e[si+Va],Ae=ly(Ue,Ve,b),Qi&&Tt(0)),n?(ms=n._initted,Of(1),n.render(n.duration(),!0,!0),lt=Yt(A.a)-me+Qt+ge,G=Math.abs(Qt-lt)>1,z&&G&&Ae.splice(Ae.length-2,2),n.render(0,!0,!0),ms||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Of(0)):lt=Qt,T&&(T.value?T.style["overflow"+A.a.toUpperCase()]=T.value:T.style.removeProperty("overflow-"+A.a));else if(u&&Tt()&&!_)for(je=u.parentNode;je&&je!==Te;)je._pinOffset&&(Nt-=je._pinOffset,Ut-=je._pinOffset),je=je.parentNode;Gi&&Gi.forEach(function(k){return k.revert(!1,!0)}),R.start=Nt,R.end=Ut,Ct=Xt=Qi?rt:Tt(),!_&&!Qi&&!Qr&&(Ct<rt&&Tt(rt),R.scroll.rec=0),R.revert(!1,!0),ht=Ni(),D&&($=-1,D.restart(!0)),Di=0,n&&U&&(n._initted||it)&&n.progress()!==it&&n.progress(it||0,!0).render(n.time(),!0,!0),(Vt||St!==R.progress||_||x||n&&!n._initted)&&(n&&!U&&(n._initted||St||n.vars.immediateRender!==!1)&&n.totalProgress(_&&Nt<-.001&&!St?Pt.utils.normalize(Nt,Ut,0):St,!0),R.progress=Vt||(Ct-Nt)/Qt===St?0:St),f&&p&&(ve._pinOffset=Math.round(R.progress*lt)),X&&X.invalidate(),isNaN(N)||(N-=Pt.getProperty(j,A.p),Q-=Pt.getProperty(qt,A.p),Ec(j,A,N),Ec(se,A,N-(yt||0)),Ec(qt,A,Q),Ec(ce,A,Q-(yt||0))),Vt&&!Qi&&R.update(),h&&!Qi&&!Se&&(Se=!0,h(R),Se=!1)}},R.getVelocity=function(){return(Tt()-Xt)/(Ni()-Na)*1e3||0},R.endAnimation=function(){Da(R.callbackAnimation),n&&(X?X.progress(1):n.paused()?U||Da(n,R.direction<0,1):Da(n,n.reversed()))},R.labelToScroll=function(Y){return n&&n.labels&&(Nt||R.refresh()||Nt)+n.labels[Y]/n.duration()*Qt||0},R.getTrailing=function(Y){var at=ee.indexOf(R),Z=R.direction>0?ee.slice(0,at).reverse():ee.slice(at+1);return(_n(Y)?Z.filter(function(yt){return yt.vars.preventOverlaps===Y}):Z).filter(function(yt){return R.direction>0?yt.end<=Nt:yt.start>=Ut})},R.update=function(Y,at,Z){if(!(_&&!Z&&!Y)){var yt=Qi===!0?rt:R.scroll(),Ht=Y?0:(yt-Nt)/Qt,zt=Ht<0?0:Ht>1?1:Ht||0,xe=R.progress,Vt,he,ge,ae,Be,we,ii,Vi;if(at&&(Xt=Ct,Ct=_?Tt():yt,y&&(mt=ut,ut=n&&!U?n.totalProgress():zt)),m&&f&&!Di&&!vc&&In&&(!zt&&Nt<yt+(yt-Xt)/(Ni()-Na)*m?zt=1e-4:zt===1&&Ut>yt+(yt-Xt)/(Ni()-Na)*m&&(zt=.9999)),zt!==xe&&R.enabled){if(Vt=R.isActive=!!zt&&zt<1,he=!!xe&&xe<1,we=Vt!==he,Be=we||!!zt!=!!xe,R.direction=zt>xe?1:-1,R.progress=zt,Be&&!Di&&(ge=zt&&!xe?0:zt===1?1:xe===1?2:3,U&&(ae=!we&&O[ge+1]!=="none"&&O[ge+1]||O[ge],Vi=n&&(ae==="complete"||ae==="reset"||ae in n))),P&&(we||Vi)&&(Vi||d||!n)&&(Ui(P)?P(R):R.getTrailing(P).forEach(function(fi){return fi.endAnimation()})),U||(X&&!Di&&!vc?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",zt,n._tTime/n._tDur):(X.vars.totalProgress=zt,X.invalidate().restart())):n&&n.totalProgress(zt,!!(Di&&(ht||Y)))),f){if(Y&&p&&(ve.style[p+A.os2]=Ot),!z)xt(Oa(me+lt*zt));else if(Be){if(ii=!Y&&zt>xe&&Ut+1>yt&&yt+1>=Qn(L,A),b)if(!Y&&(Vt||ii)){var Ie=_r(f,!0),$e=yt-Nt;ag(f,Te,Ie.top+(A===ri?$e:0)+li,Ie.left+(A===ri?0:$e)+li)}else ag(f,ve);go(Vt||ii?Ae:F),G&&zt<1&&Vt||xt(me+(zt===1&&!ii?lt:0))}}y&&!_t.tween&&!Di&&!vc&&D.restart(!0),a&&(we||E&&zt&&(zt<1||!Ff))&&Xa(a.targets).forEach(function(fi){return fi.classList[Vt||E?"add":"remove"](a.className)}),o&&!U&&!Y&&o(R),Be&&!Di?(U&&(Vi&&(ae==="complete"?n.pause().totalProgress(1):ae==="reset"?n.restart(!0).pause():ae==="restart"?n.restart(!0):n[ae]()),o&&o(R)),(we||!Ff)&&(c&&we&&co(R,c),H[ge]&&co(R,H[ge]),E&&(zt===1?R.kill(!1,1):H[ge]=0),we||(ge=zt===1?1:3,H[ge]&&co(R,H[ge]))),S&&!Vt&&Math.abs(R.getVelocity())>(Fa(S)?S:2500)&&(Da(R.callbackAnimation),X?X.progress(1):Da(n,ae==="reverse"?1:!zt,1))):U&&o&&!Di&&o(R)}if(ct){var je=_?yt/_.duration()*(_._caScrollDist||0):yt;M(je+(j._isFlipped?1:0)),ct(je)}pt&&pt(-yt/_.duration()*(_._caScrollDist||0))}},R.enable=function(Y,at){R.enabled||(R.enabled=!0,mi(L,"resize",Ba),I||mi(L,"scroll",uo),tt&&mi(r,"refreshInit",tt),Y!==!1&&(R.progress=St=0,Ct=Xt=$=Tt()),at!==!1&&R.refresh())},R.getTween=function(Y){return Y&&_t?_t.tween:X},R.setPositions=function(Y,at,Z,yt){if(_){var Ht=_.scrollTrigger,zt=_.duration(),xe=Ht.end-Ht.start;Y=Ht.start+xe*Y/zt,at=Ht.start+xe*at/zt}R.refresh(!1,!1,{start:Qm(Y,Z&&!!R._startClamp),end:Qm(at,Z&&!!R._endClamp)},yt),R.update()},R.adjustPinSpacing=function(Y){if(C&&Y){var at=C.indexOf(A.d)+1;C[at]=parseFloat(C[at])+Y+li,C[1]=parseFloat(C[1])+Y+li,go(C)}},R.disable=function(Y,at){if(Y!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,at||X&&X.pause(),rt=0,It&&(It.uncache=1),tt&&pi(r,"refreshInit",tt),D&&(D.pause(),_t.tween&&_t.tween.kill()&&(_t.tween=0)),!I)){for(var Z=ee.length;Z--;)if(ee[Z].scroller===L&&ee[Z]!==R)return;pi(L,"resize",Ba),I||pi(L,"scroll",uo)}},R.kill=function(Y,at){R.disable(Y,at),X&&!at&&X.kill(),l&&delete qf[l];var Z=ee.indexOf(R);Z>=0&&ee.splice(Z,1),Z===Ki&&Pc>0&&Ki--,Z=0,ee.forEach(function(yt){return yt.scroller===R.scroller&&(Z=1)}),Z||Qi||Qr||(R.scroll.rec=0),n&&(n.scrollTrigger=null,Y&&n.revert({kill:!1}),at||n.kill()),se&&[se,ce,j,qt].forEach(function(yt){return yt.parentNode&&yt.parentNode.removeChild(yt)}),Wa===R&&(Wa=0),f&&(It&&(It.uncache=1),Z=0,ee.forEach(function(yt){return yt.pin===f&&Z++}),Z||(It.spacer=0)),i.onKill&&i.onKill(R)},ee.push(R),R.enable(!1,!1),ft&&ft(R),n&&n.add&&!Qt){var q=R.update;R.update=function(){R.update=q,jt.cache++,Nt||Ut||R.refresh()},Pt.delayedCall(.01,R.update),Qt=.01,Nt=Ut=0}else R.refresh();f&&sy()},r.register=function(i){return fo||(Pt=i||_g(),gg()&&window.document&&r.enable(),fo=Ua),fo},r.defaults=function(i){if(i)for(var n in i)bc[n]=i[n];return bc},r.disable=function(i,n){Ua=0,ee.forEach(function(o){return o[n?"kill":"disable"](i)}),pi(ie,"wheel",uo),pi(Ee,"scroll",uo),clearInterval(xc),pi(Ee,"touchcancel",Kn),pi(Te,"touchstart",Kn),Sc(pi,Ee,"pointerdown,touchstart,mousedown",jm),Sc(pi,Ee,"pointerup,touchend,mouseup",tg),Dc.kill(),yc(pi);for(var s=0;s<jt.length;s+=3)Mc(pi,jt[s],jt[s+1]),Mc(pi,jt[s],jt[s+2])},r.enable=function(){if(ie=window,Ee=document,xn=Ee.documentElement,Te=Ee.body,Pt){if(Xa=Pt.utils.toArray,za=Pt.utils.clamp,Wf=Pt.core.context||Kn,Of=Pt.core.suppressOverwrites||Kn,Jf=ie.history.scrollRestoration||"auto",Yf=ie.pageYOffset||0,Pt.core.globals("ScrollTrigger",r),Te){Ua=1,mo=document.createElement("div"),mo.style.height="100vh",mo.style.position="absolute",Ag(),Qv(),Ke.register(Pt),r.isTouch=Ke.isTouch,Kr=Ke.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gf=Ke.isTouch===1,mi(ie,"wheel",uo),Zf=[ie,Ee,xn,Te],Pt.matchMedia?(r.matchMedia=function(h){var d=Pt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Pt.addEventListener("matchMediaInit",function(){wg(),id()}),Pt.addEventListener("matchMediaRevert",function(){return Tg()}),Pt.addEventListener("matchMedia",function(){Ps(0,1),Os("matchMedia")}),Pt.matchMedia().add("(orientation: portrait)",function(){return zf(),zf})):console.warn("Requires GSAP 3.11.0 or later"),zf(),mi(Ee,"scroll",uo);var i=Te.hasAttribute("style"),n=Te.style,s=n.borderTopStyle,o=Pt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=_r(Te),ri.m=Math.round(a.top+ri.sc())||0,Li.m=Math.round(a.left+Li.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(Te.setAttribute("style",""),Te.removeAttribute("style")),xc=setInterval(ng,250),Pt.delayedCall(.5,function(){return vc=0}),mi(Ee,"touchcancel",Kn),mi(Te,"touchstart",Kn),Sc(mi,Ee,"pointerdown,touchstart,mousedown",jm),Sc(mi,Ee,"pointerup,touchend,mouseup",tg),Hf=Pt.utils.checkPrefix("transform"),Ic.push(Hf),fo=Ni(),Dc=Pt.delayedCall(.2,Ps).pause(),po=[Ee,"visibilitychange",function(){var h=ie.innerWidth,d=ie.innerHeight;Ee.hidden?(Zm=h,Jm=d):(Zm!==h||Jm!==d)&&Ba()},Ee,"DOMContentLoaded",Ps,ie,"load",Ps,ie,"resize",Ba],yc(mi),ee.forEach(function(h){return h.enable(0,1)}),l=0;l<jt.length;l+=3)Mc(pi,jt[l],jt[l+1]),Mc(pi,jt[l],jt[l+2])}else if(Ee){var c=function h(){r.enable(),Ee.removeEventListener("DOMContentLoaded",h)};Ee.addEventListener("DOMContentLoaded",c)}}},r.config=function(i){"limitCallbacks"in i&&(Ff=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(xc)||(xc=n)&&setInterval(ng,n),"ignoreMobileResize"in i&&(Gf=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(yc(pi)||yc(mi,i.autoRefreshEvents||"none"),dg=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=Zi(i),o=jt.indexOf(s),a=Ns(s);~o&&jt.splice(o,a?6:2),n&&(a?On.unshift(ie,n,Te,n,xn,n):On.unshift(s,n))},r.clearMatchMedia=function(i){ee.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var o=(_n(i)?Zi(i):i).getBoundingClientRect(),a=o[s?Is:Ls]*n||0;return s?o.right-a>0&&o.left+a<ie.innerWidth:o.bottom-a>0&&o.top+a<ie.innerHeight},r.positionInViewport=function(i,n,s){_n(i)&&(i=Zi(i));var o=i.getBoundingClientRect(),a=o[s?Is:Ls],l=n==null?a/2:n in Uc?Uc[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return s?(o.left+l)/ie.innerWidth:(o.top+l)/ie.innerHeight},r.killAll=function(i){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=Us.killAll||[];Us={},n.forEach(function(s){return s()})}},r})();Kt.version="3.15.1";Kt.saveStyles=function(r){return r?Xa(r).forEach(function(t){if(t&&t.style){var e=gn.indexOf(t);e>=0&&gn.splice(e,5),gn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Pt.core.getCache(t),Wf())}}):gn};Kt.revert=function(r,t){return id(!r,t)};Kt.create=function(r,t){return new Kt(r,t)};Kt.refresh=function(r){return r?Ba(!0):(fo||Kt.register())&&Ps(!0)};Kt.update=function(r){return++jt.cache&&xr(r===!0?2:0)};Kt.clearScrollMemory=Eg;Kt.maxScroll=function(r,t){return Qn(r,t?Li:ri)};Kt.getScrollFunc=function(r,t){return mr(Zi(r),t?Li:ri)};Kt.getById=function(r){return qf[r]};Kt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Kt.isScrolling=function(){return!!In};Kt.snapDirectional=ed;Kt.addEventListener=function(r,t){var e=Us[r]||(Us[r]=[]);~e.indexOf(t)||e.push(t)};Kt.removeEventListener=function(r,t){var e=Us[r],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};Kt.batch=function(r,t){var e=[],i={},n=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Pt.delayedCall(n,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),s<=d.length&&f.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&Ui(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ui(s)&&(s=s(),mi(Kt,"refresh",function(){return s=t.batchMax()})),Xa(r).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(Kt.create(c))}),e};var cg=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},Vf=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ke.isTouch?" pinch-zoom":""):"none",t===xn&&r(Te,e)},Ac={auto:1,scroll:1},hy=function(t){var e=t.event,i=t.target,n=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Pt.core.getCache(s),a=Ni(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Te&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ac[(l=Pn(s)).overflowY]||Ac[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Ns(s)&&(Ac[(l=Pn(s)).overflowY]||Ac[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Rg=function(t,e,i,n){return Ke.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&hy,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&mi(Ee,Ke.eventTypes[0],ug,!1,!0)},onDisable:function(){return pi(Ee,Ke.eventTypes[0],ug,!0)}})},uy=/(input|label|select|textarea)/i,hg,ug=function(t){var e=uy.test(t.target.tagName);(e||hg)&&(t._gsapAllow=!0,hg=e)},fy=function(t){Rs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,n=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Zi(t.target)||xn,h=Pt.core.globals().ScrollSmoother,d=h&&h.get(),u=Kr&&(t.content&&Zi(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=mr(c,ri),p=mr(c,Li),x=1,m=(Ke.isTouch&&ie.visualViewport?ie.visualViewport.scale*ie.visualViewport.width:ie.outerWidth)/ie.innerWidth,g=0,v=Ui(n)?function(){return n(a)}:function(){return n||2.8},E,y,b=Rg(c,t.type,!0,s),w=function(){return y=!1},_=Kn,S=Kn,P=function(){l=Qn(c,ri),S=za(Kr?1:0,l),i&&(_=za(0,Qn(c,Li))),E=Ds},A=function(){u._gsap.y=Oa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},U=function(){if(y){requestAnimationFrame(w);var nt=Oa(a.deltaY/2),W=S(f.v-nt);if(u&&W!==f.v+f.offset){f.offset=W-f.v;var R=Oa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=jt.cache,xr()}return!0}f.offset&&A(),y=!0},L,V,I,z,H=function(){P(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return u&&Pt.set(u,{y:"+=0"}),t.ignoreCheck=function(O){return Kr&&O.type==="touchmove"&&U(O)||x>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){y=!1;var O=x;x=Oa((ie.visualViewport&&ie.visualViewport.scale||1)/m),L.pause(),O!==x&&Vf(c,x>1.01?!0:i?!1:"x"),V=p(),I=f(),P(),E=Ds},t.onRelease=t.onGestureStart=function(O,nt){if(f.offset&&A(),!nt)z.restart(!0);else{jt.cache++;var W=v(),R,tt;i&&(R=p(),tt=R+W*.05*-O.velocityX/.227,W*=cg(p,R,tt,Qn(c,Li)),L.vars.scrollX=_(tt)),R=f(),tt=R+W*.05*-O.velocityY/.227,W*=cg(f,R,tt,Qn(c,ri)),L.vars.scrollY=S(tt),L.invalidate().duration(W).play(.01),(Kr&&L.vars.scrollY>=l||R>=l-1)&&Pt.to({},{onUpdate:H,duration:W})}o&&o(O)},t.onWheel=function(){L._ts&&L.pause(),Ni()-g>1e3&&(E=0,g=Ni())},t.onChange=function(O,nt,W,R,tt){if(Ds!==E&&P(),nt&&i&&p(_(R[2]===nt?V+(O.startX-O.x):p()+nt-R[1])),W){f.offset&&A();var vt=tt[2]===W,wt=vt?I+O.startY-O.y:f()+W-tt[1],$=S(wt);vt&&wt!==$&&(I+=$-wt),f($)}(W||nt)&&xr()},t.onEnable=function(){Vf(c,i?!1:"x"),Kt.addEventListener("refresh",H),mi(ie,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),b.enable()},t.onDisable=function(){Vf(c,!0),pi(ie,"resize",H),Kt.removeEventListener("refresh",H),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ke(t),a.iOS=Kr,Kr&&!f()&&f(1),Kr&&Pt.ticker.add(Kn),z=a._dc,L=Pt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Cg(f,f(),function(){return L.pause()})},onUpdate:xr,onComplete:z.vars.onComplete}),a};Kt.sort=function(r){if(Ui(r))return ee.sort(r);var t=ie.pageYOffset||0;return Kt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ie.innerHeight}),ee.sort(r||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Kt.observe=function(r){return new Ke(r)};Kt.normalizeScroll=function(r){if(typeof r>"u")return Ji;if(r===!0&&Ji)return Ji.enable();if(r===!1){Ji&&Ji.kill(),Ji=r;return}var t=r instanceof Ke?r:fy(r);return Ji&&Ji.target===t.target&&Ji.kill(),Ns(t.target)&&(Ji=t),t};Kt.core={_getVelocityProp:_c,_inputObserver:Rg,_scrollers:jt,_proxies:On,bridge:{ss:function(){In||Os("scrollStart"),In=Ni()},ref:function(){return Di}}};_g()&&Pt.registerPlugin(Kt);var Ya,$a,Pg=typeof Symbol=="function"?Symbol():"_split",rd,dy=()=>rd||Fs.register(window.gsap),Ig=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Za=r=>r?typeof r=="string"?Za(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...Za(e)):t.push(e),t),[]):[r]:[],Lg=r=>Za(r).filter(t=>t&&t.nodeType===1),Fc=[],nd=function(){},py={add:r=>r()},my=/\s+/g,Dg=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Bc={left:0,top:0,width:0,height:0},gy=(r,t)=>{for(;++t<r.length&&r[t]===Bc;);return r[t]||Bc},Ng=({element:r,html:t,ariaL:e,ariaH:i})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),i?r.setAttribute("aria-hidden",i):r.removeAttribute("aria-hidden")},Ug=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||Fc),i=r.length,n,s,o,a;if(e.size)for(;--i>-1;){s=r[i];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(n=0,a=s;o.startsWith(a+=r[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){r[i]=o,r.splice(i+1,n);break}}}}return r},Og=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),xo=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),sd=(r,t,e)=>{let i=t[r+"sClass"]||"",{tag:n="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=h=>{let d=document.createElement(n),u=e.length+1;return i&&(d.className=i+(l?" "+i+u:"")),o&&d.style.setProperty("--"+r,u+""),s!=="none"&&d.setAttribute("aria-hidden","true"),n!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(i=i.replace("++","")),c.collection=e,c},_y=(r,t,e,i)=>{let n=sd("line",e,i),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},Fg=(r,t,e,i,n,s,o,a,l,c)=>{var h;let d=Array.from(r.childNodes),u=0,{wordDelimiter:f,reduceWhiteSpace:p=!0,prepareText:x}=t,m=r.getBoundingClientRect(),g=m,v=!p&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",E=s&&c&&window.getComputedStyle(r).direction==="rtl",y=0,b=e.collection,w,_,S,P,A,U,L,V,I,z,H,O,nt,W,R,tt,vt,wt;for(typeof f=="object"?(S=f.delimiter||f,_=f.replaceWith||""):_=f===""?"":f||" ",w=_!==" ";u<d.length;u++)if(P=d[u],P.nodeType===3){for(R=P.textContent||"",p?R=R.replace(my," "):v&&(R=R.replace(/\n/g,_+`
`)),x&&(R=x(R,r)),P.textContent=R,A=_||S?R.split(S||_):R.match(a)||Fc,vt=A[A.length-1],V=w?vt.slice(-1)===" ":!vt,vt||A.pop(),g=m,L=w?A[0].charAt(0)===" ":!A[0],L&&xo(" ",r,P),A[0]||A.shift(),Ug(A,l),s&&c||(P.textContent=""),I=1;I<=A.length;I++)if(tt=A[I-1],!p&&v&&tt.charAt(0)===`
`&&((h=P.previousSibling)==null||h.remove(),xo(document.createElement("br"),r,P),tt=tt.slice(1)),!p&&tt==="")xo(_,r,P);else if(tt===" ")r.insertBefore(document.createTextNode(" "),P);else{if(w&&tt.charAt(0)===" "&&xo(" ",r,P),y&&I===1&&!L&&b.indexOf(y.parentNode)>-1?(U=b[b.length-1],U.appendChild(document.createTextNode(i?"":tt))):(U=e(i?"":tt),xo(U,r,P),y&&I===1&&!L&&U.insertBefore(y,U.firstChild)),i){if(H=Ig?Ug([...Ig.segment(tt)].map($=>$.segment),l):tt.match(a)||Fc,l){let $=tt.match(l);$&&$.some(ht=>H.indexOf(ht)<0)&&(H=tt.match(a)||Fc)}for(wt=0;wt<H.length;wt++)U.appendChild(H[wt]===" "?document.createTextNode(" "):i(H[wt]))}if(s&&c){if(R=P.textContent=R.substring(tt.length+1,R.length),z=U.getBoundingClientRect(),z.top>g.top&&(E?z.left>=g.left:z.left<=g.left)){for(O=r.cloneNode(),nt=r.childNodes[0];nt&&nt!==U;)W=nt,nt=nt.nextSibling,O.appendChild(W);r.parentNode.insertBefore(O,r),n&&Og(O)}g=z}(I<A.length||V)&&xo(I>=A.length?" ":w&&tt.slice(-1)===" "?" "+_:_,r,P)}r.removeChild(P),y=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(b.indexOf(P.previousSibling)>-1&&b[b.length-1].appendChild(P),y=P):(Fg(P,t,e,i,n,s,o,a,l,!0),y=0),n&&Og(P))},Bg=class zg{constructor(t,e){this.isSplit=!1,dy(),this.elements=Lg(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(s=>{var o;e.overwrite!==!1&&((o=s[Pg])==null||o._data.orig.filter(({element:a})=>a===s).forEach(Ng)),s[Pg]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n=()=>{let s=i.length,o;for(;s--;){o=i[s];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(n,200)})},nd(this),this.split(e)}split(t){return(this._ctx||py).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,f=d&&!u&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),x=p?new RegExp(p.source+"|"+Dg.source,"gu"):Dg,m=!!t.ignore&&Lg(t.ignore),{orig:g,animTime:v,obs:E}=this._data,y;(d||u||h)&&(this.elements.forEach((b,w)=>{g[w]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},i==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):i==="hidden"&&b.setAttribute("aria-hidden","true");let _=[],S=[],P=[],A=d?sd("char",t,_):null,U=sd("word",t,S),L,V,I,z;if(Fg(b,t,U,A,f,n&&(h||f),m,x,p,!1),h){let H=Za(b.childNodes),O=_y(b,H,t,P),nt,W=[],R=0,tt=window.getComputedStyle(b).direction==="rtl",vt=H.map(ht=>ht.nodeType===1?ht.getBoundingClientRect():Bc),wt=Bc,$;for(L=0;L<H.length;L++)nt=H[L],nt.nodeType===1&&(nt.nodeName==="BR"?((!L||H[L-1].nodeName!=="BR")&&(W.push(nt),O(R,L+1)),R=L+1,wt=gy(vt,L)):($=vt[L],L&&$.top>wt.top&&(tt?$.left+$.width>wt.left+1:$.left<wt.left+wt.width-1)&&(O(R,L),R=L),wt=$));R<L&&O(R,L),W.forEach(ht=>{var St;return(St=ht.parentNode)==null?void 0:St.removeChild(ht)})}if(!u){for(L=0;L<S.length;L++)if(V=S[L],d||!V.nextSibling||V.nextSibling.nodeType!==3)if(s&&!h){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";V.firstChild;)I.appendChild(V.firstChild);V.replaceWith(I)}else V.replaceWith(...V.childNodes);else z=V.nextSibling,z&&z.nodeType===3&&(z.textContent=(V.textContent||"")+(z.textContent||""),V.remove());S.length=0,b.normalize()}this.lines.push(...P),this.words.push(...S),this.chars.push(..._)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let w=b.cloneNode();return b.replaceWith(w),w.appendChild(b),b.className&&(w.className=b.className.trim().split(" ").map(_=>_+"-mask").join(" ")),w.style.overflow="clip",w.style.verticalAlign="top",w}))),this.isSplit=!0,$a&&h&&a&&$a.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),h&&a&&this.elements.forEach((b,w)=>{g[w].width=b.offsetWidth,E&&E.observe(b)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),$a?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(Ng),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new zg(t,e)}static register(t){Ya=Ya||t||window.gsap,Ya&&(Za=Ya.utils.toArray,nd=Ya.core.context||nd),!rd&&window.innerWidth>0&&($a=document.fonts,rd=!0)}};Bg.version="3.15.1";var Fs=Bg;var kg="1.3.27";function Gg(r,t,e){return Math.max(r,Math.min(t,e))}function xy(r,t,e){return(1-e)*r+e*t}function vy(r,t,e,i){return xy(r,t,1-Math.exp(-e*i))}function yy(r,t){return(r%t+t)%t}var Sy=class{constructor(){Bt(this,"isRunning",!1);Bt(this,"value",0);Bt(this,"from",0);Bt(this,"to",0);Bt(this,"currentTime",0);Bt(this,"lerp");Bt(this,"duration");Bt(this,"easing");Bt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Gg(0,this.currentTime/this.duration,1);t=e>=1;let i=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=vy(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:i,easing:n,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function My(r,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,i)},t)}}var by=class{constructor(r,t,{autoResize:e=!0,debounce:i=250}={}){Bt(this,"width",0);Bt(this,"height",0);Bt(this,"scrollHeight",0);Bt(this,"scrollWidth",0);Bt(this,"debouncedResize");Bt(this,"wrapperResizeObserver");Bt(this,"contentResizeObserver");Bt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Bt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Bt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=My(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Wg=class{constructor(){Bt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let i=0,n=e.length;i<n;i++)e[i]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},Ty=100/6,jr={passive:!1};function Vg(r,t){return r===1?Ty:r===2?t:1}var wy=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Bt(this,"touchStart",{x:0,y:0});Bt(this,"lastDelta",{x:0,y:0});Bt(this,"window",{width:0,height:0});Bt(this,"emitter",new Wg);Bt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Bt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,i=-(t-this.touchStart.x)*this.options.touchMultiplier,n=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:r})});Bt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Bt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:i}=r,n=Vg(i,this.window.width),s=Vg(i,this.window.height);t*=n,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Bt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,jr),this.element.addEventListener("touchstart",this.onTouchStart,jr),this.element.addEventListener("touchmove",this.onTouchMove,jr),this.element.addEventListener("touchend",this.onTouchEnd,jr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,jr),this.element.removeEventListener("touchstart",this.onTouchStart,jr),this.element.removeEventListener("touchmove",this.onTouchMove,jr),this.element.removeEventListener("touchend",this.onTouchEnd,jr)}},Hg=r=>Math.min(1,1.001-2**(-10*r)),Xg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:x=!0,prevent:m,virtualScroll:g,overscroll:v=!0,autoRaf:E=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:S=_,stopInertiaOnNavigate:P=!1,respectReducedMotion:A=!0}={}){Bt(this,"_isScrolling",!1);Bt(this,"_isStopped",!1);Bt(this,"_isLocked",!1);Bt(this,"_preventNextNativeScrollEvent",!1);Bt(this,"_resetVelocityTimeout",null);Bt(this,"_rafId",null);Bt(this,"_isDraggingSelection",!1);Bt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Bt(this,"isTouching");Bt(this,"isIos");Bt(this,"time",0);Bt(this,"userData",{});Bt(this,"lastVelocity",0);Bt(this,"velocity",0);Bt(this,"direction",0);Bt(this,"options");Bt(this,"targetScroll");Bt(this,"animatedScroll");Bt(this,"animate",new Sy);Bt(this,"emitter",new Wg);Bt(this,"dimensions");Bt(this,"virtualScroll");Bt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Bt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Bt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Bt(this,"onClick",r=>{let t=r.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),e=new URL(window.location.href);if(this.options.anchors){let i=t.find(n=>e.host===n.host&&e.pathname===n.pathname&&n.hash);if(i){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,n);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>e.host===i.host&&e.pathname!==i.pathname)){this.reset();return}});Bt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Bt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:i}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),s=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||n&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let u=n&&this.options.syncTouch,f=n&&i.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Bt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Bt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=kg,window.lenis||(window.lenis={}),window.lenis.version=kg,d==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Hg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:i,syncTouch:n,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:x,prevent:m,virtualScroll:g,overscroll:v,autoRaf:E,anchors:y,autoToggle:b,allowNestedScroll:w,naiveDimensions:S,stopInertiaOnNavigate:P,respectReducedMotion:A},this.dimensions=new by(r,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new wy(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;let n=i[0],s=i[i.length-1],o=40,a=Math.hypot(e.clientX-n.left,e.clientY-n.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:i=!1,programmatic:n=!0,lerp:s=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(n?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(p=u),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let x=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);u=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(E)?0:E)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=Gg(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Hg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),n&&(this.targetScroll=p),x||this.emit(),x&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let i=Date.now();r._lenis||(r._lenis={});let n=r._lenis,s,o,a,l,c,h,d,u,f,p;if(i-(n.time??0)>2e3){n.time=Date.now();let w=window.getComputedStyle(r);if(n.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),n.hasOverflowX=s,n.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,a=d>f,l=u>p,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=d,n.scrollHeight=u,n.clientWidth=f,n.clientHeight=p,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else a=n.isScrollableX,l=n.isScrollableY,s=n.hasOverflowX,o=n.hasOverflowY,d=n.scrollWidth,u=n.scrollHeight,f=n.clientWidth,p=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let x=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,v,E,y,b;if(x==="horizontal")m=Math.round(r.scrollLeft),g=d-f,v=t,E=s,y=a,b=c;else if(x==="vertical")m=Math.round(r.scrollTop),g=u-p,v=e,E=o,y=l,b=h;else return!1;return!b&&(m>=g||m<=0)?!0:(v>0?m<g:m>0)&&E&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?yy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var b0=0,zd=1,T0=2;var Tl=1,w0=2,ia=3,us=0,nn=1,nr=2,Lr=0,na=1,Mn=2,kd=3,Vd=4,E0=5;var Ws=100,A0=101,C0=102,R0=103,P0=104,I0=200,L0=201,D0=202,N0=203,Hd=204,Gd=205,U0=206,O0=207,F0=208,B0=209,z0=210,k0=211,V0=212,H0=213,G0=214,dh=0,ph=1,mh=2,Bo=3,gh=4,_h=5,xh=6,vh=7,Wd=0,W0=1,X0=2,rr=0,wl=1,El=2,Al=3,Xs=4,Cl=5,Rl=6,Pl=7;var Xd=300,qs=301,ra=302,Wh=303,Xh=304,yh=1e3,tr=1001,Sh=1002,xi=1003,q0=1004;var Il=1005;var en=1006,qh=1007;var Dr=1008;var bn=1009,qd=1010,Yd=1011,sa=1012,Yh=1013,Vn=1014,Hn=1015,Ei=1016,$h=1017,Zh=1018,Ys=1020,$d=35902,Zd=35899,Jd=1021,Kd=1022,Gn=1023,Ar=1026,Nr=1027,Qd=1028,Jh=1029,fs=1030,Kh=1031;var Qh=1033,Ll=33776,Dl=33777,Nl=33778,Ul=33779,jh=35840,tu=35841,eu=35842,iu=35843,nu=36196,ru=37492,su=37496,ou=37488,au=37489,Ol=37490,lu=37491,cu=37808,hu=37809,uu=37810,fu=37811,du=37812,pu=37813,mu=37814,gu=37815,_u=37816,xu=37817,vu=37818,yu=37819,Su=37820,Mu=37821,bu=36492,Tu=36494,wu=36495,Eu=36283,Au=36284,Fl=36285,Cu=36286;var rl=2300,Mh=2301,hh=2302,Id=2303,Ld=2400,Dd=2401,Nd=2402;var Y0=3200;var jd=0,$0=1,Ur="",bi="srgb",sl="srgb-linear",ol="linear",Me="srgb";var uh=7680;var Z0=519,J0=512,K0=513,Q0=514,tp=515,j0=516,t_=517,ep=518,ip=519,np=35044;var rp="300 es",Dn=2e3,al=2001;function Ey(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ay(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function e_(){let r=zo("canvas");return r.style.display="block",r}var qg={},ko=null;function ll(...r){let t="THREE."+r.shift();ko?ko("log",t,...r):console.log(t,...r)}function i_(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Gt(...r){r=i_(r);let t="THREE."+r.shift();if(ko)ko("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Wt(...r){r=i_(r);let t="THREE."+r.shift();if(ko)ko("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function nl(...r){let t=r.join(" ");t in qg||(qg[t]=!0,Gt(...r))}function n_(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var r_={[dh]:dh,[mh]:xh,[gh]:gh,[Bo]:_h,[ph]:ph,[xh]:mh,[vh]:vh,[_h]:Bo},er=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},Oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var od=Math.PI/180,bh=180/Math.PI;function $s(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oi[r&255]+Oi[r>>8&255]+Oi[r>>16&255]+Oi[r>>24&255]+"-"+Oi[t&255]+Oi[t>>8&255]+"-"+Oi[t>>16&15|64]+Oi[t>>24&255]+"-"+Oi[e&63|128]+Oi[e>>8&255]+"-"+Oi[e>>16&255]+Oi[e>>24&255]+Oi[i&255]+Oi[i>>8&255]+Oi[i>>16&255]+Oi[i>>24&255]).toLowerCase()}function le(r,t,e){return Math.max(t,Math.min(e,r))}function Cy(r,t){return(r%t+t)%t}function ad(r,t,e){return(1-e)*r+e*t}function s_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ru(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function o_(r,t){if(t.constructor===Float32Array)return r;let e=Ru(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function a_(r,t){if(t.constructor===Float32Array)return r;let e=Ru(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var hp=class hp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hp.prototype.isVector2=!0;var kt=hp,ir=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[o+0],f=s[o+1],p=s[o+2],x=s[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);g=Math.sin(g*v)/E,a=Math.sin(a*v)/E,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(s/2),u=l(i/2),f=l(n/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},up=class up{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-s*n),d=2*(s*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=n+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ld.copy(this).projectOnVector(t),this.sub(ld)}reflect(t){return this.sub(ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};up.prototype.isVector3=!0;var B=up,ld=new B,Yg=new ir,fp=class fp{constructor(t,e,i,n,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=n[0],m=n[3],g=n[6],v=n[1],E=n[4],y=n[7],b=n[2],w=n[5],_=n[8];return s[0]=o*x+a*v+l*b,s[3]=o*m+a*E+l*w,s[6]=o*g+a*y+l*_,s[1]=c*x+h*v+d*b,s[4]=c*m+h*E+d*w,s[7]=c*g+h*y+d*_,s[2]=u*x+f*v+p*b,s[5]=u*m+f*E+p*w,s[8]=u*g+f*y+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=e*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=u*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return nl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cd.makeScale(t,e)),this}rotate(t){return nl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cd.makeRotation(-t)),this}translate(t,e){return nl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fp.prototype.isMatrix3=!0;var $t=fp,cd=new $t,$g=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zg=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ry(){let r={enabled:!0,workingColorSpace:sl,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Me&&(n.r=Er(n.r),n.g=Er(n.g),n.b=Er(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(n.r=Fo(n.r),n.g=Fo(n.g),n.b=Fo(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ur?ol:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[sl]:{primaries:t,whitePoint:i,transfer:ol,toXYZ:$g,fromXYZ:Zg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:t,whitePoint:i,transfer:Me,toXYZ:$g,fromXYZ:Zg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),r}var re=Ry();function Er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var vo,Th=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{vo===void 0&&(vo=zo("canvas")),vo.width=t.width,vo.height=t.height;let n=vo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=vo}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Er(e[i]/255)*255):e[i]=Er(e[i]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Py=0,Vo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=$s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(hd(n[o].image)):s.push(hd(n[o]))}else s=hd(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function hd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Th.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var Iy=0,ud=new B,Bi=class r extends er{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=tr,n=tr,s=en,o=Dr,a=Gn,l=bn,c=r.DEFAULT_ANISOTROPY,h=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=$s(),this.name="",this.source=new Vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yh:t.x=t.x-Math.floor(t.x);break;case tr:t.x=t.x<0?0:1;break;case Sh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yh:t.y=t.y-Math.floor(t.y);break;case tr:t.y=t.y<0?0:1;break;case Sh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Bi.DEFAULT_IMAGE=null;Bi.DEFAULT_MAPPING=Xd;Bi.DEFAULT_ANISOTROPY=1;var dp=class dp{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,b=(g+1)/2,w=(h+u)/4,_=(d+x)/4,S=(p+m)/4;return E>y&&E>b?E<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(E),n=w/i,s=_/i):y>b?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=w/n,s=S/n):b<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),i=_/s,n=S/s),this.set(i,n,s,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dp.prototype.isVector4=!0;var Ye=dp,wh=class extends er{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new Bi({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Vo(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends wh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},cl=class extends Bi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xi,this.minFilter=xi,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eh=class extends Bi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=xi,this.minFilter=xi,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Gh=class Gh{constructor(t,e,i,n,s,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,h,d,u,f,p,x,m)}set(t,e,i,n,s,o,a,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gh().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/yo.setFromMatrixColumn(t,0).length(),s=1/yo.setFromMatrixColumn(t,1).length(),o=1/yo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ly,t,Dy)}lookAt(t,e,i){let n=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),ts.crossVectors(i,vn),ts.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),ts.crossVectors(i,vn)),ts.normalize(),zc.crossVectors(vn,ts),n[0]=ts.x,n[4]=zc.x,n[8]=vn.x,n[1]=ts.y,n[5]=zc.y,n[9]=vn.y,n[2]=ts.z,n[6]=zc.z,n[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],v=i[3],E=i[7],y=i[11],b=i[15],w=n[0],_=n[4],S=n[8],P=n[12],A=n[1],U=n[5],L=n[9],V=n[13],I=n[2],z=n[6],H=n[10],O=n[14],nt=n[3],W=n[7],R=n[11],tt=n[15];return s[0]=o*w+a*A+l*I+c*nt,s[4]=o*_+a*U+l*z+c*W,s[8]=o*S+a*L+l*H+c*R,s[12]=o*P+a*V+l*O+c*tt,s[1]=h*w+d*A+u*I+f*nt,s[5]=h*_+d*U+u*z+f*W,s[9]=h*S+d*L+u*H+f*R,s[13]=h*P+d*V+u*O+f*tt,s[2]=p*w+x*A+m*I+g*nt,s[6]=p*_+x*U+m*z+g*W,s[10]=p*S+x*L+m*H+g*R,s[14]=p*P+x*V+m*O+g*tt,s[3]=v*w+E*A+y*I+b*nt,s[7]=v*_+E*U+y*z+b*W,s[11]=v*S+E*L+y*H+b*R,s[15]=v*P+E*V+y*O+b*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],v=l*f-c*u,E=a*f-c*d,y=a*u-l*d,b=o*f-c*h,w=o*u-l*h,_=o*d-a*h;return e*(x*v-m*E+g*y)-i*(p*v-m*b+g*w)+n*(p*E-x*b+g*_)-s*(p*y-x*w+m*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(s*h-a*l)+n*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=e*a-i*o,E=e*l-n*o,y=e*c-s*o,b=i*l-n*a,w=i*c-s*a,_=n*c-s*l,S=h*x-d*p,P=h*m-u*p,A=h*g-f*p,U=d*m-u*x,L=d*g-f*x,V=u*g-f*m,I=v*V-E*L+y*U+b*A-w*P+_*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(a*V-l*L+c*U)*z,t[1]=(n*L-i*V-s*U)*z,t[2]=(x*_-m*w+g*b)*z,t[3]=(u*w-d*_-f*b)*z,t[4]=(l*A-o*V-c*P)*z,t[5]=(e*V-n*A+s*P)*z,t[6]=(m*y-p*_-g*E)*z,t[7]=(h*_-u*y+f*E)*z,t[8]=(o*L-a*A+c*S)*z,t[9]=(i*A-e*L-s*S)*z,t[10]=(p*w-x*y+g*v)*z,t[11]=(d*y-h*w-f*v)*z,t[12]=(a*P-o*U-l*S)*z,t[13]=(e*U-i*P+n*S)*z,t[14]=(x*E-p*b-m*v)*z,t[15]=(h*b-d*E+u*v)*z,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,x=o*h,m=o*d,g=a*d,v=l*c,E=l*h,y=l*d,b=i.x,w=i.y,_=i.z;return n[0]=(1-(x+g))*b,n[1]=(f+y)*b,n[2]=(p-E)*b,n[3]=0,n[4]=(f-y)*w,n[5]=(1-(u+g))*w,n[6]=(m+v)*w,n[7]=0,n[8]=(p+E)*_,n[9]=(m-v)*_,n[10]=(1-(u+x))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=yo.set(n[0],n[1],n[2]).length(),a=yo.set(n[4],n[5],n[6]).length(),l=yo.set(n[8],n[9],n[10]).length();s<0&&(o=-o),Fn.copy(this);let c=1/o,h=1/a,d=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,e.setFromRotationMatrix(Fn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,s,o,a=Dn,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===Dn)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===al)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=Dn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===Dn)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===al)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Gh.prototype.isMatrix4=!0;var De=Gh,yo=new B,Fn=new De,Ly=new B(0,0,0),Dy=new B(1,1,1),ts=new B,zc=new B,vn=new B,Jg=new De,Kg=new ir,ss=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Jg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jg,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kg.setFromEuler(this),this.setFromQuaternion(Kg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER="XYZ";var Ho=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ny=0,Qg=new B,So=new ir,vr=new De,kc=new B,Ja=new B,Uy=new B,Oy=new ir,jg=new B(1,0,0),t0=new B(0,1,0),e0=new B(0,0,1),i0={type:"added"},Fy={type:"removed"},Mo={type:"childadded",child:null},fd={type:"childremoved",child:null},un=class r extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new B,e=new ss,i=new ir,n=new B(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new De},normalMatrix:{value:new $t}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return So.setFromAxisAngle(t,e),this.quaternion.multiply(So),this}rotateOnWorldAxis(t,e){return So.setFromAxisAngle(t,e),this.quaternion.premultiply(So),this}rotateX(t){return this.rotateOnAxis(jg,t)}rotateY(t){return this.rotateOnAxis(t0,t)}rotateZ(t){return this.rotateOnAxis(e0,t)}translateOnAxis(t,e){return Qg.copy(t).applyQuaternion(this.quaternion),this.position.add(Qg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jg,t)}translateY(t){return this.translateOnAxis(t0,t)}translateZ(t){return this.translateOnAxis(e0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?kc.copy(t):kc.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(Ja,kc,this.up):vr.lookAt(kc,Ja,this.up),this.quaternion.setFromRotationMatrix(vr),n&&(vr.extractRotation(n.matrixWorld),So.setFromRotationMatrix(vr),this.quaternion.premultiply(So.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(i0),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fy),fd.child=t,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vr.multiply(t.parent.matrixWorld)),t.applyMatrix4(vr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(i0),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,t,Uy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,Oy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new B(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wr=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},By={type:"move"},Go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new wr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},l_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function dd(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Zt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=re.workingColorSpace){if(t=Cy(t,1),e=le(e,0,1),i=le(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=dd(o,s,t+1/3),this.g=dd(o,s,t),this.b=dd(o,s,t-1/3)}return re.colorSpaceToWorking(this,n),this}setStyle(t,e=bi){function i(s){s!==void 0&&parseFloat(s)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bi){let i=l_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bi){return re.workingToColorSpace(Fi.copy(this),t),Math.round(le(Fi.r*255,0,255))*65536+Math.round(le(Fi.g*255,0,255))*256+Math.round(le(Fi.b*255,0,255))}getHexString(t=bi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Fi.copy(this),e);let i=Fi.r,n=Fi.g,s=Fi.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Fi.copy(this),e),t.r=Fi.r,t.g=Fi.g,t.b=Fi.b,t}getStyle(t=bi){re.workingToColorSpace(Fi.copy(this),t);let e=Fi.r,i=Fi.g,n=Fi.b;return t!==bi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(Vc);let i=ad(es.h,Vc.h,e),n=ad(es.s,Vc.s,e),s=ad(es.l,Vc.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fi=new Zt;Zt.NAMES=l_;var hl=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new B,yr=new B,pd=new B,Sr=new B,bo=new B,To=new B,n0=new B,md=new B,gd=new B,_d=new B,xd=new Ye,vd=new Ye,yd=new Ye,Tr=class r{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Bn.subVectors(t,e),n.cross(Bn);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Bn.subVectors(n,e),yr.subVectors(i,e),pd.subVectors(t,e);let o=Bn.dot(Bn),a=Bn.dot(yr),l=Bn.dot(pd),c=yr.dot(yr),h=yr.dot(pd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,Sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sr.x),l.addScaledVector(o,Sr.y),l.addScaledVector(a,Sr.z),l)}static getInterpolatedAttribute(t,e,i,n,s,o){return xd.setScalar(0),vd.setScalar(0),yd.setScalar(0),xd.fromBufferAttribute(t,e),vd.fromBufferAttribute(t,i),yd.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(xd,s.x),o.addScaledVector(vd,s.y),o.addScaledVector(yd,s.z),o}static isFrontFacing(t,e,i,n){return Bn.subVectors(i,e),yr.subVectors(t,e),Bn.cross(yr).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Bn.cross(yr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;bo.subVectors(n,i),To.subVectors(s,i),md.subVectors(t,i);let l=bo.dot(md),c=To.dot(md);if(l<=0&&c<=0)return e.copy(i);gd.subVectors(t,n);let h=bo.dot(gd),d=To.dot(gd);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(bo,o);_d.subVectors(t,s);let f=bo.dot(_d),p=To.dot(_d);if(p>=0&&f<=p)return e.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(To,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return n0.subVectors(s,n),a=(d-h)/(d-h+(f-p)),e.copy(n).addScaledVector(n0,a);let g=1/(m+x+u);return o=x*g,a=u*g,e.copy(i).addScaledVector(bo,o).addScaledVector(To,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},os=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hc.copy(i.boundingBox)),Hc.applyMatrix4(t.matrixWorld),this.union(Hc)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ka),Gc.subVectors(this.max,Ka),wo.subVectors(t.a,Ka),Eo.subVectors(t.b,Ka),Ao.subVectors(t.c,Ka),is.subVectors(Eo,wo),ns.subVectors(Ao,Eo),Bs.subVectors(wo,Ao);let e=[0,-is.z,is.y,0,-ns.z,ns.y,0,-Bs.z,Bs.y,is.z,0,-is.x,ns.z,0,-ns.x,Bs.z,0,-Bs.x,-is.y,is.x,0,-ns.y,ns.x,0,-Bs.y,Bs.x,0];return!Sd(e,wo,Eo,Ao,Gc)||(e=[1,0,0,0,1,0,0,0,1],!Sd(e,wo,Eo,Ao,Gc))?!1:(Wc.crossVectors(is,ns),e=[Wc.x,Wc.y,Wc.z],Sd(e,wo,Eo,Ao,Gc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mr=[new B,new B,new B,new B,new B,new B,new B,new B],zn=new B,Hc=new os,wo=new B,Eo=new B,Ao=new B,is=new B,ns=new B,Bs=new B,Ka=new B,Gc=new B,Wc=new B,zs=new B;function Sd(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){zs.fromArray(r,s);let a=n.x*Math.abs(zs.x)+n.y*Math.abs(zs.y)+n.z*Math.abs(zs.z),l=t.dot(zs),c=e.dot(zs),h=i.dot(zs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var oi=new B,Xc=new kt,zy=0,qe=class extends er{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=np,this.updateRanges=[],this.gpuType=Hn,this.version=0,this._normalizationScale=t!==void 0?Ru(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xc.fromBufferAttribute(this,e),Xc.applyMatrix3(t),this.setXY(e,Xc.x,Xc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.applyMatrix3(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.applyMatrix4(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.applyNormalMatrix(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.transformDirection(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):o_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):a_(t,this.array)}};var ul=class extends qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var fl=class extends qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var _i=class extends qe{constructor(t,e,i){super(new Float32Array(t),e,i)}},ky=new os,Qa=new B,Md=new B,Cr=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ky.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qa.subVectors(t,this.center);let e=Qa.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Qa,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Md.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qa.copy(t.center).add(Md)),this.expandByPoint(Qa.copy(t.center).sub(Md))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Vy=0,Ln=new De,bd=new un,Co=new B,yn=new os,ja=new os,gi=new B,Ti=class r extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ey(t)?fl:ul)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,i){return Ln.makeTranslation(t,e,i),this.applyMatrix4(Ln),this}scale(t,e,i){return Ln.makeScale(t,e,i),this.applyMatrix4(Ln),this}lookAt(t){return bd.lookAt(t),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _i(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(gi.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(gi),gi.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(gi)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ja.setFromBufferAttribute(a),this.morphTargetsRelative?(gi.addVectors(yn.min,ja.min),yn.expandByPoint(gi),gi.addVectors(yn.max,ja.max),yn.expandByPoint(gi)):(yn.expandByPoint(ja.min),yn.expandByPoint(ja.max))}yn.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)gi.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(gi));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gi.fromBufferAttribute(a,c),l&&(Co.fromBufferAttribute(t,c),gi.add(Co)),n=Math.max(n,i.distanceToSquared(gi))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new qe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new B,l[P]=new B;let h=new B,d=new B,u=new B,f=new kt,p=new kt,x=new kt,m=new B,g=new B;function v(P,A,U){c[P]=c[A]=c[U]=1,h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,A),u.fromBufferAttribute(i,U),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,U),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(L),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(L),a[P].add(m),a[A].add(m),a[U].add(m),l[P].add(g),l[A].add(g),l[U].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,A=E.length;P<A;++P){let U=E[P],L=U.start,V=U.count;for(let I=L,z=L+V;I<z;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new B,b=new B,w=new B,_=new B;function S(P){w.fromBufferAttribute(n,P),_.copy(w);let A=a[P];y.copy(A),y.sub(w.multiplyScalar(w.dot(A))).normalize(),b.crossVectors(_,A);let L=b.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,A=i.count;P<A;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new B,s=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)gi.fromBufferAttribute(t,e),gi.normalize(),t.setXYZ(e,gi.x,gi.y,gi.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new qe(u,h,d)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ah=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=np,this.updateRanges=[],this.version=0,this.uuid=$s()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=r0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=r0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function r0(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=$s()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var ji=new B,dl=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Ru(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ji.fromBufferAttribute(this,e),ji.applyMatrix4(t),this.setXYZ(e,ji.x,ji.y,ji.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ji.fromBufferAttribute(this,e),ji.applyNormalMatrix(t),this.setXYZ(e,ji.x,ji.y,ji.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ji.fromBufferAttribute(this,e),ji.transformDirection(t),this.setXYZ(e,ji.x,ji.y,ji.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ll("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ll("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):o_(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):a_(t,this.data.array)}},Td=new B,Hy=new B,Gy=new $t,kn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Td.subVectors(i,e).cross(Hy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Td),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Gy.getNormalMatrix(t),n=this.coplanarPoint(Td).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Wy=0,Rr=class extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=na,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Gd,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uh,this.stencilZFail=uh,this.stencilZPass=uh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new kn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new kt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Pr=class extends Rr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ro,tl=new B,Po=new B,Io=new B,Lo=new kt,el=new kt,c_=new De,qc=new B,il=new B,Yc=new B,s0=new kt,wd=new kt,o0=new kt,as=class extends un{constructor(t=new Pr){if(super(),this.isSprite=!0,this.type="Sprite",Ro===void 0){Ro=new Ti;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ah(e,5);Ro.setIndex([0,1,2,0,2,3]),Ro.setAttribute("position",new dl(i,3,0,!1)),Ro.setAttribute("uv",new dl(i,2,3,!1))}this.geometry=Ro,this.material=t,this.center=new kt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Po.setFromMatrixScale(this.matrixWorld),c_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Io.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Po.multiplyScalar(-Io.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let o=this.center;$c(qc.set(-.5,-.5,0),Io,o,Po,n,s),$c(il.set(.5,-.5,0),Io,o,Po,n,s),$c(Yc.set(.5,.5,0),Io,o,Po,n,s),s0.set(0,0),wd.set(1,0),o0.set(1,1);let a=t.ray.intersectTriangle(qc,il,Yc,!1,tl);if(a===null&&($c(il.set(-.5,.5,0),Io,o,Po,n,s),wd.set(0,1),a=t.ray.intersectTriangle(qc,Yc,il,!1,tl),a===null))return;let l=t.ray.origin.distanceTo(tl);l<t.near||l>t.far||e.push({distance:l,point:tl.clone(),uv:Tr.getInterpolation(tl,qc,il,Yc,s0,wd,o0,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function $c(r,t,e,i,n,s){Lo.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(el.x=s*Lo.x-n*Lo.y,el.y=n*Lo.x+s*Lo.y):el.copy(Lo),r.copy(t),r.x+=el.x,r.y+=el.y,r.applyMatrix4(c_)}var br=new B,Ed=new B,Zc=new B,Jc=new B,Wo=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,br)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=br.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(br.copy(this.origin).addScaledVector(this.direction,e),br.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ed.copy(t).add(e).multiplyScalar(.5),Zc.copy(e).sub(t).normalize(),Jc.copy(this.origin).sub(Ed);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Zc),a=Jc.dot(this.direction),l=-Jc.dot(Zc),c=Jc.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ed).addScaledVector(Zc,u),f}intersectSphere(t,e){if(t.radius<0)return null;br.subVectors(t.center,this.origin);let i=br.dot(this.direction),n=br.dot(br)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,br)!==null}intersectTriangle(t,e,i,n,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=i.x-o.x,v=i.y-o.y,E=i.z-o.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(h),_,S,P,A,U,L,V,I,z,H,O,nt;if(y>=b&&y>=w?(P=l,L=d,z=p,nt=g,l>=0?(_=c,S=h,A=u,U=f,V=x,I=m,H=v,O=E):(_=h,S=c,A=f,U=u,V=m,I=x,H=E,O=v)):b>=w?(P=c,L=u,z=x,nt=v,c>=0?(_=h,S=l,A=f,U=d,V=m,I=p,H=E,O=g):(_=l,S=h,A=d,U=f,V=p,I=m,H=g,O=E)):(P=h,L=f,z=m,nt=E,h>=0?(_=l,S=c,A=d,U=u,V=p,I=x,H=g,O=v):(_=c,S=l,A=u,U=d,V=x,I=p,H=v,O=g)),P===0)return null;let W=_/P,R=S/P,tt=1/P,vt=A-W*L,wt=U-R*L,$=V-W*z,ht=I-R*z,St=H-W*nt,Tt=O-R*nt,_t=St*ht-Tt*$,It=vt*Tt-wt*St,pe=$*wt-ht*vt;if(n){if(_t<0||It<0||pe<0)return null}else if((_t<0||It<0||pe<0)&&(_t>0||It>0||pe>0))return null;let Ct=_t+It+pe;if(Ct===0)return null;let Xt=tt*(_t*L+It*z+pe*nt);return(Ct>0?Xt<0:Xt>0)?null:this.at(Xt/Ct,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xo=class extends Rr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},a0=new De,ks=new Wo,Kc=new Cr,l0=new B,Qc=new B,jc=new B,th=new B,Ad=new B,eh=new B,c0=new B,ih=new B,wi=class extends un{constructor(t=new Ti,e=new Xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){eh.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(Ad.fromBufferAttribute(d,t),o?eh.addScaledVector(Ad,h):eh.addScaledVector(Ad.sub(e),h))}e.add(eh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kc.copy(i.boundingSphere),Kc.applyMatrix4(s),ks.copy(t.ray).recast(t.near),!(Kc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Kc,l0)===null||ks.origin.distanceToSquared(l0)>(t.far-t.near)**2))&&(a0.copy(s).invert(),ks.copy(t.ray).applyMatrix4(a0),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ks)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,b=E;y<b;y+=3){let w=a.getX(y),_=a.getX(y+1),S=a.getX(y+2);n=nh(this,g,t,i,c,h,d,w,_,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);n=nh(this,o,t,i,c,h,d,v,E,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,b=E;y<b;y+=3){let w=y,_=y+1,S=y+2;n=nh(this,g,t,i,c,h,d,w,_,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=m,E=m+1,y=m+2;n=nh(this,o,t,i,c,h,d,v,E,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Xy(r,t,e,i,n,s,o,a){let l;if(t.side===nn?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===us,a),l===null)return null;ih.copy(a),ih.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(ih);return c<e.near||c>e.far?null:{distance:c,point:ih.clone(),object:r}}function nh(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,Qc),r.getVertexPosition(l,jc),r.getVertexPosition(c,th);let h=Xy(r,t,e,i,Qc,jc,th,c0);if(h){let d=new B;Tr.getBarycoord(c0,Qc,jc,th,d),n&&(h.uv=Tr.getInterpolatedAttribute(n,a,l,c,d,new kt)),s&&(h.uv1=Tr.getInterpolatedAttribute(s,a,l,c,d,new kt)),o&&(h.normal=Tr.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};Tr.getNormal(Qc,jc,th,u.normal),h.face=u,h.barycoord=d}return h}var qo=class extends Bi{constructor(t=null,e=1,i=1,n,s,o,a,l,c=xi,h=xi,d,u){super(null,o,a,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vs=new Cr,qy=new kt(.5,.5),rh=new B,Hs=class{constructor(t=new kn,e=new kn,i=new kn,n=new kn,s=new kn,o=new kn){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Dn,i=!1){let n=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],x=s[9],m=s[10],g=s[11],v=s[12],E=s[13],y=s[14],b=s[15];if(n[0].setComponents(c-o,f-h,g-p,b-v).normalize(),n[1].setComponents(c+o,f+h,g+p,b+v).normalize(),n[2].setComponents(c+a,f+d,g+x,b+E).normalize(),n[3].setComponents(c-a,f-d,g-x,b-E).normalize(),i)n[4].setComponents(l,u,m,y).normalize(),n[5].setComponents(c-l,f-u,g-m,b-y).normalize();else if(n[4].setComponents(c-l,f-u,g-m,b-y).normalize(),e===Dn)n[5].setComponents(c+l,f+u,g+m,b+y).normalize();else if(e===al)n[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(t){Vs.center.set(0,0,0);let e=qy.distanceTo(t.center);return Vs.radius=.7071067811865476+e,Vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(rh.x=n.normal.x>0?t.max.x:t.min.x,rh.y=n.normal.y>0?t.max.y:t.min.y,rh.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(rh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},h0=new De,Ch=class r{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let s=e[n];h0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new Hs),i[n].setFromProjectionMatrix(h0,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Hs),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Rh=class extends Rr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},u0=new De,Ud=new Wo,sh=new Cr,oh=new B,Yo=class extends un{constructor(t=new Ti,e=new Rh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sh.copy(i.boundingSphere),sh.applyMatrix4(n),sh.radius+=s,t.ray.intersectsSphere(sh)===!1)return;u0.copy(n).invert(),Ud.copy(t.ray).applyMatrix4(u0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);oh.fromBufferAttribute(d,m),f0(oh,m,l,n,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)oh.fromBufferAttribute(d,p),f0(oh,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function f0(r,t,e,i,n,s,o){let a=Ud.distanceSqToPoint(r);if(a<e){let l=new B;Ud.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var pl=class extends Bi{constructor(t=[],e=qs,i,n,s,o,a,l,c,h){super(t,e,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ml=class extends Bi{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ir=class extends Bi{constructor(t,e,i=Vn,n,s,o,a=xi,l=xi,c,h=Ar,d=1){if(h!==Ar&&h!==Nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},gl=class extends Ir{constructor(t,e=Vn,i=qs,n,s,o=xi,a=xi,l,c=Ar){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_l=class extends Bi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$o=class r extends Ti{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,e,t,o,s,0),p("z","y","x",1,-1,i,e,-t,o,s,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new _i(c,3)),this.setAttribute("normal",new _i(h,3)),this.setAttribute("uv",new _i(d,2));function p(x,m,g,v,E,y,b,w,_,S,P){let A=y/_,U=b/S,L=y/2,V=b/2,I=w/2,z=_+1,H=S+1,O=0,nt=0,W=new B;for(let R=0;R<H;R++){let tt=R*U-V;for(let vt=0;vt<z;vt++){let wt=vt*A-L;W[x]=wt*v,W[m]=tt*E,W[g]=I,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[g]=w>0?1:-1,h.push(W.x,W.y,W.z),d.push(vt/_),d.push(1-R/S),O+=1}}for(let R=0;R<S;R++)for(let tt=0;tt<_;tt++){let vt=u+tt+z*R,wt=u+tt+z*(R+1),$=u+(tt+1)+z*(R+1),ht=u+(tt+1)+z*R;l.push(vt,wt,ht),l.push(wt,$,ht),nt+=6}a.addGroup(f,nt,P),f+=nt,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ph=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);let h=i[n],u=i[n+1]-h,f=(o-h)/u;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let o=this.getPoint(n),a=this.getPoint(s),l=e||(o.isVector2?new kt:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new B,n=[],s=[],o=[],a=new B,l=new De;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(le(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(le(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),o[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function sp(){let r=0,t=0,e=0,i=0;function n(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,n(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+i*a}}}var d0=new B,p0=new B,Cd=new sp,Rd=new sp,Pd=new sp,Zo=class extends Ph{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new B){let i=e,n=this.points,s=n.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%s]:(p0.subVectors(n[0],n[1]).add(n[0]),c=p0);let d=n[a%s],u=n[(a+1)%s];if(this.closed||a+2<s?h=n[(a+2)%s]:(d0.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=d0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Cd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),Rd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),Pd.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Cd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Rd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Pd.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Cd.calc(l),Rd.calc(l),Pd.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new B().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Gs=class r extends Ti{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*u-o;for(let E=0;E<c;E++){let y=E*d-s;p.push(y,-v,0),x.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let E=v+c*g,y=v+c*(g+1),b=v+1+c*(g+1),w=v+1+c*g;f.push(E,y,w),f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new _i(p,3)),this.setAttribute("normal",new _i(x,3)),this.setAttribute("uv",new _i(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Jo=class r extends Ti{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new B,u=new B,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let v=[],E=g/i,y=o+E*a,b=t*Math.cos(y),w=Math.sqrt(t*t-b*b),_=0;g===0&&o===0?_=.5/e:g===i&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let P=S/e,A=n+P*s;d.x=-w*Math.cos(A),d.y=b,d.z=w*Math.sin(A),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(P+_,1-E),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){let E=h[g][v+1],y=h[g][v],b=h[g+1][v],w=h[g+1][v+1];(g!==0||o>0)&&f.push(E,y,w),(g!==i-1||l<Math.PI)&&f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new _i(p,3)),this.setAttribute("normal",new _i(x,3)),this.setAttribute("uv",new _i(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Zs(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(m0(n))n.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(m0(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function zi(r){let t={};for(let e=0;e<r.length;e++){let i=Zs(r[e]);for(let n in i)t[n]=i[n]}return t}function m0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Yy(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function op(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Or={clone:Zs,merge:zi},$y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends Rr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$y,this.fragmentShader=Zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=Yy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Zt().setHex(n.value);break;case"v2":this.uniforms[i].value=new kt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new B().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ye().fromArray(n.value);break;case"m3":this.uniforms[i].value=new $t().fromArray(n.value);break;case"m4":this.uniforms[i].value=new De().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ko=class extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ih=class extends Rr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lh=class extends Rr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Do(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function ah(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var ls=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dh=class extends ls{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ld,endingEnd:Ld}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dd:s=t,a=2*e-i;break;case Nd:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dd:o=t,l=2*i-e;break;case Nd:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,E=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let b=0;b!==a;++b)s[b]=g*o[h+b]+v*o[c+b]+E*o[l+b]+y*o[d+b];return s}},Nh=class extends ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},Uh=class extends ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Oh=class extends ls{interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-e)/(n-e),x=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*x+o[l+m]*p;return s}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*u+p*2,v=d[g],E=d[g+1],y=t*u+p*2,b=h[y],w=h[y+1],_=Ky(i,e,v,b,n);s[p]=h_(_,x,E,w,m)}return s}};function h_(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function Jy(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function Ky(r,t,e,i,n){let s=(r-t)/(n-t);for(let o=0;o<8;o++){let a=h_(s,t,e,i,n)-r;if(Math.abs(a)<1e-10)break;let l=Jy(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Sn=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Do(e,this.TimeBufferType),this.values=Do(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Do(t.times,Array),values:Do(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),ah(t.settings)&&(i.settings={inTangents:Do(t.settings.inTangents,Array),outTangents:Do(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Oh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case rl:e=this.InterpolantFactoryMethodDiscrete;break;case Mh:e=this.InterpolantFactoryMethodLinear;break;case hh:e=this.InterpolantFactoryMethodSmooth;break;case Id:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Gt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rl;case this.InterpolantFactoryMethodLinear:return Mh;case this.InterpolantFactoryMethodSmooth:return hh;case this.InterpolantFactoryMethodBezier:return Id}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;ah(this.settings)&&(g0(this.settings.inTangents,t),g0(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;ah(this.settings)&&(_0(this.settings.inTangents,t),_0(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Wt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Ay(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===hh,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,ah(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function g0(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]+=t}function _0(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Mh;var cs=class extends Sn{constructor(t,e,i){super(t,e,i)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=rl;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fh=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};Fh.prototype.ValueTypeName="color";var Bh=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};Bh.prototype.ValueTypeName="number";var zh=class extends ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)ir.slerpFlat(s,0,o,c-a,o,c,l);return s}},xl=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new zh(this.times,this.values,this.getValueSize(),t)}};xl.prototype.ValueTypeName="quaternion";xl.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Sn{constructor(t,e,i){super(t,e,i)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=rl;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var kh=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};kh.prototype.ValueTypeName="vector";var fh={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(x0(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!x0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function x0(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Qo=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},u_=new Qo,jo=class{constructor(t){this.manager=t!==void 0?t:u_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};jo.DEFAULT_MATERIAL_NAME="__DEFAULT";var No=new WeakMap,Vh=class extends jo{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=fh.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let d=No.get(o);d===void 0&&(d=[],No.set(o,d)),d.push({onLoad:e,onError:n})}return o}let a=zo("img");function l(){h(),e&&e(this);let d=No.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}No.delete(this),s.manager.itemEnd(t)}function c(d){h(),n&&n(d),fh.remove(`image:${t}`);let u=No.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}No.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),fh.add(`image:${t}`,a),s.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var vl=class extends jo{constructor(t){super(t)}load(t,e,i,n){let s=new Bi,o=new Vh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}};var lh=new B,ch=new ir,jn=new B,yl=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(lh,ch,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lh,ch,jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(lh,ch,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lh,ch,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new B,v0=new kt,y0=new kt,tn=class extends yl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(od*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bh*2*Math.atan(Math.tan(od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,v0,y0),e.subVectors(y0,v0)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(od*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ta=class extends yl{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Uo=-90,Oo=1,ea=class extends un{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new tn(Uo,Oo,t,e);n.layers=this.layers,this.add(n);let s=new tn(Uo,Oo,t,e);s.layers=this.layers,this.add(s);let o=new tn(Uo,Oo,t,e);o.layers=this.layers,this.add(o);let a=new tn(Uo,Oo,t,e);a.layers=this.layers,this.add(a);let l=new tn(Uo,Oo,t,e);l.layers=this.layers,this.add(l);let c=new tn(Uo,Oo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===al)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Hh=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Sl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Qy.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Qy(){this._document.hidden===!1&&this.reset()}var ap="\\[\\]\\.:\\/",jy=new RegExp("["+ap+"]","g"),lp="[^"+ap+"]",tS="[^"+ap.replace("\\.","")+"]",eS=/((?:WC+[\/:])*)/.source.replace("WC",lp),iS=/(WCOD+)?/.source.replace("WCOD",tS),nS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lp),rS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lp),sS=new RegExp("^"+eS+iS+nS+rS+"$"),oS=["material","materials","bones","map"],Od=class{constructor(t,e,i){let n=i||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Fe=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jy,"")}static parseTrackName(t){let e=sS.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);oS.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Od;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ww=new Float32Array(1);var S0=new De,Ml=class{constructor(t,e,i=0,n=1/0){this.ray=new Wo(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return S0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(S0),this}intersectObject(t,e=!0,i=[]){return Fd(t,this,i,e),i.sort(M0),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Fd(t[n],this,i,e);return i.sort(M0),i}};function M0(r,t){return r.distance-t.distance}function Fd(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Fd(s[o],t,e,!0)}}var bl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Gt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var pp=class pp{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};pp.prototype.isMatrix2=!0;var Bd=pp;function cp(r,t,e,i){let n=aS(i);switch(e){case Jd:return r*t;case Qd:return r*t/n.components*n.byteLength;case Jh:return r*t/n.components*n.byteLength;case fs:return r*t*2/n.components*n.byteLength;case Kh:return r*t*2/n.components*n.byteLength;case Kd:return r*t*3/n.components*n.byteLength;case Gn:return r*t*4/n.components*n.byteLength;case Qh:return r*t*4/n.components*n.byteLength;case Ll:case Dl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Nl:case Ul:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tu:case iu:return Math.max(r,16)*Math.max(t,8)/4;case jh:case eu:return Math.max(r,8)*Math.max(t,8)/2;case nu:case ru:case ou:case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case su:case Ol:case lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case uu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case fu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case du:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case pu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case mu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case gu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case _u:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case xu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case vu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case yu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Su:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Mu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case bu:case Tu:case wu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Eu:case Au:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Fl:case Cu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function aS(r){switch(r){case bn:case qd:return{byteLength:1,components:1};case sa:case Yd:case Ei:return{byteLength:2,components:1};case $h:case Zh:return{byteLength:2,components:4};case Vn:case Yh:case Hn:return{byteLength:4,components:1};case $d:case Zd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function D_(){let r=null,t=!1,e=null,i=null;function n(s,o){i=r.requestAnimationFrame(n),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function cS(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var hS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uS=`#ifdef USE_ALPHAHASH
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
#endif`,fS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gS=`#ifdef USE_AOMAP
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
#endif`,_S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xS=`#ifdef USE_BATCHING
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
#endif`,vS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bS=`#ifdef USE_IRIDESCENCE
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
#endif`,TS=`#ifdef USE_BUMPMAP
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
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,PS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,DS=`#define PI 3.141592653589793
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
} // validated`,NS=`vec3 transformedNormal = objectNormal;
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
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zS="gl_FragColor = linearToOutputTexel( gl_FragColor );",kS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VS=`#ifdef USE_ENVMAP
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
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JS=`#ifdef USE_GRADIENTMAP
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
}`,KS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,eM=`#ifdef USE_ENVMAP
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
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oM=`PhysicalMaterial material;
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
#endif`,aM=`uniform sampler2D dfgLUT;
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
}`,lM=`
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
#endif`,cM=`#if defined( RE_IndirectDiffuse )
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,fM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vM=`#if defined( USE_POINTS_UV )
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
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bM=`#if defined( USE_MORPHCOLORS )
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
#endif`,TM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`#ifdef USE_MORPHTARGETS
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
#endif`,EM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,LM=`#ifdef USE_NORMALMAP
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
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$M=`float getShadowMask() {
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
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,KM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QM=`#ifdef USE_SKINNING
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
#endif`,jM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ib=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
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
#endif`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hb=`uniform sampler2D t2D;
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform float backgroundBlurriness;
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`#include <common>
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
}`,gb=`#if DEPTH_PACKING == 3200
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
}`,_b=`#define DISTANCE
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
}`,xb=`#define DISTANCE
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`uniform float scale;
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
}`,Mb=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,Tb=`uniform vec3 diffuse;
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
}`,wb=`#define LAMBERT
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
}`,Eb=`#define LAMBERT
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
}`,Ab=`#define MATCAP
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
}`,Cb=`#define MATCAP
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
}`,Rb=`#define NORMAL
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
}`,Pb=`#define NORMAL
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
}`,Ib=`#define PHONG
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
}`,Lb=`#define PHONG
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
}`,Db=`#define STANDARD
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
}`,Nb=`#define STANDARD
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
}`,Ub=`#define TOON
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
}`,Ob=`#define TOON
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
}`,Fb=`uniform float size;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,zb=`#include <common>
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
}`,kb=`uniform vec3 color;
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
}`,Vb=`uniform float rotation;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:hS,alphahash_pars_fragment:uS,alphamap_fragment:fS,alphamap_pars_fragment:dS,alphatest_fragment:pS,alphatest_pars_fragment:mS,aomap_fragment:gS,aomap_pars_fragment:_S,batching_pars_vertex:xS,batching_vertex:vS,begin_vertex:yS,beginnormal_vertex:SS,bsdfs:MS,iridescence_fragment:bS,bumpmap_pars_fragment:TS,clipping_planes_fragment:wS,clipping_planes_pars_fragment:ES,clipping_planes_pars_vertex:AS,clipping_planes_vertex:CS,color_fragment:RS,color_pars_fragment:PS,color_pars_vertex:IS,color_vertex:LS,common:DS,defaultnormal_vertex:NS,displacementmap_pars_vertex:US,displacementmap_vertex:OS,emissivemap_fragment:FS,emissivemap_pars_fragment:BS,colorspace_fragment:zS,colorspace_pars_fragment:kS,envmap_fragment:VS,envmap_common_pars_fragment:HS,envmap_pars_fragment:GS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:eM,envmap_vertex:XS,fog_vertex:qS,fog_pars_vertex:YS,fog_fragment:$S,fog_pars_fragment:ZS,gradientmap_pars_fragment:JS,lightmap_pars_fragment:KS,lights_lambert_fragment:QS,lights_lambert_pars_fragment:jS,lights_pars_begin:tM,lights_toon_fragment:iM,lights_toon_pars_fragment:nM,lights_phong_fragment:rM,lights_phong_pars_fragment:sM,lights_physical_fragment:oM,lights_physical_pars_fragment:aM,lights_fragment_begin:lM,lights_fragment_maps:cM,lights_fragment_end:hM,lightprobes_pars_fragment:uM,logdepthbuf_fragment:fM,logdepthbuf_pars_fragment:dM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:gM,map_pars_fragment:_M,map_particle_fragment:xM,map_particle_pars_fragment:vM,metalnessmap_fragment:yM,metalnessmap_pars_fragment:SM,morphinstance_vertex:MM,morphcolor_vertex:bM,morphnormal_vertex:TM,morphtarget_pars_vertex:wM,morphtarget_vertex:EM,normal_fragment_begin:AM,normal_fragment_maps:CM,normal_pars_fragment:RM,normal_pars_vertex:PM,normal_vertex:IM,normalmap_pars_fragment:LM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:OM,opaque_fragment:FM,packing:BM,premultiplied_alpha_fragment:zM,project_vertex:kM,dithering_fragment:VM,dithering_pars_fragment:HM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:XM,shadowmap_pars_vertex:qM,shadowmap_vertex:YM,shadowmask_pars_fragment:$M,skinbase_vertex:ZM,skinning_pars_vertex:JM,skinning_vertex:KM,skinnormal_vertex:QM,specularmap_fragment:jM,specularmap_pars_fragment:tb,tonemapping_fragment:eb,tonemapping_pars_fragment:ib,transmission_fragment:nb,transmission_pars_fragment:rb,uv_pars_fragment:sb,uv_pars_vertex:ob,uv_vertex:ab,worldpos_vertex:lb,background_vert:cb,background_frag:hb,backgroundCube_vert:ub,backgroundCube_frag:fb,cube_vert:db,cube_frag:pb,depth_vert:mb,depth_frag:gb,distance_vert:_b,distance_frag:xb,equirect_vert:vb,equirect_frag:yb,linedashed_vert:Sb,linedashed_frag:Mb,meshbasic_vert:bb,meshbasic_frag:Tb,meshlambert_vert:wb,meshlambert_frag:Eb,meshmatcap_vert:Ab,meshmatcap_frag:Cb,meshnormal_vert:Rb,meshnormal_frag:Pb,meshphong_vert:Ib,meshphong_frag:Lb,meshphysical_vert:Db,meshphysical_frag:Nb,meshtoon_vert:Ub,meshtoon_frag:Ob,points_vert:Fb,points_frag:Bb,shadow_vert:zb,shadow_frag:kb,sprite_vert:Vb,sprite_frag:Hb},At={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},or={basic:{uniforms:zi([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:zi([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:zi([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:zi([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:zi([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Zt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:zi([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:zi([At.points,At.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:zi([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:zi([At.common,At.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:zi([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:zi([At.sprite,At.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:zi([At.common,At.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:zi([At.lights,At.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};or.physical={uniforms:zi([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Pu={r:0,b:0,g:0},Gb=new De,N_=new $t;N_.set(-1,0,0,0,1,0,0,0,1);function Wb(r,t,e,i,n,s){let o=new Zt(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let y=v.backgroundBlurriness>0;E=t.get(E,y)}return E}function p(v){let E=!1,y=f(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),E=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,E){let y=f(E);y&&y.isCubeTexture?(c===void 0&&(c=new wi(new $o(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Zs(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(N_),c.material.toneMapped=re.getTransfer(y.colorSpace)!==Me,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new wi(new Gs(2,2),new ke({name:"BackgroundMaterial",uniforms:Zs(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=re.getTransfer(y.colorSpace)!==Me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,E){v.getRGB(Pu,op(r)),e.buffers.color.setClear(Pu.r,Pu.g,Pu.b,E,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Xb(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null),s=n,o=!1;function a(U,L,V,I,z){let H=!1,O=d(U,I,V,L);s!==O&&(s=O,c(s.object)),H=f(U,I,V,z),H&&p(U,I,V,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(U,L,V,I),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(U){return r.bindVertexArray(U)}function h(U){return r.deleteVertexArray(U)}function d(U,L,V,I){let z=I.wireframe===!0,H=i[L.id];H===void 0&&(H={},i[L.id]=H);let O=U.isInstancedMesh===!0?U.id:0,nt=H[O];nt===void 0&&(nt={},H[O]=nt);let W=nt[V.id];W===void 0&&(W={},nt[V.id]=W);let R=W[z];return R===void 0&&(R=u(l()),W[z]=R),R}function u(U){let L=[],V=[],I=[];for(let z=0;z<e;z++)L[z]=0,V[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:I,object:U,attributes:{},index:null}}function f(U,L,V,I){let z=s.attributes,H=L.attributes,O=0,nt=V.getAttributes();for(let W in nt)if(nt[W].location>=0){let tt=z[W],vt=H[W];if(vt===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(vt=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(vt=U.instanceColor)),tt===void 0||tt.attribute!==vt||vt&&tt.data!==vt.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function p(U,L,V,I){let z={},H=L.attributes,O=0,nt=V.getAttributes();for(let W in nt)if(nt[W].location>=0){let tt=H[W];tt===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor));let vt={};vt.attribute=tt,tt&&tt.data&&(vt.data=tt.data),z[W]=vt,O++}s.attributes=z,s.attributesNum=O,s.index=I}function x(){let U=s.newAttributes;for(let L=0,V=U.length;L<V;L++)U[L]=0}function m(U){g(U,0)}function g(U,L){let V=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;V[U]=1,I[U]===0&&(r.enableVertexAttribArray(U),I[U]=1),z[U]!==L&&(r.vertexAttribDivisor(U,L),z[U]=L)}function v(){let U=s.newAttributes,L=s.enabledAttributes;for(let V=0,I=L.length;V<I;V++)L[V]!==U[V]&&(r.disableVertexAttribArray(V),L[V]=0)}function E(U,L,V,I,z,H,O){O===!0?r.vertexAttribIPointer(U,L,V,z,H):r.vertexAttribPointer(U,L,V,I,z,H)}function y(U,L,V,I){x();let z=I.attributes,H=V.getAttributes(),O=L.defaultAttributeValues;for(let nt in H){let W=H[nt];if(W.location>=0){let R=z[nt];if(R===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(R=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(R=U.instanceColor)),R!==void 0){let tt=R.normalized,vt=R.itemSize,wt=t.get(R);if(wt===void 0)continue;let $=wt.buffer,ht=wt.type,St=wt.bytesPerElement,Tt=ht===r.INT||ht===r.UNSIGNED_INT||R.gpuType===Yh;if(R.isInterleavedBufferAttribute){let _t=R.data,It=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,pe=R.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Ct=0;Ct<W.locationSize;Ct++)g(W.location+Ct,_t.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)m(W.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,$);for(let Ct=0;Ct<W.locationSize;Ct++)E(W.location+Ct,vt/W.locationSize,ht,tt,It*St,(pe+vt/W.locationSize*Ct)*St,Tt)}else{if(R.isInstancedBufferAttribute){for(let _t=0;_t<W.locationSize;_t++)g(W.location+_t,R.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let _t=0;_t<W.locationSize;_t++)m(W.location+_t);r.bindBuffer(r.ARRAY_BUFFER,$);for(let _t=0;_t<W.locationSize;_t++)E(W.location+_t,vt/W.locationSize,ht,tt,vt*St,vt/W.locationSize*_t*St,Tt)}}else if(O!==void 0){let tt=O[nt];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(W.location,tt);break;case 3:r.vertexAttrib3fv(W.location,tt);break;case 4:r.vertexAttrib4fv(W.location,tt);break;default:r.vertexAttrib1fv(W.location,tt)}}}}v()}function b(){P();for(let U in i){let L=i[U];for(let V in L){let I=L[V];for(let z in I){let H=I[z];for(let O in H)h(H[O].object),delete H[O];delete I[z]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;let L=i[U.id];for(let V in L){let I=L[V];for(let z in I){let H=I[z];for(let O in H)h(H[O].object),delete H[O];delete I[z]}}delete i[U.id]}function _(U){for(let L in i){let V=i[L];for(let I in V){let z=V[I];if(z[U.id]===void 0)continue;let H=z[U.id];for(let O in H)h(H[O].object),delete H[O];delete z[U.id]}}}function S(U){for(let L in i){let V=i[L],I=U.isInstancedMesh===!0?U.id:0,z=V[I];if(z!==void 0){for(let H in z){let O=z[H];for(let nt in O)h(O[nt].object),delete O[nt];delete z[H]}delete V[I],Object.keys(V).length===0&&delete i[L]}}}function P(){A(),o=!0,s!==n&&(s=n,c(s.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function qb(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Yb(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(_){return!(_!==Gn&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==bn&&_!==Hn&&!S&&i.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:b,samples:w}}function $b(r){let t=this,e=null,i=0,n=!1,s=!1,o=new kn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!n||p===null||p.length===0||s&&!m)s?h(null):c();else{let v=s?0:i,E=v*4,y=g.clippingState||null;l.value=y,y=h(p,u,E,f);for(let b=0;b!==E;++b)y[b]=e[b];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,y=f;E!==x;++E,y+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var kl=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new pl(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new $o(5,5,5),s=new ke({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Lr});s.uniforms.tEquirect.value=e;let o=new wi(n,s),a=e.minFilter;return e.minFilter===Dr&&(e.minFilter=en),new ea(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}},f_=256,Zb=3,Jb=20,U_=256,O_=16,Kb=3,Qb=new B,jb=new Zt,Lu=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ea(1,10,null),this._boxMesh=new wi(new $o(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:o=256,position:a=Qb}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(jb));let m=new ea(i,n,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(f_,s_(t))}_fromTexture(t,e){t.mapping===qs||t.mapping===ra?this._setSize(t.image.length===0?f_:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=d_(t,!1,!1),i=Math.log2(t)-Zb;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=d_(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===qs||t.mapping===ra?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=p_()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=tT(),this._integrationMaterial=eT());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/O_);for(let o=0;o<=i;o++){let a=r.lodToRoughness(o,i);if(o>i-Kb)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(U_*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=iT());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}};function d_(r,t,e){return new kl(r,{minFilter:Dr,generateMipmaps:t,type:Ei,colorSpace:sl,depthBuffer:e})}function Vl(r,t,e){return new ke({name:r,uniforms:t,vertexShader:te.cube_vert,fragmentShader:e,side:nn,blending:Lr,depthTest:!1,depthWrite:!1})}function tT(){return Vl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${U_}u

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
	`)}function eT(){return Vl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:O_}},`

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
	`)}function iT(){return Vl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Jb}
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
	`)}function p_(){return Vl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function m_(){return Vl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function nT(r){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Wh||f===Xh)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new kl(p.height);return x.fromEquirectangularTexture(r,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Wh||f===Xh,x=f===qs||f===ra;if(p||x){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Lu(r)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new Lu(r)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Wh?u.mapping=qs:f===Xh&&(u.mapping=ra),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function rT(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&nl("WebGLRenderer: "+i+" extension not supported."),n}}}function sT(r,t,e,i){let n={},s=new WeakMap,o=new FinalizationRegistry(p=>delete n[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete n[p.id],o.unregister(p);let x=s.get(p);x&&(t.remove(x),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",a),n[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],r.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,E=m.count>=65535?fl:ul,y=new E(Math.ceil(v/3)*6,1),b=y.array;if(x!==null){let _=x.array;g=x.version;for(let S=0,P=0;S<v;S+=3){let A=_[S+0],U=_[S+1],L=_[S+2];b[P++]=A,b[P++]=U,b[P++]=U,b[P++]=L,b[P++]=L,b[P++]=A}}else{g=m.version;for(let _=0,S=0;_<v;_+=3){let P=_+0,A=_+1,U=_+2;b[S++]=P,b[S++]=A,b[S++]=A,b[S++]=U,b[S++]=U,b[S++]=P}}y.version=g;let w=s.get(p);w&&t.remove(w),s.set(p,y)}function u(p){let x=s.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return s.get(p)}function f(){for(let p in n){let x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function oT(r,t,e){let i;function n(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function aT(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function lT(r,t,e){let i=new WeakMap,n=new Ye;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let y=a.attributes.position.count*E,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*b*4*d),_=new cl(w,y,b,d);_.type=Hn,_.needsUpdate=!0;let S=E*4;for(let A=0;A<d;A++){let U=m[A],L=g[A],V=v[A],I=y*b*4*A;for(let z=0;z<U.count;z++){let H=z*S;f===!0&&(n.fromBufferAttribute(U,z),w[I+H+0]=n.x,w[I+H+1]=n.y,w[I+H+2]=n.z,w[I+H+3]=0),p===!0&&(n.fromBufferAttribute(L,z),w[I+H+4]=n.x,w[I+H+5]=n.y,w[I+H+6]=n.z,w[I+H+7]=0),x===!0&&(n.fromBufferAttribute(V,z),w[I+H+8]=n.x,w[I+H+9]=n.y,w[I+H+10]=n.z,w[I+H+11]=V.itemSize===4?n.w:1)}}u={count:d,texture:_,size:new kt(y,b)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function cT(r,t,e,i,n){let s=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var hT={[wl]:"LINEAR_TONE_MAPPING",[El]:"REINHARD_TONE_MAPPING",[Al]:"CINEON_TONE_MAPPING",[Xs]:"ACES_FILMIC_TONE_MAPPING",[Rl]:"AGX_TONE_MAPPING",[Pl]:"NEUTRAL_TONE_MAPPING",[Cl]:"CUSTOM_TONE_MAPPING"};function uT(r,t,e,i,n,s){let o=new ci(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ti;h.setAttribute("position",new _i([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _i([0,2,0,0,2,0],2));let d=new Ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new wi(h,d),f=new ta(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,v=null,E=[],y=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let _=0;_<E.length;_++){let S=E[_];S.setSize&&S.setSize(b,w)}},this.setEffects=function(b){E=b,y=E.length>0&&E[0].isRenderPass===!0;let w=o.width,_=o.height;E.length>0&&a===null&&(a=new ci(w,_,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new ci(w,_,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&E.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ir(w,_),s===!0&&(c.format=Nr,c.type=Ys)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<E.length;P++){let A=E[P];A.setSize&&A.setSize(w,_),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===rr&&E.length===0)return!1;if(v=w,w!==null){let _=w.width,S=w.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return y===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=rr,!0},this.hasRenderPass=function(){return y},this.end=function(b,w){b.toneMapping=g,m=!0;let _=o,S=a;for(let P=0;P<E.length;P++){let A=E[P];A.enabled!==!1&&(A.render(b,S,_,w),A.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,d.defines={},re.getTransfer(p)===Me&&(d.defines.SRGB_TRANSFER="");let P=hT[x];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(v),b.render(u,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var F_=new Bi,B_=new Ir(1,1),z_=new gl(1),k_=new cl,V_=new Eh,H_=new pl,g_=[],__=[],x_=new Float32Array(16),v_=new Float32Array(9),y_=new Float32Array(4);function aa(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=g_[n];if(s===void 0&&(s=new Float32Array(n),g_[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function hi(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ui(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Nu(r,t){let e=__[t];e===void 0&&(e=new Int32Array(t),__[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function fT(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function dT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hi(e,t))return;r.uniform2fv(this.addr,t),ui(e,t)}}function pT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hi(e,t))return;r.uniform3fv(this.addr,t),ui(e,t)}}function mT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hi(e,t))return;r.uniform4fv(this.addr,t),ui(e,t)}}function gT(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(hi(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ui(e,t)}else{if(hi(e,i))return;y_.set(i),r.uniformMatrix2fv(this.addr,!1,y_),ui(e,i)}}function _T(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(hi(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ui(e,t)}else{if(hi(e,i))return;v_.set(i),r.uniformMatrix3fv(this.addr,!1,v_),ui(e,i)}}function xT(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(hi(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ui(e,t)}else{if(hi(e,i))return;x_.set(i),r.uniformMatrix4fv(this.addr,!1,x_),ui(e,i)}}function vT(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function yT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hi(e,t))return;r.uniform2iv(this.addr,t),ui(e,t)}}function ST(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hi(e,t))return;r.uniform3iv(this.addr,t),ui(e,t)}}function MT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hi(e,t))return;r.uniform4iv(this.addr,t),ui(e,t)}}function bT(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function TT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hi(e,t))return;r.uniform2uiv(this.addr,t),ui(e,t)}}function wT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hi(e,t))return;r.uniform3uiv(this.addr,t),ui(e,t)}}function ET(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hi(e,t))return;r.uniform4uiv(this.addr,t),ui(e,t)}}function Uu(r){return r.version===0&&(r.compareFunction=ip,r.needsUpdate=!0),r}function AT(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=Uu(B_):s=F_,e.setTexture2D(t||s,n)}function CT(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||V_,n)}function RT(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Uu(z_):s=H_,e.setTextureCube(t||s,n)}function PT(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||k_,n)}function IT(r){switch(r){case 5126:return fT;case 35664:return dT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return _T;case 35676:return xT;case 5124:case 35670:return vT;case 35667:case 35671:return yT;case 35668:case 35672:return ST;case 35669:case 35673:return MT;case 5125:return bT;case 36294:return TT;case 36295:return wT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return PT}}function LT(r,t){r.uniform1fv(this.addr,t)}function DT(r,t){let e=aa(t,this.size,2);r.uniform2fv(this.addr,e)}function NT(r,t){let e=aa(t,this.size,3);r.uniform3fv(this.addr,e)}function UT(r,t){let e=aa(t,this.size,4);r.uniform4fv(this.addr,e)}function OT(r,t){let e=aa(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function FT(r,t){let e=aa(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function BT(r,t){let e=aa(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function zT(r,t){r.uniform1iv(this.addr,t)}function kT(r,t){r.uniform2iv(this.addr,t)}function VT(r,t){r.uniform3iv(this.addr,t)}function HT(r,t){r.uniform4iv(this.addr,t)}function GT(r,t){r.uniform1uiv(this.addr,t)}function WT(r,t){r.uniform2uiv(this.addr,t)}function XT(r,t){r.uniform3uiv(this.addr,t)}function qT(r,t){r.uniform4uiv(this.addr,t)}function YT(r,t,e){let i=this.cache,n=t.length,s=Nu(e,n);hi(i,s)||(r.uniform1iv(this.addr,s),ui(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Uu(B_):o=F_;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,s[a])}function $T(r,t,e){let i=this.cache,n=t.length,s=Nu(e,n);hi(i,s)||(r.uniform1iv(this.addr,s),ui(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||V_,s[o])}function ZT(r,t,e){let i=this.cache,n=t.length,s=Nu(e,n);hi(i,s)||(r.uniform1iv(this.addr,s),ui(i,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=Uu(z_):o=H_;for(let a=0;a!==n;++a)e.setTextureCube(t[a]||o,s[a])}function JT(r,t,e){let i=this.cache,n=t.length,s=Nu(e,n);hi(i,s)||(r.uniform1iv(this.addr,s),ui(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||k_,s[o])}function KT(r){switch(r){case 5126:return LT;case 35664:return DT;case 35665:return NT;case 35666:return UT;case 35674:return OT;case 35675:return FT;case 35676:return BT;case 5124:case 35670:return zT;case 35667:case 35671:return kT;case 35668:case 35672:return VT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return WT;case 36295:return XT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return JT}}var _p=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=IT(e.type)}},xp=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=KT(e.type)}},vp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},mp=/(\w+)(\])?(\[|\.)?/g;function S_(r,t){r.seq.push(t),r.map[t.id]=t}function QT(r,t,e){let i=r.name,n=i.length;for(mp.lastIndex=0;;){let s=mp.exec(i),o=mp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){S_(e,c===void 0?new _p(a,r,t):new xp(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new vp(a),S_(e,d)),e=d}}}var oa=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);QT(a,l,this)}let n=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function M_(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var jT=37297,t1=0;function e1(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var b_=new $t;function i1(r){re._getMatrix(b_,re.workingColorSpace,r);let t=`mat3( ${b_.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(r)){case ol:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function T_(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+e1(r.getShaderSource(t),a)}else return s}function n1(r,t){let e=i1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var r1={[wl]:"Linear",[El]:"Reinhard",[Al]:"Cineon",[Xs]:"ACESFilmic",[Rl]:"AgX",[Pl]:"Neutral",[Cl]:"Custom"};function s1(r,t){let e=r1[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Iu=new B;function o1(){re.getLuminanceCoefficients(Iu);let r=Iu.x.toFixed(4),t=Iu.y.toFixed(4),e=Iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zl).join(`
`)}function l1(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function c1(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function zl(r){return r!==""}function w_(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function E_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var h1=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(r){return r.replace(h1,u1)}function u1(r,t){let e=te[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return yp(e)}var f1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(r){return r.replace(f1,d1)}function d1(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function C_(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var p1={[Tl]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function m1(r){return p1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var g1={[ra]:"ENVMAP_MODE_REFRACTION"};function _1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":g1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x1={[Wd]:"ENVMAP_BLENDING_MULTIPLY",[W0]:"ENVMAP_BLENDING_MIX",[X0]:"ENVMAP_BLENDING_ADD"};function v1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":x1[r.combine]||"ENVMAP_BLENDING_NONE"}function y1(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=m1(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=_1(e),d=v1(e),u=a1(e),f=l1(s),p=n.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(zl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(zl).join(`
`),m.length>0&&(m+=`
`)):(x=[C_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),m=[C_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rr?"#define TONE_MAPPING":"",e.toneMapping!==rr?te.tonemapping_pars_fragment:"",e.toneMapping!==rr?s1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,n1("linearToOutputTexel",e.outputColorSpace),o1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zl).join(`
`)),o=yp(o),o=w_(o,e),o=E_(o,e),a=yp(a),a=w_(a,e),a=E_(a,e),o=A_(o),a=A_(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+x+o,E=g+m+a,y=M_(n,n.VERTEX_SHADER,v),b=M_(n,n.FRAGMENT_SHADER,E);n.attachShader(p,y),n.attachShader(p,b),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function w(A){if(r.debug.checkShaderErrors){let U=n.getProgramInfoLog(p)||"",L=n.getShaderInfoLog(y)||"",V=n.getShaderInfoLog(b)||"",I=U.trim(),z=L.trim(),H=V.trim(),O=!0,nt=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,y,b);else{let W=T_(n,y,"vertex"),R=T_(n,b,"fragment");Wt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+W+`
`+R)}else I!==""?Gt("WebGLProgram: Program Info Log:",I):(z===""||H==="")&&(nt=!1);nt&&(A.diagnostics={runnable:O,programLog:I,vertexShader:{log:z,prefix:x},fragmentShader:{log:H,prefix:m}})}n.deleteShader(y),n.deleteShader(b),_=new oa(n,p),S=c1(n,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(p,jT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t1++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}var S1=0,Sp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Mp(t),e.set(t,i)),i}},Mp=class{constructor(t){this.id=S1++,this.code=t,this.usedTimes=0}};function M1(r){return r===fs||r===Ol||r===Fl}function b1(r,t,e,i,n,s){let o=new Ho,a=new Sp,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,P,A,U,L){let V=A.fog,I=U.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||z,H),nt=u[_.type],W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=R!==void 0?R.length:0,vt=0;I.morphAttributes.position!==void 0&&(vt=1),I.morphAttributes.normal!==void 0&&(vt=2),I.morphAttributes.color!==void 0&&(vt=3);let wt,$,ht,St;if(nt){let Z=or[nt];wt=Z.vertexShader,$=Z.fragmentShader}else{wt=_.vertexShader,$=_.fragmentShader;let Z=a.getVertexShaderStage(_),yt=a.getFragmentShaderStage(_);a.update(_,Z,yt),ht=Z.id,St=yt.id}let Tt=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),It=U.isInstancedMesh===!0,pe=U.isBatchedMesh===!0,Ct=!!_.map,Xt=!!_.matcap,Nt=!!O,Ut=Nt&&O.isPMREMTexture===!0,se=!!_.aoMap,ce=!!_.lightMap,j=!!_.bumpMap&&_.wireframe===!1,qt=!!_.normalMap,Ne=!!_.displacementMap,Se=!!_.emissiveMap,Qt=!!_.metalnessMap,Ue=!!_.roughnessMap,Ae=_.anisotropy>0,F=_.clearcoat>0,ve=_.diffuseRoughness>0,oe=_.dispersion>0,Yt=_.retroreflectivity>0,xt=_.iridescence>0,me=_.sheen>0,lt=_.transmission>0,Ot=Ae&&!!_.anisotropyMap,C=F&&!!_.clearcoatMap,M=F&&!!_.clearcoatNormalMap,G=F&&!!_.clearcoatRoughnessMap,ct=ve&&!!_.diffuseRoughnessMap,ot=xt&&!!_.iridescenceMap,ut=xt&&!!_.iridescenceThicknessMap,mt=me&&!!_.sheenColorMap,X=me&&!!_.sheenRoughnessMap,st=!!_.specularMap,dt=!!_.specularColorMap,D=!!_.specularIntensityMap,rt=lt&&!!_.transmissionMap,it=lt&&!!_.thicknessMap,pt=!!_.gradientMap,ft=!!_.alphaMap,gt=_.alphaTest>0,K=!!_.alphaHash,et=!!_.extensions,q=rr;_.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(q=r.toneMapping);let Y=Ut?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,at={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:wt,fragmentShader:$,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:St,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:pe,batchingColor:pe&&U._colorsTexture!==null,instancing:It,instancingColor:It&&U.instanceColor!==null,instancingMorph:It&&U.morphTexture!==null,outputColorSpace:Tt===null?r.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:Xt,envMap:Nt,envMapMode:Nt&&O.mapping,envMapPMREM:Ut,envMapMaxLod:Ut?Y.length-1:null,envMapSize:Ut?Y[0].width:null,aoMap:se,lightMap:ce,bumpMap:j,normalMap:qt,displacementMap:Ne,emissiveMap:Se,normalMapObjectSpace:qt&&_.normalMapType===$0,normalMapTangentSpace:qt&&_.normalMapType===jd,packedNormalMap:qt&&_.normalMapType===jd&&M1(_.normalMap.format),metalnessMap:Qt,roughnessMap:Ue,anisotropy:Ae,anisotropyMap:Ot,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:ve,diffuseRoughnessMap:ct,dispersion:oe,retroreflection:Yt,iridescence:xt,iridescenceMap:ot,iridescenceThicknessMap:ut,sheen:me,sheenColorMap:mt,sheenRoughnessMap:X,specularMap:st,specularColorMap:dt,specularIntensityMap:D,transmission:lt,transmissionMap:rt,thicknessMap:it,gradientMap:pt,opaque:_.transparent===!1&&_.blending===na&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:gt,alphaHash:K,combine:_.combine,mapUv:Ct&&f(_.map.channel),aoMapUv:se&&f(_.aoMap.channel),lightMapUv:ce&&f(_.lightMap.channel),bumpMapUv:j&&f(_.bumpMap.channel),normalMapUv:qt&&f(_.normalMap.channel),displacementMapUv:Ne&&f(_.displacementMap.channel),emissiveMapUv:Se&&f(_.emissiveMap.channel),metalnessMapUv:Qt&&f(_.metalnessMap.channel),roughnessMapUv:Ue&&f(_.roughnessMap.channel),anisotropyMapUv:Ot&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:X&&f(_.sheenRoughnessMap.channel),specularMapUv:st&&f(_.specularMap.channel),specularColorMapUv:dt&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:rt&&f(_.transmissionMap.channel),thicknessMapUv:it&&f(_.thicknessMap.channel),alphaMapUv:ft&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(qt||Ae),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Ct||ft),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&qt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:vt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.filter(Z=>Z.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:q,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&re.getTransfer(_.map.colorSpace)===Me,decodeVideoTextureEmissive:Se&&_.emissiveMap.isVideoTexture===!0&&re.getTransfer(_.emissiveMap.colorSpace)===Me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nr,flipSided:_.side===nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:et&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&_.extensions.multiDraw===!0||pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(r.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let S=u[_.type],P;if(S){let A=or[S];P=Or.clone(A.uniforms)}else P=_.uniforms;return P}function E(_,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new y1(r,S,_,n),c.push(P),h.set(S,P)),P}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:E,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:w}}function T1(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function w1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function R_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function P_(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let v=r[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},r[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=g),t++,v}function l(u,f,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let E=a(u,f,p,x,m,g);p.transmission>0?i.push(E):p.transparent===!0?n.push(E):e.push(E)}function c(u,f,p,x,m,g){let v=a(u,f,p,x,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||w1),i.length>1&&i.sort(f||R_),n.length>1&&n.sort(f||R_)}function d(){for(let u=t,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function E1(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new P_,r.set(i,[o])):n>=s.length?(o=new P_,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function A1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Zt};break;case"SpotLight":e={position:new B,direction:new B,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function C1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var R1=0;function P1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function I1(r){let t=new A1,e=C1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let n=new B,s=new De,o=new De;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,E=0,y=0,b=0,w=0,_=0,S=0,P=0,A=0;c.sort(P1);for(let L=0,V=c.length;L<V;L++){let I=c[L],z=I.color,H=I.intensity,O=I.distance,nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===fs?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],H);A++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),i.sunShadow[p]=tt,i.sunShadowMap[p]=nt;let vt=R.getViewportCount();for(let wt=0;wt<vt;wt++)i.sunShadowMatrix[x+wt]=R.getMatrix(wt),i.sunShadowCascade[x+wt]=R._cascadeData[wt];x+=vt,p++}i.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=I.shadow.matrix,b++}i.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(H),W.distance=O,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[v]=W;let R=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,R.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[v]=R.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,i.spotShadow[v]=tt,i.spotShadowMap[v]=nt,_++}v++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(z).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=W,E++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let R=I.shadow,tt=e.get(I);tt.shadowIntensity=R.intensity,tt.shadowBias=R.bias,tt.shadowNormalBias=R.normalBias,tt.shadowRadius=R.radius,tt.shadowMapSize=R.mapSize,tt.shadowCameraNear=R.camera.near,tt.shadowCameraFar=R.camera.far,i.pointShadow[g]=tt,i.pointShadowMap[g]=nt,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[y]=W,y++}}E>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let U=i.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==E||U.hemiLength!==y||U.numSunShadows!==p||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==_||U.numSpotMaps!==S||U.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=E,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,U.sunLength=f,U.directionalLength=m,U.pointLength=g,U.spotLength=v,U.rectAreaLength=E,U.hemiLength=y,U.numSunShadows=p,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=_,U.numSpotMaps=S,U.numLightProbes=A,i.version=R1++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let y=c[v];if(y.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),u++}else if(y.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function I_(r){let t=new I1(r),e=[],i=[],n=[];function s(d){h.camera=d,e.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function L1(r){let t=new WeakMap;function e(n,s=0){let o=t.get(n),a;return o===void 0?(a=new I_(r),t.set(n,[a])):s>=o.length?(a=new I_(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var D1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N1=`uniform sampler2D shadow_pass;
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
}`,U1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],O1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],L_=new De,Bl=new B,gp=new B;function F1(r,t,e){let i=new Hs,n=new kt,s=new kt,o=new Ye,a=new Ih,l=new Lh,c={},h=e.maxTextureSize,d={[us]:nn,[nn]:us,[nr]:nr},u=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:D1,fragmentShader:N1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ti;p.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new wi(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let g=this.type;this.render=function(w,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===w0&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tl);let P=r.getRenderTarget(),A=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Lr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let V=g!==this.type;V&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=w.length;I<z;I++){let H=w[I],O=H.shadow;if(O===void 0){Gt("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let nt=O.getFrameExtents();n.multiply(nt),s.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/nt.x),n.x=s.x*nt.x,O.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/nt.y),n.y=s.y*nt.y,O.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ia){if(H.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ci(n.x,n.y,{format:fs,type:Ei,minFilter:en,magFilter:en,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new Ir(n.x,n.y,Hn),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=Ar,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xi,O.map.depthTexture.magFilter=xi}else H.isPointLight?(O.map=new kl(n.x),O.map.depthTexture=new gl(n.x,Vn)):(O.map=new ci(n.x,n.y),O.map.depthTexture=new Ir(n.x,n.y,Vn)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=Ar,this.type===Tl?(O.map.depthTexture.compareFunction=W?ep:tp,O.map.depthTexture.minFilter=en,O.map.depthTexture.magFilter=en):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xi,O.map.depthTexture.magFilter=xi);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);let R=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();H.isPointLight!==!0&&O.updateMatrices(H,S);let tt=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let vt=0;vt<R;vt++){let wt=O.getCamera(vt);if(H.isPointLight){let $=O.camera,ht=O.matrix,St=H.distance||$.far;St!==$.far&&($.far=St,$.updateProjectionMatrix()),Bl.setFromMatrixPosition(H.matrixWorld),$.position.copy(Bl),gp.copy($.position),gp.add(U1[vt]),$.up.copy(O1[vt]),$.lookAt(gp),$.updateMatrixWorld(),ht.makeTranslation(-Bl.x,-Bl.y,-Bl.z),L_.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O._frustum.setFromProjectionMatrix(L_,$.coordinateSystem,$.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,vt),r.clear();else{vt===0&&(r.setRenderTarget(O.map),r.clear());let $=O.getViewport(vt);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),L.viewport(o)}i=O.getFrustum(vt),y(_,S,wt,H,tt,this.type)}O.isPointLightShadow!==!0&&this.type===ia&&v(O,S),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(P,A,U)};function v(w,_){let S=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ci(n.x,n.y,{format:fs,type:Ei}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(_,null,S,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(_,null,S,f,x,null)}function E(w,_,S,P){let A=null,U=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)A=U;else if(A=S.isPointLight===!0?l:a,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let L=A.uuid,V=_.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let z=I[V];z===void 0&&(z=A.clone(),I[V]=z,_.addEventListener("dispose",b)),A=z}if(A.visible=_.visible,A.wireframe=_.wireframe,P===ia?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:d[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=r.properties.get(A);L.light=S}return A}function y(w,_,S,P,A,U){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===ia)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let I=t.update(w),z=w.material;if(Array.isArray(z)){let H=I.groups;for(let O=0,nt=H.length;O<nt;O++){let W=H[O],R=z[W.materialIndex];if(R&&R.visible){let tt=E(w,R,P,U);w.onBeforeShadow(r,w,_,S,I,tt,W),r.renderBufferDirect(S,null,I,tt,w,W),w.onAfterShadow(r,w,_,S,I,tt,W)}}}else if(z.visible){let H=E(w,z,P,U);w.onBeforeShadow(r,w,_,S,I,H,null),r.renderBufferDirect(S,null,I,H,w,null),w.onAfterShadow(r,w,_,S,I,H,null)}}let V=w.children;for(let I=0,z=V.length;I<z;I++)y(V[I],_,S,P,A,U)}function b(w){w.target.removeEventListener("dispose",b);for(let S in c){let P=c[S],A=w.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function B1(r,t){function e(){let D=!1,rt=new Ye,it=null,pt=new Ye(0,0,0,0);return{setMask:function(ft){it!==ft&&!D&&(r.colorMask(ft,ft,ft,ft),it=ft)},setLocked:function(ft){D=ft},setClear:function(ft,gt,K,et,q){q===!0&&(ft*=et,gt*=et,K*=et),rt.set(ft,gt,K,et),pt.equals(rt)===!1&&(r.clearColor(ft,gt,K,et),pt.copy(rt))},reset:function(){D=!1,it=null,pt.set(-1,0,0,0)}}}function i(){let D=!1,rt=!1,it=null,pt=null,ft=null;return{setReversed:function(gt){if(rt!==gt){let K=t.get("EXT_clip_control");gt?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT),rt=gt;let et=ft;ft=null,this.setClear(et)}},getReversed:function(){return rt},setTest:function(gt){gt?_t(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(gt){it!==gt&&!D&&(r.depthMask(gt),it=gt)},setFunc:function(gt){if(rt&&(gt=r_[gt]),pt!==gt){switch(gt){case dh:r.depthFunc(r.NEVER);break;case ph:r.depthFunc(r.ALWAYS);break;case mh:r.depthFunc(r.LESS);break;case Bo:r.depthFunc(r.LEQUAL);break;case gh:r.depthFunc(r.EQUAL);break;case _h:r.depthFunc(r.GEQUAL);break;case xh:r.depthFunc(r.GREATER);break;case vh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=gt}},setLocked:function(gt){D=gt},setClear:function(gt){ft!==gt&&(ft=gt,rt&&(gt=1-gt),r.clearDepth(gt))},reset:function(){D=!1,it=null,pt=null,ft=null,rt=!1}}}function n(){let D=!1,rt=null,it=null,pt=null,ft=null,gt=null,K=null,et=null,q=null;return{setTest:function(Y){D||(Y?_t(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(Y){rt!==Y&&!D&&(r.stencilMask(Y),rt=Y)},setFunc:function(Y,at,Z){(it!==Y||pt!==at||ft!==Z)&&(r.stencilFunc(Y,at,Z),it=Y,pt=at,ft=Z)},setOp:function(Y,at,Z){(gt!==Y||K!==at||et!==Z)&&(r.stencilOp(Y,at,Z),gt=Y,K=at,et=Z)},setLocked:function(Y){D=Y},setClear:function(Y){q!==Y&&(r.clearStencil(Y),q=Y)},reset:function(){D=!1,rt=null,it=null,pt=null,ft=null,gt=null,K=null,et=null,q=null}}}let s=new e,o=new i,a=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,E=null,y=null,b=null,w=null,_=null,S=new Zt(0,0,0),P=0,A=!1,U=null,L=null,V=null,I=null,z=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,nt=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=nt>=2);let R=null,tt={},vt=r.getParameter(r.SCISSOR_BOX),wt=r.getParameter(r.VIEWPORT),$=new Ye().fromArray(vt),ht=new Ye().fromArray(wt);function St(D,rt,it,pt){let ft=new Uint8Array(4),gt=r.createTexture();r.bindTexture(D,gt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let K=0;K<it;K++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(rt,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(rt+K,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return gt}let Tt={};Tt[r.TEXTURE_2D]=St(r.TEXTURE_2D,r.TEXTURE_2D,1),Tt[r.TEXTURE_CUBE_MAP]=St(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[r.TEXTURE_2D_ARRAY]=St(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Tt[r.TEXTURE_3D]=St(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(r.DEPTH_TEST),o.setFunc(Bo),j(!1),qt(zd),_t(r.CULL_FACE),se(Lr);function _t(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function It(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function pe(D,rt){return u[D]!==rt?(r.bindFramebuffer(D,rt),u[D]=rt,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=rt),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=rt),!0):!1}function Ct(D,rt){let it=p,pt=!1;if(D){it=f.get(rt),it===void 0&&(it=[],f.set(rt,it));let ft=D.textures;if(it.length!==ft.length||it[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,K=ft.length;gt<K;gt++)it[gt]=r.COLOR_ATTACHMENT0+gt;it.length=ft.length,pt=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,pt=!0);pt&&r.drawBuffers(it)}function Xt(D){return x!==D?(r.useProgram(D),x=D,!0):!1}let Nt={[Ws]:r.FUNC_ADD,[A0]:r.FUNC_SUBTRACT,[C0]:r.FUNC_REVERSE_SUBTRACT};Nt[R0]=r.MIN,Nt[P0]=r.MAX;let Ut={[I0]:r.ZERO,[L0]:r.ONE,[D0]:r.SRC_COLOR,[Hd]:r.SRC_ALPHA,[z0]:r.SRC_ALPHA_SATURATE,[F0]:r.DST_COLOR,[U0]:r.DST_ALPHA,[N0]:r.ONE_MINUS_SRC_COLOR,[Gd]:r.ONE_MINUS_SRC_ALPHA,[B0]:r.ONE_MINUS_DST_COLOR,[O0]:r.ONE_MINUS_DST_ALPHA,[k0]:r.CONSTANT_COLOR,[V0]:r.ONE_MINUS_CONSTANT_COLOR,[H0]:r.CONSTANT_ALPHA,[G0]:r.ONE_MINUS_CONSTANT_ALPHA};function se(D,rt,it,pt,ft,gt,K,et,q,Y){if(D===Lr){m===!0&&(It(r.BLEND),m=!1);return}if(m===!1&&(_t(r.BLEND),m=!0),D!==E0){if(D!==g||Y!==A){if((v!==Ws||b!==Ws)&&(r.blendEquation(r.FUNC_ADD),v=Ws,b=Ws),Y)switch(D){case na:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mn:r.blendFunc(r.ONE,r.ONE);break;case kd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Wt("WebGLState: Invalid blending: ",D);break}else switch(D){case na:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case kd:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vd:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",D);break}E=null,y=null,w=null,_=null,S.set(0,0,0),P=0,g=D,A=Y}return}ft=ft||rt,gt=gt||it,K=K||pt,(rt!==v||ft!==b)&&(r.blendEquationSeparate(Nt[rt],Nt[ft]),v=rt,b=ft),(it!==E||pt!==y||gt!==w||K!==_)&&(r.blendFuncSeparate(Ut[it],Ut[pt],Ut[gt],Ut[K]),E=it,y=pt,w=gt,_=K),(et.equals(S)===!1||q!==P)&&(r.blendColor(et.r,et.g,et.b,q),S.copy(et),P=q),g=D,A=!1}function ce(D,rt){D.side===nr?It(r.CULL_FACE):_t(r.CULL_FACE);let it=D.side===nn;rt&&(it=!it),j(it),D.blending===na&&D.transparent===!1?se(Lr):se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let pt=D.stencilWrite;a.setTest(pt),pt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function j(D){U!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),U=D)}function qt(D){D!==b0?(_t(r.CULL_FACE),D!==L&&(D===zd?r.cullFace(r.BACK):D===T0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),L=D}function Ne(D){D!==V&&(O&&r.lineWidth(D),V=D)}function Se(D,rt,it){D?(_t(r.POLYGON_OFFSET_FILL),(I!==rt||z!==it)&&(I=rt,z=it,o.getReversed()&&(rt=-rt,it=-it),r.polygonOffset(rt,it))):It(r.POLYGON_OFFSET_FILL)}function Qt(D){D?_t(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function Ue(D){D===void 0&&(D=r.TEXTURE0+H-1),R!==D&&(r.activeTexture(D),R=D)}function Ae(D,rt,it){it===void 0&&(R===null?it=r.TEXTURE0+H-1:it=R);let pt=tt[it];pt===void 0&&(pt={type:void 0,texture:void 0},tt[it]=pt),(pt.type!==D||pt.texture!==rt)&&(R!==it&&(r.activeTexture(it),R=it),r.bindTexture(D,rt||Tt[D]),pt.type=D,pt.texture=rt)}function F(){let D=tt[R];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ve(){try{r.compressedTexImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function oe(){try{r.compressedTexImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function Yt(){try{r.texSubImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function xt(){try{r.texSubImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function me(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function lt(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function Ot(){try{r.texStorage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function C(){try{r.texStorage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function M(){try{r.texImage2D(...arguments)}catch(D){Wt("WebGLState:",D)}}function G(){try{r.texImage3D(...arguments)}catch(D){Wt("WebGLState:",D)}}function ct(D){return d[D]!==void 0?d[D]:r.getParameter(D)}function ot(D,rt){d[D]!==rt&&(r.pixelStorei(D,rt),d[D]=rt)}function ut(D){$.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function mt(D){ht.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ht.copy(D))}function X(D,rt){let it=c.get(rt);it===void 0&&(it=new WeakMap,c.set(rt,it));let pt=it.get(D);pt===void 0&&(pt=r.getUniformBlockIndex(rt,D.name),r.uniformBlockBinding(rt,pt,pt),it.set(D,pt))}function st(D,rt,it){let ft=c.get(rt).get(D);l[ft]!==it&&(r.bindBufferBase(r.UNIFORM_BUFFER,ft,it),l[ft]=it)}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,tt={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,E=null,y=null,b=null,w=null,_=null,S=new Zt(0,0,0),P=0,A=!1,U=null,L=null,V=null,I=null,z=null,$.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:_t,disable:It,bindFramebuffer:pe,drawBuffers:Ct,useProgram:Xt,setBlending:se,setMaterial:ce,setFlipSided:j,setCullFace:qt,setLineWidth:Ne,setPolygonOffset:Se,setScissorTest:Qt,activeTexture:Ue,bindTexture:Ae,unbindTexture:F,compressedTexImage2D:ve,compressedTexImage3D:oe,texImage2D:M,texImage3D:G,pixelStorei:ot,getParameter:ct,updateUBOMapping:X,uniformBlockBinding:st,texStorage2D:Ot,texStorage3D:C,texSubImage2D:Yt,texSubImage3D:xt,compressedTexSubImage2D:me,compressedTexSubImage3D:lt,scissor:ut,viewport:mt,reset:dt}}function z1(r,t,e,i,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return m?new OffscreenCanvas(C,M):zo("canvas")}function v(C,M,G){let ct=1,ot=Ot(C);if((ot.width>G||ot.height>G)&&(ct=G/Math.max(ot.width,ot.height)),ct<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ut=Math.floor(ct*ot.width),mt=Math.floor(ct*ot.height);u===void 0&&(u=g(ut,mt));let X=M?g(ut,mt):u;return X.width=ut,X.height=mt,X.getContext("2d").drawImage(C,0,0,ut,mt),Gt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+ut+"x"+mt+")."),X}else return"data"in C&&Gt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function E(C){return C.generateMipmaps}function y(C){r.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(C,M,G,ct,ot,ut=!1){if(C!==null){if(r[C]!==void 0)return r[C];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let mt;ct&&(mt=t.get("EXT_texture_norm16"),mt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=M;if(M===r.RED&&(G===r.FLOAT&&(X=r.R32F),G===r.HALF_FLOAT&&(X=r.R16F),G===r.UNSIGNED_BYTE&&(X=r.R8),G===r.UNSIGNED_SHORT&&mt&&(X=mt.R16_EXT),G===r.SHORT&&mt&&(X=mt.R16_SNORM_EXT)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(X=r.R8UI),G===r.UNSIGNED_SHORT&&(X=r.R16UI),G===r.UNSIGNED_INT&&(X=r.R32UI),G===r.BYTE&&(X=r.R8I),G===r.SHORT&&(X=r.R16I),G===r.INT&&(X=r.R32I)),M===r.RG&&(G===r.FLOAT&&(X=r.RG32F),G===r.HALF_FLOAT&&(X=r.RG16F),G===r.UNSIGNED_BYTE&&(X=r.RG8),G===r.UNSIGNED_SHORT&&mt&&(X=mt.RG16_EXT),G===r.SHORT&&mt&&(X=mt.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(X=r.RG8UI),G===r.UNSIGNED_SHORT&&(X=r.RG16UI),G===r.UNSIGNED_INT&&(X=r.RG32UI),G===r.BYTE&&(X=r.RG8I),G===r.SHORT&&(X=r.RG16I),G===r.INT&&(X=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(X=r.RGB8UI),G===r.UNSIGNED_SHORT&&(X=r.RGB16UI),G===r.UNSIGNED_INT&&(X=r.RGB32UI),G===r.BYTE&&(X=r.RGB8I),G===r.SHORT&&(X=r.RGB16I),G===r.INT&&(X=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),G===r.UNSIGNED_INT&&(X=r.RGBA32UI),G===r.BYTE&&(X=r.RGBA8I),G===r.SHORT&&(X=r.RGBA16I),G===r.INT&&(X=r.RGBA32I)),M===r.RGB&&(G===r.UNSIGNED_SHORT&&mt&&(X=mt.RGB16_EXT),G===r.SHORT&&mt&&(X=mt.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),M===r.RGBA){let st=ut?ol:re.getTransfer(ot);G===r.FLOAT&&(X=r.RGBA32F),G===r.HALF_FLOAT&&(X=r.RGBA16F),G===r.UNSIGNED_BYTE&&(X=st===Me?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&mt&&(X=mt.RGBA16_EXT),G===r.SHORT&&mt&&(X=mt.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function _(C,M){let G;return C?M===null||M===Vn||M===Ys?G=r.DEPTH24_STENCIL8:M===Hn?G=r.DEPTH32F_STENCIL8:M===sa&&(G=r.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Vn||M===Ys?G=r.DEPTH_COMPONENT24:M===Hn?G=r.DEPTH_COMPONENT32F:M===sa&&(G=r.DEPTH_COMPONENT16),G}function S(C,M){return E(C)===!0||C.isFramebufferTexture&&C.minFilter!==xi&&C.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function P(C){let M=new WeakRef(C);i.get(C).__ref=M,p.add(M),x.register(C,M,M)}function A(C){let M=i.get(C).__ref;M!==void 0&&(p.delete(M),x.unregister(M))}function U(C){V(C.target)}function L(C){I(C.target)}function V(C){C.removeEventListener("dispose",U),A(C),H(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function I(C){C.removeEventListener("dispose",L),A(C),nt(C)}function z(){for(let C of p){let M=C.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):V(M))}p.clear(),d.clear()}function H(C){let M=i.get(C);if(M.__webglInit===void 0)return;let G=C.source,ct=f.get(G);if(ct){let ot=ct[M.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&O(C),Object.keys(ct).length===0&&f.delete(G)}i.remove(C)}function O(C){let M=i.get(C);r.deleteTexture(M.__webglTexture);let G=C.source,ct=f.get(G);delete ct[M.__cacheKey],o.memory.textures--}function nt(C){let M=i.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&V(G),C.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(M.__webglFramebuffer[ot]))for(let ut=0;ut<M.__webglFramebuffer[ot].length;ut++)r.deleteFramebuffer(M.__webglFramebuffer[ot][ut]);else r.deleteFramebuffer(M.__webglFramebuffer[ot]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ot])}else{if(Array.isArray(M.__webglFramebuffer))for(let ot=0;ot<M.__webglFramebuffer.length;ot++)r.deleteFramebuffer(M.__webglFramebuffer[ot]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ot=0;ot<M.__webglColorRenderbuffer.length;ot++)M.__webglColorRenderbuffer[ot]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ot]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ct=C.textures;for(let ot=0,ut=ct.length;ot<ut;ot++){let mt=i.get(ct[ot]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),o.memory.textures--),i.remove(ct[ot])}i.remove(C)}let W=0;function R(){W=0}function tt(){return W}function vt(C){W=C}function wt(){let C=W;return C>=n.maxTextures&&Gt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,C}function $(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ht(C,M){let G=i.get(C);if(C.isVideoTexture&&me(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let ct=C.image;if(ct===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,C,M);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function St(C,M){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ce(G,C,M);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function Tt(C,M){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ce(G,C,M);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function _t(C,M){let G=i.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}let It={[yh]:r.REPEAT,[tr]:r.CLAMP_TO_EDGE,[Sh]:r.MIRRORED_REPEAT},pe={[xi]:r.NEAREST,[q0]:r.NEAREST_MIPMAP_NEAREST,[Il]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[qh]:r.LINEAR_MIPMAP_NEAREST,[Dr]:r.LINEAR_MIPMAP_LINEAR},Ct={[J0]:r.NEVER,[ip]:r.ALWAYS,[K0]:r.LESS,[tp]:r.LEQUAL,[Q0]:r.EQUAL,[ep]:r.GEQUAL,[j0]:r.GREATER,[t_]:r.NOTEQUAL};function Xt(C,M){if(M.type===Hn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===qh||M.magFilter===Il||M.magFilter===Dr||M.minFilter===en||M.minFilter===qh||M.minFilter===Il||M.minFilter===Dr)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,It[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,It[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,It[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,pe[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Ct[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xi||M.minFilter!==Il&&M.minFilter!==Dr||M.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Nt(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",U),P(M));let ct=M.source,ot=f.get(ct);ot===void 0&&(ot={},f.set(ct,ot));let ut=$(M);if(ut!==C.__cacheKey){ot[ut]===void 0&&(ot[ut]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ot[ut].usedTimes++;let mt=ot[C.__cacheKey];mt!==void 0&&(ot[C.__cacheKey].usedTimes--,mt.usedTimes===0&&O(M)),C.__cacheKey=ut,C.__webglTexture=ot[ut].texture}return G}function Ut(C,M,G){return Math.floor(Math.floor(C/G)/M)}function se(C,M,G,ct){let ut=C.updateRanges;if(ut.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,G,ct,M.data);else{ut.sort((D,rt)=>D.start-rt.start);let mt=0;for(let D=1;D<ut.length;D++){let rt=ut[mt],it=ut[D],pt=rt.start+rt.count,ft=Ut(it.start,M.width,4),gt=Ut(rt.start,M.width,4);it.start<=pt+1&&ft===gt&&Ut(it.start+it.count-1,M.width,4)===ft?rt.count=Math.max(rt.count,it.start+it.count-rt.start):(++mt,ut[mt]=it)}ut.length=mt+1;let X=e.getParameter(r.UNPACK_ROW_LENGTH),st=e.getParameter(r.UNPACK_SKIP_PIXELS),dt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let D=0,rt=ut.length;D<rt;D++){let it=ut[D],pt=Math.floor(it.start/4),ft=Math.ceil(it.count/4),gt=pt%M.width,K=Math.floor(pt/M.width),et=ft,q=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(r.UNPACK_SKIP_ROWS,K),e.texSubImage2D(r.TEXTURE_2D,0,gt,K,et,q,G,ct,M.data)}C.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,X),e.pixelStorei(r.UNPACK_SKIP_PIXELS,st),e.pixelStorei(r.UNPACK_SKIP_ROWS,dt)}}function ce(C,M,G){let ct=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ct=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ct=r.TEXTURE_3D);let ot=Nt(C,M),ut=M.source;e.bindTexture(ct,C.__webglTexture,r.TEXTURE0+G);let mt=i.get(ut);if(ut.version!==mt.__version||ot===!0){if(e.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let q=re.getPrimaries(re.workingColorSpace),Y=M.colorSpace===Ur?null:re.getPrimaries(M.colorSpace),at=M.colorSpace===Ur||q===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let st=v(M.image,!1,n.maxTextureSize);st=lt(M,st);let dt=s.convert(M.format,M.colorSpace),D=s.convert(M.type),rt=w(M.internalFormat,dt,D,M.normalized,M.colorSpace,M.isVideoTexture);Xt(ct,M);let it,pt=M.mipmaps,ft=M.isVideoTexture!==!0,gt=mt.__version===void 0||ot===!0,K=ut.dataReady,et=S(M,st);if(M.isDepthTexture)rt=_(M.format===Nr,M.type),gt&&(ft?e.texStorage2D(r.TEXTURE_2D,1,rt,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,rt,st.width,st.height,0,dt,D,null));else if(M.isDataTexture)if(pt.length>0){ft&&gt&&e.texStorage2D(r.TEXTURE_2D,et,rt,pt[0].width,pt[0].height);for(let q=0,Y=pt.length;q<Y;q++)it=pt[q],ft?K&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,it.width,it.height,dt,D,it.data):e.texImage2D(r.TEXTURE_2D,q,rt,it.width,it.height,0,dt,D,it.data);M.generateMipmaps=!1}else ft?(gt&&e.texStorage2D(r.TEXTURE_2D,et,rt,st.width,st.height),K&&se(M,st,dt,D)):e.texImage2D(r.TEXTURE_2D,0,rt,st.width,st.height,0,dt,D,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ft&&gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,rt,pt[0].width,pt[0].height,st.depth);for(let q=0,Y=pt.length;q<Y;q++)if(it=pt[q],M.format!==Gn)if(dt!==null)if(ft){if(K)if(M.layerUpdates.size>0){let at=cp(it.width,it.height,M.format,M.type);for(let Z of M.layerUpdates){let yt=it.data.subarray(Z*at/it.data.BYTES_PER_ELEMENT,(Z+1)*at/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,Z,it.width,it.height,1,dt,yt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,it.width,it.height,st.depth,dt,it.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,rt,it.width,it.height,st.depth,0,it.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?K&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,it.width,it.height,st.depth,dt,D,it.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,rt,it.width,it.height,st.depth,0,dt,D,it.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ft&&gt&&e.texStorage2D(r.TEXTURE_2D,et,rt,pt[0].width,pt[0].height);for(let q=0,Y=pt.length;q<Y;q++)it=pt[q],M.format!==Gn?dt!==null?ft?K&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,it.width,it.height,dt,it.data):e.compressedTexImage2D(r.TEXTURE_2D,q,rt,it.width,it.height,0,it.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?K&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,it.width,it.height,dt,D,it.data):e.texImage2D(r.TEXTURE_2D,q,rt,it.width,it.height,0,dt,D,it.data)}else if(M.isDataArrayTexture)if(ft){if(gt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,rt,st.width,st.height,st.depth),K)if(M.layerUpdates.size>0){let q=cp(st.width,st.height,M.format,M.type);for(let Y of M.layerUpdates){let at=st.data.subarray(Y*q/st.data.BYTES_PER_ELEMENT,(Y+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,st.width,st.height,1,dt,D,at)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,dt,D,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,rt,st.width,st.height,st.depth,0,dt,D,st.data);else if(M.isData3DTexture)ft?(gt&&e.texStorage3D(r.TEXTURE_3D,et,rt,st.width,st.height,st.depth),K&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,dt,D,st.data)):e.texImage3D(r.TEXTURE_3D,0,rt,st.width,st.height,st.depth,0,dt,D,st.data);else if(M.isFramebufferTexture){if(gt)if(ft)e.texStorage2D(r.TEXTURE_2D,et,rt,st.width,st.height);else{let q=st.width,Y=st.height;for(let at=0;at<et;at++)e.texImage2D(r.TEXTURE_2D,at,rt,q,Y,0,dt,D,null),q>>=1,Y>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){let q=r.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),st.parentNode!==q){q.appendChild(st),d.add(M),q.onpaint=Y=>{let at=Y.changedElements;for(let Z of d)at.includes(Z.image)&&(Z.needsUpdate=!0)},q.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,st);else{let at=r.RGBA,Z=r.RGBA,yt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,at,Z,yt,st)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ft&&gt){let q=Ot(pt[0]);e.texStorage2D(r.TEXTURE_2D,et,rt,q.width,q.height)}for(let q=0,Y=pt.length;q<Y;q++)it=pt[q],ft?K&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,dt,D,it):e.texImage2D(r.TEXTURE_2D,q,rt,dt,D,it);M.generateMipmaps=!1}else if(ft){if(gt){let q=Ot(st);e.texStorage2D(r.TEXTURE_2D,et,rt,q.width,q.height)}K&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,dt,D,st)}else e.texImage2D(r.TEXTURE_2D,0,rt,dt,D,st);E(M)&&M.mipmapsAutoUpdate===!0&&y(ct),mt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function j(C,M,G){if(M.image.length!==6)return;let ct=Nt(C,M),ot=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);let ut=i.get(ot);if(ot.version!==ut.__version||ct===!0){e.activeTexture(r.TEXTURE0+G);let mt=re.getPrimaries(re.workingColorSpace),X=M.colorSpace===Ur?null:re.getPrimaries(M.colorSpace),st=M.colorSpace===Ur||mt===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let dt=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,rt=[];for(let Z=0;Z<6;Z++)!dt&&!D?rt[Z]=v(M.image[Z],!0,n.maxCubemapSize):rt[Z]=D?M.image[Z].image:M.image[Z],rt[Z]=lt(M,rt[Z]);let it=rt[0],pt=s.convert(M.format,M.colorSpace),ft=s.convert(M.type),gt=w(M.internalFormat,pt,ft,M.normalized,M.colorSpace),K=M.isVideoTexture!==!0,et=ut.__version===void 0||ct===!0,q=ot.dataReady,Y=S(M,it);Xt(r.TEXTURE_CUBE_MAP,M);let at;if(M.isDepthTexture){if(gt=_(M.format===Nr,M.type),et)if(K)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,gt,it.width,it.height);else for(let Z=0;Z<6;Z++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,gt,it.width,it.height,0,pt,ft,null)}else if(dt){K&&et&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Y,gt,it.width,it.height);for(let Z=0;Z<6;Z++){at=rt[Z].mipmaps;for(let yt=0;yt<at.length;yt++){let Ht=at[yt];M.format!==Gn?pt!==null?K?q&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,0,0,Ht.width,Ht.height,pt,Ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,gt,Ht.width,Ht.height,0,Ht.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?q&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,0,0,Ht.width,Ht.height,pt,ft,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,gt,Ht.width,Ht.height,0,pt,ft,Ht.data)}}}else{if(at=M.mipmaps,K&&et){at.length>0&&Y++;let Z=Ot(rt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Y,gt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(D){K?q&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,rt[Z].width,rt[Z].height,pt,ft,rt[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,gt,rt[Z].width,rt[Z].height,0,pt,ft,rt[Z].data);for(let yt=0;yt<at.length;yt++){let zt=at[yt].image[Z].image;K?q&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,0,0,zt.width,zt.height,pt,ft,zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,gt,zt.width,zt.height,0,pt,ft,zt.data)}}else{K?q&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt,ft,rt[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,gt,pt,ft,rt[Z]);for(let yt=0;yt<at.length;yt++){let Ht=at[yt];K?q&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,0,0,pt,ft,Ht.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,gt,pt,ft,Ht.image[Z])}}}E(M)&&M.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ut.__version=ot.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function qt(C,M,G,ct,ot,ut){let mt=s.convert(G.format,G.colorSpace),X=s.convert(G.type),st=w(G.internalFormat,mt,X,G.normalized,G.colorSpace),dt=i.get(M),D=i.get(G);if(D.__renderTarget=M,!dt.__hasExternalTextures){let rt=Math.max(1,M.width>>ut),it=Math.max(1,M.height>>ut);ot===r.TEXTURE_3D||ot===r.TEXTURE_2D_ARRAY?e.texImage3D(ot,ut,st,rt,it,M.depth,0,mt,X,null):e.texImage2D(ot,ut,st,rt,it,0,mt,X,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),xt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,ot,D.__webglTexture,0,Yt(M)):(ot===r.TEXTURE_2D||ot>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ct,ot,D.__webglTexture,ut),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(C,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){let ct=M.depthTexture,ot=ct&&ct.isDepthTexture?ct.type:null,ut=_(M.stencilBuffer,ot),mt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt(M),ut,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt(M),ut,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ut,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,C)}else{let ct=M.textures;for(let ot=0;ot<ct.length;ot++){let ut=ct[ot],mt=s.convert(ut.format,ut.colorSpace),X=s.convert(ut.type),st=w(ut.internalFormat,mt,X,ut.normalized,ut.colorSpace);xt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt(M),st,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt(M),st,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,st,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(C,M,G){let ct=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(M.depthTexture);ot.__renderTarget=M;let ut=ct?M.depthTexture.image[0]:M.depthTexture.image;(!ot.__webglTexture||ut.width!==M.width||ut.height!==M.height)&&(ut.width=M.width,ut.height=M.height,M.depthTexture.needsUpdate=!0),ct?_t(M.depthTexture,0):ht(M.depthTexture,0);let mt=ot.__webglTexture,X=Yt(M),st=ct?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,dt=M.depthTexture.format===Nr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ar)xt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,st,mt,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,dt,st,mt,0);else if(M.depthTexture.format===Nr)xt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,st,mt,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,dt,st,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(C){let M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let ct=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ct){let ot=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ct.removeEventListener("dispose",ot)};ct.addEventListener("dispose",ot),M.__depthDisposeCallback=ot}M.__boundDepthTexture=ct}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let ct=0;ct<6;ct++)Se(M.__webglFramebuffer[ct],C,ct);else C.texture.mipmaps.length>0?Se(M.__webglFramebuffer[0],C,0):Se(M.__webglFramebuffer,C,0);else if(G){M.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ct]),M.__webglDepthbuffer[ct]===void 0)M.__webglDepthbuffer[ct]=r.createRenderbuffer(),Ne(M.__webglDepthbuffer[ct],C,!1);else{let ot=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer[ct];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,ut)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ne(M.__webglDepthbuffer,C,!1);else{let ot=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,ut)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(C,M,G){let ct=i.get(C);M!==void 0&&qt(ct.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Qt(C)}function Ae(C){let M=C.texture,G=i.get(C),ct=i.get(M);C.addEventListener("dispose",L),P(C);let ot=C.textures,ut=C.isWebGLCubeRenderTarget===!0,mt=ot.length>1;if(mt||(ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture()),ct.__version=M.version,o.memory.textures++),ut){G.__webglFramebuffer=[];for(let X=0;X<6;X++)if(M.mipmaps.length>0){G.__webglFramebuffer[X]=[];for(let st=0;st<M.mipmaps.length;st++)G.__webglFramebuffer[X][st]=r.createFramebuffer()}else G.__webglFramebuffer[X]=r.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let X=0;X<M.mipmaps.length;X++)G.__webglFramebuffer[X]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(mt)for(let X=0,st=ot.length;X<st;X++){let dt=i.get(ot[X]);dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&xt(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let X=0;X<ot.length;X++){let st=ot[X];G.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[X]);let dt=s.convert(st.format,st.colorSpace),D=s.convert(st.type),rt=w(st.internalFormat,dt,D,st.normalized,st.colorSpace,C.isXRRenderTarget===!0),it=Yt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,it,rt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,G.__webglColorRenderbuffer[X])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){e.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),Xt(r.TEXTURE_CUBE_MAP,M);for(let X=0;X<6;X++)if(M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)qt(G.__webglFramebuffer[X][st],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,st);else qt(G.__webglFramebuffer[X],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);E(M)?y(r.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let X=0,st=ot.length;X<st;X++){let dt=ot[X],D=i.get(dt),rt=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,D.__webglTexture),Xt(rt,dt),qt(G.__webglFramebuffer,C,dt,r.COLOR_ATTACHMENT0+X,rt,0),E(dt)&&y(rt)}e.unbindTexture()}else{let X=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(X=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(X,ct.__webglTexture),Xt(X,M),M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)qt(G.__webglFramebuffer[st],C,M,r.COLOR_ATTACHMENT0,X,st);else qt(G.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,X,0);E(M)?y(X):M.mipmaps.length>0&&r.texParameteri(X,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&Qt(C)}function F(C){let M=C.textures;for(let G=0,ct=M.length;G<ct;G++){let ot=M[G];if(E(ot)&&ot.mipmapsAutoUpdate===!0){let ut=b(C),mt=i.get(ot).__webglTexture;e.bindTexture(ut,mt),y(ut),e.unbindTexture()}}}let ve=[];function oe(C){if(C.samples>0){if(xt(C)===!1){let M=C.textures,G=C.width,ct=C.height,ot=r.COLOR_BUFFER_BIT,ut=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=i.get(C),X=M.length>1;if(X)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=r.STENCIL_BUFFER_BIT)),X){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);let D=i.get(M[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D,0)}r.blitFramebuffer(0,0,G,ct,0,0,G,ct,ot,r.NEAREST),l===!0&&(ve.length=0,ve.push(r.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ve.push(ut),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),X)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);let D=i.get(M[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,D,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Yt(C){return Math.min(n.maxSamples,C.samples)}function xt(C){let M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function lt(C,M){let G=C.colorSpace,ct=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==sl&&G!==Ur&&(re.getTransfer(G)===Me?(ct!==Gn||ot!==bn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",G)),M}function Ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=wt,this.resetTextureUnits=R,this.getTextureUnits=tt,this.setTextureUnits=vt,this.setTexture2D=ht,this.setTexture2DArray=St,this.setTexture3D=Tt,this.setTextureCube=_t,this.rebindTextures=Ue,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=qt,this.useMultisampledRTT=xt,this.dispose=z}function k1(r,t){function e(i,n=Ur){let s,o=re.getTransfer(n);if(i===bn)return r.UNSIGNED_BYTE;if(i===$h)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Zh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===$d)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Zd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===qd)return r.BYTE;if(i===Yd)return r.SHORT;if(i===sa)return r.UNSIGNED_SHORT;if(i===Yh)return r.INT;if(i===Vn)return r.UNSIGNED_INT;if(i===Hn)return r.FLOAT;if(i===Ei)return r.HALF_FLOAT;if(i===Jd)return r.ALPHA;if(i===Kd)return r.RGB;if(i===Gn)return r.RGBA;if(i===Ar)return r.DEPTH_COMPONENT;if(i===Nr)return r.DEPTH_STENCIL;if(i===Qd)return r.RED;if(i===Jh)return r.RED_INTEGER;if(i===fs)return r.RG;if(i===Kh)return r.RG_INTEGER;if(i===Qh)return r.RGBA_INTEGER;if(i===Ll||i===Dl||i===Nl||i===Ul)if(o===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jh||i===tu||i===eu||i===iu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===iu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nu||i===ru||i===su||i===ou||i===au||i===Ol||i===lu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nu||i===ru)return o===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===su)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ou)return s.COMPRESSED_R11_EAC;if(i===au)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ol)return s.COMPRESSED_RG11_EAC;if(i===lu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cu||i===hu||i===uu||i===fu||i===du||i===pu||i===mu||i===gu||i===_u||i===xu||i===vu||i===yu||i===Su||i===Mu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===du)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_u)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Su)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mu)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bu||i===Tu||i===wu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===bu)return o===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eu||i===Au||i===Fl||i===Cu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var V1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H1=`
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

}`,bp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new _l(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ke({vertexShader:V1,fragmentShader:H1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wi(new Gs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tp=class extends er{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new bp,g={},v=e.getContextAttributes(),E=null,y=null,b=[],w=[],_=new kt,S=null,P=null,A=new tn;A.viewport=new Ye;let U=new tn;U.viewport=new Ye;let L=[A,U],V=new Hh,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ht=b[$];return ht===void 0&&(ht=new Go,b[$]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function($){let ht=b[$];return ht===void 0&&(ht=new Go,b[$]=ht),ht.getGripSpace()},this.getHand=function($){let ht=b[$];return ht===void 0&&(ht=new Go,b[$]=ht),ht.getHandSpace()};function H($){let ht=w.indexOf($.inputSource);if(ht===-1)return;let St=b[ht];St!==void 0&&(St.update($.inputSource,$.frame,c||o),St.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",nt);for(let $=0;$<b.length;$++){let ht=w[$];ht!==null&&(w[$]=null,b[$].disconnect(ht))}I=null,z=null,m.reset();for(let $ in g)delete g[$];if(t.setRenderTarget(E),f=null,u=null,d=null,n=null,y=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),P!==null){let $=P.camera;$.fov=P.fov,$.zoom=P.zoom,$.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(E=t.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",O),n.addEventListener("inputsourceschange",nt),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Tt=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=v.stencil?Nr:Ar,Tt=v.stencil?Ys:Vn);let It={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(It),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ci(u.textureWidth,u.textureHeight,{format:Gn,type:bn,depthTexture:new Ir(u.textureWidth,u.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let St={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,St),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ci(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),wt.setContext(n),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt($){for(let ht=0;ht<$.removed.length;ht++){let St=$.removed[ht],Tt=w.indexOf(St);Tt>=0&&(w[Tt]=null,b[Tt].disconnect(St))}for(let ht=0;ht<$.added.length;ht++){let St=$.added[ht],Tt=w.indexOf(St);if(Tt===-1){for(let It=0;It<b.length;It++)if(It>=w.length){w.push(St),Tt=It;break}else if(w[It]===null){w[It]=St,Tt=It;break}if(Tt===-1)break}let _t=b[Tt];_t&&_t.connect(St)}}function W($,ht){ht===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ht.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let ht=$.near,St=$.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(St=m.depthFar)),V.near=U.near=A.near=ht,V.far=U.far=A.far=St,(I!==V.near||z!==V.far)&&(n.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,z=V.far),V.layers.mask=$.layers.mask|6,A.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let Tt=$.parent,_t=V.cameras;W(V,Tt);for(let It=0;It<_t.length;It++)W(_t[It],Tt);V.projectionMatrix.copy(A.projectionMatrix),V.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&$.isPerspectiveCamera&&(P={camera:$,fov:$.fov,zoom:$.zoom}),R($,V,Tt)};function R($,ht,St){St===null?$.matrix.copy(ht.matrixWorld):($.matrix.copy(St.matrixWorld),$.matrix.invert(),$.matrix.multiply(ht.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ht.projectionMatrix),$.projectionMatrixInverse.copy(ht.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function($){return g[$]};let tt=null;function vt($,ht){if(h=ht.getViewerPose(c||o),p=ht,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Tt=!1;St.length!==V.cameras.length&&(V.cameras.length=0,Tt=!0);for(let Ct=0;Ct<St.length;Ct++){let Xt=St[Ct],Nt=null;if(f!==null)Nt=f.getViewport(Xt);else{let se=d.getViewSubImage(u,Xt);Nt=se.viewport,Ct===0&&(t.setRenderTargetTextures(y,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(y))}let Ut=L[Ct];Ut===void 0&&(Ut=new tn,Ut.layers.enable(Ct),Ut.viewport=new Ye,L[Ct]=Ut),Ut.matrix.fromArray(Xt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Xt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Ct===0&&(V.matrix.copy(Ut.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Tt===!0&&V.cameras.push(Ut)}let _t=n.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Ct=d.getDepthInformation(St[0]);Ct&&Ct.isValid&&Ct.texture&&m.init(Ct,n.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let Ct=0;Ct<St.length;Ct++){let Xt=St[Ct].camera;if(Xt){let Nt=g[Xt];Nt||(Nt=new _l,g[Xt]=Nt);let Ut=d.getCameraImage(Xt);Nt.sourceTexture=Ut}}}}for(let St=0;St<b.length;St++){let Tt=w[St],_t=b[St];Tt!==null&&_t!==void 0&&_t.update(Tt,ht,c||o)}tt&&tt($,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),p=null}let wt=new D_;wt.setAnimationLoop(vt),this.setAnimationLoop=function($){tt=$},this.dispose=function(){}}},G1=new De,G_=new $t;G_.set(-1,0,0,0,1,0,0,0,1);function W1(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,op(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===nn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===nn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),E=v.envMap,y=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(G1.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(G_),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function X1(r,t,e,i){let n={},s={};function o(v,E){let y=E.program;i.uniformBlockBinding(v,y,n[v.id])}function a(v,E){let y=n[v.id];y===void 0&&(p(v),y=l(v),n[v.id]=y,v.addEventListener("dispose",m));let b=E.program;i.updateUBOMapping(v,b);let w=t.render.frame;s[v.id]!==w&&(c(v),s[v.id]=w)}function l(v){let E=r.createBuffer(),y=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,y,b),r.bindBuffer(r.UNIFORM_BUFFER,null),E}function c(v){let E=n[v.id],y=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let w=0,_=y.length;w<_;w++){let S=y[w];if(Array.isArray(S))for(let P=0,A=S.length;P<A;P++)h(S[P],w,P,b);else h(S,w,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,E,y,b){if(u(v,E,y,b)===!0){let w=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let P=0;P<_.length;P++){let A=_[P],U=x(A,!0);d(A,v.__data,S),S+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,v.__data)}}function d(v,E,y){typeof v=="number"||typeof v=="boolean"?E[y]=v:v.isMatrix3?(E[y]=v.elements[0],E[y+1]=v.elements[1],E[y+2]=v.elements[2],E[y+3]=0,E[y+4]=v.elements[3],E[y+5]=v.elements[4],E[y+6]=v.elements[5],E[y+7]=0,E[y+8]=v.elements[6],E[y+9]=v.elements[7],E[y+10]=v.elements[8],E[y+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-y),y):v.toArray(E,y)}function u(v,E,y,b){let w=v.value,_=E+"_"+y;if(Array.isArray(w)){b[_]===void 0&&(b[_]=[]);let S=b[_],P=!1;for(let A=0;A<w.length;A++)f(w[A],S,A)===!0&&(P=!0);return P}return f(w,b,_)}function f(v,E,y){if(E[y]===void 0)return typeof v=="number"||typeof v=="boolean"?E[y]=v:ArrayBuffer.isView(v)?E[y]=v.slice():E[y]=v.clone(),!0;{let b=E[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return E[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function p(v){let E=v.uniforms,y=0,b=16;for(let _=0,S=E.length;_<S;_++){let P=Array.isArray(E[_])?E[_]:[E[_]];for(let A=0,U=P.length;A<U;A++){let L=P[A],V=Array.isArray(L.value)?L.value:[L.value],I=Array.isArray(E[_])||Array.isArray(L.value),z=y;for(let O=0,nt=V.length;O<nt;O++){let W=V[O],R=x(W,I),tt=y%b,vt=tt%R.boundary,wt=tt+vt;y+=vt,wt!==0&&b-wt<R.storage&&(y+=b-wt),O===0&&(z=y),y+=R.storage}let H=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new H((y-z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=z}}let w=y%b;return w>0&&(y+=b-w),v.__size=y,v.__cache={},this}function x(v,E){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let E=v.target;E.removeEventListener("dispose",m),r.deleteBuffer(n[E.id]),delete n[E.id],delete s[E.id]}function g(){for(let v in n)r.deleteBuffer(n[v]);n={},s={}}return{bind:o,update:a,dispose:g}}var q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),sr=null;function Y1(){return sr===null&&(sr=new qo(q1,16,16,fs,Ei),sr.name="DFG_LUT",sr.minFilter=en,sr.magFilter=en,sr.wrapS=tr,sr.wrapT=tr,sr.generateMipmaps=!1,sr.needsUpdate=!0),sr}var Du=class{constructor(t={}){let{canvas:e=e_(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=bn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Qh,Kh,Jh]),g=new Set([bn,Vn,sa,Ys,$h,Zh]),v=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,w=null,_=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,U=!1,L=null,V=null,I=null,z=null;this._outputColorSpace=bi;let H=0,O=0,nt=null,W=-1,R=null,tt=new Ye,vt=new Ye,wt=null,$=new Zt(0),ht=0,St=e.width,Tt=e.height,_t=1,It=null,pe=null,Ct=new Ye(0,0,St,Tt),Xt=new Ye(0,0,St,Tt),Nt=!1,Ut=new Hs,se=new Ch,ce=!1,j=!1,qt=new De,Ne=new B,Se=new Ye,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function Ae(){return nt===null?_t:1}let F=i;function ve(T,N){return e.getContext(T,N)}let oe,Yt,xt,me,lt,Ot,C,M,G,ct,ot,ut,mt,X,st,dt,D,rt,it,pt,ft,gt,K;try{let T={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",Z,!1),F===null){let N="webgl2";if(F=ve(N,T),F===null)throw ve(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(T){throw e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),Wt("WebGLRenderer: "+T.message),T}function et(){oe=new rT(F),oe.init(),ft=new k1(F,oe),Yt=new Yb(F,oe,t,ft),xt=new B1(F,oe),Yt.reversedDepthBuffer&&u&&xt.buffers.depth.setReversed(!0),V=F.createFramebuffer(),I=F.createFramebuffer(),z=F.createFramebuffer(),me=new aT(F),lt=new T1,Ot=new z1(F,oe,xt,lt,Yt,ft,me),C=new nT(A),M=new cS(F),gt=new Xb(F,M),G=new sT(F,M,me,gt),ct=new cT(F,G,M,gt,me),rt=new lT(F,Yt,Ot),st=new $b(lt),ot=new b1(A,C,oe,Yt,gt,st),ut=new W1(A,lt),mt=new E1,X=new L1(oe),D=new Wb(A,C,xt,ct,p,l),dt=new F1(A,ct,Yt),K=new X1(F,me,Yt,xt),it=new qb(F,oe,me),pt=new oT(F,oe,me),me.programs=ot.programs,A.capabilities=Yt,A.extensions=oe,A.properties=lt,A.renderLists=mt,A.shadowMap=dt,A.state=xt,A.info=me}x!==bn&&(P=new uT(x,e.width,e.height,a,n,s));let q=new Tp(A,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(T){T!==void 0&&(_t=T,this.setSize(St,Tt,!1))},this.getSize=function(T){return T.set(St,Tt)},this.setSize=function(T,N,Q=!0){if(q.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=T,Tt=N,e.width=Math.floor(T*_t),e.height=Math.floor(N*_t),Q===!0&&(e.style.width=T+"px",e.style.height=N+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(St*_t,Tt*_t).floor()},this.setDrawingBufferSize=function(T,N,Q){St=T,Tt=N,_t=Q,e.width=Math.floor(T*Q),e.height=Math.floor(N*Q),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(x===bn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(tt)},this.getViewport=function(T){return T.copy(Ct)},this.setViewport=function(T,N,Q,k){T.isVector4?Ct.set(T.x,T.y,T.z,T.w):Ct.set(T,N,Q,k),xt.viewport(tt.copy(Ct).multiplyScalar(Ae()).round())},this.getScissor=function(T){return T.copy(Xt)},this.setScissor=function(T,N,Q,k){T.isVector4?Xt.set(T.x,T.y,T.z,T.w):Xt.set(T,N,Q,k),xt.scissor(vt.copy(Xt).multiplyScalar(Ae()).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(T){xt.setScissorTest(Nt=T)},this.setOpaqueSort=function(T){It=T},this.setTransparentSort=function(T){pe=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,Q=!0){let k=0;if(T){let J=!1;if(nt!==null){let Mt=nt.texture.format;J=m.has(Mt)}if(J){let Mt=nt.texture.type,Rt=g.has(Mt),bt=D.getClearColor(),Et=D.getClearAlpha(),Ft=bt.r,Jt=bt.g,ue=bt.b;Rt?(v[0]=Ft,v[1]=Jt,v[2]=ue,v[3]=Et,F.clearBufferuiv(F.COLOR,0,v)):(E[0]=Ft,E[1]=Jt,E[2]=ue,E[3]=Et,F.clearBufferiv(F.COLOR,0,E))}else k|=F.COLOR_BUFFER_BIT}N&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),D.dispose(),mt.dispose(),X.dispose(),Ot.dispose(),lt.dispose(),C.dispose(),ct.dispose(),G.dispose(),gt.dispose(),K.dispose(),ot.dispose(),q.dispose(),q.removeEventListener("sessionstart",ge),q.removeEventListener("sessionend",ae),Be.stop()};function Y(T){T.preventDefault(),ll("WebGLRenderer: Context Lost."),U=!0}function at(){ll("WebGLRenderer: Context Restored."),U=!1;let T=me.autoReset,N=dt.enabled,Q=dt.autoUpdate,k=dt.needsUpdate,J=dt.type;et(),me.autoReset=T,dt.enabled=N,dt.autoUpdate=Q,dt.needsUpdate=k,dt.type=J}function Z(T){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function yt(T){let N=T.target;N.removeEventListener("dispose",yt),Ht(N)}function Ht(T){zt(T),lt.remove(T)}function zt(T){let N=lt.get(T).programs;N!==void 0&&(N.forEach(function(Q){ot.releaseProgram(Q)}),T.isShaderMaterial&&ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,Q,k,J,Mt){N===null&&(N=Qt);let Rt=J.isMesh&&J.matrixWorld.determinantAffine()<0,bt=Hi(T,N,Q,k,J);xt.setMaterial(k,Rt);let Et=Q.index,Ft=1;if(k.wireframe===!0){if(Et=G.getWireframeAttribute(Q),Et===void 0)return;Ft=2}let Jt=Q.drawRange,ue=Q.attributes.position,Lt=Jt.start*Ft,fe=(Jt.start+Jt.count)*Ft;Mt!==null&&(Lt=Math.max(Lt,Mt.start*Ft),fe=Math.min(fe,(Mt.start+Mt.count)*Ft)),Et!==null?(Lt=Math.max(Lt,0),fe=Math.min(fe,Et.count)):ue!=null&&(Lt=Math.max(Lt,0),fe=Math.min(fe,ue.count));let ni=fe-Lt;if(ni<0||ni===1/0)return;gt.setup(J,k,bt,Q,Et);let Le,Re=it;if(Et!==null&&(Le=M.get(Et),Re=pt,Re.setIndex(Le)),J.isMesh)k.wireframe===!0?(xt.setLineWidth(k.wireframeLinewidth*Ae()),Re.setMode(F.LINES)):Re.setMode(F.TRIANGLES);else if(J.isLine){let Ai=k.linewidth;Ai===void 0&&(Ai=1),xt.setLineWidth(Ai*Ae()),J.isLineSegments?Re.setMode(F.LINES):J.isLineLoop?Re.setMode(F.LINE_LOOP):Re.setMode(F.LINE_STRIP)}else J.isPoints?Re.setMode(F.POINTS):J.isSprite&&Re.setMode(F.TRIANGLES);if(J.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Re.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Ai=J._multiDrawStarts,Dt=J._multiDrawCounts,Wi=J._multiDrawCount,be=Et?M.get(Et).bytesPerElement:1,gs=lt.get(k).currentProgram.getUniforms();for(let Ci=0;Ci<Wi;Ci++)gs.setValue(F,"_gl_DrawID",Ci),Re.render(Ai[Ci]/be,Dt[Ci])}else if(J.isInstancedMesh)Re.renderInstances(Lt,ni,J.count);else if(Q.isInstancedBufferGeometry){let Ai=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Dt=Math.min(Q.instanceCount,Ai);Re.renderInstances(Lt,ni,Dt)}else Re.render(Lt,ni)};function xe(T,N,Q,k){L!==null&&T.isNodeMaterial&&L.setObject(k,T),ce===!0&&st.setState(T,Q,!1),T.transparent===!0&&T.side===nr&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,fi(T,N,k),T.side=us,T.needsUpdate=!0,fi(T,N,k),T.side=nr):fi(T,N,k)}this.compile=function(T,N,Q=null){Q===null&&(Q=T),L!==null&&L.renderStart(T,N,Q),w=X.get(Q),w.init(N),S.push(w),Q.traverseVisible(function(J){J.isLight&&J.layers.test(N.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),T!==Q&&T.traverseVisible(function(J){J.isLight&&J.layers.test(N.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),j=this.localClippingEnabled,ce=st.init(this.clippingPlanes,j),ce===!0&&st.setGlobalState(this.clippingPlanes,N),L!==null&&dt.render(w.state.shadowsArray,Q,N);let k=new Set;return T.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Mt=J.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){let bt=Mt[Rt];xe(bt,Q,N,J),k.add(bt)}else xe(Mt,Q,N,J),k.add(Mt)}),w=S.pop(),L!==null&&L.renderEnd(),k},this.compileAsync=function(T,N,Q=null){let k=this.compile(T,N,Q);return new Promise(J=>{function Mt(){if(k.forEach(function(Rt){let Et=lt.get(Rt).currentProgram;(Et===void 0||Et.isReady())&&k.delete(Rt)}),k.size===0){J(T);return}setTimeout(Mt,10)}oe.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Vt=null;function he(T){Vt&&Vt(T)}function ge(){Be.stop()}function ae(){Be.start()}let Be=new D_;Be.setAnimationLoop(he),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(T){Vt=T,q.setAnimationLoop(T),T===null?Be.stop():Be.start()},q.addEventListener("sessionstart",ge),q.addEventListener("sessionend",ae),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;L!==null&&L.renderStart(T,N);let Q=q.enabled===!0&&q.isPresenting===!0,k=P!==null&&(nt===null||Q)&&P.begin(A,nt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,N,nt),w=X.get(T,S.length),w.init(N),w.state.textureUnits=Ot.getTextureUnits(),S.push(w),qt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?se.setFromArrayCamera(N):Ut.setFromProjectionMatrix(qt,Dn,N.reversedDepth),j=this.localClippingEnabled,ce=st.init(this.clippingPlanes,j),b=mt.get(T,_.length),b.init(),_.push(b),this.info.render.frame++,q.enabled===!0&&q.isPresenting===!0){let Rt=A.xr.getDepthSensingMesh();Rt!==null&&we(Rt,N,-1/0,A.sortObjects)}we(T,N,0,A.sortObjects),b.finish(),L!==null&&L.updateLights(w.state.lightsArray),A.sortObjects===!0&&b.sort(It,pe),Ue=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Ue&&D.addToRenderList(b,T),this.info.autoReset===!0&&this.info.reset(),ce===!0&&st.beginShadows();let J=w.state.shadowsArray;if(dt.render(J,T,N),ce===!0&&st.endShadows(),(k&&P.hasRenderPass())===!1){let Rt=b.opaque,bt=b.transmissive;if(w.setupLights(),N.isArrayCamera){let Et=N.cameras;if(bt.length>0)for(let Ft=0,Jt=Et.length;Ft<Jt;Ft++){let ue=Et[Ft];Vi(Rt,bt,T,ue)}Ue&&D.render(T);for(let Ft=0,Jt=Et.length;Ft<Jt;Ft++){let ue=Et[Ft];ii(b,T,ue,ue.viewport)}}else bt.length>0&&Vi(Rt,bt,T,N),Ue&&D.render(T),ii(b,T,N)}nt!==null&&O===0&&(Ot.updateMultisampleRenderTarget(nt),Ot.updateRenderTargetMipmap(nt)),k&&P.end(A),T.isScene===!0&&T.onAfterRender(A,T,N),gt.resetDefaultState(),W=-1,R=null,S.pop(),S.length>0?(w=S[S.length-1],Ot.setTextureUnits(w.state.textureUnits),ce===!0&&st.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,L!==null&&L.renderEnd()};function we(T,N,Q,k){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let Rt=N.isArrayCamera?se:Ut;if(!T.frustumCulled||T.intersectsFrustum(Rt)){k&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(qt);let bt=ct.update(T),Et=T.material;Et.visible&&b.push(T,bt,Et,Q,Se.z,null,N)}}else if(T.isMesh||T.isLine||T.isPoints){let Rt=N.isArrayCamera?se:Ut;if(!T.frustumCulled||T.intersectsFrustum(Rt)){let bt=ct.update(T),Et=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Se.copy(bt.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4(qt)),Array.isArray(Et)){let Ft=bt.groups;for(let Jt=0,ue=Ft.length;Jt<ue;Jt++){let Lt=Ft[Jt],fe=Et[Lt.materialIndex];fe&&fe.visible&&b.push(T,bt,fe,Q,Se.z,Lt,N)}}else Et.visible&&b.push(T,bt,Et,Q,Se.z,null,N)}}}let Mt=T.children;for(let Rt=0,bt=Mt.length;Rt<bt;Rt++)we(Mt[Rt],N,Q,k)}function ii(T,N,Q,k){let{opaque:J,transmissive:Mt,transparent:Rt}=T;w.setupLightsView(Q),ce===!0&&st.setGlobalState(A.clippingPlanes,Q),k&&xt.viewport(tt.copy(k)),J.length>0&&Ie(J,N,Q),Mt.length>0&&Ie(Mt,N,Q),Rt.length>0&&Ie(Rt,N,Q),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Vi(T,N,Q,k){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Lt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new ci(1,1,{generateMipmaps:!0,type:Lt?Ei:bn,minFilter:Dr,samples:Math.max(4,Yt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let Mt=w.state.transmissionRenderTarget[k.id],Rt=k.viewport||tt;Mt.setSize(Rt.z*A.transmissionResolutionScale,Rt.w*A.transmissionResolutionScale);let bt=A.getRenderTarget(),Et=A.getActiveCubeFace(),Ft=A.getActiveMipmapLevel();A.setRenderTarget(Mt),A.getClearColor($),ht=A.getClearAlpha(),ht<1&&A.setClearColor(16777215,.5),A.clear(),Ue&&D.render(Q);let Jt=A.toneMapping;A.toneMapping=rr;let ue=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),ce===!0&&st.setGlobalState(A.clippingPlanes,k),Ie(T,Q,k),Ot.updateMultisampleRenderTarget(Mt),Ot.updateRenderTargetMipmap(Mt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let fe=0,ni=N.length;fe<ni;fe++){let Le=N[fe],{object:Re,geometry:Ai,material:Dt,group:Wi}=Le;if(Dt.side===nr&&Re.layers.test(k.layers)){let be=Dt.side;Dt.side=nn,Dt.needsUpdate=!0,$e(Re,Q,k,Ai,Dt,Wi),Dt.side=be,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Ot.updateMultisampleRenderTarget(Mt),Ot.updateRenderTargetMipmap(Mt))}A.setRenderTarget(bt,Et,Ft),A.setClearColor($,ht),ue!==void 0&&(k.viewport=ue),A.toneMapping=Jt}function Ie(T,N,Q){let k=N.isScene===!0?N.overrideMaterial:null;for(let J=0,Mt=T.length;J<Mt;J++){let Rt=T[J],{object:bt,geometry:Et,group:Ft}=Rt,Jt=Rt.material;Jt.allowOverride===!0&&k!==null&&(Jt=k),bt.layers.test(Q.layers)&&$e(bt,N,Q,Et,Jt,Ft)}}function $e(T,N,Q,k,J,Mt){L!==null&&J.isNodeMaterial&&L.setObject(T,J),T.onBeforeRender(A,N,Q,k,J,Mt),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(A,N,Q,k,T,Mt),J.transparent===!0&&J.side===nr&&J.forceSinglePass===!1?(J.side=nn,J.needsUpdate=!0,A.renderBufferDirect(Q,N,k,J,T,Mt),J.side=us,J.needsUpdate=!0,A.renderBufferDirect(Q,N,k,J,T,Mt),J.side=nr):A.renderBufferDirect(Q,N,k,J,T,Mt),T.onAfterRender(A,N,Q,k,J,Mt)}function je(T){let N=0;for(let Q of T)Q.texture!==null&&N++;return N}function fi(T,N,Q){N.isScene!==!0&&(N=Qt);let k=lt.get(T),J=w.state.lights,Mt=w.state.shadowsArray,Rt=J.state.version,bt=ot.getParameters(T,J.state,Mt,N,Q,w.state.lightProbeGridArray),Et=ot.getProgramCacheKey(bt),Ft=k.programs;k.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;let Jt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;k.envMap=C.get(T.envMap||k.environment,Jt),k.envMapRotation=k.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",yt),Ft=new Map,k.programs=Ft,k.programVariants=new Map);let ue=Ft.get(Et);if(ue!==void 0){if(k.currentProgram===ue&&k.lightsStateVersion===Rt)return Oe(T,bt),ue}else bt.uniforms=ot.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,Q,bt),T.onBeforeCompile(bt,A),ue=ot.acquireProgram(bt,Et),Ft.set(Et,ue),k.uniforms=bt.uniforms;let Lt=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=st.uniform),Oe(T,bt),k.needsLights=ms(T),k.lightsStateVersion=Rt,k.needsLights&&(Lt.ambientLightColor.value=J.state.ambient,Lt.lightProbe.value=J.state.probe,Lt.sunLights.value=J.state.sun,Lt.sunLightShadows.value=J.state.sunShadow,Lt.directionalLights.value=J.state.directional,Lt.directionalLightShadows.value=J.state.directionalShadow,Lt.spotLights.value=J.state.spot,Lt.spotLightShadows.value=J.state.spotShadow,Lt.rectAreaLights.value=J.state.rectArea,Lt.ltc_1.value=J.state.rectAreaLTC1,Lt.ltc_2.value=J.state.rectAreaLTC2,Lt.pointLights.value=J.state.point,Lt.pointLightShadows.value=J.state.pointShadow,Lt.hemisphereLights.value=J.state.hemi,Lt.sunShadowMatrix.value=J.state.sunShadowMatrix,Lt.sunShadowCascade.value=J.state.sunShadowCascade,Lt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Lt.spotLightMatrix.value=J.state.spotLightMatrix,Lt.spotLightMap.value=J.state.spotLightMap,Lt.pointShadowMatrix.value=J.state.pointShadowMatrix),k.numLightProbeGrids=je(w.state.lightProbeGridArray),k.currentProgram=ue,k.uniformsList=null,ue}function ar(T,N,Q,k,J){let Mt=lt.get(T),Rt=Mt.currentProgram.id+","+k+","+J,bt=Mt.programVariants.get(Rt);return bt===void 0?(bt=fi(T,N,Q),Mt.programVariants.set(Rt,bt)):(Mt.currentProgram=bt,Mt.uniformsList=null,Mt.outputColorSpace=k,Mt.toneMapping=J),bt}function Ve(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=oa.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Oe(T,N){let Q=lt.get(T);Q.outputColorSpace=N.outputColorSpace,Q.batching=N.batching,Q.batchingColor=N.batchingColor,Q.instancing=N.instancing,Q.instancingColor=N.instancingColor,Q.instancingMorph=N.instancingMorph,Q.skinning=N.skinning,Q.morphTargets=N.morphTargets,Q.morphNormals=N.morphNormals,Q.morphColors=N.morphColors,Q.morphTargetsCount=N.morphTargetsCount,Q.numClippingPlanes=N.numClippingPlanes,Q.numIntersection=N.numClipIntersection,Q.vertexAlphas=N.vertexAlphas,Q.vertexTangents=N.vertexTangents,Q.toneMapping=N.toneMapping}function Hi(T,N,Q,k,J){N.isScene!==!0&&(N=Qt),Ot.resetTextureUnits();let Mt=N.fog,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,bt=nt===null?A.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:re.workingColorSpace,Et=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ft=C.get(k.envMap||Rt,Et),Jt=k.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ue=!!Q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Lt=!!Q.morphAttributes.position,fe=!!Q.morphAttributes.normal,ni=!!Q.morphAttributes.color,Le=rr;k.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Le=A.toneMapping);let Re=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ai=Re!==void 0?Re.length:0,Dt=lt.get(k),Wi=w.state.lights;if(ce===!0&&(j===!0||T!==R)){let He=T===R&&k.id===W;st.setState(k,T,He)}let be=!1,gs=!1;k.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==Wi.state.version||J.isBatchedMesh&&Dt.batching===!1||!J.isBatchedMesh&&Dt.batching===!0||J.isBatchedMesh&&Dt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Dt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Dt.instancing===!1||!J.isInstancedMesh&&Dt.instancing===!0||J.isSkinnedMesh&&Dt.skinning===!1||!J.isSkinnedMesh&&Dt.skinning===!0||J.isInstancedMesh&&Dt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Dt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Dt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Dt.instancingMorph===!1&&J.morphTexture!==null||Dt.envMap!==Ft||k.fog===!0&&Dt.fog!==Mt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==st.numPlanes||Dt.numIntersection!==st.numIntersection)||Dt.vertexAlphas!==Jt||Dt.vertexTangents!==ue||Dt.morphTargets!==Lt||Dt.morphNormals!==fe||Dt.morphColors!==ni||Dt.morphTargetsCount!==Ai||Dt.numLightProbeGrids!==je(w.state.lightProbeGridArray)?be=!0:(Dt.outputColorSpace!==bt||Dt.toneMapping!==Le)&&(gs=!0):(be=!0,Dt.__version=k.version);let Ci=Dt.currentProgram;(be===!0||gs===!0)&&(Ci=gs===!0?ar(k,N,J,bt,Le):fi(k,N,J),L&&k.isNodeMaterial&&L.onUpdateProgram(k,Ci,Dt));let Yl=!1,zr=!1,_s=!1,ye=Ci.getUniforms(),vi=Dt.uniforms;if(xt.useProgram(Ci.program)&&(Yl=!0,zr=!0,_s=!0),k.id!==W&&(W=k.id,zr=!0),Yl||R!==T){xt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ye.setValue(F,"projectionMatrix",T.projectionMatrix),ye.setValue(F,"viewMatrix",T.matrixWorldInverse);let di=ye.map.cameraPosition;di!==void 0&&di.setValue(F,Ne.setFromMatrixPosition(T.matrixWorld)),Yt.logarithmicDepthBuffer&&ye.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ye.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,zr=!0,_s=!0)}if(Dt.needsLights&&(Wi.state.sunShadowMap.length>0&&ye.setValue(F,"sunShadowMap",Wi.state.sunShadowMap,Ot),Wi.state.directionalShadowMap.length>0&&ye.setValue(F,"directionalShadowMap",Wi.state.directionalShadowMap,Ot),Wi.state.spotShadowMap.length>0&&ye.setValue(F,"spotShadowMap",Wi.state.spotShadowMap,Ot),Wi.state.pointShadowMap.length>0&&ye.setValue(F,"pointShadowMap",Wi.state.pointShadowMap,Ot)),J.isSkinnedMesh){ye.setOptional(F,J,"bindMatrix"),ye.setOptional(F,J,"bindMatrixInverse");let He=J.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ye.setValue(F,"boneTexture",He.boneTexture,Ot))}J.isBatchedMesh&&(ye.setOptional(F,J,"batchingTexture"),ye.setValue(F,"batchingTexture",J._matricesTexture,Ot),ye.setOptional(F,J,"batchingIdTexture"),ye.setValue(F,"batchingIdTexture",J._indirectTexture,Ot),ye.setOptional(F,J,"batchingColorTexture"),J._colorsTexture!==null&&ye.setValue(F,"batchingColorTexture",J._colorsTexture,Ot));let Nn=Q.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&rt.update(J,Q,Ci),(zr||Dt.receiveShadow!==J.receiveShadow)&&(Dt.receiveShadow=J.receiveShadow,ye.setValue(F,"receiveShadow",J.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(vi.envMapIntensity.value=N.environmentIntensity),vi.dfgLUT!==void 0&&(vi.dfgLUT.value=Y1()),zr){if(ye.setValue(F,"toneMappingExposure",A.toneMappingExposure),Dt.needsLights&&Br(vi,_s),Mt&&k.fog===!0&&ut.refreshFogUniforms(vi,Mt),ut.refreshMaterialUniforms(vi,k,_t,Tt,w.state.transmissionRenderTarget[T.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let He=y,di=0;for(let lr of w.state.lightProbeGridArray)lr.texture!==null&&(He.textures[di]=lr.texture,He.min[di]=lr.boundingBox.min,He.max[di]=lr.boundingBox.max,He.resolution[di]=lr.resolution,di++);for(let lr in He)He[lr].length=di;vi.probesSH.value=He.textures,vi.probesMin.value=He.min,vi.probesMax.value=He.max,vi.probesResolution.value=He.resolution}oa.upload(F,Ve(Dt),vi,Ot)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(oa.upload(F,Ve(Dt),vi,Ot),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ye.setValue(F,"center",J.center),ye.setValue(F,"modelViewMatrix",J.modelViewMatrix),ye.setValue(F,"normalMatrix",J.normalMatrix),ye.setValue(F,"modelMatrix",J.matrixWorld),k.uniformsGroups!==void 0){let He=k.uniformsGroups;for(let di=0,lr=He.length;di<lr;di++){let Up=He[di];K.update(Up,Ci),K.bind(Up,Ci)}}return Ci}function Br(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.sunLights.needsUpdate=N,T.sunLightShadows.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function ms(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(T,N,Q){let k=lt.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),lt.get(T.texture).__webglTexture=N,lt.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let Q=lt.get(T);Q.__webglFramebuffer=N,Q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,Q=0){nt=T,H=N,O=Q;let k=null,J=!1,Mt=!1;if(T){let bt=lt.get(T);if(bt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(F.FRAMEBUFFER,bt.__webglFramebuffer),tt.copy(T.viewport),vt.copy(T.scissor),wt=T.scissorTest,xt.viewport(tt),xt.scissor(vt),xt.setScissorTest(wt),W=-1;return}else if(bt.__webglFramebuffer===void 0)Ot.setupRenderTarget(T);else if(bt.__hasExternalTextures)Ot.rebindTextures(T,lt.get(T.texture).__webglTexture,lt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Jt=T.depthTexture;if(bt.__boundDepthTexture!==Jt){if(Jt!==null&&lt.has(Jt)&&(T.width!==Jt.image.width||T.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(T)}}let Et=T.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(Mt=!0);let Ft=lt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?k=Ft[N][Q]:k=Ft[N],J=!0):T.samples>0&&Ot.useMultisampledRTT(T)===!1?k=lt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[Q]:k=Ft,tt.copy(T.viewport),vt.copy(T.scissor),wt=T.scissorTest}else tt.copy(Ct).multiplyScalar(_t).floor(),vt.copy(Xt).multiplyScalar(_t).floor(),wt=Nt;if(Q!==0&&(k=V),xt.bindFramebuffer(F.FRAMEBUFFER,k)&&xt.drawBuffers(T,k),xt.viewport(tt),xt.scissor(vt),xt.setScissorTest(wt),J){let bt=lt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt.__webglTexture,Q)}else if(Mt){let bt=N;for(let Et=0;Et<T.textures.length;Et++){let Ft=lt.get(T.textures[Et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Et,Ft.__webglTexture,Q,bt)}}else if(T!==null&&Q!==0){let bt=lt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bt.__webglTexture,Q)}W=-1};function Gi(T){let N=lt.get(T);return(N.__readFormat!==T.format||N.__readType!==T.type)&&(N.__readFormat=T.format,N.__readType=T.type,N.__formatReadable=Yt.textureFormatReadable(T.format),N.__typeReadable=Yt.textureTypeReadable(T.type)),N}this.readRenderTargetPixels=function(T,N,Q,k,J,Mt,Rt,bt=0){if(!(T&&T.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et){xt.bindFramebuffer(F.FRAMEBUFFER,Et);try{let Ft=T.textures[bt],Jt=Ft.format,ue=Ft.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+bt);let Lt=Gi(Ft);if(Lt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-k&&Q>=0&&Q<=T.height-J&&F.readPixels(N,Q,k,J,ft.convert(Jt),ft.convert(ue),Mt)}finally{let Ft=nt!==null?lt.get(nt).__webglFramebuffer:null;xt.bindFramebuffer(F.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,N,Q,k,J,Mt,Rt,bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et)if(N>=0&&N<=T.width-k&&Q>=0&&Q<=T.height-J){xt.bindFramebuffer(F.FRAMEBUFFER,Et);let Ft=T.textures[bt],Jt=Ft.format,ue=Ft.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+bt);let Lt=Gi(Ft);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.bufferData(F.PIXEL_PACK_BUFFER,Mt.byteLength,F.STREAM_READ),F.readPixels(N,Q,k,J,ft.convert(Jt),ft.convert(ue),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let ni=nt!==null?lt.get(nt).__webglFramebuffer:null;xt.bindFramebuffer(F.FRAMEBUFFER,ni);let Le=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await n_(F,Le,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Mt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(fe),F.deleteSync(Le),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,Q=0){let k=Math.pow(2,-Q),J=Math.floor(T.image.width*k),Mt=Math.floor(T.image.height*k),Rt=N!==null?N.x:0,bt=N!==null?N.y:0;Ot.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Rt,bt,J,Mt),xt.unbindTexture()},this.copyTextureToTexture=function(T,N,Q=null,k=null,J=0,Mt=0){let Rt,bt,Et,Ft,Jt,ue,Lt,fe,ni,Le=T.isCompressedTexture?T.mipmaps[Mt]:T.image;if(Q!==null)Rt=Q.max.x-Q.min.x,bt=Q.max.y-Q.min.y,Et=Q.isBox3?Q.max.z-Q.min.z:1,Ft=Q.min.x,Jt=Q.min.y,ue=Q.isBox3?Q.min.z:0;else{let ye=Math.pow(2,-J);Rt=Math.floor(Le.width*ye),bt=Math.floor(Le.height*ye),T.isDataArrayTexture?Et=Le.depth:T.isData3DTexture?Et=Math.floor(Le.depth*ye):Et=1,Ft=0,Jt=0,ue=0}k!==null?(Lt=k.x,fe=k.y,ni=k.z):(Lt=0,fe=0,ni=0);let Re=ft.convert(N.format),Ai=ft.convert(N.type),Dt;N.isData3DTexture?(Ot.setTexture3D(N,0),Dt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ot.setTexture2DArray(N,0),Dt=F.TEXTURE_2D_ARRAY):(Ot.setTexture2D(N,0),Dt=F.TEXTURE_2D),xt.activeTexture(F.TEXTURE0),xt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),xt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),xt.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let Wi=xt.getParameter(F.UNPACK_ROW_LENGTH),be=xt.getParameter(F.UNPACK_IMAGE_HEIGHT),gs=xt.getParameter(F.UNPACK_SKIP_PIXELS),Ci=xt.getParameter(F.UNPACK_SKIP_ROWS),Yl=xt.getParameter(F.UNPACK_SKIP_IMAGES);xt.pixelStorei(F.UNPACK_ROW_LENGTH,Le.width),xt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le.height),xt.pixelStorei(F.UNPACK_SKIP_PIXELS,Ft),xt.pixelStorei(F.UNPACK_SKIP_ROWS,Jt),xt.pixelStorei(F.UNPACK_SKIP_IMAGES,ue);let zr=T.isDataArrayTexture||T.isData3DTexture,_s=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let ye=lt.get(T),vi=lt.get(N),Nn=lt.get(ye.__renderTarget),He=lt.get(vi.__renderTarget);xt.bindFramebuffer(F.READ_FRAMEBUFFER,Nn.__webglFramebuffer),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let di=0;di<Et;di++)zr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,lt.get(T).__webglTexture,J,ue+di),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,lt.get(N).__webglTexture,Mt,ni+di)),F.blitFramebuffer(Ft,Jt,Ft+Rt,Jt+bt,Lt,fe,Lt+Rt,fe+bt,F.DEPTH_BUFFER_BIT,F.NEAREST);xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(J!==0||T.isRenderTargetTexture||lt.has(T)){let ye=lt.get(T),vi=lt.get(N);xt.bindFramebuffer(F.READ_FRAMEBUFFER,I),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let Nn=0;Nn<Et;Nn++)zr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.__webglTexture,J,ue+Nn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,J),_s?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vi.__webglTexture,Mt,ni+Nn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vi.__webglTexture,Mt),J!==0?F.blitFramebuffer(Ft,Jt,Ft+Rt,Jt+bt,Lt,fe,Lt+Rt,fe+bt,F.COLOR_BUFFER_BIT,F.NEAREST):_s?F.copyTexSubImage3D(Dt,Mt,Lt,fe,ni+Nn,Ft,Jt,Rt,bt):F.copyTexSubImage2D(Dt,Mt,Lt,fe,Ft,Jt,Rt,bt);xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _s?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Dt,Mt,Lt,fe,ni,Rt,bt,Et,Re,Ai,Le.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Dt,Mt,Lt,fe,ni,Rt,bt,Et,Re,Le.data):F.texSubImage3D(Dt,Mt,Lt,fe,ni,Rt,bt,Et,Re,Ai,Le):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Mt,Lt,fe,Rt,bt,Re,Ai,Le.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Mt,Lt,fe,Le.width,Le.height,Re,Le.data):F.texSubImage2D(F.TEXTURE_2D,Mt,Lt,fe,Rt,bt,Re,Ai,Le);xt.pixelStorei(F.UNPACK_ROW_LENGTH,Wi),xt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be),xt.pixelStorei(F.UNPACK_SKIP_PIXELS,gs),xt.pixelStorei(F.UNPACK_SKIP_ROWS,Ci),xt.pixelStorei(F.UNPACK_SKIP_IMAGES,Yl),Mt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(Dt),xt.unbindTexture()},this.initRenderTarget=function(T){lt.get(T).__webglFramebuffer===void 0&&Ot.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ot.setTextureCube(T,0):T.isData3DTexture?Ot.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ot.setTexture2DArray(T,0):Ot.setTexture2D(T,0),xt.unbindTexture()},this.resetState=function(){H=0,O=0,nt=null,xt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var la={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Z1=new ta(-1,1,1,-1,0,1),wp=class extends Ti{constructor(){super(),this.setAttribute("position",new _i([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _i([0,2,0,0,2,0],2))}},J1=new wp,ds=class{constructor(t){this._mesh=new wi(J1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Z1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ca=class extends Tn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Or.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ds(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Hl=class extends Tn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Ou=class extends Tn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Fu=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new kt);this._width=i.width,this._height=i.height,e=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ei}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ca(la),this.copyPass.material.blending=Lr,this.timer=new Sl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Hl!==void 0&&(o instanceof Hl?i=!0:o instanceof Ou&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new kt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bu=class extends Tn{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Zt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var W_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Zt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ha=class r extends Tn{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new kt(t.x,t.y):new kt(256,256),this.clearColor=new Zt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ci(s,o,{type:Ei,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new ci(s,o,{type:Ei,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new ci(s,o,{type:Ei,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}let a=W_;this.highPassUniforms=Or.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new kt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Or.clone(la.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader,premultipliedAlpha:!0,blending:Mn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Zt,this._oldClearAlpha=1,this._basic=new Xo,this._fsQuad=new ds(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new kt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],s=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),s.push(c)}return new ke({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new kt(.5,.5)},direction:{value:new kt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ha.BlurDirectionX=new kt(1,0);ha.BlurDirectionY=new kt(0,1);var Gl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var zu=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Or.clone(Gl.uniforms),this.material=new Ko({name:Gl.name,uniforms:this.uniforms,vertexShader:Gl.vertexShader,fragmentShader:Gl.fragmentShader}),this._fsQuad=new ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===Me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===El?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Al?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Rl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Cl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wn=Math.PI/180,X_=9.62*Wn,q_=-20.08*Wn,Y_=24*Wn,$_=5764/1737400*2.2,Z_=4e-4,K1=r=>Math.min(1,Math.max(0,r)),ps=(r,t,e)=>{let i=K1((e-r)/(t-r));return i*i*(3-2*i)},Fr=(r,t,e)=>r+(t-r)*e;function J_(){try{let r=document.createElement("canvas");return!!(r.getContext("webgl2")||r.getContext("webgl"))}catch{return!1}}function Q1(r,t,e=1){return new B(Math.cos(t)*Math.cos(r)*e,Math.sin(r)*e,-Math.sin(t)*Math.cos(r)*e)}var j1=`
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
  }`,tw=`
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
  }`,ew=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  varying vec2 vUv; varying vec3 vN; varying vec3 vWP;
  void main(){ vUv = uv; vN = normalize(mat3(modelMatrix)*normal);
    vec4 wp = modelMatrix*vec4(position,1.0); vWP = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp;
    #include <logdepthbuf_vertex>
  }`,iw=`
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
  }`,nw=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  attribute float aSize; attribute vec3 aColor; attribute float aPhase;
  uniform float uTime; uniform float uPR; varying vec3 vC;
  void main(){
    vC = aColor * (0.7 + 0.3*sin(uTime*(0.6+aPhase) + aPhase*30.0));
    vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv;
    gl_PointSize = aSize * uPR;
    #include <logdepthbuf_vertex>
  }`,rw=`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  uniform float uBright; varying vec3 vC;
  void main(){
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5); float a = pow(smoothstep(0.5, 0.0, d), 1.8);
    gl_FragColor = vec4(vC * a * uBright, 1.0);
  }`,sw=`
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
  }`,ow=`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  varying vec3 vC; varying float vA;
  void main(){
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d);
    gl_FragColor = vec4(vC * a * vA, 1.0);
  }`,aw=`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  uniform float uA; uniform vec3 uCol; varying vec2 vUv;
  void main(){
    #include <logdepthbuf_fragment>
    float r = length(vUv - 0.5) * 2.0;
    float band = smoothstep(0.80, 0.97, r) * smoothstep(1.0, 0.97, r);
    gl_FragColor = vec4(uCol * band * uA, 1.0);
  }`,lw=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
    #include <logdepthbuf_vertex>
  }`,cw={uniforms:{tDiffuse:{value:null},uZoom:{value:0},uFlash:{value:0},uVig:{value:1},uAspect:{value:1},uFade:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
    }`};function Wl(r){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),i=e.createRadialGradient(128,128,0,128,128,128);r.forEach(([s,o])=>i.addColorStop(s,o)),e.fillStyle=i,e.fillRect(0,0,256,256);let n=new ml(t);return n.colorSpace=bi,n}function hw(r,t){return new Promise((e,i)=>{t.itemStart(r);let n=new Image;n.decoding="async",n.onload=()=>{let s=document.createElement("canvas");s.width=n.width,s.height=n.height;let o=s.getContext("2d");o.drawImage(n,0,0),e(o.getImageData(0,0,s.width,s.height)),t.itemEnd(r)},n.onerror=s=>{t.itemError(r),i(s)},n.src=r})}async function K_(r,{mobile:t,onProgress:e}){let i=new Du({canvas:r,antialias:!t,powerPreference:"high-performance",logarithmicDepthBuffer:!0}),n=Math.min(window.devicePixelRatio||1,t?1.6:2);i.setPixelRatio(n),i.setSize(innerWidth,innerHeight,!1),i.toneMapping=Xs,i.toneMappingExposure=1,i.outputColorSpace=bi;let s=new hl,o=new tn(30,innerWidth/innerHeight,2e-5,3e3),a=new Qo;a.onProgress=(K,et,q)=>e&&e(et/q);let l=new vl(a),c=t?"2k":"4k",h=(K,et=!0)=>new Promise((q,Y)=>l.load(K,at=>{et&&(at.colorSpace=bi),at.anisotropy=i.capabilities.getMaxAnisotropy(),q(at)},void 0,Y)),[d,u,f,p,x,m,g]=await Promise.all([h(`assets/moon_color_${c}.jpg`),h(`assets/moon_normal_${c}.jpg`,!1),h("assets/terrain_color.jpg"),h("assets/terrain_normal.jpg",!1),h("assets/terrain_shadow.png",!1),h("assets/earth_2k.jpg"),hw("assets/terrain_height.png",a)]),v={uSunDir:{value:new B(0,0,1)},uOrbPos:{value:[new B,new B]},uOrbCol:{value:[new Zt(.78,.86,1),new Zt(1,.7,.32)]},uOrbI:{value:[0,0]},uOrbR:{value:.028},uExposure:{value:2.4},uEarthshine:{value:.035}},E=new qo(new Uint8Array([255,255,255,255]),1,1);E.needsUpdate=!0;let y=(K,et,q,Y)=>new ke({vertexShader:j1,fragmentShader:tw,uniforms:{...v,uMap:{value:K},uNormal:{value:et},uShadow:{value:q},uNormalStrength:{value:Y},uShadowAmt:{value:0}}}),b=new wr;b.rotation.set(X_,-Math.PI/2-q_,0),s.add(b);let w=y(d,u,E,1),_=new wi(new Jo(1,t?160:256,t?120:192),w);b.add(_);let S=t?220:360,P=g.width,A=g.height,U=g.data,L=(K,et)=>{let q=Math.min(P-1.001,Math.max(0,K*(P-1))),Y=Math.min(A-1.001,Math.max(0,et*(A-1))),at=q|0,Z=Y|0,yt=q-at,Ht=Y-Z,zt=(xe,Vt)=>U[(Vt*P+xe)*4]/255;return Fr(Fr(zt(at,Z),zt(at+1,Z),yt),Fr(zt(at,Z+1),zt(at+1,Z+1),yt),Ht)},V=new Float32Array((S+1)*(S+1)*3),I=new Float32Array((S+1)*(S+1)*2);for(let K=0;K<=S;K++)for(let et=0;et<=S;et++){let q=et/S,Y=K/S,at=K*(S+1)+et,Z=ps(0,.09,Math.min(q,1-q,Y,1-Y)),yt=1+Z_+L(q,Y)*$_*Z,Ht=Q1(X_+(.5-Y)*Y_,q_+(q-.5)*Y_,yt);V.set([Ht.x,Ht.y,Ht.z],at*3),I.set([q,1-Y],at*2)}let z=[];for(let K=0;K<S;K++)for(let et=0;et<S;et++){let q=K*(S+1)+et,Y=q+1,at=q+S+1,Z=at+1;z.push(q,at,Y,Y,at,Z)}let H=new Ti;H.setAttribute("position",new qe(V,3)),H.setAttribute("uv",new qe(I,2)),H.setIndex(z);let O=y(f,p,x,1);b.add(new wi(H,O));let nt=1+Z_+L(.5,.5)*$_,W=new B(0,0,nt+.0075),R=new as(new Pr({map:Wl([[0,"rgba(255,244,222,0.55)"],[.22,"rgba(255,236,205,0.22)"],[.5,"rgba(180,190,230,0.06)"],[1,"rgba(0,0,0,0)"]]),blending:Mn,depthWrite:!1,transparent:!0}));R.scale.setScalar(5.2),s.add(R);let tt=new ke({vertexShader:ew,fragmentShader:iw,uniforms:{uMap:{value:m},uSunDir:v.uSunDir,uOpacity:{value:1}}}),vt=new wi(new Jo(1,64,48),tt);vt.rotation.set(.25,2.2,.1),s.add(vt);let wt=new as(new Pr({map:Wl([[0,"rgba(110,160,255,0.0)"],[.42,"rgba(110,160,255,0.0)"],[.47,"rgba(120,170,255,0.35)"],[.62,"rgba(90,140,255,0.08)"],[1,"rgba(0,0,0,0)"]]),blending:Mn,depthWrite:!1,transparent:!0}));s.add(wt);let $=t?3800:8e3,ht=new Float32Array($*3),St=new Float32Array($),Tt=new Float32Array($*3),_t=new Float32Array($),It=new B(.3,1,.45).normalize();for(let K=0;K<$;K++){let et=new B().randomDirection();K<$*.45&&et.addScaledVector(It,-et.dot(It)*(.85+Math.random()*.15)).normalize(),ht.set([et.x*900,et.y*900,et.z*900],K*3);let q=Math.random();St[K]=q<.92?.8+Math.random()*1.4:2.2+Math.random()*2.2;let Y=Math.random(),at=Y<.15?[1,.82,.62]:Y<.3?[.75,.84,1]:[1,.97,.94],Z=.35+Math.random()*.65;Tt.set([at[0]*Z,at[1]*Z,at[2]*Z],K*3),_t[K]=Math.random()}let pe=new Ti;pe.setAttribute("position",new qe(ht,3)),pe.setAttribute("aSize",new qe(St,1)),pe.setAttribute("aColor",new qe(Tt,3)),pe.setAttribute("aPhase",new qe(_t,1));let Ct=new ke({vertexShader:nw,fragmentShader:rw,transparent:!0,depthWrite:!1,blending:Mn,uniforms:{uTime:{value:0},uPR:{value:n},uBright:{value:1.6}}}),Xt=new Yo(pe,Ct);Xt.frustumCulled=!1,s.add(Xt);let Ut=[Wl([[0,"rgba(255,255,255,1)"],[.08,"rgba(230,240,255,0.95)"],[.25,"rgba(170,195,255,0.35)"],[1,"rgba(0,0,0,0)"]]),Wl([[0,"rgba(255,255,255,1)"],[.08,"rgba(255,230,180,0.95)"],[.25,"rgba(255,170,70,0.35)"],[1,"rgba(0,0,0,0)"]])].map(K=>{let et=new as(new Pr({map:K,blending:Mn,depthWrite:!1,transparent:!0,opacity:0}));return s.add(et),et}),se=new as(new Pr({map:Wl([[0,"rgba(255,255,255,1)"],[.1,"rgba(255,236,200,0.8)"],[.35,"rgba(255,200,120,0.18)"],[1,"rgba(0,0,0,0)"]]),blending:Mn,depthWrite:!1,transparent:!0,opacity:0}));se.position.copy(W),s.add(se);let ce=new ke({vertexShader:lw,fragmentShader:aw,transparent:!0,depthWrite:!1,blending:Mn,uniforms:{uA:{value:0},uCol:{value:new Zt(1,.82,.55)}}}),j=new wi(new Gs(1,1),ce);j.position.set(0,0,nt+.0012),j.scale.setScalar(1e-4),s.add(j);let qt=()=>innerWidth/innerHeight<.9,Ne=()=>{let K=innerWidth/innerHeight,et=Math.tan(15*Wn),q=innerHeight;return K<1?1/(.72*et*K):1/(Math.min(.5,Math.max(.28,(.705*q-250)/q))*et)},Se=(K=Ne())=>(innerWidth/innerHeight<1?.035:.0475+55/innerHeight)*2*K*Math.tan(15*Wn),Qt=.14,Ue=1.05,Ae=new B(0,-Math.sin(Qt),Math.cos(Qt)).multiplyScalar(Ue),F=new B(0,Math.sin(.035),Math.cos(.035)),ve=new B(0,Math.cos(Qt),Math.sin(Qt)),oe=Ae.clone().normalize(),Yt=Math.acos(1/Ue),xt=K=>{let et=-Yt+Fr(-8,qt()?19:8,K)*Wn,q=ve.clone().multiplyScalar(Math.cos(et)).addScaledVector(oe,Math.sin(et));return q.applyAxisAngle(oe,-(qt()?9:21)*Wn),Ae.clone().addScaledVector(q,70)},me=70*Math.tan(2.3*Wn);vt.scale.setScalar(me),wt.scale.setScalar(me*2.6);let lt={mode:"intro",cam:{x:0,y:Se(),z:Ne(),tx:0,ty:Se(),tz:0,fov:30},sun:{theta:112*Wn,tilt:0},fx:{zoom:0,flash:0,bloom:.5,fade:1,vig:1,exposure:2.4},moon:{halo:0},earth:{rise:0,show:0},shadow:{amt:0},orbs:{p:0,i:0,show:0},burst:{a:0,ring:0},names:{prog:0,dissolve:0},scroll:{p:0},pointer:{x:0,y:0,sx:0,sy:0}},Ot=null;function C(K="Great Vibes"){Ot&&(s.remove(Ot),Ot.geometry.dispose());let et=qt(),q=document.createElement("canvas"),Y=1400,at=et?1100:420;q.width=Y,q.height=at;let Z=q.getContext("2d");Z.fillStyle="#fff",Z.textAlign="center",Z.textBaseline="middle";let yt=(N,Q)=>{Z.font=`${Q}px "${K}"`;let k=Z.measureText(N).width;return k>Y*.9?Q*Y*.9/k:Q};if(et){let N=Math.min(yt("Shayma",330),yt("Bilal",330));Z.font=`${N}px "${K}"`,Z.fillText("Shayma",Y/2,at*.24),Z.font=`${N*.6}px "${K}"`,Z.fillText("&",Y/2,at*.52),Z.font=`${N}px "${K}"`,Z.fillText("Bilal",Y/2,at*.78)}else{let N=yt("Shayma & Bilal",250);Z.font=`${N}px "${K}"`,Z.fillText("Shayma & Bilal",Y/2,at*.55)}let Ht=Z.getImageData(0,0,Y,at).data,zt=[],xe=et?4:3;for(let N=0;N<at;N+=xe)for(let Q=0;Q<Y;Q+=xe)Ht[(N*Y+Q)*4+3]>120&&zt.push([Q/Y-.5,.5-N/at]);let Vt=t?7e3:14e3;for(;zt.length>Vt;)zt.splice(Math.random()*zt.length|0,1);let he=F.clone().sub(Ae).normalize(),ge=new B().crossVectors(he,oe).normalize(),ae=new B().crossVectors(ge,he).normalize(),Be=.12,we=(et?55:40)*Wn,ii=Math.tan(we/2),Vi=2*Be*ii*(innerWidth/innerHeight),Ie=Math.min(Vi*(et?.8:.56),2*Be*ii*(et?.5:.62)*Y/at),$e=Ie*at/Y,je=Ae.clone().addScaledVector(he,Be).addScaledVector(ae,(et?.36:.3)*Be*ii),fi=zt.length,ar=new Float32Array(fi*3),Ve=new Float32Array(fi*3),Oe=new Float32Array(fi*4),Hi=new Float32Array(fi*3),Br=[.72,.82,1],ms=[1,.7,.32];zt.forEach(([N,Q],k)=>{let J=je.clone().addScaledVector(ge,N*Ie).addScaledVector(ae,Q*$e);Ve.set([J.x,J.y,J.z],k*3);let Mt=W.clone().add(new B().randomDirection().multiplyScalar(Math.random()*.0015));ar.set([Mt.x,Mt.y,Mt.z],k*3),Oe.set([Math.random(),Math.random(),Math.random(),Math.random()],k*4);let Rt=N<0?Br:ms,bt=N<0?ms:Br,Et=Math.random()<.8?Rt:bt;Hi.set(Et,k*3)});let Gi=new Ti;Gi.setAttribute("position",new qe(Ve.slice(),3)),Gi.setAttribute("aStart",new qe(ar,3)),Gi.setAttribute("aTarget",new qe(Ve,3)),Gi.setAttribute("aRand",new qe(Oe,4)),Gi.setAttribute("aColor",new qe(Hi,3));let T=new ke({vertexShader:sw,fragmentShader:ow,transparent:!0,depthWrite:!1,depthTest:!1,blending:Mn,uniforms:{uProg:{value:0},uTime:{value:0},uDissolve:{value:0},uPR:{value:n},uSize:{value:t?2.6:3},uSpread:{value:Ie*.12},uUp:{value:ae},uRight:{value:ge},uFwd:{value:he}}});Ot=new Yo(Gi,T),Ot.frustumCulled=!1,Ot.renderOrder=10,s.add(Ot)}let M=null;function G(){let K=qt()?.35:1,et=[Ae.clone(),new B(0,-.55,1.45),new B(2.1*K,-.5,2.7),new B(-1.9*K,.45,3.3),new B(.4*K,.15,5.6)],q=[F.clone(),new B(0,.25,.75),new B(.95*K,qt()?-.75:0,0),new B(-.95*K,qt()?-.75:0,0),new B(0,qt()?-1.1:0,0)];M={pos:new Zo(et,!1,"catmullrom",.3),tgt:new Zo(q,!1,"catmullrom",.3)}}let ct=[[0,78],[.3,30],[.62,14],[1,148]],ot=(K,et)=>{for(let q=1;q<K.length;q++)if(et<=K[q][0]){let[Y,at]=K[q-1],[Z,yt]=K[q],Ht=(et-Y)/(Z-Y);return Fr(at,yt,Ht*Ht*(3-2*Ht))}return K[K.length-1][1]},ut=new Fu(i);ut.setPixelRatio(n),ut.setSize(innerWidth,innerHeight),ut.addPass(new Bu(s,o));let mt=new ha(new kt(innerWidth/2,innerHeight/2),.5,.55,.82);ut.addPass(mt);let X=new ca(cw);ut.addPass(X),ut.addPass(new zu);let st=new Ml,dt=new kt;function D(K,et){return dt.set(K/innerWidth*2-1,-(et/innerHeight)*2+1),st.setFromCamera(dt,o),st.ray.intersectsSphere(new Cr(new B,1))}function rt(){o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight,!1),ut.setSize(innerWidth,innerHeight),mt.resolution.set(innerWidth/2,innerHeight/2),X.uniforms.uAspect.value=innerWidth/innerHeight,lt.mode==="intro"&&(lt.cam.z=Ne(),lt.cam.y=lt.cam.ty=Se()),lt.mode==="scroll"&&G()}X.uniforms.uAspect.value=innerWidth/innerHeight;let it=new bl,pt=new B,ft=new B;function gt(){let K=it.getElapsedTime(),et=lt.pointer;et.sx+=(et.x-et.sx)*.05,et.sy+=(et.y-et.sy)*.05;let q=lt.sun.theta;if(lt.mode==="scroll"&&(q=ot(ct,lt.scroll.p)*Wn),v.uSunDir.value.set(Math.sin(q),Math.sin(lt.sun.tilt),Math.cos(q)).normalize(),lt.mode==="scroll"&&M){let Vt=lt.scroll.p;M.pos.getPoint(Vt,pt),M.tgt.getPoint(Vt,ft),o.position.copy(pt),o.fov=Fr(qt()?55:40,qt()?42:32,ps(0,.3,Vt)),o.up.copy(pt).normalize().lerp(new B(0,1,0),ps(0,.25,Vt)).normalize(),o.lookAt(ft)}else{let Vt=lt.cam,he=lt.mode==="intro"?1:0;o.position.set(Vt.x+(Math.sin(K*.13)*.05+et.sx*.25)*he*Vt.z*.1,Vt.y+(Math.cos(K*.11)*.04-et.sy*.18)*he*Vt.z*.1,Vt.z),o.fov=Vt.fov;let ge=ps(1.15,1.03,o.position.length());o.up.set(0,1,0).lerp(o.position.clone().normalize(),ge*.98).normalize(),o.lookAt(Vt.tx,Vt.ty,Vt.tz)}o.updateProjectionMatrix(),v.uExposure.value=lt.mode==="scroll"?Fr(lt.fx.exposure,t?1.5:1.7,ps(0,.2,lt.scroll.p)):lt.fx.exposure,O.uniforms.uShadowAmt.value=lt.mode==="scroll"?lt.shadow.amt*(1-ps(0,.08,lt.scroll.p)):lt.shadow.amt,R.material.opacity=lt.moon.halo*(.55+.45*ps(1.6,4,o.position.length()));let Y=xt(lt.earth.rise);vt.position.copy(Y),wt.position.copy(Y),vt.rotation.y+=4e-4,tt.uniforms.uOpacity.value=lt.earth.show,wt.material.opacity=lt.earth.show,vt.visible=wt.visible=lt.earth.show>.001;let at=lt.orbs.p,Z=1-Math.pow(1-at,2.2),yt=Fr(.075,0,Z),Ht=Z*Math.PI*6.2+.4,zt=Fr(.05,0,Z);for(let Vt=0;Vt<2;Vt++){let he=Ht+Vt*Math.PI,ge=v.uOrbPos.value[Vt].set(W.x+Math.cos(he)*yt,W.y+Math.sin(he)*yt*.85,W.z+zt+Math.sin(he*2)*.002*(1-Z));Ut[Vt].position.copy(ge);let ae=.9+.1*Math.sin(K*9+Vt*2);Ut[Vt].material.opacity=lt.orbs.show,Ut[Vt].scale.setScalar(.011*ae*(.7+lt.orbs.show*.3)),v.uOrbI.value[Vt]=lt.orbs.i*ae}if(se.material.opacity=lt.burst.a,se.scale.setScalar(.004+lt.burst.a*.05),j.scale.setScalar(1e-4+lt.burst.ring*.33),ce.uniforms.uA.value=(1-lt.burst.ring)*(lt.burst.ring>0?1.6:0),Ot){let Vt=Ot.material.uniforms;Vt.uProg.value=lt.names.prog,Vt.uTime.value=K,Vt.uDissolve.value=lt.mode==="scroll"?ps(0,.07,lt.scroll.p):lt.names.dissolve,Ot.visible=lt.names.prog>0&&Vt.uDissolve.value<1}Ct.uniforms.uTime.value=K,mt.strength=lt.fx.bloom;let xe=X.uniforms;xe.uZoom.value=lt.fx.zoom,xe.uFlash.value=lt.fx.flash,xe.uFade.value=lt.fx.fade,xe.uVig.value=lt.fx.vig,ut.render()}return i.setAnimationLoop(gt),{S:lt,M:W,renderer:i,camera:o,resize:rt,hitMoon:D,buildNames:C,buildScrollPath:G,introDist:Ne,introY:Se,poses:{landPos:Ae,landTarget:F,landFov:()=>qt()?55:40},pause(K){i.setAnimationLoop(K?null:gt)}}}var Qe="#d9b56c";function ki(r,t,e,i=0){let n=e*.7654,s=[];for(let o=0;o<16;o++){let a=i+o*Math.PI/8-Math.PI/2,l=o%2?n:e;s.push(`${(r+Math.cos(a)*l).toFixed(2)},${(t+Math.sin(a)*l).toFixed(2)}`)}return s.join(" ")}function uw(r,t,e,i,n){let s=1-n;return[s*s*s*r[0]+3*s*s*n*t[0]+3*s*n*n*e[0]+n*n*n*i[0],s*s*s*r[1]+3*s*s*n*t[1]+3*s*n*n*e[1]+n*n*n*i[1]]}function Ep(r,t,{spring:e=.42,inset:i=0,lobes:n=0,peak:s=.06}={}){let o=Math.max(t*e,r*.55)+i,a=[i,o],l=[i,o*.4],c=[r*.16+i*.5,i+t*s*.3],h=[r/2,i];if(!n){let m=[r-i,o],g=[r-i,o*.4],v=[r-(r*.16+i*.5),i+t*s*.3];return`M${i},${t} L${a} C${l} ${c} ${h} C${v} ${g} ${m} L${r-i},${t}`}let d=n,u=[];for(let m=0;m<=d;m++)u.push(uw(a,l,c,h,m/d));let f=u.slice(0,-1).reverse().map(([m,g])=>[r-m,g]),p=u.concat(f),x=`M${i},${t} L${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;for(let m=1;m<p.length;m++){let[g,v]=p[m-1],[E,y]=p[m],b=Math.hypot(E-g,y-v)/2*1.08;x+=` A${b.toFixed(1)},${b.toFixed(1)} 0 0 1 ${E.toFixed(1)},${y.toFixed(1)}`}return x+` L${r-i},${t}`}function fw(r,t,{lobes:e=11,glow:i=!0,fill:n=!1}={}){let s=Ep(r,t,{inset:1.5}),o=Ep(r,t,{inset:9}),a=Ep(r,t,{inset:17,lobes:e}),l=1.5;return`<svg viewBox="0 0 ${r} ${t}" width="${r}" height="${t}" fill="none" aria-hidden="true">
    <defs><linearGradient id="ag${r|0}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f3dc9e"/><stop offset=".5" stop-color="${Qe}"/><stop offset="1" stop-color="#8a6a2e" stop-opacity=".0"/></linearGradient>
      <linearGradient id="af${r|0}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e3a3a" stop-opacity=".82"/><stop offset=".35" stop-color="#070b1e" stop-opacity=".9"/><stop offset="1" stop-color="#05061a" stop-opacity=".94"/></linearGradient></defs>
    ${n?`<path d="${s} Z" fill="url(#af${r|0})"/>`:""}
    <path class="draw" d="${s}" stroke="url(#ag${r|0})" stroke-width="1.6"${i?' filter="drop-shadow(0 0 6px rgba(217,181,108,.55))"':""}/>
    <path class="draw" d="${o}" stroke="url(#ag${r|0})" stroke-width=".7" opacity=".55"/>
    <path class="draw" d="${a}" stroke="url(#ag${r|0})" stroke-width="1.1"/>
    <polygon class="pop" points="${ki(r/2,l+2,7)}" fill="#0a0d24" stroke="${Qe}" stroke-width="1.1" transform="translate(0,-10)"/>
    <circle class="pop" cx="${r/2}" cy="${l-8}" r="1.6" fill="${Qe}"/>
  </svg>`}function dw(){let r=["#1d4f8f","#0f6b57","#a8462a","#0f6b57"],t="<svg xmlns='http://www.w3.org/2000/svg' width='240' height='60' viewBox='0 0 240 60'><rect width='240' height='60' fill='#0a0e26'/>";for(let e=0;e<4;e++){let i=30+e*60;t+=`<polygon points='${ki(i,30,25)}' fill='${r[e]}' stroke='${Qe}' stroke-width='1.2'/>`,t+=`<polygon points='${ki(i,30,11,Math.PI/8)}' fill='#efe4cc' stroke='${Qe}' stroke-width='.8'/>`,t+=`<circle cx='${i}' cy='30' r='3' fill='${r[(e+2)%4]}'/>`,t+=`<polygon points='${i+30},18 ${i+36},30 ${i+30},42 ${i+24},30' fill='#efe4cc' stroke='${Qe}' stroke-width='.8'/>`,t+=`<polygon points='${i},-6 ${i+6},2 ${i},10 ${i-6},2' fill='${Qe}' opacity='.55'/><polygon points='${i},50 ${i+6},58 ${i},66 ${i-6},58' fill='${Qe}' opacity='.55'/>`}return t+=`<line x1='0' y1='.6' x2='240' y2='.6' stroke='${Qe}'/><line x1='0' y1='59.4' x2='240' y2='59.4' stroke='${Qe}'/></svg>`,`url("data:image/svg+xml,${encodeURIComponent(t)}")`}function pw(r=.09){let t=`<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='${Qe}' stroke-width='.8' opacity='${r}'>
    <polygon points='${ki(60,60,34)}'/><polygon points='${ki(60,60,16,Math.PI/8)}'/>
    <polygon points='${ki(0,0,34)}'/><polygon points='${ki(120,0,34)}'/><polygon points='${ki(0,120,34)}'/><polygon points='${ki(120,120,34)}'/>
    <path d='M60 26 L60 0 M60 94 L60 120 M26 60 L0 60 M94 60 L120 60'/></g></svg>`;return`url("data:image/svg+xml,${encodeURIComponent(t)}")`}function mw(){return`<svg viewBox="0 0 360 30" fill="none" aria-hidden="true">
    <defs><linearGradient id="dl" x1="0" x2="1"><stop offset="0" stop-color="${Qe}" stop-opacity="0"/><stop offset="1" stop-color="${Qe}"/></linearGradient>
    <linearGradient id="dr" x1="1" x2="0"><stop offset="0" stop-color="${Qe}" stop-opacity="0"/><stop offset="1" stop-color="${Qe}"/></linearGradient></defs>
    <path class="draw" d="M8 15 H146" stroke="url(#dl)" stroke-width="1"/><path class="draw" d="M352 15 H214" stroke="url(#dr)" stroke-width="1"/>
    <polygon class="pop" points="152,15 158,10 164,15 158,20" fill="${Qe}"/><polygon class="pop" points="208,15 202,10 196,15 202,20" fill="${Qe}"/>
    <polygon class="pop spin" points="${ki(180,15,12)}" stroke="${Qe}" stroke-width="1.2" fill="#0a0d24"/>
    <polygon class="pop" points="${ki(180,15,5,Math.PI/8)}" fill="${Qe}"/>
  </svg>`}function gw(){return`<svg viewBox="0 0 60 60" fill="none" aria-hidden="true"><path d="M2 58 V18 Q2 2 18 2 H58" stroke="${Qe}" stroke-width="1.2"/>
    <path d="M8 58 V22 Q8 8 22 8 H58" stroke="${Qe}" stroke-width=".6" opacity=".6"/>
    <polygon points="${ki(15,15,6)}" fill="${Qe}"/></svg>`}function Q_(r=document){r.querySelectorAll("[data-divider]").forEach(i=>{i.innerHTML=mw()}),r.querySelectorAll("[data-corners]").forEach(i=>{["tl","tr","bl","br"].forEach(n=>{let s=document.createElement("span");s.className=`corner ${n}`,s.innerHTML=gw(),i.appendChild(s)})}),document.documentElement.style.setProperty("--zellige",dw()),document.documentElement.style.setProperty("--khatam",pw());let t=()=>r.querySelectorAll("[data-arch]").forEach(i=>{let n=i.getBoundingClientRect();n.width&&(i.innerHTML=fw(Math.round(n.width),Math.round(n.height),{lobes:+(i.dataset.lobes||11),fill:"fill"in i.dataset}))});t();let e;return addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(t,150)}),{arches:t}}ne.registerPlugin(Kt,Fs);var de=(r,t=document)=>t.querySelector(r),wn=(r,t=document)=>[...t.querySelectorAll(r)],qn=window.CONFIG||{},Ap=Math.PI/180,Lp=matchMedia("(prefers-reduced-motion: reduce)").matches,Dp=matchMedia("(pointer: coarse)").matches||innerWidth<760,j_=r=>new Promise(t=>setTimeout(t,r));"scrollRestoration"in history&&(history.scrollRestoration="manual");scrollTo(0,0);document.documentElement.style.setProperty("--star",`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><polygon points='${ki(25,25,22)}' fill='none' stroke='#d9b56c' stroke-width='1.5'/><polygon points='${ki(25,25,9,Math.PI/8)}' fill='#d9b56c'/></svg>`)}")`);var da=new Xg({lerp:.085,smoothWheel:!0});da.stop();da.on("scroll",Kt.update);ne.ticker.add(r=>da.raf(r*1e3));ne.ticker.lagSmoothing(0);var Xl=de("#ldStar");Xl.setAttribute("points",ki(50,50,40));var rx=Xl.getTotalLength?Xl.getTotalLength():400;Xl.style.strokeDasharray=rx;var ku=0;function Cp(r){ne.to({v:ku},{v:r,duration:.5,onUpdate(){ku=this.targets()[0].v,Xl.style.strokeDashoffset=rx*(1-ku),de(".ld-pct").textContent=Math.round(ku*100)}})}Cp(.02);var rn=de("#music"),Xn=!1,Vu=!1,ql=(()=>{try{let r=document.createElement("audio");return r.volume=.5,Math.abs(r.volume-.5)<.01}catch{return!1}})(),Rp=qn.recitation||qn.musique,Np=!!qn.recitation,Hu=qn.volume??.55;rn.loop=!Np;Rp&&(de(".sound-hint").hidden=!1,rn.addEventListener("error",()=>{de(".sound-hint").hidden=!0,de("#sound").hidden=!0},{once:!0}),rn.src=Rp);rn.addEventListener("ended",()=>{Np&&(Vu=!0,Xn=!0,de("#sound").classList.add("off"),de("#sound").setAttribute("aria-label","R\xE9\xE9couter la r\xE9citation"))});var fa={v:0};function Pp(){ql&&(rn.volume=Math.min(1,Math.max(0,fa.v)))}function sx(){if(!Rp||rn.error)return;try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}fa.v=ql?0:Hu,Pp();let r=rn.play(),t=()=>{de("#sound").hidden=!1,ql&&ne.to(fa,{v:Hu,duration:Np?1.5:5,ease:"sine.inOut",onUpdate:Pp})},e=()=>{Xn=!0,de("#sound").hidden=!1,de("#sound").classList.add("off"),de("#sound").setAttribute("aria-label","\xC9couter la r\xE9citation")};r&&r.then?r.then(t).catch(e):t()}de("#sound").addEventListener("click",()=>{Vu&&(Vu=!1,rn.currentTime=0),Xn=!Xn,de("#sound").classList.toggle("off",Xn),de("#sound").setAttribute("aria-label",Xn?"Remettre le son":"Couper le son"),ne.killTweensOf(fa),Xn||(ql||(fa.v=Hu),rn.play().catch(()=>{})),ql?ne.to(fa,{v:Xn?0:Hu,duration:1,ease:"sine.inOut",onUpdate:Pp,onComplete(){Xn&&rn.pause()}}):Xn&&rn.pause()});document.addEventListener("visibilitychange",()=>{!rn.src||Xn||Vu||rn.paused===document.hidden||(document.hidden?rn.pause():pa&&rn.play().catch(()=>{}))});var ua=de("#cursor");if(matchMedia("(pointer: fine)").matches&&!Lp){document.body.classList.add("has-cursor");let r=ne.quickTo(ua,"x",{duration:.35,ease:"power3"}),t=ne.quickTo(ua,"y",{duration:.35,ease:"power3"});addEventListener("pointermove",e=>{r(e.clientX),t(e.clientY)}),document.addEventListener("pointerover",e=>{e.target.closest("a,button,summary")&&ua.classList.add("big")}),document.addEventListener("pointerout",e=>{e.target.closest("a,button,summary")&&ua.classList.remove("big")})}function _w(){let r=qn.date?new Date(qn.date):null,t=r&&!isNaN(r);de("#iDate").textContent=t?r.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"Bient\xF4t, in sh\xE2\u2019 All\xE2h",de("#iHeure").textContent=t?r.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}).replace(":","h"):"\xC0 venir";let e=[qn.lieu,qn.adresse].filter(Boolean);if(de("#iLieu").textContent=e.length?e.join(" \u2014 "):"\xC0 venir",e.length){let a=de("#bMaps");a.href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(e.join(", ")),a.hidden=!1}if(qn.whatsapp){let a=de("#bRsvp");a.href=`https://wa.me/${String(qn.whatsapp).replace(/\D/g,"")}?text=${encodeURIComponent(qn.messageRsvp||"")}`,a.hidden=!1}if(!t)return;let i=de("#bCal");i.hidden=!1,i.addEventListener("click",()=>{let a=h=>h.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),l=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//shayma-bilal//fr","BEGIN:VEVENT",`UID:${Date.now()}@shayma-bilal`,`DTSTAMP:${a(new Date)}`,`DTSTART:${a(r)}`,`DTEND:${a(new Date(r.getTime()+144e5))}`,"SUMMARY:Fian\xE7ailles de Shayma & Bilal",`LOCATION:${e.join(", ").replace(/,/g,"\\,")}`,"END:VEVENT","END:VCALENDAR"].join(`\r
`),c=document.createElement("a");c.href=URL.createObjectURL(new Blob([l],{type:"text/calendar"})),c.download="fiancailles-shayma-bilal.ics",c.click()});let n=de("#countdown"),s=(a,l)=>{let c=de(a),h=String(l);c.textContent!==h&&(c.textContent=h,ne.fromTo(c,{y:-8,opacity:.3},{y:0,opacity:1,duration:.5,ease:"power3.out"}))},o=()=>{let a=r-Date.now();if(n.hidden=!1,a<=0)return n.innerHTML='<p class="accent">C\u2019est le grand jour \u2728</p>',!0;s("#cdJ",Math.floor(a/864e5)),s("#cdH",Math.floor(a/36e5)%24),s("#cdM",Math.floor(a/6e4)%60),s("#cdS",Math.floor(a/1e3)%60)};if(!o()){let a=setInterval(()=>{o()&&clearInterval(a)},1e3)}}function ox(r,{duration:t=2.2,delay:e=0}={}){let i=ne.timeline({delay:e}),n=wn(".draw",r);return n.forEach(s=>{let o=s.getTotalLength();s.style.strokeDasharray=o,s.style.strokeDashoffset=o}),i.to(n,{strokeDashoffset:0,duration:t,ease:"power2.inOut",stagger:.18}),i.from(wn(".pop",r),{scale:0,opacity:0,transformOrigin:"50% 50%",duration:.8,ease:"back.out(2)",stagger:.08},t*.6),i}var pa=!1,tx=!1,Ip=null,ei=null;async function xw(){if(Q_(),_w(),!J_())return nx();try{ei=await K_(de("#gl"),{mobile:Dp,onProgress:r=>Cp(.05+r*.9)})}catch(r){return console.error(r),nx()}await Promise.race([Promise.all([document.fonts.ready,document.fonts.load('200px "Great Vibes"'),document.fonts.load('40px "Amiri Quran"')]),j_(3500)]),ei.buildNames(),Cp(1),await j_(550),addEventListener("resize",vw),yw()}var ex=innerWidth/innerHeight<.9;function vw(){if(!ei)return;ei.resize();let r=innerWidth/innerHeight<.9;r!==ex&&ei.S.names.prog===0&&ei.buildNames(),ex=r}function yw(){let r=ei.S,t=Fs.create(".qamar-lat",{type:"chars"}),e=ne.timeline();e.to("#loader",{autoAlpha:0,duration:1.1,ease:"power2.inOut"}).add(()=>document.body.classList.remove("loading")).to(r.fx,{fade:0,duration:2.4,ease:"power2.out"},.2).fromTo(r.sun,{theta:122*Ap},{theta:35*Ap,duration:4.6,ease:"power2.inOut"},.2).to(r.moon,{halo:1,duration:3},1.8).fromTo(r.cam,{z:ei.introDist()*1.4},{z:ei.introDist(),duration:5,ease:"expo.out"},.2).add(ox(de(".intro-arch"),{duration:2.6}),1.4).from(".kicker",{opacity:0,y:16,duration:1.2,ease:"power3.out"},2.2).from(".qamar",{opacity:0,y:30,scale:.94,filter:"blur(14px)",duration:1.8,ease:"expo.out"},2.4).from(t.chars,{opacity:0,y:12,filter:"blur(6px)",stagger:.07,duration:1,ease:"power3.out"},2.9).from(".enter",{opacity:0,y:24,duration:1.2,ease:"expo.out"},3.4).from(".sound-hint",{opacity:0,duration:1},3.9).add(()=>{ne.to(".enter-ring",{scale:1.08,opacity:.55,duration:1.4,ease:"sine.inOut",yoyo:!0,repeat:-1}),Sw()},3.6),Lp&&e.progress(1)}function Sw(){let r=de("#gl"),t=e=>{if(ei.S.pointer.x=e.clientX/innerWidth*2-1,ei.S.pointer.y=e.clientY/innerHeight*2-1,pa)return;let i=ei.hitMoon(e.clientX,e.clientY);r.style.cursor=i?"pointer":"",ua.classList.toggle("big",i)};addEventListener("pointermove",t),r.addEventListener("click",e=>{ei.hitMoon(e.clientX,e.clientY)&&ix()}),de("#enter").addEventListener("click",ix)}function ix(){if(pa)return;pa=!0,sx(),navigator.vibrate?.(18),ua.classList.remove("big"),ne.killTweensOf(".enter-ring");let r=ei.S,t=ei.poses,e=Fs.create(".ar-hero",{type:"words"});de("#skip").hidden=!1,ne.from("#skip",{opacity:0,duration:1,delay:1.5});let i=ne.timeline({onComplete:ax});Ip=i,i.to(".intro-top > *",{y:-34,opacity:0,filter:"blur(10px)",stagger:.07,duration:.8,ease:"power2.in"},0).to(".intro-bottom",{y:34,opacity:0,duration:.6,ease:"power2.in"},0).to(".intro-arch",{scale:1.35,opacity:0,duration:1.6,ease:"power2.in"},.05).set("#intro",{display:"none"},1.7).to(r.cam,{z:ei.introDist()*1.07,duration:.7,ease:"power2.out"},0).to(r.cam,{y:0,ty:0,z:1.3,fov:56,duration:3.1,ease:"expo.inOut"},.6).to(r.fx,{zoom:.17,duration:1.5,ease:"power3.in"},1).to(r.fx,{zoom:0,duration:1.7,ease:"power3.out"},2.5).to(r.moon,{halo:0,duration:1.4},1).to(r.sun,{theta:78*Ap,duration:6.5,ease:"sine.inOut"},.8).to(r.cam,{x:t.landPos.x,y:t.landPos.y,z:t.landPos.z,tx:t.landTarget.x,ty:t.landTarget.y,tz:t.landTarget.z,fov:t.landFov(),duration:3.8,ease:"power3.inOut"},3.3).to(r.shadow,{amt:1,duration:2.6,ease:"power1.inOut"},4.2).to(r.fx,{exposure:1.5,bloom:.4,duration:3,ease:"power1.inOut"},4).to(".frame-fixed",{opacity:1,duration:2},5.8).set(r.earth,{show:1},5).fromTo(r.earth,{rise:0},{rise:1,duration:7.5,ease:"power1.out"},5).to(".bism",{opacity:1,duration:1.4,ease:"power2.out"},6.6).set(".ar-hero",{opacity:1},7).from(e.words,{opacity:0,y:24,filter:"blur(12px)",duration:1.6,stagger:.28,ease:"expo.out"},7).fromTo(".fr-hero",{opacity:0,y:14},{opacity:1,y:0,duration:1.4,ease:"power3.out"},7.9).to(".st-verse .ref",{opacity:.9,duration:1.2},8.4).to(r.orbs,{show:1,i:1.5,duration:1.3,ease:"power2.out"},8.6).fromTo(r.orbs,{p:0},{p:1,duration:4.6,ease:"power1.in"},8.6).to(".st-verse",{opacity:0,y:-24,filter:"blur(8px)",duration:1.1,ease:"power2.in"},12).to(r.orbs,{i:10,duration:.25,ease:"power2.in"},12.95).to(r.fx,{flash:.6,bloom:1.9,duration:.2,ease:"power2.in"},13.05).to(r.burst,{a:1,duration:.15},13.1).add(()=>navigator.vibrate?.([25,40,35]),13.15).to(r.orbs,{i:0,show:0,duration:1.2,ease:"power2.out"},13.25).to(r.fx,{flash:0,duration:1.5,ease:"power2.out"},13.25).to(r.fx,{bloom:Dp?.42:.55,duration:3,ease:"power2.out"},13.3).to(r.burst,{a:0,duration:1.8,ease:"power2.out"},13.3).fromTo(r.burst,{ring:0},{ring:1,duration:2.6,ease:"expo.out"},13.15).fromTo(r.names,{prog:0},{prog:1,duration:3.3,ease:"none"},13.15).fromTo(".sub1",{opacity:0,y:16,letterSpacing:".6em"},{opacity:1,y:0,letterSpacing:".32em",duration:1.8,ease:"expo.out"},15.4).fromTo(".sub2",{opacity:0,y:12},{opacity:1,y:0,duration:1.4,ease:"power3.out"},15.9).to(".scroll-cue",{autoAlpha:1,duration:1.2},16.6).set("#skip",{display:"none"},16.6),Lp&&i.progress(1)}de("#skip").addEventListener("click",()=>Ip&&Ip.progress(1));function ax(){tx||(tx=!0,document.body.classList.remove("locked"),ei&&(ei.S.mode="scroll",ei.buildScrollPath()),da.start(),Mw(),Kt.refresh())}function Mw(){ei&&ne.to(ei.S.scroll,{p:1,ease:"none",scrollTrigger:{trigger:"#content",start:"top top",end:"bottom bottom",scrub:1.4}}),de(".sc-btn").addEventListener("click",()=>da.scrollTo("#verset",{duration:1.8})),ne.to(".st-sub, .scroll-cue",{autoAlpha:0,y:-50,ease:"none",stagger:.02,scrollTrigger:{trigger:".landing-space",start:"top top",end:"45% top",scrub:!0}});let r=de(".progress");ne.to(r,{opacity:Dp?0:1,duration:1}),Kt.create({trigger:"#content",start:"top top",end:"bottom bottom",onUpdate:s=>{ne.set(".pg-line",{scaleY:s.progress}),ne.set(".pg-star",{y:s.progress*r.offsetHeight-4})}}),wn(".split-fr").forEach(s=>Fs.create(s,{type:"lines",mask:"lines",autoSplit:!0,onSplit:o=>ne.from(o.lines,{yPercent:110,opacity:0,duration:1.3,stagger:.1,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 86%",once:!0}})})),wn(".split-ar").forEach(s=>{let o=Fs.create(s,{type:"words",wordsClass:"w-ar"});ne.from(o.words,{opacity:0,y:26,filter:"blur(10px)",duration:1.5,stagger:.07,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 85%",once:!0}})}),wn(".rv").forEach(s=>ne.from(s,{opacity:0,y:34,filter:"blur(6px)",duration:1.3,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 88%",once:!0}})),wn("#content [data-arch], #content [data-divider]").forEach(s=>{let o=ox(s,{duration:s.matches("[data-divider]")?1.6:2.6});o.pause(),Kt.create({trigger:s,start:"top 82%",once:!0,onEnter:()=>o.play()})}),wn("#content .divider .spin").forEach(s=>ne.to(s,{rotation:360,transformOrigin:"50% 50%",duration:22,repeat:-1,ease:"none"})),ne.to(".pair-star",{rotation:360,duration:30,repeat:-1,ease:"none"}),wn(".card, .verse-frame").forEach(s=>ne.fromTo(s,{y:80,scale:.94,opacity:0},{y:0,scale:1,opacity:1,ease:"expo.out",duration:1.6,scrollTrigger:{trigger:s,start:"top 92%",once:!0}})),wn(".rings i").forEach((s,o)=>ne.from(s,{x:o%2?40:-40,opacity:0,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 85%",once:!0}}));let t=wn(".hcard");t.forEach((s,o)=>{s.style.setProperty("--i",o),ne.from(s,{y:120,rotateX:-12,opacity:0,duration:1.4,ease:"expo.out",transformPerspective:900,scrollTrigger:{trigger:s,start:"top 95%",once:!0}}),o<t.length-1&&ne.to(s,{scale:.92,opacity:.35,ease:"none",scrollTrigger:{trigger:t[o+1],start:"top 85%",end:"top 20%",scrub:!0}})}),wn(".lanterns").forEach(s=>ne.from(wn(".lantern",s),{yPercent:-120,duration:2.2,ease:"elastic.out(1,0.45)",stagger:.18,scrollTrigger:{trigger:s.parentElement,start:"top 75%",once:!0}}));let e=wn(".lantern").map(s=>ne.quickSetter(s,"rotation","deg")),i=0,n=0;da.on("scroll",s=>{i=s.velocity}),ne.ticker.add(s=>{n+=(Math.max(-16,Math.min(16,i*.7))-n)*.06,i*=.9,e.forEach((o,a)=>o(Math.sin(s*1.2+a*1.7)*2.5-n))})}function nx(){document.body.classList.add("no-gl"),de("#fallback").hidden=!1,ne.to("#loader",{autoAlpha:0,duration:.8}),document.body.classList.remove("loading"),de(".frame-fixed").style.opacity=1,de("#enter").addEventListener("click",()=>{if(pa)return;pa=!0,sx(),ne.to("#intro, #fallback",{autoAlpha:0,duration:1});let r=document.createElement("p");r.className="script huge",r.textContent="Shayma & Bilal",r.style.cssText="position:absolute;left:0;right:0;top:44%;text-align:center;font-size:clamp(3rem,13vw,7rem)",de("#stage").appendChild(r),ne.to(".bism, .ar-hero, .fr-hero, .st-verse .ref, .sub1, .sub2, .scroll-cue",{autoAlpha:1,duration:1.2,stagger:.15}),ax()})}xw();
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
