/**
 * FAQ component fetches and displays a list of frequently asked questions.
 * It uses React Query to fetch the FAQ data and renders it in an accordion-style list.
 * 
 * @module FAQ
 * @returns {JSX.Element} - The rendered FAQ section
 */
import { useQuery } from "@tanstack/react-query";
import { fetchFAQ } from "../../util/http";
import ErrorBlock from "../UI/ErrorBlock";
import Accordion from "./Accordion";
import PageTitle from "../UI/PageTitle";

export default function FAQ() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["faq"], // Unique query key for the FAQ data
    queryFn: ({ signal }) => fetchFAQ({ signal }), // Fetch function that returns the FAQ data
    staleTime: 5000, // Cache time for the fetched data
  });

  let content;

  // Display loading state while data is being fetched
  if (isPending) {
    content = <p>Loading...</p>;
  }

   // Display error message if there is an issue fetching the data
  if (isError) {
    content = (
      <ErrorBlock
        title="FAQ konntem nicht abgerufen werden."
        message={
          error.info?.message ||
          "FAQ konnten nicht abgerufen werden. Bitte versuchen Sie es später noch einmal."
        }
      />
    );
  }

  // Display FAQ data in an Accordion if available
  if (data && !isError) {
    content = (
      <Accordion defaultOpenId={Object.values(data)[0].id}>
        {!isPending &&
          Object.values(data).map((item) => (
            <Accordion.Item
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
      </Accordion>
    );
  }

  return (
    <section style={{ marginBottom: "5rem" }}>
      <PageTitle title="FAQ" />
      {content}
    </section>
  );
}
