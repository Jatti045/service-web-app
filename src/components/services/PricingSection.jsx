import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingOptions = [
    {
        title: "Essential",
        price: "2.0% commission",
        features: [
            "Ideal for portfolios under $50k",
            "Access to curated ETF blends",
            "Quarterly performance reports",
        ],
        popular: false,
    },
    {
        title: "Growth",
        price: "1.0% commission",
        features: [
            "For portfolios $50k - $500k",
            "Dedicated investment advisor",
            "Tax-loss harvesting",
            "Priority support",
        ],
        popular: true,
    },
    {
        title: "Premium",
        price: "Custom rate",
        features: [
            "For portfolios above $500k",
            "Full-service wealth management",
            "Legal & estate planning access",
            "Custom reporting & dashboards",
        ],
        popular: false,
    },
];

export default function PricingSection() {
    return (
        <section className="container mx-auto py-20 bg-white text-primary-navy">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold">Pricing Plans</h2>
                <p className="text-base text-xl text-charcoal mt-2">Choose the plan that best fits your investment needs and financial goals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {pricingOptions.map((plan, idx) => (
                    <Card
                        key={idx}
                        className={`flex flex-col justify-between shadow-lg border ${
                            plan.popular ? "border-primary-red ring-2 ring-primary-red relative" : ""
                        }`}
                    >
                        {plan.popular && (
                            <div
                                className="absolute -top-4 left-0 right-0 mx-auto w-max px-3 py-1 bg-primary-red text-white rounded-full text-sm font-medium"
                            >
                                Most Popular
                            </div>
                        )}
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-semibold">
                                {plan.title}
                            </CardTitle>
                            <div className="text-4xl font-bold mt-4">{plan.price}</div>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between px-6">
                            <ul className="space-y-3 mt-6 text-left">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className="mt-8 w-full"
                                variant={plan.popular ? "default" : "outline"}
                            >
                                {plan.popular ? "Get Started" : "Learn More"}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
