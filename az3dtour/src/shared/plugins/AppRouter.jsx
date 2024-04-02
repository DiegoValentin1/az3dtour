import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../modules/login/Login";
import AuthContext from "../../modules/login/authContext";
import E404 from "../E404";
import UserHome from "../../modules/User/UserHome";
import TourScreen from "../../modules/tour/TourScreen";

const AppRouter = () => {
  var { user } = useContext(AuthContext);
  
  console.log(user);
  // const user = {data:{role:"SUPER"}, isLogged:true};
  // console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route
          path="/*"
          element={
            user.isLogged ? (
              user.data.user.role.name === 'Admin' ? (
                <>
                  <Routes>
                    <Route path="/" element={<UserHome/>}/>
                    <Route path="*" element={<E404/>} />
                    <Route path="/tour" element={<TourScreen/>} />
                  </Routes>
                </>
              ) : (
                user.data.user.role.name === 'User' && (
                  <>
                    <Routes>
                        <Route index element={<>User</>} />
                    </Routes>
                  </>
                )
              )
            ) : (
              <>
                  <Routes>
                    <Route path="auth" element={<Login/>} />
                    <Route index element={<>Main</>} />
                    <Route path="/tour" element={<TourScreen/>} />
                    <Route path="*" element={<E404/>} />
                  </Routes>
              </>
            )
          }
        />
        <Route path="*" element={<E404/>} />
      </Routes>
    </Router>
  );
};


export default AppRouter;