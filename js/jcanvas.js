!function(e,t,r){"object"==typeof module&&"object"==typeof module.exports?module.exports=function(e,t){return r(e,t)}:r(e,t)}("undefined"!=typeof window?window.jQuery:{},"undefined"!=typeof window?window:this,function(e,t){function r(e){var t,r=this;for(t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r}function n(){be(this,n.baseDefaults)}function a(e){return"string"===Le(e)}function o(e){return!isNaN(ye(e))&&!isNaN(ve(e))}function i(e){return e&&e.getContext?e.getContext("2d"):we}function s(e){var t,r,n;for(t in e)e.hasOwnProperty(t)&&(n=e[t],r=Le(n),"string"===r&&o(n)&&"text"!==t&&(e[t]=ve(n)));void 0!==e.text&&(e.text=String(e.text))}function l(e){return e=be({},e),e.masks=e.masks.slice(0),e}function h(e,t){var r;e.save(),r=l(t.transforms),t.savedTransforms.push(r)}function c(e,t){0===t.savedTransforms.length?t.transforms=l(je):(e.restore(),t.transforms=t.savedTransforms.pop())}function g(e,t,r,n){r[n]&&(ke(r[n])?t[n]=r[n].call(e,r):t[n]=r[n])}function f(e,t,r){g(e,t,r,"fillStyle"),g(e,t,r,"strokeStyle"),t.lineWidth=r.strokeWidth,r.rounded?t.lineCap=t.lineJoin="round":(t.lineCap=r.strokeCap,t.lineJoin=r.strokeJoin,t.miterLimit=r.miterLimit),r.strokeDash||(r.strokeDash=[]),t.setLineDash&&t.setLineDash(r.strokeDash),t.webkitLineDash=t.mozDash=r.strokeDash,t.lineDashOffset=t.webkitLineDashOffset=t.mozDashOffset=r.strokeDashOffset,t.shadowOffsetX=r.shadowX,t.shadowOffsetY=r.shadowY,t.shadowBlur=r.shadowBlur,t.shadowColor=r.shadowColor,t.globalAlpha=r.opacity,t.globalCompositeOperation=r.compositing,r.imageSmoothing&&(t.imageSmoothingEnabled=t.mozImageSmoothingEnabled=r.imageSmoothingEnabled)}function d(e,t,r){r.mask&&(r.autosave&&h(e,t),e.clip(),t.transforms.masks.push(r._args))}function u(e,t){t._transformed&&e.restore()}function y(e,t,r){var n;r.closed&&t.closePath(),r.shadowStroke&&0!==r.strokeWidth?(t.stroke(),t.fill(),t.shadowColor="transparent",t.shadowBlur=0,t.stroke()):(t.fill(),"transparent"!==r.fillStyle&&(t.shadowColor="transparent"),0!==r.strokeWidth&&t.stroke()),r.closed||t.closePath(),u(t,r),r.mask&&(n=p(e),d(t,n,r))}function v(e,t,r,n,a){r._toRad=r.inDegrees?Te/180:1,r._transformed=pe,t.save(),r.fromCenter||r._centered||n===xe||(a===xe&&(a=n),r.x+=n/2,r.y+=a/2,r._centered=pe),r.rotate&&N(t,r,we),(1!==r.scale||1!==r.scaleX||1!==r.scaleY)&&J(t,r,we),(r.translate||r.translateX||r.translateY)&&q(t,r,we)}function p(t){var r,n=ze.dataCache;return n._canvas===t&&n._data?r=n._data:(r=e.data(t,"jCanvas"),r||(r={canvas:t,layers:[],layer:{names:{},groups:{}},eventHooks:{},intersecting:[],lastIntersected:we,cursor:e(t).css("cursor"),drag:{layer:we,dragging:me},event:{type:we,x:we,y:we},events:{},transforms:l(je),savedTransforms:[],animating:me,animated:we,pixelRatio:1,scaled:me},e.data(t,"jCanvas",r)),n._canvas=t,n._data=r),r}function m(e,t,r){var n;for(n in Ee.events)Ee.events.hasOwnProperty(n)&&(r[n]||r.cursors&&r.cursors[n])&&w(e,t,r,n);t.events.mouseout||(e.bind("mouseout.jCanvas",function(){var r,n=t.drag.layer;for(n&&(t.drag={},X(e,t,n,"dragcancel")),r=0;r<t.layers.length;r+=1)n=t.layers[r],n._hovered&&e.triggerLayerEvent(t.layers[r],"mouseout");e.drawLayers()}),t.events.mouseout=pe)}function w(e,t,r,n){Ee.events[n](e,t),r._event=pe}function x(e,t,r){var n,a,o;if(r.draggable||r.cursors){for(n=["mousedown","mousemove","mouseup"],o=0;o<n.length;o+=1)a=n[o],w(e,t,r,a);r._event=pe}}function b(e,t,r,n){var o=t.layer.names;n?n.name!==xe&&a(r.name)&&r.name!==n.name&&delete o[r.name]:n=r,a(n.name)&&(o[n.name]=r)}function _(e,t,r,n){var a,o,i,s,l,h=t.layer.groups;if(n){if(n.groups!==xe&&r.groups!==we)for(i=0;i<r.groups.length;i+=1)if(o=r.groups[i],a=h[o]){for(l=0;l<a.length;l+=1)if(a[l]===r){s=l,a.splice(l,1);break}0===a.length&&delete h[o]}}else n=r;if(n.groups!==xe&&n.groups!==we)for(i=0;i<n.groups.length;i+=1)o=n.groups[i],a=h[o],a||(a=h[o]=[],a.name=o),s===xe&&(s=a.length),a.splice(s,0,r)}function L(e){var t,r,n,a;for(t=we,r=e.intersecting.length-1;r>=0;r-=1)if(t=e.intersecting[r],t._masks){for(a=t._masks.length-1;a>=0;a-=1)if(n=t._masks[a],!n.intersects){t.intersects=me;break}if(t.intersects&&!t.intangible)break}return t&&t.intangible&&(t=we),t}function k(e,t,r,n){r&&r.visible&&r._method&&(n?r._next=n:r._next=we,r._method.call(e,r))}function C(e,t,r){var n,a,o,i,s,l,h,c,g,f;if(i=t.drag,a=i.layer,s=a&&a.dragGroups||[],n=t.layers,"mousemove"===r||"touchmove"===r){if(i.dragging||(i.dragging=pe,a.dragging=pe,a.bringToFront&&(n.splice(a.index,1),a.index=n.push(a)),a._startX=a.x,a._startY=a.y,a._endX=a._eventX,a._endY=a._eventY,X(e,t,a,"dragstart")),i.dragging)for(g=a._eventX-(a._endX-a._startX),f=a._eventY-(a._endY-a._startY),a.dx=g-a.x,a.dy=f-a.y,"y"!==a.restrictDragToAxis&&(a.x=g),"x"!==a.restrictDragToAxis&&(a.y=f),X(e,t,a,"drag"),c=0;c<s.length;c+=1)if(h=s[c],l=t.layer.groups[h],a.groups&&l)for(o=0;o<l.length;o+=1)l[o]!==a&&("y"!==a.restrictDragToAxis&&"y"!==l[o].restrictDragToAxis&&(l[o].x+=a.dx),"x"!==a.restrictDragToAxis&&"x"!==l[o].restrictDragToAxis&&(l[o].y+=a.dy))}else("mouseup"===r||"touchend"===r)&&(i.dragging&&(a.dragging=me,i.dragging=me,X(e,t,a,"dragstop")),t.drag={})}function T(t,r,n){var a;r.cursors&&(a=r.cursors[n]),-1!==e.inArray(a,He.cursors)&&(a=He.prefix+a),a&&t.css({cursor:a})}function S(e,t){e.css({cursor:t.cursor})}function P(e,t,r,n,a){n[r]&&t._running&&!t._running[r]&&(t._running[r]=pe,n[r].call(e[0],t,a),t._running[r]=me)}function R(t,r){return!(t.disableEvents||t.intangible&&-1!==e.inArray(r,We))}function X(e,t,r,n,a){R(r,n)&&("mouseout"!==n&&T(e,r,n),P(e,r,n,r,a),P(e,r,n,t.eventHooks,a),P(e,r,n,Ee.eventHooks,a))}function Y(t,n,o,i){var l,h,c,g=n._layer?o:n;return n._args=o,(n.draggable||n.dragGroups)&&(n.layer=pe,n.draggable=pe),n._method||(i?n._method=i:n.method?n._method=e.fn[n.method]:n.type?n._method=e.fn[De.drawings[n.type]]:n._method=function(){}),n.layer&&!n._layer?(l=e(t),h=p(t),c=h.layers,(g.name===we||a(g.name)&&h.layer.names[g.name]===xe)&&(s(n),g=new r(n),g.canvas=t,g.layer=pe,g._layer=pe,g._running={},g.data!==we?g.data=be({},g.data):g.data={},g.groups!==we?g.groups=g.groups.slice(0):g.groups=[],b(l,h,g),_(l,h,g),m(l,h,g),x(l,h,g),n._event=g._event,g._method===e.fn.drawText&&l.measureText(g),g.index===we&&(g.index=c.length),c.splice(g.index,0,g),n._args=g,X(l,h,g,"add"))):n.layer||s(n),g}function A(e){var t,r;for(r=0;r<He.props.length;r+=1)t=He.props[r],e[t]=e["_"+t]}function O(e,t){var r,n;for(n=0;n<He.props.length;n+=1)r=He.props[n],e[r]!==xe&&(e["_"+r]=e[r],He.propsObj[r]=pe,t&&delete e[r])}function D(e,t,r){var n,a,o,i;for(n in r)if(r.hasOwnProperty(n)&&(a=r[n],ke(a)&&(r[n]=a.call(e,t,n)),"object"===Le(a)&&Ce(a))){for(o in a)a.hasOwnProperty(o)&&(i=a[o],t[n]!==xe&&(t[n+"."+o]=t[n][o],r[n+"."+o]=i));delete r[n]}return r}function z(e){var t;for(t in e)e.hasOwnProperty(t)&&-1!==t.indexOf(".")&&delete e[t]}function j(t){var r,n,a=[],o=1;return t.match(/^([a-z]+|#[0-9a-f]+)$/gi)&&("transparent"===t&&(t="rgba(0, 0, 0, 0)"),n=ce.head,r=n.style.color,n.style.color=t,t=e.css(n,"color"),n.style.color=r),t.match(/^rgb/gi)&&(a=t.match(/(\d+(\.\d+)?)/gi),t.match(/%/gi)&&(o=2.55),a[0]*=o,a[1]*=o,a[2]*=o,a[3]!==xe?a[3]=ve(a[3]):a[3]=1),a}function H(e){var t,r=3;for("array"!==Le(e.start)&&(e.start=j(e.start),e.end=j(e.end)),e.now=[],(1!==e.start[3]||1!==e.end[3])&&(r=4),t=0;r>t;t+=1)e.now[t]=e.start[t]+(e.end[t]-e.start[t])*e.pos,3>t&&(e.now[t]=Se(e.now[t]));1!==e.start[3]||1!==e.end[3]?e.now="rgba( "+e.now.join(",")+" )":(e.now.slice(0,3),e.now="rgb( "+e.now.join(",")+" )"),e.elem.nodeName?e.elem.style[e.prop]=e.now:e.elem[e.prop]=e.now}function W(t){var r;for(r=0;r<t.length;r+=1)e.fx.step[t[r]]=H}function E(e){return De.touchEvents[e]&&(e=De.touchEvents[e]),e}function G(e){return De.mouseEvents[e]&&(e=De.mouseEvents[e]),e}function I(e){Ee.events[e]=function(t,r){function n(e){i.x=e.offsetX,i.y=e.offsetY,i.type=a,i.event=e,t.drawLayers({resetFire:pe}),e.preventDefault()}var a,o,i;i=r.event,a="mouseover"===e||"mouseout"===e?"mousemove":e,o=E(a),r.events[a]||(o!==a?t.bind(a+".jCanvas "+o+".jCanvas",n):t.bind(a+".jCanvas",n),r.events[a]=pe)}}function F(e){var t;for(t=0;t<e.length;t+=1)I(e[t])}function B(e,t,r){var n,a,o,i,s,l,h,c;n=r._args,n&&(a=p(e),o=a.event,o.x!==we&&o.y!==we&&(l=o.x*a.pixelRatio,h=o.y*a.pixelRatio,i=t.isPointInPath(l,h)||t.isPointInStroke&&t.isPointInStroke(l,h)),s=a.transforms,n.eventX=o.x,n.eventY=o.y,n.event=o.event,c=a.transforms.rotate,l=n.eventX,h=n.eventY,0!==c?(n._eventX=l*Xe(-c)-h*Re(-c),n._eventY=h*Xe(-c)+l*Re(-c)):(n._eventX=l,n._eventY=h),n._eventX/=s.scaleX,n._eventY/=s.scaleY,i&&a.intersecting.push(n),n.intersects=!!i)}function N(e,t,r){t._toRad=t.inDegrees?Te/180:1,e.translate(t.x,t.y),e.rotate(t.rotate*t._toRad),e.translate(-t.x,-t.y),r&&(r.rotate+=t.rotate*t._toRad)}function J(e,t,r){1!==t.scale&&(t.scaleX=t.scaleY=t.scale),e.translate(t.x,t.y),e.scale(t.scaleX,t.scaleY),e.translate(-t.x,-t.y),r&&(r.scaleX*=t.scaleX,r.scaleY*=t.scaleY)}function q(e,t,r){t.translate&&(t.translateX=t.translateY=t.translate),e.translate(t.translateX,t.translateY),r&&(r.translateX+=t.translateX,r.translateY+=t.translateY)}function Q(e){for(;0>e;)e+=2*Te;return e}function $(e,t){return e.x+e.radius*Xe(t)}function U(e,t){return e.y+e.radius*Re(t)}function V(e,t,r,n){var a,o,i,s,l,h,c,g,f,d,u;r===n?(f=0,d=0):(f=r.x,d=r.y),n.inDegrees||360!==n.end||(n.end=2*Te),n.start*=r._toRad,n.end*=r._toRad,n.start-=Te/2,n.end-=Te/2,u=Te/180,n.ccw&&(u*=-1),a=$(n,n.start+u),o=U(n,n.start+u),i=$(n,n.start),s=U(n,n.start),K(e,t,r,n,a,o,i,s),t.arc(n.x+f,n.y+d,n.radius,n.start,n.end,n.ccw),l=$(n,n.end+u),h=U(n,n.end+u),c=$(n,n.end),g=U(n,n.end),Z(e,t,r,n,c,g,l,h)}function M(e,t,r,n,a,o,i,s){var l,h,c,g,f,d,u;n.arrowRadius&&!r.closed&&(u=Ye(s-o,i-a),u-=Te,f=r.strokeWidth*Xe(u),d=r.strokeWidth*Re(u),l=i+n.arrowRadius*Xe(u+n.arrowAngle/2),h=s+n.arrowRadius*Re(u+n.arrowAngle/2),c=i+n.arrowRadius*Xe(u-n.arrowAngle/2),g=s+n.arrowRadius*Re(u-n.arrowAngle/2),t.moveTo(l-f,h-d),t.lineTo(i-f,s-d),t.lineTo(c-f,g-d),t.moveTo(i-f,s-d),t.lineTo(i+f,s+d),t.moveTo(i,s))}function K(e,t,r,n,a,o,i,s){n._arrowAngleConverted||(n.arrowAngle*=r._toRad,n._arrowAngleConverted=pe),n.startArrow&&M(e,t,r,n,a,o,i,s)}function Z(e,t,r,n,a,o,i,s){n._arrowAngleConverted||(n.arrowAngle*=r._toRad,n._arrowAngleConverted=pe),n.endArrow&&M(e,t,r,n,a,o,i,s)}function ee(e,t,r,n){var a,o,i;for(a=2,K(e,t,r,n,n.x2+r.x,n.y2+r.y,n.x1+r.x,n.y1+r.y),n.x1!==xe&&n.y1!==xe&&t.moveTo(n.x1+r.x,n.y1+r.y);pe&&(o=n["x"+a],i=n["y"+a],o!==xe&&i!==xe);)t.lineTo(o+r.x,i+r.y),a+=1;a-=1,Z(e,t,r,n,n["x"+(a-1)]+r.x,n["y"+(a-1)]+r.y,n["x"+a]+r.x,n["y"+a]+r.y)}function te(e,t,r,n){var a,o,i,s,l;for(a=2,K(e,t,r,n,n.cx1+r.x,n.cy1+r.y,n.x1+r.x,n.y1+r.y),n.x1!==xe&&n.y1!==xe&&t.moveTo(n.x1+r.x,n.y1+r.y);pe&&(o=n["x"+a],i=n["y"+a],s=n["cx"+(a-1)],l=n["cy"+(a-1)],o!==xe&&i!==xe&&s!==xe&&l!==xe);)t.quadraticCurveTo(s+r.x,l+r.y,o+r.x,i+r.y),a+=1;a-=1,Z(e,t,r,n,n["cx"+(a-1)]+r.x,n["cy"+(a-1)]+r.y,n["x"+a]+r.x,n["y"+a]+r.y)}function re(e,t,r,n){var a,o,i,s,l,h,c,g;for(a=2,o=1,K(e,t,r,n,n.cx1+r.x,n.cy1+r.y,n.x1+r.x,n.y1+r.y),n.x1!==xe&&n.y1!==xe&&t.moveTo(n.x1+r.x,n.y1+r.y);pe&&(i=n["x"+a],s=n["y"+a],l=n["cx"+o],h=n["cy"+o],c=n["cx"+(o+1)],g=n["cy"+(o+1)],i!==xe&&s!==xe&&l!==xe&&h!==xe&&c!==xe&&g!==xe);)t.bezierCurveTo(l+r.x,h+r.y,c+r.x,g+r.y,i+r.x,s+r.y),a+=1,o+=2;a-=1,o-=2,Z(e,t,r,n,n["cx"+(o+1)]+r.x,n["cy"+(o+1)]+r.y,n["x"+a]+r.x,n["y"+a]+r.y)}function ne(e,t,r){return t*=e._toRad,t-=Te/2,r*Xe(t)}function ae(e,t,r){return t*=e._toRad,t-=Te/2,r*Re(t)}function oe(e,t,r,n){var a,o,i,s,l,h,c,g,f,d,u,y,v;for(r===n?(s=0,l=0):(s=r.x,l=r.y),a=1,h=g=d=y=n.x+s,c=f=u=v=n.y+l,K(e,t,r,n,h+ne(r,n.a1,n.l1),c+ae(r,n.a1,n.l1),h,c),n.x!==xe&&n.y!==xe&&t.moveTo(h,c);pe&&(o=n["a"+a],i=n["l"+a],o!==xe&&i!==xe);)d=y,u=v,y+=ne(r,o,i),v+=ae(r,o,i),1===a&&(g=y,f=v),t.lineTo(y,v),a+=1;Z(e,t,r,n,d,u,y,v)}function ie(e,t,r){isNaN(ye(r.fontSize))||(r.fontSize+="px"),t.font=r.fontStyle+" "+r.fontSize+" "+r.fontFamily}function se(t,r,n,a){var o,i,s,l=ze.propCache;if(l.text===n.text&&l.fontStyle===n.fontStyle&&l.fontSize===n.fontSize&&l.fontFamily===n.fontFamily&&l.maxWidth===n.maxWidth&&l.lineHeight===n.lineHeight)n.width=l.width,n.height=l.height;else{for(n.width=r.measureText(a[0]).width,s=1;s<a.length;s+=1)i=r.measureText(a[s]).width,i>n.width&&(n.width=i);o=t.style.fontSize,t.style.fontSize=n.fontSize,n.height=ve(e.css(t,"fontSize"))*a.length*n.lineHeight,t.style.fontSize=o}}function le(e,t){var r,n,a,o,i,s,l=String(t.text),h=t.maxWidth,c=l.split("\n"),g=[];for(a=0;a<c.length;a+=1){if(o=c[a],i=o.split(" "),r=[],n="",1===i.length||e.measureText(o).width<h)r=[o];else{for(s=0;s<i.length;s+=1)e.measureText(n+i[s]).width>h&&(""!==n&&r.push(n),n=""),n+=i[s],s!==i.length-1&&(n+=" ");r.push(n)}g=g.concat(r.join("\n").replace(/( (\n))|( $)/gi,"$2").split("\n"))}return g}var he,ce=t.document,ge=t.Image,fe=t.Array,de=t.getComputedStyle,ue=t.Math,ye=t.Number,ve=t.parseFloat,pe=!0,me=!1,we=null,xe=void 0,be=e.extend,_e=e.inArray,Le=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},ke=e.isFunction,Ce=e.isPlainObject,Te=ue.PI,Se=ue.round,Pe=ue.abs,Re=ue.sin,Xe=ue.cos,Ye=ue.atan2,Ae=fe.prototype.slice,Oe=e.event.fix,De={},ze={dataCache:{},propCache:{},imageCache:{}},je={rotate:0,scaleX:1,scaleY:1,translateX:0,translateY:0,masks:[]},He={},We=["mousedown","mousemove","mouseup","mouseover","mouseout","touchstart","touchmove","touchend"],Ee={events:{},eventHooks:{},future:{}};n.baseDefaults={align:"center",arrowAngle:90,arrowRadius:0,autosave:pe,baseline:"middle",bringToFront:me,ccw:me,closed:me,compositing:"source-over",concavity:0,cornerRadius:0,count:1,cropFromCenter:pe,crossOrigin:we,cursors:we,disableEvents:me,draggable:me,dragGroups:we,groups:we,data:we,dx:we,dy:we,end:360,eventX:we,eventY:we,fillStyle:"transparent",fontStyle:"normal",fontSize:"12pt",fontFamily:"sans-serif",fromCenter:pe,height:we,imageSmoothing:pe,inDegrees:pe,intangible:me,index:we,letterSpacing:we,lineHeight:1,layer:me,mask:me,maxWidth:we,miterLimit:10,name:we,opacity:1,r1:we,r2:we,radius:0,repeat:"repeat",respectAlign:me,restrictDragToAxis:null,rotate:0,rounded:me,scale:1,scaleX:1,scaleY:1,shadowBlur:0,shadowColor:"transparent",shadowStroke:me,shadowX:0,shadowY:0,sHeight:we,sides:0,source:"",spread:0,start:0,strokeCap:"butt",strokeDash:we,strokeDashOffset:0,strokeJoin:"miter",strokeStyle:"transparent",strokeWidth:1,sWidth:we,sx:we,sy:we,text:"",translate:0,translateX:0,translateY:0,type:we,visible:pe,width:we,x:0,y:0},he=new n,r.prototype=he,Ee.extend=function(t){return t.name&&(t.props&&be(he,t.props),e.fn[t.name]=function n(e){var a,o,s,l,h,c=this;for(o=0;o<c.length;o+=1)a=c[o],s=i(a),s&&(l=new r(e),h=Y(a,l,e,n),f(a,s,l),t.fn.call(a,s,l));return c},t.type&&(De.drawings[t.type]=t.name)),e.fn[t.name]},e.fn.getEventHooks=function(){var e,t,r=this,n={};return 0!==r.length&&(e=r[0],t=p(e),n=t.eventHooks),n},e.fn.setEventHooks=function(t){var r,n,a,o=this;for(n=0;n<o.length;n+=1)r=e(o[n]),a=p(o[n]),be(a.eventHooks,t);return o},e.fn.getLayers=function(e){var t,r,n,a,o,i=this,s=[];if(0!==i.length)if(t=i[0],r=p(t),n=r.layers,ke(e))for(o=0;o<n.length;o+=1)a=n[o],e.call(t,a)&&s.push(a);else s=n;return s},e.fn.getLayer=function(e){var t,r,n,o,i,s,l=this;if(0!==l.length)if(t=l[0],r=p(t),n=r.layers,s=Le(e),e&&e.layer)o=e;else if("number"===s)0>e&&(e=n.length+e),o=n[e];else if("regexp"===s){for(i=0;i<n.length;i+=1)if(a(n[i].name)&&n[i].name.match(e)){o=n[i];break}}else o=r.layer.names[e];return o},e.fn.getLayerGroup=function(e){var t,r,n,a,o,i=this,s=Le(e);if(0!==i.length)if(t=i[0],"array"===s)o=e;else if("regexp"===s){r=p(t),n=r.layer.groups;for(a in n)if(a.match(e)){o=n[a];break}}else r=p(t),o=r.layer.groups[e];return o},e.fn.getLayerIndex=function(e){var t=this,r=t.getLayers(),n=t.getLayer(e);return _e(n,r)},e.fn.setLayer=function(t,r){var n,a,i,l,h,c,g,f=this;for(a=0;a<f.length;a+=1)if(n=e(f[a]),i=p(f[a]),l=e(f[a]).getLayer(t)){b(n,i,l,r),_(n,i,l,r),s(r);for(h in r)r.hasOwnProperty(h)&&(c=r[h],g=Le(c),"object"===g&&Ce(c)?(l[h]=be({},c),s(l[h])):"array"===g?l[h]=c.slice(0):"string"===g?0===c.indexOf("+=")?l[h]+=ve(c.substr(2)):0===c.indexOf("-=")?l[h]-=ve(c.substr(2)):!isNaN(c)&&o(c)&&"text"!==h?l[h]=ve(c):l[h]=c:l[h]=c);m(n,i,l),x(n,i,l),e.isEmptyObject(r)===me&&X(n,i,l,"change",r)}return f},e.fn.setLayers=function(t,r){var n,a,o,i,s=this;for(a=0;a<s.length;a+=1)for(n=e(s[a]),o=n.getLayers(r),i=0;i<o.length;i+=1)n.setLayer(o[i],t);return s},e.fn.setLayerGroup=function(t,r){var n,a,o,i,s=this;for(a=0;a<s.length;a+=1)if(n=e(s[a]),o=n.getLayerGroup(t))for(i=0;i<o.length;i+=1)n.setLayer(o[i],r);return s},e.fn.moveLayer=function(t,r){var n,a,o,i,s,l=this;for(a=0;a<l.length;a+=1)n=e(l[a]),o=p(l[a]),i=o.layers,s=n.getLayer(t),s&&(s.index=_e(s,i),i.splice(s.index,1),i.splice(r,0,s),0>r&&(r=i.length+r),s.index=r,X(n,o,s,"move"));return l},e.fn.removeLayer=function(t){var r,n,a,o,i,s=this;for(n=0;n<s.length;n+=1)r=e(s[n]),a=p(s[n]),o=r.getLayers(),i=r.getLayer(t),i&&(i.index=_e(i,o),o.splice(i.index,1),delete i._layer,b(r,a,i,{name:we}),_(r,a,i,{groups:we}),X(r,a,i,"remove"));return s},e.fn.removeLayers=function(t){var r,n,a,o,i,s,l=this;for(n=0;n<l.length;n+=1){for(r=e(l[n]),a=p(l[n]),o=r.getLayers(t),s=0;s<o.length;s+=1)i=o[s],r.removeLayer(i),s-=1;a.layer.names={},a.layer.groups={}}return l},e.fn.removeLayerGroup=function(t){var r,n,a,o,i,s,l=this;if(t!==xe)for(n=0;n<l.length;n+=1)if(r=e(l[n]),a=p(l[n]),o=r.getLayers(),i=r.getLayerGroup(t))for(i=i.slice(0),s=0;s<i.length;s+=1)r.removeLayer(i[s]);return l},e.fn.addLayerToGroup=function(t,r){var n,a,o,i=this,s=[r];for(a=0;a<i.length;a+=1)n=e(i[a]),o=n.getLayer(t),o.groups&&(s=o.groups.slice(0),-1===_e(r,o.groups)&&s.push(r)),n.setLayer(o,{groups:s});return i},e.fn.removeLayerFromGroup=function(t,r){var n,a,o,i,s=this,l=[];for(a=0;a<s.length;a+=1)n=e(s[a]),o=n.getLayer(t),o.groups&&(i=_e(r,o.groups),-1!==i&&(l=o.groups.slice(0),l.splice(i,1),n.setLayer(o,{groups:l})));return s},He.cursors=["grab","grabbing","zoom-in","zoom-out"],He.prefix=function(){var e=de(ce.documentElement,""),t=(Ae.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return"-"+t+"-"}(),e.fn.triggerLayerEvent=function(t,r){var n,a,o,i=this;for(a=0;a<i.length;a+=1)n=e(i[a]),o=p(i[a]),t=n.getLayer(t),t&&X(n,o,t,r);return i},e.fn.drawLayer=function(t){var r,n,a,o,s=this;for(r=0;r<s.length;r+=1)a=e(s[r]),n=i(s[r]),n&&(o=a.getLayer(t),k(a,n,o));return s},e.fn.drawLayers=function(t){var r,n,a,o,s,h,c,g,f,d,u,y,v,m=this,w=t||{};for(g=w.index,g||(g=0),n=0;n<m.length;n+=1)if(r=e(m[n]),a=i(m[n])){for(d=p(m[n]),w.clear!==me&&r.clearCanvas(),o=d.layers,c=g;c<o.length;c+=1)if(s=o[c],s.index=c,w.resetFire&&(s._fired=me),k(r,a,s,c+1),s._masks=d.transforms.masks.slice(0),s._method===e.fn.drawImage&&s.visible){v=!0;break}if(v)break;f=c,s=L(d),u=d.event,y=u.type,d.drag.layer&&C(r,d,y),h=d.lastIntersected,h===we||s===h||!h._hovered||h._fired||d.drag.dragging||(d.lastIntersected=we,h._fired=pe,h._hovered=me,X(r,d,h,"mouseout"),S(r,d)),s&&(s[y]||(y=G(y)),s._event&&s.intersects&&(d.lastIntersected=s,(s.mouseover||s.mouseout||s.cursors)&&!d.drag.dragging&&(s._hovered||s._fired||(s._fired=pe,s._hovered=pe,X(r,d,s,"mouseover"))),s._fired||(s._fired=pe,u.type=we,X(r,d,s,y)),!s.draggable||s.disableEvents||"mousedown"!==y&&"touchstart"!==y||(d.drag.layer=s))),s!==we||d.drag.dragging||S(r,d),f===o.length&&(d.intersecting.length=0,d.transforms=l(je),d.savedTransforms.length=0)}return m},e.fn.addLayer=function(e){var t,n,a,o=this;for(t=0;t<o.length;t+=1)n=i(o[t]),n&&(a=new r(e),a.layer=pe,Y(o[t],a,e));return o},He.props=["width","height","opacity","lineHeight"],He.propsObj={},e.fn.animateLayer=function(){function t(e,t,r){return function(){A(r),z(r),t.animating&&t.animated!==r||e.drawLayers(),r._animating=me,t.animating=me,t.animated=we,g[4]&&g[4].call(e[0],r),X(e,t,r,"animateend")}}function r(e,t,r){return function(n,a){var o,i,s,l=!1;"_"===a.prop[0]&&(l=!0,a.prop=a.prop.replace("_",""),r[a.prop]=r["_"+a.prop]),-1!==a.prop.indexOf(".")&&(o=a.prop.split("."),i=o[0],s=o[1],r[i]&&(r[i][s]=a.now)),r._pos!==a.pos&&(r._pos=a.pos,r._animating||t.animating||(r._animating=pe,t.animating=pe,t.animated=r),t.animating&&t.animated!==r||e.drawLayers()),g[5]&&g[5].call(e[0],n,a,r),X(e,t,r,"animate",a),l&&(a.prop="_"+a.prop)}}var n,a,o,s,l,h,c=this,g=Ae.call(arguments,0);for("object"===Le(g[2])?(g.splice(2,0,g[2].duration||we),g.splice(3,0,g[3].easing||we),g.splice(4,0,g[4].complete||we),g.splice(5,0,g[5].step||we)):(g[2]===xe?(g.splice(2,0,we),g.splice(3,0,we),g.splice(4,0,we)):ke(g[2])&&(g.splice(2,0,we),g.splice(3,0,we)),g[3]===xe?(g[3]=we,g.splice(4,0,we)):ke(g[3])&&g.splice(3,0,we)),a=0;a<c.length;a+=1)n=e(c[a]),o=i(c[a]),o&&(s=p(c[a]),l=n.getLayer(g[0]),l&&l._method!==e.fn.draw&&(h=be({},g[1]),h=D(c[a],l,h),O(h,pe),O(l),l.style=He.propsObj,e(l).animate(h,{duration:g[2],easing:e.easing[g[3]]?g[3]:we,complete:t(n,s,l),step:r(n,s,l)}),X(n,s,l,"animatestart")));return c},e.fn.animateLayerGroup=function(t){var r,n,a,o,i=this,s=Ae.call(arguments,0);for(n=0;n<i.length;n+=1)if(r=e(i[n]),a=r.getLayerGroup(t))for(o=0;o<a.length;o+=1)s[0]=a[o],r.animateLayer.apply(r,s);return i},e.fn.delayLayer=function(t,r){var n,a,o,i,s=this;for(r=r||0,a=0;a<s.length;a+=1)n=e(s[a]),o=p(s[a]),i=n.getLayer(t),i&&(e(i).delay(r),X(n,o,i,"delay"));return s},e.fn.delayLayerGroup=function(t,r){var n,a,o,i,s,l=this;for(r=r||0,a=0;a<l.length;a+=1)if(n=e(l[a]),o=n.getLayerGroup(t))for(s=0;s<o.length;s+=1)i=o[s],n.delayLayer(i,r);return l},e.fn.stopLayer=function(t,r){var n,a,o,i,s=this;for(a=0;a<s.length;a+=1)n=e(s[a]),o=p(s[a]),i=n.getLayer(t),i&&(e(i).stop(r),X(n,o,i,"stop"));return s},e.fn.stopLayerGroup=function(t,r){var n,a,o,i,s,l=this;for(a=0;a<l.length;a+=1)if(n=e(l[a]),o=n.getLayerGroup(t))for(s=0;s<o.length;s+=1)i=o[s],n.stopLayer(i,r);return l},W(["color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","fillStyle","outlineColor","strokeStyle","shadowColor"]),De.touchEvents={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"},De.mouseEvents={touchstart:"mousedown",touchend:"mouseup",touchmove:"mousemove"},F(["click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","touchstart","touchmove","touchend","contextmenu"]),e.event.fix=function(t){var r,n,a;return t=Oe.call(e.event,t),n=t.originalEvent,n&&(a=n.changedTouches,t.pageX!==xe&&t.offsetX===xe?(r=e(t.currentTarget).offset(),r&&(t.offsetX=t.pageX-r.left,t.offsetY=t.pageY-r.top)):a&&(r=e(t.currentTarget).offset(),r&&(t.offsetX=a[0].pageX-r.left,t.offsetY=a[0].pageY-r.top))),t},De.drawings={arc:"drawArc",bezier:"drawBezier",ellipse:"drawEllipse","function":"draw",image:"drawImage",line:"drawLine",path:"drawPath",polygon:"drawPolygon",slice:"drawSlice",quadratic:"drawQuadratic",rectangle:"drawRect",text:"drawText",vector:"drawVector",save:"saveCanvas",restore:"restoreCanvas",rotate:"rotateCanvas",scale:"scaleCanvas",translate:"translateCanvas"},e.fn.draw=function Ge(t){var n,a,o,s,l=this,h=new r(t);if(De.drawings[h.type]&&"function"!==h.type)l[De.drawings[h.type]](t);else for(a=0;a<l.length;a+=1)n=e(l[a]),o=i(l[a]),o&&(h=new r(t),s=Y(l[a],h,t,Ge),h.visible&&h.fn&&h.fn.call(l[a],o,h));return l},e.fn.clearCanvas=function Ie(e){var t,n,a,o=this,s=new r(e);for(t=0;t<o.length;t+=1)n=i(o[t]),n&&(s.width===we||s.height===we?(n.save(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,o[t].width,o[t].height),n.restore()):(a=Y(o[t],s,e,Ie),v(o[t],n,s,s.width,s.height),n.clearRect(s.x-s.width/2,s.y-s.height/2,s.width,s.height),u(n,s)));return o},e.fn.saveCanvas=function Fe(e){var t,n,a,o,s,l,c=this;for(t=0;t<c.length;t+=1)if(n=i(c[t]))for(s=p(c[t]),a=new r(e),o=Y(c[t],a,e,Fe),l=0;l<a.count;l+=1)h(n,s);return c},e.fn.restoreCanvas=function Be(e){var t,n,a,o,s,l,h=this;for(t=0;t<h.length;t+=1)if(n=i(h[t]))for(s=p(h[t]),a=new r(e),o=Y(h[t],a,e,Be),l=0;l<a.count;l+=1)c(n,s);return h},e.fn.rotateCanvas=function Ne(e){var t,n,a,o,s,l=this;for(t=0;t<l.length;t+=1)n=i(l[t]),n&&(s=p(l[t]),a=new r(e),o=Y(l[t],a,e,Ne),a.autosave&&h(n,s),N(n,a,s.transforms));return l},e.fn.scaleCanvas=function Je(e){var t,n,a,o,s,l=this;for(t=0;t<l.length;t+=1)n=i(l[t]),n&&(s=p(l[t]),a=new r(e),o=Y(l[t],a,e,Je),a.autosave&&h(n,s),J(n,a,s.transforms));return l},e.fn.translateCanvas=function qe(e){var t,n,a,o,s,l=this;for(t=0;t<l.length;t+=1)n=i(l[t]),n&&(s=p(l[t]),a=new r(e),o=Y(l[t],a,e,qe),a.autosave&&h(n,s),q(n,a,s.transforms));return l},e.fn.drawRect=function Qe(e){var t,n,a,o,s,l,h,c,g,d,u=this;for(t=0;t<u.length;t+=1)n=i(u[t]),n&&(a=new r(e),o=Y(u[t],a,e,Qe),a.visible&&(v(u[t],n,a,a.width,a.height),f(u[t],n,a),n.beginPath(),a.width&&a.height&&(s=a.x-a.width/2,l=a.y-a.height/2,g=Pe(a.cornerRadius),g?(h=a.x+a.width/2,c=a.y+a.height/2,a.width<0&&(d=s,s=h,h=d),a.height<0&&(d=l,l=c,c=d),0>h-s-2*g&&(g=(h-s)/2),0>c-l-2*g&&(g=(c-l)/2),n.moveTo(s+g,l),n.lineTo(h-g,l),n.arc(h-g,l+g,g,3*Te/2,2*Te,me),n.lineTo(h,c-g),n.arc(h-g,c-g,g,0,Te/2,me),n.lineTo(s+g,c),n.arc(s+g,c-g,g,Te/2,Te,me),n.lineTo(s,l+g),n.arc(s+g,l+g,g,Te,3*Te/2,me),a.closed=pe):n.rect(s,l,a.width,a.height)),B(u[t],n,a),y(u[t],n,a)));return u},e.fn.drawArc=function $e(e){var t,n,a,o,s=this;for(t=0;t<s.length;t+=1)n=i(s[t]),n&&(a=new r(e),o=Y(s[t],a,e,$e),a.visible&&(v(s[t],n,a,2*a.radius),f(s[t],n,a),n.beginPath(),V(s[t],n,a,a),B(s[t],n,a),y(s[t],n,a)));return s},e.fn.drawEllipse=function Ue(e){var t,n,a,o,s,l,h=this;for(t=0;t<h.length;t+=1)n=i(h[t]),n&&(a=new r(e),o=Y(h[t],a,e,Ue),a.visible&&(v(h[t],n,a,a.width,a.height),f(h[t],n,a),s=a.width*(4/3),l=a.height,n.beginPath(),n.moveTo(a.x,a.y-l/2),n.bezierCurveTo(a.x-s/2,a.y-l/2,a.x-s/2,a.y+l/2,a.x,a.y+l/2),n.bezierCurveTo(a.x+s/2,a.y+l/2,a.x+s/2,a.y-l/2,a.x,a.y-l/2),B(h[t],n,a),a.closed=pe,y(h[t],n,a)));return h},e.fn.drawPolygon=function Ve(e){var t,n,a,o,s,l,h,c,g,d,u,p=this;for(t=0;t<p.length;t+=1)if(n=i(p[t]),n&&(a=new r(e),o=Y(p[t],a,e,Ve),a.visible)){for(v(p[t],n,a,2*a.radius),f(p[t],n,a),l=2*Te/a.sides,h=l/2,s=h+Te/2,c=a.radius*Xe(h),n.beginPath(),u=0;u<a.sides;u+=1)g=a.x+a.radius*Xe(s),d=a.y+a.radius*Re(s),n.lineTo(g,d),a.concavity&&(g=a.x+(c+-c*a.concavity)*Xe(s+h),d=a.y+(c+-c*a.concavity)*Re(s+h),n.lineTo(g,d)),s+=l;B(p[t],n,a),a.closed=pe,y(p[t],n,a)}return p},e.fn.drawSlice=function Me(t){var n,a,o,s,l,h,c,g,d=this;for(a=0;a<d.length;a+=1)n=e(d[a]),o=i(d[a]),o&&(s=new r(t),l=Y(d[a],s,t,Me),s.visible&&(v(d[a],o,s,2*s.radius),f(d[a],o,s),s.start*=s._toRad,s.end*=s._toRad,s.start-=Te/2,s.end-=Te/2,s.start=Q(s.start),s.end=Q(s.end),s.end<s.start&&(s.end+=2*Te),h=(s.start+s.end)/2,c=s.radius*s.spread*Xe(h),g=s.radius*s.spread*Re(h),s.x+=c,s.y+=g,o.beginPath(),o.arc(s.x,s.y,s.radius,s.start,s.end,s.ccw),o.lineTo(s.x,s.y),B(d[a],o,s),s.closed=pe,y(d[a],o,s)));return d},e.fn.drawLine=function Ke(e){var t,n,a,o,s=this;for(t=0;t<s.length;t+=1)n=i(s[t]),n&&(a=new r(e),o=Y(s[t],a,e,Ke),a.visible&&(v(s[t],n,a),f(s[t],n,a),n.beginPath(),ee(s[t],n,a,a),B(s[t],n,a),y(s[t],n,a)));return s},e.fn.drawQuadratic=function Ze(e){var t,n,a,o,s=this;for(t=0;t<s.length;t+=1)n=i(s[t]),n&&(a=new r(e),o=Y(s[t],a,e,Ze),a.visible&&(v(s[t],n,a),f(s[t],n,a),n.beginPath(),te(s[t],n,a,a),B(s[t],n,a),y(s[t],n,a)));return s},e.fn.drawBezier=function et(e){var t,n,a,o,s=this;for(t=0;t<s.length;t+=1)n=i(s[t]),n&&(a=new r(e),o=Y(s[t],a,e,et),a.visible&&(v(s[t],n,a),f(s[t],n,a),n.beginPath(),re(s[t],n,a,a),B(s[t],n,a),y(s[t],n,a)));return s},e.fn.drawVector=function tt(e){var t,n,a,o,s=this;for(t=0;t<s.length;t+=1)n=i(s[t]),n&&(a=new r(e),o=Y(s[t],a,e,tt),a.visible&&(v(s[t],n,a),f(s[t],n,a),n.beginPath(),oe(s[t],n,a,a),B(s[t],n,a),y(s[t],n,a)));return s},e.fn.drawPath=function rt(e){var t,n,a,o,s,l,h=this;for(t=0;t<h.length;t+=1)if(n=i(h[t]),n&&(a=new r(e),o=Y(h[t],a,e,rt),a.visible)){for(v(h[t],n,a),f(h[t],n,a),n.beginPath(),s=1;pe&&(l=a["p"+s],l!==xe);)l=new r(l),"line"===l.type?ee(h[t],n,a,l):"quadratic"===l.type?te(h[t],n,a,l):"bezier"===l.type?re(h[t],n,a,l):"vector"===l.type?oe(h[t],n,a,l):"arc"===l.type&&V(h[t],n,a,l),s+=1;B(h[t],n,a),y(h[t],n,a)}return h},e.fn.drawText=function nt(t){var n,a,o,s,l,h,c,g,d,y,p,m,w,x,b,_=this,L=500;for(a=0;a<_.length;a+=1)if(n=e(_[a]),o=i(_[a]),o&&(s=new r(t),l=Y(_[a],s,t,nt),s.visible)){if(o.textBaseline=s.baseline,o.textAlign=s.align,ie(_[a],o,s),h=s.maxWidth!==we?le(o,s):s.text.toString().split("\n"),se(_[a],o,s,h),l&&(l.width=s.width,l.height=s.height),v(_[a],o,s,s.width,s.height),f(_[a],o,s),x=s.x,"left"===s.align?s.respectAlign?s.x+=s.width/2:x-=s.width/2:"right"===s.align&&(s.respectAlign?s.x-=s.width/2:x+=s.width/2),s.radius)for(d=ve(s.fontSize),s.letterSpacing===we&&(s.letterSpacing=d/L),g=0;g<h.length;g+=1){for(o.save(),o.translate(s.x,s.y),c=h[g],s.flipArcText&&(p=c.split(""),p.reverse(),c=p.join("")),y=c.length,o.rotate(-(Te*s.letterSpacing*(y-1))/2),w=0;y>w;w+=1)m=c[w],0!==w&&o.rotate(Te*s.letterSpacing),o.save(),o.translate(0,-s.radius),s.flipArcText&&o.scale(-1,-1),o.fillText(m,0,0),o.restore();s.radius-=d,s.letterSpacing+=d/(2*L*Te),o.restore()}else for(g=0;g<h.length;g+=1)c=h[g],b=s.y+g*s.height/h.length-(h.length-1)*s.height/h.length/2,o.shadowColor=s.shadowColor,o.fillText(c,x,b),"transparent"!==s.fillStyle&&(o.shadowColor="transparent"),0!==s.strokeWidth&&o.strokeText(c,x,b);b=0,"top"===s.baseline?b+=s.height/2:"bottom"===s.baseline&&(b-=s.height/2),s._event&&(o.beginPath(),o.rect(s.x-s.width/2,s.y-s.height/2+b,s.width,s.height),B(_[a],o,s),o.closePath()),u(o,s)}return ze.propCache=s,_},e.fn.measureText=function(e){var t,n,a,o=this;return n=o.getLayer(e),(!n||n&&!n._layer)&&(n=new r(e)),t=i(o[0]),t&&(ie(o[0],t,n),a=le(t,n),se(o[0],t,n,a)),n},e.fn.drawImage=function at(t){function n(e,t,r,n,a){n.width===we&&n.sWidth===we&&(n.width=n.sWidth=y.width),n.height===we&&n.sHeight===we&&(n.height=n.sHeight=y.height),a&&(a.width=n.width,a.height=n.height),n.sWidth!==we&&n.sHeight!==we&&n.sx!==we&&n.sy!==we?(n.width===we&&(n.width=n.sWidth),n.height===we&&(n.height=n.sHeight),n.cropFromCenter&&(n.sx+=n.sWidth/2,n.sy+=n.sHeight/2),n.sy-n.sHeight/2<0&&(n.sy=n.sHeight/2),n.sy+n.sHeight/2>y.height&&(n.sy=y.height-n.sHeight/2),n.sx-n.sWidth/2<0&&(n.sx=n.sWidth/2),n.sx+n.sWidth/2>y.width&&(n.sx=y.width-n.sWidth/2),v(e,t,n,n.width,n.height),f(e,t,n),t.drawImage(y,n.sx-n.sWidth/2,n.sy-n.sHeight/2,n.sWidth,n.sHeight,n.x-n.width/2,n.y-n.height/2,n.width,n.height)):(v(e,t,n,n.width,n.height),f(e,t,n),t.drawImage(y,n.x-n.width/2,n.y-n.height/2,n.width,n.height)),t.beginPath(),t.rect(n.x-n.width/2,n.y-n.height/2,n.width,n.height),B(e,t,n),t.closePath(),u(t,n),d(t,r,n)}function a(t,r,a,o,i){return function(){var s=e(t);n(t,r,a,o,i),o.layer?X(s,a,i,"load"):o.load&&o.load.call(s[0],i),o.layer&&(i._masks=a.transforms.masks.slice(0),o._next&&s.drawLayers({clear:me,resetFire:pe,index:o._next}))}}var o,s,l,h,c,g,y,m,w,x=this,b=ze.imageCache;for(s=0;s<x.length;s+=1)o=x[s],l=i(x[s]),l&&(h=p(x[s]),c=new r(t),g=Y(x[s],c,t,at),c.visible&&(w=c.source,m=w.getContext,w.src||m?y=w:w&&(b[w]&&b[w].complete?y=b[w]:(y=new ge,w.match(/^data:/i)||(y.crossOrigin=c.crossOrigin),y.src=w,b[w]=y)),y&&(y.complete||m?a(o,l,h,c,g)():(y.onload=a(o,l,h,c,g),y.src=y.src))));return x},e.fn.createPattern=function(t){function n(){h=a.createPattern(s,o.repeat),o.load&&o.load.call(g[0],h)}var a,o,s,l,h,c,g=this;return a=i(g[0]),a?(o=new r(t),c=o.source,ke(c)?(s=e("<canvas />")[0],s.width=o.width,s.height=o.height,l=i(s),c.call(s,l),n()):(l=c.getContext,c.src||l?s=c:(s=new ge,c.match(/^data:/i)||(s.crossOrigin=o.crossOrigin),s.src=c),s.complete||l?n():(s.onload=n,s.src=s.src))):h=we,h},e.fn.createGradient=function(e){var t,n,a,o,s,l,h,c,g,f,d=this,u=[];if(n=new r(e),t=i(d[0])){for(n.x1=n.x1||0,n.y1=n.y1||0,n.x2=n.x2||0,n.y2=n.y2||0,a=n.r1!==we&&n.r2!==we?t.createRadialGradient(n.x1,n.y1,n.r1,n.x2,n.y2,n.r2):t.createLinearGradient(n.x1,n.y1,n.x2,n.y2),h=1;n["c"+h]!==xe;h+=1)n["s"+h]!==xe?u.push(n["s"+h]):u.push(we);for(o=u.length,u[0]===we&&(u[0]=0),u[o-1]===we&&(u[o-1]=1),h=0;o>h;h+=1){if(u[h]!==we){for(g=1,f=0,s=u[h],c=h+1;o>c;c+=1){if(u[c]!==we){l=u[c];break}g+=1}s>l&&(u[c]=u[h])}else u[h]===we&&(f+=1,u[h]=s+f*((l-s)/g));a.addColorStop(u[h],n["c"+(h+1)]);
}}else a=we;return a},e.fn.setPixels=function ot(e){var t,n,a,o,s,l,h,c,g,f,d=this;for(n=0;n<d.length;n+=1)if(t=d[n],a=i(t),a&&(o=new r(e),s=Y(t,o,e,ot),v(d[n],a,o,o.width,o.height),(o.width===we||o.height===we)&&(o.width=t.width,o.height=t.height,o.x=o.width/2,o.y=o.height/2),0!==o.width&&0!==o.height)){if(h=a.getImageData(o.x-o.width/2,o.y-o.height/2,o.width,o.height),c=h.data,f=c.length,o.each)for(g=0;f>g;g+=4)l={r:c[g],g:c[g+1],b:c[g+2],a:c[g+3]},o.each.call(t,l,o),c[g]=l.r,c[g+1]=l.g,c[g+2]=l.b,c[g+3]=l.a;a.putImageData(h,o.x-o.width/2,o.y-o.height/2),a.restore()}return d},e.fn.getCanvasImage=function(e,t){var r,n=this,a=we;return 0!==n.length&&(r=n[0],r.toDataURL&&(t===xe&&(t=1),a=r.toDataURL("image/"+e,t))),a},e.fn.detectPixelRatio=function(r){var n,a,o,s,l,h,c,g,f,d,u=this;for(o=0;o<u.length;o+=1)a=u[o],n=e(u[o]),s=i(a),d=p(u[o]),d.scaled||(l=t.devicePixelRatio||1,h=s.webkitBackingStorePixelRatio||s.mozBackingStorePixelRatio||s.msBackingStorePixelRatio||s.oBackingStorePixelRatio||s.backingStorePixelRatio||1,c=l/h,1!==c&&(g=a.width,f=a.height,a.width=g*c,a.height=f*c,a.style.width=g+"px",a.style.height=f+"px",s.scale(c,c)),d.pixelRatio=c,d.scaled=pe,r&&r.call(a,c));return u},Ee.clearCache=function(){var e;for(e in ze)ze.hasOwnProperty(e)&&(ze[e]={})},e.support.canvas=e("<canvas />")[0].getContext!==xe,be(Ee,{defaults:he,setGlobalProps:f,transformShape:v,detectEvents:B,closePath:y,setCanvasFont:ie,measureText:se}),e.jCanvas=Ee,e.jCanvasObject=r});