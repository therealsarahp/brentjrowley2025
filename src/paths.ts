export const paths = {
    index: '/',
    work: "/work",
    auth: {
        login: '/auth/login',
        register: '/auth/register',
    },
    about: "/about",
    contact: "/contact",
    blog: {
        index: '/blog',
        postDetails: '/blog/:postId',
        postCreate: '/blog/create',
    },
    notAuthorized: '/errors/401',
    notFound: '/errors/404',
    serverError: '/errors/500',
}