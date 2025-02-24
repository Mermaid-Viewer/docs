# 需求图

需求图用于可视化系统需求，展示需求之间的关系和依赖。它可以帮助团队更好地理解和管理项目需求。

## 语法

### 基本元素
- 需求: `requirement [名称] {[ID]}`
- 元素: `element [名称]`
- 关系: 使用箭头连接需求和元素
- 风险等级: `risk [level]`
- 验证方法: `verifyMethod [method]`

## 基础示例

```mermaid
requirementDiagram
    requirement 用户认证 {
        id: REQ-001
        text: 系统必须实现用户认证功能
        risk: high
        verifyMethod: test
    }

    element 登录系统 {
        type: system
    }

    用户认证 - 登录系统
```

## 高级示例

这是一个更复杂的需求图示例：

```mermaid
requirementDiagram
    requirement 用户管理系统 {
        id: REQ-100
        text: 系统应提供完整的用户管理功能
        risk: medium
        verifyMethod: test
    }

    requirement 用户注册 {
        id: REQ-101
        text: 新用户可以创建账号
        risk: low
        verifyMethod: test
    }

    requirement 密码安全 {
        id: REQ-102
        text: 密码必须符合安全标准
        risk: high
        verifyMethod: inspection
    }

    requirement 用户角色 {
        id: REQ-103
        text: 系统支持多种用户角色
        risk: medium
        verifyMethod: demonstration
    }

    element 认证模块 {
        type: module
    }

    element 数据库 {
        type: database
    }

    用户管理系统 contains 用户注册
    用户管理系统 contains 密码安全
    用户管理系统 contains 用户角色
    
    用户注册 - 认证模块
    密码安全 - 认证模块
    用户角色 - 数据库
```

## 关系类型

- `contains`: 包含关系
- `copies`: 复制关系
- `derives`: 派生关系
- `satisfies`: 满足关系
- `verifies`: 验证关系
- `refines`: 细化关系
- `traces`: 追踪关系

## 验证方法

可用的验证方法包括：
- `test`: 测试验证
- `inspection`: 检查验证
- `demonstration`: 演示验证
- `analysis`: 分析验证

## 风险等级

风险等级可以设置为：
- `low`: 低风险
- `medium`: 中等风险
- `high`: 高风险

## 样式设置

需求图会自动：
- 为不同类型的元素使用不同形状
- 显示需求ID和描述
- 标注风险等级和验证方法
- 使用不同类型的连接线表示关系

## 实用技巧
- 使用清晰的需求ID系统
- 编写简洁明确的需求描述
- 适当标注风险等级
- 选择合适的验证方法
- 明确显示需求间的关系
- 保持图表结构清晰
- 避免过于复杂的关系网络

## 常见问题解决

1. **结构问题**
   - 合理组织需求层次
   - 避免过多的交叉关系
   - 使用子需求分组相关项

2. **可读性问题**
   - 保持需求描述简洁
   - 使用有意义的ID
   - 适当使用空间布局

3. **关系问题**
   - 确保关系类型正确
   - 避免循环依赖
   - 清晰表示依赖方向

## 最佳实践
- 每个需求都有唯一ID
- 需求描述要具体且可验证
- 明确标注风险等级
- 选择合适的验证方法
- 保持需求间关系清晰
- 定期审查和更新需求
- 确保需求可追踪

## 下一步
- [Git图](/zh/diagrams/git)
- [C4架构图](/zh/diagrams/c4)
- [思维导图](/zh/diagrams/mindmap) 