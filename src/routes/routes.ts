export const routes = {
    base: '/',
    login: '/login',
    register: '/register',
    reviews: {
        base: '/reviews',
        create: 'create',
        edit: ':id/edit',
        view: ':id',
    },
}