// Initialize demo user accounts in localStorage for testing
export const initializeAuthData = () => {
  const users = localStorage.getItem('sociosync_users');
  
  if (!users) {
    const demoUsers = [
      {
        id: 'user_demo001',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'Password123!',
        avatarUrl: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
        plan: 'pro',
        createdAt: new Date().toISOString(),
        linkedAccounts: []
      },
      {
        id: 'user_demo002',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        password: 'Password456!',
        avatarUrl: 'https://ui-avatars.com/api/?name=Jane+Smith&background=random',
        plan: 'free',
        createdAt: new Date().toISOString(),
        linkedAccounts: []
      }
    ];

    localStorage.setItem('sociosync_users', JSON.stringify(demoUsers));
    console.log('Demo accounts created:', demoUsers);
  }
};
