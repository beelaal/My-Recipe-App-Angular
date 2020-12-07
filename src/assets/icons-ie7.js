/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'MT\'">' + entity + '</span>' + html;
	}
	var icons = {
		'MT-yawn': '&#xe901;',
		'MT-wink': '&#xe902;',
		'MT-smile-face': '&#xe903;',
		'MT-smile': '&#xe904;',
		'MT-surprise': '&#xe905;',
		'MT-shocked': '&#xe906;',
		'MT-sceptic': '&#xe907;',
		'MT-sad': '&#xe908;',
		'MT-happy': '&#xe90a;',
		'MT-pain': '&#xe90b;',
		'MT-muted': '&#xe90c;',
		'MT-meh': '&#xe90d;',
		'MT-laugh': '&#xe90e;',
		'MT-ill': '&#xe90f;',
		'MT-happy-smile': '&#xe910;',
		'MT-happy-closed-eye': '&#xe911;',
		'MT-cute': '&#xe912;',
		'MT-crying': '&#xe913;',
		'MT-crazy': '&#xe914;',
		'MT-cool': '&#xe915;',
		'MT-bored': '&#xe916;',
		'MT-blush': '&#xe917;',
		'MT-angry': '&#xe918;',
		'MT-happy-extream': '&#xe919;',
		'MT-hours': '&#xe91a;',
		'MT-bars': '&#xe91b;',
		'MT-chat': '&#xe91c;',
		'MT-checked': '&#xe91d;',
		'MT-cloud-computing': '&#xe91e;',
		'MT-cloud-computing-light': '&#xe91f;',
		'MT-coins': '&#xe920;',
		'MT-coins-user': '&#xe921;',
		'MT-credit-card': '&#xe922;',
		'MT-customer-service': '&#xe923;',
		'MT-euro': '&#xe924;',
		'MT-headphones': '&#xe925;',
		'MT-logout': '&#xe926;',
		'MT-login': '&#xe927;',
		'MT-money-bag': '&#xe928;',
		'MT-settings-circle': '&#xe929;',
		'MT-settings': '&#xe92a;',
		'MT-chat-bubble': '&#xe92b;',
		'MT-wallet': '&#xe92c;',
		'MT-ad': '&#xe92d;',
		'MT-users-group': '&#xe92e;',
		'MT-ad-idea': '&#xe92f;',
		'MT-user-search': '&#xe930;',
		'MT-ad-notifi': '&#xe931;',
		'MT-user-shield': '&#xe932;',
		'MT-ad-location': '&#xe933;',
		'MT-user-settings': '&#xe934;',
		'MT-ad-spread-out': '&#xe935;',
		'MT-user-cricle': '&#xe936;',
		'MT-group-video-chat': '&#xe937;',
		'MT-user-password': '&#xe938;',
		'MT-ad-create': '&#xe939;',
		'MT-ban-user': '&#xe93a;',
		'MT-ads-phone': '&#xe93b;',
		'MT-password-lock': '&#xe93c;',
		'MT-ads-signboard': '&#xe93d;',
		'MT-password-correct': '&#xe93e;',
		'MT-ads-filter': '&#xe93f;',
		'MT-password-wrong': '&#xe940;',
		'MT-ads-3': '&#xe941;',
		'MT-padlock': '&#xe942;',
		'MT-ads-settings-success': '&#xe943;',
		'MT-group-circle': '&#xe944;',
		'MT-ads-5': '&#xe945;',
		'MT-networking': '&#xe946;',
		'MT-ads-settings': '&#xe947;',
		'MT-users-search': '&#xe948;',
		'MT-delivery': '&#xe949;',
		'MT-user-chart': '&#xe94a;',
		'MT-ads-convert': '&#xe94b;',
		'MT-profile-page': '&#xe94c;',
		'MT-ad-announce': '&#xe94d;',
		'MT-user-lock': '&#xe94e;',
		'MT-ad-sign': '&#xe94f;',
		'MT-affiliate': '&#xe951;',
		'MT-customer-support': '&#xe952;',
		'MT-ads-social': '&#xe953;',
		'MT-profile-success': '&#xe954;',
		'MT-ads-questions': '&#xe955;',
		'MT-profile-wrong': '&#xe956;',
		'MT-ads-success': '&#xe957;',
		'MT-profile-questions': '&#xe958;',
		'MT-people': '&#xe959;',
		'MT-ad-signboard': '&#xe95b;',
		'MT-profile-girl': '&#xe95c;',
		'MT-24-hours': '&#xe95d;',
		'MT-ads-ban': '&#xe95e;',
		'MT-profile-man': '&#xe95f;',
		'MT-ad-block': '&#xe960;',
		'MT-profile': '&#xe961;',
		'MT-light-bulb': '&#xe962;',
		'MT-user-location-girl': '&#xe963;',
		'MT-email': '&#xe964;',
		'MT-user-notifi': '&#xe965;',
		'MT-campaign': '&#xe966;',
		'MT-user-location': '&#xe967;',
		'MT-cancel-ad': '&#xe968;',
		'MT-user-sheild-girl': '&#xe969;',
		'MT-chat-add': '&#xe96a;',
		'MT-user-sheild': '&#xe96b;',
		'MT-choose': '&#xe96c;',
		'MT-user-star-1': '&#xe96d;',
		'MT-click-per-pay': '&#xe96e;',
		'MT-user-star-2': '&#xe96f;',
		'MT-computer': '&#xe970;',
		'MT-user-star-3': '&#xe971;',
		'MT-customer': '&#xe972;',
		'MT-user-upload': '&#xe973;',
		'MT-delete-ad': '&#xe974;',
		'MT-user-upload-girl': '&#xe975;',
		'MT-dollar': '&#xe976;',
		'MT-users-replace-girl': '&#xe977;',
		'MT-email-share': '&#xe978;',
		'MT-users-gender': '&#xe979;',
		'MT-email-success': '&#xe97a;',
		'MT-remove-user': '&#xe97b;',
		'MT-ads-filteration': '&#xe97c;',
		'MT-users-replace': '&#xe97d;',
		'MT-focus': '&#xe97e;',
		'MT-users-group-girls': '&#xe97f;',
		'MT-gift': '&#xe980;',
		'MT-user-password-girl': '&#xe981;',
		'MT-global-ad': '&#xe982;',
		'MT-user-lock-girl': '&#xe983;',
		'MT-global-phone': '&#xe984;',
		'MT-remove-user-girl': '&#xe985;',
		'MT-add-user-girl': '&#xe986;',
		'MT-global': '&#xe987;',
		'MT-user-shield-girl': '&#xe989;',
		'MT-user-settings-girl': '&#xe98b;',
		'MT-idea': '&#xe98c;',
		'MT-user-search-girl': '&#xe98d;',
		'MT-idea-add': '&#xe98e;',
		'MT-users': '&#xe98f;',
		'MT-add-user': '&#xe990;',
		'MT-idea-2': '&#xe991;',
		'MT-king': '&#xe992;',
		'MT-like-message': '&#xe993;',
		'MT-like': '&#xe994;',
		'MT-react-love': '&#xe995;',
		'MT-mail-box': '&#xe996;',
		'MT-message': '&#xe997;',
		'MT-message-tv': '&#xe998;',
		'MT-message-mobile': '&#xe999;',
		'MT-mobile-ads': '&#xe99a;',
		'MT-mobile-videos': '&#xe99b;',
		'MT-money': '&#xe99c;',
		'MT-network': '&#xe99d;',
		'MT-newspaper': '&#xe99e;',
		'MT-newspaper-phone': '&#xe99f;',
		'MT-online-shop': '&#xe9a0;',
		'MT-pamphlet': '&#xe9a1;',
		'MT-pay-per-click': '&#xe9a2;',
		'MT-phone-ad': '&#xe9a3;',
		'MT-premium': '&#xe9a4;',
		'MT-promote': '&#xe9a5;',
		'MT-promotion': '&#xe9a6;',
		'MT-public-relation': '&#xe9a7;',
		'MT-public-relation-2': '&#xe9a9;',
		'MT-radio': '&#xe9aa;',
		'MT-receive': '&#xe9ab;',
		'MT-remove-ad': '&#xe9ac;',
		'MT-shopping-bag': '&#xe9ad;',
		'MT-sale-ad': '&#xe9ae;',
		'MT-search-ad': '&#xe9af;',
		'MT-search-1': '&#xe9b0;',
		'MT-share': '&#xe9b1;',
		'MT-sale-ad-mail': '&#xe9b2;',
		'MT-strategy': '&#xe9b3;',
		'MT-stream': '&#xe9b4;',
		'MT-target': '&#xe9b5;',
		'MT-text': '&#xe9b7;',
		'MT-ad-text': '&#xe9b8;',
		'MT-tv-ad': '&#xe9b9;',
		'MT-tv': '&#xe9ba;',
		'MT-users-conversation': '&#xe9bb;',
		'MT-value': '&#xe9bc;',
		'MT-video': '&#xe9bd;',
		'MT-ad-video': '&#xe9be;',
		'MT-view': '&#xe9bf;',
		'MT-amazon': '&#xe9c0;',
		'MT-android': '&#xe9c1;',
		'MT-apple': '&#xe9c2;',
		'MT-behance': '&#xe9c4;',
		'MT-blackberry': '&#xe9c5;',
		'MT-blogger': '&#xe9c6;',
		'MT-chat-messages': '&#xe9c7;',
		'MT-check': '&#xe9c8;',
		'MT-credit-card1': '&#xe9cd;',
		'MT-deviantart': '&#xe9cf;',
		'MT-dribbble': '&#xe9d0;',
		'MT-dropbox': '&#xe9d1;',
		'MT-facebook': '&#xe9d4;',
		'MT-flickr': '&#xe9d5;',
		'MT-google-chrome': '&#xe9d6;',
		'MT-google-drive': '&#xe9d7;',
		'MT-google-play': '&#xe9d8;',
		'MT-google-plus': '&#xe9d9;',
		'MT-headphones1': '&#xe9da;',
		'MT-home': '&#xe9db;',
		'MT-instagram': '&#xe9dc;',
		'MT-internet-explorer': '&#xe9dd;',
		'MT-kickstarter': '&#xe9de;',
		'MT-linkedin': '&#xe9df;',
		'MT-opera': '&#xe9e3;',
		'MT-paypal': '&#xe9e4;',
		'MT-picasa': '&#xe9e5;',
		'MT-pinterest': '&#xe9e6;',
		'MT-reddit': '&#xe9e7;',
		'MT-cogs': '&#xe9e8;',
		'MT-cog': '&#xe9e9;',
		'MT-skype': '&#xe9ea;',
		'MT-snapchat': '&#xe9eb;',
		'MT-soundcloud': '&#xe9ec;',
		'MT-steam': '&#xe9ee;',
		'MT-stumbleupon': '&#xe9ef;',
		'MT-tumblr': '&#xe9f0;',
		'MT-twitter': '&#xe9f1;',
		'MT-viber': '&#xe9f2;',
		'MT-vimeo': '&#xe9f3;',
		'MT-vine': '&#xe9f4;',
		'MT-whatsapp': '&#xe9f6;',
		'MT-windows': '&#xe9f7;',
		'MT-wordpress': '&#xe9f8;',
		'MT-yahoo': '&#xe9f9;',
		'MT-yelp': '&#xe9fa;',
		'MT-youtube': '&#xe9fb;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/MT-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());