##################################
## Darth Buddha TOS ThinkScript ##
##################################
##HINT: <b>Name</b> Buddha Squeeze Alert\n<b>Build</b> 10\n<b>Info</b> TTM Squeeze Alert Labels.
##  START  CODE  ##
##Declarations
declare lower;
## Input
input Price = Close;          #HINT Price: type of price to use
input Length = 21;            #HINT Length: Length for Avg True Range & Std. Dev Calcs
input minPriceMove = 1;       #HINT minPriceMove: for scaling
input nK = 1.5;               #HINT nK: Keltner Channel ATRs from Average
input nBB = 2.0;              #HINT nBB: Bollinger Band Std. Devs. from Average
input AlertLine = 1.0;        #HINT AlertLine: BBS_Index level at which to issue alerts
input priceIncrement = 0.01;  #HINT priceIncrement: Price Increment
## Global Color
DefineGlobalColor("Bull", Color.DARK_GREEN);
DefineGlobalColor("Bearish Bull", Color.RED);
DefineGlobalColor("Bear", Color.DARK_RED);
DefineGlobalColor("Bullish Bear", Color.GREEN);
DefineGlobalColor("Alert", Color.LIGHT_ORANGE);
DefineGlobalColor("Index", Color.BLACK);
## TTM Calculations
#  scaling factor :
def LHMult = If (priceIncrement <> 0, (minPriceMove / priceIncrement), 0);
#  Average True Range
def ATR = Average(TrueRange(high,  close,  low),  Length);
#  Standard Deviation
def SDev = StDev(Price, Length);
#  Calculate Bollinger Band Squeeze Indicator For Alert
def Denom = (nK * ATR);
def BBS_Ind = If (Denom <> 0, ((nBB * SDev) / Denom), 0);
## Plots Index and Alert Line
plot Squeeze_Alert = 0;
Squeeze_Alert.AssignValueColor(if BBS_Ind < AlertLine then GlobalColor("Alert") else GlobalColor("Index"));
Squeeze_Alert.SetPaintingStrategy(PaintingStrategy.POINTS);
Squeeze_Alert.SetLineWeight(1);
# Plots delta of price from Donchian mid line
def LinearRegValue = Inertia(Price - ((Highest(high, Length) + Lowest(low, Length)) / 2 + ExpAverage(close, Length)) / 2, Length);
## Plots Bullish Histogram Waves
def LRVGreens = If (LinearRegValue >= 0, LinearRegValue, 0);
plot BullishWave = LRVGreens * LHMult;
BullishWave.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
# Histogram Colors
BullishWave.AssignValueColor(if LRVGreens > LRVGreens[1] then GlobalColor("Bull") else GlobalColor("Bearish Bull"));
BullishWave.SetLineWeight(2);
## Plots Bearish Histogram Waves
def LRVReds = If (LinearRegValue < 0, LinearRegValue, 0);
plot BearishWave = LRVReds * LHMult;
BearishWave.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
# Histogram Colors
BearishWave.AssignValueColor(if LRVReds < LRVReds[1] then GlobalColor("Bear") else GlobalColor("Bullish Bear"));
BearishWave.SetLineWeight(2);
## Default Color
Squeeze_Alert.SetDefaultColor(GlobalColor("Index"));
BearishWave.SetDefaultColor(Color.RED);
BullishWave.SetDefaultColor(Color.GREEN);
## Label
AddLabel(BullishWave > 0, 
    if BullishWave > BullishWave[1] 
    then "Bullish"
    else "Bearish Bull", 
    if BullishWave > BullishWave[1] 
    then GlobalColor("Bull") 
    else GlobalColor("Bearish Bull"));
AddLabel(BearishWave < 0, 
    if BearishWave > BearishWave[1] 
    then "Bullish Bear"
    else "Bearish", 
    if BearishWave > BearishWave[1] 
    then GlobalColor("Bullish Bear") 
    else GlobalColor("Bear"));
AddLabel(BBS_Ind < AlertLine, "Squeeze", GlobalColor("Alert"));
##  END  CODE  ##