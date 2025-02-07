/**
 * HomePage component that renders the main sections of the homepage.
 *
 * @module HomePage
 * @returns {JSX.Element} The HomePage component.
 */
import { fetchHero, queryClient } from "../util/http";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "../components/Hero/HeroSection";
import NewProductsSection from "../components/Shop/NewProductsSection/NewProducts";
import PageContent from "../components/UI/PageContent";
import ErrorBlock from "../components/UI/ErrorBlock";
import NewsletterSignup from "../components/Newletter/NewsletterSignup";

function HomePage() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["hero"],
    queryFn: ({ signal }) => fetchHero({ signal }),
    staleTime: 10000,
  });

  let content;

  if (isPending) {
    content = (
      <PageContent title="Fetching...">
        <p>Fetching items...</p>
      </PageContent>
    );
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Hero-Bereich konnten nicht geladen werden"
        message={
          error.info?.message ||
          "Hero-Bereich konnten nicht abgerufen werden. Bitte versuchen Sie es später noch einmal."
        }
      />
    );
  }

  if (data && !isError) {
    content = <HeroSection data={data} />;
  }

  return (
    <>
      {content}
      <NewsletterSignup isFullscreen/>
      <NewProductsSection />
    </>
  );
}

export default HomePage;

/**
 * Pre-loads the hero section data before rendering the page.
 *
 * @returns {Promise} A promise that resolves with the hero section data.
 */
export function loader() {
  return queryClient.fetchQuery({
    queryKey: ["hero"],
    queryFn: ({ signal }) => fetchHero({ signal }),
  });
}
