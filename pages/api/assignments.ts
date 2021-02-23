import { NextApiRequest, NextApiResponse } from 'next';
import { day } from '../../utils';

/*
  The MVP should include fake data in the shape that represents a proposed schema,
  but the schema does not need to be defined in SQL and the fake data can live in memory.
*/
export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    assignments: [
      {
        name: "Documentation",
        description: "Find in-depth information about Next.js features and API.",
        submitted: true,
        grade: 90,
        due: Date.now() - day * 40,
      }, {
        name: "Learn",
        description: "Learn about Next.js in an interactive course with quizzes!",
        submitted: true,
        grade: 80,
        due: Date.now() - day * 20,
      }, {
        name: "Examples",
        description: "Discover and deploy boilerplate example Next.js projects.",
        submitted: true,
        grade: 75,
        due: Date.now() - day * 10,
      }, {
        name: "Deploy",
        description: "Instantly deploy your Next.js site to a public URL with Vercel",
        submitted: false,
        grade: NaN,
        due: Date.now() + day * 2,
      }
    ]
  });
}