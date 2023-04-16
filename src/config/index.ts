export const jwtConfig = {
    secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
    refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
    expireTime: '1000m',
    refreshTokenExpireTime: '1000m'
}

export const BAD_REQUEST = { success: false, message: 'Bad Request', data: null }
export const BACKEND_ERROR = { success: false, message: 'Backend Server Error!', data: null }
export const JWT_EXPIREED_ERROR = {  success: false, message: 'jwt token expired', data: null };