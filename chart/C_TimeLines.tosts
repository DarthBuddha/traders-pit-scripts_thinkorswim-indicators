##################################
## Darth Buddha TOS ThinkScript ##
##################################
##HINT: <b>Name</b> Time Lines\n<b>Build</b> 10\n<b>Info</b> Plots Time lines.
##  START  CODE  ##
##Declarations
declare hide_on_daily;
##Def
def Period = GetAggregationPeriod();
##Plot
# 4:00am
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(0400) == 0, 
    "4am", Color.GRAY, Curve.SHORT_DASH);
# 5:00am
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(0500) == 0, 
    "5am", Color.GRAY, Curve.SHORT_DASH);
# 6:00am
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(0600) == 0, 
    "6am", Color.GRAY, Curve.SHORT_DASH);
# 7:00am
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(0700) == 0, 
    "7am", Color.GRAY, Curve.SHORT_DASH);
# 8:00am
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(0800) == 0, 
    "8am", Color.GRAY, Curve.SHORT_DASH);
# 9:00am
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(0900) == 0, 
    "9am", Color.GRAY, Curve.SHORT_DASH);
# 9:00am 
AddVerticalLine( 
    Period == AggregationPeriod.HOUR and SecondsTillTime(0900) == 0, 
    "Open", Color.GREEN, Curve.POINTS);
# 9:30am - Open
AddVerticalLine( 
    Period <= AggregationPeriod.FIFTEEN_MIN and SecondsTillTime(0930) == 0, 
    "Open", Color.GREEN, Curve.SHORT_DASH);
# 9:30am - Open
AddVerticalLine( 
    Period == AggregationPeriod.THIRTY_MIN and SecondsTillTime(0930) == 0, 
    "Open", Color.GREEN, Curve.POINTS);
# 9:35am
AddVerticalLine( 
    Period == AggregationPeriod.MIN and SecondsTillTime(0935) == 0, 
    "+5", Color.GRAY, Curve.POINTS);
# 9:40am
AddVerticalLine( 
    Period == AggregationPeriod.MIN and SecondsTillTime(0940) == 0, 
    "+10", Color.GRAY, Curve.POINTS);
# 9:45am
AddVerticalLine( 
    Period == AggregationPeriod.MIN and SecondsTillTime(0945) == 0, 
    "+15", Color.GRAY, Curve.POINTS);
# 10:00am
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1000) == 0, 
    "10am", Color.GRAY, Curve.SHORT_DASH);
# 10:30am
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1030) == 0, 
    "10:30am", Color.GRAY, Curve.SHORT_DASH);
# 11:00am
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1100) == 0, 
    "11am", Color.GRAY, Curve.SHORT_DASH);
# 11:30am
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1130) == 0, 
    "11:30am", Color.GRAY, Curve.SHORT_DASH);
# 12:00pm - Lunch
AddVerticalLine( 
    Period <= AggregationPeriod.FIFTEEN_MIN and SecondsTillTime(1200) == 0, 
    "12pm", Color.DARK_GREEN, Curve.SHORT_DASH);
# 12:30am
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1230) == 0, 
    "12:30am", Color.GRAY, Curve.SHORT_DASH);
# 1:00pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIFTEEN_MIN and SecondsTillTime(1300) == 0, 
    "1pm", Color.DARK_RED, Curve.SHORT_DASH);
# 1:30pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1330) == 0, 
    "1:30pm", Color.GRAY, Curve.SHORT_DASH);
# 2:00pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1400) == 0, 
    "2pm", Color.GRAY, Curve.SHORT_DASH);
# 2:30pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1430) == 0, 
    "2:30pm", Color.GRAY, Curve.SHORT_DASH);
# 3:00pm - Power Hour
AddVerticalLine( 
    Period <= AggregationPeriod.FIFTEEN_MIN and SecondsTillTime(1500) == 0, 
    "P/H", Color.YELLOW, Curve.SHORT_DASH);
# 3:30pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1530) == 0, 
    "3:30pm", Color.GRAY, Curve.SHORT_DASH);
# 3:50pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1550) == 0, 
    "-10", Color.GRAY, Curve.POINTS);
# 3:55pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1555) == 0, 
    "-5", Color.GRAY, Curve.POINTS);
# 4:00pm - Close
AddVerticalLine( 
    Period <= AggregationPeriod.FIFTEEN_MIN and SecondsTillTime(1600) == 0, 
    "Close", Color.RED, Curve.ShORT_DASH);
# 4:00pm - Close
AddVerticalLine( 
    Period > AggregationPeriod.FIFTEEN_MIN and SecondsTillTime(1600) == 0, 
    "Close", Color.RED, Curve.POINTS);
# 4:15pm - Close
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1615) == 0, 
    "Option Close", Color.RED, Curve.LONG_DASH);
# 5:00pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1700) == 0, 
    "5pm", Color.GRAY, Curve.SHORT_DASH);
# 6:00pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1800) == 0, 
    "6pm", Color.GRAY, Curve.SHORT_DASH);
# 7:00pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(1900) == 0, 
    "7pm", Color.GRAY, Curve.SHORT_DASH);
# 8:00pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(2000) == 0, 
    "8pm", Color.GRAY, Curve.SHORT_DASH);
# 9:00pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(2100) == 0, 
    "9pm", Color.GRAY, Curve.SHORT_DASH);
# 10:00pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(2200) == 0, 
    "10pm", Color.GRAY, Curve.SHORT_DASH);
# 11:00pm
AddVerticalLine( 
    Period <= AggregationPeriod.FIVE_MIN and SecondsTillTime(2300) == 0, 
    "11pm", Color.GRAY, Curve.SHORT_DASH);
##  END  CODE  ##