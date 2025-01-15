import pkg from "pg";
const { Pool } = pkg;

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_DBPORT,
// });

// import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// async function getData() {
//   const client = await pool.connect();
//   try {
//     const { rows } = await client.query("SELECT * FROM posts");
//     return rows;
//   } finally {
//     client.release();
//   }
// }

// getData();

// export default async function Page() {
//   const data = await getData();
//   return (
//     <div>
//       {data.map((post, index) => (
//         <div key={index}>
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

pool.on("connect", () => {
  console.log(
    `Connection poll established with Database: ${process.env.DATABASE_URL}`
  );
});

export default pool;
