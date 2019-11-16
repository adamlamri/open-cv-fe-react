export const RoleMapper = {
    ADMIN: 'ADMIN',
    BASIC_USER: 'BASIC_USER',
    PREMIUM_USER: 'PREMIUM_USER',

    isAdmin(roles) {
        if (roles && roles.length > 0) {
            return roles.some(userRole => {
                return userRole.authority == this.ADMIN;
            });
        }
        return false;
    },

    isBasicUser(roles) {
        if (roles && roles.length > 0) {
            return roles.some(userRole => {
                return userRole.authority == this.BASIC_USER;
            });
        }
        return false;
    },

    isPremiumUser(roles) {
        if (roles && roles.length > 0) {
            return roles.some(userRole => {
                return userRole.authority == this.PREMIUM_USER;
            });
        }
        return false;
    }
}