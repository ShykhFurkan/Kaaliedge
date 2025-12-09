import { Container } from "@/components/ui/container";

export default function TermsPage() {
    return (
        <div className="py-20">
            <Container>
                <h1 className="text-3xl font-bold font-heading mb-6">Terms and Conditions</h1>
                <p className="text-muted-foreground">
                    Welcome to Kaali Edge. These terms and conditions outline the rules and regulations for the use of Kaali Edge Consultancy's Website.
                </p>
                <div className="mt-8 space-y-4 text-muted-foreground">
                    <p>1. By accessing this website we assume you accept these terms and conditions.</p>
                    <p>2. The consultancy provides guidance for admission; final admission is subject to university criteria.</p>
                    <p>3. Fees once paid for consultancy services are non-refundable under specific clauses.</p>
                    {/* Add more placeholder content */}
                </div>
            </Container>
        </div>
    );
}
