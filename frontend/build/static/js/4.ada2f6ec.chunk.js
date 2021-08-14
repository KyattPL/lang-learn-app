(this.webpackJsonplang_learning=this.webpackJsonplang_learning||[]).push([[4],{67:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){},78:function(e,t,r){"use strict";r.r(t);var n=r(65),c=r(73),a=r(66),i=r(72),s=r(64),d=r(33),j=r(30),l=r(20),b=r(0),o=r.n(b),h=(r(74),r(1)),O=r(2),u=r(4),x=r.n(u),f=r(5),m=r(19),g=r(71),p=r(39),v=["bsPrefix","className","variant","as"],S=o.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.variant,a=e.as,i=void 0===a?"img":a,s=Object(O.a)(e,v),d=Object(f.a)(r,"card-img");return o.a.createElement(i,Object(h.a)({ref:t,className:x()(c?d+"-"+c:d,n)},s))}));S.displayName="CardImg",S.defaultProps={variant:null};var N=S,P=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(g.a)("h5"),w=Object(g.a)("h6"),I=Object(m.a)("card-body"),k=Object(m.a)("card-title",{Component:y}),D=Object(m.a)("card-subtitle",{Component:w}),T=Object(m.a)("card-link",{Component:"a"}),C=Object(m.a)("card-text",{Component:"p"}),H=Object(m.a)("card-header"),E=Object(m.a)("card-footer"),W=Object(m.a)("card-img-overlay"),F=o.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.bg,a=e.text,i=e.border,s=e.body,d=e.children,j=e.as,l=void 0===j?"div":j,u=Object(O.a)(e,P),m=Object(f.a)(r,"card"),g=Object(b.useMemo)((function(){return{cardHeaderBsPrefix:m+"-header"}}),[m]);return o.a.createElement(p.a.Provider,{value:g},o.a.createElement(l,Object(h.a)({ref:t},u,{className:x()(n,m,c&&"bg-"+c,a&&"text-"+a,i&&"border-"+i)}),s?o.a.createElement(I,null,d):d))}));F.displayName="Card",F.defaultProps={body:!1},F.Img=N,F.Title=k,F.Subtitle=D,F.Body=I,F.Link=T,F.Text=C,F.Header=H,F.Footer=E,F.ImgOverlay=W;var A=F,_=r(70),G=r(3);var L=function(e){var t=e.cardLang,r=e.cardId,c=e.translationId,i=Object(b.useState)(!1),d=Object(n.a)(i,2),j=d[0],l=d[1],o=Object(b.useState)(!1),h=Object(n.a)(o,2),O=h[0],u=h[1],x=Object(b.useRef)(null),f=function(){l(!1)},m=function(){var e,n=x.current.value,a=document.getElementById("passInput");u(!1),(e=n,fetch("/checkDeletePassword",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e})}).then((function(e){return e.text()}))).then((function(e){"Forbidden"===e?a.setCustomValidity("Wrong password"):(a.setCustomValidity(""),function(e,t,r,n){return fetch("/deleteCard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,lang:t,id:r,translationId:n})}).then((function(e){return e.text()}))}(n,t,r,c).then((function(e){"MISSING_LANG_PASSED"===e||"Forbidden"===e?console.error(e):window.location.reload()})).catch((function(e){console.error("Error: ",e)})))})).then((function(){u(!0)})).catch((function(e){console.error("Error: ",e)}))};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(s.a,{variant:"danger",onClick:function(){l(!0)},children:"Delete"}),Object(G.jsxs)(_.a,{show:j,onHide:f,children:[Object(G.jsx)(_.a.Header,{closeButton:!0,children:Object(G.jsx)(_.a.Title,{children:"Authorization required"})}),Object(G.jsx)(_.a.Body,{children:Object(G.jsx)(a.a,{noValidate:!0,validated:O,id:"passwordForm",onSubmit:function(e){e.preventDefault(),e.stopPropagation(),m()},children:Object(G.jsxs)(a.a.Group,{children:[Object(G.jsx)(a.a.Label,{children:"Please type in a password:"}),Object(G.jsx)(a.a.Control,{type:"password",placeholder:"Password",ref:x,id:"passInput"}),Object(G.jsx)(a.a.Control.Feedback,{type:"invalid",children:"Wrong password"})]})})}),Object(G.jsxs)(_.a.Footer,{children:[Object(G.jsx)(s.a,{variant:"danger",onClick:m,children:"Delete"}),Object(G.jsx)(s.a,{variant:"secondary",onClick:f,children:"Close"})]})]})]})},z=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],J=o.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.striped,a=e.bordered,i=e.borderless,s=e.hover,d=e.size,j=e.variant,l=e.responsive,b=Object(O.a)(e,z),u=Object(f.a)(r,"table"),m=x()(n,u,j&&u+"-"+j,d&&u+"-"+d,c&&u+"-striped",a&&u+"-bordered",i&&u+"-borderless",s&&u+"-hover"),g=o.a.createElement("table",Object(h.a)({},b,{className:m,ref:t}));if(l){var p=u+"-responsive";return"string"===typeof l&&(p=p+"-"+l),o.a.createElement("div",{className:p},g)}return g}));function V(e){var t=Object.keys(e).sort(),r=Object.keys({masculineSinIndef:"ikke",masculineSinDef:"ikka",masculinePlIndef:"ikke",masculinePlDef:"ikka",feminineSinIndef:"ikke",feminineSinDef:"ikka",femininePlIndef:"ikke",femininePlDef:"ikka",neuterSinIndef:"eikke",neuterSinDef:"eikka",neuterPlIndef:"ikket",neuterPlDef:"ikkete",comparative:"ikketa",indefSuperlative:"ikketan",defSuperlative:"ikketane",_id:"420"}).sort();return JSON.stringify(t)===JSON.stringify(r)}function B(e){var t=Object.keys(e).sort(),r=Object.keys({countable:"true",gender:"masculine",singularIndefinite:"en hund",singularDefinite:"hunden",pluralIndefinite:"hunder",pluralDefinite:"hundene",_id:"420"}).sort();return JSON.stringify(t)===JSON.stringify(r)}function R(e){var t=Object.keys(e).sort(),r=Object.keys({infinitive:"faef",present:"aefaf",past:"efffe",future:"eea",conditional:"fafa",imperative:"fafaef",presentPerfect:"va faaan",pastPerfect:"fafeee",futurePerfect:"fafaa",conditionalPerfect:"fff",_id:"420"}).sort();return JSON.stringify(t)===JSON.stringify(r)}r(67);var M=function(e){var t=e.grammarObj;if(!V(t))throw new TypeError("Wrong grammar obj structure in AdjGrammarNorwegian");return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(J,{bordered:!0,hover:!0,size:"sm",children:[Object(G.jsxs)("thead",{children:[Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{}),Object(G.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Singular"}),Object(G.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Plural"})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Indefinite"}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Definite"}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Indefinite"}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Definite"})]})]}),Object(G.jsxs)("tbody",{children:[Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{children:Object(G.jsx)("strong",{children:"masc."})}),Object(G.jsx)("td",{children:t.masculineSinIndef}),Object(G.jsx)("td",{children:t.masculineSinDef}),Object(G.jsx)("td",{children:t.masculinePlIndef}),Object(G.jsx)("td",{children:t.masculinePlDef})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{children:Object(G.jsx)("strong",{children:"fem."})}),Object(G.jsx)("td",{children:t.feminineSinIndef}),Object(G.jsx)("td",{children:t.feminineSinDef}),Object(G.jsx)("td",{children:t.femininePlIndef}),Object(G.jsx)("td",{children:t.femininePlDef})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{children:Object(G.jsx)("strong",{children:"neut."})}),Object(G.jsx)("td",{children:t.neuterSinIndef}),Object(G.jsx)("td",{children:t.neuterSinDef}),Object(G.jsx)("td",{children:t.neuterPlIndef}),Object(G.jsx)("td",{children:t.neuterPlDef})]})]})]}),Object(G.jsx)(J,{bordered:!0,hover:!0,size:"sm",children:Object(G.jsxs)("thead",{children:[Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{className:"cardTableHeader",children:"Comparative"}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Indefinite superlative"}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Definite superlative"})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{children:t.comparative}),Object(G.jsx)("td",{children:t.indefSuperlative}),Object(G.jsx)("td",{children:t.defSuperlative})]})]})})]})};var q=function(e){var t=e.grammarObj;if(!B(t))throw new TypeError("Wrong grammar obj structure in NounGrammarNorwegian");return Object(G.jsxs)(J,{bordered:!0,hover:!0,size:"sm",children:[Object(G.jsx)("thead",{children:Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Singular"}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Plural"})]})}),Object(G.jsxs)("tbody",{children:[Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{children:Object(G.jsx)("strong",{children:"Indefinite"})}),Object(G.jsx)("td",{children:t.singularIndefinite}),Object(G.jsx)("td",{children:t.singularDefinite})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{children:Object(G.jsx)("strong",{children:"Definite"})}),Object(G.jsx)("td",{children:t.pluralIndefinite}),Object(G.jsx)("td",{children:t.pluralDefinite})]})]})]})};var K=function(e){var t=e.grammarObj;if(!R(t))throw new TypeError("Wrong grammar obj structure in VerbGrammarNorwegian");return Object(G.jsxs)(J,{bordered:!0,hover:!0,size:"sm",children:[Object(G.jsx)("thead",{children:Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Present"}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Past"}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Future"}),Object(G.jsx)("th",{className:"cardTableHeader",children:"Conditional"})]})}),Object(G.jsxs)("tbody",{children:[Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Simple"}),Object(G.jsx)("td",{children:t.present}),Object(G.jsx)("td",{children:t.past}),Object(G.jsx)("td",{children:t.future}),Object(G.jsx)("td",{children:t.conditional})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{children:Object(G.jsx)("strong",{children:"Perfect"})}),Object(G.jsx)("td",{children:t.presentPerfect}),Object(G.jsx)("td",{children:t.pastPerfect}),Object(G.jsx)("td",{children:t.futurePerfect}),Object(G.jsx)("td",{children:t.conditionalPerfect})]})]})]})};var Q=function(e){var t=e.grammarObj;if(!V(t))throw new TypeError("Wrong grammar obj structure in SmAdjGrammarNorwegian");return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(J,{bordered:!0,hover:!0,size:"sm",children:Object(G.jsxs)("tbody",{"data-testid":"testCard",children:[Object(G.jsx)("tr",{children:Object(G.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Masculine"})}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Singular Indefinite"}),Object(G.jsx)("td",{children:t.masculineSinIndef})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Singular Definite"}),Object(G.jsx)("td",{children:t.masculineSinDef})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Plural Indefinite"}),Object(G.jsx)("td",{children:t.masculinePlIndef})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Plural Definite"}),Object(G.jsx)("td",{children:t.masculinePlDef})]}),Object(G.jsx)("tr",{children:Object(G.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Feminine"})}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Singular Indefinite"}),Object(G.jsx)("td",{children:t.feminineSinIndef})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Singular Definite"}),Object(G.jsx)("td",{children:t.feminineSinDef})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Plural Indefinite"}),Object(G.jsx)("td",{children:t.femininePlIndef})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Plural Definite"}),Object(G.jsx)("td",{children:t.femininePlDef})]}),Object(G.jsx)("tr",{children:Object(G.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Neuter"})}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Singular Indefinite"}),Object(G.jsx)("td",{children:t.neuterSinIndef})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Singular Definite"}),Object(G.jsx)("td",{children:t.neuterSinDef})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Plural Indefinite"}),Object(G.jsx)("td",{children:t.neuterPlIndef})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Plural Definite"}),Object(G.jsx)("td",{children:t.neuterPlDef})]})]})}),Object(G.jsx)(J,{bordered:!0,hover:!0,size:"sm",children:Object(G.jsxs)("tbody",{children:[Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Comparative"}),Object(G.jsx)("td",{children:t.comparative})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Indefinite superlative"}),Object(G.jsx)("td",{children:t.indefSuperlative})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Definite superlative"}),Object(G.jsx)("td",{children:t.defSuperlative})]})]})})]})};var U=function(e){var t=e.grammarObj;if(!B(t))throw new TypeError("Wrong grammar obj structure in SmNounGrammarNorwegian");return Object(G.jsx)(J,{bordered:!0,hover:!0,size:"sm",children:Object(G.jsxs)("tbody",{"data-testid":"testCard",children:[Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Singular Indefinite"}),Object(G.jsx)("td",{children:t.singularIndefinite})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Singular Definite"}),Object(G.jsx)("td",{children:t.singularDefinite})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Plural Indefinite"}),Object(G.jsx)("td",{children:t.pluralIndefinite})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Plural Definite"}),Object(G.jsx)("td",{children:t.pluralDefinite})]})]})})};var X=function(e){var t=e.grammarObj;if(!R(t))throw new TypeError("Wrong grammar obj structure in SmVerbGrammarNorwegian");return Object(G.jsx)(J,{bordered:!0,hover:!0,size:"sm",children:Object(G.jsxs)("tbody",{"data-testid":"testCard",children:[Object(G.jsx)("tr",{children:Object(G.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Simple"})}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Present"}),Object(G.jsx)("td",{children:t.present})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Past"}),Object(G.jsx)("td",{children:t.past})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Future"}),Object(G.jsx)("td",{children:t.future})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Conditional"}),Object(G.jsx)("td",{children:t.conditional})]}),Object(G.jsx)("tr",{children:Object(G.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Perfect"})}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Present"}),Object(G.jsx)("td",{children:t.presentPerfect})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Past"}),Object(G.jsx)("td",{children:t.pastPerfect})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Future"}),Object(G.jsx)("td",{children:t.futurePerfect})]}),Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{children:"Conditional"}),Object(G.jsx)("td",{children:t.conditionalPerfect})]})]})})};r(75);var Y=function(e){var t=e.cardObj,r=e.numOfTranslation,c=t.translation[r];if(!function(e,t){var r=!1;if("word"in e&&"translation"in e){var n=e.translation[t];("grammarAdj"in n||"grammarNoun"in n||"grammarVerb"in n)&&"pronounciation"in n&&(r=!0)}return r}(t,r))throw new TypeError("Wrong card obj structure in NorwegianCard");var a=Object(b.useState)(window.innerWidth),i=Object(n.a)(a,2),s=i[0],d=i[1];Object(b.useEffect)((function(){window.addEventListener("resize",(function(){d(window.innerWidth)}))}));var j=null;j=s>=576?"grammarAdj"in c?Object(G.jsx)(M,{grammarObj:c.grammarAdj}):"grammarNoun"in c?Object(G.jsx)(q,{grammarObj:c.grammarNoun}):Object(G.jsx)(K,{grammarObj:c.grammarVerb}):"grammarAdj"in c?Object(G.jsx)(Q,{grammarObj:c.grammarAdj}):"grammarNoun"in c?Object(G.jsx)(U,{grammarObj:c.grammarNoun}):Object(G.jsx)(X,{grammarObj:c.grammarVerb});var l="grammarNoun"in c?c.grammarNoun.gender:null;return Object(G.jsxs)(A,{children:[Object(G.jsx)(A.Header,{children:Object(G.jsx)(L,{cardLang:"Norwegian",cardId:t._id,translationId:c._id})}),Object(G.jsxs)(A.Body,{children:[Object(G.jsx)(A.Title,{children:t.word}),Object(G.jsx)(A.Subtitle,{className:"mb-2",children:c.pronounciation}),Object(G.jsxs)(A.Subtitle,{className:"mb-2 text-muted",children:[c.type," ",l]}),Object(G.jsx)(A.Text,{children:c.meaning}),j]})]})};var Z=function(e){return e.cardObj,e.numOfTranslation,Object(G.jsx)("div",{})};var $=function(e){var t=e.cardLang,r=e.cardObj,n=e.numOfTranslation,c=null;switch(t){case"Dutch":c=Object(G.jsx)(Z,{cardObj:r,numOfTranslation:n});break;case"Norwegian":c=Object(G.jsx)(Y,{cardObj:r,numOfTranslation:n});break;default:c=null}return c};var ee=function(e){var t=e.cardLang,r=e.cardObj,n=r.translation.length;return Object(G.jsx)("div",{children:Array(n).fill().map((function(e,n){return Object(G.jsx)($,{cardLang:t,cardObj:r,numOfTranslation:n},n)}))})};var te=function(e){var t=e.show,r=e.noWord,n=e.handleClose;return Object(G.jsxs)(_.a,{show:t,onHide:n,children:[Object(G.jsx)(_.a.Header,{closeButton:!0,children:Object(G.jsx)(_.a.Title,{children:"Not in dictionary"})}),Object(G.jsxs)(_.a.Body,{children:["We couldn't find the word ",r," in the dictionary"]}),Object(G.jsx)(_.a.Footer,{children:Object(G.jsx)(s.a,{variant:"primary",onClick:n,"data-testid":"testCloseModal",children:"Close"})})]})};t.default=function(){var e=Object(b.useState)(!1),t=Object(n.a)(e,2),r=t[0],o=t[1],h=Object(b.useState)(!1),O=Object(n.a)(h,2),u=O[0],x=O[1],f=Object(b.useRef)(null),m=Object(b.useRef)(null),g=Object(b.useState)(null),p=Object(n.a)(g,2),v=p[0],S=p[1],N=Object(b.useState)(null),P=Object(n.a)(N,2),y=P[0],w=P[1],I=Object(b.useState)(null),k=Object(n.a)(I,2),D=k[0],T=k[1],C=Object(b.useState)(!1),H=Object(n.a)(C,2),E=H[0],W=H[1];return Object(G.jsxs)(d.a,{fluid:!0,children:[Object(G.jsxs)(j.a,{children:[Object(G.jsx)(l.a,{}),Object(G.jsx)(l.a,{xs:10,children:Object(G.jsxs)(a.a,{className:"mt-2",noValidate:!0,validated:r,onSubmit:function(e){var t,r;e.preventDefault(),e.stopPropagation(),!0===e.currentTarget.checkValidity()?(o(!1),(t=m.current.value,r=f.current.value,fetch("/getCard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang:t,word:r})}).then((function(e){return e.text()}))).then((function(e){var t;"DB_ERR"===e||"MISSING_WORD_PASSED"===e||"MISSING_LANG_PASSED"===e?console.error(e):""===e?(t=f.current.value,T(t),W(!0)):(S(JSON.parse(e)),w(m.current.value),x(!0))})).catch((function(e){console.error("Error:",e)}))):o(!0)},children:[Object(G.jsx)(a.a.Label,{htmlFor:"inlineFormInputGroup",srOnly:!0,children:"Word"}),Object(G.jsxs)(c.a,{children:[Object(G.jsx)(c.a.Prepend,{children:Object(G.jsx)(c.a.Text,{children:"Language:"})}),Object(G.jsxs)(a.a.Control,{className:"langDropdown",ref:m,as:"select",defaultValue:"Norwegian",children:[Object(G.jsx)("option",{children:"Dutch"}),Object(G.jsx)("option",{children:"Norwegian"})]}),Object(G.jsx)(c.a.Prepend,{children:Object(G.jsx)(c.a.Text,{children:"Search:"})}),Object(G.jsx)(i.a,{required:!0,ref:f,placeholder:"Word","data-testid":"testWordInput"}),Object(G.jsx)(i.a.Feedback,{style:{order:4},type:"invalid",children:"Empty box!"}),Object(G.jsx)(s.a,{"data-testid":"testButtonSearch",type:"submit",variant:"success",children:"Submit"})]})]})}),Object(G.jsx)(l.a,{})]}),Object(G.jsxs)(j.a,{children:[Object(G.jsx)(l.a,{}),Object(G.jsx)(l.a,{xs:10,className:"mt-2",children:u?Object(G.jsx)(ee,{cardLang:y,cardObj:v}):null}),Object(G.jsx)(l.a,{})]}),Object(G.jsx)(te,{show:E,noWord:D,handleClose:function(){return W(!1)}})]})}}}]);
//# sourceMappingURL=4.ada2f6ec.chunk.js.map