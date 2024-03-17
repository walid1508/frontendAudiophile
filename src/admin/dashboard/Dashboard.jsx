import DashCard from "./DashCard";
import MonthlySalesReport from "./MonthlySalesReport";

const Dashboard = () => {
    return (
        <div>
            <h3 className="text-2xl font-extralight p-4">
                Dashboard
            </h3>

            <DashCard />
            <div className="mt-20">
                <MonthlySalesReport />
            </div>
        </div>
    );
};

export default Dashboard;