# jpg、png画像圧縮ツール  
※予め[node.js（推奨版）](https://nodejs.org/ja/)  と [ImageOptim](https://gist.github.com/t32k/6606334)  をインストールし、ImageOptimを開ける状態にしておく。  
（インストール後一度ImageOptimを起動させておく）  
　  
### 1.Github本ページ右上の「clone or download」からファイル一式を取得する。
Source Treeでcloneするか、Download ZIPからファイル一式を取得し任意の作業フォルダに格納する。  
　  

### 2.「min-before-img」に圧縮したい画像を入れる。
　  

### 3.格納したフォルダを右クリックし「フォルダに新規ターミナルタブ」を選択してターミナルを立ち上げる。
右クリックメニューに存在しない場合は、［システム環境設定］→［キーボード］の［ショートカット］タブで［サービス］にある［フォルダに新規ターミナル］にチェックを入れる。  
　  

### 4.ターミナルで以下のコマンドを入力しreturnキーを押して圧縮処理を実行する。
```
./node_modules/.bin/gulp
```
※ コマンドを実行した時に`not found`になる場合は [node.js（推奨版）](https://nodejs.org/ja/)  をインストールし再度コマンドを実行する。    
　  

### 5.「min-after-img」に圧縮された画像が書き出される。
　  
　  
## 圧縮時の画質を変更する方法（gulpfile.js）
初期設定：PNG 70%〜85%、JPG 85%
* PNG：gulpfile.jsの18行目`[.7, .85]`→`[.8, .95]` と変更すると画質が上がる。
* JPG：gulpfile.jsの22行目`85`→`95` と変更すると画質が上がる。

※画質を良くするとその分圧縮率は下がる。
　  
　  

## 参考リンク
* [【ほぼ自動化】幸せな画像圧縮〜ローカルでワンクリック！なのに高画質・高圧縮〜](https://qiita.com/Y_ASAMOTO/items/3e087caf54694507e744)
* [Gulpセットアップの流れと例【超便利・効率化】](https://taroken.org/gulp-setup-flow-and-example/)
* [npm install -D gulp-imageoptim](https://www.npmjs.com/package/gulp-imageoptim)
* [特定のフォルダからターミナルを開きたい](https://book.mynavi.jp/macfan/detail_summary/id=41833)
　  
