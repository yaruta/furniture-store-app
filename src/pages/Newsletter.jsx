/**
 * NewsletterPage component that renders the newsletter signup section.
 *
 * @returns {JSX.Element} The NewsletterPage component.
 */
import NewsletterSignup from "../components/Newletter/NewsletterSignup";
import PageContent from "../components/UI/PageContent";

function NewsletterPage() {
  return (
    <PageContent title="Abonnieren Sie unseren Newsletter!">
      <NewsletterSignup isFullscreen />
    </PageContent>
  );
}

export default NewsletterPage;

/**
 * Handles the newsletter signup form submission.
 *
 * @param {Object} params - The parameters passed by the router.
 * @param {Request} params.request - The request object containing form data.
 * @returns {Promise<{ message: string }>} A promise resolving to a success message.
 * @throws {Error} If the request fails.
 */
export async function action({ request }) {
  const method = request.method; // Get the HTTP method (GET, POST, etc.) from the request
  const data = await request.formData(); // Get the form data from the request
  const email = data.get("email"); // Extract the email from the form data

  const response = await fetch(
    "https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app/newsletter.json",
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    }
  );
  
  if (!response.ok) {
    throw new Error("An error occured while signing up for newsletter");
  }

  return { message: "Anmeldung erfolgreich!" };
}
