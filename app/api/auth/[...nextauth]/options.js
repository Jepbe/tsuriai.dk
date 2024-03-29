import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const options = {
    providers: [
        GitHubProvider({
            profile(profile) {
                console.log("Profile GitHub: ", profile)
                
                let userRole = "GitHub User"
                if (profile?.email == "jepbe123@gmail.com") {
                    userRole = "admin"
                }

                return {
                    ...profile,
                    role: userRole,
                };
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),        
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
        
    ],
    callbacks: {
        async jwt({token, user}) {
            if(user) token.role = user.role
            return token;
        },
    secret: process.env.NEXTAUTH_SECRET,
    async session({session, token}) {
        if(session?.user) session.user.role = token.role
        return session;
    },
  },
};
