const { AuthenticationError } = require("apollo-server")

const user = {
    _id: "1",
    name: "Huy",
    email: "huylb314@gmail.com",
    picture: "https://cloudinary.com/asdf"
}

// higher order component
const authenticated = next => (root, args, ctx, info) => {
    if (!ctx.currentUser) {
        throw new AuthenticationError('You must be logged in')
    }
    return next(root, args, ctx, info)
} 

module.exports = {
    Query: {
        me: authenticated((root, args, ctx) => ctx.currentUser)
    }
}