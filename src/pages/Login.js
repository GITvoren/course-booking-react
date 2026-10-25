import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../utilities/UserContext.js';
import '../assets/css/login.css';

function Login() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const isActive = email.trim() !== '' && password !== '';

  async function retrieveUserDetails(token) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();

    setUser({
      id: data._id,
      isAdmin: data.isAdmin,
    });
  }

  async function loginUser(event) {
    event.preventDefault();
    if (!isActive || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (typeof data.access !== 'undefined') {
        localStorage.setItem('token', data.access);
        await retrieveUserDetails(data.access);

        await Swal.fire({
          title: 'Login successful',
          icon: 'success',
          text: 'Welcome to CodeLab!',
          confirmButtonColor: '#00B9F1',
        });

        navigate('/');
      } else {
        Swal.fire({
          title: 'Login failed',
          icon: 'error',
          text: 'Email or password is incorrect. Please try again.',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Unable to log in',
        icon: 'error',
        text: 'Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="codelab-auth-page">
      <section className="codelab-auth-card codelab-login-card">
        <div className="codelab-auth-heading">
          <span className="codelab-auth-eyebrow">
            <span className="codelab-auth-dot" />
            WELCOME BACK
          </span>
          <h1>Log in to <span>CodeLab.</span></h1>
          <p>Pick up where you left off and keep learning.</p>
        </div>

        <form onSubmit={loginUser} className="codelab-auth-form">
          <div className="codelab-auth-field">
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="codelab-auth-field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            className="codelab-auth-submit"
            type="submit"
            disabled={!isActive || isSubmitting}
          >
            {isSubmitting ? 'Logging in…' : 'Log in'}
            {!isSubmitting && <span aria-hidden="true">→</span>}
          </button>
        </form>

        <p className="codelab-auth-switch">
          Don’t have an account?{' '}
          <Link to="/account/register">Create one</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
