
export function signUp(user) {
    console.log("Sign up ",user)
    return {
        type: 'signup',
        value: user
    }
}
export function signIn(user) {
    return {
        type: "signin",
        value: user
    }
}
export function Loggedin(user) {
    return {
        type: "loggedin",
        value: user
    }
}

