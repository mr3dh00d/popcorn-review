export const routes = {
    base: '/',
    feed: '/feed',
    login: '/login',
    register: '/register',
    reviews: {
        base: '/reviews',
        create: 'create',
        edit: ':id/edit',
        view: ':id',
    },
}