!function(){var e={7559:function(e){function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.badgeElement=document.getElementById("cart-badge"),this.badgeText=this.badgeElement?this.badgeElement.getElementsByTagName("text")[0]:null,this.itemsQuantity=this.badgeText?Number(this.badgeText.innerHTML):null}var n,a,i;return n=e,a=[{key:"setBadgeItems",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.badgeElement&&this.badgeText&&("number"!=typeof e||e<0||(this.itemsQuantity=e,this.badgeText.innerHTML=e,0!==e?this.badgeElement.classList.add("show-cart-badge-icon"):this.badgeElement.classList.remove("show-cart-badge-icon")))}},{key:"addItem",value:function(){this.setBadgeItems(this.itemsQuantity+1)}},{key:"removeItem",value:function(){this.setBadgeItems(this.itemsQuantity-1)}}],a&&t(n.prototype,a),i&&t(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();e.exports=n}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}var a,i={};a=n(7559),window.CartBadge=new a;var r=window;for(var s in i)r[s]=i[s];i.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})}();