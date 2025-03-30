import AdminCards from "@/components/AdminCards";
import RecentLoans from "@/components/recentLoans";
export default function Admin() {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <AdminCards />
      <div className="flex-1 p-6 bg-gray-100">
        <RecentLoans />
      </div>
    </div>
  );
}
