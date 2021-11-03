import { Button } from "@material-ui/core";
import { useAuth } from "../providers/Auth";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <>
      <Button variant="contained" onClick={() => logout}>
        Deslogar
      </Button>
    </>
  );
};
export default Dashboard;
