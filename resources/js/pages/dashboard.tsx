import AuthenticatedLayout from '@/layouts/authenticated-layout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="container py-16">
            <Alert>
                {/* <Terminal className="h-4 w-4" /> */}
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components and dependencies to your app using the cli.
                </AlertDescription>
            </Alert>
            </div>
        </AuthenticatedLayout>
    );
}
