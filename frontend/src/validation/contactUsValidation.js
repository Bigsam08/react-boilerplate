/**
 * @description: Validation functions for form inputs
 *               - uses joi library to validate user input
 *               - prevents xss attack and wrong input by user
 */
import joi from "joi";

// contact us form validation schema
export const contactUsSchema = joi.object({
    name: joi.string().min(3).max(30).required().messages({
        "string.empty": "Name is required",
        "any.required": "Name is required"
    }),
    email: joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.email": "Please enter a valid email address",
        "string.empty": "Email is required",
        "any.required": "Email is required"
    }),
    message: joi.string().min(10).max(1000).required().messages({
        "string.empty": "Message is required",
        "any.required": "Message is required",
        "string.min": "Message should be at least 10 characters long",
        "string.max": "Message should be at most 1000 characters long"
    })
})