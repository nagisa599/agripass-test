import { PrismaClient } from '@prisma/client'

export async function POST(request: Request) {
    
    const prisma = new PrismaClient()
    //try {
        const req = await request.json(); // リクエストのJSONデータを取得
        const  name/* 他の必要なプロパティ */ = req;
        console.log(name);
        const user = await prisma.sample_table.create({
            data: {
              sample: "nagisa",
            },
          });
        return Response.json({ req });
        }
//prisma.$disconnect();
        // // データベースに新しいユーザーを作成
        // const userdata = await prisma.user.create({
        //     data: {
        //         name,
                
        //         /* 他の必要なプロパティ */
        //     },
        // });

        // ユーザーのデータをデータベースに保存し、成功レスポンスを返す
        //return {
    //         status: 200,
    //         body: JSON.stringify({ message: "User created successfully", data: userdata }),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     };
    // } catch (error) {
    //     console.error(error);
    //     // エラーレスポンスを返す場合
    //     return {
    //         status: 500,
    //         body: JSON.stringify({ error: "Internal Server Error" }),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     };
    // }
// }






