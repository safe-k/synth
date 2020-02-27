(this.webpackJsonpsynth=this.webpackJsonpsynth||[]).push([[0],{38:function(e,t,a){e.exports=a(52)},43:function(e,t,a){},45:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),o=(a(43),a(7)),l=a(9),s=a(75),m=a(74),u=a(12),f=a.n(u),d=a(72),b=a(78),h=(a(44),a(45),a(46)),p=function(e){var t=h.MidiNumbers.fromNote("c2"),a=h.MidiNumbers.fromNote("f3"),n=h.KeyboardShortcuts.create({firstNote:t,lastNote:a,keyboardConfig:h.KeyboardShortcuts.HOME_ROW});return r.a.createElement(h.Piano,{noteRange:{first:t,last:a},playNote:function(t){return e.synth.triggerAttack(function(e){return 440*Math.pow(2,(e-69)/12)}(t))},stopNote:function(t){return e.synth.triggerRelease()},width:700,keyboardShortcuts:n})},E=a(77),v=function(e){var t,a,n,c,i=null!==(t=e.initialValue)&&void 0!==t?t:5;return e.action(i),r.a.createElement("div",null,r.a.createElement(E.a,{defaultValue:i,valueLabelDisplay:"auto",step:null!==(a=e.step)&&void 0!==a?a:1,min:null!==(n=e.min)&&void 0!==n?n:0,max:null!==(c=e.max)&&void 0!==c?c:30,onChange:function(t,a){return e.action(a)}}))},j=a(76),x=a(73),g=a(31),y=Object(d.a)((function(e){return Object(b.a)({toggle:{backgroundColor:"rgb(255, 255, 255)","&:hover":{backgroundColor:Object(g.emphasize)("rgb(255, 255, 255)",.08)},width:"60px"},label:{fontFamily:"IBM Plex Mono, monospace"}})})),w=function(e){var t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],c=a[1],i=y();return r.a.createElement(j.a,{className:i.toggle,size:"small",value:"check",selected:n,onChange:function(){var t=!n;c(t),e.action(t)}},r.a.createElement(x.a,{className:i.label},e.text))},S=new f.a.PitchShift;S.wet.value=0;var N=new f.a.AutoWah;N.wet.value=0;var O=new f.a.Distortion;O.wet.value=0;var k,M={pitchShift:{name:"Sass",object:S,adjective:"Bad"},filter:{name:"Wob",object:N,adjective:"Rad"},distortion:{name:"$*\xa1%",object:O,adjective:"Mad"}},I=a(79),C=a(32),z=a.n(C),A=a(33),R=a.n(A),W=a(34),B=a.n(W),P=function(e){var t=r.a.useState("sawtooth"),a=Object(l.a)(t,2),n=a[0],c=a[1];return r.a.createElement(I.a,{value:n,exclusive:!0,onChange:function(t,a){c(a),e.synth.oscillator.type=a}},r.a.createElement(j.a,{value:"sawtooth"},r.a.createElement(z.a,{fontSize:"small"})),r.a.createElement(j.a,{value:"square"},r.a.createElement(R.a,{fontSize:"small"})),r.a.createElement(j.a,{value:"sine8"},r.a.createElement(B.a,{fontSize:"small"})))},V=Object(d.a)((function(e){return Object(b.a)({root:{display:"flex",maxWidth:700,justifyContent:"center",alignItems:"center"},synth:{"background-color":"indianred","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,"background-color":"bisque"}})})),q=Object.entries(M).map((function(e){var t=Object(l.a)(e,2);t[0];return t[1].object})),D=(k=new f.a.MonoSynth({oscillator:{type:"sawtooth"}})).chain.apply(k,Object(o.a)(q).concat([f.a.Master])),J=function(){var e=r.a.useState(" "),t=Object(l.a)(e,2),a=t[0],n=t[1],c=r.a.useState({}),i=Object(l.a)(c,1)[0],o=V(),u=function(e,t){i[e]=t?e:"",n(" "+Object.values(i).join(" ")+" ")};return r.a.createElement("div",{className:o.root},r.a.createElement(m.a,{className:o.synth,container:!0,spacing:2,alignItems:"center",justify:"center"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(s.a,{className:o.paper},"My",a||" ","Synth")),r.a.createElement(m.a,{container:!0,item:!0,xs:3,alignItems:"center",justify:"center"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(P,{synth:D}))),r.a.createElement(m.a,{container:!0,item:!0,xs:3,alignItems:"center",justify:"center"},r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(w,{text:M.pitchShift.name,action:function(e){M.pitchShift.object.wet.value=Number(e),u(M.pitchShift.adjective,e)}})),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(v,{action:function(e){return M.pitchShift.object.pitch=e}}))),r.a.createElement(m.a,{container:!0,item:!0,xs:3,alignItems:"center",justify:"center"},r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(w,{text:M.filter.name,action:function(e){M.filter.object.wet.value=Number(e),u(M.filter.adjective,e)}})),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(v,{max:50,action:function(e){return M.filter.object.sensitivity=e}}))),r.a.createElement(m.a,{container:!0,item:!0,xs:3,alignItems:"center",justify:"center"},r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(w,{text:M.distortion.name,action:function(e){M.distortion.object.wet.value=Number(e),u(M.distortion.adjective,e)}})),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(v,{initialValue:1,max:10,action:function(e){return M.distortion.object.distortion=e}}))),r.a.createElement(m.a,{item:!0,xs:12,alignItems:"center",justify:"center"},r.a.createElement(p,{synth:D}))))};i.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(J,null)))}),null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2306d5fe.chunk.js.map