(this["webpackJsonpshopify-webdeveloper-challenge"]=this["webpackJsonpshopify-webdeveloper-challenge"]||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);n(59);var a=n(0),i=n.n(a),c=n(22),s=n.n(c),r=(n(64),n(27)),o=(n(65),n(47)),l=n(23),j=n(17),h=n(56),d=n(57),b=n(35),u=n(39),m=n(51),O=n(25),x=n(1);var p=function(e){var t=function(t){e.setSearch((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},t.name,t.value))})),e.setPage(1)};return Object(x.jsx)(O.a,{className:"Searchbox p-3",children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(j.a,{xs:6,md:8,children:Object(x.jsxs)(O.a.Group,{controlId:"formGroupSearch",children:[Object(x.jsx)(O.a.Label,{children:"Movie Search"}),Object(x.jsx)(O.a.Control,{value:e.search.term,name:"term",type:"text",onChange:function(e){return t(e.target)},placeholder:"Search by Title",className:"search-input"})]})}),Object(x.jsx)(j.a,{}),Object(x.jsx)(j.a,{children:Object(x.jsxs)(O.a.Group,{controlId:"formGroupYear",children:[Object(x.jsx)(O.a.Label,{children:"Year"}),Object(x.jsx)(O.a.Control,{value:e.search.year,name:"year",type:"number",onChange:function(e){return t(e.target)},placeholder:"Filter Year",min:"1900",max:"2021",className:"search-input"})]})})]})})},f=function(){return Object(x.jsx)("div",{className:"Header p-3",children:Object(x.jsx)("h1",{className:"brand",children:Object(x.jsx)("i",{children:"The Shoppies"})})})},g=n(31),v=n.p+"static/media/NoImage.ee97e8e7.svg",y=n(58),k=n(28);var w=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(k.a,{id:e.imdb,variant:"primary",onClick:function(t){return e.setShow(!0),void(e.nominations.length>=5?e.setAlertMsg({title:"You can only nominate up to 5 movies.",body:"Go to the nominations page to review/edit your choices."}):(e.setNominations([].concat(Object(y.a)(e.nominations),[{imdb:e.imdb,title:e.title,year:e.year,poster:e.poster}])),e.setAlertMsg({title:"Thank you for your submission.",body:"Please review/edit your choices under the nominations tab."})))},disabled:e.nominations.some((function(t){return t.imdb===e.imdb})),children:"Nominate"})})};var I=function(e){return Object(x.jsx)(k.a,{id:e.imdb,variant:"primary",onClick:function(t){return function(){var t=e.nominations.filter((function(t){return t.imdb!==e.imdb}));e.setNominations(t)}()},children:"Delete"})};var N=function(e){return Object(x.jsxs)(g.a,{className:"m-3",children:[Object(x.jsx)(g.a.Img,{variant:"top",alt:"No Poster",src:"N/A"===e.poster?v:e.poster}),Object(x.jsx)(g.a.Body,{children:Object(x.jsxs)(g.a.Title,{children:[e.title," - ",e.year]})}),Object(x.jsx)(g.a.Footer,{children:e.show?Object(x.jsx)(I,{imdb:e.imdb,setNominations:e.setNominations,nominations:e.nominations}):Object(x.jsx)(w,{poster:e.poster,title:e.title,year:e.year,imdb:e.imdb,setShow:e.setShow,setAlertMsg:e.setAlertMsg,setNominations:e.setNominations,nominations:e.nominations})})]})},C=n(7);var M=function(e){var t=function(t){switch(t.currentTarget.id){case"first":e.setPage(1);break;case"prev":e.setPage(parseInt(e.page)-1);break;case"next":e.setPage(parseInt(e.page)+1);break;case"last":e.setPage(Math.floor(e.total/10)+1);break;default:e.setPage(parseInt(t.target.id))}};return Object(x.jsxs)(C.a,{children:[Object(x.jsx)(C.a.First,{id:"first",onClick:function(e){return t(e)}}),Object(x.jsx)(C.a.Prev,{id:"prev",onClick:function(e){return t(e)},disabled:1===e.page}),Object(x.jsx)(C.a.Ellipsis,{}),parseInt(e.page)<3&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C.a.Item,{id:1,onClick:function(e){return t(e)},active:1===e.page,children:1}),Object(x.jsx)(C.a.Item,{id:2,onClick:function(e){return t(e)},active:2===e.page,children:2}),Object(x.jsx)(C.a.Item,{id:3,onClick:function(e){return t(e)},children:3}),Object(x.jsx)(C.a.Item,{id:4,onClick:function(e){return t(e)},children:4}),Object(x.jsx)(C.a.Item,{id:5,onClick:function(e){return t(e)},children:5})]}),parseInt(e.page)>=3&&parseInt(e.page)<=Math.floor(e.total/10)-1&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C.a.Item,{id:parseInt(e.page)-2,onClick:function(e){return t(e)},children:parseInt(e.page)-2}),Object(x.jsxs)(C.a.Item,{id:parseInt(e.page)-1,onClick:function(e){return t(e)},children:[parseInt(e.page)-1," "]}),Object(x.jsx)(C.a.Item,{id:parseInt(e.page),onClick:function(e){return t(e)},active:!0,children:parseInt(e.page)}),Object(x.jsx)(C.a.Item,{id:parseInt(e.page)+1,onClick:function(e){return t(e)},children:parseInt(e.page)+1}),Object(x.jsx)(C.a.Item,{id:parseInt(e.page)+2,onClick:function(e){return t(e)},children:parseInt(e.page)+2})]}),parseInt(e.page)>Math.floor(e.total/10)-1&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C.a.Item,{id:Math.floor(e.total/10)-3,onClick:function(e){return t(e)},children:Math.floor(e.total/10)-3}),Object(x.jsx)(C.a.Item,{id:Math.floor(e.total/10)-2,onClick:function(e){return t(e)},children:Math.floor(e.total/10)-2}),Object(x.jsx)(C.a.Item,{id:Math.floor(e.total/10)-1,onClick:function(e){return t(e)},children:Math.floor(e.total/10)-1}),Object(x.jsx)(C.a.Item,{id:Math.floor(e.total/10),onClick:function(e){return t(e)},active:e.page===Math.floor(e.total/10),children:Math.floor(e.total/10)}),Object(x.jsx)(C.a.Item,{id:Math.floor(e.total/10)+1,onClick:function(e){return t(e)},active:e.page===Math.floor(e.total/10)+1,children:Math.floor(e.total/10)+1})]}),Object(x.jsx)(C.a.Ellipsis,{}),Object(x.jsx)(C.a.Next,{id:"next",onClick:function(e){return t(e)},disabled:parseInt(e.page)===Math.floor(e.total/10)+1}),Object(x.jsx)(C.a.Last,{id:"last",onClick:function(e){return t(e)}})]})},S=n.p+"static/media/20200715_112939.5b54978b.jpg",T=n.p+"static/media/logo.6ce24c58.svg",P=(n(70),n(41)),F=function(){return Object(x.jsxs)("div",{className:"Team",children:[Object(x.jsxs)("div",{className:"Bio ",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("strong",{children:"John Ratana"})}),Object(x.jsx)("img",{src:S,alt:"That's ME!",height:"200px"}),Object(x.jsx)("div",{children:"Full-Stack Software Engineer"}),Object(x.jsx)("p",{children:"Ruby, Rails, Javascript, React"}),Object(x.jsx)("div",{className:"About justify-content-center row align-items-center",children:Object(x.jsxs)("p",{className:"Bio w-50 p-3",children:["John keeps himself busy with rock climbing, coding, cooking, and raising two children (the 4C's).  Based out of Philadelphia, he is always looking for new opportunities to learn, grow, and work.  You can find him ",Object(x.jsx)("a",{href:"https://www.linkedin.com/in/john-ratana-7aa24063/",children:"here (linkedIn)"}),". Check out his work ",Object(x.jsx)("a",{href:"https://github.com/jratana1",children:"here (Github)"})]})})]}),Object(x.jsx)("h1",{children:"Techs"}),Object(x.jsxs)("div",{className:"Techs",children:[Object(x.jsxs)("div",{className:"Techbox",children:[Object(x.jsx)("img",{src:T,alt:"That's ME!",height:"200px",width:"200px"}),Object(x.jsx)("p",{children:"React"})]}),Object(x.jsxs)("div",{className:"Techbox",children:[Object(x.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png",alt:"That's ME!",height:"200px",width:"200px"}),Object(x.jsx)("p",{children:"Ruby On Rails"})]})]})]})},A=function(){return Object(x.jsx)("div",{className:"About justify-content-center row align-items-center",children:Object(x.jsxs)("p",{className:"w-50 p-3",children:["This is a front-end SPA built out for the Shopify Front-End internship.  Search for movies from the OMDB database by title or year.  You can nominate up to 5 movies. Click ",Object(x.jsx)(P.b,{to:"/search",children:"Here"})," to try it out."]})})},R=function(){return Object(x.jsxs)("div",{className:"Landing",children:[Object(x.jsx)(A,{}),Object(x.jsx)(F,{})]})},L=n(26);var B=function(e){var t=function(){return e.setShow(!1)};return Object(x.jsxs)(L.a,{show:e.show,onHide:t,children:[Object(x.jsx)(L.a.Header,{closeButton:!0,children:Object(x.jsx)(L.a.Title,{children:e.alertMsg.title})}),Object(x.jsx)(L.a.Body,{children:e.nominations.map((function(t,n){return Object(x.jsx)(N,{className:"col-5",style:{width:"10%"},imdb:t.imdb,title:t.title,year:t.year,poster:t.poster,show:e.show,setAlertMsg:e.setAlertMsg,nominations:e.nominations,setNominations:e.setNominations},n)}))}),Object(x.jsxs)(L.a.Footer,{children:[Object(x.jsx)(L.a.Title,{children:e.alertMsg.body}),Object(x.jsx)(k.a,{variant:"secondary",onClick:t,children:"Close"})]})]})},E=n(8);var Y=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(1),s=Object(r.a)(c,2),u=s[0],m=s[1],O=Object(a.useState)({year:"",term:""}),g=Object(r.a)(O,2),v=g[0],y=g[1],k=Object(a.useState)([]),w=Object(r.a)(k,2),I=w[0],C=w[1],S=Object(a.useState)(!1),T=Object(r.a)(S,2),F=T[0],A=T[1],L=Object(a.useState)({title:"",body:""}),Y=Object(r.a)(L,2),_=Y[0],G=Y[1];function H(){if(n.Search&&n.Search.length)return n.Search.map((function(e,t){return Object(x.jsx)(N,{setShow:A,show:F,setAlertMsg:G,nominations:I,setNominations:C,imdb:e.imdbID,title:e.Title,year:e.Year,poster:e.Poster},t)}))}return Object(a.useEffect)((function(){fetch("https://www.omdbapi.com/?s=".concat(v.term,"&y=").concat(v.year,"&page=").concat(u,"&type=movie&apikey=92f9200d")).then((function(e){return e.json()})).then((function(e){i(e)}))}),[v,u]),Object(x.jsx)(P.a,{basename:"/",children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)(o.a,{children:[Object(x.jsx)(f,{}),Object(x.jsx)(d.a,{bg:"light",expand:"lg",children:Object(x.jsxs)(b.a,{className:"mr-auto",children:[Object(x.jsx)(b.a.Link,{href:"#home",children:"Home"}),Object(x.jsx)(b.a.Link,{href:"#/search",children:"Search"}),Object(x.jsx)(b.a.Link,{onClick:function(){return A(!0)},children:"Nominations"})]})})]}),Object(x.jsx)(E.a,{exact:!0,path:"/home",children:Object(x.jsx)(R,{})}),Object(x.jsxs)(E.a,{exact:!0,path:"/search",children:[Object(x.jsxs)(o.a,{children:[Object(x.jsx)(l.a,{children:Object(x.jsx)(j.a,{children:Object(x.jsx)(p,{setPage:m,setSearch:y,search:v})})}),Object(x.jsx)(l.a,{children:Object(x.jsx)(j.a,{children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(l.a,{children:H()?H().slice(0,5):null}),Object(x.jsx)(l.a,{children:H()?H().slice(5,10):null})]})})})]}),Object(x.jsx)(o.a,{children:Object(x.jsx)(l.a,{className:"justify-content-center",children:H()?Object(x.jsx)(M,{page:u,total:n.totalResults,setPage:m}):null})}),Object(x.jsx)(B,{nominations:I,setNominations:C,setShow:A,show:F,alertMsg:_})]})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(Y,{})}),document.getElementById("root")),_()}},[[74,1,2]]]);
//# sourceMappingURL=main.9d3a88cf.chunk.js.map