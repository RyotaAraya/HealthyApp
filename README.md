## タイトル

HealthCare-APP

## 説明

開発途中です。
Heder や Footer のリンクをクリックしても遷移しないものがあります。
データはモックになります。

### 技術

NextJS、Typescript、SCSS、module CSS、Atomic Design

### 今後実装したいもの

-   ログイン機能
-   API との連携部分
-   Header と Footer の遷移先
-   レスポンシブ対応

## インストールおよび実行方法

### 依存関係のインストール

```
yarn i
```

### 開発モード

-   DB と MailHog 起動
-   MailHog は http://localhost:8025 で確認可能

```
docker-compose up
```

-   メイン http://localhost:3000 で起動

```
yarn dev
```

-   DB http://localhost:5555 で起動
-   DB 情報以外にも Session 情報の確認が可能

```
npx prisma studio
```

-   mailServer http://localhost:8025 で起動

### ビルドモード

```
yarn build
yarn start
```

## その他

残作業などは TODO として記載
