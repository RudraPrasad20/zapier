// import { db } from "@/lib/db";
// import { NextResponse } from "next/server";
// export const runtime = 'edge';

// export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const semester = url.searchParams.get("semester");

//   try {
//     const students = semester
//       ? await db.roland.findMany({ where: { semester: parseInt(semester) } })
//       : await db.roland.findMany();

//     return NextResponse.json(students);
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 401 }
//     );
//   }
// }

// export async function GET() {
//   try {
//     // Log to check if the API route is being hit
//     console.log('API route hit');

//     // Find a unique collagename
//     const result = await db.data.findFirst({
//       select: {
//         collegeName: true
//       }
//     });

//     if (result) {
//       console.log('Collagename fetched:', result.collageName);
//       res.status(200).json({ collagename: result.collageName });
//     } else {
//       console.log('No collagename found');
//       res.status(404).json({ error: 'Collagename not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching collagename:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   } finally {
//     await db.$disconnect();
//   }
// };




import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const students = await db.roland.findMany();
    return NextResponse.json(students);
  } catch (error) {
    console.error("Error fetching students:", error); // Add more logging here
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
