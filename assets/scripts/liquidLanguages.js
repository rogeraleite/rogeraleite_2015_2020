var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#4090db";
    config1.textColor = "#4090db";
    config1.waveTextColor = "#FFF";
    config1.waveColor = "#4090db";
    config1.circleThickness = 0.05;
    config1.textVertPosition = 0.9;
    config1.waveAnimateTime = 1000;
    config1.waveHeight = 0.15;



var gauge1 = loadLiquidFillGauge("fillgauge1", 96, config1);

var gauge2= loadLiquidFillGauge("fillgauge2", 90, config1);

var gauge3 = loadLiquidFillGauge("fillgauge3", 85, config1);


var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#FF7777";
    config2.textColor = "#FF4444";
    config2.waveTextColor = "#FFAAAA";
    config2.waveColor = "#FFDDDD";
    config2.circleThickness = 0.05;
    config2.textVertPosition = 0.2;
    config2.waveAnimateTime = 1000;
    config2.waveHeight = 0.3;

var gauge4 = loadLiquidFillGauge("fillgauge4", 10, config2);

