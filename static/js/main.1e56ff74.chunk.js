(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={App:"App_App__jfiZ3",bg:"App_bg__262FX",activeBg:"App_activeBg__3Joa6","bg-overlay":"App_bg-overlay___L9KD",main:"App_main__24o8j","player-options":"App_player-options__2IGhs",middleWrap:"App_middleWrap__3-V84",audioSeek:"App_audioSeek__U7mq3",resetIcon:"App_resetIcon__3GXkO",playPauseBtn:"App_playPauseBtn__zO8ky",playMode:"App_playMode__4SPis",pauseMode:"App_pauseMode__2iKuT",playIcon:"App_playIcon__KY33h",pauseIcon:"App_pauseIcon__12S51",timerWrap:"App_timerWrap__1PRsH",timer:"App_timer__1uQv3",min:"App_min__hW2cY",sec:"App_sec__3atWo","volume-control":"App_volume-control__1Qodp","volume-slider":"App_volume-slider__380LW","volume-icon":"App_volume-icon__31Y44"}},10:function(e,t,a){e.exports={range:"styled-slider_range__15CKB",sliderBg:"styled-slider_sliderBg__3OWRZ"}},11:function(e,t,a){e.exports={drop:"styled-dropdown_drop__1jTPU",activeOption:"styled-dropdown_activeOption__1sA0I"}},16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),o=a(13),i=a.n(o),r=(a(21),a(15)),u=a(5),c=a(6),l=a(8),m=a(7),p=a(9),d=a(2),v=a.n(d),h=(a(27),a(1)),_=a.n(h),y=a(4),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleSongPlaying=a.handleSongPlaying.bind(Object(y.a)(Object(y.a)(a))),a.reset=a.reset.bind(Object(y.a)(Object(y.a)(a))),a.state={position:0,loopCount:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleSongPlaying",value:function(e){var t=e.position,a=e.duration;this.setState({position:t});var s=t+this.state.loopCount*a,n=Math.floor(s/6e4),o=Math.floor(s/1e3%60);n=("0"+n).slice(-2),o=("0"+o).slice(-2),this.setTimerValues(n,o),this.props.funcPerc(s/1e3)}},{key:"reset",value:function(){this.setState({position:0}),this.setTimerValues("00","00")}},{key:"setTimerValues",value:function(e,t){var a=document.getElementById("timer-min"),s=document.getElementById("timer-sec");a.innerHTML="".concat(e),s.innerHTML="".concat(t)}},{key:"render",value:function(){var e=this;return n.a.createElement(v.a,{url:this.props.url,playStatus:this.props.playStatus,onPlaying:this.handleSongPlaying,onFinishedPlaying:function(){return e.setState({loopCount:e.state.loopCount+1,position:0})},onStop:function(){return e.setState({loopCount:0,position:0})},position:this.state.position,volume:this.props.volume})}}]),t}(s.Component);var f=function(e){var t=e.alt,a=void 0===t?"":t,s=e.handleOnClick;return n.a.createElement("img",Object.assign({alt:a,onClick:function(){return s()}},e))},b=a(14),S={root:{},path:{stroke:"#0086ffcc",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#ffffffcc"},text:{fill:"#f88",fontSize:"30px"}};var E=function(e){var t=e.percentage,a=e.text,s=e.strokeWidth,o=void 0===s?3:s;return n.a.createElement(b.a,{percentage:t,text:a,strokeWidth:o,styles:S})},k=a(10),O=a.n(k);var N=function(e){var t=e.value;return n.a.createElement("div",{className:O.a.range},n.a.createElement("div",{className:O.a.sliderBg,style:{width:"".concat(t,"%")}}),n.a.createElement("input",Object.assign({type:"range"},e)))},P="svg/play.svg",A="svg/pause.svg",C="svg/arrow.svg",j="audio/rain.mp3",M="svg/volume-2.svg",T="svg/volume-1.svg",w="svg/volume-x.svg",I=a(3),U=a.n(I);var W=function(e){var t=e.duration,a=e.setDuration,o=e.min,i=e.max,r=Object(s.useRef)(null),u=Object(s.useRef)(null),c=function(e){switch(e){case 1:e=2;break;case 2:e=5;break;case 5:e=10;break;case 10:e=15}return e};return n.a.createElement("div",Object.assign({className:U.a.root},e),n.a.createElement("div",{className:U.a.main},n.a.createElement("span",{className:U.a.buttonWrap},n.a.createElement("img",{className:U.a.increase,src:C,alt:"inc",onMouseDown:function(){t+1<=i&&a(t+1),function e(t,s){var n=s+t;n<=i?r.current=setTimeout(function(){a(n),e(c(t),n)},450):s+1<=i&&(n=s+(t=1),r.current=setTimeout(function(){a(n),e(c(t),n)},450))}(1,t)},onMouseUp:function(){return clearTimeout(r.current)},onMouseLeave:function(){return clearTimeout(r.current)}})),n.a.createElement("input",{className:U.a.display,type:"number",value:t}),n.a.createElement("span",{className:U.a.buttonWrap},n.a.createElement("img",{className:U.a.decrease,src:C,alt:"dec",onMouseDown:function(){t-1>=o&&a(t-1),function e(t,s){var n=s-t;n>=o?u.current=setTimeout(function(){a(n),e(c(t),n)},450):s-1>=o&&(n=s-(t=1),u.current=setTimeout(function(){a(n),e(c(t),n)},450))}(1,t)},onMouseUp:function(){return clearTimeout(u.current)},onMouseLeave:function(){return clearTimeout(u.current)}}))),n.a.createElement("p",{className:U.a.minutes},"Minutes"))},H=a(11),L=a.n(H);var B=function(e){var t=e.options,a=e.activeOption,s=e.changeOption;return n.a.createElement("li",Object.assign({className:L.a.drop},e),a,n.a.createElement("ul",null,t.map(function(e,t){return e=e.toLowerCase(),n.a.createElement("li",{key:e+t,className:a===e.toLowerCase()&&L.a.activeOption,onClick:function(){return s(e)}},e)})))},x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e)))._onMouseMove=function(e){a.setState({opacity:1,transition:"opacity 0s",center_opacity:1}),setTimeout(function(){a.state.seekCurrentPosition<100&&a.state.pbuttonUrl===A&&a.setState({opacity:0,transition:"opacity 10s ease-out",center_opacity:.6})},3e3)},a.volumeChange=function(e){var t=Number(e.target.value);a.setState({volume:a.state.mute?a.state.volume:t,volumeIcon:a.state.mute||0===t?w:t<=50?T:M})},a.state={pbuttonUrl:P,audioStatus:v.a.status.STOPPED,audioNames:["rain","forest","park","stream","waves"],seekCurrentPosition:0,audioUrl:j,desiredTime:120,audioHovered:!1,counterHovered:!1,volume:100,mute:!1,volumeIcon:M,opacity:1,transition:"",center_opacity:1},a.soundCompoRef=n.a.createRef(),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"timeSelect",value:function(e){this.setState({desiredTime:e.duration})}},{key:"playPause",value:function(){[v.a.status.STOPPED,v.a.status.PAUSED].includes(this.state.audioStatus)?this.setState({pbuttonUrl:A,audioStatus:v.a.status.PLAYING}):this.state.audioStatus===v.a.status.PLAYING&&this.setState({pbuttonUrl:P,audioStatus:v.a.status.PAUSED}),this.state.pbuttonUrl===P?this.setState({opacity:0,center_opacity:.6,transition:"opacity 10s ease-out"}):this.setState({opacity:1,center_opacity:1,transition:"opacity 0s"})}},{key:"reset",value:function(){this.soundCompoRef.current&&this.soundCompoRef.current.reset(),this.setState({seekCurrentPosition:0,pbuttonUrl:P,audioStatus:v.a.status.STOPPED})}},{key:"audioSelect",value:function(e){switch(e){case this.state.audioNames[1]:this.setState({audioUrl:"audio/forest.mp3",bgImg:"img/forest.jpg"});break;case this.state.audioNames[2]:this.setState({audioUrl:"audio/park.mp3",bgImg:"img/park.jpg"});break;case this.state.audioNames[3]:this.setState({audioUrl:"audio/stream.mp3",bgImg:"img/stream.jpg"});break;case this.state.audioNames[4]:this.setState({audioUrl:"audio/waves.mp3",bgImg:"img/waves.jpg"});break;default:this.setState({audioUrl:j,bgImg:"img/rain.jpg"})}}},{key:"moveSeek",value:function(e){this.setState({seekCurrentPosition:e/this.state.desiredTime*100}),Math.floor(e)===this.state.desiredTime&&this.setState({pbuttonUrl:P,audioStatus:v.a.status.STOPPED})}},{key:"handleAudioHover",value:function(){this.setState({audioHovered:!this.state.audioHovered})}},{key:"handleCounterHover",value:function(){this.setState({counterHovered:!this.state.counterHovered})}},{key:"toggleMute",value:function(){this.setState({volumeIcon:this.state.mute?this.state.volume<=50?T:M:w,mute:!this.state.mute})}},{key:"render",value:function(){var e=this,t={opacity:this.state.opacity,transition:this.state.transition},a={opacity:this.state.center_opacity,transition:this.state.transition},s=this.state.audioUrl.replace("audio/","").replace(".mp3","").toLowerCase(),o=![v.a.status.PLAYING,v.a.status.PAUSED].includes(this.state.audioStatus);return n.a.createElement("div",{className:_.a.App,onMouseMove:this._onMouseMove},n.a.createElement("div",{className:_.a["bg-overlay"]}),n.a.createElement("main",{className:_.a.main},n.a.createElement("div",{className:_.a["player-options"]},n.a.createElement(W,{min:1,max:120,setDuration:function(t){e.timeSelect({duration:60*t})},duration:this.state.desiredTime/60,style:this.state.counterHovered?null:t,onMouseEnter:this.handleCounterHover.bind(this),onMouseLeave:this.handleCounterHover.bind(this)}),n.a.createElement(B,{options:this.state.audioNames,style:this.state.audioHovered?null:t,activeOption:s,changeOption:function(t){e.audioSelect(t)},onMouseEnter:this.handleAudioHover.bind(this),onMouseLeave:this.handleAudioHover.bind(this)})),n.a.createElement("div",{className:_.a.middleWrap},n.a.createElement("div",{className:_.a.audioSeek,style:a},n.a.createElement(E,{id:"seek",percentage:this.state.seekCurrentPosition}),n.a.createElement("div",{style:a,className:this.state.pbuttonUrl===P?"".concat(_.a.playPauseBtn," ").concat(_.a.pauseMode):"".concat(_.a.playPauseBtn," ").concat(_.a.playMode),alt:"Play",onClick:this.playPause.bind(this)},n.a.createElement("img",{className:_.a.pauseIcon,src:A,alt:""}),n.a.createElement("img",{className:_.a.playIcon,src:P,alt:""}))),n.a.createElement("div",{className:_.a.timerWrap},n.a.createElement(f,{className:_.a.resetIcon,src:"svg/reset.svg",alt:"reset",style:Object(r.a)({},a,{opacity:o?.4:this.state.center_opacity,transform:o&&"none",pointerEvents:o&&"none"}),handleOnClick:this.reset.bind(this)}),n.a.createElement("div",{className:_.a.timer,style:a},n.a.createElement("span",{id:"timer-min",className:_.a.min},"00"),n.a.createElement("span",null," : "),n.a.createElement("span",{id:"timer-sec",className:_.a.sec},"00")))),n.a.createElement("div",{className:_.a["volume-control"],style:{fadeTransition:t}},n.a.createElement(f,{className:_.a["volume-icon"],src:this.state.volumeIcon,handleOnClick:this.toggleMute.bind(this),style:t}),"\xa0",n.a.createElement("div",{className:_.a["volume-slider"],style:t},n.a.createElement(N,{id:"slider",onChange:this.volumeChange,step:1,min:0,max:100,value:this.state.mute?0:this.state.volume}))),n.a.createElement(g,{ref:this.soundCompoRef,playStatus:this.state.audioStatus,url:this.state.audioUrl,funcPerc:this.moveSeek.bind(this),desiredT:this.state.desiredTime,volume:this.state.mute?0:this.state.volume})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,t,a){e.exports={root:"styled-counter_root__2Utwq",main:"styled-counter_main__1omg1",buttonWrap:"styled-counter_buttonWrap__2gGy1",increase:"styled-counter_increase__1wRR4",decrease:"styled-counter_decrease__3TXU2",display:"styled-counter_display__1jOVL",minutes:"styled-counter_minutes__1OVqq"}}},[[16,1,2]]]);
//# sourceMappingURL=main.1e56ff74.chunk.js.map