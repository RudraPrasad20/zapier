// "use client"
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/data');
//         setStudents(response.data);
//       } catch (error) {
//         console.error('Error fetching students:', error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <div>
//       <h1>Student Results</h1>
//       {students.length > 0 ? (
//         students.map(student => (
//           <div key={student.id}>
//             <h2>{student.name} ({student.rollNo})</h2>
//             <p>Batch: {student.batch}</p>
//             <p>Course: {student.courseName}</p>
//             <p>College: {student.collegeName}</p>
//             <p>SGPA: {student.sgpa}</p>
//           </div>
//         ))
//       ) : (
//         <p>No student data available.</p>
//       )}
//     </div>
//   );
// };

// export default Home;


"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useRouter } from 'next/navigation';

export default function Roland() {
    const router = useRouter()
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data');
        console.log("Data fetched:", response.data);
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <Card className=' w-96 cursor-pointer' onClick={()=> router.push("/roland")}>
      <CardHeader>
      <div className=' font-bold'>
  {/* {[...new Set(details.map(data => data.collegeName))].map((collegeName, index) => (
    <div key={index}>
      {collegeName}
    </div>
  ))} */}
  ROLAND INSTITUE OF TECHNOLOGY
</div>

      </CardHeader>
      <CardContent className=' font-medium'>
        {/* {[...new Set(details.map(data => data.batch))].map((batch, index) => (
    <div key={index}>
      {batch}
    </div>
  ))} */}
  2023
      </CardContent>
    </Card>
  )
}
