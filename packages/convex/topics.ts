import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const get = query({
  args: {},
  handler: async ctx => {
    return await ctx.db.query('topics').collect();
  },
});

export const create = mutation({
  args: { title: v.string() },
  handler: async (ctx, args) => {
    const now = Date.now();
    const topic = await ctx.db.insert('topics', {
      title: args.title,
      description: 'description',
      coverImage: '',
      creatorId: '',
      creatorName: '',
      creatorAvatar: '',
      followersCount: 0,
      postsCount: 0,
      isActive: true,
      tags: [],
      createdAt: now,
      updatedAt: now,
    });
    return topic;
  },
});
