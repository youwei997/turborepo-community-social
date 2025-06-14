# Turborepo 社区社交平台

这是一个基于Turborepo的monorepo项目，包含React Native移动应用和React Web管理后台，使用Convex和Supabase作为后端服务。

## 技术栈

- **前端框架**:
  - React Native (Expo) - 移动应用
  - React 19 + Vite - 管理后台
- **状态管理**: Convex
- **数据库**: Supabase
- **UI组件库**: 共享的React/React Native组件(@repo/ui)
- **构建工具**: Turborepo

## 环境要求

- Node.js >= 18
- Yarn 1.x
- Expo CLI (用于移动开发)
- Supabase CLI (用于本地开发)

## 安装

```bash
yarn install
```

## 开发脚本

### 通用命令

- `yarn dev`: 启动所有开发服务
- `yarn build`: 构建所有项目
- `yarn clean`: 清理构建文件和node_modules

### 管理后台

- `yarn dev:ui-admin`: 启动admin前端开发服务器
- `yarn dev:supabase-admin`: 同时启动Supabase和admin前端

### 移动应用

- `yarn dev:ui-native`: 启动native前端开发服务器
- `yarn dev:convex-native`: 同时启动Convex和native前端

### 后端服务

- `yarn convex`: 启动Convex开发服务器
- `yarn supabase:start`: 启动Supabase本地服务
- `yarn supabase:stop`: 停止Supabase本地服务
- `yarn supabase:build`: 生成Supabase类型定义

## 项目结构

```
turborepo-community-social/
├── apps/
│   ├── admin/        # 管理后台(Vite + React 19)
│   └── native/       # 移动应用(Expo + React Native)
├── packages/
│   ├── convex-service/  # Convex后端服务
│   ├── supabase-service/ # Supabase本地服务
│   ├── ui/           # 共享UI组件库
│   ├── eslint-config/ # ESLint配置
│   └── typescript-config/ # TypeScript配置
```

## 注意事项

1. 初始化后需要先build ui库一次，否则web项目引入ui库的地方会报找不到类型
2. Supabase本地服务需要先运行`yarn supabase:start`才能使用
3. Convex开发需要先运行`yarn convex`启动服务
4. 移动开发需要安装Expo Go应用或配置模拟器
