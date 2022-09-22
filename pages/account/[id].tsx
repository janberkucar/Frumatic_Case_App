import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const AccountPageContent: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading, error } = trpc.useQuery([
    "accounts.getById",
    { id },
  ]);

  if (!isLoading && !data) {
    return <div>Account not found</div>;
  }

  return <div>{data?.account?.username}</div>;
};

const AccountPage = () => {
  const { query } = useRouter();
  const { id } = query;

  if (!id || typeof id !== "string") {
    return <div>No Account ID</div>;
  }

  return <AccountPageContent id={id} />;
};

export default AccountPage;
