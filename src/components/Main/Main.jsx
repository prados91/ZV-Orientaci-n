import { Formik } from "formik";
import { Link } from "react-router-dom";

import './Main.css'
const Main = () => {

    const handleGoToTest = (user) => {
        const { name, lastname, age } = user;

        localStorage.removeItem('answers');
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify({ name, lastname, age }));
        location.replace("/test")
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
                            <Link type="submit" className='button_link' disabled={isSubmitting} to="/test"> ir al test</Link>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Main