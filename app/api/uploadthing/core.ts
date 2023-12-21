import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { authOptions } from "../auth/[...nextauth]/route";

 
const f = createUploadthing(); 
 
const handleAuth = async () => {
    const session = await getServerSession(authOptions);
    if (!session) {
      throw new Error("Unauthorized");
    }
    const userId = session?.user?.id;
    console.log("user id is", userId);
    return { userId };
  };
  

export const ourFileRouter = {
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
      .middleware(() => handleAuth())
      .onUploadComplete(() => {}),
    courseAttachment: f(["text", "image", "video", "audio", "pdf"])
      .middleware(() => handleAuth())
      .onUploadComplete(() => {}),
    chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
      .middleware(() => handleAuth())
      .onUploadComplete(() => {})
  } satisfies FileRouter;

  export type OurFileRouter = typeof ourFileRouter;