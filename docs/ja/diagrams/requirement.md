# 要求図

要求図は、システム要件を視覚化し、要件間の関係と依存関係を示すために使用されます。これにより、チームはプロジェクトの要件をより良く理解し、管理することができます。

## 構文

### 基本要素
- 要件: `requirement [名前] {[ID]}`
- 要素: `element [名前]`
- 関係: 矢印を使用して要件と要素を接続
- リスクレベル: `risk [level]`
- 検証方法: `verifyMethod [method]`

## 基本例

```mermaid
requirementDiagram
    requirement ユーザー認証 {
        id: REQ-001
        text: システムはユーザー認証機能を実装する必要がある
        risk: high
        verifyMethod: test
    }

    element ログインシステム {
        type: system
    }

    ユーザー認証 - ログインシステム
```

## 応用例

より複雑な要求図の例：

```mermaid
requirementDiagram
    requirement ユーザー管理システム {
        id: REQ-100
        text: システムは完全なユーザー管理機能を提供する
        risk: medium
        verifyMethod: test
    }

    requirement ユーザー登録 {
        id: REQ-101
        text: 新規ユーザーがアカウントを作成できる
        risk: low
        verifyMethod: test
    }

    requirement パスワードセキュリティ {
        id: REQ-102
        text: パスワードはセキュリティ基準を満たす必要がある
        risk: high
        verifyMethod: inspection
    }

    requirement ユーザーロール {
        id: REQ-103
        text: システムは複数のユーザーロールをサポートする
        risk: medium
        verifyMethod: demonstration
    }

    element 認証モジュール {
        type: module
    }

    element データベース {
        type: database
    }

    ユーザー管理システム contains ユーザー登録
    ユーザー管理システム contains パスワードセキュリティ
    ユーザー管理システム contains ユーザーロール
    
    ユーザー登録 - 認証モジュール
    パスワードセキュリティ - 認証モジュール
    ユーザーロール - データベース
```

## 関係タイプ

- `contains`: 包含関係
- `copies`: コピー関係
- `derives`: 派生関係
- `satisfies`: 満足関係
- `verifies`: 検証関係
- `refines`: 詳細化関係
- `traces`: トレース関係

## 検証方法

利用可能な検証方法：
- `test`: テストによる検証
- `inspection`: 検査による検証
- `demonstration`: デモンストレーションによる検証
- `analysis`: 分析による検証

## リスクレベル

設定可能なリスクレベル：
- `low`: 低リスク
- `medium`: 中リスク
- `high`: 高リスク

## スタイル設定

要求図は自動的に：
- 異なる要素タイプに異なる形状を使用
- 要件IDと説明を表示
- リスクレベルと検証方法を表示
- 関係を示す異なる種類の接続線を使用

## 実用的なヒント
- 明確な要件ID体系を使用
- 簡潔で明確な要件記述を作成
- 適切なリスクレベルを設定
- 適切な検証方法を選択
- 要件間の関係を明確に表示
- 図の構造を明確に保つ
- 複雑な関係ネットワークを避ける

## よくある問題の解決

1. **構造の問題**
   - 要件階層を適切に整理
   - 過度の交差関係を避ける
   - サブ要件を使用して関連項目をグループ化

2. **可読性の問題**
   - 要件記述を簡潔に保つ
   - 意味のあるIDを使用
   - 適切な空間レイアウトを使用

3. **関係の問題**
   - 関係タイプの正確性を確保
   - 循環依存を避ける
   - 依存方向を明確に表示

## ベストプラクティス
- 各要件に一意のIDを付与
- 要件記述は具体的で検証可能に
- リスクレベルを明確に表示
- 適切な検証方法を選択
- 要件間の関係を明確に保つ
- 定期的な要件のレビューと更新
- 要件のトレーサビリティを確保

## 次のステップ
- [Gitグラフ](/ja/diagrams/git)
- [C4図](/ja/diagrams/c4)
- [マインドマップ](/ja/diagrams/mindmap) 