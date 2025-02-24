# 甘特图

甘特图用于项目规划和进度安排。它们可以显示任务、持续时间和依赖关系。

## 语法

### 基本元素
- 标题: `title [图表标题]`
- 日期格式: `dateFormat YYYY-MM-DD`
- 部分: `section [部分名称]`
- 任务: `[任务名称] : [任务ID], [开始日期], [持续时间]`
- 依赖关系: `after [任务ID]`

### 时间单位
- 分钟: `1m`
- 小时: `1h`
- 天: `1d`
- 周: `1w`
- 月: `1M`

## 基础示例

```mermaid
gantt
    title 简单项目进度
    dateFormat  YYYY-MM-DD
    section 规划
    项目启动    :a1, 2024-01-01, 1w
    需求收集    :a2, after a1, 2w
    section 开发
    实现        :a3, after a2, 4w
    测试        :a4, after a3, 2w
```

## 高级示例

```mermaid
gantt
    title 软件开发项目
    dateFormat  YYYY-MM-DD
    
    section 规划
    项目启动       :done, a1, 2024-01-01, 2d
    需求分析       :active, a2, after a1, 1w
    系统设计       :a3, after a2, 2w
    
    section 开发
    后端开发      :crit, a4, after a3, 4w
    前端开发      :a5, after a3, 4w
    API集成       :a6, after a4, 1w
    
    section 测试
    单元测试      :a7, after a5, 1w
    集成测试      :a8, after a6, 2w
    用户验收      :a9, after a8, 1w
    
    section 部署
    文档编写      :a10, after a8, 1w
    培训         :a11, after a9, 4d
    上线         :milestone, a12, after a11, 0d
```

## 任务状态

你可以用不同状态标记任务：
- `done` - 已完成的任务
- `active` - 当前活动的任务
- `crit` - 关键任务

```mermaid
gantt
    title 任务状态示例
    dateFormat YYYY-MM-DD
    
    section 进度
    已完成任务    :done, t1, 2024-01-01, 1w
    当前任务      :active, t2, after t1, 1w
    关键任务      :crit, t3, after t2, 1w
    普通任务      :t4, after t3, 1w
```

## 附加功能

### 里程碑

里程碑是持续时间为零的任务：

```mermaid
gantt
    title 项目里程碑
    dateFormat YYYY-MM-DD
    
    section 阶段
    阶段1           :a1, 2024-01-01, 1w
    里程碑1        :milestone, m1, after a1, 0d
    阶段2           :a2, after m1, 2w
    里程碑2        :milestone, m2, after a2, 0d
```

### 并行任务

如果任务没有依赖关系，可以并行运行：

```mermaid
gantt
    title 并行任务
    dateFormat YYYY-MM-DD
    
    section 开发
    后端  :a1, 2024-01-01, 2w
    前端  :a2, 2024-01-01, 2w
    测试  :a3, after a1 a2, 1w
```

## 样式设置

外观可以通过以下方式自定义：
- 不同的任务状态（done, active, crit）
- 里程碑
- 分组部分
- 任务之间的依赖关系

## 实用技巧
- 保持任务名称简洁但描述性强
- 使用有意义的部分名称
- 显示关键依赖关系
- 包含重要的里程碑
- 将相关任务分组到部分中

## 常见问题解决

1. **布局问题**
   - 减少任务数量
   - 使用合适的时间单位
   - 适当分组任务

2. **依赖关系问题**
   - 确保依赖关系正确
   - 避免循环依赖
   - 检查任务ID唯一性

## 最佳实践
- 将大型项目分解为可管理的任务
- 使用一致的命名约定
- 定期更新进度状态
- 突出显示关键路径
- 保持图表简洁清晰

## 下一步
- [用户旅程图](/zh/diagrams/user-journey)
- [饼图](/zh/diagrams/pie)
- [Git图](/zh/diagrams/git) 