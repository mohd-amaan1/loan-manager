import Overview from "@/components/Overview";
import UserLoans from "@/components/UserLoans";
import LoanFormPopup from "@/components/LoanFormPopup";

export default function User() {
  return (
      <>
          {/* <LoanFormPopup /> */}
      <div className="flex-1 p-6 bg-gray-100">
        <Overview />
      </div>
      <div className="flex-1 p-6 bg-gray-100">
        <UserLoans />
      </div>
    </>
  );
}
