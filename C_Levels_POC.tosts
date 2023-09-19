##################################
## Darth Buddha TOS ThinkScript ##
##################################
##HINT: <b>Name</b> Chart Levels - Point of Control.\n<b>Build</b> b24\n<b>Info</b> Plots Points of Control.
##  START  CODE  ##
declare upper;
declare hide_on_daily;
## Global Color ##
DefineGlobalColor("POC", Color.ORANGE);
DefineGlobalColor("POCloud", Color.WHITE);
## Input ##
input BarsBack = -10;      #HINT Default: -15 | Location of Chart Bubbles.
## START ##
def  H = high;
def  L = low;
def  C = close;
##
def  RegTradeHours = GetTime() > RegularTradingStart(GetYYYYMMDD()) and GetTime() < RegularTradingEnd(GetYYYYMMDD());
## Points Of Control ##
def  RoundingFunction  = .5;
def  ATR = HighestAll
     (if IsNaN(C[-1])
     then if Average(TrueRange(H, C, L), 4) < 2
     then Average(TrueRange(H, C, L), 4)
     else 2
     else Double.NaN);
def cond = RegTradeHours != RegTradeHours[1];
profile vol = VolumeProfile("startNewProfile" = cond, "onExpansion" = no, "numberOfProfiles" = 20, "pricePerRow" = PricePerRow.TICKSIZE, "value area percent" = 68.4);
def  poc =  if RegTradeHours then Round(vol.GetPointOfControl() / RoundingFunction, 0) * RoundingFunction else Double.NaN;
def  Poc1 = if !RegTradeHours and RegTradeHours[1]
     then poc[1]
     else Poc1[1];
plot pc =  HighestAll(if IsNaN(C[-1])
     then poc
     else Double.NaN);
     pc.SetStyle(Curve.LONG_DASH);
     pc.SetDefaultColor(GlobalColor("POC"));
     pc.SetLineWeight(1);
AddCloud(pc - ATR, pc + ATR, GlobalColor("POCloud"), GlobalColor("POCloud"));
plot pc1 = HighestAll(if IsNaN(C[-1])
     then Poc1
     else Double.NaN);
     pc1.SetStyle(Curve.SHORT_DASH);
     pc1.SetDefaultColor(GlobalColor("POC"));
     pc1.SetLineWeight(1);
AddCloud(pc1 - ATR, pc1 + ATR, GlobalColor("POCloud"), GlobalColor("POCloud"));
## ChartBubble ##
## Label ##
## Alerts ##
##  END  CODE  ##