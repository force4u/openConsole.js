//openConsole.js 20141227 更新20210123版
//http://force4u.cocolog-nifty.com/
/*
Public Domain
href="http://creativecommons.org/publicdomain/zero/1.0/
自由に改変再配布等行ってください。
*/

/*
ヘルプメニュー
拡張メニュー（アドオン）にコンソールを開くコマンドメニューを追加します
更新20210123版
APIヘルプ　ドキュメントクラウド　クリエイティブクラウドのリンクを付けた
*/

/*
Adobe Reader11　Adobe Acrobat 11　用
（下位バージョンでは動作確認していないだけですが）
インストール先は以下
アプリケーションドメイン
/Applications/Adobe Acrobat XI Pro/Adobe Acrobat Pro.app/Contents/Resources/JavaScripts
/Applications/Adobe Reader.app/Contents/Resources/JavaScripts
ローカルドメイン
/Library/Application Support/Adobe/Acrobat/11.0/JavaScripts
ユーザードメイン
/Users/ユーザー名/Library/Application Support/Adobe/Acrobat/11.0/JavaScripts
*/


menuParent = "Help";

app.addSubMenu({
	cName:"DevMenu",
	cUser:"デベロッパー",
	cParent:menuParent, nPos:8
	});

app.addMenuItem({
	cName:"OpenConsole",
	cUser:"デバッガーを開く",
	cParent:"DevMenu",
	cExec:"console.show();",
	nPos:0
	});
	
app.addMenuItem({
	cName:"OpenURL",
	cUser:"Acrobat DC SDK Documentation",
	cParent:"DevMenu",
	cExec:"app.launchURL(\"https://help.adobe.com/en_US/acrobat/acrobat_dc_sdk/2015/HTMLHelp/\", true);",
	nPos:2
	});
	
app.addMenuItem({
	cName:"OpenURL3",
	cUser:"Document Cloud",
	cParent:"DevMenu",
	cExec:"app.launchURL(\"https://documentcloud.adobe.com/\", true);",
	nPos:3
	});
	
app.addMenuItem({
	cName:"OpenURL4",
	cUser:"Creative Cloud Assets",
	cParent:"DevMenu",
	cExec:"app.launchURL(\"https://assets.adobe.com/\", true);",
	nPos:4
	});
	
	
app.addToolButton({
	cName: "Console",
	cParent: "Help",
	cExec: "console.show();",
	cEnable: "event.rc = true",
	cMarked: "event.rc = false",
	cTooltext: "OpenConsole",
	nPos: -1,
	cLabel: "ヘルプメニュー"
	});
	
