(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/IMG_2778.0c7e5ba5.jpg"},46:function(e,t,a){e.exports=a(85)},51:function(e,t,a){},52:function(e,t,a){},55:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"PERSONAL_INFO",(function(){return b})),a.d(n,"ABILITIES",(function(){return N})),a.d(n,"SKILLS",(function(){return h})),a.d(n,"PENDING_FALSE",(function(){return g})),a.d(n,"PENDING_TRUE",(function(){return y})),a.d(n,"GetPersonalInfo",(function(){return j})),a.d(n,"GetAbilities",(function(){return I})),a.d(n,"GetSkills",(function(){return w}));var l=a(1),r=a.n(l),c=a(23),i=a.n(c),s=(a(51),a(3)),m=a(4),o=a(6),u=a(7),d=(a(52),a(53),a(54),a(0)),E=(a(55),a(11)),p=a(5),v=a(16),f=a.n(v);f.a.defaults.baseURL="https://thawing-lowlands-03153.herokuapp.com";var b="PERSONAL_INFO",N="ABILITIES",h="SKILLS",g="PENDING_FALSE",y="PENDING_TRUE";function O(){return{type:g}}function k(){return{type:y}}function j(){return k(),function(e){return f.a.get("/api/v2/pages/?type=personalinfo.personalinfo&fields=*").then((function(t){var a;e((a=t.data.items[0],{type:b,personalInfo:a})),e(O())})).catch((function(e){return console.log(e)}))}}function I(){return k(),function(e){return f.a.get("/api/v2/pages/?type=abilities.Abilities&fields=*").then((function(t){var a;e((a=t.data.items,{type:N,abilities:a})),e(O())})).catch((function(e){return console.log(e)}))}}function w(){return k(),function(e){return f.a.get("/api/v2/pages/?type=skills.skills&fields=*").then((function(t){var a;e((a=t.data.items,{type:h,skills:a})),e(O())})).catch((function(e){return console.log(e)}))}}var L=a(25),S=a.n(L),A=(a(77),function(){return r.a.createElement("div",{className:"myModal"},r.a.createElement("div",{className:"myModal-content"},r.a.createElement("div",{className:"center"},"Loading..."),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate"}))))}),x=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).renderLoader=function(){return e.props.pending?r.a.createElement(A,null):null},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){S()(".sidenav-overlay").trigger("click")}},{key:"render",value:function(){var e=this.props.personalInfo,t=e.firstName,a=e.lastName;return r.a.createElement("div",null,this.renderLoader(),r.a.createElement("div",{className:"bg"},r.a.createElement("div",{className:"contentCenter"},r.a.createElement("div",{className:"fontSize"},"Hey, I'm ",r.a.createElement("b",null,t+" "+a),".",r.a.createElement("br",null),"I'm a full-stack web developer."),r.a.createElement("br",null),r.a.createElement(E.b,{to:"/about",className:"waves-effect waves-light btn-flat white"},"Find out more."))))}}]),a}(l.Component),P=Object(p.b)((function(e){return e}),n)(x),D=(a(79),a(42)),_=a.n(D),M=a(17),C=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll("#sideNav");_.a.Sidenav.init(e,{}),S()(".sidenav-overlay").trigger("click")}},{key:"render",value:function(){var e=this.props.personalInfo,t=e.firstName,a=e.lastName;return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{href:"/#","data-target":"sideNav",className:"sidenav-trigger show-on-large"},r.a.createElement("i",{className:"valign-wrapper"},r.a.createElement(M.c,null))))),r.a.createElement("ul",{className:"sidenav",id:"sideNav"},r.a.createElement("li",null,r.a.createElement("div",{className:"user-view"},r.a.createElement("div",{className:"background"}),r.a.createElement("span",{className:"initials"},t.toString().slice(0,1)+a.toString().slice(0,1)),r.a.createElement("span",{className:"name"},t+" "+a))),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/"},r.a.createElement("i",null,r.a.createElement(M.a,{className:"black-text"})),"Home")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/about"},r.a.createElement("i",null,r.a.createElement(M.b,{className:"black-text"})),"About")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/timeline"},r.a.createElement("i",null,r.a.createElement(M.e,{className:"black-text"})),"Timeline")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/portfolio"},r.a.createElement("i",null,r.a.createElement(M.f,{className:"black-text"})),"Portfolio")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/contact"},r.a.createElement("i",null,r.a.createElement(M.d,{className:"black-text"})),"Contact"))))}}]),a}(l.Component),G=Object(p.b)((function(e){return e}))(C),z=(a(80),a(14)),R=a(43),T=function(){return r.a.createElement("footer",{className:"container"},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"divider"}),"Powered by ",r.a.createElement(z.d,null)," and ",r.a.createElement(R.a,null),"."))},F=(a(81),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).renderLoader=function(){return e.props.pending?r.a.createElement(A,null):null},e.renderSkills=function(){return e.props.skills.map((function(e){return r.a.createElement("div",{className:"chip",id:e.id},e.title)}))},e.renderAbilities=function(){return e.props.abilities.map((function(e){var t=e.id,a=e.title,n=e.abilityDescription,l=e.abilityIcon;return r.a.createElement("div",{className:"col s12 m6 l3 center-align",id:t},r.a.createElement("div",{className:"card hoverable"},r.a.createElement("div",{className:"card-content"},r.a.createElement("i",{className:"large material-icons",id:"Icon"},l),r.a.createElement("span",{className:"card-title"},a),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:n}}))))}))},e.renderMe=function(){var t=e.props.personalInfo,a=t.description,n=t.firstName,l=t.lastName;return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card hoverable",id:"me"},r.a.createElement("div",{className:"card-content row"},r.a.createElement("div",{className:"card-title center"},n+" "+l),r.a.createElement("div",{className:"col s12 m6 l6",id:"description"},a),r.a.createElement("div",{className:"col s12 m6 l6"},r.a.createElement("b",null,"Skilled in:"),r.a.createElement("br",null),e.renderSkills()))))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.GetAbilities(),this.props.GetSkills()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G,null),this.renderLoader(),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"More about me..."))),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"row"},this.renderAbilities(),this.renderMe())),r.a.createElement(T,null))}}]),a}(l.Component)),U=Object(p.b)((function(e){return e}),n)(F),B=(a(82),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).renderEvents=function(){return r.a.createElement("div",{className:"timeline"},r.a.createElement("div",{className:"timeline-event"},r.a.createElement("div",{className:"card timeline-content"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"more_horiz"))),r.a.createElement("div",{className:"timeline-badge blue white-text"},r.a.createElement("i",{className:"material-icons"},"speed"))))},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"Progress..."))),r.a.createElement("div",{className:"divider"}),this.renderEvents()),r.a.createElement(T,null))}}]),a}(l.Component)),H=(a(83),a(30)),J=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).renderLoader=function(){return e.state.loader?r.a.createElement(A,null):null},e.renderRepos=function(){return e.state.gitData.reverse().map((function(e){return r.a.createElement("div",{className:"col s12 m6 l4"},r.a.createElement("div",{className:"card hoverable",id:e.id},r.a.createElement("div",{className:"card-content"},r.a.createElement("i",{className:"material-icons activator right"},"more_horiz")),r.a.createElement("div",{className:"card-image center"},r.a.createElement("span",{className:"letter"},e.language.slice(0,1)),r.a.createElement("br",null),e.language),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},e.name),r.a.createElement("span",null,"Latest commit:",r.a.createElement("br",null),new Date(e.pushed_at).toUTCString().slice(0,25)),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:e.html_url,className:"blue-text"},r.a.createElement(H.b,null)),r.a.createElement("span",{className:"right"},e.default_branch,r.a.createElement(H.a,{size:14})))),r.a.createElement("div",{className:"card-reveal"},r.a.createElement("span",{className:"card-title"},e.name,r.a.createElement("i",{className:"material-icons right"},"close")),r.a.createElement("p",null,e.description))))}))},e.state={gitData:[],loader:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.personalInfo.gitApiLink;f.a.get(t).then((function(t){return e.setState({gitData:t.data,loader:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G,null),this.renderLoader(),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"My Projects"))),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"row"},this.renderRepos())),r.a.createElement(T,null))}}]),a}(l.Component),K=Object(p.b)((function(e){return e}),n)(J),q=a(44),Q=a.n(q),V=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).renderLoader=function(){return e.props.pending?r.a.createElement(A,null):null},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.personalInfo,t=e.firstName,a=e.lastName,n=e.email,l=e.gitProfileLink,c=e.linkedInLink;return r.a.createElement("div",null,r.a.createElement(G,null),this.renderLoader(),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"Find me..."))),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title center"},t+" "+a),r.a.createElement("div",{className:"row"},r.a.createElement("img",{alt:"person",className:"col s12 m12 l6",src:Q.a}),r.a.createElement("div",{className:"col s12 m12 l6"},r.a.createElement("h5",null,"Let's build something amazing!"),r.a.createElement("a",{href:"mailto:"+n,className:"black-text"},r.a.createElement(z.a,null)," \u2022 ",n),r.a.createElement("br",null),r.a.createElement("a",{href:l,className:"black-text"},r.a.createElement(z.b,null)," \u2022 ",l),r.a.createElement("br",null),r.a.createElement("a",{href:c,className:"black-text"},r.a.createElement(z.c,null)," \u2022 ",c),r.a.createElement("br",null)))))),r.a.createElement(T,null))}}]),a}(l.Component),W=Object(p.b)((function(e){return e}),n)(V),X=(a(84),function(){return r.a.createElement("div",{className:"contentCenter"},r.a.createElement(z.e,{size:80}),r.a.createElement("br",null),r.a.createElement("br",null),"Oops. Something went wrong...",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.b,{to:"/",className:"btn btn-block blue"},"Please head back."))}),Y=a(15),Z=function(){return r.a.createElement(E.a,null,r.a.createElement(Y.c,null,r.a.createElement(Y.a,{exact:!0,path:"/",component:P}),r.a.createElement(Y.a,{exact:!0,path:"/about",component:U}),r.a.createElement(Y.a,{exact:!0,path:"/timeline",component:B}),r.a.createElement(Y.a,{exact:!0,path:"/portfolio",component:K}),r.a.createElement(Y.a,{exact:!0,path:"/contact",component:W}),r.a.createElement(Y.a,{path:"*",component:X})))},$=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.GetPersonalInfo()}},{key:"render",value:function(){return r.a.createElement(d.b.Provider,{value:{style:{verticalAlign:"middle"},size:"24px"}},r.a.createElement("div",{className:"App"},r.a.createElement(Z,null)))}}]),a}(l.Component),ee=Object(p.b)((function(e){return e}),n)($),te=a(21),ae=a(45),ne=a(18),le={personalInfo:{},abilities:[],skills:[],pending:!0},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return t.type===b?Object(ne.a)({},e,{personalInfo:t.personalInfo}):t.type===N?Object(ne.a)({},e,{abilities:t.abilities}):t.type===h?Object(ne.a)({},e,{skills:t.skills}):t.type===g?Object(ne.a)({},e,{pending:!1}):t.type===y?Object(ne.a)({},e,{pending:!0}):Object(ne.a)({},e)};var ce,ie=Object(te.c)(re,ce,Object(te.a)(ae.a));i.a.render(r.a.createElement(p.a,{store:ie},r.a.createElement(ee,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.e75f8d3a.chunk.js.map