(this.webpackJsonplang_learning=this.webpackJsonplang_learning||[]).push([[4],{69:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){},78:function(e,t,r){"use strict";r.r(t);var n=r(68),c=r(72),i=r(38),a=r(25),s=r(36),j=r(41),d=r(37),l=r(18),b=r(0),h=r.n(b),O=(r(74),r(1)),o=r(2),x=r(3),u=r.n(x),f=r(4),m=r(17),g=r(71),p=r(47),v=["bsPrefix","className","variant","as"],S=h.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.variant,i=e.as,a=void 0===i?"img":i,s=Object(o.a)(e,v),j=Object(f.a)(r,"card-img");return h.a.createElement(a,Object(O.a)({ref:t,className:u()(c?j+"-"+c:j,n)},s))}));S.displayName="CardImg",S.defaultProps={variant:null};var N=S,P=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(g.a)("h5"),w=Object(g.a)("h6"),k=Object(m.a)("card-body"),D=Object(m.a)("card-title",{Component:y}),I=Object(m.a)("card-subtitle",{Component:w}),T=Object(m.a)("card-link",{Component:"a"}),H=Object(m.a)("card-text",{Component:"p"}),C=Object(m.a)("card-header"),E=Object(m.a)("card-footer"),W=Object(m.a)("card-img-overlay"),z=h.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.bg,i=e.text,a=e.border,s=e.body,j=e.children,d=e.as,l=void 0===d?"div":d,x=Object(o.a)(e,P),m=Object(f.a)(r,"card"),g=Object(b.useMemo)((function(){return{cardHeaderBsPrefix:m+"-header"}}),[m]);return h.a.createElement(p.a.Provider,{value:g},h.a.createElement(l,Object(O.a)({ref:t},x,{className:u()(n,m,c&&"bg-"+c,i&&"text-"+i,a&&"border-"+a)}),s?h.a.createElement(k,null,j):j))}));z.displayName="Card",z.defaultProps={body:!1},z.Img=N,z.Title=D,z.Subtitle=I,z.Body=k,z.Link=T,z.Text=H,z.Header=C,z.Footer=E,z.ImgOverlay=W;var F=z,J=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],A=h.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.striped,i=e.bordered,a=e.borderless,s=e.hover,j=e.size,d=e.variant,l=e.responsive,b=Object(o.a)(e,J),x=Object(f.a)(r,"table"),m=u()(n,x,d&&x+"-"+d,j&&x+"-"+j,c&&x+"-striped",i&&x+"-bordered",a&&x+"-borderless",s&&x+"-hover"),g=h.a.createElement("table",Object(O.a)({},b,{className:m,ref:t}));if(l){var p=x+"-responsive";return"string"===typeof l&&(p=p+"-"+l),h.a.createElement("div",{className:p},g)}return g}));function G(e){var t=Object.keys(e).sort(),r=Object.keys({masculineSinIndef:"ikke",masculineSinDef:"ikka",masculinePlIndef:"ikke",masculinePlDef:"ikka",feminineSinIndef:"ikke",feminineSinDef:"ikka",femininePlIndef:"ikke",femininePlDef:"ikka",neuterSinIndef:"eikke",neuterSinDef:"eikka",neuterPlIndef:"ikket",neuterPlDef:"ikkete",comparative:"ikketa",indefSuperlative:"ikketan",defSuperlative:"ikketane",_id:"420"}).sort();return JSON.stringify(t)===JSON.stringify(r)}function L(e){var t=Object.keys(e).sort(),r=Object.keys({countable:"true",gender:"masculine",singularIndefinite:"en hund",singularDefinite:"hunden",pluralIndefinite:"hunder",pluralDefinite:"hundene",_id:"420"}).sort();return JSON.stringify(t)===JSON.stringify(r)}function R(e){var t=Object.keys(e).sort(),r=Object.keys({infinitive:"faef",present:"aefaf",past:"efffe",future:"eea",conditional:"fafa",imperative:"fafaef",presentPerfect:"va faaan",pastPerfect:"fafeee",futurePerfect:"fafaa",conditionalPerfect:"fff",_id:"420"}).sort();return JSON.stringify(t)===JSON.stringify(r)}r(69);var V=r(5);var _=function(e){var t=e.grammarObj;if(!G(t))throw new TypeError("Wrong grammar obj structure in AdjGrammarNorwegian");return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(A,{bordered:!0,hover:!0,size:"sm",children:[Object(V.jsxs)("thead",{children:[Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{}),Object(V.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Singular"}),Object(V.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Plural"})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Indefinite"}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Definite"}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Indefinite"}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Definite"})]})]}),Object(V.jsxs)("tbody",{children:[Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{children:Object(V.jsx)("strong",{children:"masc."})}),Object(V.jsx)("td",{children:t.masculineSinIndef}),Object(V.jsx)("td",{children:t.masculineSinDef}),Object(V.jsx)("td",{children:t.masculinePlIndef}),Object(V.jsx)("td",{children:t.masculinePlDef})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{children:Object(V.jsx)("strong",{children:"fem."})}),Object(V.jsx)("td",{children:t.feminineSinIndef}),Object(V.jsx)("td",{children:t.feminineSinDef}),Object(V.jsx)("td",{children:t.femininePlIndef}),Object(V.jsx)("td",{children:t.femininePlDef})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{children:Object(V.jsx)("strong",{children:"neut."})}),Object(V.jsx)("td",{children:t.neuterSinIndef}),Object(V.jsx)("td",{children:t.neuterSinDef}),Object(V.jsx)("td",{children:t.neuterPlIndef}),Object(V.jsx)("td",{children:t.neuterPlDef})]})]})]}),Object(V.jsx)(A,{bordered:!0,hover:!0,size:"sm",children:Object(V.jsxs)("thead",{children:[Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{className:"cardTableHeader",children:"Comparative"}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Indefinite superlative"}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Definite superlative"})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{children:t.comparative}),Object(V.jsx)("td",{children:t.indefSuperlative}),Object(V.jsx)("td",{children:t.defSuperlative})]})]})})]})};var B=function(e){var t=e.grammarObj;if(!L(t))throw new TypeError("Wrong grammar obj structure in NounGrammarNorwegian");return Object(V.jsxs)(A,{bordered:!0,hover:!0,size:"sm",children:[Object(V.jsx)("thead",{children:Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Singular"}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Plural"})]})}),Object(V.jsxs)("tbody",{children:[Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{children:Object(V.jsx)("strong",{children:"Indefinite"})}),Object(V.jsx)("td",{children:t.singularIndefinite}),Object(V.jsx)("td",{children:t.singularDefinite})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{children:Object(V.jsx)("strong",{children:"Definite"})}),Object(V.jsx)("td",{children:t.pluralIndefinite}),Object(V.jsx)("td",{children:t.pluralDefinite})]})]})]})};var M=function(e){var t=e.grammarObj;if(!R(t))throw new TypeError("Wrong grammar obj structure in VerbGrammarNorwegian");return Object(V.jsxs)(A,{bordered:!0,hover:!0,size:"sm",children:[Object(V.jsx)("thead",{children:Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Present"}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Past"}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Future"}),Object(V.jsx)("th",{className:"cardTableHeader",children:"Conditional"})]})}),Object(V.jsxs)("tbody",{children:[Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Simple"}),Object(V.jsx)("td",{children:t.present}),Object(V.jsx)("td",{children:t.past}),Object(V.jsx)("td",{children:t.future}),Object(V.jsx)("td",{children:t.conditional})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{children:Object(V.jsx)("strong",{children:"Perfect"})}),Object(V.jsx)("td",{children:t.presentPerfect}),Object(V.jsx)("td",{children:t.pastPerfect}),Object(V.jsx)("td",{children:t.futurePerfect}),Object(V.jsx)("td",{children:t.conditionalPerfect})]})]})]})};var q=function(e){var t=e.grammarObj;if(!G(t))throw new TypeError("Wrong grammar obj structure in SmAdjGrammarNorwegian");return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(A,{bordered:!0,hover:!0,size:"sm",children:Object(V.jsxs)("tbody",{"data-testid":"testCard",children:[Object(V.jsx)("tr",{children:Object(V.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Masculine"})}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Singular Indefinite"}),Object(V.jsx)("td",{children:t.masculineSinIndef})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Singular Definite"}),Object(V.jsx)("td",{children:t.masculineSinDef})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Plural Indefinite"}),Object(V.jsx)("td",{children:t.masculinePlIndef})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Plural Definite"}),Object(V.jsx)("td",{children:t.masculinePlDef})]}),Object(V.jsx)("tr",{children:Object(V.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Feminine"})}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Singular Indefinite"}),Object(V.jsx)("td",{children:t.feminineSinIndef})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Singular Definite"}),Object(V.jsx)("td",{children:t.feminineSinDef})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Plural Indefinite"}),Object(V.jsx)("td",{children:t.femininePlIndef})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Plural Definite"}),Object(V.jsx)("td",{children:t.femininePlDef})]}),Object(V.jsx)("tr",{children:Object(V.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Neuter"})}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Singular Indefinite"}),Object(V.jsx)("td",{children:t.neuterSinIndef})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Singular Definite"}),Object(V.jsx)("td",{children:t.neuterSinDef})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Plural Indefinite"}),Object(V.jsx)("td",{children:t.neuterPlIndef})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Plural Definite"}),Object(V.jsx)("td",{children:t.neuterPlDef})]})]})}),Object(V.jsx)(A,{bordered:!0,hover:!0,size:"sm",children:Object(V.jsxs)("tbody",{children:[Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Comparative"}),Object(V.jsx)("td",{children:t.comparative})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Indefinite superlative"}),Object(V.jsx)("td",{children:t.indefSuperlative})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Definite superlative"}),Object(V.jsx)("td",{children:t.defSuperlative})]})]})})]})};var K=function(e){var t=e.grammarObj;if(!L(t))throw new TypeError("Wrong grammar obj structure in SmNounGrammarNorwegian");return Object(V.jsx)(A,{bordered:!0,hover:!0,size:"sm",children:Object(V.jsxs)("tbody",{"data-testid":"testCard",children:[Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Singular Indefinite"}),Object(V.jsx)("td",{children:t.singularIndefinite})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Singular Definite"}),Object(V.jsx)("td",{children:t.singularDefinite})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Plural Indefinite"}),Object(V.jsx)("td",{children:t.pluralIndefinite})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Plural Definite"}),Object(V.jsx)("td",{children:t.pluralDefinite})]})]})})};var Q=function(e){var t=e.grammarObj;if(!R(t))throw new TypeError("Wrong grammar obj structure in SmVerbGrammarNorwegian");return Object(V.jsx)(A,{bordered:!0,hover:!0,size:"sm",children:Object(V.jsxs)("tbody",{"data-testid":"testCard",children:[Object(V.jsx)("tr",{children:Object(V.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Simple"})}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Present"}),Object(V.jsx)("td",{children:t.present})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Past"}),Object(V.jsx)("td",{children:t.past})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Future"}),Object(V.jsx)("td",{children:t.future})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Conditional"}),Object(V.jsx)("td",{children:t.conditional})]}),Object(V.jsx)("tr",{children:Object(V.jsx)("th",{className:"cardTableHeader",colSpan:"2",children:"Perfect"})}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Present"}),Object(V.jsx)("td",{children:t.presentPerfect})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Past"}),Object(V.jsx)("td",{children:t.pastPerfect})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Future"}),Object(V.jsx)("td",{children:t.futurePerfect})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"Conditional"}),Object(V.jsx)("td",{children:t.conditionalPerfect})]})]})})};r(75);var U=function(e){var t=e.cardObj,r=e.numOfTranslation,c=t.translation[r];if(!function(e,t){var r=!1;if("word"in e&&"translation"in e){var n=e.translation[t];("grammarAdj"in n||"grammarNoun"in n||"grammarVerb"in n)&&"pronounciation"in n&&(r=!0)}return r}(t,r))throw new TypeError("Wrong card obj structure in NorwegianCard");var i=Object(b.useState)(window.innerWidth),a=Object(n.a)(i,2),s=a[0],j=a[1];Object(b.useEffect)((function(){window.addEventListener("resize",(function(){j(window.innerWidth)}))}));var d=null;d=s>=576?"grammarAdj"in c?Object(V.jsx)(_,{grammarObj:c.grammarAdj}):"grammarNoun"in c?Object(V.jsx)(B,{grammarObj:c.grammarNoun}):Object(V.jsx)(M,{grammarObj:c.grammarVerb}):"grammarAdj"in c?Object(V.jsx)(q,{grammarObj:c.grammarAdj}):"grammarNoun"in c?Object(V.jsx)(K,{grammarObj:c.grammarNoun}):Object(V.jsx)(Q,{grammarObj:c.grammarVerb});var l="grammarNoun"in c?c.grammarNoun.gender:null;return Object(V.jsx)(F,{children:Object(V.jsxs)(F.Body,{children:[Object(V.jsx)(F.Title,{children:t.word}),Object(V.jsx)(F.Subtitle,{className:"mb-2",children:c.pronounciation}),Object(V.jsxs)(F.Subtitle,{className:"mb-2 text-muted",children:[c.type," ",l]}),Object(V.jsx)(F.Text,{children:c.meaning}),d]})})};var X=function(e){return e.cardObj,e.numOfTranslation,Object(V.jsx)("div",{})};var Y=function(e){var t=e.cardLang,r=e.cardObj,n=e.numOfTranslation,c=null;switch(t){case"Dutch":c=Object(V.jsx)(X,{cardObj:r});break;case"Norwegian":c=Object(V.jsx)(U,{cardObj:r,numOfTranslation:n});break;default:c=null}return c};var Z=function(e){var t=e.cardLang,r=e.cardObj,n=r.translation.length;return Object(V.jsx)("div",{children:Array(n).fill().map((function(e,n){return Object(V.jsx)(Y,{cardLang:t,cardObj:r,numOfTranslation:n},n)}))})},$=r(73);var ee=function(e){var t=e.show,r=e.noWord,n=e.handleClose;return Object(V.jsxs)($.a,{show:t,onHide:n,children:[Object(V.jsx)($.a.Header,{closeButton:!0,children:Object(V.jsx)($.a.Title,{children:"Not in dictionary"})}),Object(V.jsxs)($.a.Body,{children:["We couldn't find the word ",r," in the dictionary"]}),Object(V.jsx)($.a.Footer,{children:Object(V.jsx)(s.a,{variant:"primary",onClick:n,"data-testid":"testCloseModal",children:"Close"})})]})};t.default=function(){var e=Object(b.useState)(!1),t=Object(n.a)(e,2),r=t[0],h=t[1],O=Object(b.useState)(!1),o=Object(n.a)(O,2),x=o[0],u=o[1],f=Object(b.useRef)(null),m=Object(b.useRef)(null),g=Object(b.useState)(null),p=Object(n.a)(g,2),v=p[0],S=p[1],N=Object(b.useState)(null),P=Object(n.a)(N,2),y=P[0],w=P[1],k=Object(b.useState)(null),D=Object(n.a)(k,2),I=D[0],T=D[1],H=Object(b.useState)(!1),C=Object(n.a)(H,2),E=C[0],W=C[1];return Object(V.jsxs)(j.a,{fluid:!0,children:[Object(V.jsxs)(d.a,{children:[Object(V.jsx)(l.a,{}),Object(V.jsx)(l.a,{xs:10,children:Object(V.jsxs)(i.a,{className:"mt-2",noValidate:!0,validated:r,onSubmit:function(e){var t,r;e.preventDefault(),e.stopPropagation(),!0===e.currentTarget.checkValidity()?(h(!1),(t=m.current.value,r=f.current.value,fetch("/getCard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang:t,word:r})}).then((function(e){return e.text()}))).then((function(e){var t;"DB_ERR"===e?console.log("Oops, something went wrong!"):"MISSING_WORD_PASSED"===e?console.log("Somehow your word wasn't passed to the backend"):""===e?(t=f.current.value,T(t),W(!0)):(S(JSON.parse(e)),w(m.current.value),u(!0))})).catch((function(e){console.error("Error:",e)}))):h(!0)},children:[Object(V.jsx)(i.a.Label,{htmlFor:"inlineFormInputGroup",srOnly:!0,children:"Word"}),Object(V.jsxs)(c.a,{children:[Object(V.jsx)(c.a.Prepend,{children:Object(V.jsx)(c.a.Text,{children:"Language:"})}),Object(V.jsxs)(i.a.Control,{className:"langDropdown",ref:m,as:"select",defaultValue:"Norwegian",children:[Object(V.jsx)("option",{children:"Dutch"}),Object(V.jsx)("option",{children:"Norwegian"})]}),Object(V.jsx)(c.a.Prepend,{children:Object(V.jsx)(c.a.Text,{children:"Search:"})}),Object(V.jsx)(a.a,{required:!0,ref:f,placeholder:"Word","data-testid":"testWordInput"}),Object(V.jsx)(a.a.Feedback,{style:{order:4},type:"invalid",children:"Empty box!"}),Object(V.jsx)(s.a,{"data-testid":"testButtonSearch",type:"submit",variant:"success",children:"Submit"})]})]})}),Object(V.jsx)(l.a,{})]}),Object(V.jsxs)(d.a,{children:[Object(V.jsx)(l.a,{}),Object(V.jsx)(l.a,{xs:10,className:"mt-2",children:x?Object(V.jsx)(Z,{cardLang:y,cardObj:v}):null}),Object(V.jsx)(l.a,{})]}),Object(V.jsx)(ee,{show:E,noWord:I,handleClose:function(){return W(!1)}})]})}}}]);
//# sourceMappingURL=4.2c1c297d.chunk.js.map