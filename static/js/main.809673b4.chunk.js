(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),o=n.n(r),s=(n(13),n(8)),i=n(2),u=n(3),b=n(5),d=n(4),j=(n(14),n(0)),l=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.title,n=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:t}),n]})}}]),n}(a.Component),p=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"buttons",children:this.props.options.map((function(t){return Object(j.jsx)("button",{onClick:function(t){return e.props.onLeaveFeedback(t)},name:t,type:"button",children:t})}))})}}]),n}(a.Component),h=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,a=e.bad;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Statistics:"}),Object(j.jsxs)("p",{children:[["good"],":\u2002",t]}),Object(j.jsxs)("p",{children:[["neutral"],":\u2002",n]}),Object(j.jsxs)("p",{children:[["bad"],":\u2002",a]}),Object(j.jsxs)("p",{children:["Total Feedback:\u2002",this.props.total]}),Object(j.jsxs)("p",{children:["Positive Feedback:\u2002",this.props.total>0?this.props.percent:0,"%"]})]})}}]),n}(a.Component),O=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})},f=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0,total:0},e.handelIncrement=function(t){var n=t.target.name;e.setState(Object(s.a)({},n,e.state[n]+1)),e.setState((function(e){return{total:e.good+e.neutral+e.bad}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=e.total,r=Math.round(t/c*100);return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l,{className:"App-header",title:"Please leave feedback",children:[Object(j.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:this.handelIncrement}),t+n+a===0?Object(j.jsx)(O,{message:"No feedback given"}):Object(j.jsx)(h,{good:t,neutral:n,bad:a,total:c,percent:r})]})})}}]),n}(a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.809673b4.chunk.js.map