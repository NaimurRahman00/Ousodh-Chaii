import useRole from "../../../hooks/useRole";
import AdminHome from "../Admin/AdminHome";
import SellerHome from "../Seller/SellerHome";
import UserPaymentHistory from "../User/UserPaymentHistory";

const DashboardHome = () => {
    // const [role, isLoading] = useRole()
    // if (isLoading) return <LoadingSpinner />
    const [role, isLoading] = useRole();
    return (
      <>
        {role === 'Admin' && <AdminHome></AdminHome>}
        {role === 'Seller' && <SellerHome></SellerHome>}
        {role === 'User' && <UserPaymentHistory></UserPaymentHistory>}
      </>
    );
};

export default DashboardHome;