import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MdOutlineAttachMoney } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";

export default function UserAccountPage() {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center bg-white dark:bg-black">
            <h1 className="text-3xl font-semibold text-center text-zinc-900 dark:text-zinc-50">
                User Account
            </h1>

            <div className="mx-auto text-zinc-600 dark:text-zinc-400">
                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                    This page is under construction.
                </div>
            </div>

            <div className="grid grid-cols-3 gap-16 mt-12">
                <form method="POST" action="/api/stripe/customer-portal">
                    <button type="submit">
                        <Card className="border border-zinc-200 dark:border-zinc-800 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition px-8">
                            <CardContent>
                                <div className="flex flex-row gap-1 items-center justify-center">
                                    <MdOutlineAttachMoney 
                                        size={24}
                                        color="grey"
                                    />
                                    <h2 className="text-[1rem] text-center font-semibold">
                                        Manage Subscriptions
                                    </h2>
                                </div>
                            </CardContent>
                        </Card>
                    </button>
                </form>
            </div>
        </div>
    );
}