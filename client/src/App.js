import "./App.css";
import { useState, useEffect, useRef } from "react";
import MonacoEditor from "react-monaco-editor";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from "@material-ui/core/Paper";
import { Switch } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { makeStyles } from "@material-ui/core/styles";

import env from "./env/env";

import * as defaultCode from "./DefaultCode";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function useKey(key, cb) {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    function handle(event) {
      if (event.keyCode === 13 && event.shiftKey && event.ctrlKey) {
        callbackRef.current(event);
      }
    }

    document.addEventListener("keydown", handle);

    return () => document.removeEventListener("keydown", handle);
  }, [key]);
}

function App() {
  const [myCode, setCode] = useState(defaultCode.defaultCode.cpp);
  const [result, setResult] = useState("Submit Code to See Result");
  const [lang, setlang] = useState("cpp");
  const [loading, setLoading] = useState(false);
  const [input, setinput] = useState("");
  const [darkmode, setDarkMode] = useState(false);

  const [javaCode, setJavaCode] = useState(defaultCode.defaultCode.java);
  const [cppCode, setCppCode] = useState(defaultCode.defaultCode.cpp);
  const [cCode, setCCode] = useState(defaultCode.defaultCode.c);
  const [pythonCode, setPythonCode] = useState(defaultCode.defaultCode.python);

  // const [theme, setTheme] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoading(true);

    let mystate;

    if (lang === "java") {
      mystate = {
        code:
          localStorage.getItem("javacode") != null
            ? JSON.parse(localStorage.getItem("javacode"))
            : javaCode,
        lang: lang,
        input,
        result,
      };
    } else if (lang === "cpp") {
      mystate = {
        code:
          localStorage.getItem("cppcode") != null
            ? JSON.parse(localStorage.getItem("cppcode"))
            : cppCode,
        lang: lang,
        input,
        result,
      };
    } else if (lang === "c") {
      mystate = {
        code:
          localStorage.getItem("ccode") != null
            ? JSON.parse(localStorage.getItem("ccode"))
            : cCode,
        lang: lang,
        input,
        result,
      };
    } else {
      mystate = {
        code:
          localStorage.getItem("pythoncode") != null
            ? JSON.parse(localStorage.getItem("pythoncode"))
            : pythonCode,
        lang: lang,
        input,
        result,
      };
    }

    // console.log(mystate);

    axios
      .post(`${env.url}v1/submit`, mystate)
      .then((res) => {
        setLoading(false);
        const data = res.data;
        if (data.err) {
          // Error in user code
          setResult(data.error);
        } else {
          setResult(data.output);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useKey("Enter", onSubmitHandler);

  const onCodeChangeHandler = (newcode, e) => {
    if (lang === "java") {
      localStorage.setItem("lang", lang);

      localStorage.setItem("javacode", JSON.stringify(newcode));

      setJavaCode(newcode);
    } else if (lang === "cpp") {
      localStorage.setItem("lang", lang);

      localStorage.setItem("cppcode", JSON.stringify(newcode));

      setCppCode(newcode);
    } else if (lang === "c") {
      localStorage.setItem("lang", lang);

      localStorage.setItem("ccode", JSON.stringify(newcode));

      setCCode(newcode);
    } else {
      localStorage.setItem("lang", lang);

      localStorage.setItem("pythoncode", JSON.stringify(newcode));

      setPythonCode(newcode);
    }

    localStorage.setItem("lang", lang);
    localStorage.setItem("code", JSON.stringify(newcode));

    setCode(newcode);
  };
  const onInputChangeHandler = (e) => {
    setinput(e.target.value);
  };

  const editorDidMount = (e) => {
    let h = JSON.parse(localStorage.getItem("theme"));

    if (h == null) {
      h = false;
    }

    setDarkMode(h);
  };

  const onLangSelectHandler = (e) => {
    let langu = e.target.value;

    localStorage.setItem("lang", langu);
    // localStorage.removeItem("lang");
    // localStorage.removeItem("code");
    setlang(langu);

    if (langu === "java") {
      let l = localStorage.getItem("javacode");

      if (l == null) {
        setCode(defaultCode.defaultCode[langu]);
        localStorage.setItem(
          "code",
          JSON.stringify(defaultCode.defaultCode[langu])
        );
      } else {
        localStorage.setItem("code", JSON.stringify(l));

        setCode(l);
      }
    } else if (langu === "cpp") {
      let l = localStorage.getItem("cppcode");

      if (l == null) {
        setCode(defaultCode.defaultCode[langu]);
        localStorage.setItem(
          "code",
          JSON.stringify(defaultCode.defaultCode[langu])
        );
      } else {
        localStorage.setItem("code", JSON.stringify(l));

        setCode(l);
      }
    } else if (langu === "c") {
      let l = localStorage.getItem("ccode");

      if (l == null) {
        setCode(defaultCode.defaultCode[langu]);
        localStorage.setItem(
          "code",
          JSON.stringify(defaultCode.defaultCode[langu])
        );
      } else {
        localStorage.setItem("code", JSON.stringify(l));

        setCode(l);
      }
    } else {
      let l = localStorage.getItem("pythoncode");

      if (l == null) {
        setCode(defaultCode.defaultCode[langu]);
        localStorage.setItem(
          "code",
          JSON.stringify(defaultCode.defaultCode[langu])
        );
      } else {
        localStorage.setItem("code", JSON.stringify(l));

        setCode(l);
      }
    }
  };

  const handleChange = (event) => {
    localStorage.setItem("theme", !darkmode);
    setDarkMode(!darkmode);
  };

  const ReturnValue = () => {
    let v;

    if (lang === "java") {
      v =
        localStorage.getItem("javacode") != null
          ? JSON.parse(localStorage.getItem("javacode"))
          : javaCode;
    } else if (lang === "cpp") {
      v =
        localStorage.getItem("cppcode") != null
          ? JSON.parse(localStorage.getItem("cppcode"))
          : cppCode;
    } else if (lang === "c") {
      v =
        localStorage.getItem("ccode") != null
          ? JSON.parse(localStorage.getItem("ccode"))
          : cCode;
    } else {
      v =
        localStorage.getItem("pythoncode") != null
          ? JSON.parse(localStorage.getItem("pythoncode"))
          : pythonCode;
    }

    return v;
  };

  const options = {
    selectOnLineNumbers: true,
    renderIndentGuides: true,
    colorDecorators: true,
    cursorBlinking: "blink",
    autoClosingQuotes: "always",

    find: {
      autoFindInSelection: "always",
    },
    snippetSuggestions: "always",
  };

  const classes = useStyles();

  useEffect(() => {
    let l = JSON.parse(localStorage.getItem("theme"));

    if (l == null) {
      l = false;
    }

    setlang("cpp");

    localStorage.setItem("theme", l);
  }, []);

  return (
    <div className={darkmode ? "fullBodyDark" : "fullBody"}>
      <Container>
        {loading ? <LinearProgress /> : <></>}

        <div className="row">
          <div className="column left">
            <div className="">
              <FormControl
                variant="filled"
                className={classes.formControl}
                style={{ color: darkmode ? "white" : "black" }}
              >
                <InputLabel
                  style={{ color: darkmode ? "white" : "black" }}
                  id="demo-simple-select-outlined-label"
                >
                  Language
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={lang}
                  style={{ color: darkmode ? "white" : "black" }}
                  onChange={(e) => onLangSelectHandler(e)}
                  label="Language"
                >
                  <MenuItem value={"cpp"}>C++</MenuItem>
                  <MenuItem value={"c"}>C</MenuItem>
                  <MenuItem value={"java"}>Java 11</MenuItem>
                  <MenuItem value={"python"}>Python3</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Switch
                    style={{
                      color: "white",
                    }}
                    checked={darkmode}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                style={{
                  marginLeft: "500px",
                  textAlign: "center",
                }}
                label={darkmode ? "🌚" : "🌞"}
              />

              <div>
                {lang === "java" ? (
                  <p>Don't change the main "test" class name for java</p>
                ) : (
                  <></>
                )}
              </div>

              <Paper
                elevation={3}
                style={{
                  padding: "5px",
                }}
              >
                <MonacoEditor
                  width="830"
                  height="500"
                  language={
                    localStorage.getItem("lang") != null
                      ? localStorage.getItem("lang")
                      : lang
                  }
                  theme={darkmode ? "vs-dark" : "vs-light"}
                  value={ReturnValue()}
                  options={options}
                  onChange={onCodeChangeHandler}
                  editorDidMount={editorDidMount}
                />
              </Paper>
            </div>

            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onSubmitHandler}
                      style={{
                        margin: "10px",
                      }}
                    >
                      Run (ctrl + shift + enter) 🏃🏻‍♂️
                    </Button>
                    <p>
                      If the submission doesn't works please try{" "}
                      <Button
                        color="secondary"
                        href="http://nav-compiler.herokuapp.com/"
                      >
                        here
                      </Button>
                    </p>
                    <p>
                      Always make sure you are connected to the http version not
                      the https version 😉 (specially if you use brave browser!)
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="column right">
            <h1>Input: 📝 </h1>

            <div>
              <textarea
                placeholder="Give Input"
                className="ui-autocomplete-input"
                style={{
                  width: "350px",
                  height: "30vh",
                }}
                type="text"
                value={input}
                onChange={onInputChangeHandler}
              ></textarea>
            </div>
            <div>
              <div className="row">
                <h1 className="">Output: 🧾</h1>
              </div>
              <div className="">
                <TextareaAutosize
                  style={{
                    width: "350px",
                    height: "60vh",
                  }}
                  value={result}
                  disabled={true}
                  aria-label="minimum height"
                  minRows={9}
                  fullwidth="true"
                  placeholder="Minimum 3 rows"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="footer">
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <p>Made with 💜 By Navneet Kumar Singh</p>
        </div>
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <div>
            📷
            <a href="https://www.instagram.com/navneetkrsinghhh/">
              Instagram{" "}
            </a>{" "}
          </div>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            🐱‍🚀
            <a href="https://github.com/Navneet7716"> Github </a>{" "}
          </div>
          <div
            style={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            🎮
            <a href="https://discord.gg/NW97apa"> Discord </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
