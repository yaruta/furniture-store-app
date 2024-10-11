import { useQuery } from "@tanstack/react-query";
import { fetchFAQ } from "../../util/http";
import ErrorBlock from "../UI/ErrorBlock";
import Accordion from "./Accordion";
import PageTitle from "../UI/PageTitle";

export default function FAQ() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["faq"],
    queryFn: ({ signal }) => fetchFAQ({ signal }),
    staleTime: 5000,
  });

  let content;

  if (isPending) {
    content = <p>Loading...</p>;
  }

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
    <section>
      <PageTitle title="FAQ"/>
      {content}
    </section>
  );
}
