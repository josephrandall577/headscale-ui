import"./index.DDwUPhoj.js";import{g as x}from"./scheduler.CxMg9YiE.js";import{u as ee,d as te,a as se,b as z,c as ne,e as J,U as Se,g as $,D as Me,A as re,h as Re,P as we}from"./stores.B5fiO9R7.js";function yt(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function w(t){return Array.isArray?Array.isArray(t):ue(t)==="[object Array]"}const Le=1/0;function ve(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Le?"-0":e}function xe(t){return t==null?"":ve(t)}function M(t){return typeof t=="string"}function le(t){return typeof t=="number"}function Pe(t){return t===!0||t===!1||Oe(t)&&ue(t)=="[object Boolean]"}function de(t){return typeof t=="object"}function Oe(t){return de(t)&&t!==null}function I(t){return t!=null}function B(t){return!t.trim().length}function ue(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Ne="Incorrect 'index' type",Ee=t=>`Invalid value for key ${t}`,Ue=t=>`Pattern length exceeds max of ${t}.`,ke=t=>`Missing ${t} property in key`,Ke=t=>`Property 'weight' in key '${t}' must be a positive integer`,ie=Object.prototype.hasOwnProperty;class $e{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(i=>{let a=fe(i);this._keys.push(a),this._keyMap[a.id]=a,s+=a.weight}),this._keys.forEach(i=>{i.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function fe(t){let e=null,s=null,i=null,a=1,n=null;if(M(t)||w(t))i=t,e=ae(t),s=W(t);else{if(!ie.call(t,"name"))throw new Error(ke("name"));const r=t.name;if(i=r,ie.call(t,"weight")&&(a=t.weight,a<=0))throw new Error(Ke(r));e=ae(r),s=W(r),n=t.getFn}return{path:e,id:s,weight:a,src:i,getFn:n}}function ae(t){return w(t)?t:t.split(".")}function W(t){return w(t)?t.join("."):t}function be(t,e){let s=[],i=!1;const a=(n,r,c)=>{if(I(n))if(!r[c])s.push(n);else{let o=r[c];const l=n[o];if(!I(l))return;if(c===r.length-1&&(M(l)||le(l)||Pe(l)))s.push(xe(l));else if(w(l)){i=!0;for(let h=0,u=l.length;h<u;h+=1)a(l[h],r,c+1)}else r.length&&a(l,r,c+1)}};return a(t,M(e)?e.split("."):e,0),i?s:s[0]}const _e={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Te={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},je={location:0,threshold:.6,distance:100},Ce={useExtendedSearch:!1,getFn:be,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var d={...Te,..._e,...je,...Ce};const De=/[^ ]+/g;function Fe(t=1,e=3){const s=new Map,i=Math.pow(10,e);return{get(a){const n=a.match(De).length;if(s.has(n))return s.get(n);const r=1/Math.pow(n,.5*t),c=parseFloat(Math.round(r*i)/i);return s.set(n,c),c},clear(){s.clear()}}}class X{constructor({getFn:e=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){this.norm=Fe(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,i)=>{this._keysMap[s.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,M(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();M(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,i=this.size();s<i;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!I(e)||B(e))return;let i={v:e,i:s,n:this.norm.get(e)};this.records.push(i)}_addObject(e,s){let i={i:s,$:{}};this.keys.forEach((a,n)=>{let r=a.getFn?a.getFn(e):this.getFn(e,a.path);if(I(r)){if(w(r)){let c=[];const o=[{nestedArrIndex:-1,value:r}];for(;o.length;){const{nestedArrIndex:l,value:h}=o.pop();if(I(h))if(M(h)&&!B(h)){let u={v:h,i:l,n:this.norm.get(h)};c.push(u)}else w(h)&&h.forEach((u,f)=>{o.push({nestedArrIndex:f,value:u})})}i.$[n]=c}else if(M(r)&&!B(r)){let c={v:r,n:this.norm.get(r)};i.$[n]=c}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function ge(t,e,{getFn:s=d.getFn,fieldNormWeight:i=d.fieldNormWeight}={}){const a=new X({getFn:s,fieldNormWeight:i});return a.setKeys(t.map(fe)),a.setSources(e),a.create(),a}function Be(t,{getFn:e=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){const{keys:i,records:a}=t,n=new X({getFn:e,fieldNormWeight:s});return n.setKeys(i),n.setIndexRecords(a),n}function j(t,{errors:e=0,currentLocation:s=0,expectedLocation:i=0,distance:a=d.distance,ignoreLocation:n=d.ignoreLocation}={}){const r=e/t.length;if(n)return r;const c=Math.abs(i-s);return a?r+c/a:c?1:r}function ze(t=[],e=d.minMatchCharLength){let s=[],i=-1,a=-1,n=0;for(let r=t.length;n<r;n+=1){let c=t[n];c&&i===-1?i=n:!c&&i!==-1&&(a=n-1,a-i+1>=e&&s.push([i,a]),i=-1)}return t[n-1]&&n-i>=e&&s.push([i,n-1]),s}const E=32;function Je(t,e,s,{location:i=d.location,distance:a=d.distance,threshold:n=d.threshold,findAllMatches:r=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,includeMatches:o=d.includeMatches,ignoreLocation:l=d.ignoreLocation}={}){if(e.length>E)throw new Error(Ue(E));const h=e.length,u=t.length,f=Math.max(0,Math.min(i,u));let g=n,p=f;const y=c>1||o,O=y?Array(u):[];let R;for(;(R=t.indexOf(e,p))>-1;){let A=j(e,{currentLocation:R,expectedLocation:f,distance:a,ignoreLocation:l});if(g=Math.min(A,g),p=R+h,y){let L=0;for(;L<h;)O[R+L]=1,L+=1}}p=-1;let k=[],N=1,_=h+u;const Ae=1<<h-1;for(let A=0;A<h;A+=1){let L=0,v=_;for(;L<v;)j(e,{errors:A,currentLocation:f+v,expectedLocation:f,distance:a,ignoreLocation:l})<=g?L=v:_=v,v=Math.floor((_-L)/2+L);_=v;let Z=Math.max(1,f-v+1),F=r?u:Math.min(f+v,u)+h,K=Array(F+2);K[F+1]=(1<<A)-1;for(let S=F;S>=Z;S-=1){let T=S-1,q=s[t.charAt(T)];if(y&&(O[T]=+!!q),K[S]=(K[S+1]<<1|1)&q,A&&(K[S]|=(k[S+1]|k[S])<<1|1|k[S+1]),K[S]&Ae&&(N=j(e,{errors:A,currentLocation:T,expectedLocation:f,distance:a,ignoreLocation:l}),N<=g)){if(g=N,p=T,p<=f)break;Z=Math.max(1,2*f-p)}}if(j(e,{errors:A+1,currentLocation:f,expectedLocation:f,distance:a,ignoreLocation:l})>g)break;k=K}const D={isMatch:p>=0,score:Math.max(.001,N)};if(y){const A=ze(O,c);A.length?o&&(D.indices=A):D.isMatch=!1}return D}function We(t){let e={};for(let s=0,i=t.length;s<i;s+=1){const a=t.charAt(s);e[a]=(e[a]||0)|1<<i-s-1}return e}class pe{constructor(e,{location:s=d.location,threshold:i=d.threshold,distance:a=d.distance,includeMatches:n=d.includeMatches,findAllMatches:r=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,isCaseSensitive:o=d.isCaseSensitive,ignoreLocation:l=d.ignoreLocation}={}){if(this.options={location:s,threshold:i,distance:a,includeMatches:n,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:l},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(f,g)=>{this.chunks.push({pattern:f,alphabet:We(f),startIndex:g})},u=this.pattern.length;if(u>E){let f=0;const g=u%E,p=u-g;for(;f<p;)h(this.pattern.substr(f,E),f),f+=E;if(g){const y=u-E;h(this.pattern.substr(y),y)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:i}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let p={isMatch:!0,score:0};return i&&(p.indices=[[0,e.length-1]]),p}const{location:a,distance:n,threshold:r,findAllMatches:c,minMatchCharLength:o,ignoreLocation:l}=this.options;let h=[],u=0,f=!1;this.chunks.forEach(({pattern:p,alphabet:y,startIndex:O})=>{const{isMatch:R,score:k,indices:N}=Je(e,p,y,{location:a+O,distance:n,threshold:r,findAllMatches:c,minMatchCharLength:o,includeMatches:i,ignoreLocation:l});R&&(f=!0),u+=k,R&&N&&(h=[...h,...N])});let g={isMatch:f,score:f?u/this.chunks.length:1};return f&&i&&(g.indices=h),g}}class P{constructor(e){this.pattern=e}static isMultiMatch(e){return ce(e,this.multiRegex)}static isSingleMatch(e){return ce(e,this.singleRegex)}search(){}}function ce(t,e){const s=t.match(e);return s?s[1]:null}class Ge extends P{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class He extends P{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class Ve extends P{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Ye extends P{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Qe extends P{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Xe extends P{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class me extends P{constructor(e,{location:s=d.location,threshold:i=d.threshold,distance:a=d.distance,includeMatches:n=d.includeMatches,findAllMatches:r=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,isCaseSensitive:o=d.isCaseSensitive,ignoreLocation:l=d.ignoreLocation}={}){super(e),this._bitapSearch=new pe(e,{location:s,threshold:i,distance:a,includeMatches:n,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Ie extends P{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,i;const a=[],n=this.pattern.length;for(;(i=e.indexOf(this.pattern,s))>-1;)s=i+n,a.push([i,s-1]);const r=!!a.length;return{isMatch:r,score:r?0:1,indices:a}}}const G=[Ge,Ie,Ve,Ye,Xe,Qe,He,me],oe=G.length,Ze=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,qe="|";function et(t,e={}){return t.split(qe).map(s=>{let i=s.trim().split(Ze).filter(n=>n&&!!n.trim()),a=[];for(let n=0,r=i.length;n<r;n+=1){const c=i[n];let o=!1,l=-1;for(;!o&&++l<oe;){const h=G[l];let u=h.isMultiMatch(c);u&&(a.push(new h(u,e)),o=!0)}if(!o)for(l=-1;++l<oe;){const h=G[l];let u=h.isSingleMatch(c);if(u){a.push(new h(u,e));break}}}return a})}const tt=new Set([me.type,Ie.type]);class st{constructor(e,{isCaseSensitive:s=d.isCaseSensitive,includeMatches:i=d.includeMatches,minMatchCharLength:a=d.minMatchCharLength,ignoreLocation:n=d.ignoreLocation,findAllMatches:r=d.findAllMatches,location:c=d.location,threshold:o=d.threshold,distance:l=d.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:i,minMatchCharLength:a,findAllMatches:r,ignoreLocation:n,location:c,threshold:o,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=et(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:a}=this.options;e=a?e:e.toLowerCase();let n=0,r=[],c=0;for(let o=0,l=s.length;o<l;o+=1){const h=s[o];r.length=0,n=0;for(let u=0,f=h.length;u<f;u+=1){const g=h[u],{isMatch:p,indices:y,score:O}=g.search(e);if(p){if(n+=1,c+=O,i){const R=g.constructor.type;tt.has(R)?r=[...r,...y]:r.push(y)}}else{c=0,n=0,r.length=0;break}}if(n){let u={isMatch:!0,score:c/n};return i&&(u.indices=r),u}}return{isMatch:!1,score:1}}}const H=[];function nt(...t){H.push(...t)}function V(t,e){for(let s=0,i=H.length;s<i;s+=1){let a=H[s];if(a.condition(t,e))return new a(t,e)}return new pe(t,e)}const C={AND:"$and",OR:"$or"},Y={PATH:"$path",PATTERN:"$val"},Q=t=>!!(t[C.AND]||t[C.OR]),rt=t=>!!t[Y.PATH],it=t=>!w(t)&&de(t)&&!Q(t),he=t=>({[C.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function ye(t,e,{auto:s=!0}={}){const i=a=>{let n=Object.keys(a);const r=rt(a);if(!r&&n.length>1&&!Q(a))return i(he(a));if(it(a)){const o=r?a[Y.PATH]:n[0],l=r?a[Y.PATTERN]:a[o];if(!M(l))throw new Error(Ee(o));const h={keyId:W(o),pattern:l};return s&&(h.searcher=V(l,e)),h}let c={children:[],operator:n[0]};return n.forEach(o=>{const l=a[o];w(l)&&l.forEach(h=>{c.children.push(i(h))})}),c};return Q(t)||(t=he(t)),i(t)}function at(t,{ignoreFieldNorm:e=d.ignoreFieldNorm}){t.forEach(s=>{let i=1;s.matches.forEach(({key:a,norm:n,score:r})=>{const c=a?a.weight:null;i*=Math.pow(r===0&&c?Number.EPSILON:r,(c||1)*(e?1:n))}),s.score=i})}function ct(t,e){const s=t.matches;e.matches=[],I(s)&&s.forEach(i=>{if(!I(i.indices)||!i.indices.length)return;const{indices:a,value:n}=i;let r={indices:a,value:n};i.key&&(r.key=i.key.src),i.idx>-1&&(r.refIndex=i.idx),e.matches.push(r)})}function ot(t,e){e.score=t.score}function ht(t,e,{includeMatches:s=d.includeMatches,includeScore:i=d.includeScore}={}){const a=[];return s&&a.push(ct),i&&a.push(ot),t.map(n=>{const{idx:r}=n,c={item:e[r],refIndex:r};return a.length&&a.forEach(o=>{o(n,c)}),c})}class U{constructor(e,s={},i){this.options={...d,...s},this.options.useExtendedSearch,this._keyStore=new $e(this.options.keys),this.setCollection(e,i)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof X))throw new Error(Ne);this._myIndex=s||ge(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){I(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let i=0,a=this._docs.length;i<a;i+=1){const n=this._docs[i];e(n,i)&&(this.removeAt(i),i-=1,a-=1,s.push(n))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:i,includeScore:a,shouldSort:n,sortFn:r,ignoreFieldNorm:c}=this.options;let o=M(e)?M(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return at(o,{ignoreFieldNorm:c}),n&&o.sort(r),le(s)&&s>-1&&(o=o.slice(0,s)),ht(o,this._docs,{includeMatches:i,includeScore:a})}_searchStringList(e){const s=V(e,this.options),{records:i}=this._myIndex,a=[];return i.forEach(({v:n,i:r,n:c})=>{if(!I(n))return;const{isMatch:o,score:l,indices:h}=s.searchIn(n);o&&a.push({item:n,idx:r,matches:[{score:l,value:n,norm:c,indices:h}]})}),a}_searchLogical(e){const s=ye(e,this.options),i=(c,o,l)=>{if(!c.children){const{keyId:u,searcher:f}=c,g=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(o,u),searcher:f});return g&&g.length?[{idx:l,item:o,matches:g}]:[]}const h=[];for(let u=0,f=c.children.length;u<f;u+=1){const g=c.children[u],p=i(g,o,l);if(p.length)h.push(...p);else if(c.operator===C.AND)return[]}return h},a=this._myIndex.records,n={},r=[];return a.forEach(({$:c,i:o})=>{if(I(c)){let l=i(s,c,o);l.length&&(n[o]||(n[o]={idx:o,item:c,matches:[]},r.push(n[o])),l.forEach(({matches:h})=>{n[o].matches.push(...h)}))}}),r}_searchObjectList(e){const s=V(e,this.options),{keys:i,records:a}=this._myIndex,n=[];return a.forEach(({$:r,i:c})=>{if(!I(r))return;let o=[];i.forEach((l,h)=>{o.push(...this._findMatches({key:l,value:r[h],searcher:s}))}),o.length&&n.push({idx:c,item:r,matches:o})}),n}_findMatches({key:e,value:s,searcher:i}){if(!I(s))return[];let a=[];if(w(s))s.forEach(({v:n,i:r,n:c})=>{if(!I(n))return;const{isMatch:o,score:l,indices:h}=i.searchIn(n);o&&a.push({score:l,key:e,value:n,idx:r,norm:c,indices:h})});else{const{v:n,n:r}=s,{isMatch:c,score:o,indices:l}=i.searchIn(n);c&&a.push({score:o,key:e,value:n,norm:r,indices:l})}return a}}U.version="7.0.0";U.createIndex=ge;U.parseIndex=Be;U.config=d;U.parseQuery=ye;nt(st);function lt(){if(x(se)){let t={keys:["id","name"]},e=new U(x(z),t);ee.set(e.search(x(se)).map(s=>s.item))}else ee.set(x(z))}function dt(){if(x(ne)){let t={keys:["id","givenName","name","forcedTags","validTags","user.name"]},e=new U(x(J),t);te.set(e.search(x(ne)).map(s=>s.item))}else te.set(x(J))}function ut(t){let e=localStorage.getItem("headscaleUserSort")||"",s=localStorage.getItem("headscaleUserSortDirection")||"",i=t,a=new Intl.Collator([],{numeric:!0});if(s=="ascending")switch(e){case"id":i=t.sort((n,r)=>a.compare(n.id,r.id));break;case"createdAt":i=t.sort((n,r)=>-a.compare(n.createdAt,r.createdAt));break;case"name":i=t.sort((n,r)=>a.compare(n.name,r.name));break}if(s=="descending")switch(e){case"id":i=t.sort((n,r)=>-a.compare(n.id,r.id));break;case"createdAt":i=t.sort((n,r)=>a.compare(n.createdAt,r.createdAt));break;case"name":i=t.sort((n,r)=>-a.compare(n.name,r.name));break}return i}function ft(t){let e=localStorage.getItem("headscaleDeviceSort")||"",s=localStorage.getItem("headscaleDeviceSortDirection")||"",i=t,a=new Intl.Collator([],{numeric:!0});if(s=="ascending")switch(e){case"id":i=t.sort((n,r)=>a.compare(n.id,r.id));break;case"lastSeen":i=t.sort((n,r)=>-a.compare(n.lastSeen,r.lastSeen));break;case"givenName":i=t.sort((n,r)=>a.compare(n.givenName,r.givenName));break}if(s=="descending")switch(e){case"id":i=t.sort((n,r)=>-a.compare(n.id,r.id));break;case"lastSeen":i=t.sort((n,r)=>a.compare(n.lastSeen,r.lastSeen));break;case"givenName":i=t.sort((n,r)=>-a.compare(n.givenName,r.givenName));break}return i}var m=function(t,e,s,i){function a(n){return n instanceof s?n:new s(function(r){r(n)})}return new(s||(s=Promise))(function(n,r){function c(h){try{l(i.next(h))}catch(u){r(u)}}function o(h){try{l(i.throw(h))}catch(u){r(u)}}function l(h){h.done?n(h.value):a(h.value).then(c,o)}l((i=i.apply(t,e||[])).next())})};function At(){return m(this,void 0,void 0,function*(){let t=localStorage.getItem("headscaleURL")||"",e=localStorage.getItem("headscaleAPIKey")||"",s="/api/v1/user",i=[new Se],a=new Response;yield fetch(t+s,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${e}`}}).then(n=>{if(n.ok)a=n;else return n.text().then(r=>{throw $.set("failed"),r})}).catch(n=>{throw $.set("failed"),n}),yield a.json().then(n=>{i=n.users,i=ut(i)}),$.set("succeeded"),z.set(i),lt()})}function St(t,e){return m(this,void 0,void 0,function*(){let s=localStorage.getItem("headscaleURL")||"",i=localStorage.getItem("headscaleAPIKey")||"",a="/api/v1/user/"+t+"/rename/"+e;yield fetch(s+a,{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${i}`}}).then(n=>n.ok?n:n.text().then(r=>{throw JSON.parse(r).message})).catch(n=>{throw n})})}function Mt(t){return m(this,void 0,void 0,function*(){let e=localStorage.getItem("headscaleURL")||"",s=localStorage.getItem("headscaleAPIKey")||"",i="/api/v1/apikey",a=new Response,n="";return yield fetch(e+i,{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({expiration:t})}).then(r=>{if(r.ok)a=r;else return r.text().then(c=>{throw JSON.parse(c).message})}).catch(r=>{throw r}),yield a.json().then(r=>{n=r.apiKey}),n})}function Rt(t){return m(this,void 0,void 0,function*(){let e=localStorage.getItem("headscaleURL")||"",s=localStorage.getItem("headscaleAPIKey")||"";yield fetch(e+"/api/v1/apikey/expire",{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({prefix:t})}).then(a=>{if(!a.ok)return a.text().then(n=>{throw JSON.parse(n).message})}).catch(a=>{throw a})})}function wt(t,e){return m(this,void 0,void 0,function*(){yield b();let s=localStorage.getItem("headscaleURL")||"",i=localStorage.getItem("headscaleAPIKey")||"",n=`/api/v1/${localStorage.getItem("headscaleAPIMachineOrNode")||"machine"}/${t}/tags`;yield fetch(s+n,{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({tags:e})}).then(r=>r.ok?r:r.text().then(c=>{throw JSON.parse(c).message})).catch(r=>{throw r})})}function Lt(t){return m(this,void 0,void 0,function*(){let e=localStorage.getItem("headscaleURL")||"",s=localStorage.getItem("headscaleAPIKey")||"",i="/api/v1/user/"+t;yield fetch(e+i,{method:"DELETE",headers:{Accept:"application/json",Authorization:`Bearer ${s}`}}).then(a=>a.ok?a:a.text().then(n=>{throw JSON.parse(n).message})).catch(a=>{throw a})})}function vt(t){return m(this,void 0,void 0,function*(){let e=localStorage.getItem("headscaleURL")||"",s=localStorage.getItem("headscaleAPIKey")||"";yield fetch(e+"/api/v1/user",{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({name:t.toLowerCase()})}).then(a=>a.ok?a:a.text().then(n=>{throw JSON.parse(n).message})).catch(a=>{throw a})})}function b(){return m(this,void 0,void 0,function*(){let t=localStorage.getItem("headscaleURL")||"",e=localStorage.getItem("headscaleAPIKey")||"",s=localStorage.getItem("headscaleAPIMachineOrNode")||"machine",i=`/api/v1/${s}`;yield fetch(t+i,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${e}`}}).then(a=>{a.ok||(s=="machine"?re.set("node"):re.set("machine"))})})}function xt(){return m(this,void 0,void 0,function*(){yield b();let t=localStorage.getItem("headscaleURL")||"",e=localStorage.getItem("headscaleAPIKey")||"",s=localStorage.getItem("headscaleAPIMachineOrNode")||"machine",i=`/api/v1/${s}`,a=[new Me],n=new Response;yield fetch(t+i,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${e}`}}).then(r=>{if(r.ok)n=r;else return r.text().then(c=>{throw $.set("failed"),c})}).catch(r=>{throw $.set("failed"),r}),yield n.json().then(r=>{a=r[`${s}s`],a=ft(a)}),$.set("succeeded"),J.set(a),dt()})}function Pt(){return m(this,void 0,void 0,function*(){let t=localStorage.getItem("headscaleURL")||"",e=localStorage.getItem("headscaleAPIKey")||"",s="/api/v1/apikey",i=new Response,a=[new Re];return yield fetch(t+s,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${e}`}}).then(n=>{if(n.ok)i=n;else return n.text().then(r=>{throw JSON.parse(r).message})}).catch(n=>{throw n}),yield i.json().then(n=>{a=n.apiKeys}),a})}function Ot(t){return m(this,void 0,void 0,function*(){let e=localStorage.getItem("headscaleURL")||"",s=localStorage.getItem("headscaleAPIKey")||"",i="/api/v1/preauthkey",a=[new we],n=new Response;return yield fetch(e+i+"?user="+t,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${s}`}}).then(r=>{if(r.ok)n=r;else return r.text().then(c=>{throw JSON.parse(c).message})}).catch(r=>{throw r}),yield n.json().then(r=>{a=r.preAuthKeys}),a})}function Nt(t,e,s,i){return m(this,void 0,void 0,function*(){let a=localStorage.getItem("headscaleURL")||"",n=localStorage.getItem("headscaleAPIKey")||"";yield fetch(a+"/api/v1/preauthkey",{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({user:t,expiration:e,reusable:s,ephemeral:i})}).then(c=>c.ok?c:c.text().then(o=>{throw JSON.parse(o).message})).catch(c=>{throw c})})}function Et(t,e){return m(this,void 0,void 0,function*(){let s=localStorage.getItem("headscaleURL")||"",i=localStorage.getItem("headscaleAPIKey")||"";yield fetch(s+"/api/v1/preauthkey/expire",{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({user:t,key:e})}).then(n=>n.ok?n:n.text().then(r=>{throw JSON.parse(r).message})).catch(n=>{throw n})})}function Ut(t,e){return m(this,void 0,void 0,function*(){yield b();let s=localStorage.getItem("headscaleURL")||"",i=localStorage.getItem("headscaleAPIKey")||"",n=`/api/v1/${localStorage.getItem("headscaleAPIMachineOrNode")||"machine"}/register`;yield fetch(s+n+"?user="+e+"&key="+t,{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${i}`}}).then(r=>r.ok?r:r.text().then(c=>{throw JSON.parse(c).message})).catch(r=>{throw r})})}function kt(t,e){return m(this,void 0,void 0,function*(){yield b();let s=localStorage.getItem("headscaleURL")||"",i=localStorage.getItem("headscaleAPIKey")||"",n=`/api/v1/${localStorage.getItem("headscaleAPIMachineOrNode")||"machine"}/${t}/user?user=${e}`;yield fetch(s+n,{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${i}`}}).then(r=>r.ok?r:r.text().then(c=>{throw JSON.parse(c).message})).catch(r=>{throw r})})}function Kt(t,e){return m(this,void 0,void 0,function*(){yield b();let s=localStorage.getItem("headscaleURL")||"",i=localStorage.getItem("headscaleAPIKey")||"",n=`/api/v1/${localStorage.getItem("headscaleAPIMachineOrNode")||"machine"}/${t}/rename/${e}`;yield fetch(s+n,{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${i}`}}).then(r=>r.ok?r:r.text().then(c=>{throw JSON.parse(c).message})).catch(r=>{throw r})})}function $t(t){return m(this,void 0,void 0,function*(){yield b();let e=localStorage.getItem("headscaleURL")||"",s=localStorage.getItem("headscaleAPIKey")||"",a=`/api/v1/${localStorage.getItem("headscaleAPIMachineOrNode")||"machine"}/${t}`;yield fetch(e+a,{method:"DELETE",headers:{Accept:"application/json",Authorization:`Bearer ${s}`}}).then(n=>n.ok?n:n.text().then(r=>{throw JSON.parse(r).message})).catch(n=>{throw n})})}export{yt as a,vt as b,At as c,St as d,Rt as e,lt as f,Pt as g,Nt as h,Ot as i,Et as j,Ut as k,xt as l,kt as m,Mt as n,$t as o,Kt as p,dt as q,Lt as r,b as t,wt as u};
