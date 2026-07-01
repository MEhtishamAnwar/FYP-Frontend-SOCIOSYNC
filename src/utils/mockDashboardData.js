// Mock Dashboard Data
export const mockDashboardData = {
  summary: {
    totalFollowers: 125420,
    totalImpressions: 2450000,
    totalEngagement: 45680,
    avgEngagementRate: 18.6,
    followersGrowth: 12.5,
    impressionsGrowth: 8.2,
    engagementGrowth: 15.3
  },

  growthChart: [
    { date: '2024-12-01', followers: 110000, impressions: 2100000, engagement: 39500 },
    { date: '2024-12-02', followers: 111200, impressions: 2150000, engagement: 40200 },
    { date: '2024-12-03', followers: 112500, impressions: 2200000, engagement: 41000 },
    { date: '2024-12-04', followers: 113800, impressions: 2250000, engagement: 41800 },
    { date: '2024-12-05', followers: 115000, impressions: 2300000, engagement: 42500 },
    { date: '2024-12-06', followers: 116200, impressions: 2350000, engagement: 43200 },
    { date: '2024-12-07', followers: 117500, impressions: 2380000, engagement: 44000 },
    { date: '2024-12-08', followers: 118800, impressions: 2400000, engagement: 44500 },
    { date: '2024-12-09', followers: 120100, impressions: 2420000, engagement: 45000 },
    { date: '2024-12-10', followers: 121500, impressions: 2450000, engagement: 45680 },
  ],

  channels: [
    {
      id: 'ch1',
      platform: 'Instagram',
      icon: 'instagram',
      followers: 65000,
      engagement: 24500,
      engagementRate: 22.4,
      lastPost: '2024-12-10T14:30:00Z',
      status: 'connected'
    },
    {
      id: 'ch2',
      platform: 'LinkedIn',
      icon: 'linkedin',
      followers: 35000,
      engagement: 12800,
      engagementRate: 15.2,
      lastPost: '2024-12-10T10:15:00Z',
      status: 'connected'
    },
    {
      id: 'ch3',
      platform: 'Twitter',
      icon: 'twitter',
      followers: 20000,
      engagement: 6200,
      engagementRate: 18.5,
      lastPost: '2024-12-10T16:45:00Z',
      status: 'connected'
    },
    {
      id: 'ch4',
      platform: 'Facebook',
      icon: 'facebook',
      followers: 5420,
      engagement: 2180,
      engagementRate: 12.3,
      lastPost: '2024-12-09T09:00:00Z',
      status: 'connected'
    }
  ],

  recentPosts: [
    {
      id: 'post1',
      title: 'How to Master Social Media Marketing',
      content: 'Discover the 5 proven strategies that successful brands use to grow their social media presence...',
      platform: 'LinkedIn',
      status: 'published',
      publishedAt: '2024-12-10T14:30:00Z',
      engagement: 2400,
      impressions: 45000,
      likes: 1200,
      comments: 350,
      shares: 200
    },
    {
      id: 'post2',
      title: 'Behind the Scenes: Content Creation Process',
      content: 'A sneak peek into how we create engaging content from ideation to publication...',
      platform: 'Instagram',
      status: 'published',
      publishedAt: '2024-12-10T12:15:00Z',
      engagement: 3200,
      impressions: 52000,
      likes: 2100,
      comments: 420,
      shares: 150
    },
    {
      id: 'post3',
      title: 'Top 10 Marketing Trends for 2025',
      content: 'Stay ahead of the curve with these emerging trends that will shape the marketing landscape...',
      platform: 'Twitter',
      status: 'published',
      publishedAt: '2024-12-09T16:45:00Z',
      engagement: 1850,
      impressions: 38000,
      likes: 980,
      comments: 280,
      shares: 320
    },
    {
      id: 'post4',
      title: 'Customer Success Story: 300% ROI',
      content: 'Learn how Brand X increased their ROI by 300% using our platform...',
      platform: 'Facebook',
      status: 'published',
      publishedAt: '2024-12-08T10:20:00Z',
      engagement: 920,
      impressions: 18500,
      likes: 650,
      comments: 120,
      shares: 95
    },
    {
      id: 'post5',
      title: 'Introducing AI-Powered Content Creator',
      content: 'We just launched our new AI feature that generates creative content ideas...',
      platform: 'Instagram',
      status: 'draft',
      publishedAt: null,
      engagement: 0,
      impressions: 0,
      likes: 0,
      comments: 0,
      shares: 0
    }
  ],

  usage: {
    apiCalls: {
      used: 2450,
      limit: 5000,
      percentage: 49
    },
    storage: {
      used: 2.4,
      limit: 10,
      percentage: 24
    },
    contentGenerations: {
      used: 45,
      limit: 100,
      percentage: 45
    }
  }
};
