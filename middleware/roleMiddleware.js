const roleMiddleware = (...allowedRoles) => {
    return (req, res, next) => {
        try{
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: 'Unauthorized: no user found'
                })
            }

            if (!allowedRoles.includes(req.user.role)) {
                return res.status(403).json({
                    success: false,
                    message: 'Forbidden: access denied'
                })
            }

             next()
       }
catch(error){
     return    next(error)}
        }
    }


module.exports = roleMiddleware
