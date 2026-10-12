const e=`
asset,
'dimensions': asset -> metadata.dimensions,
'originalFilename': asset -> originalFilename,
'altText': asset -> altText,
'lqip': asset -> metadata.lqip,
'bgColor': asset -> metadata.palette.dominant.background,
alt,
caption`,n=`
image {
   ${e}
}`,x=`
inlineSvg,
"asset": svg.asset,
'dimensions':svg.asset -> metadata.dimensions,
'originalFilename': svg.asset -> originalFilename,
'altText': svg.asset -> altText,
'lqip': svg.asset -> metadata.lqip,
'bgColor': svg.asset -> metadata.palette.dominant.background
`,g=`
'_ref': asset._ref,
'url': asset -> url,
'originalFilename': asset -> originalFilename,
'mimeType': asset -> mimeType,
caption`,u=`
type,
type == 'image' => {
   'data': image { 
      ${e}
   }
},
type == 'imageGallery' => {
   'data': imageGallery[] { 
      ${e}
   }
},
type == 'lottie' => {
   'data': lottie {
      ${g}
   }
},
type == 'video' => {
   'data': video { 
      ${g}
   }
},
type == 'videoEmbed' => {
   'data': {
      'url': videoEmbed.url,
      'caption': videoEmbed.caption
   }
},
type == 'embed' => {
   'data': {
      'url': embed.url,
      'caption': embed.caption
   }
}`,f=`
media {
   ${u}
}`,l=`
type,
url,
page -> {
   title,
   'slug': slug.current,
},
linkPageModule,
linkPageModule == true => {
   pageModule
},
newTab`,b=`
link {
   ${l}
}`,d=`
text,
${b}`,k=`
_type,
htmlCode,
fullWidth,
label
`,r=`
   ...,
   _type == 'link' => {
      ${l}
   },
   _type == 'button' => {
      ${d}
   },
   _type == 'image' => {
      ${e}
   },
   _type == 'media' => {
      ${u}
   },
   _type == 'htmlEmbed' => {
      ${k}
   },
   markDefs[] {
      ...,
      _type == 'link' => {
         ${l}
      },
      _type == 'button' => {
         ${d}
      }
   }
`,s=`
blockText[] {
   ${r}
}`,i=`
seo {
   ...,
   'noindex': noindex == true || ^.gated == true,
   'updatedAt': ^._updatedAt,
   'createdAt': ^._createdAt,
   ${n}
},
'globalSeo': *[_id == 'globalSeo'][0] {
   title,
   description,
   ${n}
}`,o=`
'searchTerms': [title, seo.title] + coalesce(seo.keywords, [])`,h=`
_id,
name,
title,
${s},
links[] {
   _key,
   text,
   url
},
${n},
isAuthor,
"slug": slug.current,
authorBio[] {
   ${r}
}`,v=`'sock': *[_id == 'sock'][0] {
   enabled,
   headline,
   cta{
      ${d}
   }
}`,T=`
_type,
_id,
${s},
stats[] {
   _type,
   _key,
   headline,
   text
},
testimonials[] {
   _type,
   _key,
   quote,
   name,
   title
}`,c=`
_id,
_type,
title,
${s},
portalId,
formId,
region`,t=`
_id,
title,
group,
slug`,I=`
_type,
_id,
title,
'slug': slug.current,
publishedDate,
author -> {
   ${h}
},
categories[] -> {
   ${t}
},
headerImage {
   ${e}
},
formRef -> {
   ${c}
},
${i},
${o}`,E=`
_type,
_id,
title,
'slug': slug.current,
publishedDate,
headerImage {
   ${e}
},
formRef -> {
   ${c}
},
${i},
${o}`,q=`
_type,
_id,
orderRank,
title,
text,
'slug': slug.current,
categories[] -> {
   ${t}
},
formats[] -> {
   ${t}
},
headerImage {
   ${e}
},
thumbnailImage {
   ${e}
},
formRef -> {
   ${c}
},
content[] {
   ${r}
},
${i},
${o}`,F=`
_type,
_id,
title,
'slug': slug.current,
categories[] -> {
   ${t}
},
formats[] -> {
   ${t}
},
'headerImage': coalesce(
   thumbnailImage,
   (pageModules[_type == 'textAndMedia'].sections[defined(media.image)].media.image)[0]
) {
   ${e}
},
${o}`,M=`
_type,
_id,
orderRank,
title,
text,
'slug': slug.current,
headerImage {
   ${e}
},
${s},
aside[] {
   _key,
   _type,
   label,
   _type == 'asideText' => {
      text
   },
   _type == 'asideImage' => {
      ${n}
   },
   _type == 'asideList' => {
      items
   }
},
${i}`,R=`
_type,
_id,
orderRank,
title,
'slug': slug.current,
intro,
${s},
${i}`,A=`
_type,
_id,
title,
'slug': slug.current,
headerImage {
   ${e}
},
eventDate,
startTime,
eventLocation,
eventType,
customLabel,
categories[] -> {
   ${t}
},
${o}`;function S(a,...p){const m=a.length-1;return a.slice(0,m).reduce(($,y,_)=>$+y+p[_],"")+a[m]}const D=1e4;function w(a){return Math.floor(a/D)}export{u as a,s as b,n as c,d,I as e,h as f,c as g,v as h,e as i,E as j,F as k,b as l,f as m,M as n,T as o,r as p,i as q,q as r,x as s,t,R as u,A as v,S as w,w as x,l as y};
