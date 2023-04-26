export const jwtConfig = {
    secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
    refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
    expireTime: '1000m',
    refreshTokenExpireTime: '1000m'
}

export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const countryRegex2 = /^[a-zA-Z]+\s+[a-zA-Z]*$/;
export const idRegex = /^[a-z0-9]{10,}/;
export const dateRegex = /^[0-9]{8,}$/;

export const BAD_EMAIL_REQUEST = { success: false, message: 'Invalid Email', data: null }
export const BAD_PASSWORD_REQUEST = { success: false, message: 'Invalid Password', data: null }
export const BAD_REQUEST = { success: false, message: 'Bad Request', data: null }
export const EMAIL_EXIST_REQUEST = { success: false, message: `It same email alreay exist`, data: null }
export const WEAK_PASS_REQUEST = { success: false, message: `It should be set strong password`, data: null }

export const BACKEND_ERROR = { success: false, message: 'Backend Server Error!', data: null }
export const JWT_EXPIREED_ERROR = {  success: false, message: 'jwt token expired', data: null };