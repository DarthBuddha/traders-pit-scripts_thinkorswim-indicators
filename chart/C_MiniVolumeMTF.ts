##################################
## Darth Buddha TOS ThinkScript ##
##################################
##HINT: <b>Name</b> Mini Volume.\n<b>Build</b> b16\n<b>Info</b> Mini MTF Bull/Bear Volume.
##  START  CODE  ##
##Global Color
DefineGlobalColor( "Bull", Color.GREEN);
DefineGlobalColor( "Bear", Color.RED);
DefineGlobalColor( "Neutral", Color.YELLOW);
##START
# 1 Minute
def CandleHigh_1min = high(period = "1 min");
def CandleClose_1min = close(period = "1 min");
def CandleLow_1min = low(period = "1 min");
def Vol_1min = volume(period = "1 min");
def Buying_1min = Vol_1min * (CandleClose_1min - CandleLow_1min) / (CandleHigh_1min - CandleLow_1min);
def Selling_1min = Vol_1min * (CandleHigh_1min - CandleClose_1min) / (CandleHigh_1min - CandleLow_1min);
def SellVolPercent_1min = Round((Selling_1min / Vol_1min) * 100, 0);
def BuyVolPercent_1min = Round((Buying_1min / Vol_1min) * 100, 0);
# 3 Minute
def CandleHigh_3min = high(period = "3 min");
def CandleClose_3min = close(period = "3 min");
def CandleLow_3min = low(period = "3 min");
def Vol_3min = volume(period = "3 min");
def Buying_3min = Vol_3min * (CandleClose_3min - CandleLow_3min) / (CandleHigh_3min - CandleLow_3min);
def Selling_3min = Vol_3min * (CandleHigh_3min - CandleClose_3min) / (CandleHigh_3min - CandleLow_3min);
def SellVolPercent_3min = Round((Selling_3min / Vol_3min) * 100, 0);
def BuyVolPercent_3min = Round((Buying_3min / Vol_3min) * 100, 0);
# 5 Minute
def CandleHigh_5min = high(period = "5 min");
def CandleClose_5min = close(period = "5 min");
def CandleLow_5min = low(period = "5 min");
def Vol_5min = volume(period = "5 min");
def Buying_5min = Vol_5min * (CandleClose_5min - CandleLow_5min) / (CandleHigh_5min - CandleLow_5min);
def Selling_5min = Vol_5min * (CandleHigh_5min - CandleClose_5min) / (CandleHigh_5min - CandleLow_5min);
def SellVolPercent_5min = Round((Selling_5min / Vol_5min) * 100, 0);
def BuyVolPercent_5min = Round((Buying_5min / Vol_5min) * 100, 0);
# 15 Minute
def CandleHigh_15min = high(period = "15 min");
def CandleClose_15min = close(period = "15 min");
def CandleLow_15min = low(period = "15 min");
def Vol_15min = volume(period = "15 min");
def Buying_15min = Vol_15min * (CandleClose_15min - CandleLow_15min) / (CandleHigh_15min - CandleLow_15min);
def Selling_15min = Vol_15min * (CandleHigh_15min - CandleClose_15min) / (CandleHigh_15min - CandleLow_15min);
def SellVolPercent_15min = Round((Selling_15min / Vol_15min) * 100, 0);
def BuyVolPercent_15min = Round((Buying_15min / Vol_15min) * 100, 0);
# 30 Minute
def CandleHigh_30min = high(period = "30 min");
def CandleClose_30min = close(period = "30 min");
def CandleLow_30min = low(period = "30 min");
def Vol_30min = volume(period = "30 min");
def Buying_30min = Vol_30min * (CandleClose_30min - CandleLow_30min) / (CandleHigh_30min - CandleLow_30min);
def Selling_30min = Vol_30min * (CandleHigh_30min - CandleClose_30min) / (CandleHigh_30min - CandleLow_30min);
def SellVolPercent_30min = Round((Selling_30min / Vol_30min) * 100, 0);
def BuyVolPercent_30min = Round((Buying_30min / Vol_30min) * 100, 0);
# 1 Hour
def CandleHigh_1hr = high(period = "1 hour");
def CandleClose_1hr = close(period = "1 hour");
def CandleLow_1hr = low(period = "1 hour");
def Vol_1hr = volume(period = "1 hour");
def Buying_1hr = Vol_1hr * (CandleClose_1hr - CandleLow_1hr) / (CandleHigh_1hr - CandleLow_1hr);
def Selling_1hr = Vol_1hr * (CandleHigh_1hr - CandleClose_1hr) / (CandleHigh_1hr - CandleLow_1hr);
def SellVolPercent_1hr = Round((Selling_1hr / Vol_1hr) * 100, 0);
def BuyVolPercent_1hr = Round((Buying_1hr / Vol_1hr) * 100, 0);
# 4 Hour
def CandleHigh_4hr = high(period = "4 hours");
def CandleClose_4hr = close(period = "4 hours");
def CandleLow_4hr = low(period = "4 hours");
def Vol_4hr = volume(period = "4 hours");
def Buying_4hr = Vol_4hr * (CandleClose_4hr - CandleLow_4hr) / (CandleHigh_4hr - CandleLow_4hr);
def Selling_4hr = Vol_4hr * (CandleHigh_4hr - CandleClose_4hr) / (CandleHigh_4hr - CandleLow_4hr);
def SellVolPercent_4hr = Round((Selling_4hr / Vol_4hr) * 100, 0);
def BuyVolPercent_4hr = Round((Buying_4hr / Vol_4hr) * 100, 0);
# Day
def CandleHigh_day = high(period = "day");
def CandleClose_day = close(period = "day");
def CandleLow_day = low(period = "day");
def Vol_day = volume(period = "day");
def Buying_day = Vol_day * (CandleClose_day - CandleLow_day) / (CandleHigh_day - CandleLow_day);
def Selling_day = Vol_day * (CandleHigh_day - CandleClose_day) / (CandleHigh_day - CandleLow_day);
def SellVolPercent_day = Round((Selling_day / Vol_day) * 100, 0);
def BuyVolPercent_day = Round((Buying_day / Vol_day) * 100, 0);
##Buy Sell Volume Label
AddLabel( yes, 
    " Buy " + BuyVolPercent_Day + "% ", 
    if SellVolPercent_Day < BuyVolPercent_Day then GlobalColor( "Bull")
    else if SellVolPercent_Day > BuyVolPercent_Day then Color.DARK_GREEN 
    else GlobalColor( "Neutral"));
AddLabel( yes, 
    " Daily Volume " + Vol_DAY + " ", 
    if SellVolPercent_Day > BuyVolPercent_Day then GlobalColor( "Bear")
    else if SellVolPercent_Day < BuyVolPercent_Day then GlobalColor( "Bull")
    else GlobalColor( "Neutral"));
AddLabel( yes, 
    " Sell " + SellVolPercent_Day + "% ", 
    if SellVolPercent_Day > BuyVolPercent_Day then GlobalColor( "Bear")
    else if SellVolPercent_Day < BuyVolPercent_Day then Color.DARK_RED 
    else GlobalColor( "Neutral"));
##Label
# 1 Minute
AddLabel(yes, 
    " 1m ", 
    (if SellVolPercent_1min > BuyVolPercent_1min 
    then GlobalColor( "Bear")
    else if SellVolPercent_1min < BuyVolPercent_1min 
    then GlobalColor( "Bull")
    else GlobalColor( "Neutral")));
# 3 Minute
AddLabel(yes, 
    " 3m ", 
    (if SellVolPercent_3min > BuyVolPercent_3min 
    then GlobalColor( "Bear")
    else if SellVolPercent_3min < BuyVolPercent_3min 
    then GlobalColor( "Bull")
    else GlobalColor( "Neutral")));
# 5 Minute
AddLabel(yes, 
    " 5m ", 
    (if SellVolPercent_5min > BuyVolPercent_5min 
    then GlobalColor( "Bear")
    else if SellVolPercent_5min < BuyVolPercent_5min 
    then GlobalColor( "Bull")
    else GlobalColor( "Neutral")));
# 15 Minute
AddLabel(yes, 
    " 15m ", 
    (if SellVolPercent_15min > BuyVolPercent_15min 
    then GlobalColor( "Bear")
    else if SellVolPercent_15min < BuyVolPercent_15min 
    then GlobalColor( "Bull")
    else GlobalColor( "Neutral")));
# 30 Minute
AddLabel(yes, 
    " 30m ", 
    (if SellVolPercent_30min > BuyVolPercent_30min 
    then GlobalColor( "Bear")
    else if SellVolPercent_30min < BuyVolPercent_30min 
    then GlobalColor( "Bull")
    else GlobalColor( "Neutral")));
# 1 Hour
AddLabel(yes, 
    " 1H ", 
    (if SellVolPercent_1hr > BuyVolPercent_1hr 
    then GlobalColor( "Bear")
    else if SellVolPercent_1hr < BuyVolPercent_1hr 
    then GlobalColor( "Bull")
    else GlobalColor( "Neutral")));
# 4 Hour
AddLabel(yes, 
    " 4H ", 
    (if SellVolPercent_4hr > BuyVolPercent_4hr 
    then GlobalColor( "Bear")
    else if SellVolPercent_4hr < BuyVolPercent_4hr 
    then GlobalColor( "Bull")
    else GlobalColor( "Neutral")));
# Day
AddLabel(yes, 
    " Day ", 
    (if SellVolPercent_day > BuyVolPercent_day 
    then GlobalColor( "Bear")
    else if SellVolPercent_day < BuyVolPercent_day 
    then GlobalColor( "Bull")
    else GlobalColor( "Neutral")));
##Alert
Alert( sellVolPercent_Day > 65, "Daily Sell Volume Over 65%", Alert.ONCE, Sound.Bell);
Alert( buyVolPercent_Day > 65, "Daily Buy Volume Over 65%", Alert.ONCE, Sound.Bell);
##  END  CODE  ##