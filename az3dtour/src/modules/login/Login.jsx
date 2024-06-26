import React, { useContext, useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from './authContext';
import { useFormik } from 'formik';
import * as yup from "yup";
import AxiosClient from '../../shared/plugins/axios';

const Login = () => {
    const [expanded, setExpanded] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const handleLogin = (credencialesValidas) => {
        setExpanded(true);
    };
    const navigation = useNavigate();
    const { user, dispatch } = useContext(AuthContext);
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: yup.object().shape({
            username: yup.string().required("Campo obligatorio"),
            password: yup.string().required("Campo obligatorio"),
        }),
        onSubmit: async (values) => {
            setExpanded(!expanded);
            console.log("Valores: ");
            console.log(values);
            try {
                
                const response = await AxiosClient({
                    url: "/auth/signIn",
                    method: "POST",
                    data: JSON.stringify(values),
                });
                console.log(response);
                if (!response.error) {
                    const action = {
                        type: "LOGIN",
                        payload: { data: response.data },
                    };
                    dispatch(action);
                    navigation("/");
                    handleLogin(true);
                }
            } catch (err) {
                console.log(err);
                handleLogin(false);
            }
        },
    });
    
    useEffect(() => {
        document.title = "AstraZeneca";
    }, []);
    return (
        <div className="h-[100vh] bg-[#881a59] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                AstraZeneca
                <img class="w-30 h-10 mr-2" src={require("../../assets/azlogosm.png")} alt="logo" />
            </div>
            <div className="w-full h-[75vh] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Log in
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                        <div>
                            <label for="username" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                            <input name="username" value={formik.values.username}
                                onChange={formik.handleChange} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                            {formik.errors.username ? (
                                <span className="text-[#DAA815]">
                                    {formik.errors.username}
                                </span>
                            ) : null}
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                            <input type="password" name="password" value={formik.values.password}
                                onChange={formik.handleChange} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            {formik.errors.password ? (
                                <span className="text-[#DAA815]">
                                    {formik.errors.password}
                                </span>
                            ) : null}
                        </div>
                        <button type="submit" className="w-full text-white bg-[#881A59] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Iniciar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
