(this.webpackJsonp=this.webpackJsonp||[]).push([[21],{1795:function(e,a,t){"use strict";var n=t(2),l=t.n(n),s=t(1653),i=t(1679),r=t(1655),c=t(22),o=t.n(c),d=t(1395),m=t.n(d),u=t(1666),p=t(1656),g=t(2215),E=t(1926),y=t(1528),h=t(2194),A=t(4978),f=t(1664),v=t(2101),b=t.n(v),T=t(1665),C=t(4974),k=t(4991),I=t(48),S=t(1662),O=t(1678),D=t(4988),P=t(1422),N=t.n(P),w=t(2099),x=t.n(w),M=t(2100),K=t.n(M),R=t(1446),H=t.n(R),U=t(2102),B=t.n(U),L=t(4906),j=t(2759);var W=e=>{const{classes:a,advAuthHeader:t,advAuthHeaderValue:n,handleChanges:c,selectedEndpoint:o,api:{advertiseInfo:d,transport:m,securityScheme:u,authorizationHeader:g}}=e,E=m.join(", ").toUpperCase();let y="";return u.forEach((e,a)=>{0!==a&&(y+=", "),"basic_auth"===e?y+="Basic":"oauth2"===e?y+="OAuth2":"mutualssl"===e?y+="Mutual SSL":"api_key"===e?y+="API Key":y=y.substring(0,y.length-2)}),l.a.createElement(D.a,{display:"block",justifyContent:"center",className:a.authHeader},l.a.createElement(i.a,{x:12,md:6,className:a.centerItems},l.a.createElement(r.a,{variant:"h6",component:"label",id:"authentication-heading",color:"textSecondary",className:a.tryoutHeading},l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.AdvertiseDetailsPanel.authentication.heading",defaultMessage:"Authentication"}))),l.a.createElement(i.a,{container:!0,spacing:2,x:8,md:6,direction:"row",className:a.tokenType},l.a.createElement(i.a,{xs:6,md:4,style:{paddingLeft:0},item:!0},l.a.createElement(p.a,{margin:"normal",variant:"outlined",id:"advAuthHeader",label:l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.AdvertiseDetailsPanel.adv.auth.header",defaultMessage:"Authorization Header"}),name:"advAuthHeader",onChange:c,value:t||"",fullWidth:!0})),l.a.createElement(i.a,{xs:6,md:8,style:{paddingRight:0},item:!0},l.a.createElement(p.a,{margin:"normal",variant:"outlined",id:"advAuthHeaderValue",label:l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.AdvertiseDetailsPanel.adv.auth.header.value",defaultMessage:"Authorization Header Value"}),name:"advAuthHeaderValue",onChange:c,value:n||"",fullWidth:!0}))),l.a.createElement(i.a,{x:12,md:6,className:a.centerItems},l.a.createElement(r.a,{variant:"h6",component:"label",id:"key-type",color:"textSecondary",className:a.tryoutHeading},l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.AdvertiseDetailsPanel.endpoint.heading",defaultMessage:"API Endpoint"})),l.a.createElement(p.a,{fullWidth:!0,select:!0,id:"selectedEndpoint",label:l.a.createElement(s.a,{defaultMessage:"Endpoint type",id:"Apis.Details.ApiConsole.AdvertiseDetailsPanel.endpoint"}),value:o,name:"selectedEndpoint",onChange:c,helperText:l.a.createElement(s.a,{defaultMessage:"Please select an endpoint type",id:"Apis.Details.ApiConsole.AdvertiseDetailsPanel.endpoint.help"}),margin:"normal",variant:"outlined"},d.apiExternalProductionEndpoint&&l.a.createElement(S.a,{value:"PRODUCTION",className:a.menuItem},"Production"),d.apiExternalSandboxEndpoint&&l.a.createElement(S.a,{value:"SANDBOX",className:a.menuItem},"Sandbox"))),(E||y||g)&&l.a.createElement(i.a,{x:12,md:6,className:a.centerItems,style:{marginTop:"10px"}},l.a.createElement(L.a,{severity:"info"},l.a.createElement(j.a,null,l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.AdvertiseDetailsPanel.security.details",defaultMessage:"Security Details"})),E&&l.a.createElement("div",null,l.a.createElement("strong",null,"Transports: "),E),y&&l.a.createElement("div",null,l.a.createElement("strong",null,"Security schemes: "),y),g&&l.a.createElement("div",null,l.a.createElement("strong",null,"Authorization header: "),g))))},_=t(210),F=t(352),Y=t(1280),z=t(1213);var G=Object(z.a)(e=>({centerItems:{margin:"auto"},tryoutHeading:{display:"block",fontWeight:400},menuItem:{color:e.palette.getContrastText(e.palette.background.paper)}}))(e=>{let{selectedApplication:a,selectedKeyType:t}=e;const{subscriptions:n,handleChanges:c,classes:o}=e,d=e=>{const{target:n}=e,{name:l,value:s}=n;switch(l){case"selectedApplication":a=s;break;case"selectedKeyType":t=s}c(e)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{x:12,md:6,className:o.centerItems},l.a.createElement(p.a,{fullWidth:!0,id:"selected-application",select:!0,label:l.a.createElement(s.a,{defaultMessage:"Applications",id:"Apis.Details.ApiConsole.SelectAppPanel.applications"}),value:a,name:"selectedApplication",onChange:d,SelectProps:n,helperText:l.a.createElement(s.a,{defaultMessage:"Subscribed applications",id:"Apis.Details.ApiConsole.SelectAppPanel.select.subscribed.application"}),margin:"normal",variant:"outlined"},n.map(e=>l.a.createElement(S.a,{value:e.applicationInfo.applicationId,key:e.applicationInfo.applicationId,className:o.menuItem},e.applicationInfo.name)))),l.a.createElement(i.a,{x:12,md:6,className:o.centerItems},l.a.createElement(r.a,{variant:"h6",component:"label",id:"key-type",color:"textSecondary",className:o.tryoutHeading},l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.SelectAppPanel.select.key.type.heading",defaultMessage:"Key Type"})),l.a.createElement(g.a,{component:"fieldset"},l.a.createElement(E.a,{name:"selectedKeyType",value:t,onChange:d,"aria-labelledby":"key-type",row:!0},null!==n&&("UNBLOCKED"===n.find(e=>e.applicationId===a).status||"TIER_UPDATE_PENDING"===n.find(e=>e.applicationId===a).status)&&l.a.createElement(y.a,{value:"PRODUCTION",control:l.a.createElement(h.a,null),label:l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.SelectAppPanel.production.radio",defaultMessage:"Production"})}),l.a.createElement(y.a,{value:"SANDBOX",control:l.a.createElement(h.a,null),label:l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.SelectAppPanel.sandbox.radio",defaultMessage:"Sandbox"})})))))});const V=Object(u.a)(e=>({centerItems:{margin:"auto"},tokenType:{margin:"auto",display:"flex","& .MuiButton-contained.Mui-disabled span.MuiButton-label":{color:"#6d6d6d"}},paper:{margin:e.spacing(1),padding:e.spacing(1)},grid:{marginTop:e.spacing(4),marginBottom:e.spacing(4),paddingRight:e.spacing(2),justifyContent:"center"},tryoutHeading:{fontWeight:400,display:"block"},genKeyButton:{width:e.spacing(20),height:e.spacing(5),marginTop:e.spacing(2.5),marginLeft:e.spacing(2),"&:disabled":{cursor:"not-allowed",background:e.palette.grey[50]}},gatewayEnvironment:{marginTop:e.spacing(4)},categoryHeading:{marginBottom:e.spacing(2),marginLeft:e.spacing(-5)},tooltip:{marginLeft:e.spacing(1)},menuItem:{color:e.palette.getContrastText(e.palette.background.paper)},warningIcon:{color:"#ff9a00",fontSize:25,marginRight:10},loadMoreLink:{textDecoration:"none",margin:"auto",display:"flex",justifyContent:"center"},link:{color:e.palette.getContrastText(e.palette.background.default),cursor:"pointer"},authHeader:{marginBottom:"20px"}}));function X(e){const{securitySchemeType:a,selectedEnvironment:t,environments:c,productionAccessToken:o,sandboxAccessToken:d,selectedKeyType:m,setKeys:u,setSelectedKeyType:v,setSelectedKeyManager:P,setSelectedEnvironment:w,setProductionAccessToken:M,setSandboxAccessToken:R,scopes:U,setSecurityScheme:L,setUsername:j,setPassword:z,username:X,password:q,updateSwagger:$,setProductionApiKey:J,setSandboxApiKey:Q,productionApiKey:Z,sandboxApiKey:ee,environmentObject:ae,setURLs:te,setAdvAuthHeader:ne,setAdvAuthHeaderValue:le,advAuthHeader:se,advAuthHeaderValue:ie,setSelectedEndpoint:re,selectedEndpoint:ce,api:oe,URLs:de}=e;let{selectedKeyManager:me}=e;me=me||"Resident Key Manager";const ue=V(),[pe,ge]=Object(n.useState)(!1),[Ee,ye]=Object(n.useState)(!1),[he,Ae]=Object(n.useState)(!1),[fe,ve]=Object(n.useState)(!1),[be,Te]=Object(n.useState)([]),[Ce,ke]=Object(n.useState)([]),[Ie,Se]=Object(n.useState)([]),[Oe,De]=Object(n.useState)(null),[Pe,Ne]=Object(n.useState)(!1),[we,xe]=Object(n.useState)(!1),Me=oe.id,Ke=new F.a;function Re(e){const{target:t}=e,{name:n,value:l}=t;switch(n){case"selectedEnvironment":if(w(l,!0),"GRAPHQL"!==oe.type&&$(l),ae){const e=ae.find(e=>l===e.environmentName).URLs;te(e)}break;case"selectedApplication":M(""),R(""),J(""),Q(""),ke(l);break;case"selectedKeyManager":P(l,!0,Ce);break;case"selectedKeyType":v(l,!o||!d,Ce);break;case"securityScheme":L(l);break;case"username":j(l);break;case"password":z(l);break;case"accessToken":"API-KEY"===a&&"PRODUCTION"===m?J(l):"API-KEY"===a&&"SANDBOX"===m?Q(l):"PRODUCTION"===m?M(l):R(l);break;case"advAuthHeader":ne(l);break;case"advAuthHeaderValue":le(l);break;case"selectedEndpoint":re(l)}}Object(n.useEffect)(()=>{let e,a,n,l="PRODUCTION";if(oe.lifeCycleStatus){Ke.getSubscriptions(Me).then(s=>{null!==s?(e=s.obj.list.filter(e=>"UNBLOCKED"===e.status||"PROD_ONLY_BLOCKED"===e.status||"TIER_UPDATE_PENDING"===e.status),e&&e.length>0?(a=e[0].applicationId,Y.a.get(a).then(e=>e.getKeys()).then(s=>{s.get(me)&&"SANDBOX"===s.get(me).keyType?(l="SANDBOX",({accessToken:n}=s.get(me).token)):s.get(me)&&"PRODUCTION"===s.get(me).keyType&&(l="PRODUCTION",({accessToken:n}=s.get(me).token)),ke(a),Te(e),u(s),w(t,!1),v(l,!1),"PRODUCTION"===m?M(n):R(n)})):(ke(a),Te(e),u(void 0),w(t,!1),"PRODUCTION"===m?M(n):R(n),v(m,!1))):(ke(a),Te(e),u(void 0),w(t,!1),"PRODUCTION"===m?M(n):R(n),v(m,!1))}).catch(e=>{const{status:a}=e;404===a&&ve(!0)});Ke.getKeyManagers().then(e=>{const a=[];e.body.list.map(e=>a.push(e)),Se(a);const t=a.filter(e=>e.name===me);t&&t.length>0&&De(t[0])}).catch(e=>{const{status:a}=e;404===a&&ve(!0)})}},[]),Object(n.useEffect)(()=>{!function(){if(oe.lifeCycleStatus){let e,a;null!==be&&0!==be.length&&0!==Ce.length&&("PROD_ONLY_BLOCKED"===be.find(e=>e.applicationId===Ce).status?(v(m,!1),a="SANDBOX"):a=m),Y.a.get(Ce).then(e=>e.getKeys(a||"PRODUCTION")).then(a=>{const t=a.get(me);t&&t.keyType===m&&({accessToken:e}=t.token),t&&"PRODUCTION"===t.keyType?M(e):t&&"SANDBOX"===t.keyType&&R(e),t&&t.consumerKey&&""!==t.consumerKey?Ne(!0):Ne(!1),u(a)})}}()},[Ce,m,t,a]);const He=I.a.getUser();if(null==oe)return l.a.createElement(_.a,null);if(fe)return"API Not found !";let Ue=!1,Be=!1,Le=!1,je=!1,We=oe.authorizationHeader?oe.authorizationHeader:"Authorization",_e="Bearer";oe&&oe.securityScheme&&(Ue=oe.securityScheme.includes("api_key"),Be=oe.securityScheme.includes("basic_auth"),Le=oe.securityScheme.includes("oauth2"),je=oe.securityScheme.includes("test_auth"),Ue&&"API-KEY"===a&&(We="apikey",_e=""),je&&"TEST"===a&&(We="testKey",_e=""));const Fe=oe.lifeCycleStatus&&"prototyped"===oe.lifeCycleStatus.toLowerCase(),Ye="published"===oe.lifeCycleStatus.toLowerCase()||Fe;let ze="";ze="API-KEY"===a?"PRODUCTION"===m?Z:ee:"PRODUCTION"===m?o:d;const Ge=`${We}: ${_e}`;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{x:12,md:6,className:ue.centerItems},l.a.createElement(D.a,null,"TEST"!==a&&(!oe.advertiseInfo||!oe.advertiseInfo.advertised)&&l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,{mb:1},l.a.createElement(r.a,{variant:"body1"},l.a.createElement(D.a,{display:"flex",alignItems:"center"},Ie.length>1&&Oe&&Oe.enabled&&l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.TryOutController.default.km.msg.one",defaultMessage:"The Resident Key Manager is selected for try out console."}),Oe&&!Oe.enabled&&l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{className:ue.warningIcon}),l.a.createElement("div",null,l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.TryOutController.default.km.msg.two",defaultMessage:"Try it console is only accessible via the default key manager.But the default key manager is disabled at the moment."}))),Oe&&0===Oe.length&&l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.TryOutController.default.km.msg.three",defaultMessage:"Try it console is only accessible via the default key manager.Something went wrong while selecting the default Key manager."}))))),(Ue||Be||Le)&&Ye&&(!oe.advertiseInfo||!oe.advertiseInfo.advertised)&&l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{variant:"h5",component:"h2",color:"textPrimary",className:ue.categoryHeading},l.a.createElement(s.a,{id:"api.console.security.heading",defaultMessage:"Security"})),l.a.createElement(r.a,{variant:"h6",component:"label",id:"security-type",color:"textSecondary",className:ue.tryoutHeading},l.a.createElement(s.a,{id:"api.console.security.type.heading",defaultMessage:"Security Type"})),l.a.createElement(g.a,{component:"fieldset"},l.a.createElement(E.a,{name:"securityScheme",value:a,onChange:Re,"aria-labelledby":"security-type",row:!0},l.a.createElement(y.a,{value:"OAUTH",disabled:!Le,control:l.a.createElement(h.a,null),label:l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.security.scheme.oauth",defaultMessage:"OAuth"})}),l.a.createElement(y.a,{value:"API-KEY",disabled:!Ue,control:l.a.createElement(h.a,null),id:"api-key-select-radio-button",label:l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.security.scheme.apikey",defaultMessage:"API Key"})}),l.a.createElement(y.a,{value:"BASIC",disabled:!Be,control:l.a.createElement(h.a,null),label:l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.security.scheme.basic",defaultMessage:"Basic"})})))))),l.a.createElement(i.a,{xs:12,md:12,item:!0},l.a.createElement(D.a,{display:"block"},He&&be&&be.length>0&&"BASIC"!==a&&"TEST"!==a&&(!oe.advertiseInfo||!oe.advertiseInfo.advertised)&&l.a.createElement(G,{subscriptions:be,handleChanges:Re,selectedApplication:Ce,selectedKeyManager:me,selectedKeyType:m,keyManagers:Ie}),!be||0!==be.length||"TEST"===a||oe.advertiseInfo&&oe.advertiseInfo.advertised?!Pe&&"OAUTH"===a&&(!oe.advertiseInfo||!oe.advertiseInfo.advertised)&&l.a.createElement(i.a,{x:8,md:6,className:ue.tokenType,item:!0},l.a.createElement(D.a,{mb:1,alignItems:"center"},l.a.createElement(r.a,{variant:"body1"},l.a.createElement(D.a,{display:"flex"},l.a.createElement(N.a,{className:ue.warningIcon}),l.a.createElement("div",null,l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.ApiConsole.keys.not.generated",defaultMessage:"Consumer key and secret not generated for the selected application on the {what} environment. ",values:{what:m}})))))):l.a.createElement(i.a,{x:8,md:6,className:ue.tokenType,item:!0},l.a.createElement(D.a,{mb:1,alignItems:"center"},l.a.createElement(r.a,{variant:"body1"},l.a.createElement(D.a,{display:"flex"},l.a.createElement(N.a,{className:ue.warningIcon}),l.a.createElement("div",null,l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.ApiConsole.subscribe.to.application",defaultMessage:"Please subscribe to an application"})))))),oe.advertiseInfo&&oe.advertiseInfo.advertised?l.a.createElement(W,{classes:ue,advAuthHeader:se,advAuthHeaderValue:ie,handleChanges:Re,selectedEndpoint:ce,api:oe}):l.a.createElement(D.a,{display:"block",justifyContent:"center"},l.a.createElement(i.a,{x:8,md:6,className:ue.tokenType,item:!0},"BASIC"===a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{x:12,md:12,item:!0},l.a.createElement(p.a,{margin:"normal",variant:"outlined",id:"username",label:l.a.createElement(s.a,{id:"username",defaultMessage:"Username"}),name:"username",onChange:Re,value:X||"",fullWidth:!0}),l.a.createElement(p.a,{margin:"normal",variant:"outlined",id:"input-password",label:l.a.createElement(s.a,{id:"password",defaultMessage:"Password"}),name:"password",onChange:Re,type:Ee?"text":"password",value:q||"",fullWidth:!0,InputProps:{autoComplete:"new-password",endAdornment:l.a.createElement(C.a,{position:"end"},l.a.createElement(T.a,{edge:"end","aria-label":"toggle password visibility",onClick:()=>ye(!Ee)},Ee?l.a.createElement(x.a,null):l.a.createElement(K.a,null)))}}))),"BASIC"!==a&&"TEST"!==a&&l.a.createElement(p.a,{fullWidth:!0,margin:"normal",variant:"outlined",label:l.a.createElement(s.a,{id:"access.token",defaultMessage:"Access Token"}),name:"accessToken",onChange:Re,type:pe?"text":"password",value:ze||"",helperText:l.a.createElement(s.a,{id:"enter.access.token",defaultMessage:"Enter access Token"}),id:"accessTokenInput",InputProps:{autoComplete:"new-password",endAdornment:l.a.createElement(C.a,{position:"end"},l.a.createElement(T.a,{edge:"end","aria-label":"Toggle token visibility",onClick:function(){ge(!pe)}},pe?l.a.createElement(k.a,null,"visibility_off"):l.a.createElement(k.a,null,"visibility"))),startAdornment:l.a.createElement(C.a,{style:{minWidth:7*Ge.length},position:"start"},`${We}: ${_e}`)}}),"BASIC"!==a&&"TEST"!==a&&Oe&&!Oe.enableTokenHashing&&l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{onClick:"API-KEY"===a?function(){if(oe.lifeCycleStatus){Ae(!0);Ke.generateApiKey(Ce,m,-1).then(e=>{console.log("Non empty response received",e),ge(!1),"PRODUCTION"===m?J(e.body.apikey):Q(e.body.apikey),Ae(!1)}).catch(e=>{console.log(e);const{status:a}=e;404===a&&ve(!0),Ae(!1)})}}:function(){if(oe.lifeCycleStatus){Ae(!0);Y.a.get(Ce).then(e=>e.generateToken(me,m,3600,U)).then(e=>{console.log("token generated successfully "+e),ge(!1),"PRODUCTION"===m?M(e.accessToken):R(e.accessToken),Ae(!1)}).catch(e=>{console.error(e);const{status:a}=e;404===a&&ve(!0),Ae(!1)})}},variant:"contained",className:ue.genKeyButton,disabled:!He||be&&0===be.length||!Pe&&"OAUTH"===a,id:"gen-test-key"},he&&l.a.createElement(A.a,{size:15}),l.a.createElement(s.a,{id:"Apis.Details.ApiCOnsole.generate.test.key",defaultMessage:"GET TEST KEY "})),l.a.createElement(f.a,{placement:"right",interactive:!0,title:l.a.createElement(s.a,{id:"Apis.Details.TryOutConsole.access.token.tooltip",defaultMessage:"You can use your existing Access Token or you can generate a new Test Key."})},l.a.createElement(D.a,{m:1,mt:2},l.a.createElement(T.a,{"aria-label":"Use existing Access Token or generate a new Test Key"},l.a.createElement(b.a,null))))))),(!oe.advertiseInfo||!oe.advertiseInfo.advertised)&&l.a.createElement(D.a,{display:"flex",justifyContent:"center",className:ue.gatewayEnvironment},l.a.createElement(i.a,{xs:12,md:6,item:!0},c&&c.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{variant:"h5",component:"h3",color:"textPrimary",className:ue.categoryHeading},l.a.createElement(s.a,{id:"api.console.gateway.heading",defaultMessage:"Gateway"})),l.a.createElement(p.a,{fullWidth:!0,select:!0,id:"environment",label:l.a.createElement(s.a,{defaultMessage:"Environment",id:"Apis.Details.ApiConsole.environment"}),value:t||c&&c[0].name,name:"selectedEnvironment",onChange:Re,helperText:l.a.createElement(s.a,{defaultMessage:"Please select an environment",id:"Apis.Details.ApiConsole.SelectAppPanel.environment"}),margin:"normal",variant:"outlined"},c&&c.length>0&&l.a.createElement(S.a,{value:"",disabled:!0,className:ue.menuItem},l.a.createElement("em",null,l.a.createElement(s.a,{id:"api.gateways",defaultMessage:"API Gateways"}))),c&&c.map(e=>l.a.createElement(S.a,{value:e.name,key:e.name,className:ue.menuItem},e.displayName))),oe&&"GRAPHQL"===oe.type&&l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{className:ue.verticalSpace,variant:"body1"},l.a.createElement("a",{className:ue.link+" "+ue.loadMoreLink,onClick:()=>xe(!we),onKeyDown:()=>xe(!we)},we?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.SelectAppPanel.environment.show.less",defaultMessage:"Show Less"}),l.a.createElement(B.a,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{id:"Apis.Details.ApiConsole.SelectAppPanel.environment.show.more",defaultMessage:"Show More"}),l.a.createElement(H.a,null)))),we&&l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{label:l.a.createElement(s.a,{defaultMessage:"Gateway URLs",id:"Apis.Details.ApiConsole.SelectAppPanel.environment.show.more.http.URLs"}),value:de&&de.https,name:"selectedHTTPURL",fullWidth:!0,margin:"normal",variant:"outlined",InputProps:de&&de.https}),de&&de.wss&&l.a.createElement(p.a,{label:l.a.createElement(s.a,{defaultMessage:"Subscription Gateway URLs",id:"Apis.Details.ApiConsole.SelectAppPanel.environment.show.more.subscription.URLs"}),value:de&&de.wss,name:"selectedWSURL",fullWidth:!0,margin:"normal",variant:"outlined",InputProps:de&&de.wss})))))))))}X.propTypes={classes:o.a.shape({paper:o.a.string.isRequired,grid:o.a.string.isRequired,inputAdornmentStart:o.a.string.isRequired,centerItems:o.a.string.isRequired}).isRequired};a.a=m()(u.a)(X)}}]);
//# sourceMappingURL=21.35230aba351c7d402ceb.bundle.js.map