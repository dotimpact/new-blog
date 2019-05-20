---
title: SimulatorRemoteNotificationsを使ってみた
date: 2016-01-20
pid: d3e5f80fcd0c742ca4a5269d572543aa
status: p
tags:
   - iosdev
   - blog
---

[acoomans/SimulatorRemoteNotifications - Objective-C][1]

これ使ってみた。iOSシミュレータでプッシュ通知をシミュレートして受信時のテストを行うライブラリ。cocoapodsで導入できる。

`didfinishLaunching`でライブラリを起動しておいて（デバッグターゲットのみで）、

	- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	
		...
	
		if DEBUG
			[application listenForRemoteNotifications];
		endif
	
		return YES;
	}

ターミナルで9930ポートにデータを送ると

	echo -n '{"message":"message"}' | nc -4u -w1 localhost 9930

iOSシミュレータに起動中のアプリの`didReceiveRemoteNotification`が擬似的に呼ばれる仕組み。簡単に確認できてよかった。

[1]:	https://github.com/acoomans/SimulatorRemoteNotifications