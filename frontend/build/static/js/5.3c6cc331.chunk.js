(this.webpackJsonplang_learning=this.webpackJsonplang_learning||[]).push([[5],{70:function(e,a,t){},76:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var c=t(68),l=t(41),r=t(37),n=t(18),s=t(38),j=t(72),o=t(0),i=t(36),u=(t(70),function(e,a){return fetch("/addCard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang:e,cardObj:a})}).then((function(e){return e.text()}))}),d=function(e){return""===e.current.value?"-":e.current.value},b=t(5);var h=function(e){var a=e.wordSetter,t=e.showModal,l=Object(o.useState)(!1),j=Object(c.a)(l,2),h=j[0],m=j[1],O=Object(o.useRef)(null),x=Object(o.useRef)(null),p=Object(o.useRef)(null),f=Object(o.useRef)(null),v=Object(o.useRef)(null),y=Object(o.useRef)(null),N=Object(o.useRef)(null),g=Object(o.useRef)(null),C=Object(o.useRef)(null),S=Object(o.useRef)(null),R=Object(o.useRef)(null),T=Object(o.useRef)(null),L=Object(o.useRef)(null),G=Object(o.useRef)(null),w=Object(o.useRef)(null),V=Object(o.useRef)(null),P=Object(o.useRef)(null),D=Object(o.useRef)(null),I=function(){O.current.value="",x.current.value="",p.current.value="",v.current.value="",f.current.value="",N.current.value="",y.current.value="",C.current.value="",g.current.value="",R.current.value="",S.current.value="",L.current.value="",T.current.value="",w.current.value="",G.current.value="",V.current.value="",P.current.value="",D.current.value=""};return Object(b.jsxs)(s.a,{onSubmit:function(e){if(e.preventDefault(),e.stopPropagation(),!0===e.currentTarget.checkValidity()){m(!1),a(O.current.value);var c={word:O.current.value,translation:[{type:"adjective",pronounciation:x.current.value,meaning:p.current.value,grammarAdj:{masculineSinIndef:d(f),masculineSinDef:d(v),masculinePlIndef:d(y),masculinePlDef:d(N),feminineSinIndef:d(g),feminineSinDef:d(C),femininePlIndef:d(S),femininePlDef:d(R),neuterSinIndef:d(T),neuterSinDef:d(L),neuterPlIndef:d(G),neuterPlDef:d(w),comparative:d(V),indefSuperlative:d(P),defSuperlative:d(D)}}]};u("Norwegian",c).then((function(e){"DB_ERR"===e?console.log("db err"):"MISSING_WORD_PASSED"===e?console.log("missing word"):(I(),t(),console.log("OK!"))})).catch((function(e){console.error("Error: ",e)}))}else m(!0)},noValidate:!0,validated:h,children:[Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Word"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:O,required:!0,type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Pronounciation"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:x,required:!0,type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Meaning"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:p,required:!0,type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Masculine Singular Indefinite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:f,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Masculine Singular Definite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:v,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Masculine Plural Indefinite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:y,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Masculine Plural Definite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:N,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Feminine Singular Indefinite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:g,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Feminine Singular Definite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:C,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Feminine Plural Indefinite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:S,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Feminine Plural Definite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:R,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Neuter Singular Indefinite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:T,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Neuter Singular Definite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:L,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Neuter Plural Indefinite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:G,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Neuter Plural Definite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:w,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Comparative"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:V,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Indefinite Superlative"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:P,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Definite Superlative"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:D,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsx)(i.a,{variant:"success",type:"submit",children:"Add Card"})]})};var m=function(e){var a=e.wordSetter,t=e.showModal,l=Object(o.useState)(!1),j=Object(c.a)(l,2),h=j[0],m=j[1],O=Object(o.useState)(!1),x=Object(c.a)(O,2),p=x[0],f=x[1],v=Object(o.useRef)(null),y=Object(o.useRef)(null),N=Object(o.useRef)(null),g=Object(o.useRef)(null),C=Object(o.useRef)(null),S=Object(o.useRef)(null),R=Object(o.useRef)(null),T=Object(o.useRef)(null),L=function(){v.current.value="",y.current.value="",g.current.value="",C.current.value="",S.current.value="",R.current.value="",T.current.value=""};return Object(b.jsxs)(s.a,{onSubmit:function(e){if(e.preventDefault(),e.stopPropagation(),!0===e.currentTarget.checkValidity()){m(!1),a(v.current.value);var c={word:v.current.value,translation:[{type:"noun",pronounciation:y.current.value,meaning:g.current.value,grammarNoun:{countable:p,gender:N.current.value,singularIndefinite:d(S),singularDefinite:d(C),pluralIndefinite:d(T),pluralDefinite:d(R)}}]};u("Norwegian",c).then((function(e){"DB_ERR"===e?console.log("db err"):"MISSING_WORD_PASSED"===e?console.log("missing word"):(L(),t(),console.log("OK!"))})).catch((function(e){console.error("Error: ",e)}))}else m(!0)},noValidate:!0,validated:h,children:[Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Word"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:v,required:!0,type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Pronounciation"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:y,required:!0,type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Countable"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{onClick:function(){return f(!p)},style:{width:"auto"},type:"checkbox"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Gender"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsxs)(s.a.Control,{ref:N,required:!0,as:"select",children:[Object(b.jsx)("option",{value:"masculine",children:"Masculine"}),Object(b.jsx)("option",{value:"feminine",children:"Feminine"}),Object(b.jsx)("option",{value:"neuter",children:"Neuter"})]})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Meaning"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:g,required:!0,type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Singular Definite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:C,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Singular Indefinite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:S,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Plural Definite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:R,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Plural Indefinite"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:T,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsx)(i.a,{variant:"success",type:"submit",children:"Add Card"})]})};var O=function(e){var a=e.wordSetter,t=e.showModal,l=Object(o.useState)(!1),j=Object(c.a)(l,2),h=j[0],m=j[1],O=Object(o.useRef)(null),x=Object(o.useRef)(null),p=Object(o.useRef)(null),f=Object(o.useRef)(null),v=Object(o.useRef)(null),y=Object(o.useRef)(null),N=Object(o.useRef)(null),g=Object(o.useRef)(null),C=Object(o.useRef)(null),S=Object(o.useRef)(null),R=Object(o.useRef)(null),T=Object(o.useRef)(null),L=Object(o.useRef)(null),G=function(){O.current.value="",x.current.value="",p.current.value="",f.current.value="",v.current.value="",y.current.value="",N.current.value="",g.current.value="",C.current.value="",S.current.value="",R.current.value="",T.current.value="",R.current.value=""};return Object(b.jsxs)(s.a,{onSubmit:function(e){if(e.preventDefault(),e.stopPropagation(),!0===e.currentTarget.checkValidity()){m(!1),a(O.current.value);var c={word:O.current.value,translation:[{type:"verb",pronounciation:x.current.value,meaning:p.current.value,grammarVerb:{infinitive:d(f),present:d(v),past:d(y),future:d(N),conditional:d(g),imperative:d(C),presentPerfect:d(S),pastPerfect:d(R),futurePerfect:d(T),conditionalPerfect:d(L)}}]};u("Norwegian",c).then((function(e){"DB_ERR"===e?console.log("db err"):"MISSING_WORD_PASSED"===e?console.log("missing word"):(G(),t(),console.log("OK!"))})).catch((function(e){console.error("Error: ",e)}))}else m(!0)},noValidate:!0,validated:h,children:[Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Word"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:O,required:!0,type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Pronounciation"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:x,required:!0,type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Meaning"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:p,required:!0,type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Infinitive"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:f,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Present"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:v,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Past"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:y,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Future"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:N,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Conditional"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:g,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Imperative"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:C,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Present Perfect"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:S,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Past Perfect"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:R,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Future Perfect"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:T,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsxs)(s.a.Group,{as:r.a,className:"mb-2",children:[Object(b.jsx)(s.a.Label,{column:!0,sm:"2",children:"Conditional Perfect"}),Object(b.jsx)(n.a,{sm:10,children:Object(b.jsx)(s.a.Control,{ref:L,className:"dontValidate",type:"text",placeholder:"Type here"})})]}),Object(b.jsx)(i.a,{variant:"success",type:"submit",children:"Add Card"})]})};var x=function(e){var a,t=e.speech,c=e.wordSetter,l=e.showModal;switch(t){case"Adjective":a=Object(b.jsx)(h,{showModal:l,wordSetter:c});break;case"Noun":a=Object(b.jsx)(m,{showModal:l,wordSetter:c});break;case"Verb":a=Object(b.jsx)(O,{showModal:l,wordSetter:c});break;default:a=Object(b.jsx)("div",{children:"NULL"})}return Object(b.jsx)(b.Fragment,{children:a})};var p=function(e){var a,t=e.langSelected,c=e.grammarSelected,l=e.wordSetter,r=e.showModal;switch(t){case"Dutch":a=Object(b.jsx)("div",{children:"Dutch here"});break;case"Norwegian":a=Object(b.jsx)(x,{showModal:r,wordSetter:l,speech:c});break;default:a=Object(b.jsx)("div",{children:"NULL"})}return Object(b.jsx)(b.Fragment,{children:a})},f=t(73);var v=function(e){var a=e.show,t=e.addedWord,c=e.handleClose;return Object(b.jsxs)(f.a,{show:a,onHide:c,children:[Object(b.jsx)(f.a.Header,{closeButton:!0,children:Object(b.jsx)(f.a.Title,{children:"Added to the dictionary"})}),Object(b.jsxs)(f.a.Body,{children:['The word "',t,'" has been added to the dictionary']}),Object(b.jsx)(f.a.Footer,{children:Object(b.jsx)(i.a,{variant:"success",onClick:c,"data-testid":"testCloseAddModal",children:"Close"})})]})};t(76);a.default=function(){var e=Object(o.useRef)(null),a=Object(o.useRef)(null),t=Object(o.useState)("Dutch"),i=Object(c.a)(t,2),u=i[0],d=i[1],h=Object(o.useState)("Adjective"),m=Object(c.a)(h,2),O=m[0],x=m[1],f=Object(o.useState)(null),y=Object(c.a)(f,2),N=y[0],g=y[1],C=Object(o.useState)(!1),S=Object(c.a)(C,2),R=S[0],T=S[1];return Object(b.jsxs)(l.a,{fluid:!0,children:[Object(b.jsxs)(r.a,{children:[Object(b.jsx)(n.a,{}),Object(b.jsx)(n.a,{xs:10,children:Object(b.jsxs)(j.a,{className:"mt-2",children:[Object(b.jsx)(j.a.Prepend,{children:Object(b.jsx)(j.a.Text,{children:"Language:"})}),Object(b.jsx)(s.a.Control,{className:"langDropdown",onChange:function(){d(e.current.value)},ref:e,as:"select",defaultValue:"Dutch",children:[{lang:"Dutch",index:1},{lang:"Norwegian",index:2}].map((function(e){return Object(b.jsx)("option",{children:e.lang},e.index)}))}),Object(b.jsx)(j.a.Prepend,{children:Object(b.jsx)(j.a.Text,{children:"Part of speech:"})}),Object(b.jsxs)(s.a.Control,{className:"langDropdown",onChange:function(){x(a.current.value)},ref:a,as:"select",defaultValue:"Adjective",children:[Object(b.jsx)("option",{children:"Adjective"}),Object(b.jsx)("option",{children:"Noun"}),Object(b.jsx)("option",{children:"Verb"})]})]})}),Object(b.jsx)(n.a,{})]}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(n.a,{}),Object(b.jsx)(n.a,{xs:10,className:"mt-2",children:Object(b.jsx)(p,{showModal:function(){T(!0)},wordSetter:g,langSelected:u,grammarSelected:O})}),Object(b.jsx)(n.a,{})]}),Object(b.jsx)(v,{show:R,addedWord:N,handleClose:function(){return T(!1)}})]})}}}]);
//# sourceMappingURL=5.3c6cc331.chunk.js.map