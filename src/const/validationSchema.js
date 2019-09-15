import * as Yup from 'yup';

export const validationSchemaSignIn = Yup.object().shape({
    email: Yup.string()
        .email("Must enter a email")
        .required("Must enter a email"),
    password: Yup.string()
        .min(8, "Must have a min 8 character")
        .required("Must enter a password"),
});

export const validationSchemaSignUp = Yup.object().shape({
    name: Yup.string()
        .min(1, "Must have a character")
        .max(255, "Must be shorter than 255")
        .required("Must enter a name"),
    surname: Yup.string()
        .min(1, "Must have a character")
        .max(255, "Must be shorter than 255")
        .required("Must enter a surnname"),
    email: Yup.string()
        .email("Must enter a email")
        .required("Must enter a email"),
    password: Yup.string()
        .min(8, "Must have a min 8 character")
        .required("Must enter a password"),
});

export const validationSchemaMain = Yup.object().shape({
    name: Yup.string()
        .min(1, "Must have a character")
        .max(255, "Must be shorter than 255")
        .required("Must enter a name"),
    surname: Yup.string()
        .min(1, "Must have a character")
        .max(255, "Must be shorter than 255")
        .required("Must enter a surnname"),
    dateOfEmployment: Yup.date()
        .required("Must enter a date of employment"),
    salary: Yup.number()
        .required("Must enter a salary"),
    birthday: Yup.date()
        .required("Must enter a birthday"),
    profession:  Yup.string()
        .required("Must enter a profession")
});