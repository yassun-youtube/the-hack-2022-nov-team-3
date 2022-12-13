# Next.js with TypeScript example

## How to use

```sh

## インストール
yarn install

## ローカル開発
yarn dev

## storybookを開く
yarn storybook
```

## 構成

### サロンメンバーのプロフィールサイト

https://www.figma.com/file/ILUrRsGuz5uDnbsnKaOPVH/profile_blog

## コンポーネントの作り方

デザインが無いので、MUI で必要なパーツを見つけるか、自作してください。デザインは各自調整してください。　　
コンポーネントは storybook で管理しようと思います。

https://storybook.js.org/

## git 運用

### github-flow

https://atmarkit.itmedia.co.jp/ait/articles/1708/01/news015.html

## Node.js version

.node-version で管理（各自バージョン管理ツールを使用してください）

## UI ライブラリ

### Material UI

https://mui.com/material-ui/getting-started/overview/

## CSS in JS

### emotion

https://emotion.sh/docs/introduction

## ESLint + Prettier

build 時に lint が、commit 時に、prettier が走ります。  
エディタに上記のプラグインを入れると便利です。

## ディレクトリ

```sh

■ src/components

コンポーネントを格納

■ src/constant

定数を格納

■ src/hooks

カスタムhookを格納

■ src/pages/api

APIを使用する場合、格納

■ src/types

型定義ファイルを格納

■ src/utils

ユーティリティー関数を格納

■ src/libs

ライブラリなどの処理を格納

■ app/

ページのファイルはこちらに格納

```

## 使用する headlessCMS

### Newt

https://www.newt.so/

## .env.local

ローカルに「.env.local」ファイルを作成して,以下を記入してください。　　
key は別ファイルで管理しています。

```
NEXT_PUBLIC_NEWT_SERVICE_DOMAIN=XXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_NEWT_CDN_API_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_NEWT_API_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXX

```
