import dotenv from 'dotenv'
dotenv.config()

export const URL = {
    URL_BASE_PAGE: process.env.PAGE_URL
}

export const CREDENTIALS = {
    STANDARD_CREDENTIALS: {
        STANDARD_USER: process.env.PAGE_USER,
        PASSWORD: process.env.PAGE_PASSWORD
    },
    NOT_VALID_CREDENTIALS: {
        NOT_VALID_USER: 'Not valid user',
        NOT_VALID_PASSWORD: 'Not valid password'
    }
}

export const MESSAGES = {
    NOT_VALID_USER_AND_PASSWORD: 'Epic sadface: Username and password do not match any user in this service',
    EMPTY_USERNAME: 'Epic sadface: Username is required',
    EMPTY_PASSWORD: 'Epic sadface: Password is required',
    EMPTY_USERNAME_AND_PASSWORD: 'Epic sadface: Username is required'
}