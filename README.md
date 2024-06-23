# Practice Class Diagram

## What is this ?
クラス図を実装に反映させるのが苦手なので、ChatGPTにお願いして練習問題を作ってもらいました。  
その問題文と、解答を載せてあるリポジトリ。  

## 実行環境
以下の環境を想定して問題を作ってもらってある。  

- Node.js
- TypeScript

ただ、肝心なのはクラス図なので、JavaでもPythonでも何でも良いとは思う。

また、クラス図の記述に`plantuml`を使用しているため、VSCodeの場合は対応する拡張機能をいれることを推奨する。

## ディレクトリ構造
以下のようなディレクトリ構造になっている。  
各lesson毎にディレクトリを切り、その中にChatGPTに出力してもらった問題が載っている。出力されたテキストほぼそのまま。  
また、作図については、`plantuml`を使用してクラス図を書いてもらっている。  
実際に問題を解くのは、各`src`ディレクトリの中とする。
```
.
├── README.md
├── main.ts
├── lesson1/
│   ├── lesson1.md
│   └── src/
│       ├── oooo.ts
│       ├── oooo.ts
│       ~
│
├── lesson2/
│   ├── lesson2.md
│   └── src/
│
├── lesson3/
~
└── lessonN/
    ├── lessonN.md
    └── src/
        ├── oooo.ts
        ├── oooo.ts
        ~
```

## 実行

推奨環境で実行する場合は、以下のようになる。
```bash
# トランスパイル
tsc

# 実行
node dist/main.js
```

`tsc`を叩く際にファイル名を指定すると、`tsconfig.json`の設定が無視される([参考](https://qiita.com/RyosukeSomeya/items/3ef53eb42b890f419472#%E7%B5%90%E8%AB%96-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%90%8D%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%82%88%E3%81%84))。
そのため、`main.ts`はリポジトリルートに作成する。

トランスパイルされた資材は、`dist`ディレクトリに配置される。
