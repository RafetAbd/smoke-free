import React from "react";
import { VictoryPie, VictoryTheme, VictoryLabel } from "victory";
import './Health.css';

const Health = (props) => {
    const days = props.days;

    const pulseRate = () => {
        let percentage = Math.floor(days / 1 * 100);
        if (percentage >= 100) {
            percentage = 100;
        };
        let data = [
            { x: '', y: 100 - percentage },
            { x: '', y: percentage, label: `Pulse Rate improvment ${percentage}%` },
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

    const lungCancer = () => {
        let percentage = Math.floor(days / 2765 * 100);
        if (percentage >= 100) {
            percentage = 100;
        };
        let data = [
            { x: `${100 - percentage}% remaining`, y: 100 - percentage },
            { x: "0-30", y: percentage, label: `reduce risk of heart disease ${percentage}%` },
        ];
        return data;
    }


    const heartAttack = () => {
        let percentage = Math.floor(days / 4590 * 100);
        if (percentage >= 100) {
            percentage = 100;
        };
        let data = [
            { x: `${100 - percentage}% remaining`, y: 100 - percentage },
            { x: "0-30", y: percentage, label: `reduce risk of heart attack ${percentage}%` },
        ];
        return data;
    }


    return (
        <div id="health" className="health-main-div">
                <div>
                    <svg viewBox="0 0 200 200">
                        <text x={100} y={100} textAnchor="middle">
                            {pulseRate()[1].y}%
                        </text>
                        <VictoryPie
                            standalone={false}
                            padAngle={0}
                            labelComponent={<span />}
                            innerRadius={70}
                            width={200} height={200}
                            colorScale={["#e3dede", "rgb(0, 157, 255)"]}
                            data={pulseRate()}
                            animate={{ duration: 2000 }}
                        />
                    </svg>
                    <p> pulse rate return to normal </p>
                </div>
                <div>
                    <svg viewBox="0 0 200 200">
                        <text x={100} y={100} textAnchor="middle">
                            {oxygenLevel()[1].y}%
                        </text>
                        <VictoryPie
                            standalone={false}
                            padAngle={0}
                            labelComponent={<span />}
                            innerRadius={70}
                            width={200} height={200}
                            colorScale={["#e3dede", "rgb(0, 157, 255)" ]}
                            data={oxygenLevel()}
                            animate={{ duration: 2000 }}
                        />
                    </svg>
                    <p> oxygen Level going back to normal</p>
                </div>
                <div>
                    <svg viewBox="0 0 200 200">
                        <text x={100} y={100} textAnchor="middle">
                            {carbonMonoxideLevel()[1].y}%
                        </text>
                        <VictoryPie
                            standalone={false}
                            padAngle={0}
                            labelComponent={<span />}
                            innerRadius={70}
                            width={200} height={200}
                            colorScale={["#e3dede", "rgb(0, 157, 255)" ]}
                            data={carbonMonoxideLevel()}
                            animate={{ duration: 2000 }}
                        />
                    </svg>
                    <p> CarbonMonoxide Level going back to normal</p>
                </div>
                <div>
                    <svg viewBox="0 0 200 200">
                        <text x={100} y={100} textAnchor="middle">
                            {nicotinexpelled()[1].y}%
                        </text>
                        <VictoryPie
                            standalone={false}
                            padAngle={0}
                            labelComponent={<span />}
                            innerRadius={70}
                            width={200} height={200}
                            colorScale={["#e3dede", "rgb(0, 157, 255)" ]}
                            data={nicotinexpelled()}
                            animate={{ duration: 2000 }}
                        />
                    </svg>
                    <p> Nicotin expelled from your body</p>
                </div>
                <div>
                    <svg viewBox="0 0 200 200">
                        <text x={100} y={100} textAnchor="middle">
                            {tasteAndSmell()[1].y}%
                        </text>
                        <VictoryPie
                            standalone={false}
                            padAngle={0}
                            labelComponent={<span />}
                            innerRadius={70}
                            width={200} height={200}
                            colorScale={["#e3dede", "rgb(0, 157, 255)" ]}
                            data={tasteAndSmell()}
                            animate={{ duration: 2000 }}
                        />
                    </svg>
                    <p> Taste And Smell return back to normal</p>
                </div>
                <div>
                    <svg viewBox="0 0 200 200">
                        <text x={100} y={100} textAnchor="middle">
                            {circulation()[1].y}%
                        </text>
                        <VictoryPie
                            standalone={false}
                            padAngle={0}
                            labelComponent={<span />}
                            innerRadius={70}
                            width={200} height={200}
                            colorScale={["#e3dede", "rgb(0, 157, 255)" ]}
                            data={circulation()}
                            animate={{ duration: 2000 }}
                        />
                    </svg>
                    <p> Circulation improvment</p>
                </div>
                <div>
                    <svg viewBox="0 0 200 200">
                        <text x={100} y={100} textAnchor="middle">
                            {heartDisease()[1].y}%
                        </text>
                        <VictoryPie
                            standalone={false}
                            padAngle={0}
                            labelComponent={<span />}
                            innerRadius={70}
                            width={200} height={200}
                            colorScale={["#e3dede", "rgb(0, 157, 255)"]}
                            data={heartDisease()}
                            animate={{ duration: 2000 }}
                        />
                    </svg>
                    <p> reduce risk of heart disease </p>
                </div>
                <div>
                    <svg viewBox="0 0 200 200">
                        <text x={100} y={100} textAnchor="middle">
                            {lungCancer()[1].y}%
                        </text>
                        <VictoryPie
                            standalone={false}
                            padAngle={0}
                            labelComponent={<span />}
                            innerRadius={70}
                            width={200} height={200}
                            colorScale={["#e3dede", "rgb(0, 157, 255)"]}
                            data={lungCancer()}
                            animate={{ duration: 2000 }}
                        />
                    </svg>
                    <p> reduce risk of lung cancer </p>
                </div>
                <div>
                    <svg viewBox="0 0 200 200">
                        <text x={100} y={100} textAnchor="middle">
                            {heartAttack()[1].y}%
                        </text>
                        <VictoryPie
                            standalone={false}
                            padAngle={0}
                            labelComponent={<span />}
                            innerRadius={70}
                            width={200} height={200}
                            colorScale={["#e3dede", "rgb(0, 157, 255)"]}
                            data={heartAttack()}
                            animate={{ duration: 2000 }}
                        />
                    </svg>
                    <p> reduce risk of heart attack </p>
                </div>
        </div>
    );
}

export default Health;