import { Container } from "@/components/ui/container";

export default function PrivacyPage() {
    return (
        <div className="py-20">
            <Container>
                <h1 className="text-3xl font-bold font-heading mb-6">Privacy Policy</h1>
                <p className="text-muted-foreground">
                    At Kaali Edge, accessible from our website, one of our main priorities is the privacy of our visitors.
                </p>
                <div className="mt-8 space-y-4 text-muted-foreground">
                    <p>We collect personal information such as name, email, and phone number only for the purpose of counseling and admission processing.</p>
                    <p>We do not share your data with third parties without your consent.</p>
                    {/* Add more placeholder content */}
                </div>
            </Container>
        </div>
    );
}
