import authReducer from "./modules/login/authReducer";
import AuthContext from "./modules/login/authContext";
import AppRouter from "./shared/plugins/AppRouter";
import { useReducer, useEffect } from 'react';



const init = () => {
  return JSON.parse(
    localStorage.getItem('user')) || { isLogged: false, data:{user:{role:{name:"Nada"}}} }

};

const App = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    console.log( user);
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ dispatch, user }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default App;
