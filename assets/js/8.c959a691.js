(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{277:function(e,n,l){},300:function(e,n,l){"use strict";var c=l(277);l.n(c).a},321:function(e,n,l){"use strict";l.r(n);var c={components:{QrcodeStream:l(272).QrcodeStream},data:function(){return{fullscreen:!1}},computed:{fullscreenIcon:function(){return this.fullscreen?"/fullscreen-exit.svg":"/fullscreen.svg"}},watch:{fullscreen:function(e){e?this.requestFullscreen():this.exitFullscreen()}},methods:{onFullscreenChange:function(e){this.fullscreen=null!==document.fullscreenElement},requestFullscreen:function(){var e=this.$refs.wrapper;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},exitFullscreen:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},logErrors:function(e){e.catch(console.error)}}},t=(l(300),l(33)),u=Object(t.a)(c,(function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("div",{ref:"wrapper",class:{fullscreen:e.fullscreen},on:{fullscreenchange:e.onFullscreenChange}},[l("qrcode-stream",{on:{init:e.logErrors}},[l("button",{staticClass:"fullscreen-button",on:{click:function(n){e.fullscreen=!e.fullscreen}}},[l("img",{attrs:{src:e.$withBase(e.fullscreenIcon),alt:"toggle fullscreen"}})])])],1)}),[],!1,null,"1377bd13",null);n.default=u.exports}}]);