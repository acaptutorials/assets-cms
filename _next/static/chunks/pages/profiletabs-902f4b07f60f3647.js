(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[983],{3890:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profiletabs",function(){return n(2539)}])},1213:function(e,t,n){"use strict";var r=n(5893),i=n(5675),a=n.n(i),s=n(5697),o=n.n(s),l=n(1953),c=n(9630),u=n(5556);function d(e){let{title:t="Title",content:n="Text",picture:i,pictureAlt:s="",pictureSize:o}=e;return(0,r.jsxs)(u.Z,{sx:{marginTop:"16px",marginBottom:"16px"},children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(c.Z,{variant:"h4",children:t})}),(0,r.jsx)(l.Z,{sx:{marginTop:"24px"},children:(0,r.jsx)(c.Z,{variant:"body2",sx:{whiteSpace:"pre-line"},children:n})}),i&&(0,r.jsx)(l.Z,{sx:{textAlign:"center",marginTop:"40px"},children:(0,r.jsx)(a(),{src:i,alt:s,...o})})]})}d.propTypes={title:o().string,content:o().string,picture:o().object,pictureAlt:o().string,pictureSize:o().object},t.Z=d},5556:function(e,t,n){"use strict";var r=n(1953),i=n(1719);let a=(0,i.ZP)(r.Z)(e=>{let{theme:t}=e;return{width:"100%",padding:t.spacing(3)}});t.Z=a},8217:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),i=n(5697),a=n.n(i),s=n(1953),o=n(9630),l=n(5556),c={container:{"& h5":{color:"green"}}};function u(e){let{title:t="Title",content:n="Text"}=e;return(0,r.jsxs)(l.Z,{sx:c.container,children:[(0,r.jsx)(s.Z,{children:(0,r.jsx)(o.Z,{variant:"h5",children:t})}),(0,r.jsx)(s.Z,{sx:{marginTop:"8px"},children:(0,r.jsx)(o.Z,{variant:"body2",children:n})})]})}u.propTypes={title:a().string,content:a().string};var d=u},9789:function(e,t,n){"use strict";var r=n(9837),i=n(1719);let a=(0,i.ZP)(r.Z)(e=>{let{theme:t}=e;return{width:"100%",textAlign:"center",padding:t.spacing(2),borderRadius:t.spacing(1),marginTop:t.spacing(3),boxShadow:"\n    rgb(255 255 255) 0px 0px 0px 0px,\n    rgb(0 0 0 / 5%) 0px 0px 0px 1px,\n    rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%)\n    0px 4px 6px -2px !important"}});t.Z=a},7403:function(e,t,n){"use strict";var r=n(5893),i=n(5697),a=n.n(i),s=n(3148),o=n(5430),l=n(5556);function c(e){let{options:t,data:n,width:i,height:a}=e;return(0,r.jsx)(l.Z,{sx:i&&a?{}:{width:"100vw",height:"100vh"},children:(0,r.jsx)(o.$Q,{width:null!=i?i:300,height:null!=a?a:300,options:t,data:n})})}s.kL.register(s.uw,s.f$,s.ZL,s.Dx,s.u,s.De),c.propTypes={data:a().object,options:a().object,width:a().number,height:a().number},t.Z=c},8396:function(e,t,n){"use strict";var r=n(5893),i=n(5697),a=n.n(i),s=n(3148),o=n(5430),l=n(5556);function c(e){let t=e.width&&e.height?{}:{width:"100vw",height:"100vh"};return(0,r.jsx)(l.Z,{sx:t,children:(0,r.jsx)(o.$I,{data:e,width:(null==e?void 0:e.width)||300,height:(null==e?void 0:e.height)||300,options:{maintainAspectRatio:!1}})})}s.kL.register(s.qi,s.u,s.De),c.propTypes={data:a().array,width:a().number,height:a().number},t.Z=c},9715:function(e,t,n){"use strict";var r=n(5893),i=n(5697),a=n.n(i),s=n(3148),o=n(5430),l=n(5556);function c(e){let{options:t,data:n,width:i,height:a}=e;return(0,r.jsx)(l.Z,{sx:i&&a?{}:{width:"100vw",height:"100vh"},children:(0,r.jsx)(o.x1,{options:t,data:n,width:null!=i?i:300,height:null!=a?a:300})})}s.kL.register(s.uw,s.f$,s.od,s.jn,s.Dx,s.u,s.De),c.propTypes={data:a().object,options:a().object,width:a().number,height:a().number},t.Z=c},1597:function(e,t,n){"use strict";var r=n(5893),i=n(7294),a=n(5697),s=n.n(a),o=n(2853),l=n(8703);function c(e){let{isOpen:t,message:n,severity:a,closeHandlerCB:s=()=>{}}=e,[c,u]=(0,i.useState)(t);(0,i.useEffect)(()=>{u(t)},[t]);let d=()=>{u(!1),s()};return(0,r.jsx)(l.Z,{open:c,autoHideDuration:3e3,onClose:d,children:(0,r.jsx)(o.Z,{severity:null!=a?a:"success",sx:{borderRadius:"8px"},children:n})})}c.propTypes={isOpen:s().bool,message:s().string,severity:s().string,closeHandlerCB:s().func},t.Z=c},1947:function(e,t,n){"use strict";n.d(t,{aT:function(){return s},p8:function(){return a},YM:function(){return i}});let r=(e,t)=>(e=Math.ceil(e),Math.floor(Math.random()*((t=Math.floor(t))-e+1)+e)),i={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top"},title:{display:!0,text:"Vaporize and Melt Reactions Damage"}}},a=["January","February","March","April","May","June","July"],s={labels:a,datasets:[{label:"Vaporize",data:a.map(()=>r(0,1e3)),borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Melt",data:a.map(()=>r(0,1e3)),borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]}},1875:function(e,t){"use strict";t.Z={labels:["Energy","Agriculture","Industrial processes","Waste","Land Use and Forestry"],datasets:[{label:"Crit Rate %",data:[6.88,1.83,.74,.51,.04],backgroundColor:["rgba(54, 162, 235, 0.2)","rgba(255, 99, 132, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgba(54, 162, 235, 1)","rgba(255, 99, 132, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)"],borderWidth:1}]}},2539:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(5893),i=n(7294),a=n(1163),s=n(1664),o=n.n(s),l=n(5084),c=n(1953),u=n(6336),d=n(9072),x=n(9630),h=n(5697),p=n.n(h),g=n(3555),f=n(8661),b={tab:{color:"#fff",textTransform:"capitalize","&:hover":{color:"#fff",opacity:1},"&.Mui-selected":{color:"#fff",fontWeight:e=>e.typography.fontWeightMedium},"&.Mui-focusVisible":{backgroundColor:"#d1eaff"}}},j=function(e){return(0,r.jsx)(f.Z,{sx:b.tab,component:"a",wrapped:!0,onClick(e){e.preventDefault()},...e})},m={tabs:{"& .MuiTabs-indicator":{border:e=>"2px solid ".concat(e.palette.secondary.main),backgroundColor:e=>e.palette.primary.dark,borderShadow:"\n      rgb(255 255 255) 0px 0px 0px 0px,\n      rgb(0 0 0 / 5%) 0px 0px 0px 1px,\n      rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%)\n      0px 4px 6px -2px !important"}}};function Z(e){let{onTabSelect:t}=e,[n,a]=(0,i.useState)(0),s=(e,n)=>{a(n),t&&t(n)};return(0,r.jsx)(c.Z,{sx:{width:"100%"},children:(0,r.jsxs)(g.Z,{value:n,onChange:s,"aria-label":"navigation tabs",sx:m.tabs,variant:"fullWidth",scrollButtons:!0,allowScrollButtonsMobile:!0,children:[(0,r.jsx)(j,{label:"Greenhouse Gas (GHG) Emmissions",href:"#"}),(0,r.jsx)(j,{label:"Climate Risks",href:"#"}),(0,r.jsx)(j,{label:"Climate Change and Vulnerability",href:"#"}),(0,r.jsx)(j,{label:"Adaptation and Mitigation Priorities",href:"#"}),(0,r.jsx)(j,{label:"Financing and Opportunities for ADB",href:"#"})]})})}Z.propTypes={onTabSelect:p().func};var v=function(e){let{children:t,value:n,index:i,...a}=e;return(0,r.jsx)("div",{role:"tabpanel",hidden:n!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i),...a,children:n===i&&(0,r.jsx)(c.Z,{sx:{p:3},children:t})})},y=n(1597),w=n(9789),C=n(8396),T=n(8217),D=function(e){let{donutData:t,textData:n}=e;return(0,r.jsxs)(d.ZP,{container:!0,sx:{marginTop:"56px"},children:[(0,r.jsx)(d.ZP,{item:!0,xs:12,sm:5,children:(0,r.jsx)(C.Z,{...t,width:300,height:300})}),(0,r.jsx)(d.ZP,{item:!0,xs:12,sm:7,children:(0,r.jsx)(T.Z,{...n})})]})},P=n(7403),k=function(e){let{barData:t,textData:n}=e;return(0,r.jsxs)(d.ZP,{container:!0,sx:{marginTop:"56px"},children:[(0,r.jsx)(d.ZP,{item:!0,xs:12,children:(0,r.jsx)(x.Z,{variant:"h4",children:"Climate Change Scenarios"})}),(0,r.jsx)(d.ZP,{item:!0,xs:12,sm:7,children:(0,r.jsx)(T.Z,{...n,title:"Climate Risks"})}),(0,r.jsx)(d.ZP,{item:!0,xs:12,sm:5,children:(0,r.jsx)(P.Z,{...t,width:300,height:300})})]})},S=n(9715),M=function(e){let{barData:t,textData:n}=e;return(0,r.jsxs)(d.ZP,{container:!0,sx:{marginTop:"56px"},children:[(0,r.jsx)(d.ZP,{item:!0,xs:12,children:(0,r.jsx)(x.Z,{variant:"h4",children:"Climate Change Scenarios"})}),(0,r.jsx)(d.ZP,{item:!0,xs:12,sm:7,children:(0,r.jsx)(T.Z,{...n,title:"Climate Change and Vulnerability"})}),(0,r.jsx)(d.ZP,{item:!0,xs:12,sm:5,children:(0,r.jsx)(S.Z,{...t,width:300,height:300})})]})},_=n(1213),R={headerContainer:{backgroundColor:e=>e.palette.primary.main,height:"270px"},headerContent:{paddingBottom:0,"& h1":{lineHeight:"60px"},"& h1, h3, h4":{color:"#fff",fontFamily:"Bebas Neue",fontWeight:"normal"},height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},headerTitle:{marginTop:e=>e.spacing(9),display:"flex",justifyContent:"space-between",alignItems:"center","& button":{height:"50px",backgroundColor:e=>e.palette.primary.light,"&:hover":{backgroundColor:"#fff"}},"& a":{textDecoration:"none"}}},E=function(e){let{country:t,state:n,textData:a,donutData:s,barData:h}=e,[p,g]=(0,i.useState)(0);return(0,r.jsxs)(d.ZP,{container:!0,children:[""!==n.error&&(0,r.jsx)(y.Z,{isOpen:!0,message:n.error,severity:"error"}),(0,r.jsx)(d.ZP,{item:!0,xs:12,sx:R.headerContainer,children:(0,r.jsxs)(u.Z,{maxWidth:"lg",sx:R.headerContent,children:[(0,r.jsxs)(c.Z,{sx:R.headerTitle,children:[(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(x.Z,{variant:"h1",children:t}),(0,r.jsx)(x.Z,{variant:"h4",children:"Country Profile"})]}),(0,r.jsx)(o(),{href:"/countries",passHref:!0,children:(0,r.jsx)(l.Z,{variant:"outlined",children:"Countries"})})]}),(0,r.jsx)(Z,{onTabSelect(e){g(e)}})]})}),(0,r.jsx)(d.ZP,{item:!0,xs:12,children:n.loading?(0,r.jsx)(w.Z,{sx:{maxWidth:"800px",margin:"auto",marginTop:"32px"},children:"Loading please wait..."}):(0,r.jsxs)(u.Z,{maxWidth:"lg",children:[(0,r.jsx)(v,{value:p,index:0,children:(0,r.jsx)(D,{donutData:s,textData:a[0]})}),(0,r.jsx)(v,{value:p,index:1,children:(0,r.jsx)(k,{barData:h,textData:a[0]})}),(0,r.jsx)(v,{value:p,index:2,children:(0,r.jsx)(M,{barData:h,textData:a[0]})}),(0,r.jsx)(v,{value:p,index:3,children:(0,r.jsx)(_.Z,{...a[4]})}),(0,r.jsx)(v,{value:p,index:4,children:(0,r.jsx)(_.Z,{...a[6]})})]})})]})},A=n(1875),W=n(1947);let B=e=>e?"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)):"";var F=n(98),L=function(){let[e,t]=(0,i.useState)(""),[n,s]=(0,i.useState)(""),{data:o,loading:l,error:c}=(0,F.v)({filename:"random_text_data.json"}),u=(0,a.useRouter)(),d=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{if(d.current=!0,u.isReady&&d.current){let e=u.query.country;e?t(B(e)):s("Country is not defined.")}return()=>{d.current=!1}},[u.isReady,u.query]),(0,r.jsx)(E,{country:e,state:{loading:l,error:c||n},textData:o,donutData:A.Z,barData:{options:W.YM,labels:W.p8,data:W.aT}})}},98:function(e,t,n){"use strict";n.d(t,{v:function(){return a}});var r=n(7294),i=n(741);function a(e){let{filename:t}=e,[n,a]=(0,r.useState)([]),[s,o]=(0,r.useState)(!0),[l,c]=(0,r.useState)("");return(0,r.useEffect)(()=>{let e=async()=>{try{let e=await (0,i.F)({filename:t});o(!1),a(e.data)}catch(n){c(n.message)}};e()},[t]),{data:n,loading:s,error:l}}},741:function(e,t,n){"use strict";n.d(t,{F:function(){return a}});var r=n(594);let i="".concat("/climate-profile-full","/data"),a=async e=>{let{filename:t}=e;return await (0,r.Z)({url:"".concat(i,"/").concat(t),method:"GET",responseType:"json"})}}},function(e){e.O(0,[196,446,442,392,675,664,84,212,313,774,888,179],function(){return e(e.s=3890)}),_N_E=e.O()}]);