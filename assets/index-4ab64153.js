var x=Object.defineProperty;var v=(r,t,e)=>t in r?x(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>(v(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();class s{constructor(t,e){o(this,"name");o(this,"emoji");this.name=t,this.emoji=e}}const b=`<svg xmlns="http://www.w3.org/2000/svg" id="svg237" width="148.112" height="119.896" version="1.1" viewBox="0 0 39.188 31.723">
    <g id="layer1" style="display:inline" transform="translate(-89.447 -73.915)">
        <ellipse id="path189" cx="109.101" cy="92.595" rx="13.899" ry="12.91" style="display:inline;fill:#333;fill-opacity:1;stroke:#fff;stroke-width:.264583"/>
        <path id="path191" d="m109.01 78.476 15.824 21.35-31.27-.446 15.447-20.904z" style="display:inline;fill:#4d4d4d;stroke:#fff;stroke-width:.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>
        <ellipse id="path177" cx="94.596" cy="98.029" rx="5.017" ry="4.875" style="display:inline;fill:#ccc;fill-opacity:1;stroke:#fff;stroke-width:.264583"/>
        <ellipse id="path181" cx="123.595" cy="98.198" rx="4.908" ry="4.438" style="display:inline;fill:#ccc;fill-opacity:1;stroke:#fff;stroke-width:.264583"/>
        <ellipse id="path183" cx="108.805" cy="78.283" rx="4.652" ry="4.235" style="display:inline;fill:#ccc;fill-opacity:1;stroke:#fff;stroke-width:.264583"/>
        <ellipse id="path137" cx="109.126" cy="91.797" rx="7.992" ry="7.576" style="display:inline;fill:#ccc;fill-opacity:1;stroke:#fff;stroke-width:.264583"/>
    </g>
    <g id="layer2">
        <text xml:space="preserve" id="number-center" x="15.457" y="19.397" style="font-style:normal;font-weight:400;font-size:8.35032px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.208758" transform="scale(.94156 1.06206)"><tspan id="tspan15" x="15.457" y="19.397" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:8.35032px;font-family:sans-serif;-inkscape-font-specification:&quot;sans-serif, Normal&quot;;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:.208758">00</tspan></text>
        <text xml:space="preserve" id="number-left" x="2.59" y="23.492" style="font-style:normal;font-weight:400;font-size:6.11872px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.152968" transform="scale(.88899 1.12487)"><tspan id="tspan15-5" x="2.59" y="23.492" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:6.11872px;font-family:sans-serif;-inkscape-font-specification:&quot;sans-serif, Normal&quot;;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:.152968">0</tspan></text>
        <text xml:space="preserve" id="number-up" x="18.903" y="6.011" style="font-style:normal;font-weight:400;font-size:6.11872px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.152968" transform="scale(.88899 1.12487)"><tspan id="tspan15-5-4" x="18.903" y="6.011" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:6.11872px;font-family:sans-serif;-inkscape-font-specification:&quot;sans-serif, Normal&quot;;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:.152968">0</tspan></text>
        <text xml:space="preserve" id="number-right" x="35.547" y="23.726" style="font-style:normal;font-weight:400;font-size:6.11872px;line-height:1.25;font-family:sans-serif;letter-spacing:0;word-spacing:0;fill:#000;fill-opacity:1;stroke:none;stroke-width:.152968" transform="scale(.88899 1.12487)"><tspan id="tspan15-5-6" x="35.547" y="23.726" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-size:6.11872px;font-family:sans-serif;-inkscape-font-specification:&quot;sans-serif, Normal&quot;;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:.152968">0</tspan></text>
    </g>
</svg>
`;class p{static capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)}static randomNumber(t){return Math.floor(Math.random()*t)}static choose(t){const e=Math.floor(Math.random()*t.length);return t[e]}}class d{constructor(t,e,a,n,i){o(this,"animals");o(this,"number_1");o(this,"number_2");o(this,"missing");o(this,"total");o(this,"solution");this.animals=t,this.number_1=e,this.number_2=a,this.missing=n,this.total=i,this.solution=i-e-a}render(t){t.innerHTML=b;const e=t.querySelector("svg");e.querySelector("#number-left").innerHTML=this.number_or_animal(this.number_1),e.querySelector("#number-up").innerHTML=this.number_or_animal(this.number_2),e.querySelector("#number-center").innerHTML=this.total.toString(),e.querySelector("#number-right").innerHTML=this.missing}number_or_animal(t){return t>=this.animals.length?t.toString():p.choose([t.toString(),this.animals[t].emoji])}}class u{constructor(t){o(this,"animals");o(this,"select");this.animals=t,this.select=document.createElement("select")}createElement(){const t=document.createElement("div");return this.animals.forEach((e,a)=>{const n=document.createElement("option");n.setAttribute("value",a.toString()),n.innerText=p.capitalize(e.name),this.select.appendChild(n)}),t.appendChild(this.select),t}getValue(){return parseInt(this.select.value)}render(t){t.appendChild(this.createElement())}}const l=[new s("bear","&#128059;"),new s("horse","&#128052;"),new s("ant","&#128028;"),new s("dragon","&#128050;"),new s("dolphin","&#128044;"),new s("crab","&#129408;"),new s("lizard","&#129422;"),new s("octopus","&#128025;"),new s("spider","&#128375;"),new s("frog","&#128056;")],k=document.querySelector("#animal-list");l.forEach(r=>{const t=document.createElement("span");t.innerHTML=r.emoji,k.appendChild(t)});const h=new d(l,11,2,"?",21);h.render(document.querySelector("#puzzle-svg-1"));const y=new u(l);y.render(document.querySelector("#choice-1"));const g=new d(l,5,9,"??",17);g.render(document.querySelector("#puzzle-svg-2"));const w=new u(l);w.render(document.querySelector("#choice-2"));const c=document.querySelector("#door-status");c.innerHTML="The door is locked...";const f=document.querySelector("#door-button");f.innerHTML="Try to open it!";f.onclick=()=>{y.getValue()===h.solution&&w.getValue()===g.solution?(c.innerHTML="You did it! The door is now open!",c.setAttribute("class","bold"),f.style.display="none"):(c.innerHTML="Nope, the door is still locked...",f.innerHTML="Try again to open it!")};