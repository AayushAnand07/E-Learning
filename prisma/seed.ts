const{PrismaClient}=require("@prisma/client")

const prisma = new PrismaClient()


async function main() {
 await prisma.category.createMany({
   data:[
     {name:"Computer Science"},
     {name:"Engineering"},
     {name:"DailyLife"},
     {name:"Fitness"},
     {name:"Filming"},
  
  ]
 })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })