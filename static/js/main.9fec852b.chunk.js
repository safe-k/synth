(this.webpackJsonpsynth=this.webpackJsonpsynth||[]).push([[0],{32:function(e,t,a){e.exports=a(45)},37:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(14),r=a.n(c),o=(a(37),a(7)),l=a(9),s=a(67),u=a(66),m=a(11),d=a.n(m),f=a(65),h=a(70),p=(a(38),a(39),a(40)),v=function(e){var t=p.MidiNumbers.fromNote("c4"),a=p.MidiNumbers.fromNote("f5"),n=p.KeyboardShortcuts.create({firstNote:t,lastNote:a,keyboardConfig:p.KeyboardShortcuts.HOME_ROW});return i.a.createElement(p.Piano,{noteRange:{first:t,last:a},playNote:function(t){e.synth.triggerAttack(t)},stopNote:function(t){e.synth.triggerRelease()},width:700,keyboardShortcuts:n})},E=a(69),b=function(e){var t,a,n,c,r=null!==(t=e.initialValue)&&void 0!==t?t:5;return e.action(r),i.a.createElement("div",null,i.a.createElement(E.a,{defaultValue:r,valueLabelDisplay:"auto",step:null!==(a=e.step)&&void 0!==a?a:1,min:null!==(n=e.min)&&void 0!==n?n:0,max:null!==(c=e.max)&&void 0!==c?c:30,onChange:function(t,a){return e.action(a)}}))},x=a(68),j=a(64),y=function(e){var t=i.a.useState(!1),a=Object(l.a)(t,2),n=a[0],c=a[1];return i.a.createElement(x.a,{size:"small",value:"check",selected:n,onChange:function(){var t=!n;c(t),e.action(t)}},i.a.createElement(j.a,null,e.text))},g=new d.a.PitchShift;g.wet.value=0;var w=new d.a.AutoWah;w.wet.value=0;var N=new d.a.Distortion;N.wet.value=0;var S,O={pitchShift:{name:"Pitch",object:g,adjective:"Mad"},filter:{name:"Filter",object:w,adjective:"Rad"},distortion:{name:"@!%\xa3@",object:N,adjective:"Bad"}},k=a(71),M=function(e){var t=i.a.useState("sawtooth"),a=Object(l.a)(t,2),n=a[0],c=a[1];return i.a.createElement(k.a,{value:n,exclusive:!0,onChange:function(t,a){c(a),e.synth.oscillator.type=a}},i.a.createElement(x.a,{value:"sawtooth"}),i.a.createElement(x.a,{value:"square"}),i.a.createElement(x.a,{value:"sine8"}))},A=Object(f.a)((function(e){return Object(h.a)({root:{display:"flex",maxWidth:700,justifyContent:"center",alignItems:"center"},synth:{"background-color":"indianred","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,"background-color":"bisque"}})})),C=Object.entries(O).map((function(e){var t=Object(l.a)(e,2);t[0];return t[1].object})),R=(S=new d.a.MonoSynth({oscillator:{type:"sawtooth"}})).chain.apply(S,Object(o.a)(C).concat([d.a.Master])),I=function(){var e=i.a.useState(" "),t=Object(l.a)(e,2),a=t[0],n=t[1],c=i.a.useState({}),r=Object(l.a)(c,2),o=r[0],m=r[1],d=A(),f=function(e,t){t?o[e]=e:delete o[e],m(o),n(" "+Object.values(o).join(" ")+" ")};return i.a.createElement("div",{className:d.root},i.a.createElement(u.a,{className:d.synth,container:!0,spacing:2,alignItems:"flex-start",justify:"center"},i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(s.a,{className:d.paper},"My",a||" ","Synth")),i.a.createElement(u.a,{container:!0,item:!0,xs:3,direction:"column"},i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(M,{synth:R}))),i.a.createElement(u.a,{container:!0,item:!0,xs:3,direction:"column"},i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(y,{text:O.pitchShift.name,action:function(e){O.pitchShift.object.wet.value=Number(e),f(O.pitchShift.adjective,e)}})),i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(b,{action:function(e){return O.pitchShift.object.pitch=e}}))),i.a.createElement(u.a,{container:!0,item:!0,xs:3,direction:"column"},i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(y,{text:O.filter.name,action:function(e){O.filter.object.wet.value=Number(e),f(O.filter.adjective,e)}})),i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(b,{min:-40,max:50,action:function(e){return O.filter.object.sensitivity=e}}))),i.a.createElement(u.a,{container:!0,item:!0,xs:3,direction:"column"},i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(y,{text:O.distortion.name,action:function(e){O.distortion.object.wet.value=Number(e),f(O.distortion.adjective,e)}})),i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(b,{initialValue:1,max:10,action:function(e){return O.distortion.object.distortion=e}}))),i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(v,{synth:R}))))};r.a.render(i.a.createElement((function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(I,null)))}),null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9fec852b.chunk.js.map