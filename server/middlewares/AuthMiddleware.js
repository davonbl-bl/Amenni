
/*we want to grab the token that is sent
//to the front end, and then validate it
//by using a jwt token function called verified

and verfied it. if it can be verfied then 
we want to continue the process and allow the
comment to be posted. if not then return a json response
with an error

next- to have the funtion to move forward

*/

const {verify} = require("jsonwebtoken");

const confirmToken = (req, res, next) => {
    // next()

    const accessToken = req.header("accessToken")

    if (!accessToken){
        return res.json({
            error: "User is not logged in!"
        })
    }

    try {
        const legitToken = verify(accessToken, "criticalString");
        req.user = legitToken;
        if (legitToken) {
            return next();
        }
    } catch (err) {
        return res.json({error: err})

    }
}

module.exports = {confirmToken}; 