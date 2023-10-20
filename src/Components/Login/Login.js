import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../Context/auth-context";
import Input from "../UI/Input/Input";

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const { onLogin } = useContext(AuthContext);

  // using useRef to store the input element
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // using useReducer to manage state and dispatch
  const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return { value: action.value, isValid: action.value.includes("@") };
    }
    if (action.type === "INPUT_BLUR") {
      return { value: state.value, isValid: state.value.includes("@") };
    }
    return state; // No need to reset to empty and false here
  };

  const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return { value: action.value, isValid: action.value.trim().length > 6 };
    }
    if (action.type === "INPUT_BLUR") {
      return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return state; // No need to reset to empty and false here
  };

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const formValidator = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    localStorage.setItem("email", emailState.value);
    return () => {
      clearTimeout(formValidator);
    };
  }, [emailIsValid, passwordIsValid, emailState]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else if (!passwordIsValid) {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
