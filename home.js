webpackJsonp([2],{148:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(17),r=l(n),o=a(18),c=l(o),u=a(19),f=l(u),i=a(20),d=l(i),s=a(0),_=l(s),p=a(175),m=l(p),h=a(176),v=l(h),y=a(62),E=function(e){function t(){return(0,r.default)(this,t),(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return _.default.createElement("div",{className:"pt-content-card__home-container pt-content-card__home-container--home flex flex-dc"},_.default.createElement(m.default,{profile:y.profile}),_.default.createElement(v.default,{profile:y.profile}))}}]),t}(_.default.PureComponent);t.default=E},153:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(17),r=l(n),o=a(18),c=l(o),u=a(19),f=l(u),i=a(20),d=l(i),s=a(0),_=l(s),p=function(e){function t(){return(0,r.default)(this,t),(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.iconColor?{fill:this.props.iconColor}:null;return _.default.createElement("svg",{style:e,viewBox:"0 0 24 24"},_.default.createElement("use",{xlinkHref:"assets/icons.svg#"+this.props.iconName}))}}]),t}(_.default.PureComponent);t.default=p},175:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(17),r=l(n),o=a(18),c=l(o),u=a(19),f=l(u),i=a(20),d=l(i),s=a(0),_=l(s),p=a(62),m=function(e){function t(){return(0,r.default)(this,t),(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return _.default.createElement("div",{className:"pt-content-card__header flex flex-dc flex-main-center"},_.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",preserveAspectRatio:"none",className:"pt-content-card__header__background"},_.default.createElement("polygon",{points:"0,200 200,0 200,200"})),_.default.createElement("div",{className:"pt-content-card__header__image flex flex-main-center"},_.default.createElement("img",{src:"./assets/"+p.profile.avatarPath,alt:this.props.profile.fullName})),_.default.createElement("h1",{className:"pt-content-card__header__title-name ta-c"},this.props.profile.fullName),_.default.createElement("p",{className:"pt-content-card__header__title-desc ta-c"},this.props.profile.description))}}]),t}(_.default.PureComponent);t.default=m},176:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(17),r=l(n),o=a(18),c=l(o),u=a(19),f=l(u),i=a(20),d=l(i),s=a(0),_=l(s),p=a(27),m=a(177),h=l(m),v=a(153),y=l(v),E=a(61),x=l(E),b=x.default.home,N=function(e){function t(){return(0,r.default)(this,t),(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.profile.social.map(function(e,t){return _.default.createElement("a",{key:t,className:"pt-content-card__body__social-icons__icon",href:e.url,target:"_blank",title:e.text},_.default.createElement(y.default,{iconName:e.iconName,iconColor:e.hoverColor}))});return _.default.createElement("div",{className:"pt-content-card__body flex flex-dc flex-main-center"},_.default.createElement("div",{className:"pt-content-card__body__icons flex flex-cross-center flex-sa"},_.default.createElement(p.Link,{to:"/about",title:b.about},_.default.createElement(h.default,{iconTitle:b.about_alt,iconName:"account"})),_.default.createElement(p.Link,{to:"/work",title:b.work},_.default.createElement(h.default,{iconTitle:b.work_alt,iconName:"folder"})),_.default.createElement(p.Link,{to:"/contact",title:b.contact},_.default.createElement(h.default,{iconTitle:b.contact_alt,iconName:"message"}))),this.props.profile.social.length>0&&_.default.createElement("div",{className:"pt-content-card__body__social-icons flex flex-full-center"},e))}}]),t}(_.default.PureComponent);t.default=N},177:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(17),r=l(n),o=a(18),c=l(o),u=a(19),f=l(u),i=a(20),d=l(i),s=a(0),_=l(s),p=a(153),m=l(p),h=function(e){function t(){return(0,r.default)(this,t),(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return _.default.createElement("div",{className:"pt-content-card__body__icons__icon flex flex-dc flex-cross-center"},_.default.createElement(m.default,{iconName:this.props.iconName}),_.default.createElement("p",null,this.props.iconTitle))}}]),t}(_.default.PureComponent);t.default=h}});