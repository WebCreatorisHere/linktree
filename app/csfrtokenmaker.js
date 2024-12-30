import { getCsrfToken } from "next-auth/react";

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken }, // Pass it to the page as a prop
  };
}