(this["webpackJsonpblog-posts-app"]=this["webpackJsonpblog-posts-app"]||[]).push([[0],{195:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var s,c=n(0),o=n(46),i=n.n(o),r=n(10),a=n(7),l=n(103),j=n(238),d=n(37),u=n.n(d),b=n(67),p=n(104),h=n.n(p).a.create({baseURL:"https://reduxblog.herokuapp.com",params:{key:"dominik12345"}}),m="FETCH_DATA",O="FETCH_POST",f="DELETE_POST",x=Object(a.c)({blogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return e.filter((function(e){return e.id!==t.payload}));case m:return t.payload;default:return e}},singlePost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t.type===O?t.payload:e},form:j.a}),g=n(24),v=n(8),P=n(25),_=n(1),y=function(e){var t=e.id,n=e.title,s=e.content;return Object(_.jsxs)("li",{className:"posts-lists__item",children:[Object(_.jsx)("h3",{className:"posts-lists__title",children:n}),Object(_.jsx)("p",{id:"post-content",children:s}),Object(_.jsx)(g.b,{to:"/posts/".concat(t),children:" More info "})]})},N=(n(195),Object(r.b)((function(e){return{blogs:e.blogs}}),{getDataFromApi:function(){return function(){var e=Object(b.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/api/posts");case 2:n=e.sent,t({type:m,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getDataFromApi,n=e.blogs;Object(c.useEffect)((function(){t()}),[t]);var s=n.map((function(e){return Object(_.jsx)(y,Object(P.a)({},e),e.id)})),o=0!==n.length?s:null;return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:"list-title",children:"List of Posts: "}),Object(_.jsx)("ul",{className:"posts-list",children:o})]})}))),w=(n(91),Object(r.b)((function(e){return{singlePost:e.singlePost}}),{deletePost:function(e,t){return h.delete("/api/posts/".concat(e)).then((function(){return t()})),{type:f,payload:e}}})((function(e){if(!e.singlePost)return Object(_.jsx)("div",{className:"delete-section-container",children:Object(_.jsx)("p",{children:"You need first to pick up a post"})});if(s===e.singlePost.id)return Object(_.jsx)("div",{className:"delete-section-container",children:Object(_.jsx)("p",{children:"pick different post, last already deleted"})});s=e.singlePost.id;return Object(_.jsx)("div",{className:"delete-section-container",children:Object(_.jsxs)("div",{className:"single-post-info-container",children:[Object(_.jsx)("h1",{children:"Sigle post deletion"}),Object(_.jsxs)("h3",{children:['Title of the post : " ',Object(_.jsxs)("span",{children:[e.singlePost.title," "]}),'"']}),Object(_.jsx)("p",{children:"Are you sure you want to delete this post ?"}),Object(_.jsx)("button",{className:"delete-btn",onClick:function(){e.deletePost(e.singlePost.id,(function(){e.history.push("/")}))},children:"Delete"})]})})}))),T=n(237),C=n(236),E=n(30),S=n.n(E),k=Object(C.a)({validate:function(e){var t={};return(!e.title||e.title.length<3)&&(t.title="Enter a title, it must have at least 3 characters"),e.categories||(t.categories="Enter a category name"),e.content||(t.content="Enter a post summary"),t},form:"Post Adding"})(Object(r.b)(null,{createPost:function(e,t){return{type:"CREATE_POST",payload:h.post("/api/posts",e).then((function(){return t()}))}}})((function(e){var t=function(e){var t=e.meta.error&&e.meta.touched?{border:"1px solid red"}:null;return Object(_.jsxs)("div",{className:S.a.titleForm,children:[Object(_.jsxs)("label",{children:[e.fieldTitle,Object(_.jsx)("input",Object(P.a)(Object(P.a)({className:"title-form__input",style:t,type:"text"},e.input),{},{autoComplete:"off"}))]}),Object(_.jsx)("div",{style:{color:"red"},children:e.meta.touched?e.meta.error:""})]})},n=e.handleSubmit;return Object(_.jsxs)("div",{className:S.a.newPostContainer,children:[Object(_.jsx)("h1",{className:S.a.newPostTitle,children:"Create new post !"}),Object(_.jsxs)("form",{className:S.a.formToSubmit,onSubmit:n((function(t){e.createPost(t,(function(){e.history.push("/")})),function(e){e.title="",e.categories="",e.content=""}(t)})),children:[Object(_.jsx)(T.a,{fieldTitle:"Title",name:"title",component:t}),Object(_.jsx)(T.a,{fieldTitle:"Categories",name:"categories",component:t}),Object(_.jsx)(T.a,{fieldTitle:"Post Content",name:"content",component:function(e){var t=e.meta.error&&e.meta.touched?{border:"1px solid red"}:null;return Object(_.jsxs)("div",{className:S.a.titleForm,children:[Object(_.jsxs)("label",{children:[e.fieldTitle,Object(_.jsx)("textarea",Object(P.a)(Object(P.a)({style:t,className:"title-form__area",type:"text"},e.input),{},{autoComplete:"off"}))]}),Object(_.jsx)("div",{style:{color:"red"},children:e.meta.touched?e.meta.error:""})]})}}),Object(_.jsx)("button",{type:"submit",children:"Submit"})]})]})}))),A=Object(r.b)((function(e){return{post:e.singlePost}}),{fetchPost:function(e){return function(){var t=Object(b.a)(u.a.mark((function t(n){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/api/posts/".concat(e));case 2:s=t.sent,n({type:O,payload:s.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){return Object(c.useEffect)((function(){e.fetchPost(e.match.params.id)}),[e]),setTimeout((function(){}),100),e.post?Object(_.jsx)("div",{className:"delete-section-container",children:Object(_.jsxs)("div",{className:"single-post-info-container",children:[Object(_.jsx)("h1",{children:"Single Post Info"}),Object(_.jsxs)("h3",{children:["Post title: ",Object(_.jsx)("span",{children:e.post.title})]}),Object(_.jsxs)("h6",{children:["Categories: ",Object(_.jsx)("span",{children:e.post.categories})]}),Object(_.jsxs)("p",{children:["Content:",Object(_.jsx)("br",{}),Object(_.jsx)("span",{children:e.post.content})]})]})}):Object(_.jsx)("div",{children:"Loading..."})})),F=(n(234),function(){return Object(_.jsx)(g.a,{basename:"/BlogPostsApp",children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsxs)("nav",{className:"main-menu",children:[Object(_.jsx)("li",{className:"main-menu__item",children:Object(_.jsx)(g.c,{to:"/",exact:!0,children:"Posts List"})}),Object(_.jsx)("li",{className:"main-menu__item",children:Object(_.jsx)(g.c,{to:"/posts/new",children:"Create New Post"})}),Object(_.jsx)("li",{className:"main-menu__item",children:Object(_.jsx)(g.c,{to:"/posts/delete",children:"Delete Post"})})]}),Object(_.jsx)("main",{className:"main-content",children:Object(_.jsxs)(v.d,{children:[Object(_.jsx)(v.b,{path:"/",exact:!0,component:N}),Object(_.jsx)(v.b,{path:"/posts/new",component:k}),Object(_.jsx)(v.b,{path:"/posts/delete",component:w}),Object(_.jsx)(v.b,{path:"/posts/:id",component:A}),Object(_.jsx)(v.a,{from:"*",to:"/"})]})})]})})}),L=Object(a.d)(x,Object(a.a)(l.a));i.a.render(Object(_.jsx)(r.a,{store:L,children:Object(_.jsx)(F,{})}),document.getElementById("root"))},30:function(e,t,n){e.exports={newPostContainer:"newPost_newPostContainer__2XAnA",newPostTitle:"newPost_newPostTitle__1TYLy",formToSubmit:"newPost_formToSubmit__36dCS",titleForm:"newPost_titleForm__1lV1L",btnMove:"newPost_btnMove__1aRgu"}},91:function(e,t,n){}},[[235,1,2]]]);
//# sourceMappingURL=main.6246888a.chunk.js.map