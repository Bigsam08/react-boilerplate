/**
 * @description This uses joi library to valid user input
 *              - prevents xss attack and wrong input by user
 * 
 */

import joi from "joi";

// registration schema

export const registrationSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Full name is required"
    }),

    email: joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.empty": "Email address is required",
        "string.email": "Please enter a valid email address"
    }),
    password: joi.string().min(8).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 8 characters long"
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "string.empty": "Confirm password is required",
        "any.only": "Passwords do not match"
    }),
    isChecked: joi.boolean().required().valid(true).messages({
        "any.only": "Accept Terms and Policies to continue"
    })
});

// login validation schema

export const loginSchema = joi.object({
    email: joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.empty": "Email is required",
        "string.email": "Please enter a valid email address"
    }),
    password: joi.string().required().messages({
        "string.empty": "Password is required"
    })
});

// forget password schema

export const forgetPasswordSchema = joi.object({
    email: joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.empty": "Email is required",
        "string.email": "Please enter a valid email address"
    }),
});

// reset password

export const resetPasswordSchema = joi.object({
    password: joi.string().min(8).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 8 characters long"
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "string.empty": "Confirm password is required",
        "any.only": "Passwords do not match"
    })
});
