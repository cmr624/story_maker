(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e){e.exports=[{value:"9",title:"General Knowledge"},{value:"10",title:"Books"},{value:"11",title:"Film"},{value:"12",title:"Music"},{value:"13",title:"Musicals & Theatres"},{value:"14",title:"Television"},{value:"15",title:"Video Games"},{value:"16",title:"Board Games"},{value:"17",title:"Science & Nature"},{value:"18",title:"Computers"},{value:"19",title:"Mathematics"},{value:"20",title:"Mythology"},{value:"21",title:"Sports"},{value:"22",title:"Geography"},{value:"23",title:"History"},{value:"24",title:"Politics"},{value:"25",title:"Art"},{value:"26",title:"Celebrities"},{value:"27",title:"Animals"},{value:"28",title:"Vehicles"},{value:"29",title:"Comics"},{value:"30",title:"Gadgets"},{value:"31",title:"Japanese Anime & Manga"},{value:"32",title:"Cartoon & Animations"}]},112:function(e,t,a){e.exports=a(241)},117:function(e,t,a){},190:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(104),c=a.n(l),i=(a(117),a(105)),o=a(106),s=a(110),u=a(107),m=a(111),d=a(3),p=a(70),f=function(e){return r.a.createElement("div",null,r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:e.question}}))},g=a(17),b=a.n(g),v=a(44),E=a(41),h=a.n(E),j=a(42),O=a.n(j),S=a(43),y=a.n(S),w=Object(v.withStyles)(function(e){return{card:{margin:"10px",padding:"10px"}}})(function(e){return r.a.createElement(b.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},e.answers.map(function(t,a){return r.a.createElement(h.a,{className:e.classes.card,key:a,onClick:function(){return e.onSubmit(t)}},r.a.createElement(O.a,null,r.a.createElement(y.a,null,t)))}))}),k=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"The correct answer was ",e.correct,"!"))};var I=function(e){var t=Object(n.useState)({}),a=Object(d.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)(""),g=Object(d.a)(m,2),b=g[0],v=g[1],E=Object(n.useState)([]),h=Object(d.a)(E,2),j=h[0],O=h[1],S=Object(n.useState)(""),y=Object(d.a)(S,2),I=y[0],C=y[1],M=Object(n.useState)(""),x=Object(d.a)(M,2),H=x[0],G=x[1];function A(){var e=[b||H].concat(Object(p.a)(j));!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(e),u(!0),O(e)}return Object(n.useEffect)(function(){c(e.question),O([e.question.results[0].correct_answer].concat(Object(p.a)(e.question.results[0].incorrect_answers)))},[]),r.a.createElement(r.a.Fragment,null,0===l.response_code?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{question:l.results[0].question}),s?I?r.a.createElement(k,{correct:l.results[0].correct_answer}):r.a.createElement(w,{answers:j,onSubmit:function(e){return C(e)}}):r.a.createElement("form",null,r.a.createElement("input",{type:"text",onChange:function(e){v(e.target.value)},placeholder:""!==H?H:""}),r.a.createElement("span",{onClick:function(){A()}},"Submit"),r.a.createElement("span",{onClick:function(){G(j[2])}},"Lie For Me"))):null)},C=(a(190),a(109));var M=Object(v.withStyles)(function(e){return{card:{padding:"10px",margin:"10px"}}})(function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),s=o[0],u=o[1],m=Object(n.useState)({}),p=Object(d.a)(m,2),f=p[0],g=p[1];Object(n.useEffect)(function(){c(C)},[]);var v=e.classes;return r.a.createElement(b.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},s?r.a.createElement(I,{question:f}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Choose a Category"),r.a.createElement(b.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},l.map(function(e,t){return r.a.createElement(h.a,{className:v.card,key:t,value:e.value,onClick:function(){var t;t=e.value,fetch("https://opentdb.com/api.php?amount=1&category=".concat(t,"&type=multiple")).then(function(e){return e.json()}).then(function(e){g(e),u(!0)})}},r.a.createElement(O.a,null,r.a.createElement(y.a,null,e.title)))}))))});var x=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(M,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Players"),r.a.createElement("span",null,"Test 1"),r.a.createElement("span",null,"Test 2"),r.a.createElement("span",null,"Test 3"),r.a.createElement("span",null,"Test 4"),r.a.createElement("button",{onClick:function(){return l(!0)}},"Start Game")))},H=a(69),G=a.n(H),A=(a(237),a(100)),F=a.n(A),R=a(103),q=a.n(R);G.a.initializeApp({apiKey:"AIzaSyAsdY2YHQDAVJ9ZJgsqNVB2kaB3A5jVmNY",authDomain:"fibbage-b1e4d.firebaseapp.com",databaseURL:"https://fibbage-b1e4d.firebaseio.com",projectId:"fibbage-b1e4d",storageBucket:"fibbage-b1e4d.appspot.com"});var T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={gameId:"",user:"",existingRoom:!1,started:!1,errorMsg:""},a.startGameHandler=function(){a.setState({started:!0})},a.inputHandler=function(e){var t=e.target.value;a.setState({user:t})},a.gameIdInputHandler=function(e){var t=e.target.value;a.setState({gameId:t})},a.joinRoom=function(){var e=a.state.gameId,t=a.state.user;G.a.database().ref("games/"+e+"/"+t).set({points:0,id:F()()}),a.setState({started:!0})},a.startGameHandler=function(){if(a.state.user.length>0){var e=q()(),t=a.state.user;G.a.database().ref("games/"+e).set({gameOwner:t}),G.a.database().ref("games/"+e+"/"+t).set({points:0,id:F()()}),a.setState({gameId:e,started:!0})}else a.setState({errorMsg:"Must enter a username to create game"})},a.joinGameHandler=function(e){a.state.user.length>0?a.setState({existingRoom:!0}):a.setState({errorMsg:"Must enter a username to join game"})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},this.state.started?r.a.createElement(x,null):this.state.existingRoom?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"Enter a game id",onInput:this.gameIdInputHandler}),r.a.createElement("button",{onClick:this.joinRoom},"Join Room")):r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"Enter a username",onInput:this.inputHandler}),r.a.createElement("span",{onClick:this.startGameHandler},"Create a Room"),r.a.createElement("span",{onClick:this.joinGameHandler},"Join a Room"),r.a.createElement("p",null,this.state.errorMsg)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[112,1,2]]]);
//# sourceMappingURL=main.d348f21a.chunk.js.map