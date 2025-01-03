import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import clientPromise from '@/app/lib/clientprom'

export const authOptions = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        let client = await clientPromise
        const db = client.db()
        const collection = db.collection('users')
        const user = await collection.findOne({ email: credentials.email, password: credentials.password })

        if (user) {
          
          return Promise.resolve(user)
        } else {
          return null  // or throw new Error("Invalid credentials");
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: { params: { prompt: 'login' } },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      const client = await clientPromise
      const db = client.db()
      const collection = db.collection('users')

      if (account.provider === 'google' || account.provider === 'github') {
        let existingUser = await collection.findOne({ email: user.email, isverified: true })
        
        if (existingUser) {
          return true
        } else {
          await collection.insertOne({ email: user.email, name: profile.name, isverified: false })
          return true
        }
      }
      if (account.provider === 'credentials') {
        let existingUser = await collection.findOne({ email: user.email, password: user.password })
        
        if (existingUser) {
          return true
        } else {
          return false
        }}
    },
  
  },
  session: {
    strategy: "jwt",
},

secret: process.env.NEXTAUTH_SECRET,
})

export { authOptions as GET, authOptions as POST }
