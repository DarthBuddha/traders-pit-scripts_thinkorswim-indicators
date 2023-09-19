##################################
## Darth Buddha TOS ThinkScript ##
##################################
##HINT: <b>Name</b> Chart Labels.\n<b>Build</b> 10\n<b>Info</b> Time Frame, Symbol, Mark Change.
##  START  CODE  ##
## Input ##
input  LabelTimeFrame = yes;     #HINT Default: Yes | Turn
input  LabelSymbol = yes;        #HINT Default: Yes | Turn
input  LabelChange = yes;        #HINT Default: Yes | Turn
## Time Frame Label
def AggPeriod = GetAggregationPeriod();
AddLabel(LabelTimeFrame, Concat(" ",
if AggPeriod == AggregationPeriod.MIN then "1m" 
        else if AggPeriod == AggregationPeriod.THREE_MIN then "3m"
        else if AggPeriod == AggregationPeriod.FIVE_MIN then "5m"
        else if AggPeriod == AggregationPeriod.FIFTEEN_MIN then "15m"
        else if AggPeriod == AggregationPeriod.THIRTY_MIN then "30m" 
        else if AggPeriod == AggregationPeriod.HOUR then "1h"
        else if AggPeriod == AggregationPeriod.FOUR_HOURS then "4h"
        else if AggPeriod == AggregationPeriod.DAY then "Day"
        else if AggPeriod == AggregationPeriod.WEEK then "Week"
        else if AggPeriod == AggregationPeriod.MONTH then "Month"
        else if AggPeriod == AggregationPeriod.YEAR then "Year" 
        else "Use time charts only"), Color.YELLOW);
## Symbol Label
def bid = close(priceType = "Bid");
def ask = close(priceType = "Ask");
def last = close(priceType = "Last");
def  AP = AggregationPeriod.DAY;
def  MarkChange = (close - close(period = AP)[1]) / close(period = AP)[1];
##
AddLabel(LabelSymbol,
        if GetUnderlyingSymbol() == GetSymbol()
        then " " + GetSymbol() + " "
        else
                Concat ( GetUnderlyingSymbol (), 
                Concat ( " $",
                Concat ( GetStrike(),
                Concat ( if IsPut () == 0 then " Call " else " Put ",
                Concat ( GetDaysToExpiration() - 1, " DTE" ))))),
        if MarkChange > 0
        then Color.GREEN
        else if MarkChange < 0
        then Color.RED
        else Color.YELLOW);
## Mark Change 
AddLabel(LabelChange, " " + AsPercent(MarkChange) + " ",
        if MarkChange > 0
        then Color.GREEN
        else if MarkChange < 0
        then Color.RED
        else Color.YELLOW);
##  END  CODE  ##