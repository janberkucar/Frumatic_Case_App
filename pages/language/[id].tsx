import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const LanguagePageContent: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading, error } = trpc.useQuery([
    "languages.getById",
    { id },
  ]);

  if (!isLoading && !data) {
    return <div>Language not found</div>;
  }

  return <div>{data?.language}</div>;
};

const LanguagePage = () => {
  const { query } = useRouter();
  const { id } = query;

  if (!id || typeof id !== "string") {
    return <div>No Film ID</div>;
  }

  return <LanguagePageContent id={id} />;
};

export default LanguagePage;
