import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";
export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  const { value: emailValue, handleInputChange: handleEmail, handleBlur: handleEmailBlur, hasError: emailError } = useInput('',
    (value) =>
      isEmail(value) && isNotEmpty(value)

  );

  const { value: passwordValue, handleInputChange: handlePassword, handleBlur: handlePassBlur, hasError: passError } = useInput('',
    (value) =>
      hasMinLength(value, 6)
  );

  function handleSubmit(event) {
    event.preventDefault();

    if (emailError || passError) {
      return;
    }
    console.log(emailValue, passwordValue)
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input label="Email" id="email" type="email" name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmail}
          error={emailError && 'Please enter valid email'}
          value={emailValue}
        />

        <Input label="Password" id="password" type="password" name="password"
          onBlur={handlePassBlur}
          onChange={handlePassword}
          error={passError && 'Please enter valid password'}
          value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
