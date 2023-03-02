## タイトル

HealthCare-APP

## 説明

開発途中です。
Heder や Footer のリンクをクリックしても遷移しないものがあります。
データは MicroCMS から取得しています。

ログイン処理は NextAuth で実装しており、MailJest から確認メールを配信します。
現場はログイン前後でコンテンツを分けてないため、未ログインでも全て確認できます。

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
