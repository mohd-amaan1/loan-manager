import VerifierCards from "@/components/VerifierCards";
import AppliedLoans from "@/components/AppliedLoans";
export default function Verifier() {
  return (
    <>
      <div className="flex-1 p-6 bg-gray-100">
        <VerifierCards />
          </div>
          <div className="flex-1 p-6 bg-gray-100">
          <AppliedLoans />
        </div>
    </>
  );
}
