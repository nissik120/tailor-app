import{l as Ee,m as Se,i as Te,a as ke,b as Ce,v as Be,p as Me,R as xe,A as Le,c as Ie,x as _e,k as Ne,d as Ve,e as Pe,B as Re,j as de,f as ee,u as me,C as Oe,D as He,V as Ye}from"./VContainer-fcfCSyXv.js";import{p as W,m as j,b as ie,g as G,d as oe,t as te,f as s,i as ae,u as q,c as v,y as De,s as N,r as T,n as We,a7 as fe,a8 as se,a as ue,I as ge,X as he,_ as $e,U as Y,a1 as Xe,a9 as ze,w as Fe,x as je,F as ne,j as le,aa as pe,ab as Ge,ac as F,ad as qe,q as Ue,ae as Ke,af as Ze,Q as Qe,ag as Je,e as et,R as tt,l as at,ah as nt,ai as lt,h as it,aj as ot,B as st}from"./index-D_JHqCUq.js";import{c as ut,V as ye}from"./VAvatar-BDR5PMMT.js";const rt=W({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...j(),...ie()},"VDivider"),xt=G()({name:"VDivider",props:rt(),setup(e,o){let{attrs:a,slots:l}=o;const{themeClasses:t}=oe(e),{textColorClasses:i,textColorStyles:n}=Ee(te(e,"color")),u=s(()=>{const m={};return e.length&&(m[e.vertical?"height":"width"]=ae(e.length)),e.thickness&&(m[e.vertical?"borderRightWidth":"borderTopWidth"]=ae(e.thickness)),m});return q(()=>{const m=v("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},t.value,i.value,e.class],style:[u.value,n.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!a.role||a.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${a.role||"separator"}`},null);return l.default?v("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[m,v("div",{class:"v-divider__content"},[l.default()]),m]):m}),{}}}),ct=Symbol.for("vuetify:list");function vt(){return De(ct,null)}const dt=Symbol.for("vuetify:nested"),mt={id:N(),root:{register:()=>null,unregister:()=>null,parents:T(new Map),children:T(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:T(!1),selectable:T(!1),opened:T(new Set),activated:T(new Set),selected:T(new Map),selectedValues:T([]),getPath:()=>[]}},ft=(e,o)=>{const a=De(dt,mt),l=Symbol(We()),t=s(()=>e.value!==void 0?e.value:l),i={...a,id:t,open:(n,u)=>a.root.open(t.value,n,u),openOnSelect:(n,u)=>a.root.openOnSelect(t.value,n,u),isOpen:s(()=>a.root.opened.value.has(t.value)),parent:s(()=>a.root.parents.value.get(t.value)),activate:(n,u)=>a.root.activate(t.value,n,u),isActivated:s(()=>a.root.activated.value.has(fe(t.value))),select:(n,u)=>a.root.select(t.value,n,u),isSelected:s(()=>a.root.selected.value.get(fe(t.value))==="on"),isIndeterminate:s(()=>a.root.selected.value.get(t.value)==="indeterminate"),isLeaf:s(()=>!a.root.children.value.get(t.value)),isGroupActivator:a.isGroupActivator};return!a.isGroupActivator&&a.root.register(t.value,a.id.value,o),se(()=>{!a.isGroupActivator&&a.root.unregister(t.value)}),i},gt=W({opacity:[Number,String],...j(),...ue()},"VListItemSubtitle"),ht=G()({name:"VListItemSubtitle",props:gt(),setup(e,o){let{slots:a}=o;return q(()=>v(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},a)),{}}}),yt=ut("v-list-item-title"),bt=W({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:ge,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:ge,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:he(),onClickOnce:he(),...Se(),...j(),...Te(),...$e(),...ke(),...Ce(),...Be(),...ue(),...ie(),...Me({variant:"text"})},"VListItem"),Lt=G()({name:"VListItem",directives:{Ripple:xe},props:bt(),emits:{click:e=>!0},setup(e,o){let{attrs:a,slots:l,emit:t}=o;const i=Le(e,a),n=s(()=>e.value===void 0?i.href.value:e.value),{activate:u,isActivated:m,select:w,isOpen:S,isSelected:h,isIndeterminate:b,isGroupActivator:k,root:y,parent:V,openOnSelect:M,id:x}=ft(n,!1),P=vt(),p=s(()=>{var g;return e.active!==!1&&(e.active||((g=i.isActive)==null?void 0:g.value)||(y.activatable.value?m.value:h.value))}),L=s(()=>e.link!==!1&&i.isLink.value),A=s(()=>!e.disabled&&e.link!==!1&&(e.link||i.isClickable.value||!!P&&(y.selectable.value||y.activatable.value||e.value!=null))),r=s(()=>e.rounded||e.nav),c=s(()=>e.color??e.activeColor),d=s(()=>({color:p.value?c.value??e.baseColor:e.baseColor,variant:e.variant}));Y(()=>{var g;return(g=i.isActive)==null?void 0:g.value},g=>{g&&V.value!=null&&y.open(V.value,!0),g&&M(g)},{immediate:!0});const{themeClasses:f}=oe(e),{borderClasses:I}=Ie(e),{colorClasses:C,colorStyles:B,variantClasses:R}=_e(d),{densityClasses:U}=Ne(e),{dimensionStyles:$}=Xe(e),{elevationClasses:K}=Ve(e),{roundedClasses:X}=Pe(r),Z=s(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),O=s(()=>({isActive:p.value,select:w,isOpen:S.value,isSelected:h.value,isIndeterminate:b.value}));function Q(g){var _;t("click",g),A.value&&((_=i.navigate)==null||_.call(i,g),!k&&(y.activatable.value?u(!m.value,g):(y.selectable.value||e.value!=null)&&w(!h.value,g)))}function D(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),g.target.dispatchEvent(new MouseEvent("click",g)))}return q(()=>{const g=L.value?"a":e.tag,_=l.title||e.title!=null,z=l.subtitle||e.subtitle!=null,re=!!(e.appendAvatar||e.appendIcon),Ae=!!(re||l.append),ce=!!(e.prependAvatar||e.prependIcon),J=!!(ce||l.prepend);return P==null||P.updateHasPrepend(J),e.activeColor&&ze("active-color",["color","base-color"]),Fe(v(g,le({class:["v-list-item",{"v-list-item--active":p.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!J&&(P==null?void 0:P.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&p.value},f.value,I.value,C.value,U.value,K.value,Z.value,X.value,R.value,e.class],style:[B.value,$.value,e.style],tabindex:A.value?P?-2:0:void 0,onClick:Q,onKeydown:A.value&&!L.value&&D},i.linkProps),{default:()=>{var ve;return[Re(A.value||p.value,"v-list-item"),J&&v("div",{key:"prepend",class:"v-list-item__prepend"},[l.prepend?v(ee,{key:"prepend-defaults",disabled:!ce,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var E;return[(E=l.prepend)==null?void 0:E.call(l,O.value)]}}):v(ne,null,[e.prependAvatar&&v(ye,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(de,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),v("div",{class:"v-list-item__spacer"},null)]),v("div",{class:"v-list-item__content","data-no-activator":""},[_&&v(yt,{key:"title"},{default:()=>{var E;return[((E=l.title)==null?void 0:E.call(l,{title:e.title}))??e.title]}}),z&&v(ht,{key:"subtitle"},{default:()=>{var E;return[((E=l.subtitle)==null?void 0:E.call(l,{subtitle:e.subtitle}))??e.subtitle]}}),(ve=l.default)==null?void 0:ve.call(l,O.value)]),Ae&&v("div",{key:"append",class:"v-list-item__append"},[l.append?v(ee,{key:"append-defaults",disabled:!re,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var E;return[(E=l.append)==null?void 0:E.call(l,O.value)]}}):v(ne,null,[e.appendIcon&&v(de,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(ye,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),v("div",{class:"v-list-item__spacer"},null)])]}}),[[je("ripple"),A.value&&e.ripple]])}),{activate:u,isActivated:m,isGroupActivator:k,isSelected:h,list:P,select:w,root:y,id:x}}});function wt(e){let{rootEl:o,isSticky:a,layoutItemStyles:l}=e;const t=N(!1),i=N(0),n=s(()=>{const w=typeof t.value=="boolean"?"top":t.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[w]:ae(i.value)}:{top:l.value.top}]});pe(()=>{Y(a,w=>{w?window.addEventListener("scroll",m,{passive:!0}):window.removeEventListener("scroll",m)},{immediate:!0})}),se(()=>{window.removeEventListener("scroll",m)});let u=0;function m(){const w=u>window.scrollY?"up":"down",S=o.value.getBoundingClientRect(),h=parseFloat(l.value.top??0),b=window.scrollY-Math.max(0,i.value-h),k=S.height+Math.max(i.value,h)-window.scrollY-window.innerHeight,y=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;S.height<window.innerHeight-h?(t.value="top",i.value=h):w==="up"&&t.value==="bottom"||w==="down"&&t.value==="top"?(i.value=window.scrollY+S.top-y,t.value=!0):w==="down"&&k<=0?(i.value=0,t.value="bottom"):w==="up"&&b<=0&&(y?t.value!=="top"&&(i.value=-b+y+h,t.value="top"):(i.value=S.top+b,t.value="top")),u=window.scrollY}return{isStuck:t,stickyStyles:n}}const St=100,kt=20;function be(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function we(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const l=be(o),t=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);o+=(t-l)*Math.abs(t),a===e.length-1&&(o*=.5)}return be(o)*1e3}function Ct(){const e={};function o(t){Array.from(t.changedTouches).forEach(i=>{(e[i.identifier]??(e[i.identifier]=new Ge(kt))).push([t.timeStamp,i])})}function a(t){Array.from(t.changedTouches).forEach(i=>{delete e[i.identifier]})}function l(t){var w;const i=(w=e[t])==null?void 0:w.values().reverse();if(!i)throw new Error(`No samples for touch id ${t}`);const n=i[0],u=[],m=[];for(const S of i){if(n[0]-S[0]>St)break;u.push({t:S[0],d:S[1].clientX}),m.push({t:S[0],d:S[1].clientY})}return{x:we(u),y:we(m),get direction(){const{x:S,y:h}=this,[b,k]=[Math.abs(S),Math.abs(h)];return b>k&&S>=0?"right":b>k&&S<=0?"left":k>b&&h>=0?"down":k>b&&h<=0?"up":It()}}}return{addMovement:o,endTouch:a,getVelocity:l}}function It(){throw new Error}function Vt(e){let{el:o,isActive:a,isTemporary:l,width:t,touchless:i,position:n}=e;pe(()=>{window.addEventListener("touchstart",P,{passive:!0}),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",L,{passive:!0})}),se(()=>{window.removeEventListener("touchstart",P),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",L)});const u=s(()=>["left","right"].includes(n.value)),{addMovement:m,endTouch:w,getVelocity:S}=Ct();let h=!1;const b=N(!1),k=N(0),y=N(0);let V;function M(r,c){return(n.value==="left"?r:n.value==="right"?document.documentElement.clientWidth-r:n.value==="top"?r:n.value==="bottom"?document.documentElement.clientHeight-r:H())-(c?t.value:0)}function x(r){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const d=n.value==="left"?(r-y.value)/t.value:n.value==="right"?(document.documentElement.clientWidth-r-y.value)/t.value:n.value==="top"?(r-y.value)/t.value:n.value==="bottom"?(document.documentElement.clientHeight-r-y.value)/t.value:H();return c?Math.max(0,Math.min(1,d)):d}function P(r){if(i.value)return;const c=r.changedTouches[0].clientX,d=r.changedTouches[0].clientY,f=25,I=n.value==="left"?c<f:n.value==="right"?c>document.documentElement.clientWidth-f:n.value==="top"?d<f:n.value==="bottom"?d>document.documentElement.clientHeight-f:H(),C=a.value&&(n.value==="left"?c<t.value:n.value==="right"?c>document.documentElement.clientWidth-t.value:n.value==="top"?d<t.value:n.value==="bottom"?d>document.documentElement.clientHeight-t.value:H());(I||C||a.value&&l.value)&&(V=[c,d],y.value=M(u.value?c:d,a.value),k.value=x(u.value?c:d),h=y.value>-20&&y.value<80,w(r),m(r))}function p(r){const c=r.changedTouches[0].clientX,d=r.changedTouches[0].clientY;if(h){if(!r.cancelable){h=!1;return}const I=Math.abs(c-V[0]),C=Math.abs(d-V[1]);(u.value?I>C&&I>3:C>I&&C>3)?(b.value=!0,h=!1):(u.value?C:I)>3&&(h=!1)}if(!b.value)return;r.preventDefault(),m(r);const f=x(u.value?c:d,!1);k.value=Math.max(0,Math.min(1,f)),f>1?y.value=M(u.value?c:d,!0):f<0&&(y.value=M(u.value?c:d,!1))}function L(r){if(h=!1,!b.value)return;m(r),b.value=!1;const c=S(r.changedTouches[0].identifier),d=Math.abs(c.x),f=Math.abs(c.y);(u.value?d>f&&d>400:f>d&&f>3)?a.value=c.direction===({left:"right",right:"left",top:"down",bottom:"up"}[n.value]||H()):a.value=k.value>.5}const A=s(()=>b.value?{transform:n.value==="left"?`translateX(calc(-100% + ${k.value*t.value}px))`:n.value==="right"?`translateX(calc(100% - ${k.value*t.value}px))`:n.value==="top"?`translateY(calc(-100% + ${k.value*t.value}px))`:n.value==="bottom"?`translateY(calc(100% - ${k.value*t.value}px))`:H(),transition:"none"}:void 0);return F(b,()=>{var d,f;const r=((d=o.value)==null?void 0:d.style.transform)??null,c=((f=o.value)==null?void 0:f.style.transition)??null;qe(()=>{var I,C,B,R;(C=o.value)==null||C.style.setProperty("transform",((I=A.value)==null?void 0:I.transform)||"none"),(R=o.value)==null||R.style.setProperty("transition",((B=A.value)==null?void 0:B.transition)||null)}),Ue(()=>{var I,C;(I=o.value)==null||I.style.setProperty("transform",r),(C=o.value)==null||C.style.setProperty("transition",c)})}),{isDragging:b,dragProgress:k,dragStyles:A}}function H(){throw new Error}const Pt=W({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Dt(e,o){let a=()=>{};function l(n){a==null||a();const u=Number(n?e.openDelay:e.closeDelay);return new Promise(m=>{a=Ke(u,()=>{o==null||o(n),m(n)})})}function t(){return l(!0)}function i(){return l(!1)}return{clearDelay:a,runOpenDelay:t,runCloseDelay:i}}function pt(){const o=Ze("useScopeId").vnode.scopeId;return{scopeId:o?{[o]:""}:void 0}}const At=["start","end","left","right","top","bottom"],Et=W({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>At.includes(e)},sticky:Boolean,...Se(),...j(),...Pt(),...Qe({mobile:null}),...ke(),...Je(),...Ce(),...ue({tag:"nav"}),...ie()},"VNavigationDrawer"),_t=G()({name:"VNavigationDrawer",props:Et(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:a,emit:l,slots:t}=o;const{isRtl:i}=et(),{themeClasses:n}=oe(e),{borderClasses:u}=Ie(e),{backgroundColorClasses:m,backgroundColorStyles:w}=me(te(e,"color")),{elevationClasses:S}=Ve(e),{displayClasses:h,mobile:b}=tt(e),{roundedClasses:k}=Pe(e),y=Oe(),V=at(e,"modelValue",null,D=>!!D),{ssrBootStyles:M}=nt(),{scopeId:x}=pt(),P=T(),p=N(!1),{runOpenDelay:L,runCloseDelay:A}=Dt(e,D=>{p.value=D}),r=s(()=>e.rail&&e.expandOnHover&&p.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),c=s(()=>He(e.location,i.value)),d=s(()=>e.persistent),f=s(()=>!e.permanent&&(b.value||e.temporary)),I=s(()=>e.sticky&&!f.value&&c.value!=="bottom");F(()=>e.expandOnHover&&e.rail!=null,()=>{Y(p,D=>l("update:rail",!D))}),F(()=>!e.disableResizeWatcher,()=>{Y(f,D=>!e.permanent&&st(()=>V.value=!D))}),F(()=>!e.disableRouteWatcher&&!!y,()=>{Y(y.currentRoute,()=>f.value&&(V.value=!1))}),Y(()=>e.permanent,D=>{D&&(V.value=!0)}),e.modelValue==null&&!f.value&&(V.value=e.permanent||!b.value);const{isDragging:C,dragProgress:B}=Vt({el:P,isActive:V,isTemporary:f,width:r,touchless:te(e,"touchless"),position:c}),R=s(()=>{const D=f.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):r.value;return C.value?D*B.value:D}),U=s(()=>["top","bottom"].includes(e.location)?0:r.value),{layoutItemStyles:$,layoutItemScrimStyles:K}=lt({id:e.name,order:s(()=>parseInt(e.order,10)),position:c,layoutSize:R,elementSize:U,active:s(()=>V.value||C.value),disableTransitions:s(()=>C.value),absolute:s(()=>e.absolute||I.value&&typeof X.value!="string")}),{isStuck:X,stickyStyles:Z}=wt({rootEl:P,isSticky:I,layoutItemStyles:$}),O=me(s(()=>typeof e.scrim=="string"?e.scrim:null)),Q=s(()=>({...C.value?{opacity:B.value*.2,transition:"none"}:void 0,...K.value}));return it({VList:{bgColor:"transparent"}}),q(()=>{const D=t.image||e.image;return v(ne,null,[v(e.tag,le({ref:P,onMouseenter:L,onMouseleave:A,class:["v-navigation-drawer",`v-navigation-drawer--${c.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":p.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":f.value,"v-navigation-drawer--persistent":d.value,"v-navigation-drawer--active":V.value,"v-navigation-drawer--sticky":I.value},n.value,m.value,u.value,h.value,S.value,k.value,e.class],style:[w.value,$.value,M.value,Z.value,e.style,["top","bottom"].includes(c.value)?{height:"auto"}:{}]},x,a),{default:()=>{var g,_,z;return[D&&v("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?v(ee,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):v(Ye,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&v("div",{class:"v-navigation-drawer__prepend"},[(g=t.prepend)==null?void 0:g.call(t)]),v("div",{class:"v-navigation-drawer__content"},[(_=t.default)==null?void 0:_.call(t)]),t.append&&v("div",{class:"v-navigation-drawer__append"},[(z=t.append)==null?void 0:z.call(t)])]}}),v(ot,{name:"fade-transition"},{default:()=>[f.value&&(C.value||V.value)&&!!e.scrim&&v("div",le({class:["v-navigation-drawer__scrim",O.backgroundColorClasses.value],style:[Q.value,O.backgroundColorStyles.value],onClick:()=>{d.value||(V.value=!1)}},x),null)]})])}),{isStuck:X}}});export{_t as V,Lt as a,xt as b};
