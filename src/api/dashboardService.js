import { mockDashboardData } from '../utils/mockDashboardData';

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const dashboardService = {
  getSummary: async () => {
    await delay(500);
    return { data: mockDashboardData.summary };
  },

  getGrowthChart: async (days = 30) => {
    await delay(600);
    return { data: mockDashboardData.growthChart };
  },

  getChannels: async () => {
    await delay(400);
    return { data: mockDashboardData.channels };
  },

  getUsage: async () => {
    await delay(300);
    return { data: mockDashboardData.usage };
  },

  getRecentPosts: async (limit = 5) => {
    await delay(500);
    return { data: mockDashboardData.recentPosts.slice(0, limit) };
  },

  suggestDrafts: async () => {
    await delay(1000);
    return {
      success: true,
      data: [
        {
          title: 'AI Generated: Latest Industry Insights',
          description: 'A comprehensive guide on current market trends',
          platform: 'LinkedIn'
        },
        {
          title: 'AI Generated: Engagement Tips & Tricks',
          description: 'Strategies to boost your social media engagement',
          platform: 'Instagram'
        },
        {
          title: 'AI Generated: Weekly News Roundup',
          description: 'Top news stories relevant to your industry',
          platform: 'Twitter'
        }
      ]
    };
  }
};
