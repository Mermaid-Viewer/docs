# 状态图

状态图用于描述系统的不同状态以及状态之间的转换。它们特别适合用来建模响应式系统的行为。

## 语法

### 基本元素
- 状态: `state 状态名`
- 转换: `-->` 
- 开始状态: `[*]`
- 结束状态: `[*]`
- 复合状态: 可以包含嵌套状态
- 选择点: `<<choice>>`
- 注释: `note left/right of`

## 基础示例

```mermaid
stateDiagram-v2
    [*] --> 静止
    静止 --> [*]
    静止 --> 移动
    移动 --> 静止
    移动 --> 碰撞
    碰撞 --> [*]
```

## 高级示例

这是一个展示各种特性的复杂状态图：

```mermaid
stateDiagram-v2
    [*] --> 空闲
    
    state 空闲 {
        [*] --> 就绪
        就绪 --> 处理中: 开始
        处理中 --> 就绪: 完成
    }
    
    空闲 --> 活动: 激活
    
    state 活动 {
        [*] --> 运行
        运行 --> 暂停: 暂停
        暂停 --> 运行: 恢复
        运行 --> 错误: 失败
        错误 --> 运行: 重试
    }
    
    活动 --> 空闲: 停用
    活动 --> [*]: 关闭
    
    note right of 活动: 系统完全运行中
    note left of 空闲: 系统待机中
```

## 复合状态

```mermaid
stateDiagram-v2
    [*] --> 第一状态
    第一状态 --> 第二状态
    
    state 第一状态 {
        [*] --> 子状态1
        子状态1 --> [*]
    }
    
    state 第二状态 {
        [*] --> 子状态2
        子状态2 --> [*]
    }
```

## 选择点

```mermaid
stateDiagram-v2
    state 分支状态 <<choice>>
    [*] --> 分支状态
    分支状态 --> 状态1: 条件1
    分支状态 --> 状态2: 条件2
```

## 并行状态

```mermaid
stateDiagram-v2
    [*] --> 活动状态
    
    state 活动状态 {
        state "CPU运行" as CPU
        state "磁盘I/O" as IO
        --
        state "内存访问" as 内存
    }
```

## 样式设置

可以自定义外观：
- 不同的箭头类型
- 状态描述
- 注释
- 方向（LR或TB）

## 实用技巧
- 从系统的主要状态开始
- 使用清晰简洁的状态名称
- 包含所有可能的转换
- 在必要时为转换添加条件
- 使用复合状态来管理复杂性
- 用注释记录重要的状态行为
- 避免状态图过于复杂
- 适当使用子状态分组

## 常见问题解决

1. **布局问题**
   - 调整图表方向
   - 减少状态数量
   - 使用复合状态组织相关状态

2. **可读性问题**
   - 使用有意义的状态名称
   - 保持转换描述简洁
   - 适当使用注释说明

3. **复杂性管理**
   - 将复杂状态图分解为多个图
   - 使用复合状态
   - 避免过多的交叉转换

## 下一步
- [实体关系图](/zh/diagrams/er)
- [用户旅程图](/zh/diagrams/user-journey)
- [甘特图](/zh/diagrams/gantt) 