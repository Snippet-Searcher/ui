import {handleAuth, handleLogin} from '@auth0/nextjs-auth0';
export const GET = handleAuth({
    login: handleLogin({ authorizationParams: { audience: 'manager-api', scope: "openid" } })
});
