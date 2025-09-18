'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!username || !password) {
        console.error('Username and password are required');
        setIsLoading(false);
        return;
    }
    try {
      const response = await fetch(`${baseURL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('adminUsername', username); // Store admin username
        localStorage.setItem('adminToken', data.token); // Store JWT token
        console.log('Login successful');
        router.push('/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.message || 'Invalid credentials');
        alert(errorData.message || 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#F3F1EB' }}>
      <div className="w-full max-w-md p-8 space-y-8 rounded-xl shadow-lg" style={{ backgroundColor: 'white' }}>
        <div className="flex justify-center">
          <div className="text-4xl font-bold tracking-wider" style={{ color: '#424242' }}>
            <span style={{ color: '#9FA8DA' }}>S</span>CALIXITY
          </div>
        </div>
        
        <h2 className="mt-6 text-center text-2xl font-extrabold" style={{ color: '#424242' }}>
          Admin Portal
        </h2>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium" style={{ color: '#616161' }}>
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 border transition-colors"
                style={{ 
                  backgroundColor: '#F3F1EB', 
                  borderColor: '#9FA8DA',
                  color: '#424242',
                  outlineColor: '#9FA8DA' 
                }}
                placeholder="Enter your username"
              />
            </div>
            
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium" style={{ color: '#616161' }}>
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 border transition-colors"
                  style={{ 
                    backgroundColor: '#F3F1EB', 
                    borderColor: '#9FA8DA',
                    color: '#424242',
                    outlineColor: '#9FA8DA' 
                  }}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center hover:text-gray-700"
                  style={{ color: '#9FA8DA' }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out disabled:opacity-50 hover:bg-[#7986CB]"
              style={{ 
                backgroundColor: '#9FA8DA'
              }}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </div>
          
          <div className="flex items-center justify-end">
            <div className="text-sm">
              <a href="#" className="font-medium hover:underline" style={{ color: '#9FA8DA' }}>
                Forgot your password?
              </a>
            </div>
          </div>
        </form>
        
        <div className="mt-6 text-center text-xs" style={{ color: '#9E9E9E' }}>
          © 2025 Scalixity. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;