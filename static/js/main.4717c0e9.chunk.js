(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),s=a(8),l=a.n(s),o=a(16),m=a(2),u=a(3),d=a(5),p=a(4),v=a(6),h=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onInputChange=function(e){e.preventDefault(),a.setState({term:e.target.value})},a.onSubmitEvent=function(e){e.preventDefault(),a.props.onTermSubmit(a.state.term)},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{className:"ui form",onSubmit:this.onSubmitEvent},i.a.createElement("div",{className:"field"},i.a.createElement("label",null," Search Videos "),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),t}(i.a.Component),E=a(17),f=a.n(E).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:20,key:"AIzaSyACtK0qEp4ETZ3Jn4sJQ2dsUkVX_3Z9ek8"}}),b=(a(45),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:" video-item item"},i.a.createElement("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),S=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){return i.a.createElement(b,{key:e.id.videoId,onVideoSelect:a,video:e})});return i.a.createElement("div",{className:"ui relaxed divided list"},n)},w=function(e){var t=e.video;if(t){var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("div",{className:"ui header"},t.snippet.title),i.a.createElement("p",{className:"ui paragraph"},t.snippet.description),i.a.createElement("h3",null,"Channel Title : ",t.snippet.channelTitle),i.a.createElement("p",null,"Published At : ",t.snippet.publishedAt),i.a.createElement("p",null,"BroadCast Content : ",t.snippet.liveBroadcastContent)))}return i.a.createElement("div",null,"LOADING...")},N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],seletedvideo:null},a.onTermSubmit=function(){var e=Object(o.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]}),console.log(a.state.videos);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("Motivation Videos USA")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(h,{onTermSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(w,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(S,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(N,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4717c0e9.chunk.js.map