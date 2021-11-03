import { useContext, createContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface AuthProviderProps {
  children: ReactNode;
}
interface signInProps {
  email: string;
  password: string;
}
interface AuthProviderData {
  authToken: string;
  signIn: (userData: signInProps) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const history = useHistory();
  const signIn = (userData: signInProps) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        console.log(response.data.token);
        history.push("/dashboard");
        setAuthToken(response.data.token);
        localStorage.setItem("token", response.data.token);
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.clear();
    history.push("/");
    setAuthToken("");
  };
  return (
    <AuthContext.Provider value={{ authToken, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
