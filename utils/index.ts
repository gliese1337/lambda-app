export const day = 1000 * 60 * 60 * 24;

export type HomeProps = {
  assignments: {
    name: string,
    description: string,
    submitted: boolean,
    grade: number,
    due: number,
  }[]
};