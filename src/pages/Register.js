import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../assets/css/register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const isActive =
    firstName.trim() !== '' &&
    lastName.trim() !== '' &&
    email.trim() !== '' &&
    email.length >= 10 &&
    mobileNumber.trim().length >= 11 &&
    password1.length >= 8 &&
    password1 === password2;

  useEffect(() => {
    // Keep validation derived from field values; no separate state needed.
  }, []);

  async function registerUser(event) {
    event.preventDefault();
    if (!isActive || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const checkResponse = await fetch(
        `${process.env.REACT_APP_API_URL}/users/checkEmail`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );

      const emailExists = await checkResponse.json();

      if (emailExists === true) {
        await Swal.fire({
          title: 'Registration failed',
          icon: 'error',
          text: 'That email address is already registered.',
        });
        return;
      }

      const registerResponse = await fetch(
        `${process.env.REACT_APP_API_URL}/users/register`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            password: password1,
            mobileNo: mobileNumber,
            firstName,
            lastName,
          }),
        }
      );

      const data = await registerResponse.json();

      if (data === true) {
        await Swal.fire({
          title: 'Registration successful!',
          icon: 'success',
          text: 'Your account has been created. You can log in now.',
          confirmButtonColor: '#00B9F1',
        });
        navigate('/account/login');
      } else {
        Swal.fire({
          title: 'Registration failed',
          icon: 'error',
          text: 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Unable to register',
        icon: 'error',
        text: 'Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="codelab-auth-page">
      <section className="codelab-auth-card codelab-register-card">
        <div className="codelab-auth-heading">
          <span className="codelab-auth-eyebrow">
            <span className="codelab-auth-dot" />
            JOIN CODELAB
          </span>
          <h1>Create your <span>account.</span></h1>
          <p>Sign up to start learning and building new skills.</p>
        </div>

        <form onSubmit={registerUser} className="codelab-auth-form">
          <div className="codelab-auth-fields-grid">
            <div className="codelab-auth-field">
              <label htmlFor="register-first-name">First name</label>
              <input
                id="register-first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="First name"
                required
              />
            </div>

            <div className="codelab-auth-field">
              <label htmlFor="register-last-name">Last name</label>
              <input
                id="register-last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div className="codelab-auth-field">
            <label htmlFor="register-email">Email address</label>
            <input
              id="register-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
            <small>We’ll only use your email for your account.</small>
          </div>

          <div className="codelab-auth-field">
            <label htmlFor="register-mobile">Mobile number</label>
            <input
              id="register-mobile"
              name="mobileNumber"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
              placeholder="09XXXXXXXXX"
              minLength={11}
              required
            />
          </div>

          <div className="codelab-auth-fields-grid">
            <div className="codelab-auth-field">
              <label htmlFor="register-password">Password</label>
              <input
                id="register-password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={password1}
                onChange={(event) => setPassword1(event.target.value)}
                placeholder="At least 8 characters"
                minLength={8}
                required
              />
            </div>

            <div className="codelab-auth-field">
              <label htmlFor="register-confirm-password">Confirm password</label>
              <input
                id="register-confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={password2}
                onChange={(event) => setPassword2(event.target.value)}
                placeholder="Repeat password"
                minLength={8}
                required
              />
            </div>
          </div>

          {password2 && password1 !== password2 && (
            <p className="codelab-auth-validation" role="status">
              Your passwords do not match yet.
            </p>
          )}

          <button
            className="codelab-auth-submit"
            type="submit"
            disabled={!isActive || isSubmitting}
          >
            {isSubmitting ? 'Creating account…' : 'Create account'}
            {!isSubmitting && <span aria-hidden="true">→</span>}
          </button>
        </form>

        <p className="codelab-auth-switch">
          Already have an account?{' '}
          <Link to="/account/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
