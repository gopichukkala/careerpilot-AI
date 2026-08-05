import DashboardNavbar from "../components/DashboardNavbar";
import WelcomeCard from "../components/WelcomeCard";
import ProgressCards from "../components/ProgressCards";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-slate-100">

      <DashboardNavbar />

      <div className="max-w-7xl mx-auto p-8">

        <WelcomeCard user={user} />

        <ProgressCards user={user} />

      </div>

    </div>
  );
}

export default Dashboard;