(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=(n(17),n(6)),l=n.n(i),s=n(10),u=n(1),m=n(2),p=n(4),h=n(3),E=n(5),v=n(7),d=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.question))},f=function(e){return r.a.createElement("div",null,e.answers.map(function(t,n){return r.a.createElement("div",{key:n},r.a.createElement("input",{onClick:e.onSubmit,type:"submit",value:t,placeholder:t}))}))},w=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"The correct answer was ",e.correct,"!"))},g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={question:{},answered:!1,submittedAnswer:"",answers:[],chosenAnswer:""},n.componentWillMount=function(){n.setState({question:n.props.question,answers:[n.props.question.results[0].correct_answer].concat(Object(v.a)(n.props.question.results[0].incorrect_answers))})},n.submitHandler=function(e){e.preventDefault();var t=[n.state.submittedAnswer].concat(Object(v.a)(n.state.answers));n.shuffleArray(t),n.setState({answered:!0,answers:t})},n.changeHandler=function(e){n.setState({submittedAnswer:e.target.value})},n.clickedAnswerHandler=function(e){console.log(e.target.value),n.setState({chosenAnswer:e.target.value})},n.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,0===this.state.question.response_code?r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{question:this.state.question.results[0].question}),this.state.answered?this.state.chosenAnswer?r.a.createElement(w,{correct:this.state.question.results[0].correct_answer}):r.a.createElement(f,{answers:this.state.answers,onSubmit:this.clickedAnswerHandler}):r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("input",{type:"text",onChange:this.changeHandler}),r.a.createElement("input",{type:"submit",placeholder:"Submit"}))):null)}}]),t}(a.Component),b=(n(20),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isLoaded:!1,categoryChosen:!1,loadedQuestion:{}},n.changeHandler=function(e){n.fetchQuestions(e.target.value)},n.fetchQuestions=function(){var e=Object(s.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://opentdb.com/api.php?amount=1&category=".concat(t,"&type=multiple")).then(function(e){return e.json()}).then(function(e){return n.setState({loadedQuestion:e,categoryChosen:!0})}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.categoryChosen?r.a.createElement(g,{question:this.state.loadedQuestion}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Choose a Category"),r.a.createElement("select",{onChange:this.changeHandler,value:this.state.value},r.a.createElement("option",{value:"any"},"Any Category"),r.a.createElement("option",{value:"9"},"General Knowledge"),r.a.createElement("option",{value:"10"},"Entertainment: Books"),r.a.createElement("option",{value:"11"},"Entertainment: Film"),r.a.createElement("option",{value:"12"},"Entertainment: Music"),r.a.createElement("option",{value:"13"},"Entertainment: Musicals & Theatres"),r.a.createElement("option",{value:"14"},"Entertainment: Television"),r.a.createElement("option",{value:"15"},"Entertainment: Video Games"),r.a.createElement("option",{value:"16"},"Entertainment: Board Games"),r.a.createElement("option",{value:"17"},"Science & Nature"),r.a.createElement("option",{value:"18"},"Science: Computers"),r.a.createElement("option",{value:"19"},"Science: Mathematics"),r.a.createElement("option",{value:"20"},"Mythology"),r.a.createElement("option",{value:"21"},"Sports"),r.a.createElement("option",{value:"22"},"Geography"),r.a.createElement("option",{value:"23"},"History"),r.a.createElement("option",{value:"24"},"Politics"),r.a.createElement("option",{value:"25"},"Art"),r.a.createElement("option",{value:"26"},"Celebrities"),r.a.createElement("option",{value:"27"},"Animals"),r.a.createElement("option",{value:"28"},"Vehicles"),r.a.createElement("option",{value:"29"},"Entertainment: Comics"),r.a.createElement("option",{value:"30"},"Science: Gadgets"),r.a.createElement("option",{value:"31"},"Entertainment: Japanese Anime & Manga"),r.a.createElement("option",{value:"32"},"Entertainment: Cartoon & Animations"))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.c04afc4a.chunk.js.map