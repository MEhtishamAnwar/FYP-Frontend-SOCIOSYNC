// Mock Authentication Service - Uses Local Storage Only
// No backend calls, all data stored locally

const generateMockToken = () => {
  return 'mock_token_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
};

export const authService = {
  register: async (firstName, lastName, email, password, confirmPassword) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Validation
    if (password !== confirmPassword) {
      return {
        success: false,
        errors: [{ field: 'confirmPassword', message: 'Passwords do not match' }]
      };
    }

    // Check if user already exists in localStorage
    const users = JSON.parse(localStorage.getItem('sociosync_users') || '[]');
    if (users.some(u => u.email === email)) {
      return {
        success: false,
        message: 'An account with this email already exists.'
      };
    }

    // Create new user
    const newUser = {
      id: 'user_' + Math.random().toString(36).substr(2, 9),
      firstName,
      lastName,
      email,
      password, // Store password (not recommended in real apps)
      avatarUrl: `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random`,
      plan: 'free',
      createdAt: new Date().toISOString(),
      linkedAccounts: []
    };

    // Save user to localStorage
    users.push(newUser);
    localStorage.setItem('sociosync_users', JSON.stringify(users));

    // Create token
    const token = generateMockToken();

    return {
      success: true,
      token,
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        avatarUrl: newUser.avatarUrl,
        plan: newUser.plan,
        createdAt: newUser.createdAt
      }
    };
  },

  login: async (email, password) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('sociosync_users') || '[]');
    const user = users.find(u => u.email === email);

    if (!user) {
      return {
        success: false,
        message: 'Invalid email or password.'
      };
    }

    if (user.password !== password) {
      return {
        success: false,
        message: 'Invalid email or password.'
      };
    }

    // Create token
    const token = generateMockToken();

    return {
      success: true,
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatarUrl: user.avatarUrl,
        plan: user.plan,
        createdAt: user.createdAt
      }
    };
  },

  resetPassword: async (email, password, confirmPassword) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password !== confirmPassword) {
      return {
        success: false,
        message: 'Passwords do not match.'
      };
    }

    const users = JSON.parse(localStorage.getItem('sociosync_users') || '[]');
    const userIndex = users.findIndex(u => u.email === email);

    if (userIndex === -1) {
      return {
        success: false,
        message: 'No account found for that email address.'
      };
    }

    users[userIndex].password = password;
    localStorage.setItem('sociosync_users', JSON.stringify(users));

    return {
      success: true,
      message: 'Your password has been reset successfully.'
    };
  },

  getMe: async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // Get current user from localStorage
    const currentUser = localStorage.getItem('sociosync_user');
    if (!currentUser) {
      throw new Error('No user found');
    }

    return {
      success: true,
      user: JSON.parse(currentUser)
    };
  },

  logout: async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return { success: true };
  }
};
