!function(e){var i=-1,t=function(t){return t.every=function(e,n,r){t._time(),r||(r=n,n=null);var d=i+=1;return t._timers[d]={visible:e,hidden:n,callback:r},t._run(d,!1),t.isSupported()&&t._listen(),d},t.stop=function(e){return!!t._timers[e]&&(t._stop(e),delete t._timers[e],!0)},t._timers={},t._time=function(){t._timed||(t._timed=!0,t._wasHidden=t.hidden(),t.change(function(){t._stopRun(),t._wasHidden=t.hidden()}))},t._run=function(i,n){var r,d=t._timers[i];if(t.hidden()){if(null===d.hidden)return;r=d.hidden}else r=d.visible;var l=function(){d.last=new Date,d.callback.call(e)};if(n){var s=new Date-d.last;r>s?d.delay=setTimeout(function(){d.id=setInterval(l,r),l()},r-s):(d.id=setInterval(l,r),l())}else d.id=setInterval(l,r)},t._stop=function(e){var i=t._timers[e];clearInterval(i.id),clearTimeout(i.delay),delete i.id,delete i.delay},t._stopRun=function(e){var i=t.hidden(),n=t._wasHidden;if(i&&!n||!i&&n)for(var r in t._timers)t._stop(r),t._run(r,!i)},t};"undefined"!=typeof module&&module.exports?module.exports=t(require("./visibility.core")):t(e.Visibility||require("./visibility.core"))}(window);