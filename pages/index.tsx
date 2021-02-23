import Head from 'next/head';
import styles from '../styles/Home.module.css';

export async function getServerSideProps(_context) {
  return {
    props: {},
  }
}

const cardstyles = [styles.normal, styles.failed, styles.passed];

export default function Home() {
  /*
  The MVP should include fake data in the shape that represents a proposed schema,
  but the schema does not need to be defined in SQL and the fake data can live in memory.
  */
  const day = 1000 * 60 * 60 * 24;
  const assignments = [
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
  ];

  const assigned = assignments.length;
  const passed = assignments
    .reduce((c, a) => c + (a.grade >= 80 ? 1 : 0), 0);

  const now = Date.now();

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
          {/*The page should display a list of all the assignments that have been given to a student.*/}
          { assignments.map(a => {
            {/*If the assignment has been submitted, the UI should indicate whether the student passed
            or failed the assignment, where a score of 80% or higher is passing.*/}
            const status = a.grade !== a.grade ? 0 : a.grade < 80 ? 1 : 2;

            {/*
              If an assignment has not been submitted and the due date for the assignment is in the
              future or within the past 30 days, a button should be rendered to give the student the
              ability to submit a file for the assignment
              (the submit functionality does not need to be implemented at this time, just render the button for now).
            */}
            const submittable = !a.submitted && now > a.due - 30 * day;

            {/*
              If the submission has been graded and the student has a failing grade for that assignment,
              the submit button should be available for the student to re-submit the assignment as long
              as the due date does not prevent submission.
            */}
            const resubmittable = a.submitted && a.grade < 80 && now > a.due;
            
            return <div className={`${styles.card} ${cardstyles[status]}`}>
              <h3>{ a.name }</h3>
              <p>Due: { new Date(a.due).toDateString() }</p>
              {/*Each assignment should indicate whether or not it has been submitted.*/}
              <p>{ a.submitted ? "Submitted" : "Not Submitted" }</p>
              <p>Description: { a.description }</p>
              {
                submittable ? <label>Submit: <input type="file"/></label> :
                resubmittable ? <label>Resubmit: <input type="file"/></label> : ''
              }
            </div>;
          }) }
        </div>
      </main>
    </div>
  );
}
