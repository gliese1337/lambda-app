import Head from 'next/head';
import styles from '../styles/Home.module.css';

/*
The page we want to start with is the assignments page.

The page should display a list of all the assignments that have been given to a student.

Each assignment should indicate whether or not it has been submitted.

If the assignment has been submitted, the UI should indicate whether the student passed
or failed the assignment, where a score of 80% or higher is passing.

If an assignment has not been submitted and the due date for the assignment is in the
future or within the past 30 days, a button should be rendered to give the student the
ability to submit a file for the assignment
(the submit functionality does not need to be implemented at this time, just render the button for now).

If the submission has been graded and the student has a failing grade for that assignment,
the submit button should be available for the student to re-submit the assignment as long
as the due date does not prevent submission.

The MVP should include fake data in the shape that represents a proposed schema,
but the schema does not need to be defined in SQL and the fake data can live in memory.
*/

export async function getServerSideProps(_context) {
  return {
    props: {},
  }
}

export default function Home() {
  const assigned = 0;
  const passed = 0;
  return (
    <div className={styles.container}>
      <Head>
        <title>Assignments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Assignments
        </h1>
        {/*
        There should be a message above the list of assignments indicating how many assignments
the student has been given and how many the student has passed.
        */}
        <p className={styles.description}>
          Assigned: {assigned} Passed: {passed}
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
