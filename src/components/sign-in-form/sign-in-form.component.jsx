import './sign-in-form.styles.scss';

import FormInput from '../form-input/form-input.component';

import { useState } from 'react';
import Button from '../button/button.component';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserAndPassword,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = ({ target: { value, name } }) => {
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const user = await signInAuthUserAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('User does not exist.');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className='sign-in-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
          label='Email'
        />
        <FormInput
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
          label='Password'
        />
        <div className='buttons-container'>
          <Button>SIGN IN</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
