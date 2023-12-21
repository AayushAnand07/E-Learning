/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "utfs.io"
        ]
    },
    experimental:{
        serverComponentsExternalPackages:['@prisma/client','bcrypt']
    }
}

module.exports = nextConfig
