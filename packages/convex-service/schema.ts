import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  // 话题表：存储所有话题的基本信息
  topics: defineTable({
    // 话题标题
    title: v.string(),
    // 话题详细描述
    description: v.string(),
    // 话题封面图片URL（可选）
    coverImage: v.optional(v.string()),
    // 创建者ID（关联用户）
    creatorId: v.string(),
    // 创建者名称（冗余存储，避免频繁查询用户表）
    creatorName: v.string(),
    // 创建者头像URL（可选）
    creatorAvatar: v.optional(v.string()),
    // 关注者数量（冗余存储，避免频繁统计）
    followersCount: v.number(),
    // 帖子数量（冗余存储，避免频繁统计）
    postsCount: v.number(),
    // 话题状态：是否活跃
    isActive: v.boolean(),
    // 话题标签数组
    tags: v.array(v.string()),
    // 创建时间戳
    createdAt: v.number(),
    // 最后更新时间戳
    updatedAt: v.number(),
  })
    // 索引：按创建者查询（用于获取用户创建的所有话题）
    .index('by_creator', ['creatorId'])
    // 索引：按创建时间查询（用于时间线展示）
    .index('by_created_at', ['createdAt'])
    // 索引：按关注者数量查询（用于热门话题展示）
    .index('by_followers', ['followersCount']),

  // 话题关注关系表：记录用户关注话题的关系
  topicFollowers: defineTable({
    // 话题ID（关联topics表）
    topicId: v.id('topics'),
    // 用户ID（关联用户表）
    userId: v.string(),
    // 关注时间戳
    followedAt: v.number(),
  })
    // 索引：按话题查询（用于获取话题的所有关注者）
    .index('by_topic', ['topicId'])
    // 索引：按用户查询（用于获取用户关注的所有话题）
    .index('by_user', ['userId'])
    // 复合索引：按话题和用户查询（用于检查用户是否关注了某个话题）
    .index('by_topic_and_user', ['topicId', 'userId']),

  // 话题帖子关联表：记录话题下的所有帖子
  topicPosts: defineTable({
    // 话题ID（关联topics表）
    topicId: v.id('topics'),
    // 帖子ID（关联posts表）
    postId: v.id('posts'),
    // 添加到话题的时间戳
    addedAt: v.number(),
  })
    // 索引：按话题查询（用于获取话题下的所有帖子）
    .index('by_topic', ['topicId'])
    // 索引：按帖子查询（用于获取帖子所属的所有话题）
    .index('by_post', ['postId']),
});
