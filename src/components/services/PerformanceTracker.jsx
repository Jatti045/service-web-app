import {Card} from "@/components/ui/card.jsx";
import React, {useEffect, useRef} from "react";
import {createChart, AreaSeries, LineSeries} from 'lightweight-charts';
import nasdaqData from "@/data/formatted/qqq_invest_data.json"
import sp500Data from "@/data/formatted/spy_invest_data.json"
import baData from "@/data/formatted/iba_invest_data.json"

const PerformanceTracker = () => {
    const containerRef = useRef(null);

    const chartOptions = {
        layout: {
            textColor: 'black',
            background: { type: 'solid', color: 'white' },
            attributionLogo: false
        },
        handleScroll: {mouseWheel: false, pressedMouseMove: true, horzTouchDrag: true, vertTouchDrag: false},
        timeScale: {fixRightEdge: true, fixLeftEdge: true, rightBarStaysOnScroll: true, borderVisible: false},
        rightPriceScale: {borderVisible: false},
        handleScale: false,
        kineticScroll: {touch: false, mouse: false},
        autoSize: true,
        priceScale: {borderVisible: false},
        grid: {
            vertLines: { visible: false },
            horzLines: { visible: false }
        },
        crosshair: {
            vertLine: {visible: false, style: 2},
            horzLine: {style: 2},
        }

    };

    const seriesOptionsSp500 = {
        lineColor: '#1b2951',
        color: '#1b2951',
        topColor: '#1b2951',
        bottomColor: 'rgba(27, 41, 81, 0.3)',
        lineType: 2,
    };

    const seriesOptionsNasdaq = {
        lineColor: '#c41e3a',
        color: '#c41e3a',
        topColor: '#c41e3a',
        bottomColor: 'rgba(204, 0, 0, 0.3)',
        lineType: 2
    };

    const seriesOptionsBullseye = {
        lineColor: '#d4af37',
        color: '#d4af37',
        topColor: '#d4af37',
        bottomColor: 'rgba(212, 175,55, 0.3)',
        lineType: 2
    };


    useEffect(() => {
        const chart = createChart(containerRef.current, chartOptions);

        const seriesNasdaq = chart.addSeries(LineSeries, seriesOptionsNasdaq);
        const seriesSp500 = chart.addSeries(LineSeries, seriesOptionsSp500);
        const seriesBullseye = chart.addSeries(LineSeries, seriesOptionsBullseye);

        seriesNasdaq.setData(nasdaqData);
        seriesSp500.setData(sp500Data);
        seriesBullseye.setData(baData);

        chart.timeScale().fitContent();
        // Clean up on unmount
        return () => {
            chart.remove();
        };
    }, []);


    return (
        <div className="container text-center mb-8 px-4 sm:px-6 md:px-12 xl:px-32 py-12 sm:py-16 text-primary-navy">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-primary-navy mb-4">
                    We're Just That Good
                </h2>
                <p className="text-lg text-charcoal max-w-3xl mx-auto">
                    Here's how our portfolios compare to the market.
                </p>
            </div>
            <Card className={"px-9 py-8 text-center"}>
                <div>
                    <h1 className="text-3xl font-semibold leading-tight">Market Performance</h1>
                    <p className="mt-1 text-lg">Growth of a $10 000 investment since 2010</p>
                </div>
                <div ref={containerRef} className={"h-100 w-full bg-white"}></div>
                <ul className={"flex flex-row place-self-center gap-10 mt-4"}>
                    <li className={"flex items-center gap-2 font-bold"}><span className={"w-6 h-4 bg-gold inline-block"}/>Bullseye Portfolios</li>
                    <li className={"flex items-center gap-2"}><span className={"w-6 h-4 bg-primary-navy inline-block"}/>S&P 500</li>
                    <li className={"flex items-center gap-2"}><span className={"w-6 h-4 bg-primary-red inline-block"}/>NASDAQ</li>
                </ul>
            </Card>
        </div>
    )
}

export default PerformanceTracker;