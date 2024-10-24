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

export async function action({ request }) {
  const method = request.method;
  const data = await request.formData();
  const email = data.get("email");

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
