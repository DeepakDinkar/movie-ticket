(this.webpackJsonpbookmyshow=this.webpackJsonpbookmyshow||[]).push([[0],{111:function(e,a,t){},112:function(e,a,t){},114:function(e,a,t){},172:function(e,a,t){},173:function(e,a,t){"use strict";t.r(a);t(83);var n=t(0),o=t.n(n),l=t(37),r=t.n(l),s=(t(26),t(18)),c=t(27),i=t(11),m=t(10),u=t(13),d=t(12),p=t(19),v=t(14),h=t(5),E=t(4),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={activeState:"movie",scrollTop:0},t.onActiveLink=t.onActiveLink.bind(Object(p.a)(t)),t.handleScroll=t.handleScroll.bind(Object(p.a)(t)),t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"handleScroll",value:function(e){this.setState({scrollTop:document.getElementById("BOXOffice").scrollTop})}},{key:"componentDidMount",value:function(){switch(window.addEventListener("scroll",this.handleScroll),console.log(this.props.location.pathname.includes("movies")),null!=this.props.location.pathname){case this.props.location.pathname.includes("movies"):this.onActiveLink("movies");break;case this.props.location.pathname.includes("events"):this.onActiveLink("events");break;case this.props.location.pathname.includes("shows"):this.onActiveLink("shows");break;case this.props.location.pathname.includes("play"):this.onActiveLink("play");break;default:this.onActiveLink("")}}},{key:"render",value:function(){var e=this;return o.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top",style:{background:this.state.scrollTop>0?"":"transparent",boxShadow:this.state.scrollTop>0?"":"none"}},o.a.createElement(s.b,{className:"navbar-brand",to:"/home",onClick:function(){return e.onActiveLink("")}},"BO",o.a.createElement("span",{style:{color:"#FFEA00",fontFamily:"inherit"}},"X"),"OFFICE"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",style:{zIndex:11}},o.a.createElement("span",{className:"navbar-toggler-icon",id:"toggle"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},o.a.createElement("div",{className:"navbar-nav"},o.a.createElement(s.b,{className:"nav-item nav-link "+("movies"===this.state.activeState?"active":""),to:"/movies",onClick:function(){return e.onActiveLink("movies")}},"Movies"),o.a.createElement(s.b,{className:"nav-item nav-link "+("events"===this.state.activeState?"active":""),to:"/events",onClick:function(){return e.onActiveLink("events")}},"Events"),o.a.createElement(s.b,{className:"nav-item nav-link "+("shows"===this.state.activeState?"active":""),to:"/shows",onClick:function(){return e.onActiveLink("shows")}},"Popular Shows"),o.a.createElement(s.b,{className:"nav-item nav-link "+("play"===this.state.activeState?"active":""),to:"/play",onClick:function(){return e.onActiveLink("play")}},"Plays"))),o.a.createElement("div",{className:"position-absolute brand-image d-none d-md-block",style:{right:"0",padding:"15px"}},o.a.createElement(E.a,{icon:h.g,color:"#FFEA00",size:"3x"})))}},{key:"onActiveLink",value:function(e){this.setState({activeState:e})}}]),a}(n.Component),N=Object(c.g)(b),f=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"row justify-content-center footer",style:{color:"#FFEA00",width:"100%",bottom:"0"}},o.a.createElement("p",{style:{fontSize:"10px",fontWeight:"bold",margin:"5px 0"}},o.a.createElement("span",{className:"px-2"},"\xa9 2020 bookmymovie.com"),o.a.createElement(E.a,{icon:h.o,color:"#FFEA00",size:"1x"})))}}]),a}(n.Component);var g=function(){return o.a.createElement("div",{className:"no-event"},o.a.createElement(E.a,{icon:h.d,size:"5x"}),o.a.createElement("div",null,"No Upcoming Events!"))},y=(t(94),t(38)),k=t.n(y),x=k.a.create({baseURL:"https://api.themoviedb.org/3/"}),w=function(e){return x.get(e,{params:{api_key:"d9c955e307b9020a5d9af1d049f8a191"}}).then((function(e){return Promise.resolve(e)}))},C=(t(111),Object.freeze({BASE_URL:"https://image.tmdb.org/t/p/",BACKDROP_SIZE:"w1280",LOGO_SIZE:"w154",POSTER_SIZE:"w780",PROFILE_SIZE:"w185",STILL_SIZE:"w300"})),S=(k.a.create({baseURL:C.BASE_URL}),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"card mx-2",style:{minWidth:"250px"}},o.a.createElement("img",{className:"card-img-top",src:C.BASE_URL+C.POSTER_SIZE+this.props.movie.poster_path,alt:"Card cap"}),o.a.createElement("div",{className:"card-body p-0 movie-card",style:{color:"black"}},o.a.createElement("span",{className:"card-title m-2 font-weight-bold"},this.props.movie.title),o.a.createElement("div",{className:"movie-add-ons"},o.a.createElement("div",{className:"add-on-item"},o.a.createElement("span",null,"Popularity"),o.a.createElement("span",null,this.props.movie.popularity)),o.a.createElement("div",{className:"add-on-item"},o.a.createElement("span",null,"Votes"),o.a.createElement("span",null,this.props.movie.vote_count)),o.a.createElement("div",{className:"add-on-item"},o.a.createElement("span",null,"Rating "),o.a.createElement("span",null,this.props.movie.vote_average)),o.a.createElement("div",{className:"add-on-item"},o.a.createElement("span",null,"Release Date "),o.a.createElement("span",null,this.props.movie.release_date)))),o.a.createElement("div",{className:"card-footer"},o.a.createElement("span",null,this.props.movie.title),o.a.createElement("span",null,o.a.createElement(E.a,{icon:h.h,color:"#FFEA00",size:"1x"}),"\xa0\xa0",this.props.movie.vote_average,"\xa0\xa0\xa0\xa0 ( ",this.props.movie.vote_count," )")))}}]),a}(n.Component)),O=t(36);function T(e){var a=Object(n.useState)({title:"",overview:"",bannerUrl:"",movieId:""}),t=Object(O.a)(a,2),l=t[0],r=t[1],s=Object(n.useState)([]),c=Object(O.a)(s,2),i=c[0],m=c[1];return Object(n.useEffect)((function(){w("movie/upcoming").then((function(e){var a=e.data.results,t=a[Math.floor(Math.random()*a.length)];r({title:t.title,overview:t.overview,bannerUrl:"url("+C.BASE_URL+C.BACKDROP_SIZE+t.backdrop_path+")",movieId:t.id}),w("movie/"+t.id).then((function(e){m(e.data.genres)}))}))}),[]),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"banner",style:{backgroundImage:l.bannerUrl}},o.a.createElement("div",{className:"banner-card"},o.a.createElement("div",{className:"banner-title"},o.a.createElement("span",null,l.title),i.map((function(e){return o.a.createElement("span",{className:"banner-movie-type",key:e.id},e.name)})),o.a.createElement("div",null,o.a.createElement(E.a,{icon:h.m,color:"#FFEA00",size:"1x",className:"toggle-icon"}),o.a.createElement(E.a,{icon:h.m,color:"#FFEA00",size:"1x",className:"toggle-icon"}),o.a.createElement(E.a,{icon:h.m,color:"#FFEA00",size:"1x",className:"toggle-icon"}),o.a.createElement(E.a,{icon:h.n,color:"#FFEA00",size:"1x",className:"toggle-icon"}),o.a.createElement(E.a,{icon:h.m,color:"#75757580",size:"1x",className:"toggle-icon"}))),o.a.createElement("span",null,"SYNOPSIS"),o.a.createElement("p",null,l.overview),o.a.createElement("div",{style:{color:"#FFEA00"}},o.a.createElement(E.a,{icon:h.h,size:"1x",className:"mr-2",color:"#FFEA00",style:{position:"relative",top:"1px"}}),"By: Cary Joji Fukunaga")),o.a.createElement("button",{className:"btn-buy-ticket",onClick:function(){return function(e,a){a.push("/movie/"+e)}(l.movieId,e)}},"Buy Tickets",o.a.createElement(E.a,{icon:h.a,size:"1x",className:"mx-2",style:{position:"relative",top:"1px"}}))))}Object(c.g)(T);var j=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={playingMovies:[],popularMovies:[],topRatedMovies:[]},t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getNowPlayingMovies(),this.getPopularMovies(),this.getTopRatedMovies()}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"card-group-title"},"Now Playing",o.a.createElement("span",{onClick:function(){return e.routeToMovies({name:"Now Playing",value:"now_playing"},e.props)}},"Show All"))),o.a.createElement("div",{className:"row card-wrap "},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"movie-section"},o.a.createElement(E.a,{className:"left-arrow position-absolute h-100",icon:h.b,size:"2x",color:"white"}),o.a.createElement(E.a,{className:"right-arrow position-absolute h-100",icon:h.c,size:"2x",color:"white"}),o.a.createElement("div",{className:"scroll-section"},this.getMovieCards(this.state.playingMovies))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"card-group-title"},"Popular",o.a.createElement("span",{onClick:function(){return e.routeToMovies({name:"Popular",value:"popular"},e.props)}},"Show All"))),o.a.createElement("div",{className:"row card-wrap "},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"movie-section"},o.a.createElement(E.a,{className:"left-arrow position-absolute h-100",icon:h.b,size:"2x",color:"white"}),o.a.createElement(E.a,{className:"right-arrow position-absolute h-100",icon:h.c,size:"2x",color:"white"}),o.a.createElement("div",{className:"scroll-section"},this.getMovieCards(this.state.popularMovies))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"card-group-title"},"Top Rated",o.a.createElement("span",{onClick:function(){return e.routeToMovies({name:"Top Rated",value:"top_rated"},e.props)}},"Show All"))),o.a.createElement("div",{className:"row card-wrap "},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"movie-section"},o.a.createElement(E.a,{className:"left-arrow position-absolute h-100",icon:h.b,size:"2x",color:"white"}),o.a.createElement(E.a,{className:"right-arrow position-absolute h-100",icon:h.c,size:"2x",color:"white"}),o.a.createElement("div",{className:"scroll-section"},this.getMovieCards(this.state.topRatedMovies))))))}},{key:"getNowPlayingMovies",value:function(){var e=this;return w("movie/now_playing").then((function(a){e.setState({playingMovies:a.data.results.splice(0,8)})}))}},{key:"getPopularMovies",value:function(){var e=this;return w("movie/popular").then((function(a){e.setState({popularMovies:a.data.results.splice(0,7)})}))}},{key:"getTopRatedMovies",value:function(){var e=this;return w("movie/top_rated").then((function(a){e.setState({topRatedMovies:a.data.results.splice(0,7)})}))}},{key:"getMovieCards",value:function(e){var a=this;return e.map((function(e,t){return o.a.createElement(S,{movie:e,key:e.id,onClick:function(){return a.routeToMovie(e,a.props)}})}))}},{key:"routeToMovies",value:function(e,a){a.history.push({pathname:"/movies",state:e})}},{key:"routeToMovie",value:function(e,a){a.history.push("/movie/"+e.id)}}]),a}(n.Component),P=Object(c.g)(j),_=(t(112),t(113),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).seatsLayout=[10,10,10,14,14,14,14,14,14,14,10,10],t.state={seats:[],occupiedSeats:[]},t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({seats:this.createSeats(),occupiedSeats:["A4","A5","A6","E7","F12","F13","F14","H2"]}),window.scrollTo(0,document.body.scrollHeight)}},{key:"createSeats",value:function(){for(var e=[],a=1;a<=this.seatsLayout.length;a++){for(var t=[],n=1;n<this.seatsLayout[a];n++)t.push(String.fromCharCode(64+a)+""+n);e.push(t)}return e}}]),Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.getSeatLayout(),o.a.createElement("div",{className:"seat-section"},o.a.createElement("span",null,o.a.createElement(E.a,{className:"mx-2",icon:h.l,size:"1x",color:"#212529"}),"AVAILABLE"),o.a.createElement("span",null,o.a.createElement(E.a,{className:"mx-2",icon:h.l,size:"1x",color:"#f44336"}),"TAKEN"),o.a.createElement("span",null,o.a.createElement(E.a,{className:"mx-2",icon:h.l,size:"1x",color:"#7CB342"}),"YOUR SELECTION")))}},{key:"getSeatLayout",value:function(){var e=this;return this.state.seats.map((function(a,t){return o.a.createElement("div",{key:t},e.getSeatColumns(a))}))}},{key:"getSeatColumns",value:function(e){var a=this;return e.map((function(t,n){return o.a.createElement("div",{onClick:function(){return a.props.ontoggleBook(t)},key:n,className:Math.floor(e.length/2)===n?"seat ml-4":"seat"},o.a.createElement("span",{className:"seat-number"},t),o.a.createElement(E.a,{icon:h.l,color:a.props.bookSeats.includes(t)?"#7CB342":"",size:"2x",className:a.state.occupiedSeats.includes(t)?"booked":""}))}))}}]),a}(n.Component)),M=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).maxTicketCount=5,t.state={movie:{},poster_path:"",bookSeats:[],bookTicketCount:0},t.toggleBookedStatus=t.toggleBookedStatus.bind(Object(p.a)(t)),t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setMovieDescription(),window.scrollTo(0,0)}},{key:"render",value:function(){return o.a.createElement("div",{className:"description"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col offset-sm-2"},o.a.createElement("div",{className:"bo-movie-title d-flex mt-4"},o.a.createElement("div",{className:"circle-wrap"},o.a.createElement("span",{className:"position-absolute"},this.state.movie.vote_average),o.a.createElement("svg",{height:"50",width:"50",style:{transform:"rotate(270deg)"}},o.a.createElement("circle",{className:"circle",cx:"25",cy:"25",r:"20",style:{strokeDashoffset:this.state.movie.vote_average?10*(10-this.state.movie.vote_average):0},stroke:"#ffea00",strokeWidth:"3"}))),o.a.createElement("div",{className:"title-wrap m-2"},o.a.createElement("h3",{className:"m-0"},this.state.movie.title),o.a.createElement("span",{style:{fontSize:"10px"}},this.state.movie.runtime," MIN"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"bo-book-show mx-4 mb-4"},o.a.createElement("div",{className:"bo-movie-poster mx-4"},o.a.createElement("img",{className:"card-img-banner h-100 w-100",src:this.state.poster_path,alt:"Banner card"})),o.a.createElement("div",{className:"bo-wrap"},o.a.createElement("div",{className:"bo-dropdown m-4"},o.a.createElement("span",null,"CITY"),o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{type:"button",className:"btn btn-booking dropdown-toggle btn-movie","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"chennai"),o.a.createElement("div",{className:"dropdown-menu w-100 my-2"},o.a.createElement("span",{className:"dropdown-item"},"Kings Theatre"),o.a.createElement("span",{className:"dropdown-item"},"RadioCity Music Hall"),o.a.createElement("span",{className:"dropdown-item active"},"Fox Threatre"),o.a.createElement("span",{className:"dropdown-item"},"Orchestra Hall"),o.a.createElement("span",{className:"dropdown-item"},"Kauffman Centre")))),o.a.createElement("div",{className:"bo-date-chooser m-4"},o.a.createElement("span",null,"MONDAY 14, NOVEMBER"),o.a.createElement("div",{className:"text-center d-flex"},o.a.createElement("div",{className:"date-item p-2"},o.a.createElement("span",null,"Today"),o.a.createElement("div",{className:"position-relative"},o.a.createElement("span",null,"13"),o.a.createElement(E.a,{icon:h.e,size:"3x",color:"#FFEA00"}))),o.a.createElement("div",{className:"date-item p-2"},o.a.createElement("span",null,"tue"),o.a.createElement("div",{className:"position-relative"},o.a.createElement("span",null,"14"),o.a.createElement(E.a,{icon:h.e,size:"3x",color:"#212529"}))),o.a.createElement("div",{className:"date-item p-2"},o.a.createElement("span",null,"wed"),o.a.createElement("div",{className:"position-relative"},o.a.createElement("span",null,"15"),o.a.createElement(E.a,{icon:h.e,size:"3x",color:"#212529"}))),o.a.createElement("div",{className:"date-item p-2"},o.a.createElement("span",null,"thu"),o.a.createElement("div",{className:"position-relative"},o.a.createElement("span",null,"16"),o.a.createElement(E.a,{icon:h.e,size:"3x",color:"#212529"}))),o.a.createElement("div",{className:"date-item p-2"},o.a.createElement("span",null,"fri"),o.a.createElement("div",{className:"position-relative"},o.a.createElement("span",null,"17"),o.a.createElement(E.a,{icon:h.e,size:"3x",color:"#212529"})))))),o.a.createElement("div",{className:"bo-wrap"},o.a.createElement("div",{className:"bo-dropdown m-4"},o.a.createElement("span",null,"THEATRE"),o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{type:"button",className:"btn btn-booking dropdown-toggle btn-movie","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"LUX cinemas"),o.a.createElement("div",{className:"dropdown-menu w-100 my-2"},o.a.createElement("span",{className:"dropdown-item"},"Kings Theatre"),o.a.createElement("span",{className:"dropdown-item active"},"RadioCity Music Hall"),o.a.createElement("span",{className:"dropdown-item"},"Fox Threatre"),o.a.createElement("span",{className:"dropdown-item"},"Orchestra Hall"),o.a.createElement("span",{className:"dropdown-item"},"Kauffman Centre")))),o.a.createElement("div",{className:"bo-time-chooser m-4"},o.a.createElement("span",null,"TIME"),o.a.createElement("div",null,o.a.createElement("span",null,"11:00"),o.a.createElement("span",{className:"active"},"11:45"),o.a.createElement("span",null,"13:00"),o.a.createElement("span",null,"15:45")),o.a.createElement("div",null,o.a.createElement("span",null,"17:00"),o.a.createElement("span",null,"17:45"),o.a.createElement("span",null,"22:00"),o.a.createElement("span",null,"22:50"))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"bo-seat-layout"},o.a.createElement("div",{className:"m-4"},"PICK YOUR SEAT",o.a.createElement(E.a,{icon:h.i,className:"mx-4",size:"1x",color:"whitesmoke"}),o.a.createElement("span",{className:"ticket-count"},"2"),o.a.createElement(E.a,{icon:h.k,className:"mx-4",size:"1x",color:"whitesmoke"})),o.a.createElement("div",{className:"screen"},"SCREEN"),o.a.createElement(_,{bookSeats:this.state.bookSeats,ontoggleBook:this.toggleBookedStatus}),o.a.createElement("div",{className:"d-flex m-3"},o.a.createElement("button",{className:"btn-proceed"},"Proceed",o.a.createElement(E.a,{icon:h.a,size:"1x",className:"mx-2",style:{position:"relative",top:"1px"}})),o.a.createElement("div",{className:"price"},o.a.createElement("span",{style:{fontSize:"9px",fontWeight:"bold"}},"Total"),o.a.createElement("span",{style:{fontSize:"1.4em"}},o.a.createElement("span",{style:{fontSize:".5em",verticalAlign:"text-top",padding:".1em"}},"$"),"25.32")))))))}},{key:"toggleBookedStatus",value:function(e){var a=this.state.bookSeats.includes(e)?this.removeSeatFromBookedTickets(e):this.addSeatToBookedTickets(e);this.setState({bookSeats:a})}},{key:"addSeatToBookedTickets",value:function(e){var a=this.state.bookSeats;return a.push(e),a}},{key:"removeSeatFromBookedTickets",value:function(e){var a=this.state.bookSeats,t=a.findIndex((function(a){return a===e}));return t>-1&&a.splice(t,1),a}},{key:"setMovieDescription",value:function(){var e=this,a=this.props.match.params.movieId;w("movie/"+a).then((function(a){e.setState({movie:a.data}),e.setPosterPath(e.state.movie.poster_path)}))}},{key:"setPosterPath",value:function(e){e&&this.setState({poster_path:C.BASE_URL+C.POSTER_SIZE+e})}},{key:"routeToPayment",value:function(){this.props.history.push("/payment")}}]),a}(n.Component),A=Object(c.g)(M),F=(t(114),t(79)),z=t.n(F);var L=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={expiryDate:{value:"",touched:!1},cardCVV:{value:"",touched:!1},cardNumber:{value:"",touched:!1},number:{value:"",touched:!1},cardType:"Paypal",formErrors:{others:{cardCVV:null,cardNumber:null,expiryDate:null},phonepe:{number:null}},formError:!0},t.handleCardNumberChange=t.handleCardNumberChange.bind(Object(p.a)(t)),t.handleCardCVVChange=t.handleCardCVVChange.bind(Object(p.a)(t)),t.handleExpiryDateChange=t.handleExpiryDateChange.bind(Object(p.a)(t)),t.handleCardTypeChange=t.handleCardTypeChange.bind(Object(p.a)(t)),t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"text-center pt-4",style:{color:"white"}},o.a.createElement("h3",null,"Payments")),o.a.createElement("form",null,o.a.createElement("div",{className:"card shadow-lg p-0 mb-5 rounded payment-card"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("div",{className:"custom-control custom-radio pt-2 pl-0"},o.a.createElement("input",{type:"radio",className:"custom-control-input",id:"customRadio1",name:"example1",checked:"Paypal"===this.state.cardType,onChange:function(){e.handleCardTypeChange("Paypal")},value:"Paypal"}),o.a.createElement("label",{className:"custom-control-label mx-1",htmlFor:"customRadio1"},"PayPal"),o.a.createElement("img",{src:"../images/cards/paypal.png",className:"position-absolute card-icon",alt:"Pay Pal"})),o.a.createElement("div",{className:"custom-control custom-radio pt-2 pl-0 p-relative"},o.a.createElement("input",{type:"radio",className:"custom-control-input",id:"customRadio",name:"example1",checked:"Phonepe"===this.state.cardType,onChange:function(){e.handleCardTypeChange("Phonepe")},value:"Phonepe"}),o.a.createElement("label",{className:"custom-control-label mx-1",htmlFor:"customRadio"},"BM UPI Id"),o.a.createElement("div",{className:"p-relative"},o.a.createElement("input",{type:"text",className:("Phonepe"===this.state.cardType?"":"disable-cards ")+"form-control-plaintext number-box",id:"number",value:this.state.number.value,autoComplete:"off",maxLength:"10",onChange:function(a){e.handleNumberChange(a)},placeholder:"Enter number"}),o.a.createElement("span",{className:"error phone-number"},this.state.formErrors.phonepe.number)),o.a.createElement("img",{src:"../images/cards/master-card-1.png",className:"position-absolute card-icon",alt:"Pay Pal"})),o.a.createElement("div",{className:"custom-control custom-radio pt-2 pl-0"},o.a.createElement("input",{type:"radio",className:"custom-control-input",id:"customRadio2",name:"example1",checked:"others"===this.state.cardType,onChange:function(){e.handleCardTypeChange("others")},value:"others"}),o.a.createElement("label",{className:"custom-control-label mx-1",htmlFor:"customRadio2"},"Debit/Credit Card"),o.a.createElement("img",{src:"../images/cards/visa.png",className:"position-absolute card-icon",alt:"Pay Pal"}),o.a.createElement("img",{src:"../images/cards/maestro.png",style:{right:"50px"},className:"position-absolute card-icon",alt:"Pay Pal"})),o.a.createElement("div",{className:"others"===this.state.cardType?"":"disable-cards"},o.a.createElement("div",{className:"form-group row custom-radio"},o.a.createElement("label",{htmlFor:"cardNumber",className:"col-4 col-form-label"},"Card Number"),o.a.createElement("div",{className:"col-8 position-relative"},o.a.createElement("input",{type:"text",className:"form-control-plaintext",id:"cardNumber",value:this.state.cardNumber.value,maxLength:"16",autoComplete:"off",onChange:function(a){e.handleCardNumberChange(a)},placeholder:"____-____-____-____"}),o.a.createElement("span",{className:"error card-number"},this.state.formErrors.others.cardNumber))),o.a.createElement("div",{className:"form-group row custom-radio"},o.a.createElement("label",{htmlFor:"cardExpiryMonth",className:"col-3 col-form-label"},"Expiry"),o.a.createElement("div",{className:"col-3 positive-relative"},o.a.createElement(z.a,{placeholderText:"Choose a date",showMonthYearPicker:!0,className:"month-picker",value:this.state.expiryDate.value,onSelect:function(a){e.handleExpiryDateChange(a)}}),o.a.createElement("span",{className:"error expiry-date"},this.state.formErrors.others.expiryDate)),o.a.createElement("label",{htmlFor:"cardExpiryMonth",className:"col-3 col-form-label"},"CVV"),o.a.createElement("div",{className:"col-3 position-relative"},o.a.createElement("input",{type:"text",className:"form-control-plaintext",id:"cardExpiryMonth",value:this.state.cardCVV.value,maxLength:"3",autoComplete:"off",onChange:function(a){e.handleCardCVVChange(a)},placeholder:"___"}),o.a.createElement("span",{className:"error cvv"},this.state.formErrors.others.cardCVV)))))),o.a.createElement("div",{className:"card payment-card"},o.a.createElement("button",{type:"button",className:("Paypal"===this.state.cardType?" ":this.state.formError?"payment-disabled  ":" ")+"btn btn-primary btn-pay",onClick:function(a){alert("Tickets Booked Successfully...."),e.proceedToPay(a)}},"Proceed to Pay"))))}},{key:"handleNumberChange",value:function(e){var a=this.state.number;a.touched=!0;var t=this.state.formErrors.phonepe;10!==e.target.value.length&&a.touched?t.number="*Enter valid phone number":t.number="",a.value=e.target.value,this.handleValidation(this.state.cardType)}},{key:"handleCardNumberChange",value:function(e){var a=this.state.cardNumber;a.touched=!0;var t=this.state.formErrors.others;e.target.value.length<16&&a.touched?t.cardNumber="*Must enter 16 digits":t.cardNumber="",a.value=e.target.value,this.handleValidation(this.state.cardType)}},{key:"handleCardCVVChange",value:function(e){var a=this.state.cardCVV;a.touched=!0;var t=this.state.formErrors.others;e.target.value.length<3&&a.touched?t.cardCVV="*Must enter 3 digits":t.cardCVV="",a.value=e.target.value,this.handleValidation(this.state.cardType)}},{key:"handleExpiryDateChange",value:function(e){var a=JSON.stringify(e).substring(1,5),t=parseInt(JSON.stringify(e).substring(6,8))%12+1,n=JSON.stringify(t)+"/"+a,o=this.state.expiryDate;o.touched=!0;var l=this.state.formErrors.others;n.length<3&&o.touched?l.expiryDate="*Enter expiry date":l.expiryDate="",o.value=n,this.handleValidation(this.state.cardType)}},{key:"handleCardTypeChange",value:function(e){console.log("card type",e),this.setState({cardType:e}),this.handleValidation(e)}},{key:"proceedToPay",value:function(e){e.persist(),console.log(this.state)}},{key:"handleValidation",value:function(e){"others"===e?this.validateOtherCrds():"Phonepe"===e&&this.validatePhonepe()}},{key:"validateOtherCrds",value:function(){this.setState({formError:!0});for(var e=0,a=Object.entries(this.state.formErrors.others);e<a.length;e++){if(""!==a[e])return void this.setState({formError:!0});this.setState({formError:!1})}}},{key:"validatePhonepe",value:function(){this.setState({formError:!0}),""===this.state.formErrors.phonepe.number?this.setState({formError:!1}):this.setState({formError:!0})}}]),a}(o.a.Component);var R=function(){return o.a.createElement("div",{className:"no-event"},o.a.createElement(E.a,{icon:h.j,size:"5x"}),o.a.createElement("div",null,"No Upcoming Plays!"))};var V=function(){return o.a.createElement("div",{className:"no-event"},o.a.createElement(E.a,{icon:h.f,size:"5x"}),o.a.createElement("div",null,"No Upcoming Shows!"))};t(172);var B=function(e){var a=Object(n.useState)([]),t=Object(O.a)(a,2),l=t[0],r=t[1];return Object(n.useEffect)((function(){var a=e.location.state?e.location.state.value:"now_playing";w("movie/"+a).then((function(e){console.log(e),r(e.data.results)}))}),[e.location.state]),o.a.createElement("div",{className:"row",style:{paddingTop:"74px"}},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"card-group-title"},e.location.state?e.location.state.name:"Now Playing"),o.a.createElement("div",{className:"d-flex",style:{flexFlow:"row wrap"}},function(e,a){return e.map((function(e){return o.a.createElement("div",{className:"outer-wrap mx-2 my-4",key:e.id,onClick:function(){return function(e,a){a.history.push("movie/"+e)}(e.id,a)}},o.a.createElement("div",{className:"position-relative"},o.a.createElement("img",{src:C.BASE_URL+C.POSTER_SIZE+e.poster_path,className:"img-wrap",alt:"..."})),o.a.createElement("div",{className:"content-wrap position-relative",style:{flex:"1"}},o.a.createElement("div",{className:"card-body px-0 py-2"},o.a.createElement("div",{className:"movie-title-wrap"},o.a.createElement("span",{className:"card-title"},e.title),o.a.createElement("span",{className:"card-rating"},e.vote_average)),o.a.createElement("div",{className:"card-text"},"Popularity: ",o.a.createElement("span",null,e.popularity)),o.a.createElement("div",{className:"card-text"},"Hits: ",o.a.createElement("span",null,e.vote_count)),o.a.createElement("div",{className:"card-text",style:{textTransform:"capitalize"}},"Language: ",o.a.createElement("span",null,e.original_language)))))}))}(l,e))))},I=function(e){function a(e,t){var n;return Object(i.a)(this,a),(n=Object(u.a)(this,Object(d.a)(a).call(this,e,t))).state={prevDepth:D(e.location)},n}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({prevDepth:D(this.props.location)})}},{key:"render",value:function(){return o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/",component:P,exact:!0}),o.a.createElement(c.a,{path:"/home",exact:!0,component:P}),o.a.createElement(c.a,{path:"/movie/:movieId",exact:!0,component:A}),o.a.createElement(c.a,{path:"/payment",exact:!0,component:L}),o.a.createElement(c.a,{path:"/movies",exact:!0,component:B}),o.a.createElement(c.a,{path:"/events",exact:!0,component:g}),o.a.createElement(c.a,{path:"/shows",exact:!0,component:V}),o.a.createElement(c.a,{path:"/play",exact:!0,component:R}),o.a.createElement(c.a,{path:"*",component:P}))}}]),a}(o.a.PureComponent);function D(e){return(e||{}).pathname.split("/").length}var U=Object(c.g)(I);var Z=function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(s.a,{history:c.f},o.a.createElement(N,null),o.a.createElement(U,null),o.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},26:function(e,a,t){},82:function(e,a,t){e.exports=t(173)},83:function(e,a,t){},94:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.7c3027c3.chunk.js.map