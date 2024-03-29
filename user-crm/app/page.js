import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";

export const metadata = {
  title: "Users",
  description: "User Management table",
};

export default async function TaskPage() {
  return (
    <>
      <div className=" h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your users.
            </p>
          </div>
        </div>
        <DataTable columns={columns} />
      </div>
    </>
  );
}
