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
├── lesson1/
│   ├── lesson1.md
│   └── src/
│       ├── main.ts
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
        ├── main.ts
        ├── oooo.ts
        ~
```

## 実行

推奨環境で実行する場合は、以下のようになる。
```bash
tsc lesson1/main.ts
node lesson1/main.js
```