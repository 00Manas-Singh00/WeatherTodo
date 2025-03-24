export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT';

// Simulated user database
const users = [
  {
    id: 1,
    name: 'Demo User',
    email: 'demo@example.com',
    password: 'password123'
  }
];

// Mock login function with Redux Thunk
export const login = (email, password) => {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    
    // Simulate API request
    setTimeout(() => {
      const user = users.find(
        user => user.email === email && user.password === password
      );
      
      if (user) {
        // Don't send the password to the client
        const { password, ...userWithoutPassword } = user;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: userWithoutPassword
        });
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: 'Invalid email or password'
        });
      }
    }, 1000); // Simulate network delay
  };
};

// Mock register function with Redux Thunk
export const register = (name, email, password) => {
  return dispatch => {
    dispatch({ type: REGISTER_REQUEST });
    
    // Simulate API request
    setTimeout(() => {
      // Check if user already exists
      const userExists = users.some(user => user.email === email);
      
      if (userExists) {
        dispatch({
          type: REGISTER_FAILURE,
          payload: 'Email already in use'
        });
      } else {
        // Create new user
        const newUser = {
          id: users.length + 1,
          name,
          email,
          password
        };
        
        // In a real app, this would be an API call to create the user
        users.push(newUser);
        
        // Don't send the password to the client
        const { password: _, ...userWithoutPassword } = newUser;
        
        dispatch({
          type: REGISTER_SUCCESS,
          payload: userWithoutPassword
        });
      }
    }, 1000); // Simulate network delay
  };
};

export const logout = () => ({
  type: LOGOUT
});
