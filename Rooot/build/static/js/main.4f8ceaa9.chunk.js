(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{103:function(e,t,n){},107:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(24),a=n.n(r),s=(n(52),n(53),n(19)),o=n.n(s),l=n(25),u=n(17),d=n(42),j=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),b=(n(72),"fb89453090d349caf32b362a88969e75"),h={fetchTrending:"/trending/all/week?api_key=".concat(b," & language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(b,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(b,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(b,"&with_genres=28"),fetchComdeynMovies:"/discover/movie?api_key=".concat(b,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(b,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(b,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(b,"&with_genres=99")},f=n(3);var p=function(){var e,t,n=Object(c.useState)([]),i=Object(u.a)(n,2),r=i[0],a=i[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(h.fetchNetflixOriginals);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(r),Object(f.jsxs)("header",{className:"banner",style:{backgroundSize:"Cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===r||void 0===r?void 0:r.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(f.jsxs)("div",{className:"banner_contents",children:[Object(f.jsx)("h1",{className:"banner_title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(f.jsxs)("div",{className:"banner_buttons",children:[Object(f.jsx)("button",{className:"banner_button",children:" Play "}),Object(f.jsx)("button",{className:"banner_button",children:" My list "})]}),Object(f.jsx)("h1",{className:"banner_description",children:(e=null===r||void 0===r?void 0:r.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(f.jsx)("div",{className:"banner--fadeBottom"})]})},m=(n(74),n(75),n(9));var v=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(m.f)(),a=function(){window.scrollY>100?i(!0):i(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.addEventListener("scroll",a)}}),[]),Object(f.jsx)("div",{className:"nav ".concat(n&&"nav_black"),children:Object(f.jsxs)("div",{className:"nav_contents",children:[Object(f.jsx)("img",{onClick:function(){return r.push("/")},className:"nav_logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(f.jsx)("img",{onClick:function(){return r.push("/profile")},className:"nav_avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:""})]})})},g=(n(83),n(43)),O=n(46),x=n.n(O);var w=function(e){var t=e.title,n=e.fetchUrl,i=e.isLargeRow,r=void 0!==i&&i,a=Object(c.useState)([]),s=Object(u.a)(a,2),d=s[0],b=s[1],h=Object(c.useState)(""),p=Object(u.a)(h,2),m=p[0],v=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(n);case 2:return t=e.sent,b(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("h2",{children:[" ",t," "]}),Object(f.jsx)("div",{className:"row_posters",children:d.map((function(e){return Object(f.jsx)("img",{onClick:function(){return function(e){m?v(""):x()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);v(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(r&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),m&&Object(f.jsx)(g.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})};var _=function(){return Object(f.jsxs)("div",{className:"homeScreen",children:[Object(f.jsx)(v,{}),Object(f.jsx)(p,{}),Object(f.jsx)(w,{title:"NETFLIX ORIGINALS",fetchUrl:h.fetchNetflixOriginals,isLargeRow:!0}),Object(f.jsx)(w,{title:"Trending Now",fetchUrl:h.fetchTrending,isLargeRow:!0}),Object(f.jsx)(w,{title:"Top Rated",fetchUrl:h.fetchTopRated,isLargeRow:!0}),Object(f.jsx)(w,{title:"Action Movies ",fetchUrl:h.fetchActionMovies,isLargeRow:!0}),Object(f.jsx)(w,{title:"Comedy Movies ",fetchUrl:h.fetchComdeynMovies,isLargeRow:!0}),Object(f.jsx)(w,{title:"Horror Movies ",fetchUrl:h.fetchHorrorMovies,isLargeRow:!0}),Object(f.jsx)(w,{title:"Romance Movies ",fetchUrl:h.fetchRomanceMovies,isLargeRow:!0}),Object(f.jsx)(w,{title:"Documentaries ",fetchUrl:h.fetchDocumentaries,isLargeRow:!0})]})},N=n(29),S=(n(103),n(32)),k=(S.a.initializeApp({apiKey:"AIzaSyCL2vwDCGHOug43WzEMYtisHqK188DFpbs",authDomain:"netflix-clone-build-2d7d8.firebaseapp.com",projectId:"netflix-clone-build-2d7d8",storageBucket:"netflix-clone-build-2d7d8.appspot.com",messagingSenderId:"731815724877",appId:"1:731815724877:web:7022613c87d90760769904"}).firestore(),S.a.auth());n(107);var y=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null);return Object(f.jsx)("div",{className:"signupScreen",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("h1",{children:"Sign In"}),Object(f.jsx)("input",{ref:e,placeholder:"Email",type:"email"}),Object(f.jsx)("input",{ref:t,placeholder:"Password",type:"password"}),Object(f.jsx)("button",{type:"submit",onClick:function(n){n.preventDefault(),k.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){return alert(e.message)}))},children:"Sign In "}),Object(f.jsxs)("h4",{children:[Object(f.jsx)("span",{className:"signupScreen_gray",children:"New to Netflix ? "}),Object(f.jsx)("span",{className:"signupScreen_link",onClick:function(n){n.preventDefault(),k.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign Up now. "})]})]})})};var R=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(f.jsxs)("div",{className:"loginScreen",children:[Object(f.jsxs)("div",{className:"loginScreen_background",children:[Object(f.jsx)("img",{className:"loginScreen_logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(f.jsx)("button",{onClick:function(){return i(!0)},className:"loginScreen_button",children:"Sign In"}),Object(f.jsx)("div",{className:"loginScreen_gradient"})]}),Object(f.jsx)("div",{className:"loginScreen_body",children:n?Object(f.jsx)(y,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"  Unlimited films, TV programmes and more. "}),Object(f.jsx)("h2",{children:"  Watch anywhere. Cancel at any time "}),Object(f.jsx)("h3",{children:"   Ready to watch ? Enter your email to create or restart your membership "}),Object(f.jsx)("div",{className:"loginScreen_input",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{type:"email",placeholder:"Email Adress"}),Object(f.jsx)("button",{onClick:function(){return i(!0)},className:"loginScreen_getStarted",children:"GET STARTED"})]})})]})})]})},L=n(20),E=n(26),M=Object(E.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),U=M.actions,C=U.login,I=U.logout,A=function(e){return e.user.user},T=M.reducer;n(109);var D=function(){var e=Object(L.c)(A);return Object(f.jsxs)("div",{className:"profileScreen",children:[Object(f.jsx)(v,{}),Object(f.jsxs)("div",{className:"profileScreen_body",children:[Object(f.jsx)("h1",{children:"Edit Profile"}),Object(f.jsxs)("div",{className:"profileScreen_info",children:[Object(f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:""}),Object(f.jsxs)("div",{className:"profileScreen_details",children:[Object(f.jsx)("h2",{children:e.email}),Object(f.jsx)("div",{className:"profileScreen_plans",children:Object(f.jsx)("button",{onClick:function(){return k.signOut()},className:"profileScreen_signOut",children:" Sign Out "})})]})]})]})]})};var P=function(){var e=Object(L.c)(A),t=Object(L.b)();return Object(c.useEffect)((function(){return k.onAuthStateChanged((function(e){t(e?C({uid:e.uid,email:e.email}):I())}))}),[t]),Object(f.jsx)("div",{className:"app",children:Object(f.jsx)(N.a,{children:e?Object(f.jsxs)(m.c,{children:[Object(f.jsx)(m.a,{path:"/profile",children:Object(f.jsx)(D,{})}),Object(f.jsx)(m.a,{exact:!0,path:"/",children:Object(f.jsx)(_,{})})]}):Object(f.jsx)(R,{})})})},W=Object(E.a)({reducer:{user:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(L.a,{store:W,children:Object(f.jsx)(P,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,t,n){},53:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},83:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.4f8ceaa9.chunk.js.map