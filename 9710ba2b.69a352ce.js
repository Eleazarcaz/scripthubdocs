(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{184:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"rightToc",(function(){return t})),a.d(n,"default",(function(){return s}));a(51),a(24),a(19),a(20),a(52),a(0);var o=a(221);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var i={id:"js-guia-5",title:"Condicionales",sidebar_label:"Condicionales"},t=[{value:"if/else",id:"ifelse",children:[]},{value:"Operadores l\xf3gicos",id:"operadores-l\xf3gicos",children:[]}],c={rightToc:t},l="wrapper";function s(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(o.b)(l,r({},c,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"condicionales"},"Condicionales"),Object(o.b)("p",null,"En alguna parte de nuestro c\xf3digo necesitaremos comprobar que si x condici\xf3n se cumple, se ejecuta un c\xf3digo o no. Para ello existen las estructuras condicionales."),Object(o.b)("h2",{id:"ifelse"},"if/else"),Object(o.b)("p",null,"Al utilizar ",Object(o.b)("inlineCode",{parentName:"p"},"if")," podemos comprobar que s\xed una condici\xf3n se cumple, se ejecute una parte del c\xf3digo. Usando ",Object(o.b)("inlineCode",{parentName:"p"},"else")," podemos establecer una alternativa, aunque es opcional."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"if (condicion) {\n  //C\xf3digo a ejecutarse si se cumple la condici\xf3n\n} else {\n  //C\xf3digo a ejecutarse si no se cumple la condici\xf3n\n}\n")),Object(o.b)("p",null,"Por ejemplo, comprobaremos si mi edad es mayor a 10."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),'var miEdad = 20;\nif (miEdad > 10) {\n  console.log("Mayor");\n} else {\n  console.log("Menor");\n}\n//Output: Mayor\n')),Object(o.b)("p",null,"Si tenemos m\xe1s de dos condiciones podemos utilizar ",Object(o.b)("inlineCode",{parentName:"p"},"else if"),"."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),'var miEdad = 20;\nif (miEdad === 10) {\n  console.log("Menor, 10 a\xf1os.");\n} else if (miEdad > 19) {\n  console.log("Mayor de 19 a\xf1os.");\n} else {\n  console.log("No es igual 10 a\xf1os, menor de 19 a\xf1os.");\n}\n//Output: Mayor de 19 a\xf1os.\n')),Object(o.b)("h2",{id:"operadores-l\xf3gicos"},"Operadores l\xf3gicos"),Object(o.b)("p",null,"Ten\xedamos pendiente explicar este tipo de operadores que se utilizan para ampliar las posibilidades de establecer condiciones."),Object(o.b)("p",null,"Con el operador ",Object(o.b)("inlineCode",{parentName:"p"},"!")," negaremos una condici\xf3n."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"if (!miEdad) {\n  console.log('La variable \"miEdad\" es nula o indefinida.');\n}\n")),Object(o.b)("p",null,"Con el operador ",Object(o.b)("inlineCode",{parentName:"p"},"||")," ejecutaremos el bloque de c\xf3digo si se cumple alguna de las condiciones dadas. ",Object(o.b)("inlineCode",{parentName:"p"},"||")," puede traducirse al espa\xf1ol como ",Object(o.b)("inlineCode",{parentName:"p"},"o"),"."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),'var miEdad = 20;\nvar miAuto = "rojo";\nif (miEdad == 20 || miAuto === "rojo") {\n  //c\xf3digo a ejecutar si miEdad es igual a 20 y miAuto es id\xe9ntico a rojo, en este caso, este bloque de c\xf3digo ser\xeda ejecutado\n} else {\n  //codigo a ejecutar si no se cumple ninguna condici\xf3n\n}\n')),Object(o.b)("p",null,"Con el operador ",Object(o.b)("inlineCode",{parentName:"p"},"&&")," ejecutaremos el bloque de c\xf3digo si se cumplen las dos condiciones. ",Object(o.b)("inlineCode",{parentName:"p"},"&&")," puede traducirse al espa\xf1ol como ",Object(o.b)("inlineCode",{parentName:"p"},"y"),"."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),'var miEdad = 20;\nvar miAuto = "azul";\nif (miEdad == 20 && miAuto === "rojo") {\n  //c\xf3digo a ejecutar si se cumplen las dos condiciones\n} else {\n  //c\xf3digo a ejecutar si alguna de las condiciones no se cumplen. En este caso miAuto no es rojo, sino azul, as\xed que este bloque de c\xf3digo se ejecutar\xeda\n}\n')))}s.isMDXComponent=!0},221:function(e,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"b",(function(){return u}));var o=a(0),r=a.n(o),i=r.a.createContext({}),t=function(e){var n=r.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):Object.assign({},n,e)),a},c=function(e){var n=t(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(o.forwardRef)((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,n){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===n.indexOf(o)&&(a[o]=e[o]);return a}(e,["components","mdxType","originalType","parentName"]),d=t(a),u=o,p=d[c+"."+u]||d[u]||s[u]||i;return a?r.a.createElement(p,Object.assign({},{ref:n},l,{components:a})):r.a.createElement(p,Object.assign({},{ref:n},l))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,t=new Array(i);t[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[l]="string"==typeof e?e:o,t[1]=c;for(var u=2;u<i;u++)t[u]=a[u];return r.a.createElement.apply(null,t)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);