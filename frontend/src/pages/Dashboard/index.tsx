import DonutChart from "components/Donutchart";
import Barchart from "components/BarChart";
import DataTable from "components/DataTable";
import Footer from "components/footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (

        <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucessso (%)</h5>
            <Barchart/>
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
            <DonutChart/>
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>

    );
}

export default Dashboard;