(this["webpackJsonpfind-mokup"]=this["webpackJsonpfind-mokup"]||[]).push([[0],{238:function(e,t,a){e.exports=a(427)},427:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=a(56),u=(a(243),a(37)),i=a(110);a(248),a(250),a(429);i.initializeApp({apiKey:"AIzaSyCtftuML-_lOxjzOlDEW1NXJJaP7axv01Y",authDomain:"find-mokup.firebaseapp.com",databaseURL:"https://find-mokup.firebaseio.com",projectId:"find-mokup",storageBucket:"find-mokup.appspot.com",messagingSenderId:"335136975008",appId:"1:335136975008:web:a4e4a435aea69c6356c1c5"});var s=i.auth(),m=i.firestore(),p=i.storage(),E=a(41),f=a(26),b=a.n(f),g=a(64),d=a(444),O=Object(d.a)("READ_POST",(function(e){return e})),j=(Object(d.a)("RESET_POST"),"write/WRITE_POST"),y=Object(d.a)("write/CHANGE_FIELD",(function(e){return{key:e.key,value:e.value}})),v=Object(d.a)("write/CHANGE_SELECT",(function(e){return{value:e}})),h=Object(d.a)("write/CHANGE_DATE",(function(e){return{value:e}})),w=Object(d.a)("write/CHANGE_FILE",(function(e){return{value:e}})),C=Object(d.a)(j,(function(e){return{imgUrl:e.imgUrl,title:e.title,category:e.category,manager:e.manager,date:e.date,year:e.year,month:e.month}})),S=Object(d.a)("write/GET_DOWNLOAD_URL",(function(e){return e})),L=Object(d.a)("write/SET_CURRENT_POST",(function(e){return e})),k=Object(d.a)("write/UPDATE_POST",(function(e){return{currentPostId:e.currentPostId,imgUrl:e.imgUrl,title:e.title,category:e.category,manager:e.manager,date:e.date,year:e.year,month:e.month}})),x=(Object(d.a)("write/FORM_INIT"),a(21)),I=a(441),T=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("works").doc("".concat(t)).get();case 2:return a=e.sent,n=Object(x.a)({id:t},a.data()),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("works").doc("".concat(t)).delete();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(g.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("works").orderBy("date","desc").get().then((function(e){return e}));case 2:return t=e.sent,a=t.docs.map((function(e){return Object(x.a)({id:e.id},e.data())})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n,r,c,o,l,u,i,s,p;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.year,n=t.category,""!==a||""!==n){e.next=9;break}return e.next=4,m.collection("works").orderBy("date","desc").get().then((function(e){return e}));case 4:return r=e.sent,c=r.docs.map((function(e){return Object(x.a)({id:e.id},e.data())})),e.abrupt("return",c);case 9:if(""===a||""===n){e.next=17;break}return e.next=12,m.collection("works").where("year","==","".concat(a)).where("category","==","".concat(n)).get().then((function(e){return e}));case 12:return o=e.sent,l=o.docs.map((function(e){return Object(x.a)({id:e.id},e.data())})),e.abrupt("return",l);case 17:if(""===a||""!==n){e.next=25;break}return e.next=20,m.collection("works").where("year","==","".concat(a)).get().then((function(e){return e}));case 20:return u=e.sent,i=u.docs.map((function(e){return Object(x.a)({id:e.id},e.data())})),e.abrupt("return",i);case 25:if(""!==a||""===n){e.next=31;break}return e.next=28,m.collection("works").where("category","==","".concat(n)).get().then((function(e){return e}));case 28:return s=e.sent,p=s.docs.map((function(e){return Object(x.a)({id:e.id},e.data())})),e.abrupt("return",p);case 31:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n,r,c,o,l,u,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.title,n=t.imgUrl,r=t.category,c=t.manager,o=t.date,l=t.year,u=t.month,e.next=3,m.collection("works").add({title:a,imgUrl:n,category:r,manager:c,date:o,year:l,month:u});case 3:return i=e.sent,e.next=6,i.get();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n,r,c,o,l,u,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentPostId,n=t.title,r=t.imgUrl,c=t.category,o=t.manager,l=t.date,u=t.year,i=t.month,e.next=3,m.doc("works/".concat(a)).update({title:n,imgUrl:r,category:c,manager:o,date:l,year:u,month:i});case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=9;break}return n=p.ref().child("".concat(Object(I.a)())),e.next=4,n.putString(t,"data_url");case 4:return r=e.sent,e.next=7,r.ref.getDownloadURL();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=a(231),N=a(431),G=a(432),H=a(438),W=a(445),B=a(442),M=a(439),z=a(74),q=a(136),J=a.n(q),V=a(208),K=function(){return r.a.createElement("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(V.a,{size:"large"}))},X=function(e){var t=e.post,a=e.loading,c=(e.error,e.onRemove),o=e.goEdit,l=e.goHome,u=Object(n.useState)(!1),i=Object(P.a)(u,2),s=i[0],m=i[1];return a?r.a.createElement(K,null):t?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{justify:"center"},r.a.createElement(G.a,{xs:24,lg:14},r.a.createElement(H.a,{onBack:l,title:r.a.createElement(W.b,null,"\ubaa9\uc5c5 \uc0c1\uc138")}),r.a.createElement(B.a,{layout:"vertical",bordered:!0,column:1},r.a.createElement(B.a.Item,{label:t.title},r.a.createElement("figure",{style:{textAlign:"center",maxWidth:"400px",margin:"0 auto"}},r.a.createElement("img",{src:t.imgUrl,alt:"",style:{maxWidth:"100%"}}))),r.a.createElement(B.a.Item,{label:"\uc2dc\uc548 \uc885\ub958"},r.a.createElement(M.a.Text,null,function(e){switch(e){case"brochure":return"\ube0c\ub85c\uc154";case"catalogue":return"\uce74\ub2ec\ub85c\uadf8";case"leaflet":return"\ub9ac\ud50c\ub81b";case"etc":return"\uae30\ud0c0"}}(t.category))),r.a.createElement(B.a.Item,{label:"\uc791\uc5c5\uc790"},r.a.createElement(M.a.Text,null,t.manager)),r.a.createElement(B.a.Item,{label:"\uc791\uc5c5 \ub0a0\uc9dc"},r.a.createElement(M.a.Text,null,t.date))))),r.a.createElement(N.a,{justify:"center",style:{marginTop:"1rem"}},r.a.createElement(G.a,{xs:24,lg:14,style:{display:"flex",justifyContent:"center",marginBottom:30}},r.a.createElement(z.a,{onClick:o},"\uc218\uc815"),r.a.createElement(z.a,{danger:!0,style:{marginLeft:"0.5rem"},onClick:function(){m(!0)}},"\uc0ad\uc81c"))),r.a.createElement(J.a,{title:"\uc791\uc5c5\ubb3c \uc0ad\uc81c",visible:s,onOk:c,onCancel:function(){m(!1)}},r.a.createElement("p",null,"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))):null},Y=Object(E.f)((function(e){var t=e.match,a=Object(E.e)(),c=t.params.postId,o=Object(u.b)(),l=Object(u.c)((function(e){return e.post})),i=l.post,s=l.error,m=Object(u.c)((function(e){return e.loading})).loading,p=Object(n.useCallback)((function(){a.goBack()}),[a]),f=Object(n.useCallback)(Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(c);case 3:console.log("\uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:a.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),[c,a]),d=Object(n.useCallback)((function(){o(L(i)),a.push("/write")}),[i,a,o]),j=Object(n.useCallback)((function(){a.push("/")}),[a]);return Object(n.useEffect)((function(){o(O(c))}),[o,c]),r.a.createElement(X,{post:i,error:s,loading:m,goBack:p,onRemove:f,goEdit:d,goHome:j})})),Q=function(){return r.a.createElement(Y,null)},Z=a(440),$=a(437),ee=function(e){var t=e.postList,a=e.error;return e.loading?r.a.createElement(N.a,{justify:"center",style:{marginTop:"2rem"}},r.a.createElement(G.a,{xs:24,lg:18},r.a.createElement(Z.a,{active:!0}),r.a.createElement(Z.a,{active:!0}),r.a.createElement(Z.a,{active:!0}))):!t||a?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{justify:"center",style:{marginTop:"2rem",marginBottom:"2rem"}},r.a.createElement(G.a,{xs:24,lg:18},r.a.createElement($.b,{dataSource:t,itemLayout:"vertical",size:"large",pagination:{onChange:function(e){},pageSize:5,style:{textAlign:"center"}},renderItem:function(e){return r.a.createElement($.b.Item,{key:e.id,extra:r.a.createElement("img",{width:"50",alt:"logo",src:e.imgUrl})},r.a.createElement($.b.Item.Meta,{title:r.a.createElement(l.b,{to:"/detail/".concat(e.id)},e.title),description:e.year}))}}))))},te="postList/POST_LIST",ae=Object(d.a)(te),ne=Object(d.a)("postList/CHANGE_SELECT",(function(e){return{key:e.key,value:e.value}})),re=Object(d.a)("postList/SELECT_SEARCH",(function(e,t){return{year:e,category:t}})),ce=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.loading})).loading,a=Object(u.c)((function(e){return e.postList})),c=a.postList,o=a.error;return Object(n.useEffect)((function(){e(ae())}),[e]),r.a.createElement(ee,{postList:c,error:o,loading:t})},oe="auth/LOGIN",le=Object(d.a)("auth/CHANGE_FIELD",(function(e){return{key:e.key,value:e.value}})),ue=Object(d.a)(oe,(function(e){return{email:e.email,password:e.password}})),ie=Object(d.a)("auth/LOGOUT"),se=Object(d.a)("auth/FETCH_USER",(function(e){return e})),me=function(e){var t=e.onChange,a=e.onSelectSearch;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("select",{name:"year",style:{width:"45%"},defaultValue:"\uc5f0\ub3c4\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",onChange:t},r.a.createElement("option",{value:""},"\uc804\uccb4"),r.a.createElement("option",{value:"2020"},"2020"),r.a.createElement("option",{value:"2019"},"2019"),r.a.createElement("option",{value:"2018"},"2018"),r.a.createElement("option",{value:"2017"},"2017")),r.a.createElement("select",{name:"category",style:{width:"45%"},defaultValue:"\uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",onChange:t},r.a.createElement("option",{value:""},"\uc804\uccb4"),r.a.createElement("option",{value:"brochure"},"\ube0c\ub85c\uc154"),r.a.createElement("option",{value:"catalogue"},"\uce74\ub2e4\ub85c\uadf8"),r.a.createElement("option",{value:"leaflet"},"\ub9ac\ud50c\ub81b"),r.a.createElement("option",{value:"etc"},"\uae30\ud0c0")),r.a.createElement(z.a,{style:{marginLeft:"auto"},onClick:a},"\uac80\uc0c9"))},pe=a(446),Ee=a(433),fe=a(180),be=function(e){var t=e.user,a=(e.goLogin,e.onLogout);e.goWrite;return r.a.createElement("div",null,r.a.createElement(Ee.a,{trigger:["click"],overlay:r.a.createElement(fe.a,null,r.a.createElement(fe.a.Item,null,r.a.createElement(l.b,{to:"/write"},"\uc2dc\uc548 \ub4f1\ub85d")),t?r.a.createElement(fe.a.Item,{onClick:a},"\ub85c\uadf8\uc544\uc6c3"):r.a.createElement(fe.a.Item,null,r.a.createElement(l.b,{to:"/login"},"\ub85c\uadf8\uc778")))},r.a.createElement(z.a,{shape:"circle",icon:r.a.createElement(pe.a,null)})))},ge=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})).user,a=Object(u.c)((function(e){return e.postList})),c=a.year,o=a.category,i=Object(E.e)(),s=Object(n.useCallback)((function(){i.push("/login")}),[i]),m=Object(n.useCallback)((function(){e(ie()),s()}),[e,s]),p=Object(n.useCallback)((function(){e(re(c,o)),i.push("/list")}),[e,c,o,i]),f=Object(n.useCallback)((function(t){var a=t.target,n=a.name,r=a.value;console.log(n,r),e(ne({key:n,value:r}))}),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{justify:"end",style:{padding:20}},r.a.createElement(G.a,null,r.a.createElement(be,{goLogin:s,onLogout:m,goWrite:function(){i.push("/write")},user:t}))),r.a.createElement(N.a,{justify:"center",style:{marginTop:20}},r.a.createElement(G.a,null,r.a.createElement(M.a.Title,null,r.a.createElement(l.b,{to:"/"},"Find Mokup")))),r.a.createElement(N.a,{justify:"center",style:{marginTop:50}},r.a.createElement(G.a,{xs:20,lg:12},r.a.createElement(me,{onChange:f,onSelectSearch:p}))))},de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,null),r.a.createElement(ce,null))},Oe=function(){var e=Object(u.c)((function(e){return e.loading})).loading,t=Object(u.c)((function(e){return e.postList})),a=t.searchList,n=t.error;return r.a.createElement(ee,{postList:a,error:n,loading:e})},je=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,null),r.a.createElement(Oe,null))},ye=a(447),ve=a(448),he=a(436),we=a(443),Ce=function(e){var t=e.onLogin,a=e.onChange,n=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{justify:"center",align:"middle",style:{marginTop:100}},r.a.createElement(G.a,null,r.a.createElement(M.a.Title,null,"Find Mokup"))),r.a.createElement(N.a,{justify:"center"},r.a.createElement(G.a,null,r.a.createElement(he.a,{onFinish:t,initialValues:{remember:!0},style:{width:300,marginTop:50}},r.a.createElement(he.a.Item,{name:"email",rules:[{required:!0,message:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!"}]},r.a.createElement(we.a,{autoFocus:!0,prefix:r.a.createElement(ye.a,null),placeholder:"Email",onChange:a,name:"email"})),r.a.createElement(he.a.Item,{name:"password",rules:[{required:!0,message:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694!"}]},r.a.createElement(we.a,{prefix:r.a.createElement(ve.a,null),name:"password",type:"password",placeholder:"Password",onChange:a})),r.a.createElement(he.a.Item,null,r.a.createElement(z.a,{type:"primary",htmlType:"submit",style:{width:"100%"},loading:n},"Log in"))))))},Se=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.loading})).loading,a=Object(u.c)((function(e){return e.auth})),c=a.email,o=a.password,l=a.user,i=a.authError,s=Object(E.e)(),m=Object(n.useCallback)((function(){e(ue({email:c,password:o}))}),[e,c,o]),p=Object(n.useCallback)((function(t){var a=t.target,n=a.name,r=a.value;e(le({key:n,value:r}))}),[e]);return Object(n.useEffect)((function(){if(l){s.push("/");try{localStorage.setItem("auth",JSON.stringify(l))}catch(e){console.log("localStroage\uac00 \uc791\ub3d9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!")}}}),[s,l]),r.a.createElement(Ce,{onLogin:m,onChange:p,authError:i,loading:t})},Le=function(){return r.a.createElement(Se,null)},ke=a(123),xe=a(434),Ie=a(234),Te=a(226),_e=a.n(Te),Ue=function(e){var t=e.write,a=(e.imgUrl,e.previewImg),n=e.onSubmit,c=e.onCancel,o=e.onChangeField,l=e.onSelect,u=e.onDateChange,i=e.onFileChange,s=e.currentPostId,m=ke.a.Option;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_e.a,{onFinish:n},r.a.createElement(N.a,{justify:"center"},r.a.createElement(G.a,{xs:24,lg:14},r.a.createElement(H.a,{onBack:c,title:r.a.createElement(W.b,null,"\ubaa9\uc5c5 ",s?"\uc218\uc815":"\ub4f1\ub85d")}),r.a.createElement(B.a,{layout:"vertical",bordered:!0,column:1},r.a.createElement(B.a.Item,{label:"\uc774\ubbf8\uc9c0 \ub4f1\ub85d"},r.a.createElement("figure",{style:{textAlign:"center",maxWidth:"400px",margin:"0 auto"}},r.a.createElement("img",{src:s?t.imgUrl:a,alt:"",style:{maxWidth:"100%"}})),s?r.a.createElement(we.a,{type:"file",accept:"image/*",onChange:i}):r.a.createElement(we.a,{type:"file",accept:"image/*",onChange:i,required:!0})),r.a.createElement(B.a.Item,{label:"\uc81c\ubaa9"},r.a.createElement(we.a,{type:"text",name:"title",value:t.title,onChange:o,required:!0})),r.a.createElement(B.a.Item,{label:"\uc2dc\uc548 \uc885\ub958"},r.a.createElement(ke.a,{defaultValue:s?t.category:"\uc2dc\uc548 \uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694",style:{width:"100%"},onChange:l},r.a.createElement(m,{value:"brochure"},"\ube0c\ub85c\uc154"),r.a.createElement(m,{value:"catalogue"},"\uce74\ub2ec\ub85c\uadf8"),r.a.createElement(m,{value:"leaflet"},"\ub9ac\ud50c\ub81b"),r.a.createElement(m,{value:"etc"},"\uae30\ud0c0"))),r.a.createElement(B.a.Item,{label:"\uc791\uc5c5\uc790"},r.a.createElement(we.a,{type:"text",name:"manager",onChange:o,value:t.manager,required:!0})),r.a.createElement(B.a.Item,{label:"\uc791\uc5c5 \ub0a0\uc9dc"},r.a.createElement(xe.a,{picker:"month",locale:Ie.a,onChange:u}))))),r.a.createElement(N.a,{justify:"center",style:{marginTop:"1rem"}},r.a.createElement(G.a,null,r.a.createElement(z.a,{htmlType:"submit"},"\ub4f1\ub85d"),r.a.createElement(z.a,{onClick:c,danger:!0,style:{marginLeft:"0.5rem"}},"\ucde8\uc18c")))))},Ae=function(){var e=Object(u.b)(),t=Object(E.e)(),a=Object(u.c)((function(e){return e.write})),c=a.imgUrl,o=a.title,l=a.category,i=a.manager,s=a.date,m=a.year,p=a.month,f=a.previewImg,b=a.currentPostId,g=Object(u.c)((function(e){return e})).write,d=Object(n.useCallback)((function(){b?(e(k({currentPostId:b,imgUrl:c,title:o,category:l,manager:i,date:s,year:m,month:p})),window.alert("\uc218\uc815\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")):(e(C({imgUrl:c,title:o,category:l,manager:i,date:s,year:m,month:p})),window.alert("\ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),t.push("/")}),[e,c,o,l,i,s,m,p,t,b]),O=Object(n.useCallback)((function(t){var a=t.target,n=a.value,r=a.name;e(y({key:r,value:n}))}),[e]),j=Object(n.useCallback)((function(t){e(v(t))}),[e]),L=Object(n.useCallback)((function(t,a){e(h(a))}),[e]),x=Object(n.useCallback)((function(t){var a=t.target.files;if(a){var n,r=a&&a[0],c=new FileReader;c.onloadend=function(t){var a;n=null===(a=t.target)||void 0===a?void 0:a.result,e(w(n))},c.readAsDataURL(r)}}),[e]);return Object(n.useEffect)((function(){""!==f&&e(S(f))}),[e,f]),r.a.createElement(Ue,{write:g,imgUrl:c,previewImg:f,onSubmit:d,onCancel:function(){t.goBack()},onChangeField:O,onSelect:j,onDateChange:L,onFileChange:x,currentPostId:b})},Re=function(){return r.a.createElement(Ae,null)},De=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{component:de,path:"/",exact:!0}),r.a.createElement(E.a,{component:je,path:"/list"}),r.a.createElement(E.a,{component:Le,path:"/login"}),r.a.createElement(E.a,{component:Re,path:"/write"}),r.a.createElement(E.a,{component:Q,path:"/detail/:postId"}))};var Fe,Pe,Ne,Ge,He,We=function(){var e=Object(u.b)();return Object(n.useEffect)((function(){s.onAuthStateChanged((function(t){e(t?se(t):ie())}))}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(De,null))},Be=a(69),Me=a(233),ze=a(228),qe=a(27),Je=a(435),Ve=Object(Je.a)((Fe={},Object(qe.a)(Fe,"postList/CHANGE_SELECT",(function(e,t){var a=t.payload,n=a.key,r=a.value;return Object(x.a)({},e,Object(qe.a)({},n,r))})),Object(qe.a)(Fe,"postList/POST_LIST_SUCCESS",(function(e,t){var a=t.payload;return Object(x.a)({},e,{postList:a})})),Object(qe.a)(Fe,"postList/POST_LIST_FAILURE",(function(e,t){var a=t.payload;return Object(x.a)({},e,{error:a})})),Object(qe.a)(Fe,"postList/SELECT_SEARCH_SUCCESS",(function(e,t){var a=t.payload;return Object(x.a)({},e,{searchList:a})})),Object(qe.a)(Fe,"postList/SELECT_SEARCH_FAILURE",(function(e,t){var a=t.payload;return Object(x.a)({},e,{error:a})})),Fe),{postList:null,error:null,year:"",category:"",searchList:null}),Ke=Object(d.a)("loading/START_LOADING",(function(e){return e})),Xe=Object(d.a)("loading/FINISH_LOADING",(function(e){return e})),Ye=Object(Je.a)((Pe={},Object(qe.a)(Pe,"loading/START_LOADING",(function(e){return Object(x.a)({},e,{loading:!0})})),Object(qe.a)(Pe,"loading/FINISH_LOADING",(function(e){return Object(x.a)({},e,{loading:!1})})),Pe),{loading:!1}),Qe={post:null,error:null},Ze=Object(Je.a)((Ne={},Object(qe.a)(Ne,"READ_POST",(function(e){return Object(x.a)({},e,{post:null,error:null})})),Object(qe.a)(Ne,"READ_POST_SUCCESS",(function(e,t){var a=t.payload;return Object(x.a)({},e,{post:Object(x.a)({},a,{id:a.id})})})),Object(qe.a)(Ne,"READ_POST_FAILURE",(function(e,t){var a=t.payload;return Object(x.a)({},e,{error:a})})),Object(qe.a)(Ne,"RESET_POST",(function(){return Qe})),Ne),Qe),$e=Object(Je.a)((Ge={},Object(qe.a)(Ge,"write/CHANGE_FIELD",(function(e,t){var a=t.payload,n=a.key,r=a.value;return Object(x.a)({},e,Object(qe.a)({},n,r))})),Object(qe.a)(Ge,"write/CHANGE_SELECT",(function(e,t){var a=t.payload.value;return Object(x.a)({},e,{category:a})})),Object(qe.a)(Ge,"write/CHANGE_DATE",(function(e,t){var a=t.payload.value;return Object(x.a)({},e,{date:a,year:a.substring(0,4),month:a.substring(5)})})),Object(qe.a)(Ge,"write/CHANGE_FILE",(function(e,t){var a=t.payload.value;return Object(x.a)({},e,{previewImg:a})})),Object(qe.a)(Ge,j,(function(e){return Object(x.a)({},e,{post:null,postError:null})})),Object(qe.a)(Ge,"write/WRITE_POST_SUCCESS",(function(e,t){var a=t.payload;return Object(x.a)({},e,{post:a})})),Object(qe.a)(Ge,"write/WRITE_POST_FAILURE",(function(e,t){var a=t.payload;return Object(x.a)({},e,{postError:a})})),Object(qe.a)(Ge,"write/GET_DOWNLOAD_URL",(function(e){return Object(x.a)({},e,{getUrlError:null})})),Object(qe.a)(Ge,"write/GET_DOWNLOAD_URL_SUCCESS",(function(e,t){var a=t.payload;return Object(x.a)({},e,{imgUrl:a})})),Object(qe.a)(Ge,"write/GET_DOWNLOAD_URL_FAILURE",(function(e,t){var a=t.payload;return Object(x.a)({},e,{getUrlError:a})})),Object(qe.a)(Ge,"write/SET_CURRENT_POST",(function(e,t){var a=t.payload;return Object(x.a)({},e,{title:a.title,category:a.category,currentPostId:a.id,date:a.date,imgUrl:a.imgUrl,manager:a.manager,year:a.year,month:a.month,previewImg:a.previewImg})})),Object(qe.a)(Ge,"write/UPDATE_POST_SUCCESS",(function(e,t){var a=t.payload;return Object(x.a)({},e,{post:a})})),Object(qe.a)(Ge,"write/UPDATE_POST_FAILURE",(function(e,t){var a=t.payload;return Object(x.a)({},e,{error:a})})),Object(qe.a)(Ge,"write/FORM_INIT",(function(e){return Object(x.a)({},e,{title:"",category:"",currentPostId:null,date:"",imgUrl:"",manager:"",year:"",month:"",previewImg:""})})),Ge),{imgUrl:"",category:"",title:"",manager:"",date:"",year:"",month:"",post:null,postError:null,previewImg:"",getUrlError:null,currentPostId:null}),et=Object(Je.a)((He={},Object(qe.a)(He,"auth/CHANGE_FIELD",(function(e,t){var a=t.payload,n=a.key,r=a.value;return Object(x.a)({},e,Object(qe.a)({},n,r))})),Object(qe.a)(He,"auth/LOGIN_SUCCESS",(function(e,t){t.payload;return Object(x.a)({},e,{authError:null})})),Object(qe.a)(He,"auth/LOGIN_FAILURE",(function(e,t){var a=t.payload;return Object(x.a)({},e,{authError:a})})),Object(qe.a)(He,"auth/LOGOUT",(function(e){return Object(x.a)({},e,{user:null})})),Object(qe.a)(He,"auth/FETCH_USER",(function(e,t){var a=t.payload;return Object(x.a)({},e,{user:{id:a.uid,email:a.email}})})),Object(qe.a)(He,"auth/LOGIN_CHECK",(function(e){return Object(x.a)({},e)})),He),{email:"",password:"",user:null,authError:null}),tt=Object(Be.combineReducers)({auth:et,write:$e,post:Ze,loading:Ye,postList:Ve}),at=a(42);function nt(e,t){var a="".concat(e,"_SUCCESS"),n="".concat(e,"_FAILURE");return b.a.mark((function r(c){var o;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(at.c)(Ke(e));case 2:return r.prev=2,r.next=5,Object(at.b)(t,c.payload);case 5:return o=r.sent,r.next=8,Object(at.c)({type:a,payload:o});case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(2),r.next=14,Object(at.c)({type:n,payload:r.t0,error:!0});case 14:return r.next=16,Object(at.c)(Xe(e));case 16:case"end":return r.stop()}}),r,null,[[2,10]])}))}var rt=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,e.next=3,s.signInWithEmailAndPassword(a,n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ct=function(){s.signOut()},ot=b.a.mark(it),lt=b.a.mark(st),ut=nt(oe,rt);function it(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,localStorage.removeItem("auth"),e.next=4,Object(at.b)(ct);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),ot,null,[[0,6]])}function st(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(at.d)(oe,ut);case 2:return e.next=4,Object(at.d)("auth/LOGOUT",it);case 4:case"end":return e.stop()}}),lt)}var mt=b.a.mark(Et),pt=nt("READ_POST",T);function Et(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(at.d)("READ_POST",pt);case 2:case"end":return e.stop()}}),mt)}var ft=b.a.mark(dt),bt=nt(te,U),gt=nt("postList/SELECT_SEARCH",A);function dt(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(at.d)(te,bt);case 2:return e.next=4,Object(at.d)("postList/SELECT_SEARCH",gt);case 4:case"end":return e.stop()}}),ft)}var Ot=b.a.mark(ht),jt=nt(j,R),yt=nt("write/GET_DOWNLOAD_URL",F),vt=nt("write/UPDATE_POST",D);function ht(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(at.d)(j,jt);case 2:return e.next=4,Object(at.d)("write/GET_DOWNLOAD_URL",yt);case 4:return e.next=6,Object(at.d)("write/UPDATE_POST",vt);case 6:case"end":return e.stop()}}),Ot)}var wt=b.a.mark(Ct);function Ct(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(at.a)([ht(),Et(),dt(),st()]);case 2:case"end":return e.stop()}}),wt)}var St=Object(Me.a)(),Lt=Object(Be.createStore)(tt,Object(ze.composeWithDevTools)(Object(Be.applyMiddleware)(St)));St.run(Ct),function(){try{if(!localStorage.getItem("auth"));}catch(e){console.log("localStorage\uac00 \uc791\ub3d9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!")}}();var kt=Lt;o.a.render(r.a.createElement(u.a,{store:kt},r.a.createElement(l.a,null,r.a.createElement(We,null))),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.78f6cbc9.chunk.js.map