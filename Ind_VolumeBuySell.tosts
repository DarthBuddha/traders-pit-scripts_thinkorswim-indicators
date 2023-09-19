##################################
## Darth Buddha TOS ThinkScript ##
##################################
##HINT: <b>Name</b> Volume Buy/Sell.\n<b>Build</b> b10\n<b>Info</b> Volume Buy/Sell.
##  START  CODE  ##
declare zerobase;
declare lower;
## Input ##
input Label = {"Hide", default "Show" };
input AvgLength = 21;    #HINT avgLength: How many candles to average. 
## Volume Buy/Sell
def  CandleHigh = high;
def  CandleClose = close;
def  CandleLow = low;
def  Vol = volume;
def  Buying = Vol * (CandleClose - CandleLow) / (CandleHigh - CandleLow);
def  Selling = Vol * (CandleHigh - CandleClose) / (CandleHigh - CandleLow);
def  SellVolPercent = Round((Selling / Vol) * 100, 0);
def  BuyVolPercent = Round((Buying / Vol) * 100, 0);
##Plot Average Volume
plot VolAvg = Average(Vol, AvgLength);
        VolAvg.HideTitle();
        VolAvg.HideBubble();
##Plot Sell Volume
Plot SellVol = Selling;
        SellVol.setPaintingStrategy(PaintingStrategy.Histogram);
        SellVol.SetDefaultColor(Color.Red);
        SellVol.HideTitle();
        SellVol.HideBubble();
        SellVol.SetLineWeight(5);
##Plot Buy Volume
Plot BuyVol = Vol;
        BuyVol.setPaintingStrategy(PaintingStrategy.Histogram);
        BuyVol.SetDefaultColor(Color.Green);
        BuyVol.HideTitle();
        BuyVol.HideBubble();
        BuyVol.SetLineWeight(5);
## Cloud ##
AddCloud( 0, VolAvg, Color.CYAN, Color.CYAN);
## Label ##
AddLabel(Label == Label."Show", 
        "Buy " + BuyVolPercent + "%", 
        (if SellVolPercent < BuyVolPercent 
        then Color.GREEN 
        else if SellVolPercent > BuyVolPercent 
        then Color.DARK_GREEN 
        else Color.YELLOW));
AddLabel(Label == Label."Show", 
        "Volume " + Vol, 
        (if SellVolPercent > BuyVolPercent 
        then Color.RED
        else if SellVolPercent < BuyVolPercent 
        then Color.GREEN
        else Color.YELLOW));
AddLabel(Label == Label."Show", 
        "Sell " + SellVolPercent + "%", 
        (if SellVolPercent > BuyVolPercent 
        then Color.RED
        else if SellVolPercent < BuyVolPercent 
        then Color.DARK_RED 
        else Color.YELLOW));
##  END  CODE  ##