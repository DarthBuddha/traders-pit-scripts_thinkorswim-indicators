##################################
## Darth Buddha TOS ThinkScript ##
##################################
##HINT: <b>Name</b> Chart Levels.\n<b>Build</b> b24\n<b>Info</b> Plots Daily Open. Regular Highs and Lows. Overnight Highs and Lows. Yesterday High and Low.
##  START  CODE  ##
declare upper;
declare hide_on_daily;
## Global Color ##
DefineGlobalColor("Open", Color.LIGHT_ORANGE);
DefineGlobalColor("ONH", Color.LIGHT_GREEN);
DefineGlobalColor("ONL", Color.LIGHT_RED);
DefineGlobalColor("HOD", Color.GREEN);
DefineGlobalColor("LOD", Color.RED);
DefineGlobalColor("YHOD", Color.DARK_GREEN);
DefineGlobalColor("YLOD", Color.DARK_RED);
## Input ##
input Alerts = {"Hide", default "Show" };    #HINT Default: Show | Show/Hide Alerts.
input BarsBack = -10;      #HINT Default: -15 | Location of Chart Bubbles.
## START ##
def O = open;
def H = high;
def L = low;
def C = close;
##
def Today = GetDay() == GetLastDay();
def Yesterday = GetDay() == GetLastDay() - 1;
def ThisWeek = GetWeek() == GetLastWeek();
def LastWeek = GetWeek() == GetLastWeek() - 1;
##
def GlobeX = GetTime() < RegularTradingStart(GetYYYYMMDD());
def RegTradeHours = GetTime() > RegularTradingStart(GetYYYYMMDD()) and GetTime() < RegularTradingEnd(GetYYYYMMDD());
##
def Bar = BarNumber();
def EndBar = if !IsNaN(C) and IsNaN(C[-1]) then Bar else EndBar[1];
def LastBar = EndBar;
##
def AP = AggregationPeriod.DAY;
def ODay = open(period = AP);
def CDay = close(period = AP);
## Daily Open
def ODayPrev = open(period = AP)[-1];
def DayOpen = if !IsNaN(ODayPrev)
    then Double.NaN
    else ODAY;
def DayOpenBar = if ODay == DayOpen
    then Bar
    else Double.NaN;
def DailyOpen = if BarNumber() == DayOpenBar
    then DayOpen
    else DailyOpen[1];
plot OP = if DailyOpen > 0
    then DailyOpen
    else Double.NaN;
    OP.SetPaintingStrategy(PaintingStrategy.DASHES);
    OP.SetDefaultColor(GlobalColor("Open"));
## Over Night High ##
def ONhigh = if GlobeX and !GlobeX[1]
    then H
    else if GlobeX and H > ONhigh[1]
    then H
    else ONhigh[1];
def ONhighBar = if GlobeX and H == ONhigh
    then Bar
    else Double.NaN;
def OverNightHigh = if BarNumber() == HighestAll( ONhighBar) 
    then ONhigh
    else OverNightHigh[1];
plot ONH = if OverNightHigh > 0
    then OverNightHigh
    else Double.NaN;
ONH.SetPaintingStrategy(PaintingStrategy.DASHES);
ONH.SetDefaultColor(GlobalColor("ONH"));
## Over Night Low ##
def ONlow = if GlobeX and !GlobeX[1]
    then L
    else if GlobeX and L < ONlow[1]
    then L
    else ONlow[1];
def ONlowBar = if GlobeX and L == ONlow
    then Bar
    else Double.NaN;
def OverNightLow = if BarNumber() == HighestAll( ONlowBar) 
    then ONlow
    else OverNightLow[1];
plot ONL = if OverNightLow > 0
    then OverNightLow
    else Double.NaN;
ONL.SetPaintingStrategy(PaintingStrategy.DASHES);
ONL.SetDefaultColor(GlobalColor("ONL"));
## High of Day ##
def DayHigh = if RegTradeHours and !RegTradeHours[1] and Today
    then H
    else if RegTradeHours and H > DayHigh[1] and Today
    then H
    else DayHigh[1];
def DayHighBar = if RegTradeHours and H == DayHigh and Today
    then Bar
    else Double.NaN;
def DailyHigh = if BarNumber() == HighestAll( DayHighBar) and Today
    then DayHigh
    else DailyHigh[1];
plot HOD = if DailyHigh > 0
    then DailyHigh
    else Double.NaN;
HOD.SetPaintingStrategy(PaintingStrategy.DASHES);
HOD.SetDefaultColor(GlobalColor("HOD"));
## Low of Day ##
def DayLow = if RegTradeHours and !RegTradeHours[1] and Today
    then L
    else if RegTradeHours and L < DayLow[1] and Today
    then L
    else DayLow[1];
def DayLowBar = if RegTradeHours and L == DayLow and Today
    then Bar
    else Double.NaN;
def DailyLow = if BarNumber() == HighestAll( DayLowBar) and Today
    then DayLow
    else DailyLow[1];
plot LOD = if DailyLow > 0
    then DailyLow
    else Double.NaN;
LOD.SetPaintingStrategy(PaintingStrategy.DASHES);
LOD.SetDefaultColor(GlobalColor("LOD"));
## Yesterday HOD ##
def YDayHigh = if RegTradeHours and !RegTradeHours[1] and Yesterday
    then H
    else if RegTradeHours and H > YDayHigh[1] and Yesterday
    then H
    else YDayHigh[1];
def YDayHighBar = if RegTradeHours and H == YDayHigh and Yesterday
    then Bar
    else Double.NaN;
def YDailyHigh = if BarNumber() == HighestAll(YDayHighBar) and Yesterday
    then YDayHigh
    else YDailyHigh[1];
plot YHOD = if YDailyHigh > 0
    then YDailyHigh
    else Double.NaN;
YHOD.SetPaintingStrategy(PaintingStrategy.DASHES);
YHOD.SetDefaultColor(GlobalColor("YHOD"));
## Yesterdays LOD ##
def YDayLow = if RegTradeHours and !RegTradeHours[1] and Yesterday
    then L
    else if RegTradeHours and L < YDayLow[1] and Yesterday
    then L
    else YDayLow[1];
def YDayLowBar = if RegTradeHours and L == YDayLow and Yesterday
    then Bar
    else Double.NaN;
def YDailyLow = if BarNumber() == HighestAll(YDayLowBar) and Yesterday
    then YDayLow
    else YDailyLow[1];
plot YLOD = if YDailyLow > 0
    then YDailyLow
    else Double.NaN;
YLOD.SetPaintingStrategy(PaintingStrategy.DASHES);
YLOD.SetDefaultColor(GlobalColor("YLOD"));
## ChartBubble ##
AddChartBubble(Bar == (LastBar - BarsBack), OP, "Open", GlobalColor("Open"), 0);
AddChartBubble(Bar == (LastBar - BarsBack), ONH, "ONH", GlobalColor("ONH"), 1);
AddChartBubble(Bar == (LastBar - BarsBack), ONL, "ONL", GlobalColor("ONL"), 0);
AddChartBubble(Bar == (LastBar - BarsBack), HOD, "HOD", GlobalColor("HOD"), 1);
AddChartBubble(Bar == (LastBar - BarsBack), LOD, "LOD", GlobalColor("LOD"), 0);
AddChartBubble(Bar == (LastBar - BarsBack), YHOD, "yHoD", GlobalColor("YHOD"), 1);
AddChartBubble(Bar == (LastBar - BarsBack), YLOD, "yLoD", GlobalColor("YLOD"), 0);
## Label ##
AddLabel(yes, "ON = " + AsDollars( ONH - ONL),
    if CDay > ODay
    then Color.GREEN
    else if CDay < ODay
    then Color.RED
    else Color.YELLOW);
AddLabel(yes, "RTH = " + AsDollars(HOD - LOD),
    if CDay > ODay and RegTradeHours
    then Color.GREEN
    else if CDay < ODay and RegTradeHours
    then Color.RED
    else Color.YELLOW);
## Alerts ##
Alert(Alerts == Alerts."Show" and (C crosses above ONH), "Price Above ONH", Alert.BAR, Sound.Bell);
Alert(Alerts == Alerts."Show" and (C crosses above HOD), "New High of Day", Alert.BAR, Sound.Bell);
Alert(Alerts == Alerts."Show" and (C crosses above OP), "Price Above Open", Alert.BAR, Sound.Bell);
Alert(Alerts == Alerts."Show" and (C crosses below OP), "Price Below Open", Alert.BAR, Sound.Bell);
Alert(Alerts == Alerts."Show" and (C crosses below LOD), "New Low of Day", Alert.BAR, Sound.Bell);
Alert(Alerts == Alerts."Show" and (C crosses below ONL), "Price Below ONL", Alert.BAR, Sound.Bell);
##  END  CODE  ##