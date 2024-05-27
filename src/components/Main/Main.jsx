import { useState } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

import './Main.css'
const Main = () => {

    const [isUser, setIsUser] = useState(false)

    const handleGoToTest = (user) => {
        const { name, lastname, age } = user;
        localStorage.removeItem('answers');
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify({ name, lastname, age }));
        setIsUser(true)
    };

    return (
        <div className="main-container container">
            <Formik
                initialValues={{ name: "", lastname: "", age: "" }}

                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = "Ingrese su nombre";
                    }
                    if (!values.lastname) {
                        errors.lastname = "Ingrese su apellido";
                    }
                    if (!values.age) {
                        errors.age = "Ingrese su edad";
                    }
                    return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                    setIsUser(false)
                    handleGoToTest(values)
                    setSubmitting(false);

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} className='form__container--form container' style={{ maxWidth: "480px" }}>
                        <input className="form__input" type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder="Nombre" />{errors.name && touched.name && errors.name}
                        <input className="form__input" type="text" name="lastname" onChange={handleChange} onBlur={handleBlur} value={values.lastname} placeholder="Apellido" />{errors.lastname && touched.lastname && errors.lastname}
                        <input className="form__input" type="text" name="age" onChange={handleChange} onBlur={handleBlur} value={values.age} placeholder="Edad" />{errors.age && touched.age && errors.age}
                        <div className="button-form">
                            {!isUser ? (<button type="submit" className='button_link' disabled={isSubmitting}>Guardar datos</button>) : (<Link to="/test" className='button_link'> Ir al test</Link>)}
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Main