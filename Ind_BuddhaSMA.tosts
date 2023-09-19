##################################
## Darth Buddha TOS ThinkScript ##
##################################
##HINT: <b>Name</b> Buddha Ribbon SMA.\n<b>Build</b> b25\n<b>Info</b> Plots 3 SMA Ribbons. 20-21sma, 50-55sma, 200-233sma, 365-377sma.
##  START  CODE  ##
declare upper;

##Global Color
DefineGlobalColor( "sma 20", Color.RED);
DefineGlobalColor( "sma 21", Color.DARK_RED);
DefineGlobalColor( "sma 50", Color.CYAN);
DefineGlobalColor( "sma 55", Color.BLUE);
DefineGlobalColor( "sma 200", Color.YELLOW);
DefineGlobalColor( "sma 233", Color.DARK_ORANGE);
DefineGlobalColor( "sma 365", Color.MAGENTA);
DefineGlobalColor( "sma 377", Color.PLUM);
DefineGlobalColor( "Up Arrow", Color.UPTICK);
DefineGlobalColor( "Down Arrow", Color.DOWNTICK);

##Input
input Alerts = yes;
##START
def C = close;
##
def Displace = 0;
def BarsBack = 0;

##Plot
plot sma20 = MovingAverage( AverageType.SIMPLE, C[-Displace], 20);
    sma20.SetDefaultColor( GlobalColor( "sma 20"));

plot sma21 = MovingAverage( AverageType.SIMPLE, C[-Displace], 21);
    sma21.SetDefaultColor( GlobalColor("sma 21"));

plot sma50 = MovingAverage( AverageType.SIMPLE, C[-Displace], 50);
    sma50.SetDefaultColor( GlobalColor( "sma 50"));

plot sma55 = MovingAverage( AverageType.SIMPLE, C[-Displace], 55);
    sma55.SetDefaultColor( GlobalColor( "sma 55"));

plot sma200 = MovingAverage( AverageType.SIMPLE, C[-Displace], 200);
    sma200.SetDefaultColor( GlobalColor( "sma 200"));

plot sma233 = MovingAverage( AverageType.SIMPLE, C[-Displace], 233);
    sma233.SetDefaultColor( GlobalColor( "sma 233"));

plot sma365 = MovingAverage( AverageType.SIMPLE, C[-Displace], 365);
    sma365.SetDefaultColor( GlobalColor( "sma 365"));

plot sma377 = MovingAverage( AverageType.SIMPLE, C[-Displace], 377);
    sma377.SetDefaultColor( GlobalColor( "sma 377"));

# Extends the SMA right.
def  sma20Prev = if !IsNaN(sma20) and IsNaN(sma20[-1]) then sma20 else sma20Prev[1];
plot sma20Extend = if isNaN(sma20[-BarsBack]) then sma20Prev[-BarsBack] else Double.NaN;
    sma20Extend.setDefaultColor( GlobalColor( "sma 20"));
    sma20Extend.SetStyle(Curve.FIRM);
    sma20Extend.SetLineWeight(1);
    sma20Extend.hideTitle();
    sma20Extend.hideBubble();

def  sma21Prev = if !IsNaN(sma21) and IsNaN(sma21[-1]) then sma21 else sma21Prev[1];
plot sma21Extend = if isNaN(sma21[-BarsBack]) then sma21Prev[-BarsBack] else Double.NaN;
    sma21Extend.setDefaultColor(GlobalColor( "sma 21"));
    sma21Extend.SetStyle(Curve.FIRM);
    sma21Extend.SetLineWeight(1);
    sma21Extend.hideTitle();
    sma21Extend.hideBubble();

def  sma50Prev = if !IsNaN(sma50) and IsNaN(sma50[-1]) then sma50 else sma50Prev[1];
plot sma50Extend = if isNaN(sma50[-BarsBack]) then sma50Prev[-BarsBack] else Double.NaN;
    sma50Extend.setDefaultColor( GlobalColor( "sma 50"));
    sma50Extend.SetStyle(Curve.FIRM);
    sma50Extend.SetLineWeight(1);
    sma50Extend.hideTitle();
    sma50Extend.hideBubble();
    
def  sma55Prev = if !IsNaN(sma55) and IsNaN(sma55[-1]) then sma55 else sma55Prev[1];
plot sma55Extend = if isNaN(sma55[-BarsBack]) then sma55Prev[-BarsBack] else Double.NaN;
    sma55Extend.setDefaultColor(GlobalColor( "sma 55"));
    sma55Extend.SetStyle(Curve.FIRM);
    sma55Extend.SetLineWeight(1);
    sma55Extend.hideTitle();
    sma55Extend.hideBubble();

def  sma200Prev = if !IsNaN(sma200) and IsNaN(sma200[-1]) then sma200 else sma200Prev[1];
plot sma200Extend = if isNaN(sma200[-BarsBack]) then sma200Prev[-BarsBack] else Double.NaN;
    sma200Extend.setDefaultColor( GlobalColor( "sma 200"));
    sma200Extend.SetStyle(Curve.FIRM);
    sma200Extend.SetLineWeight(1);
    sma200Extend.hideTitle();
    sma200Extend.hideBubble();

def  sma233Prev = if !IsNaN(sma233) and IsNaN(sma233[-1]) then sma233 else sma233Prev[1];
plot sma233Extend = if isNaN(sma233[-BarsBack]) then sma233Prev[-BarsBack] else Double.NaN;
    sma233Extend.setDefaultColor(GlobalColor( "sma 233"));
    sma233Extend.SetStyle(Curve.FIRM);
    sma233Extend.SetLineWeight(1);
    sma233Extend.hideTitle();
    sma233Extend.hideBubble();

def  sma365Prev = if !IsNaN(sma365) and IsNaN(sma365[-1]) then sma365 else sma365Prev[1];
plot sma365Extend = if isNaN(sma365[-BarsBack]) then sma365Prev[-BarsBack] else Double.NaN;
    sma365Extend.setDefaultColor(GlobalColor( "sma 365"));
    sma365Extend.SetStyle(Curve.FIRM);
    sma365Extend.SetLineWeight(1);
    sma365Extend.hideTitle();
    sma365Extend.hideBubble();

def  sma377Prev = if !IsNaN(sma377) and IsNaN(sma377[-1]) then sma377 else sma377Prev[1];
plot sma377Extend = if isNaN(sma377[-BarsBack]) then sma377Prev[-BarsBack] else Double.NaN;
    sma377Extend.setDefaultColor(GlobalColor( "sma 377"));
    sma377Extend.SetStyle(Curve.FIRM);
    sma377Extend.SetLineWeight(1);
    sma377Extend.hideTitle();
    sma377Extend.hideBubble();

##Cloud
AddCloud( sma20, sma21,  GlobalColor( "sma 20"),  GlobalColor( "sma 21"));
AddCloud( sma50, sma55,  GlobalColor( "sma 50"),  GlobalColor( "sma 55"));
AddCloud( sma200, sma233,  GlobalColor( "sma 200"),  GlobalColor( "sma 233"));
AddCloud( sma365, sma377,  GlobalColor( "sma 365"),  GlobalColor( "sma 377"));

# Extends the cloud right.
AddCloud( sma20Extend, sma21Extend, GlobalColor( "sma 20"), GlobalColor( "sma 21"));
AddCloud( sma50Extend, sma55Extend, GlobalColor( "sma 50"), GlobalColor( "sma 55"));
AddCloud( sma200Extend, sma233Extend, GlobalColor( "sma 200"), GlobalColor( "sma 233"));
AddCloud( sma365Extend, sma377Extend, GlobalColor( "sma 365"), GlobalColor( "sma 377"));

##Up/Down Arrows
plot Arrow_01 = Crosses( sma20, sma200, CrossingDirection.ABOVE);
    Arrow_01.SetDefaultColor(GlobalColor( "Up Arrow"));
    Arrow_01.SetPaintingStrategy(PaintingStrategy.BOOLEAN_WEDGE_UP);
    Arrow_01.hideTitle();

plot Arrow_02 = Crosses( sma21, sma233, CrossingDirection.ABOVE);
    Arrow_02.SetDefaultColor(GlobalColor( "Up Arrow"));
    Arrow_02.SetPaintingStrategy(PaintingStrategy.BOOLEAN_WEDGE_UP);
    Arrow_02.hideTitle();

plot Arrow_03 = Crosses( sma20, sma200, CrossingDirection.BELOW);
    Arrow_03.SetDefaultColor(GlobalColor( "Down Arrow"));
    Arrow_03.SetPaintingStrategy(PaintingStrategy.BOOLEAN_WEDGE_DOWN);
    Arrow_03.hideTitle();

plot Arrow_04 = Crosses( sma21, sma233, CrossingDirection.BELOW);
    Arrow_04.SetDefaultColor(GlobalColor( "Down Arrow"));
    Arrow_04.SetPaintingStrategy(PaintingStrategy.BOOLEAN_WEDGE_DOWN);
    Arrow_04.hideTitle();

##Alert
Alert( Alerts and Crosses( sma20, sma200, CrossingDirection.ABOVE), "20 Above 200", Alert.BAR, Sound.Bell);
Alert( Alerts and Crosses( sma21, sma233, CrossingDirection.ABOVE), "21 Above 233", Alert.BAR, Sound.Bell);
Alert( Alerts and Crosses( sma20, sma200, CrossingDirection.BELOW), "20 Under 200", Alert.BAR, Sound.Bell);
Alert( Alerts and Crosses( sma21, sma233, CrossingDirection.BELOW), "21 Under 233", Alert.BAR, Sound.Bell);
##  END  CODE  ##