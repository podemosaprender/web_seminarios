(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4482:function(e,t,n){Promise.resolve().then(n.bind(n,1854)),Promise.resolve().then(n.bind(n,1922))},1854:function(e,t,n){"use strict";let s;n.r(t),n.d(t,{PostsList:function(){return PostsList}});var i=n(7437),a=n(2265),r=n(601);async function getSitePostsData(){if(!s)try{s=(await fetch("/web_seminarios/site-map.txt")).json()}catch(e){console.log(e)}return s||[]}function PostsList(){let[e,t]=(0,a.useState)([]),initSiteData=async e=>{t(await getSitePostsData())};return(0,a.useEffect)(()=>{initSiteData()},[]),(0,i.jsx)("ul",{children:e.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(r.O,{href:"/web_seminarios"+e.id,children:e.blog_title?e.blog_title:e.title})}))})}},1922:function(e,t,n){"use strict";let s;n.r(t),n.d(t,{Search:function(){return Search}});var i=n(7437),a=n(2265),r=n(4867),l=n(601),c=n(504),o=n(2759),u=n(8441),h=n.n(u);async function searchIdx(e){if(""==(e=(e||"").trim()))return[];if(!s){let e="/web_seminarios/search-idx.txt";console.log("SEARCH load",e),s=h().Index.load(await fetch(e).then(e=>e.json()))}return s.search(e)}function Search(){let[e,t]=(0,a.useState)([]);return(0,i.jsxs)("div",{children:[(0,i.jsx)(r.Y,{classNames:{base:"max-w-full sm:max-w-[10rem] h-10",mainWrapper:"h-full",input:"text-small",inputWrapper:"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20"},placeholder:"Type to search...",size:"sm",startContent:(0,i.jsx)(c.G,{icon:o.Y$T}),type:"search",onValueChange:async e=>{let n=await searchIdx(e);console.log("SEARCH onValueChange",e,n),t(n)}}),(0,i.jsx)("div",{children:t.length<1?"no results":(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Results"}),(0,i.jsx)("ul",{children:e.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(l.O,{href:"/web_seminarios"+e.ref,children:e.ref})}))})]})})]})}}},function(e){e.O(0,[676,807,55,971,864,744],function(){return e(e.s=4482)}),_N_E=e.O()}]);