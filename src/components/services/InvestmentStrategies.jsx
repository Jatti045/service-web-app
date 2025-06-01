import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card"

import { Check, Percent } from "lucide-react"
import {cn} from "@/lib/utils.js";

const InvestmentStrategies = ({ className }) => {
    return (
        <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)}>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary-navy mb-4">
                    Investment Strategies
                </h2>
                <p className="text-lg text-charcoal max-w-3xl mx-auto">
                    Explore our different investment approaches based on your risk tolerance and financial goals.
                </p>
            </div>

            <Tabs defaultValue="conservative" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#e0e1e4]">
                    <TabsTrigger value="conservative">Conservative</TabsTrigger>
                    <TabsTrigger value="balanced">Balanced</TabsTrigger>
                    <TabsTrigger value="aggressive">Aggressive</TabsTrigger>
                </TabsList>
                <TabsContent value="conservative">
                    <Card>
                        <CardHeader>
                            <CardTitle >Conservative Strategy</CardTitle>
                            <CardDescription >
                                Focused on capital preservation with modest growth potential.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-medium text-primary-navy mb-4">
                                            Allocation Breakdown
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span >Bonds</span>
                                                <span className="font-medium">60%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className={"bg-primary-navy h-2 rounded-full w-[60%]"}></div>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <span >Blue-chip Stocks</span>
                                                <span className="font-medium">30%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-primary-red h-2 rounded-full w-[30%]"></div>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <span >Alternative Investments</span>
                                                <span className="font-medium">10%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-gold h-2 rounded-full w-[10%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-primary-navy mb-4">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0"/>
                                                <span>Focus on income-generating assets</span>
                                            </li>
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0"/>
                                                <span>Lower volatility and risk exposure</span>
                                            </li>
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0"/>
                                                <span>Emphasis on capital preservation</span>
                                            </li>
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0"/>
                                                <span>Ideal for near-retirement or risk-averse investors</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-cold-white bg-opacity-5 p-4 rounded-lg">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Percent className="h-5 w-5 text-primary-navy"/>
                                        <h4 className="font-medium text-primary-navy">
                                            Expected Annual Return
                                        </h4>
                                    </div>
                                    <p className={"place-self-start"}>
                                        4-6% with lower volatility and focus on steady income generation.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="balanced">
                    <Card>
                        <CardHeader>
                            <CardTitle >Balanced Strategy</CardTitle>
                            <CardDescription >
                                Balanced approach with moderate growth and income generation.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-medium text-primary-navy mb-4" >
                                            Allocation Breakdown
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span>Bonds</span>
                                                <span className="font-medium">40%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-primary-navy h-2 rounded-full w-[40%]"></div>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <span>Equities</span>
                                                <span className="font-medium">50%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-primary-red h-2 rounded-full w-[50%]"></div>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <span>Alternative Investments</span>
                                                <span className="font-medium">10%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-gold h-2 rounded-full w-[10%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-primary-navy mb-4">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0" />
                                                <span>Diversified approach across asset classes</span>
                                            </li>
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0" />
                                                <span>Moderate risk with growth potential</span>
                                            </li>
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0" />
                                                <span>Regular rebalancing to maintain allocation</span>
                                            </li>
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0" />
                                                <span>Suitable for mid-career investors</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-cold-white bg-opacity-5 p-4 rounded-lg">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Percent className="h-5 w-5 text-primary-navy"/>
                                        <h4 className="font-medium text-primary-navy">
                                            Expected Annual Return
                                        </h4>
                                    </div>
                                    <p className={"place-self-start"}>
                                        6-9% with moderate volatility and balanced growth and income objectives.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="aggressive">
                    <Card>
                        <CardHeader>
                            <CardTitle >Aggressive Strategy</CardTitle>
                            <CardDescription >
                                Growth-focused approach with higher risk tolerance for maximum returns.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-medium text-primary-navy mb-4">
                                            Allocation Breakdown
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span >Bonds</span>
                                                <span className="font-medium">10%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-primary-navy h-2 rounded-full w-[10%]"></div>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <span >Growth Equities</span>
                                                <span className="font-medium">75%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-primary-red h-2 rounded-full w-[75%]"></div>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <span >Alternative Investments</span>
                                                <span className="font-medium">15%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-gold h-2 rounded-full w-[15%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-primary-navy mb-4">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0"/>
                                                <span>Focus on high-growth sectors and companies</span>
                                            </li>
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0"/>
                                                <span>Higher risk tolerance for greater returns</span>
                                            </li>
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0"/>
                                                <span>Opportunistic investment in emerging markets</span>
                                            </li>
                                            <li className="flex items-start" >
                                                <Check className="h-4 w-4 text-green mr-2 mt-1 flex-shrink-0"/>
                                                <span>Ideal for younger investors with long time horizons</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-cold-white bg-opacity-5 p-4 rounded-lg">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Percent className="h-5 w-5 text-primary-navy"/>
                                        <h4 className="font-medium text-primary-navy">
                                            Expected Annual Return
                                        </h4>
                                    </div>
                                    <p className={"place-self-start"}>
                                        9-12%+ with higher volatility and focus on long-term capital appreciation.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default InvestmentStrategies;