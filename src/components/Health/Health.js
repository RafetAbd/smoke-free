import React from "react";
import { VictoryPie } from "victory";

const Health = (props) => {
    console.log(props);
    const days = props.days;

    const pulseRate = () => {
        let percentage = Math.floor(days / 1 * 100);
        if (percentage >= 100) {
            percentage = 100;
        };
        let data = [
            { x: `${100 - percentage}% remaining`, y: 100 - percentage },
            { x: "0-1", y: percentage, label: `Pulse Rate improvment ${percentage}%` },
        ];
        return data;
    }

    const oxygenLevel = () => {
        let percentage = Math.floor(days / 1 * 100);
        if (percentage >= 100) {
            percentage = 100;
        };
        let data = [
            { x: `${100 - percentage}% remaining`, y: 100 - percentage },
            { x: "0-1", y: percentage, label: `Oxygen Level improvment ${percentage}%` },
        ];
        return data;
    }

    const carbonMonoxideLevel = () => {
        let percentage = Math.floor(days / 1 * 100);
        if (percentage >= 100) {
            percentage = 100;
        };
        let data = [
            { x: `${100 - percentage}% remaining`, y: 100 - percentage },
            { x: "0-1", y: percentage, label: `Carbon Monoxide Level improvment ${percentage}%` },
        ];
        return data;
    }

    const nicotinexpelled = () => {
        let percentage = Math.floor(days / 3 * 100);
        if (percentage >= 100) {
            percentage = 100;
        };
        let data = [
            { x: `${100 - percentage}% remaining`, y: 100 - percentage },
            { x: "0-3", y: percentage, label: `Nicotine Expelled Level improvment ${percentage}%` },
        ];
        return data;
    }

    const tasteAndSmell = () => {
        let percentage = Math.floor(days / 2 * 100);
        if (percentage >= 100) {
            percentage = 100;
        };
        let data = [
            { x: `${100 - percentage}% remaining`, y: 100 - percentage },
            { x: "0-2", y: percentage, label: `Taste And Smell improvment ${percentage}%` },
        ];
        return data;
    }

    const circulation = () => {
        let percentage = Math.floor(days / 30 * 100);
        if (percentage >= 100) {
            percentage = 100;
        };
        let data = [
            { x: `${100 - percentage}% remaining`, y: 100 - percentage },
            { x: "0-30", y: percentage, label: `Circulation improvment ${percentage}%` },
        ];
        return data;
    }

    const heartDisease = () => {
        let percentage = Math.floor(days / 365 * 100);
        if (percentage >= 100) {
            percentage = 100;
        };
        let data = [
            { x: `${100 - percentage}% remaining`, y: 100 - percentage },
            { x: "0-30", y: percentage, label: `reduce risk of heart disease ${percentage}%` },
        ];
        return data;
    }

    return (
        <div>
            <h1>Health component</h1>
            <h1>Your Health Improvment</h1>
            <div>
                <VictoryPie colorScale={["tomato", "cyan"]} data={pulseRate()} animate={{ duration: 2000 }} />
                <VictoryPie colorScale={["tomato", "cyan"]} data={oxygenLevel()} animate={{ duration: 2000 }} />
                <VictoryPie colorScale={["tomato", "cyan"]} data={carbonMonoxideLevel()} animate={{ duration: 2000 }} />
                <VictoryPie colorScale={["tomato", "cyan"]} data={nicotinexpelled()} animate={{ duration: 2000 }} />
                <VictoryPie colorScale={["tomato", "cyan"]} data={tasteAndSmell()} animate={{ duration: 2000 }} />
                <VictoryPie colorScale={["tomato", "cyan"]} data={circulation()} animate={{ duration: 2000 }} />
                <VictoryPie colorScale={["tomato", "cyan"]} data={heartDisease()} animate={{ duration: 2000 }} />
            </div>
        </div>
    );
}

export default Health;