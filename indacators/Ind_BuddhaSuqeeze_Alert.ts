##################################
## Darth Buddha TOS ThinkScript ##
##################################
##HINT: <b>Name</b> Buddha Squeeze Alert\n<b>Build</b> 10
##  START  CODE  ##
##Input
input Length = 21;            #HINT Length: Length for Avg True Range & Std. Dev Calcs
input nK = 1.5;               #HINT nK: Keltner Channel ATRs from Average
input nBB = 2.0;              #HINT nBB: Bollinger Band Std. Devs. from Average
input AlertLine = 1.0;        #HINT AlertLine: BBS_Index level at which to issue alerts

## Global Color
DefineGlobalColor("Bull", Color.DARK_GREEN);
DefineGlobalColor("Bearish Bull", Color.RED);
DefineGlobalColor("Bear", Color.DARK_RED);
DefineGlobalColor("Bullish Bear", Color.GREEN);
DefineGlobalColor("Alert", Color.LIGHT_ORANGE);
DefineGlobalColor("Index", Color.BLACK);

## Multi Time Frame Alert Script
def averageTpype = AverageType.SIMPLE;
def displace = 0;
def trueRangeAverageType = AverageType.SIMPLE;

#  1 min Alert
def One_MinPrice;
def One_MinATR;
def One_MinSDev;
def One_MinDenom;
def One_MinBBSInd;
def One_MinSqueeze;
def minAggregationPeriod;
if GetAggregationPeriod() <= AggregationPeriod.MIN {
    One_MinPrice = close(period = "1 Min");
    One_MinATR = Average(TrueRange(high (period = "1 Min"), close(period = "1 Min"), low(period = "1 Min")), Length);
    One_MinSDev = StDev(One_MinPrice, Length);
    One_MinDenom = (nK * One_MinATR);
    One_MinBBSInd = If (One_MinDenom <> 0, ((nBB * One_MinSDev) / One_MinDenom), 0);
    One_MinSqueeze = if One_MinBBSInd < AlertLine then 1 else 0;
    minAggregationPeriod = 1;
}
else {
    One_MinPrice = 0;
    One_MinATR = 0;
    One_MinSDev = 0;
    One_MinDenom = 0;
    One_MinBBSInd = 0;
    One_MinSqueeze = 0;
    minAggregationPeriod = 0;
}

#  3 min Alert
def Three_MinPrice;
def Three_MinATR;
def Three_MinSDev;
def Three_MinDenom;
def Three_MinBBSInd;
def Three_MinSqueeze;
def ThreeMinAggregationPeriod;
if GetAggregationPeriod() <= AggregationPeriod.THREE_MIN {
    Three_MinPrice = close(period = "3 Min");
    Three_MinATR = Average(TrueRange(high (period = "3 Min"), close(period = "3 Min"), low(period = "3 Min")), Length);
    Three_MinSDev = StDev(Three_MinPrice, Length);
    Three_MinDenom = (nK * Three_MinATR);
    Three_MinBBSInd = If (Three_MinDenom <> 0, ((nBB * Three_MinSDev) / Three_MinDenom), 0);
    Three_MinSqueeze = if Three_MinBBSInd < AlertLine then 1 else 0;
    ThreeMinAggregationPeriod = 1;
}
else {
    Three_MinPrice = 0;
    Three_MinATR = 0;
    Three_MinSDev = 0;
    Three_MinDenom = 0;
    Three_MinBBSInd = 0;
    Three_MinSqueeze = 0;
    ThreeMinAggregationPeriod = 0;
}

#  5 min Alert
def Five_MinPrice;
def Five_MinATR;
def Five_MinSDev;
def Five_MinDenom;
def Five_MinBBSInd;
def Five_MinSqueeze;
def FiveMinAggregationPeriod;
if GetAggregationPeriod() <= AggregationPeriod.FIVE_MIN {
    Five_MinPrice = close(period = "5 Min");
    Five_MinATR = Average(TrueRange(high (period = "5 Min"), close(period = "5 Min"), low(period = "5 Min")), Length);
    Five_MinSDev = StDev(Five_MinPrice, Length);
    Five_MinDenom = (nK * Five_MinATR);
    Five_MinBBSInd = If (Five_MinDenom <> 0, ((nBB * Five_MinSDev) / Five_MinDenom), 0);
    Five_MinSqueeze = if Five_MinBBSInd < AlertLine then 1 else 0;
    FiveMinAggregationPeriod = 1;
}
else {
    Five_MinPrice = 0;
    Five_MinATR = 0;
    Five_MinSDev = 0;
    Five_MinDenom = 0;
    Five_MinBBSInd = 0;
    Five_MinSqueeze = 0;
    FiveMinAggregationPeriod = 0;
}

#  15 min Alert
def Fifteen_MinPrice;
def Fifteen_MinATR;
def Fifteen_MinSDev;
def Fifteen_MinDenom;
def Fifteen_MinBBSInd;
def Fifteen_MinSqueeze;
def FifteenMinAggregationPeriod;
if GetAggregationPeriod() <= AggregationPeriod.FIFTEEN_MIN {
    Fifteen_MinPrice = close(period = "15 Min");
    Fifteen_MinATR = Average(TrueRange(high (period = "15 Min"), close(period = "15 Min"), low(period = "15 Min")), Length);
    Fifteen_MinSDev = StDev(Fifteen_MinPrice, Length);
    Fifteen_MinDenom = (nK * Fifteen_MinATR);
    Fifteen_MinBBSInd = If (Fifteen_MinDenom <> 0, ((nBB * Fifteen_MinSDev) / Fifteen_MinDenom), 0);
    Fifteen_MinSqueeze = if Fifteen_MinBBSInd < AlertLine then 1 else 0;
    FifteenMinAggregationPeriod = 1;
}
else {
    Fifteen_MinPrice = 0;
    Fifteen_MinATR = 0;
    Fifteen_MinSDev = 0;
    Fifteen_MinDenom = 0;
    Fifteen_MinBBSInd = 0;
    Fifteen_MinSqueeze = 0;
    FifteenMinAggregationPeriod = 0;
}

#  30 min Alert
def Thirty_MinPrice;
def Thirty_MinATR;
def Thirty_MinSDev;
def Thirty_MinDenom;
def Thirty_MinBBSInd;
def Thirty_MinSqueeze;
def ThirtyMinAggregationPeriod;
if GetAggregationPeriod() <= AggregationPeriod.THIRTY_MIN {
    Thirty_MinPrice = close(period = "30 Min");
    Thirty_MinATR = Average(TrueRange(high (period = "30 Min"), close(period = "30 Min"), low(period = "30 Min")), Length);
    Thirty_MinSDev = StDev(Thirty_MinPrice, Length);
    Thirty_MinDenom = (nK * Thirty_MinATR);
    Thirty_MinBBSInd = If (Thirty_MinDenom <> 0, ((nBB * Thirty_MinSDev) / Thirty_MinDenom), 0);
    Thirty_MinSqueeze = if Thirty_MinBBSInd < AlertLine then 1 else 0;
    ThirtyMinAggregationPeriod = 1;
}
else {
    Thirty_MinPrice = 0;
    Thirty_MinATR = 0;
    Thirty_MinSDev = 0;
    Thirty_MinDenom = 0;
    Thirty_MinBBSInd = 0;
    Thirty_MinSqueeze = 0;
    ThirtyMinAggregationPeriod = 0;
}

#  1 hr Alert
def hourPrice;
def hourATR;
def hourSDev;
def hourDenom;
def hourBBSInd;
def hourSqueeze;
def HourMinAggregationPeriod;
if GetAggregationPeriod() <= AggregationPeriod.HOUR {
    hourPrice = close(period = "1 Hour");
    hourATR = Average(TrueRange(high (period = "1 Hour"), close(period = "1 Hour"), low(period = "1 Hour")), Length);
    hourSDev = StDev(hourPrice, Length);
    hourDenom = (nK * hourATR);
    hourBBSInd = If (hourDenom <> 0, ((nBB * hourSDev) / hourDenom), 0);
    hourSqueeze = if hourBBSInd < AlertLine then 1 else 0;
    HourMinAggregationPeriod = 1;
}
else {
    hourPrice = 0;
    hourATR = 0;
    hourSDev = 0;
    hourDenom = 0;
    hourBBSInd = 0;
    hourSqueeze = 0;
    HourMinAggregationPeriod = 0;
}

#  4 hr Alert
def four_hoursPrice;
def four_hoursATR;
def four_hoursSDev;
def four_hoursDenom;
def four_hoursBBSInd;
def four_hoursSqueeze;
def FourHourMinAggregationPeriod;
if GetAggregationPeriod() <= AggregationPeriod.FOUR_HOURS {
    four_hoursPrice = close(period = "4 Hours");
    four_hoursATR = Average(TrueRange(high (period = "4 Hours"), close(period = "4 Hours"), low(period = "4 Hours")), Length);
    four_hoursSDev = StDev(four_hoursPrice, Length);
    four_hoursDenom = (nK * four_hoursATR);
    four_hoursBBSInd = If (four_hoursDenom <> 0, ((nBB * four_hoursSDev) / four_hoursDenom), 0);
    four_hoursSqueeze = if four_hoursBBSInd < AlertLine then 1 else 0;
    FourHourMinAggregationPeriod = 1;
}
else {
    four_hoursPrice = 0;
    four_hoursATR = 0;
    four_hoursSDev = 0;
    four_hoursDenom = 0;
    four_hoursBBSInd = 0;
    four_hoursSqueeze = 0;
    FourHourMinAggregationPeriod = 0;
}

#  Day Alert
def dayPrice;
def dayATR;
def daySDev;
def dayDenom;
def dayBBSInd;
def daySqueeze;
def DayMinAggregationPeriod;
if GetAggregationPeriod() <= AggregationPeriod.DAY {
    dayPrice = close(period = "day");
    dayATR = Average(TrueRange(high (period = "day"), close(period = "day"), low(period = "day")), Length);
    daySDev = StDev(dayPrice, Length);
    dayDenom = (nK * dayATR);
    dayBBSInd = If (dayDenom <> 0, ((nBB * daySDev) / dayDenom), 0);
    daySqueeze = if dayBBSInd < AlertLine then 1 else 0;
    DayMinAggregationPeriod = 1;
}
else {
    dayPrice = 0;
    dayATR = 0;
    daySDev = 0;
    dayDenom = 0;
    dayBBSInd = 0;
    daySqueeze = 0;
    DayMinAggregationPeriod = 0;
}

## Label
AddLabel(One_MinSqueeze and minAggregationPeriod, " 1 Min", GlobalColor("Alert"));
AddLabel(!One_MinSqueeze and minAggregationPeriod, " 1 Min", GlobalColor("Index"));
AddLabel(Three_MinSqueeze and ThreeMinAggregationPeriod, " 3 Min", GlobalColor("Alert"));
AddLabel(!Three_MinSqueeze and ThreeMinAggregationPeriod, " 3 Min", GlobalColor("Index"));
AddLabel(Five_MinSqueeze and FiveMinAggregationPeriod, " 5 Min", GlobalColor("Alert"));
AddLabel(!Five_MinSqueeze and FiveMinAggregationPeriod, " 5 Min", GlobalColor("Index"));
AddLabel(Fifteen_MinSqueeze and FifteenMinAggregationPeriod, "15 Min", GlobalColor("Alert"));
AddLabel(!Fifteen_MinSqueeze and FifteenMinAggregationPeriod, "15 Min", GlobalColor("Index"));
AddLabel(Thirty_MinSqueeze and ThirtyMinAggregationPeriod, "30 Min", GlobalColor("Alert"));
AddLabel(!Thirty_MinSqueeze and ThirtyMinAggregationPeriod, "30 Min", GlobalColor("Index"));
AddLabel(hourSqueeze and HourMinAggregationPeriod, " 1 Hour", GlobalColor("Alert"));
AddLabel(!hourSqueeze and HourMinAggregationPeriod, " 1 Hour", GlobalColor("Index"));
AddLabel(four_hoursSqueeze and FourHourMinAggregationPeriod, " 4 Hour", GlobalColor("Alert"));
AddLabel(!four_hoursSqueeze and FourHourMinAggregationPeriod, " 4 Hour", GlobalColor("Index"));
AddLabel(daySqueeze and DayMinAggregationPeriod, "Day", GlobalColor("Alert"));
AddLabel(!daySqueeze and DayMinAggregationPeriod, "Day", GlobalColor("Index"));
##  END  CODE  ##